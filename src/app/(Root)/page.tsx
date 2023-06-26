import MainHeadingView from "@/components/MainHeadingView/MainHeadingView";
import NYTimesBookList from "./(BookList)/NYTimesBookList";
import { HydrateBookList } from "@/utils/hydrators";
import { StyledMain } from "./page.styled";
import BookSearchForm from "@/components/BookSearchForm/BookSearchForm";

const Root = () => {
  return (
    <StyledMain>
      <MainHeadingView>Hello, Inspiring bookmark!</MainHeadingView>
      <BookSearchForm />
      <HydrateBookList>
        <NYTimesBookList />
      </HydrateBookList>
    </StyledMain>
  );
};

export default Root;
