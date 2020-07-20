import React from 'react'
import './form.css'

const Select = (props) => {

    let classList = [];
    let options = props.content.map((element) =>
    <option value={element} key={element}>{element}</option>,
    );

   console.log(options) 

   if(props.size === "large"){
    classList.push("select-large")
   }

   if(props.size === "medium"){
    classList.push("select-medium")
   }

   if(props.size === "small"){
    classList.push("select-small")
   }

   if(props.fill){
    classList.push("select-fill")  
   }

   if(props.outline){
    classList.push("select-outline")  
   }

   
    return (
        <select id={props.name} name={props.name} className={classList.join(" ")}>
        { options }
        </select>
    );
}
export default Select;
