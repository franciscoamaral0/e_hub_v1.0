import * as yup from "yup";

  const validationSchema = yup.object().shape({
    title: yup.string()
      .min(6, "Por favor, insira um título com no mínimo 6 caracteres.")
      .max(60, "Titulo com no maximo 60 caracteres.")
      .required("Campo Obrigatório."),
    category: yup.string()
      .required("Campo Obrigatório"),
    description: yup.string().required('Campo Obrigatório')
      .min(50, "Escreva uma descrição com no mínimo 50 caracteres")
      .max(200, "Limite de 200 caracteres atingido"),
    price: yup.number().required('Campo Obrigatório'),
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('Campo Obrigatório'),
    phone: yup.number().required('Campo Obrigatório'),
    files: yup.array().min(2, 'Envie pelo menos duas fotos').required('Campo Obrigatório')

    
  });


  const initialValues = {
    title: "",
    category: "",
    description: "",
    price:'',
    name: '', 
    email: '',
    phone: '',
    files: [],
  }

  export {validationSchema, initialValues}