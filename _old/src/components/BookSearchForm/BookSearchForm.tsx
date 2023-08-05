"use client";

import {
  StyledForm,
  StyledSubmitInput,
  StyledTextInput,
} from "./BookSearchForm.styled";
import useSearchForm from "./hooks/useSearchForm";

const BookSearchForm = () => {
  const { handleFormSubmit, textInputRef } = useSearchForm({
    url: "/search",
    paramName: "keywords",
  });

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledTextInput placeholder="Find more books..." ref={textInputRef} />
      <StyledSubmitInput value="BookSearch" />
    </StyledForm>
  );
};

export default BookSearchForm;
