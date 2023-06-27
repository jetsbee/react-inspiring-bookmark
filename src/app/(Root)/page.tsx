import NYTimesBookList from "./(BookList)/NYTimesBookList";
import { HydrateBookList } from "@/utils/hydrators";
import { StyledMain } from "@/components/StyledPage/page.styled";
import BookSearchForm from "@/components/BookSearchForm/BookSearchForm";

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
