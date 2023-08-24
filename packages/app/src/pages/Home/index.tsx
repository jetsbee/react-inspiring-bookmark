import { NYTimesBookList } from "../../components/NYTimesBookList";
import { HydrateBookList } from "../../utils/hydrators";

export const HomeScreen = () => {
  return (
    <HydrateBookList>
      <NYTimesBookList />
    </HydrateBookList>
  );
};
