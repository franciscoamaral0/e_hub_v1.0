import { Button, Container, Typography, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import TemplateDefault from  '../../templates/default'
import Card from '../../components/Card'


const useStyles = makeStyles((theme) =>({
  
  buttonAdd: {
    margin: '30px auto',
    display: 'block',

  },

  gridContainer:{
    marginTop: 10
  }

}))

const Dashboard = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth='sm' >
        <Typography component='h1' variant='h2' align='center' >
          Meus Anuncios
        </Typography>
          <Button variant='contained' color='primary' className={classes.buttonAdd}>
            Publicar Novo Anúncio 
          </Button>
      </Container>

      <Container maxWidth='md' className={classes.gridContainer} >
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
            image={'https://source.unsplash.com/random'}
            title='produto X'
            subtitle='€60,00'
            isButton={
              <>
                <Button size='small' color='primary'>Editar</Button>
                <Button size='small' color='primary'>Editar</Button>
              </>  
            }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card
            image={'https://source.unsplash.com/random'}
            title='produto X'
            subtitle='€60,00'
            isButton={
              <>
                <Button size='small' color='primary'>Editar</Button>
                <Button size='small' color='primary'>Editar</Button>
              </>  
            }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card
            image={'https://source.unsplash.com/random'}
            title='produto X'
            subtitle='€60,00'
            isButton={
              <>
                <Button size='small' color='primary'>Editar</Button>
                <Button size='small' color='primary'>Editar</Button>
              </>  
            }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card
            image={'https://source.unsplash.com/random'}
            title='produto X'
            subtitle='€60,00'
            isButton={
              <>
                <Button size='small' color='primary'>Editar</Button>
                <Button size='small' color='primary'>Editar</Button>
              </>  
            }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card
            image={'https://source.unsplash.com/random'}
            title='produto X'
            subtitle='€60,00'
            isButton={
              <>
                <Button size='small' color='primary'>Editar</Button>
                <Button size='small' color='primary'>Editar</Button>
              </>  
            }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card
            image={'https://source.unsplash.com/random'}
            title='produto X'
            subtitle='€60,00'
            isButton={
              <>
                <Button size='small' color='primary'>Editar</Button>
                <Button size='small' color='primary'>Editar</Button>
              </>  
            }
            />
          </Grid>


          
        </Grid>
      </Container>
    </TemplateDefault>
  )

}

export default Dashboard