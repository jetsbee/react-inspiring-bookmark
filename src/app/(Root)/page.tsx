import BookSearchForm from "@/components/BookSearchForm/BookSearchForm";
import { StyledMain } from "@/components/StyledPage/page.styled";
import { HydrateBookList } from "@/utils/hydrators";
import NYTimesBookList from "./(BookList)/NYTimesBookList";

const Root = () => {
  return (
    <StyledMain>
      <BookSearchForm />
      <HydrateBookList>
        <NYTimesBookList />
      </HydrateBookList>
    </StyledMain>
  );
};

export default Root;
