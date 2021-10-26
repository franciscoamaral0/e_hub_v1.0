import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../../templates/default'
import Api from '../../api/api.config'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


const useStyle= makeStyles((theme)=>({
  box:{
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  
  productName:{
    margin:'15px 0'
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 15
  },
  card:{
    height: '100%'
  },
  cardMedia:{
    paddingTop: '56%'
  }
}))




const Product = () =>{
  const classes= useStyle()
  const { id } = useParams();
  const [ads, setAds] = useState([])
  
  
  
  const handleProduct = async () =>{
  try {
    const result = await Api.get('/ad-sale/my/search', {
      params: {
        id,
      },
    })
    setAds(result.data)
    console.log(result)
  } catch (error) {
    
  }
  }

  console.log(ads)
  useEffect(()=> {
    handleProduct()
  },[])


  return(
    <TemplateDefault>
      <Container maxWidth='lg' >
        <Grid container spacing={3}  wrap={true}>
          <Grid item xs={8}>
              <Box className={classes.box}>
                <Carousel
                  autoPlay={false}
                  navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        color: 'white'
                    }
                }} 
                animation='slide'
                navButtonsAlwaysVisible
                >
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={'https://source.unsplash.com/random?a=1'}
                      title='Titulo da Imagem'
                    />
                  </Card>

                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={'https://source.unsplash.com/random?a=2'}
                      title='Titulo da Imagem'
                    />
                  </Card>
                </Carousel>
              </Box>
            

            <Box className={classes.box} textAlign='left'>
              <Typography component='span' variant='caption' >Publicado 16 de junho de 2021</Typography>
              <Typography component='h4' variant='h4' className={classes.productName}>Macbook M1 8gb Lacrado</Typography>
              <Typography component='h4' variant='h4' className={classes.price}>€999.00</Typography>
              <Chip label='Categoria'/>
            </Box>

            <Box className={classes.box} textAlign='left'>
          
              <Typography component='h6' variant='h6'>Descrição</Typography>
              <Typography component='p' variant='body2'> 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
          
            </Box>
          </Grid>

          <Grid item xs={4}  >
            <Card elevation={0} className={classes.box}>
              <CardHeader
              avatar={
                <Avatar>T</Avatar>
              }
              title='Francisco Amaral' 
              subheader='francisco@francisco.com' 
              />
              <CardMedia
                image='https://source.unsplash.com/random'
                title='Francisco Amaral'

              />

              
            </Card>
            <Box className={classes.box}>
              <Typography component='h6' variant='h6'>
                Localizacao
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Product
