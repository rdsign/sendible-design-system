import { createContext, useReducer, useEffect } from "react";
import localStorage from "./localStorage.js";
import { v4 as uuidv4 } from "uuid";
import actions from "./actions.js";

const StateContext = createContext();

const { getLocalStorageData, setLocalStorageData } = localStorage(
  "messages",
  {}
);

// we only fetch from localstorage at the start, later we work with data from state
const storedMessages = getLocalStorageData();

function StateProvider({ children }) {
  const reducer = (state, action) => {
    const cases = {
      [actions.ADD_MESSAGE]: (message) => {
        const id = message.id || uuidv4();
        return {
          ...state,
          messages: {
            ...state.messages,
            [id]: {
              ...message,
              id,
            },
          },
        };
      },
      [actions.DELETE_MESSAGE]: (id) => {
        const newMessages = { ...state.messages };
        delete newMessages[id];
        return {
          ...state,
          messages: newMessages,
        };
      },
      [actions.OPEN_MESSAGE_MODAL]: (id) => {
        if (id) {
          return {
            ...state,
            showMessageModal: true,
            editMessageId: id,
          }
        }
        return {
          ...state,
          showMessageModal: true,
        }
      },
      [actions.CLOSE_MESSAGE_MODAL]: () => ({
        ...state,
        showMessageModal: false,
        editMessageId: null,
      }),
    };
    return cases[action.type](action.data);
  };
  const initialState = {
    messages: storedMessages,
    showMessageModal: false,
    editMessageId: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // update localstorage when messages change only
  useEffect(() => setLocalStorageData(state.messages), [state.messages]);

  const { Provider } = StateContext;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}
export { StateContext, StateProvider };