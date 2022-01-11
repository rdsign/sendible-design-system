import { useContext } from "react";
import { StateContext } from "../../../common/StateContext.js";
import texts from "../../../common/texts.js";
import actions from "../../../common/actions.js";
import { ContentCreatorModal } from "@rdsign/sendible-design-system";

export default function MessageModal() {
  const { state, dispatch } = useContext(StateContext);

  const editableMessage = state.messages[state.editMessageId];

  const dt = new Date();
  dt.setHours(dt.getHours() + 24);

  const initialValues = {
    message: editableMessage?.message || '',
    date: editableMessage?.date || dt.toLocaleDateString('en-GB'),
    time: editableMessage?.time || '12:00',
  }

  const saveMessage = ({ message, date, time }) => {
    const data = {
      message, date, time
    }
    editableMessage && (data.id = editableMessage.id);
    dispatch({
      type: actions.ADD_MESSAGE,
      data: data,
    });

    closeMessageModal();
  };

  const closeMessageModal = () => {
    dispatch({ type: actions.CLOSE_MESSAGE_MODAL });
  };

  return (
    <ContentCreatorModal
      close={closeMessageModal}
      messagePlaceholder={texts["message-modal-placeholder"]}
      save={(data) => saveMessage(data)}
      saveButtonLabel="Tweet"
      timingLabel={texts["message-modal-timing-label"]}
      title={texts["message-modal-schedule"]}
      initialValues={initialValues}
    />
  );
}
