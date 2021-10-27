import { Divider ,Container, Typography, FormControl, InputLabel, Box, FormHelperText, Input, Button, CircularProgress } from '@material-ui/core'
import { Formik } from 'formik'
import axios from 'axios'
import { useHistory } from 'react-router'

import TemplateDefault from '../../templates/default'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './signup.styles'
import { initialValues, validationSchema } from './formValues'
import Api from '../../api/api.config'



const Signup = () => {
  const classes = useStyles()
  const {setToasty} = useToasty()
  const router = useHistory()

  const handleFormSubmit = async (values) =>{
    console.log(values)
    try {
      const response = await Api.post('/signin', values)
      console.log(response)
      setToasty({
        open: true,
        severity: 'success',
        text: 'Registo realizado com sucesso'
      })
      router.push('/login')
    } catch (error) {
      console.log(error.response.data)
      setToasty({
        open: true,
        severity: 'error',
        text: `${error.response.data}`
      })
    }
    
    // vamos redirecionar user para pagina de login
  }


  return(
    <TemplateDefault>
      <Container maxWidth='sm' component='main' className={classes.container}>
        <Typography component='h1' variant='h2' align='center' color='textPrimary'> 
          Crie sua conta
        </Typography>
        <Typography component='h5' variant='h5' align='center' color='textPrimary'>
          Anuncie aqui para todo mundo ver
        </Typography>
      </Container>

      <Container maxWidth='md'>
        <Box className={classes.box}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {
              ({
                touched,
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting
              })=> {
                return(
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth error={errors.name && touched.name} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                        <Input
                          name='name'
                          value={values.name}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.cpf && touched.cpf} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Cpf</InputLabel>
                        <Input
                          name='cpf'
                          type='text'
                          value={values.cpf}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.cpf && touched.cpf ? errors.cpf : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.email && touched.email} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>E-Mail</InputLabel>
                        <Input
                          name='email'
                          value={values.email}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.username && touched.username} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Nome de usuário</InputLabel>
                        <Input
                          name='username'
                          value={values.username}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.username && touched.username ? errors.username : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.password && touched.password} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Senha</InputLabel>
                        <Input
                          name='password'
                          type='password'
                          value={values.password}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.password && touched.password ? errors.password : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.passwordConfirm && touched.passwordConfirm} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Confirme sua senha</InputLabel>
                        <Input
                          name='passwordConfirm'
                          type='password'
                          value={values.passwordConfirm}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.passwordConfirm && touched.passwordConfirm ? errors.passwordConfirm : null}
                      </FormHelperText>
                    </FormControl>

                    <Box className={classes.loginMethodSeparator}>
                      <span>Dados Cadastrais</span>
                    </Box>

                    <FormControl fullWidth error={errors.zipcode && touched.zipcode} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Código Postal</InputLabel>
                        <Input
                          name='zipcode'
                          type='text'
                          value={values.zipcode}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.zipcode && touched.zipcode ? errors.zipcode : null}
                      </FormHelperText>
                    </FormControl>


                    <FormControl fullWidth error={errors.street && touched.street} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Rua</InputLabel>
                        <Input
                          name='street'
                          type='text'
                          value={values.street}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.street && touched.street ? errors.street : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.number && touched.number} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Número</InputLabel>
                        <Input
                          name='number'
                          type='text'
                          value={values.number}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.number && touched.number ? errors.number : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.city && touched.city} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Cidade</InputLabel>
                        <Input
                          name='city'
                          type='text'
                          value={values.city}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.city && touched.city ? errors.city : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.district && touched.district} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Estado</InputLabel>
                        <Input
                          name='district'
                          type='text'
                          value={values.district}
                          onChange={handleChange}
                        />
                        
                      <FormHelperText>
                        {errors.district && touched.district ? errors.district : null}
                      </FormHelperText>
                    </FormControl>

                    

                    {/* Precisa ainda ser adicionado no cadastro do usuario
                      "age": 21,
                      "cpf": 11122233345,
                      "street": "Rua feliz",
                      "number": 6,
                      "district": "Bairro Centro",
                      "city": "SP",
                      "zipcode": 11111111
                     */}

                    {
                      isSubmitting 
                      ? (<CircularProgress className={classes.loading}/>)
                      : (<Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        
                      >
                        Registar
                      </Button>)
                    }

            

                  </form>
                )
              }
            }
          </Formik>
        </Box>
      </Container>
    </TemplateDefault>

  )
}

export default Signup