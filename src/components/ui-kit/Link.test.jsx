import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link'

it('Button', () => {
    render(<Link disabled={false}>Test Button</Link>)
    expect(screen.getByRole('link').classList.contains('ui-link')).toBeTruthy()
    expect(screen.queryByRole('link').disabled).toBeFalsy()
})