import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Product from "./Product"

it("renders a widget with a title, description, image and plus/minus buttons", () => {
    const details = {
        name: "test name",
        description: "test description",
        image: "www.test-image.com",
        altText: "test image"
    }
    render(<Product details={details}/>)

    expect(screen.getByText('test name')).toBeInTheDocument()
    expect(screen.getByText('test description')).toBeInTheDocument()
    expect(screen.getByAltText('test image').src).toContain("www.test-image.com")
    expect(screen.getAllByRole('button').find(button => button.textContent === '+')).toBeInTheDocument()
    expect(screen.getAllByRole('button').find(button => button.textContent === '-')).toBeInTheDocument()
})

it("increments the order when the plus button is clicked", () => {
    const details = {
        name: "test name",
        description: "test description",
        image: "www.test-image.com",
        altText: "test image"
    }
    render(<Product details={details}/>)

    const plusButton = screen.getAllByRole('button').find(button => button.textContent === '+')

    fireEvent.click(plusButton)
    
    expect(screen.getByText('1')).toBeInTheDocument()
})

it("decrements the order when the minus button is clicked", () => {
    const details = {
        name: "test name",
        description: "test description",
        image: "www.test-image.com",
        altText: "test image"
    }
    render(<Product details={details}/>)

    const plusButton = screen.getAllByRole('button').find(button => button.textContent === '+')
    const minusButton = screen.getAllByRole('button').find(button => button.textContent === '-')

    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    fireEvent.click(minusButton)

    expect(screen.getByText('2')).toBeInTheDocument()
})

it("does not decrement the order below 0", () => {
    const details = {
        name: "test name",
        description: "test description",
        image: "www.test-image.com",
        altText: "test image"
    }
    render(<Product details={details}/>)

    const minusButton = screen.getAllByRole('button').find(button => button.textContent === '-')

    fireEvent.click(minusButton)

    expect(screen.getByText('0')).toBeInTheDocument()
})