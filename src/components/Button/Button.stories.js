import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button type="primary-none"  label="Do something" />) 
    .add('Primary Hover', () => <Button type="primary-hover"  label="Do Something" />) 
    .add('Primary Nobgcolor', () => <Button type="primary-nobgcolor"  label="Do Something" />) 
    .add('Primary light', () => <Button type="primary-light"  label="Do Something" />) 
    .add('Primary Large', () => <Button type="primary-none" large label="Do something" />) 
    .add('Primary Nobgcolor Large', () => <Button type="primary-nobgcolor" large label="Do Something" />) 
    .add('Primary light Large', () => <Button type="primary-light" large label="Do Something" />) 
//Icon    
    .add('Primary Icon', () => <Button type="primary-light" Icon="cart" label=" Add To Cart" />)       

//  Danger buttons  
    .add('Danger', () => <Button type="danger-none"  label="Do something" />) 
    .add('Danger Hover', () => <Button type="danger-hover"  label="Do Something" />) 
    .add('Danger Nobgcolor', () => <Button type="danger-nobgcolor"  label="Do Something" />) 
    .add('Danger light', () => <Button type="danger-light"  label="Do Something" />) 
    .add('Danger Large', () => <Button type="danger-none" large label="Do something" />) 
    .add('Danger Nobgcolor Large', () => <Button type="danger-nobgcolor" large label="Do Something" />) 
    .add('Danger light Large', () => <Button type="danger-light" large label="Do Something" />) 

//  Success buttons
    .add('Success', () => <Button type="success-none"  label="Do something" />) 
    .add('Success Hover', () => <Button type="success-hover"  label="Do Something" />) 
    .add('Success Nobgcolor', () => <Button type="success-nobgcolor"  label="Do Something" />) 
    .add('Success light', () => <Button type="success-light"  label="Do Something" />) 
    .add('Success Large', () => <Button type="success-none" large label="Do something" />) 
    .add('Success Nobgcolor Large', () => <Button type="success-nobgcolor" large label="Do Something" />) 
    .add('Success light Large', () => <Button type="success-light" large label="Do Something" />) 

//  Warning buttons
    .add('Warning', () => <Button type="warning-none"  label="Do something" />) 
    .add('Warning Hover', () => <Button type="warning-hover"  label="Do Something" />) 
    .add('Warning Nobgcolor', () => <Button type="warning-nobgcolor"  label="Do Something" />) 
    .add('Warning light', () => <Button type="warning-light"  label="Do Something" />) 
    .add('Warning Large', () => <Button type="warning-none" large label="Do something" />) 
    .add('Warning Nobgcolor Large', () => <Button type="warning-nobgcolor" large label="Do Something" />) 
    .add('Warning light Large', () => <Button type="warning-light" large label="Do Something" />)

//  Default buttons
    .add('Default', () => <Button type="default-none"  label="Do something" />) 
    .add('Default Hover', () => <Button type="default-hover"  label="Do Something" />) 
    .add('Default Nobgcolor', () => <Button type="default-nobgcolor"  label="Do Something" />) 
    .add('Default light', () => <Button type="default-light"  label="Do Something" />) 
    .add('Default Large', () => <Button type="default-none" large label="Do something" />) 
    .add('Default Nobgcolor Large', () => <Button type="default-nobgcolor" large label="Do Something" />) 
    .add('Default light Large', () => <Button type="default-light" large label="Do Something" />)








/*
storiesOf('Button', module)
    .add('Primary', () => <Button label="Primary" />) 
    .add('Danger', () => <Button type="danger" large label="Danger Large" />)
    .add('Success', () => <Button type="success" large label="Success Large" />)
    .add('Warning', () => <Button type="warning" large label="Warning Large" />)
    .add('Danger Small', () => <Button type="danger" small label="Danger Small" />)
    .add('Success Small', () => <Button type="success" small label="Success Small" />)
    .add('Warning Small', () => <Button type="warning" small label="Warning Small" />)

*/
//the argument "Button" becomes the category that story book is going to display
//adding a component - 1st argument - name of the component as listed in story book
//2nd arg - pass in a function - single line anonymous arrow function , 
//button labeled "do something" is the return object for this function 
//and gets placed in the storybook
//the prop that we are passing into button is called label and 
//the value we are giving it is "Do something"
//in button.js props.label becomes the content for the button


    /*
    .add('Primary', () => <Button type="primary"  label="Do something" />) 
    .add('Primary', () => <Button type="primary"  label="Do something" />) 
    .add('Primary', () => <Button type="primary"  label="Do something" />) 
    .add('Primary', () => <Button type="primary"  label="Do something" />) */


