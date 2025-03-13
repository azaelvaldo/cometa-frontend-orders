import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

test("Muestra título 'Estado de la Orden'", async () => {
    render(<Home />);
    expect(await screen.getByText("Cargando...")).toBeInTheDocument();
});