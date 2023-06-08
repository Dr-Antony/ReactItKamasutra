import React from "react"
import style from "./ProfileInfoForm.module.css"
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../../../../common/FormsControl/FormsControl";
import { required, maxLengthCreator } from "../../../../../../utils/validators/validators";



const Contact = ({ contactTitle, contactValue }) => {
    debugger
    return (
        <div className='contact__item'>
            <div><b>{contactTitle}</b>: <Field placeholder={contactTitle} name={contactTitle} component={Input} validate={[required, maxLengthCreator(30)]} /></div>
        </div>
    )
}




const ProfileInfoFormContainer = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.description__container}>
                <div className={style.user__description}>
                    <div className={style.user_block}>
                        <div className={style.about__me}><b>Full name: </b><Field placeholder="FullName" name={"FullName"} component={Textarea} validate={[required, maxLengthCreator(30)]} /></div>
                        <div className={style.about__me}><b>About me: </b><Field placeholder="About me" name={"aboutMe"} component={Textarea} validate={[required, maxLengthCreator(30)]} /></div>
                        <div className={style.about__job}><b>Looking job: </b><Field placeholder="Looking job" name={"lookingJob"} component={Input} type="checkbox" /></div>
                        <div className={style.about__me}><b>Job description: </b><Field placeholder="LookingForAJobDescription" name={"LookingForAJobDescription"} component={Textarea} validate={[required, maxLengthCreator(30)]} /></div>
                    </div>
                    {/* <div className={style.contacts}><b>Contacts:</b>{Object.keys(props.profile.contacts).map((key) => { return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} /> })}</div> */}
                </div>
            </div>
            <div><button>Save</button></div>
        </form>
    )
}


const ReduxProfileForm = reduxForm({
    form: 'profile'
})(ProfileInfoFormContainer)



const ProfileInfoForm = (props) => {
    debugger
    const onSubmit = (formData) => {
        props.setProfileData(formData)
    }
    debugger
    return (
        <div>
            <ReduxProfileForm {...props} onSubmit={onSubmit} />
        </div>
    )
}


export default ProfileInfoForm