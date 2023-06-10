import React from "react";
import style from './FormsControl.module.css'
import { Field } from "redux-form";


const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <div>{props.children}</div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}






export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
};
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    debugger
    <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/> {text}
    </div>
}










// export const Textarea = ({ input, meta, ...props }) => {
//     debugger
//     const hasError = meta.error && meta.touched;
//     return (
//         <div className={style.formControl + " " + (hasError ? style.error : '')}>
//             <div><textarea {...input} {...props} /></div>
//             <div>{hasError && <span>{meta.error}</span>}</div>
//         </div>
//     )
// };

// export const Input = ({ input, meta, ...props }) => {
//     debugger
//     const hasError = meta.error && meta.touched;
//     return (
//         <div className={style.formControl + " " + (hasError ? style.error : '')}>
//             <div><input {...input} {...props} /></div>
//             <div>{hasError && <span>{meta.error}</span>}</div>
//         </div>
//     )
// };