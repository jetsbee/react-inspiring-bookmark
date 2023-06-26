import {
  StyledTextInput,
  StyledSubmitInput,
  StyledForm,
} from "./BookSearchForm.styled";

const BookSearchForm = () => {
  return (
    <StyledForm>
      <StyledTextInput name="searchBook" placeholder="Search for books..." />
      <StyledSubmitInput value="BookSearch" />
    </StyledForm>
  );
};

export default BookSearchForm;
