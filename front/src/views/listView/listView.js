import { useContext } from "react";
import MessageList from "./messageList/messageList.js";
import EmptyList from "./emptyList/emptyList.js";
import { StateContext } from "../../common/StateContext";
import { validations } from "@rdsign/sendible-design-system";

export default function ListView() {
  const { state } = useContext(StateContext);

  const { parseDate, parseTime } = validations;

  const showMessageList =
    state.messages && Object.keys(state.messages).length > 0;
  
  const orderedMessages = Object.values(state.messages).sort(
      (a, b) =>
          parseDate(a.date) + parseTime(a.time) - (parseDate(b.date) + parseTime(b.time)),
  );

  return showMessageList ? (
   <MessageList messages={orderedMessages} />
  ) : (
    <EmptyList />
  );
}
