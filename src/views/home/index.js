import { Container, IconButton, InputBase, Typography, Paper, Grid} from '@material-ui/core'
import SerchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Api from '../../api/api.config'
import TemplateDefault from '../../templates/default'
import Card from '../../components/Card'
import { formatCurrency } from "../../utils/currency";



const useStyles = makeStyles((theme) => ({
  
  searchBox:{
    display:'flex',
    justifyContent:'center',
    padding: theme.spacing(0,2),
    marginTop: 20
  },
  cardGrid:{
    marginTop: 50

  },
  linkTextDecoration: {
    textDecoration: "none",
  },
}))

const Home =() =>{
  const classes = useStyles()
  const [search, setSearch] = useState()
  const router = useHistory()
  const [ads, setAds] = useState([])

  const handleSubmitSearch = () =>{
      router.push({
        pathname: `/search/${search}`
      })
  }

  const handleHomeAds = async ()=>{
    const result = await Api.get('/ad')
    setAds(result.data)
  }


useEffect(() => {
  handleHomeAds()
}, [])
  
  return(
    <TemplateDefault>
      <Container maxWidth='md'>
        <Typography component='h1' variant='h3' align='center' color='textPrimary'>
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase
          onChange={(e) =>setSearch(e.target.value) }
          fullWidth
          placeholder='Ex.: Iphone 12 com garantia'/>
          <IconButton onClick={handleSubmitSearch}>
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
        {
          ads.map(product =>(
        <Grid item xs={12} sm={6} md={4}>
        <Link className={classes.linkTextDecoration} to={`/product/${product._id}`}>
        <Card
            image={product.files[0]}
            title={product.title.charAt(0).toUpperCase()+ product.title.substring(1)}
            subtitle={formatCurrency(product.price)}
            />
        </Link>
          </Grid>
          ))
        }
        </Grid>
      </Container>

    </TemplateDefault>
  )
}

export default Home