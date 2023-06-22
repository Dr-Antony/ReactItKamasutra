import React from "react";
import style from './FormsControl.module.css'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../../utils/validators/validators";


type FormControlPropsType = {
    meta: WrappedFieldMetaProps,
    children: React.ReactNode
}



const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
    const hasError = error && touched;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <div>{children}</div>
            <div>{hasError && <span>{error}</span>}</div>
        </div>
    )
}






export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    //const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
};
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    //const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
};





export function createField<FormKeysType extends string>(
    placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {},
    text = ""
) {
    return <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} /> {text}
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