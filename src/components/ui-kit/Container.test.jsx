/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './Container'
import Button from './Button'
import Link from './Link'
import Input from './Input'

it('Button', () => {
    const { container } = render(<Container id="ui-container" disabled={false}>
        <Input>Test Input</Input>
        <Button>Test Button</Button>
        <Link>Test Link</Link>
    </Container>)
    expect(container.firstChild.classList.contains('ui-container')).toBeTruthy()
    expect(container.firstChild.firstChild.classList.contains('ui-input')).toBeTruthy()
    expect(container.firstChild.childNodes.length).toBe(3);
})