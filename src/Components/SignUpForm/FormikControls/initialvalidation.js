import * as Yup from 'yup';

export const initialValues = {
    name:'',
    email:'',
    password:''
}

export const validationSchema= Yup.object({
    name:Yup.string().min(4).required('Required'),
    email:Yup.string().email().required('Email cant be empty'),
    password:Yup.string().min(3).required('Password cant be empty')
})