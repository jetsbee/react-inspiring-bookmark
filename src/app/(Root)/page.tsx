import MainHeadingView from "@/components/MainHeadingView/MainHeadingView";
import BookList from "./BookList";
import { HydrateBookList } from "@/utils/hydrators";

const Root = () => {
  return (
    <main>
      <MainHeadingView>Hello, Inspiring bookmark!</MainHeadingView>
      <HydrateBookList>
        <BookList />
      </HydrateBookList>
    </main>
  );
};

export default Root;
