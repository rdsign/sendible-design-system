import ListView from "./listView/listView.js";
import { ThemeProvider } from '@rdsign/sendible-design-system';
import MessageView from "./messageView/messageView.js";
import texts from "../common/texts.js";
import actions from "../common/actions.js";
import { useContext } from "react";
import { StateContext } from "../common/StateContext.js";
import { Button, Heading } from '@rdsign/sendible-design-system';
import { Header } from './App.styles';

export default function App() {
  const { state, dispatch } = useContext(StateContext);

  return (
    <ThemeProvider>
      <Header>
        <div className="wrapper">
          <Heading size="s32">{texts["scheduled"]} <i>{texts["tweets"]}</i>.</Heading>
          <Button
            data-testid="message-list-add-message"
            click={() => dispatch({ type: actions.OPEN_MESSAGE_MODAL })}
            icon="tweets"
            label={texts["add-message"]}
            size="medium"
            variant="fill"
          />
          <Button
            data-testid="message-list-add-message"
            click={() => dispatch({ type: actions.OPEN_MESSAGE_MODAL })}
            icon="tweets"
            label={texts["add-message"]}
            size="large"
            variant="floating"
          />
        </div>
      </Header>
      <ListView />
      {state.showMessageModal && <MessageView />}
    </ThemeProvider>
  );
}
