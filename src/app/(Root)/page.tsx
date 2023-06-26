import MainHeadingView from "@/components/MainHeadingView/MainHeadingView";
import BookList from "./BookList";
import { HydrateBookList } from "@/utils/hydrators";
import { StyledMain } from "./page.styled";

const Root = () => {
  return (
    <StyledMain>
      <MainHeadingView>Hello, Inspiring bookmark!</MainHeadingView>
      <HydrateBookList>
        <BookList />
      </HydrateBookList>
    </StyledMain>
  );
};

export default Root;
