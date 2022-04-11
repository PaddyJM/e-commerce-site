import React from "react";
import clsx from "clsx";

export default function Input(props) {
    let inputType = props.type;
    if (!inputType){
        inputType = "text";
    }
    const { children, className, ...rest } = props;
    const classes = clsx('ui-input', className)
    return <input className={classes} type={inputType} {...rest} />;
}