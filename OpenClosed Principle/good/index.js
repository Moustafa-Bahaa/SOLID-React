/**Open-Closed Principle (OCP)
 * The OCP states that a class or component should be open for extension but closed for modification
 * This means that the behavior of a component should be able to be extended without modifying its source code.
 * In React, this can be achieved by using props to pass data and functions between components.
 * This allows for easier customization and reusability of components without modifying their source code.
 */

// Example of a reusable Button component that can be customized with props

import React from 'react';

const Button = ({ text, color, onClick }) => (
 <button style={{ backgroundColor: color }} onClick={onClick}>
   {text}
 </button>
);

export default Button;