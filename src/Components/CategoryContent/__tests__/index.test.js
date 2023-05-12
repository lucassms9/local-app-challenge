import { render, screen } from "@testing-library/react";
import CategoryContent from "../index";

const handleNomineeSelect = jest.fn();
const selectedNomimees = jest.fn();

const categories = [
  {
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
  },
  {
    id: "best-visual-effects",
    items: [
      {
        title: "Tenet",
        photoUrL:
          "https://variety.com/wp-content/uploads/2020/12/tenet_ver7.jpg",
        id: "tenet",
      },
    ],
    title: "Best Visual Effects",
  },
];

describe("CategoryContent", () => {
  it("should be able to render category section", () => {
    render(
      <CategoryContent
        handleNomineeSelect={handleNomineeSelect}
        selectedNomimees={selectedNomimees}
        categories={categories}
      />
    );

    const categoriesElement = screen.queryAllByRole("heading", { level: 2 });
    const nomineesElement = screen.queryAllByRole("heading", { level: 3 });

    expect(categoriesElement).toHaveLength(2);
    expect(nomineesElement).toHaveLength(2);
  });
});
