import * as yup from 'yup'

const initialValues = {
  name:'',
  email:'',
  password:'',
  passwordConfirm:'',
  district: '',
  city: '',
  street: '',
  number: '',
  zipcode: '',
  username: '',
  cpf: ''


}





const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
  password: yup.string().min(6, 'Minímo de 6 caracteres').required('Campo obrigatório'),
  passwordConfirm: yup.string().required('Campo obrigatório').oneOf([yup.ref('password'), null], 'Senhas nao coincidem, por favor verificar'),
  district: yup.string().required('Campo obrigatório'),
  city: yup.string().required('Campo obrigatório'),
  street: yup.string().required('Campo obrigatório'),
  number: yup.number().required('Campo obrigatório'),
  zipcode: yup.number().min(8, 'Digite seu codigo postal sem hífen').required('Campo obrigatório'),
  username: yup.string().min(6, 'User name com no mínimo 6 caracteres').required('Campo obrigatório'),
  cpf: yup.number().min(11, 'Cpf sem hífen com 11 dígitos').required('Campo obrigatório')
})



export {initialValues, validationSchema} 