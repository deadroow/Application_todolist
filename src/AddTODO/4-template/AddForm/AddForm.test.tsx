//********** Imports **********//
import { render, screen, fireEvent } from "@testing-library/react";
import AddForm from "./AddForm";
import { AddFormProps } from "./AddForm.types";

const setup = (props: AddFormProps) => {
  const { ...queries } = render(<AddForm {...props} />);
  return {
    component: screen.getByTestId("AddTODOFormBox"),
    field: screen.getByTestId("AddTODOFormField"),
    button: screen.getByTestId("AddTODOFormButton"),
    ...queries,
  };
};
//********** Tests **********//
describe("AddForm component", () => {
  describe("basic", () => {
    it("should render correctly", () => {
      const { component, field, button } = setup({});
      expect(component).toBeInTheDocument();
      expect(field).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});

describe("AddForm submit button", () => {
  describe("basic", () => {
    it("should NOT call the onCLick handler when field is empty", () => {
      const onSubmitClick = jest.fn();
      const { button } = setup({ onSubmitClick: onSubmitClick });
      
      // On s'assure que c'est à 0 au départ
      expect(onSubmitClick).not.toHaveBeenCalled();

      // On clique sans remplir le champ
      fireEvent.click(button);

      // Le test passe si la fonction n'a TOUJOURS PAS été appelée
      expect(onSubmitClick).not.toHaveBeenCalled(); 
    });
  });
});