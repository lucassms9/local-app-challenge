import { render, screen } from "@testing-library/react";
import Category from "../index";

const handleNomineeSelect = jest.fn();
const selectedNomimees = jest.fn();

const category = {
  id: "best-director",
  items: [
    {
      title: "Chloé Zhao for Nomadland",
      photoUrL:
        "https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg",
      id: "chloe-zhao",
    },
  ],
  title: "Best Director",
};

describe("Category", () => {
  it("should be able to render category with success", () => {
    render(
      <Category
        handleNomineeSelect={handleNomineeSelect}
        selectedNomimees={selectedNomimees}
        category={category}
      />
    );

    const titleElement = screen.queryAllByRole("heading", { level: 2 });
    const nomineesElement = screen.queryAllByRole("heading", { level: 3 });

    expect(titleElement).toHaveLength(1);
    expect(nomineesElement).toHaveLength(1);
  });
});
