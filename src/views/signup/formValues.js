import * as yup from 'yup'

const initialValues = {
  name:'',
  email:'',
  password:'',
  passwordConfirm:'',
  cep: ''
}



const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
  password: yup.string().min(6, 'Minímo de 6 caracteres').required('Campo obrigatório'),
  passwordConfirm: yup.string().required('Campo obrigatório').oneOf([yup.ref('password'), null], 'Senhas nao coincidem, por favor verificar'),
  cep: yup.string().max(8, 'Por favor, indicar cep com 8 dígitos sem hifen').required('Campo obrigatório')
})



export {initialValues, validationSchema} 