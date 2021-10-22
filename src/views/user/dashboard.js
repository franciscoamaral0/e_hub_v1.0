import { Button, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import useToasty from "../../contexts/Toasty";

import { Link } from "react-router-dom";

import TemplateDefault from "../../templates/default";
import Card from "../../components/Card";
import Api from "../../api/api.config";
import { formatCurrency } from "../../utils/currency";

const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    margin: "30px auto",
    display: "block",
  },

  gridContainer: {
    marginTop: 10,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  // const router = useHistory();
  const { setToasty } = useToasty();
  const [ads, setAds] = useState([]);

  console.log(ads);

  const getAllAds = async () => {
    try {
      const result = await Api.get("/ad-sale/my/all");
      setAds(result.data);
    } catch (error) {
      console.log(error.message);
      setToasty({
        open:true,
        severity:'error',
        text: 'Tente novamente!'
      })
    }
  };

  useEffect(() => {
    getAllAds();
  }, []);

  return (
    <>
      <TemplateDefault>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center">
            Meus Anuncios
          </Typography>
          <Link to="/myaccount/publish">
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonAdd}
            >
              Publicar Novo Anúncio
            </Button>
          </Link>
        </Container>

        <Container maxWidth="md" className={classes.gridContainer}>
          <Grid container spacing={4} className={classes.gridContainer}>
            {ads.map((element) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={element.files[0]}
                  title={element.title}
                  subtitle={formatCurrency(element.price)}
                  isButton={
                    <>
                      <Button size="small" color="primary">
                        Editar
                      </Button>
                      <Button size="small" color="primary">
                        Editar
                      </Button>
                    </>
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  );
};

export default Dashboard;
