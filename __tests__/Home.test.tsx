import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

test("Muestra título 'Estado de la Orden'", () => {
    render(<Home />);
    expect(screen.getByText("Estado de la Orden")).toBeInTheDocument();
});