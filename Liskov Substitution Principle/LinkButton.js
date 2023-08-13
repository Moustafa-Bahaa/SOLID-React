// LinkButton component that extends Button
import React from 'react';
import Button from './Button';

const LinkButton = ({ text, url, onClick }) => (
 <Button onClick={onClick}>
   <a href={url}>{text}</a>
 </Button>
);

export default LinkButton;