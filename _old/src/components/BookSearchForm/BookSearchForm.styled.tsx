"use client";

import styled from "@emotion/styled";
import { InputHTMLAttributes, forwardRef } from "react";

const TextInput = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref?: React.Ref<HTMLInputElement>
  ) => <input type="text" {...props} ref={ref} />
);
TextInput.displayName = "TextInput";

const SubmitInput = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input type="submit" {...props} />
);

export const StyledForm = styled.form`
  display: flex;
  max-width: 76.8rem;
  min-width: 48rem;
  margin-bottom: 4.8rem;
`;

export const StyledTextInput = styled(TextInput)`
  border-radius: 0.1rem;
  border: 0.1rem solid #d9d9d9;
  border-top: 0.1rem solid #c0c0c0;
  height: 3.6rem;
  margin-right: 1rem;
  font-size: 2.4rem;
  padding-left: 0.8rem;
  flex-grow: 1;

  &:hover {
    border-color: #a0a0a0;
  }

  &:focus {
    border-color: #d9d9d9;
    outline: none;
  }
`;

export const StyledSubmitInput = styled(SubmitInput)`
  background: url('data:image/svg+xml;charset=UTF-8,<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z" fill="%23B3672B"></path></svg>')
    no-repeat center center;
  color: transparent;
  width: 4.8rem;
  height: 3.6rem;
  cursor: pointer;

  vertical-align: top;
  background-color: #e9eff6;
  display: inline-block;
  border-radius: 0.1rem;
  border: 0.1rem solid #e9eff6;
`;
