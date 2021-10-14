import { Container, Typography, FormControl, InputLabel, Box, FormHelperText, Input, Button, CircularProgress } from '@material-ui/core'
import { Formik } from 'formik'
import axios from 'axios'
import { useHistory } from 'react-router'


import TemplateDefault from '../../templates/default'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './login.styles'
import { initialValues, validationSchema } from './formValues'
import { Alert } from '@material-ui/lab'



const Signin = () => {
  const classes = useStyles()
  const router = useHistory()
  
  
  const handleFormSubmit = async (values) =>{
          router.push('/myaccount')
  
  }


  return(
    <TemplateDefault>
      <Container maxWidth='sm' component='main' className={classes.container}>
        <Typography component='h1' variant='h2' align='center' color='textPrimary'> 
          Faça login na sua conta
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
                        Entrar
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

// {
//   router.query.i === '1'
//     ? (
//       <Alert severity= 'error' className={classes.errorMessage}>
//         Usuário ou senha invalidos
//       </Alert>
//     )
//     : null
// caso login e senha estejam errados, enviar usuario pra uma rota com a query ===1 por exemplo para sugrir erro para usuario}

export default Signin