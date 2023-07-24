import { Canvas, sleep } from "@/test-utils";
import { expect } from "@storybook/jest";
import { fireEvent, waitFor } from "@storybook/testing-library";

export const clickBookmarkStar_EmptyBookmark_BookmarkCounterEqualToOne = async (
  canvas: Canvas
) => {
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
