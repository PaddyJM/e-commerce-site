import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import Dropdown from './Dropdown'

console.log = jest.fn();

it("renders a dropdown with the correct classes and options", () => {
    render(<Dropdown className="countries">
        <option>Netherlands</option>
        <option>Belgium</option>
        <option>France</option>
    </Dropdown>)
    expect(screen.getByRole('combobox').classList.contains('ui-dropdown')).toBeTruthy();
    expect(screen.getByText("Netherlands")).toBeTruthy()
    expect(screen.getByText("Belgium")).toBeTruthy()
    expect(screen.getByText("France")).toBeTruthy()
})

it("logs the correct message when clicked", () => {
    render(<Dropdown className="countries">
        <option>Netherlands</option>
        <option>Belgium</option>
        <option>France</option>
    </Dropdown>)

    const dropdown = screen.getByRole("combobox")
    fireEvent.change(dropdown)
    expect(console.log).toHaveBeenCalledWith("Selection from \"countries\" has changed")
})