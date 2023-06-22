
export type FieldValidatorType = (value:string)=> string | undefined;

export const required:FieldValidatorType = (value) => {
    if(value) {
        return undefined;
    };
    return 'Put your message'
}


export const maxLengthCreator = (maxLength:number):FieldValidatorType => (value) => {
    if(value && value.length > maxLength) {
        return `Maximal count symbols cant will be more ${maxLength}`
    }
    return undefined
};













// export const emailErr = (value) => {
//     debugger
//     if(value.toString().search('@mail') || value.toString().search('@gmail')) {
//         return undefined;
//     };
//     return 'Its not email'
// }