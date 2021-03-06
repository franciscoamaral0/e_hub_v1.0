import { Button, Container, Typography, Grid, Dialog, DialogActions,DialogTitle, DialogContent,DialogContentText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

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
  linkNoUnderline: {
    textDecoration: 'none'
  },
  changeFirstLetter :{
    textTransform: 'capitalize'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  // const router = useHistory();
  const { setToasty } = useToasty();
  const [ads, setAds] = useState([]);
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [productId, setProductId] = useState([])
  const [removedProducts, setRemovedProducts] = useState([])

  const handleCloseModal = () => setOpenConfirmModal(false)
  const handleOpenModal = () => setOpenConfirmModal(true)



  const handleClickRemove = (productId) =>{
      setProductId(productId)
      setOpenConfirmModal(true)
  }

  
  const handleConfirmRemove = () =>{
    Api.delete('/ad-sale/my/delete', {
      params: {
        id: productId
     }
    }).then(handleSucess)
      .catch(handleError)
  }
  const handleSucess = () =>{
    setOpenConfirmModal(false)
    setRemovedProducts([...removedProducts, productId])
    getAllAds()
    setToasty({
      open: true,
      severity: 'success',
      text: 'Anúncio removido com sucesso!'
    })
  }

  const handleError = () =>{
    setOpenConfirmModal(true)
    setToasty({
      open: true,
      severity: 'error',
      text: 'Erro ao apagar anúncio, tente novamente!'
    })
  }
  

  const getAllAds = async () => {
    try {
      const result = await Api.get("/ad-sale/my/all");
      setAds(result.data);
    } catch (error) {
      
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
        
        
      <Dialog open={openConfirmModal} onClose={handleCloseModal}>
        <DialogTitle>Deseja realmente apagar este anúncio</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ao confirmar essa operação, nao sera possível reverter
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  color="primary">
            Cancelar
          </Button>
          <Button  color="primary" autoFocus>
            Remover
          </Button>
        </DialogActions>
      </Dialog>

    {/* Modal remove product */}
        <Dialog open={openConfirmModal} onClose={handleCloseModal}>
          <DialogTitle>Deseja realmente apagar este anúncio</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ao confirmar essa operação, não será possível reverter.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleConfirmRemove} color="primary" autoFocus>
              Remover
            </Button>
          </DialogActions>
        </Dialog>
        {/* --------- */}
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center">
            Meus Anuncios
          </Typography>
          <Link style={{textDecoration:'none'}}to="/myaccount/publish">
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

        {
          ads.length === 0 &&
            <Typography component='div' variant='body1' align='center' color='textPrimary' gutterBottom>
              Nenhum anúncio publicado.
            </Typography>

          }
        
          <Grid container spacing={4} className={classes.gridContainer}>
            {ads.map((element) => {
              if(removedProducts.includes(element._id)) return null
              return (
              <Grid key={element._id} item xs={12} sm={6} md={4}>
              <Link className={classes.linkNoUnderline} to={`/product/${element._id}`}>
                <Card
                  className={classes.changeFirstLetter}
                  image={element.files[0]}
                  title={element.title.charAt(0).toUpperCase()+ element.title.substring(1)}
                  subtitle={formatCurrency(element.price)}
                  isButton={
                    <>
                    <Link className={classes.linkNoUnderline} to= {`/edit/${element._id}`}>
                      <Button size="small" color="primary">
                        Editar
                      </Button>
                      </Link>
                      <Link className={classes.linkNoUnderline} onClick={e => e.preventDefault()}>
                      <Button onClick={() => handleClickRemove(element._id)} size="small" color="primary">
                        Remover
                      </Button>
                      </Link>
                      </>
                    
                  }
                />
                </Link>
              </Grid>
            )})}
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  );
};

export default Dashboard;
