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
  it("should render correctly", () => {
    const { component, field, button } = setup({});
    expect(component).toBeInTheDocument();
    expect(field).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should NOT call onSubmitClick if the field is empty", () => {
    const onSubmitClick = jest.fn();
    const { button } = setup({ onSubmitClick });

    // On simule le clic sur le bouton vide
    fireEvent.click(button);

    // Le test passe si la fonction n'a PAS été appelée (comportement normal)
    expect(onSubmitClick).not.toHaveBeenCalled();
  });
});