import { Link, useParams } from "react-router-dom";
import {
  Box,
  Container,
  IconButton,
  InputBase,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";
import SerchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";

import TemplateDefault from "../../templates/default";
import Card from "../../components/Card";
import {useState, useEffect} from 'react'
import Api from '../../api/api.config'
import {formatCurrency} from '../../utils/currency'


const useStyles = makeStyles((theme) => ({
  searchBox: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
    marginTop: 5,
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
    marginTop: 20,
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  gridContainer: {
    marginTop: theme.spacing(2),
  },
  linkTextDecoration: {
    textDecoration: "none",
  },
}));

const List = () => {
  const classes = useStyles();
  const { query } = useParams();
  const [wordSearch, setWordSearch] = useState([])

  const handleSearch = async () =>{
    const result = await Api.get(`/search?search=${query}`)
    setWordSearch(result.data)
  }
  
  useEffect(() => {
    handleSearch()
  }, [])
  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Paper className={classes.searchBox}>
          <InputBase fullWidth placeholder="Ex.: Iphone 12 com garantia" />
          <IconButton>
            <SerchIcon />
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Anúncios
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            ENCONTRADOS {wordSearch.length} ANÚNCIOS PARA O TERMO {`"${query.toUpperCase()}"`}
          </Typography>

          <Grid container spacing={4} className={classes.gridContainer}>
          {
            wordSearch.map(product =>(
            <Grid key={product._id} item xs={12} sm={6} md={4}>
              <Link className={classes.linkTextDecoration} to={`/product/${product._id}`}>
                
                  <Card image={product.files[0]} title={product.title.charAt(0).toUpperCase()+ product.title.substring(1)} subtitle={formatCurrency(product.price)} />
                
              </Link>
            </Grid>

            ))
          }
          </Grid>
        </Box>
      </Container>
    </TemplateDefault>
  );
};

export default List;
