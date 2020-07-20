import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import Select from './Select';
import Counter from './Counter'


let colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange']

storiesOf('Form', module)
    .add('Email Small', () => <Input type="email" name="email" label="Email" id="email" size="small" placeHolder="Email"/>) 
    .add('Email Medium', () => <Input type="email" name="email" label="Email" id="email" size="medium"/>) 
    .add('Email Large', () => <Input type="email" name="email" label="Email" id="email" size="large" placeHolder="Email"/>) 
    .add('Select Large', () => <Select type="select" name="colors" content={colors} size="large" outline/>) 
    .add('Select Medium', () => <Select type="select" name="colors" content={colors} size="medium" outline/>) 
    .add('Select Small', () => <Select type="select" name="colors" content={colors} size="small" outline/>) 
    .add('Select Large Fill', () => <Select type="select" name="colors" content={colors} size="large" fill/>) 
    .add('Select Medium Fill', () => <Select type="select" name="colors" content={colors} size="medium" fill/>) 
    .add('Select Small Fill', () => <Select type="select" name="colors" content={colors} size="small" fill/>) 
    .add('Counter', () => <Counter min="1" max="100" setp="1" value="1"/>)


  
   
