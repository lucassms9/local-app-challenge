import { render, screen, fireEvent } from "@testing-library/react";
import Nominee from "../index";

const handleNomineeSelectMocked = jest.fn();
const selectedNomimeesMocked = jest.fn();

const category = {
  id: "best-picture",
  items: [
    {
      id: "nomadland",
      photoUrL:
        "https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg",
      title: "Nomadland",
    },
    {
      id: "the-trial-of-the-chicago-7",
      photoUrL:
        "https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg",
      title: "The Trial of the Chicago 7",
    },
  ],
  title: "Best Picture",
};

describe("Nominee", () => {
  beforeEach(() => {
    render(
      <Nominee
        handleNomineeSelect={handleNomineeSelectMocked}
        selectedNomimees={selectedNomimeesMocked}
        category={category}
        nominee={category.items[0]}
      />
    );
  });
  it("should be able to render nominee item", () => {
    const text = screen.getByText(/Nomadland/i);
    const image = screen.getByRole("img");
    const button = screen.getByText(/Select/i);

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
    );
    expect(image).toHaveAttribute("alt", "Nomadland");
  });

  it("should be able to calls handleNomineeSelect method when button is clicked", () => {
    const button = screen.getByText(/Select/i);

    fireEvent.click(button);

    expect(handleNomineeSelectMocked).toHaveBeenCalledTimes(1);
    expect(handleNomineeSelectMocked).toHaveBeenCalledWith(category.items[0]);
  });
});
