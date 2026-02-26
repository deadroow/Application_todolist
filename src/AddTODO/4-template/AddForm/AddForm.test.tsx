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
    it("FORCE FAIL : Test de blocage du déploiement", () => {
      const onSubmitClick = jest.fn();
      const { button } = setup({ onSubmitClick: onSubmitClick });

      // On force l'échec brutalement ici
      // Cette commande arrête le test et renvoie une erreur critique
      throw new Error("ÉCHEC VOLONTAIRE : Le pipeline doit s'arrêter ici.");
      
      // Le code ci-dessous ne sera même pas lu
      fireEvent.click(button);
    });
  });
});