import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input'

it('Button', () => {
    render(<Input disabled={false}>Test Input</Input>)
    expect(screen.getByRole('textbox').classList.contains('ui-input')).toBeTruthy()
    expect(screen.queryByRole('textbox').disabled).toBeFalsy()
})