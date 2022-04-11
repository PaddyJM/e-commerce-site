import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button'

it('Button', () => {
    render(<Button disabled={false}>Test Button</Button>)
    expect(screen.getByText('Test Button')).toBeTruthy()
    expect(screen.getByText('Test Button').classList.contains('ui-button')).toBeTruthy()
    expect(screen.queryByText('Test Button').disabled).toBeFalsy()
})