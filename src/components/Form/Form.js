import React from 'react'
import Input from './Input'
import Select from './Select'
import './form.css'

const Form = (props) => {
    console.log(props)

    /*
    if(props.type === "text"){
        return(
            <Input input = {props}/>
        );
    } else if(props.type === "select"){
        return(
            <Select select = {props}/>
        );
    } 
    */
    
    let placeHolderText = ""

    if(props.placeHolder){
        placeHolderText = props.placeHolder;
    } else if(props.label){
        placeHolderText = props.label
    } 
    
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} name={props.name} id={props.id} className={props.size} placeholder={placeHolderText}/>
        </div>
    );
    
}

export default Form;



