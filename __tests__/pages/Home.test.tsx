import {render, screen} from "@testing-library/react";
import {Home} from "../../src/pages/Home";

it("should render home page title", () => {
   render(<Home />);
   expect(screen.getByText("Accueil")).toBeInTheDocument();
});