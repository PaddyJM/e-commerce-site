import React from 'react';
import { mount } from '@cypress/react';
import App from '../../src/App';

it('renders greeting, input fields and login button', () => {
  mount(<App />);
  cy.get('h1').contains("Hello, Stranger!")
  cy.get('h2').contains('Please login');
  cy.get('.username')
  cy.get('.password')
  cy.get('button').contains('Login')
});

it('changes greeting based on username input', () => {
    mount(<App />);
    cy.get('.username').type('Patrick')
    cy.get('h1').contains("Hello, Patrick!")
})

it('renders the store front, wallet and logout widgets when the login button is clicked', () => {
    mount(<App />);
    cy.get('button').contains('Login').click()
  });