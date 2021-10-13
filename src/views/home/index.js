import { Container, IconButton, InputBase, Typography, Paper, Grid} from '@material-ui/core'
import SerchIcon from '@material-ui/icons/Search'

import { makeStyles } from '@material-ui/core'
import TemplateDefault from '../../templates/default'
import Card from '../../components/Card'

const useStyles = makeStyles((theme) => ({
  
  searchBox:{
    display:'flex',
    justifyContent:'center',
    padding: theme.spacing(0,2),
    marginTop: 20
  },
  cardGrid:{
    marginTop: 50

  }
}))

const Home =() =>{
  const classes = useStyles()


  return(
    <TemplateDefault>
      <Container maxWidth='md'>
        <Typography component='h1' variant='h3' align='center' color='textPrimary'>
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase fullWidth placeholder='Ex.: Iphone 12 com garantia'/>
          <IconButton>
            <SerchIcon/>
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth='md' className={classes.cardGrid}>
        <Typography component='h2' variant='h4' align='center' color='textPrimary'>
          Destaques
        </Typography>
        <br/>
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
        <Card
            image={'https://source.unsplash.com/random'}
            title='produto X'
            subtitle='€60,00'
            />
          </Grid>
        </Grid>
      </Container>

    </TemplateDefault>
  )
}

export default Home