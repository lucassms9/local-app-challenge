import { render, screen } from "@testing-library/react";
import NomineeList from "../index";

const handleNomineeSelect = jest.fn();
const selectedNomimees = jest.fn();

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

const nominees = category.items;

describe("NomineeContent", () => {
  it("should be able to render Nominee content", () => {
    render(
      <NomineeList
        handleNomineeSelect={handleNomineeSelect}
        selectedNomimees={selectedNomimees}
        category={category}
        nominees={nominees}
      />
    );

    expect(screen.getByText(/Nomadland/i)).toBeInTheDocument();
    expect(screen.getByText(/The Trial of the Chicago 7/i)).toBeInTheDocument();
  });
});
