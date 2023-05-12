import { render, screen, fireEvent } from "@testing-library/react";
import ContentResultsModal from "../index";

const closeMocked = jest.fn();

describe("ContentResultsModal", () => {
  beforeEach(() => {
    render(<ContentResultsModal close={closeMocked} />);
    jest.clearAllMocks();
  });

  it("should be able to render modal content with success", () => {
    const text = screen.getByText(/success!/i);
    expect(text).toBeInTheDocument();
  });

  it("should be able to calls closeMocked when close button is clicked", () => {
    const closeButton = screen.getByText(/X/i);
    fireEvent.click(closeButton);

    expect(closeMocked).toHaveBeenCalledTimes(1);
  });

  it("should be able to calls closeMocked when esc key is pressed", () => {
    const text = screen.getByText(/success!/i);

    fireEvent.keyDown(text, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });

    expect(closeMocked).toHaveBeenCalledTimes(1);
  });
});
