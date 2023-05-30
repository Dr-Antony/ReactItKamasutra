export const required = value => {
    if(value) {
        return undefined;
    };
    return 'Put your message'
}
// export const emailErr = (value) => {
//     debugger
//     if(value.toString().search('@mail') || value.toString().search('@gmail')) {
//         return undefined;
//     };
//     return 'Its not email'
// }

export const maxLengthCreator = (maxLength) => (value) => {
    if(value && value.length > maxLength) {
        return `Maximal count symbols cant will be more ${maxLength}`
    }
    return undefined
};