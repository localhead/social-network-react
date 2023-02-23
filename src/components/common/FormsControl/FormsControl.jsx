import React from "react";
import { StyledTextarea } from "./StyledFormsControl";

export const TextArea = (props) => {
  const { input, meta } = props;
  //console.log(meta);

  const isError = meta.error && meta.touched;
  return (
    <div>
      <StyledTextarea {...input} isError={isError} />
      {isError && <span>{meta.error}</span>}
    </div>
  );
};
