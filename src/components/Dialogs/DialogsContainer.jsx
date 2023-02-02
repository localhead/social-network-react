import { withAuthRedirect } from "highOrderComponents/withAuthRedirect";
import { connect } from "react-redux";
import { getAuthUserThunk } from "redux/auth-reducer";

import { addMessageToDialog, updateMessageText } from "redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";

/* export const DialogsContainer = (props) => {
  const dispatch = props.dispatch;

  const onSendMessage = (text) => {
    dispatch(addMessageToDialog(text));
  };

  const onMessageChange = (text) => {
    dispatch(updateMessageText(text));
  };

  return (
    <Dialogs
      onMessageChange={onMessageChange}
      onSendMessage={onSendMessage}
      props={props.state}
    />
  );
}; */

let mapStateToProps = (state) => {
  return {
    props: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateMessageText(text));
    },
    onSendMessage: (text) => {
      dispatch(addMessageToDialog(text));
    },
    authorize: () => {
      dispatch(getAuthUserThunk());
    },
  };
};

let AuthRedirectContainer = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectContainer);
