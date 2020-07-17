import * as Yup from 'yup';

export const initialValues = {
    email:'',
    password:''
}

export const validationSchema= Yup.object({
    email:Yup.string().email().required('Email cant be empty'),
    password:Yup.string().min(3).required('Password cant be empty')
})