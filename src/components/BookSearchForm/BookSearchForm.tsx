"use client";

import {
  StyledTextInput,
  StyledSubmitInput,
  StyledForm,
} from "./BookSearchForm.styled";
import useSearchForm from "./hooks/useSearchForm";

const BookSearchForm = () => {
  const { handleFormSubmit, textInputRef } = useSearchForm("/search");

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledTextInput placeholder="Search for books..." ref={textInputRef} />
      <StyledSubmitInput value="BookSearch" />
    </StyledForm>
  );
};

export default BookSearchForm;
