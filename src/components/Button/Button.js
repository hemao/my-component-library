import React from 'react';
import "./Button.css"
import Icon from "../Icon/Icon"

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
        
        let classList = [];

        let types = ['primary', 'primary-none', 'primary-hover', 'primary-nobgcolor','primary-light',
        'danger', 'danger-none','danger-hover', 'danger-nobgcolor','danger-light',
        'success', 'success-none', 'success-hover', 'success-nobgcolor', 'success-light',
        'warning', 'warning-none', 'warning-hover', 'warning-nobgcolor', 'warning-light',
        'default', 'default-none', 'default-hover', 'default-nobgcolor', 'default-light',
        'small-light'];

        if (types.includes(props.type)) {
            classList.push(` button-${props.type}`)
            console.log("pushed" + `button-${props.type}`)
        }

        if(props.large){
            classList.push("button-large")
        }

        if(props.Icon === "cart"){
           console.log("Hello from button.js");
        }

        console.log(classList);

        /*
        if(props.hover){
            classList.push(` button-${props.type}-hover`)
        }

        if(props.large){
            classList.push("button-large")
        }

        if(props.small){
            classList.push("button-small")
        }

        if(props.outline){
            classList.push(` button-${props.type}-outline`)
        }
        */
        

     // Add another conditional statement to check for additional properties (such as large)
        // and add to the classList variable based on this condition evaluating to true
      //  if (props.large) {
      //      classList += ` button-large` // Note the spacing here since we are adding to the string!
       // }    
    //return <button className={`button-${props.type}`}>
    //return <button className={classList}>
        return <button className={classList.join(" ")}>
            <Icon icon = {props.Icon}/>
            {props.label}
        </button>
}

export default Button; 