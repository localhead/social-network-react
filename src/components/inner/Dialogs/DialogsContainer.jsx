import { withAuthRedirect } from "components/highOrder/withAuthRedirect";
import { connect } from "react-redux";
import { getAuthUserThunk } from "redux/auth-reducer";

import { addMessageToDialog } from "redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    props: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (text) => {
      dispatch(addMessageToDialog(text));
    },
    authorize: () => {
      dispatch(getAuthUserThunk());
    },
  };
};

let AuthRedirectContainer = withAuthRedirect(Dialogs);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectContainer);
/* 




*/
// old version
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
