import { Container, Typography, Box, Grid, Avatar } from "@material-ui/core";
import TemplateDefault from "../../templates/default";
import { makeStyles } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    paddingBottom: theme.spacing(3),
    marginTop: 20,
  },

  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    display: "block",
  },
  loginMethodSeparator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8e8e8",
    width: "100%",
    height: 1,
    margin: theme.spacing(7, 0, 4),
    "& span": {
      backgroundColor: "white",
      padding: "0 30px",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
        >
          Sobre os desenvolvedores
        </Typography>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item md={1}>
                <Avatar
                  className={classes.large}
                  src="https://media-exp1.licdn.com/dms/image/C5603AQG63Y98wa8pGg/profile-displayphoto-shrink_800_800/0/1526688339622?e=1640822400&v=beta&t=2rH9Qg2VN62xLPopY9UizkNb6fccB1qxWk5bHKBzA-8"
                />
              </Grid>
            </Grid>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="textPrimary"
              className={classes.boxContainer}
            >
              Francisco Amaral
            </Typography>
            <Typography component="body1" variant="body1">
              +6 anos de experiência em administração de empresas e, nos últimos
              anos, migrou para a tecnologia. Encontrei na engenharia de
              software a minha paixão e a forma de acrescentar valor às pessoas
              e empresas através de soluções tecnológicas. Experiência de
              trabalho utilizando metodologias ágeis e fazendo parte de equipas
              multiculturais. Sou um solucionador de problemas nativo e gosto de
              colaborar com os meus colegas. Tenho trabalhado em diferentes
              ambientes, desde startups a empresas empresariais onde pude
              aprender tanto com ambientes incertos como com empresas com
              processo estabelecido. Sou um grande fã de dados e de testar
              hipóteses para validar uma ideia com as equipas de produto para
              alcançar os melhores resultados. Se me apanharem fora do trabalho,
              sou um jogador de topo do estilo FPS, entusiasta do
              ténis/crossfit. Estou aberto a partilhar a minha experiência e
              também a aprender com a vossa, vamos entrar em contacto. Eu falo
              inglês e português. Tecnologias onde passei a maior parte do meu
              tempo a codificar e a estudar: JavaScript (ES6) | React |
              Express.js | Node.js | MongoDb | Axios
            </Typography>

            <Box className={classes.loginMethodSeparator}>
              <span>Contacte o Francisco</span>
            </Box>
            <Grid container alignItems="center" justifyContent="space-around">
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/franciscom-amaral/",
                }}
                target="_blank"
              >
                <LinkedInIcon color="primary" />
              </Link>
              <Link
                to={{ pathname: "https://github.com/franciscoamaral0" }}
                target="_blank"
              >
                <GitHubIcon color="primary" />
              </Link>
            </Grid>
          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item md={1}>
                <Avatar
                  className={classes.large}
                  src="https://scontent.fopo5-1.fna.fbcdn.net/v/t1.6435-9/84040026_10215426838135323_5233019072915963904_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=X03unikaPFkAX90hfoD&tn=MD8iZAWj2S28Xd_r&_nc_ht=scontent.fopo5-1.fna&oh=97fac5d88a8a9dc373343ca9fbdd8737&oe=619F724F"
                />
              </Grid>
            </Grid>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="textPrimary"
              className={classes.boxContainer}
            >
              Thiago Henrique Silva de Campos
            </Typography>
            <Typography component="body1" variant="body1">
              Responsavel pelo backend do sistema, especialista em arquitetura
              de software com conhecimento aplo na área.
            </Typography>

            <Box className={classes.loginMethodSeparator}>
              <span>Contacte o Thiago</span>
            </Box>
            <Grid container alignItems="center" justifyContent="space-around">
              <Link
                to={{ pathname: "https://www.linkedin.com/in/thsc47/" }}
                target="_blank"
              >
                <LinkedInIcon color="primary" />
              </Link>
              <Link
                to={{ pathname: "https://github.com/thsc47" }}
                target="_blank"
              >
                <GitHubIcon color="primary" />
              </Link>
            </Grid>
          </Box>
        </Container>
      </Container>
    </TemplateDefault>
  );
};

export default About;
