import React from 'react'
import './form.css'

const Checkbox = (props) => {
    console.log(props)

    return(
        <div className="checkboxContainer">
            <span class="test"><input type={props.type} name={props.name} /></span>
            <input type={props.type} name={props.name} checked/>
        </div>
    );
}
export default Checkbox;
