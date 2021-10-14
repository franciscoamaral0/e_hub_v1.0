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

import TemplateDefault from "../../src/templates/Default";
import Card from "../../src/components/Card";

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
}));

const List = () => {
  const classes = useStyles();
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
            ENCONTRADOS 200 ANÚNCIOS
          </Typography>

          <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={"https://source.unsplash.com/random"}
                title="produto X"
                subtitle="€60,00"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={"https://source.unsplash.com/random"}
                title="produto X"
                subtitle="€60,00"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={"https://source.unsplash.com/random"}
                title="produto X"
                subtitle="€60,00"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </TemplateDefault>
  );
};

export default List;
