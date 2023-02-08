import React from "react";
import { StyledProfileStatusContainer } from "./ProfileStatusStyles";

export class ProfileStatus extends React.Component {
  // here is local state. Do not has common with Global Redux State
  state = {
    editMode: true,
  };

  activateStatusEdit() {
    // setState - method which has React.Component
    this.setState({
      editMode: true,
    });
  }

  deactivateStatusEdit() {
    // setState - method which has React.Component
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <StyledProfileStatusContainer>
        {!this.state.editMode && (
          <div onDoubleClick={this.activateStatusEdit.bind(this)}>
            {this.props.aboutMe}
          </div>
        )}
        {this.state.editMode && (
          <input
            autoFocus
            onBlur={this.deactivateStatusEdit.bind(this)}
            value={this.props.aboutMe}
          ></input>
        )}
      </StyledProfileStatusContainer>
    );
  }
}
