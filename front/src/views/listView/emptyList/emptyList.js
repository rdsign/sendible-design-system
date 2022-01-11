import texts from "../../../common/texts.js";
import { Fragment, useContext } from "react";
import { StateContext } from "../../../common/StateContext.js";
import actions from "../../../common/actions";
import { Button, Heading, Paragraph } from '@rdsign/sendible-design-system';

export default function EmptyList() {
  const { dispatch } = useContext(StateContext);
  return (
    <Fragment>
      <div className="wrapper">
        <div style={{'margin': '4rem 0'}}>
          <Heading name="h2" size="s20">{texts["empty-list-title"]}</Heading>
          <br />
          <Paragraph>{texts["empty-list-description"]}</Paragraph>
        </div>
        <div>
          <Button
            data-testid="add-message"
            click={() => dispatch({ type: actions.OPEN_MESSAGE_MODAL })}
            icon="tweets"
            label={texts["add-message"]}
            size="large"
            variant="fill"
          />
        </div>
      </div>
    </Fragment>
  );
}
