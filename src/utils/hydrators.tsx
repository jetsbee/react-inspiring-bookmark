import getQueryClient from "@/utils/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { prefetchBestsellerBooksQuery } from "@/state/book/bestSellers/ssr";

interface Props {
  children: React.ReactNode;
}

const getDehydratedState = async (prefetchQuery: () => Promise<void>) => {
  const queryClient = getQueryClient();
  await prefetchQuery();
  const dehydratedState = dehydrate(queryClient);

  return dehydratedState;
};

export const HydrateBookList = async ({ children }: Props) => {
  const dehydratedState = await getDehydratedState(
    prefetchBestsellerBooksQuery
  );

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
