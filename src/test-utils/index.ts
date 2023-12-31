import { within } from "@storybook/testing-library";
import { Queries, queries } from "@testing-library/dom";

export type Canvas<
  QueriesToBind extends Queries = typeof queries,
  // Extra type parameter required for reassignment.
  T extends QueriesToBind = QueriesToBind
> = ReturnType<typeof within<T>>;
// ref. getQueriesForElement() in @testing-library/dom/types/get-queries-for-element.d.ts

// Function to emulate pausing between interactions
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
