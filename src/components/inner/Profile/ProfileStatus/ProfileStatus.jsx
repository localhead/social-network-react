import React from "react";
import {
  StatusText,
  StyledInput,
  StyledProfileStatusContainer,
} from "./styles";

export class ProfileStatus extends React.Component {
  // here is local state. Do not has common with Global Redux State
  state = {
    editMode: false,
    status: this.props.profileStatus,
  };

  componentDidMount() {
    console.log(this.props);
  }

  getStatus() {
    this.props.getUserStatus();
  }

  activateStatusEdit() {
    // setState - method which has React.Component
    this.setState({
      editMode: true,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // this method is called every time rerender Happens in this class component
    console.log(prevProps, "/", prevState);

    if (prevProps.profileStatus !== prevState.status) {
      this.setState({
        status: this.props.profileStatus,
      });
    }
  }

  deactivateStatusEdit() {
    this.setState({
      editMode: false,
    });
  }

  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });

    this.props.setUserStatus(e.currentTarget.value);
    this.getStatus();
  };

  render() {
    return (
      <StyledProfileStatusContainer>
        {!this.state.editMode && (
          <StatusText onDoubleClick={this.activateStatusEdit.bind(this)}>
            {this.props.profileStatus}
          </StatusText>
        )}
        {this.state.editMode && (
          <StyledInput
            autoFocus
            onChange={this.onChangeStatus}
            onBlur={this.deactivateStatusEdit.bind(this)}
            value={this.state.status}
          ></StyledInput>
        )}
      </StyledProfileStatusContainer>
    );
  }
}
