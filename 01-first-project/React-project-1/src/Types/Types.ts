export type PhotosType = {
    small: string | null,
    large: string | null
}

export type ProfileType = {
    userId: Number,
    lookingForAJob: Boolean,
    lookingForAJobDescription: String,
    fullName: String,
    contacts: ContactsType,
    photos: PhotosType
}

export  type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}