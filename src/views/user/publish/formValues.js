import * as yup from "yup";

  const validationSchema = yup.object().shape({
    title: yup.string()
      .min(10, "Por favor, insira um título com no mínimo 10 caracteres. ")
      .max(18, "Titulo com no maximo 19 caracteres, utilize o campo de descrição para maiores informações.")
      .required("Campo Obrigatório."),
    category: yup.string()
      .required("Campo Obrigatório"),
    description: yup.string().required('Campo Obrigatório')
      .min(50, "Escreva uma descrição com no mínimo 50 caracteres")
      .max(1000, "Limite de 1000 caracteres atingido"),
    price: yup.number().required('Campo Obrigatório'),
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('Campo Obrigatório'),
    phone: yup.number().required('Campo Obrigatório'),
    files: yup.array().min(2, 'Envie pelo menos duas fotos').required('Campo Obrigatório'),
    manufacturer: yup.string().required('Campo Obrigatório')
    
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
    used: false,
    manufacturer: '',
  }


  export {validationSchema, initialValues}