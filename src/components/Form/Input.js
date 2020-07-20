import React from 'react'
import './form.css'

const Input = (props) => {
    console.log(props)
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
export default Input;