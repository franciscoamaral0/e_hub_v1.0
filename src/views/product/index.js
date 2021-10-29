import {
  BottomNavigationAction,
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

import TemplateDefault from "../../templates/default";
import Api from "../../api/api.config";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FunctionDate } from "../../utils/date";
import { WhatsApp } from "@material-ui/icons";
import Example from "../../components/LoadingPage";
import { firstLetterUpper } from "../../utils/fistLetterUpper";

const useStyle = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },

  productName: {
    margin: "15px 0",
  },
  price: {
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    height: "100%",
  },
  cardMedia: {
    paddingTop: "56%",
  },
}));

const Product = () => {
  const classes = useStyle();
  const { id } = useParams();
  const [ads, setAds] = useState({});
  const [photos, setPhotos] = useState([]);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const [title, setTitle] = useState('')

  

  const handleProduct = async () => {
    try {
      const { data } = await Api.get("/ad-sale/my/search", {
        params: {
          id,
        },
      });
      
      setAds(data);
      setPhotos(data.files);
      const upperTitle = firstLetterUpper(data.title)
      
      setTitle(upperTitle)
    } catch (error) {

    }
  };

  

  

  const handleWhatsappClick = (value) => {
    window.open(`https://api.whatsapp.com/send?phone=+351${value}`, "_blank");
  };
  useEffect(() => {
    handleProduct();
  }, []);

  return (

    
      !ads.title ? <Example type={'spinningBubbles'} color={'#000000'}/> : 
    
      (



    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3} wrap={true}>
          <Grid item xs={8}>
            <Box className={classes.box}>
              <Carousel
                autoPlay={false}
                navButtonsProps={{
                  // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                  style: {
                    color: "white",
                  },
                }}
                animation="slide"
                navButtonsAlwaysVisible
              >
                {photos.map((element) => (
                  <Card className={classes.card}>

                    <CardMedia
                      className={classes.cardMedia}
                      image={element}
                      title={ads.title }
                    />
                  </Card>
                ))}
              </Carousel>
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="span" variant="caption">
                Publicado {day} de {FunctionDate(month)} de {year}
              </Typography>
              
              <Typography
                component="h4"
                variant="h4"
                className={classes.productName}
              >
                {title}
              </Typography>

              
              <Typography
                component="h4"
                variant="h4"
                className={classes.price}
              >{`€${ads.price}`}</Typography>
              <Chip label={ads.category} />
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="h6" variant="h6">
                Descrição
              </Typography>
              <Typography component="p" variant="body2">
                {ads.description}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Card elevation={0} className={classes.box}>
              <CardHeader
                avatar={<Avatar>T</Avatar>}
                title={ads.name}
                subheader={ads.email}
              />
            </Card>
            <Box className={classes.box}>
              <Typography component="h6" variant="h6" align="center">
                Localizacao
              </Typography>
              {
                ads.userID &&
              <Typography component="h6" variant="body1" align="center">
                {ads.userID.city} - {ads.userID.district}
              </Typography>
              }
            </Box>

            <Box className={classes.box}>
              <Typography component="h6" variant="h6" align="center">
                Contacto
              </Typography>
              <Typography align="center">
                <BottomNavigationAction
                  className={classes.buttonWa}
                  icon={<WhatsApp />}
                  onClick={() => {
                    handleWhatsappClick(ads.phone);
                  }}
                />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
    )
    
    
    
  );
};

export default Product;
