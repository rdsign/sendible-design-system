import { useContext } from "react";
import { StateContext } from "../../../common/StateContext.js";
import actions from "../../../common/actions.js";
import { ContentListItem } from '@rdsign/sendible-design-system';
import { ContentList } from './messageList.styles';

export default function MessageList({ messages }) {
  const { dispatch } = useContext(StateContext);

  return (
    <ContentList data-testid="message-list" className="wrapper">
      {messages.map(({ date, time, message, id }) => (
        <ContentListItem
          key={id}
          edit={() => dispatch({ type: actions.OPEN_MESSAGE_MODAL, data: id })}
          exclude={() => dispatch({ type: actions.DELETE_MESSAGE, data: id })}
          message={message}
          socialMedia="twitter"
          scheduledDate={date}
          scheduledTime={time}
        />
      ))}
    </ContentList>
  );
}
