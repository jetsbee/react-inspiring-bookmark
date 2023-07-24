import { expect } from "@storybook/jest";
import { fireEvent, waitFor, within } from "@storybook/testing-library";
import { Queries, queries } from "@testing-library/dom";

export type Canvas<
  QueriesToBind extends Queries = typeof queries,
  // Extra type parameter required for reassignment.
  T extends QueriesToBind = QueriesToBind
> = ReturnType<typeof within<T>>;
// ref. getQueriesForElement() in @testing-library/dom/types/get-queries-for-element.d.ts

// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const testBookmarkStarAndBookmarkCounter = async (canvas: Canvas) => {
  await sleep(600);

  // Waits for the component to be updated based on the store
  await waitFor(async () => {
    const bookmarkButtons = canvas.getAllByLabelText("Bookmark", {
      selector: "button",
    });
    await fireEvent.click(bookmarkButtons[0]);
  });

  expect(canvas.queryByText(/\(1\)/i)).toBeInTheDocument();
};
