import { Formik } from "formik";

import {
  Box,
  Button,
  Container,
  Select,
  Typography,
  
  
  FormControl,
  InputLabel,
  InputAdornment,
  MenuItem,
  FormHelperText,
  Input,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

import useStyles from "./publish.styles";

import TemplateDefault from "../../../templates/default";
import { useHistory } from "react-router";
import { initialValues, validationSchema } from "./formValues";
import FileUpload from '../../../components/FileUpload/index'
// import { useDropzone } from "react-dropzone";
// import axios from "axios";
import Api from "../../../api/api.config";
import useToasty from "../../../contexts/Toasty";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditPublish = ({props}) => {
  const router = useHistory()
  const classes = useStyles();
  const setToasty = useToasty()
  const {id} = useParams()
  const [formValues, setFormValues] = useState(null)
  
  


  const handleSearchAd = async () =>{
    
    try {
      const result = await  Api.get('/ad-sale/my/search',{
        params: {
          id
       }}
      )
      const savedValues = {
        title: result.data.title,
        category: result.data.category,
        description: result.data.description,
        price: result.data.price,
        name: result.data.name, 
        email: result.data.email,
        phone: result.data.phone,
        files: result.data.files,
        used: result.data.used,
        manufacturer: result.data.manufacturer,
      }
      setFormValues(savedValues)
      
    } catch (error) {
      setToasty({
        open: true,
        severity: 'error',
        text: 'Erro ao editar anúncio!'
      })
      router.push('/myaccount')
    }
  }

  // 

  useEffect(() => {
    handleSearchAd()
  }, [])

  const handleSubmitForm = async (values) =>{
      try {
        const filesData = new FormData()
        for(let key in values){
          filesData.append(key, values[key])
        }
        filesData.delete('files')
        values.files.forEach((element) => {
          filesData.append('files', element)
        })
        console.log('teste', filesData.getAll('files'))
        console.log('teste', filesData.getAll('title'))
        
        const send = await Api.put('/ad-sale/my/edit', filesData, {
          params: {
            id: id
        }})
        console.log(filesData)
        console.log(send)
        router.push('/myaccount')
          setToasty({
            open:true,
            severity:'success',
            text: 'Anúncio criado com sucesso!'
          })
      } catch (error) {
          setToasty({
            open:true,
            severity:'error',
            text: 'Erro ao criar anúncio, tente novamente!'
          })
      }
    
    
  }
  
  

  return (
    <TemplateDefault>
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
        enableReinitialize
      >
        {({
          
          touched,
          values,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                >
                  Publicar Anúncio
                </Typography>
                <Typography
                  component="h5"
                  variant="h5"
                  align="center"
                  color="textPrimary"
                >
                  Insira o mais detalhado possivel!
                </Typography>
              </Container>
              <br />
              <br />
              <Container maxWidth="md" className={classes.boxContaier}>
                <Box className={classes.box}>
                  <FormControl error={errors.title && touched.title} fullWidth>
                    <InputLabel className={classes.inputLabel}>
                      Título do Anúncio*
                    </InputLabel>
                    <Input
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                    <FormHelperText>{errors.title}</FormHelperText>
                  </FormControl>

                  <br />
                  <br />
                  <FormControl error={errors.manufacturer && touched.manufacturer} fullWidth>
                    <InputLabel className={classes.inputLabel}>
                      Fabricante*
                    </InputLabel>
                    <Input
                      name="manufacturer"
                      value={values.manufacturer}
                      onChange={handleChange}
                    />
                    <FormHelperText>{errors.manufacturer}</FormHelperText>
                  </FormControl>

                  <br />
                  <br />
                  <FormControl
                    error={errors.category && touched.category}
                    fullWidth
                  >
                    <InputLabel className={classes.inputLabel}>
                      {" "}
                      Categorias*{" "}
                    </InputLabel>
                    <Select
                      name="category"
                      value={values.category}
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value="">Selecionar</MenuItem>
                      <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                      <MenuItem value="Agricultura">Agricultura</MenuItem>
                      <MenuItem value="Moda">Moda</MenuItem>
                      <MenuItem value="Carros,Motos e Barco">
                        Carros,Motos e Barcos
                      </MenuItem>
                      <MenuItem value="Serviços">Serviços</MenuItem>
                      <MenuItem value="Lazer">Lazer</MenuItem>
                      <MenuItem value="Moveis, Casa e Jardim">
                        Moveis, Casa e Jardim
                      </MenuItem>
                      <MenuItem value="Imóveis">Imóveis</MenuItem>
                      <MenuItem value="Equipamentos E Ferramentas">
                        Equipamentos E Ferramentas
                      </MenuItem>
                      <MenuItem value="Telemoveis e Tablets">
                        Telemoveis e Tablets
                      </MenuItem>
                      <MenuItem value="Esporte">Esporte</MenuItem>
                      <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                      <MenuItem value="Emprego">Emprego</MenuItem>
                      <MenuItem value="Outros">Outros</MenuItem>
                    </Select>
                    <FormHelperText>
                      {errors.category && touched.category
                        ? errors.category
                        : null}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Container>

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  <FileUpload 
                    files={values.files}
                    errors={errors.files}
                    touched={touched.files}
                    setFieldValue = {setFieldValue}
                  />
                </Box>
              </Container>

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  <FormControl
                    error={errors.description && touched.description}
                    fullWidth
                  >
                    <InputLabel className={classes.inputLabel}>
                      Escreva os detalhes sobre seu produto*
                    </InputLabel>
                    <Input
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      multiline
                      rows={6}
                      variant="outlined"
                    />
                    <FormHelperText>
                      {errors.description && touched.description
                        ? errors.description
                        : null}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Container>

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  




                  <FormControl error={errors.price && touched.price} fullWidth>
                    <InputLabel className={classes.inputLabel}>
                      Preço*
                    </InputLabel>
                    <Input
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      variant="outlined"
                      startAdornment={
                        <InputAdornment position="start"> € </InputAdornment>
                      }
                    />
                    <FormHelperText>
                      {errors.price && touched.price ? errors.price : null}
                    </FormHelperText>
                  </FormControl>


                  <FormControlLabel
                    control={<Checkbox checked={values.used} onChange={handleChange} name="used"  color='primary'/>}
                    label="Produto Usado?"
                  />
                </Box>
              </Container>

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  <Typography component="h6" variant="h6" color="textPrimary">
                    Dados de contacto
                  </Typography>
                  <FormControl error={errors.name && touched.name} fullWidth>
                    <InputLabel className={classes.inputLabel}>
                      Nome*
                    </InputLabel>
                    <Input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.name && touched.name ? errors.name : null}
                    </FormHelperText>
                  </FormControl>
                  <br /> <br />
                  <FormControl error={errors.email && touched.email} fullWidth>
                    <InputLabel className={classes.inputLabel}>
                      E-mail*
                    </InputLabel>
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.email && touched.email ? errors.email : null}
                    </FormHelperText>
                  </FormControl>
                  <br /> <br />
                  <FormControl error={errors.phone && touched.phone} fullWidth>
                    <InputLabel className={classes.inputLabel}>
                      Telefone de contacto*
                    </InputLabel>
                    <Input
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.phone && touched.phone ? errors.phone : null}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Container>

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                  <Button type="submit" variant="contained" color="primary">
                    Publicar Anúncio
                  </Button>
                </Box>
              </Container>
            </form>
          );
        }}
      </Formik>
    </TemplateDefault>
  );
};

export default EditPublish;
