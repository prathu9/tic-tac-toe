import React from 'react';
import Button from './Button';

const Square = (props)=>{
    return (
        <Button className = "square"
                onClick = {props.onClick}
                value = {props.value}
        />
    );
}

export default Square;