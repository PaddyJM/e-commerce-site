import React from "react";
import clsx from "clsx";

export default function Dropdown(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("ui-dropdown", className)
    return <select className={classes} onChange={() => console.log(`Selection from "${className}" has changed`)} {...rest}>{children}</select>
}