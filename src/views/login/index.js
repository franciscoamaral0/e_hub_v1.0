import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Box,
  FormHelperText,
  Input,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Formik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";

import TemplateDefault from "../../templates/default";
import useStyles from "./login.styles";
import { initialValues, validationSchema } from "./formValues";

import { Context } from "../../contexts/AuthContext";

const Signin = () => {
  const classes = useStyles();;
  const { handleLogin } = useContext(Context);


  return (
    <TemplateDefault>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
        >
          Faça login na sua conta
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box className={classes.box}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({
              touched,
              values,
              errors,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <FormControl
                    fullWidth
                    error={errors.email && touched.email}
                    className={classes.formControl}
                  >
                    <InputLabel className={classes.inputLabel}>
                      E-Mail
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

                  <FormControl
                    fullWidth
                    error={errors.password && touched.password}
                    className={classes.formControl}
                  >
                    <InputLabel className={classes.inputLabel}>
                      Senha
                    </InputLabel>
                    <Input
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                    />

                    <FormHelperText>
                      {errors.password && touched.password
                        ? errors.password
                        : null}
                    </FormHelperText>
                  </FormControl>

                  {isSubmitting ? (
                    <CircularProgress className={classes.loading} />
                  ) : (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Entrar
                    </Button>
                  )}
                </form>
              );
            }}
          </Formik>
          <Link to='/signup' className={classes.signupLink}>
          <Typography 
          className={classes.signupLink}
          component="h5"
          variant="body1"
          align="center"
          color="textPrimary"
          >Clique aqui para se cadastrar!</Typography>
          </Link>
        </Box>
      </Container>
    </TemplateDefault>
  );
};

// {
//   router.query.i === '1'
//     ? (
//       <Alert severity= 'error' className={classes.errorMessage}>
//         Usuário ou senha invalidos
//       </Alert>
//     )
//     : null
// caso login e senha estejam errados, enviar usuario pra uma rota com a query ===1 por exemplo para sugrir erro para usuario}

export default Signin;
