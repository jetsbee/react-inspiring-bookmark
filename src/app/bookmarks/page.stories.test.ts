import { Canvas, sleep } from "@/test-utils";
import { expect } from "@storybook/jest";
import { fireEvent, waitFor, within } from "@storybook/testing-library";

export const clickBookmarkStar_TwoBooksMarked_OneBookInBookmarkList = async (
  canvas: Canvas
) => {
  await sleep(600);
  const bookList = canvas.getByRole("list");
  expect(bookList.children).toHaveLength(2);

  await sleep(400);
  await waitFor(async () => {
    const bookmarkButtons = canvas.getAllByLabelText("Bookmark", {
      selector: "button",
    });
    await fireEvent.click(bookmarkButtons[1]);
  });

  await sleep(400);
  await waitFor(async () => {
    const confirmButton = within(document.body).getByRole("button", {
      name: "Confirm",
    });
    await fireEvent.click(confirmButton);
  });

  await waitFor(() => expect(bookList.children).toHaveLength(1));
};
