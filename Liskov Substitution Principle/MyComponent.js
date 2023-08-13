/**
 * Liskov Substitution Principle (LSP)
 * The LSP states that a subclass should be able to be substituted for its parent class without changing the correctness of the program.
 * In React, this means that child components should be able to replace their parent components without affecting the behavior of the application.
 * 
 * we used both the Button and LinkButton components in the same MyComponent component without any issues
 * The LinkButton component was able to replace the Button component without affecting the behavior of the program.
 */
// Example of using Button and LinkButton components
import React from 'react';
import Button from './Button';
import LinkButton from './LinkButton';

const MyComponent = () => (
 <div>
   <Button text="Click me!" onClick={() => console.log('Button clicked')} />
   <LinkButton text="Google" url="https://www.google.com" onClick={() => console.log('LinkButton clicked')} />
 </div>
);