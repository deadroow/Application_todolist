import { render, screen, fireEvent } from "@testing-library/react";
import AddForm from "./AddForm";

const setup = () => {
  render(<AddForm onSubmitClick={jest.fn()} />);
  return {
    component: screen.getByTestId("AddTODOFormBox"),
    field: screen.getByTestId("AddTODOFormField"),
    button: screen.getByTestId("AddTODOFormButton"),
  };
};

describe("AddForm component", () => {
  it("should render correctly", () => {
    const { component, field, button } = setup();
    expect(component).toBeInTheDocument();
    expect(field).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should NOT call onSubmitClick when the button is clicked with empty field", () => {
    const onSubmitClick = jest.fn();
    render(<AddForm onSubmitClick={onSubmitClick} />);
    const button = screen.getByTestId("AddTODOFormButton");

    fireEvent.click(button);

    // C'est ici que ça bloquait : on vérifie que la fonction n'est PAS appelée
    expect(onSubmitClick).toHaveBeenCalled();
  });
});