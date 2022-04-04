import React from 'react';
import { fireEvent, render, screen, within } from "@testing-library/react"
import Wallet from './Wallet'

it("renders a wallet widget with title, withdraw button, deposit button and reset button", () => {
    render(<Wallet />)
    const wallet = screen.getByTestId("wallet")
    expect(within(wallet).getByText("Wallet:")).toBeInTheDocument()
    expect(within(wallet).getAllByRole("button").find(button => button.textContent === "Deposit 10")).toBeInTheDocument()
    expect(within(wallet).getAllByRole("button").find(button => button.textContent === "Withdraw 10")).toBeInTheDocument()
    expect(within(wallet).getAllByRole("button").find(button => button.textContent === "Reset")).toBeInTheDocument()
})

it("Adds 10 to the total when 'Deposit 10' is clicked, and updates transactions", () => {
    render(<Wallet />)
    const wallet = screen.getByTestId("wallet")
    const deposit = within(wallet).getAllByRole("button").find(button => button.textContent === "Deposit 10")

    fireEvent.click(deposit)

    expect(within(wallet).getByText('Total: 10')).toBeInTheDocument()
    expect(within(wallet).getByText('You added 10')).toBeInTheDocument()
})

it("removes 10 from the total when 'Deposit 10' is clicked", () => {
    render(<Wallet />)
    const wallet = screen.getByTestId("wallet")
    const deposit = within(wallet).getAllByRole("button").find(button => button.textContent === "Deposit 10")
    const withdraw = within(wallet).getAllByRole("button").find(button => button.textContent === "Withdraw 10")

    fireEvent.click(deposit)
    fireEvent.click(deposit)
    fireEvent.click(deposit)
    fireEvent.click(withdraw)

    expect(within(wallet).getByText('Total: 20')).toBeInTheDocument()
    expect(within(wallet).getByText('You withdrew 10')).toBeInTheDocument()
})
