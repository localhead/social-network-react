import { ButtonOutlined } from "packages/uiKit/ButtonOutlined";
import { ButtonPrimary } from "packages/uiKit/ButtonPrimary";
import React from "react";
import {
  StatusText,
  StyledEditStatus,
  StyledInput,
  StyledProfileStatusContainer,
  StyledStaticStatus,
} from "./styles";

export class ProfileStatus extends React.Component {
  // here is local state. Do not has common with Global Redux State
  state = {
    editMode: false,
    status: this.props.profileStatus,
  };

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
    //console.log(prevProps, "/", prevState);
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
  };

  onSaveStatus() {
    this.props.setUserStatus(this.state.status);
    this.deactivateStatusEdit();
    this.getStatus();
  }

  render() {
    const authUserId = this.props.authData.id;
    const currentUserId = this.props.userId;

    return (
      <StyledProfileStatusContainer>
        {!this.state.editMode && (
          <StyledStaticStatus>
            <StatusText>{this.props.profileStatus}</StatusText>
            {authUserId === currentUserId && (
              <ButtonOutlined onClick={this.activateStatusEdit.bind(this)}>
                Изменить
              </ButtonOutlined>
            )}
          </StyledStaticStatus>
        )}
        {this.state.editMode && (
          <StyledEditStatus>
            <StyledInput
              autoFocus
              onChange={this.onChangeStatus}
              value={this.state.status}
            ></StyledInput>
            <ButtonPrimary onClick={this.onSaveStatus.bind(this)}>
              Сохранить
            </ButtonPrimary>
          </StyledEditStatus>
        )}
      </StyledProfileStatusContainer>
    );
  }
}
