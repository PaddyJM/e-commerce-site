import React from "react"
import { render, screen } from "@testing-library/react"
import StoreFront from "./StoreFront"

it("renders a list of products", () => {
    render(<StoreFront />)
    expect(screen.getByText('Cheese')).toBeInTheDocument()
    expect(screen.getByText('Milk')).toBeInTheDocument()
})