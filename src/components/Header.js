import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Menu,
  MenuItem,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions

} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

import { Link } from "react-router-dom";
import {useState, useContext } from "react";


import Logo from "../eHub_logo-removebg-preview.png";
import Api from "../api/api.config";

import {Context} from '../contexts/AuthContext'


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: "15px 0 15px 0",
  },
  userName: {
    marginLeft: 8,
  },
  divider: {
    margin: "14px 0",
  },
  linkToasty: {
    textDecoration: 'none',
    color: theme.palette.primary.main
  }
}));
const Header = () => {
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUserMenu] = useState(false);
  const [name, setName] = useState();
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const {handleConfirmLogout} =  useContext(Context)

  const handleCloseModal = () => setOpenConfirmModal(false);
  const openUserMenu = Boolean(anchorUserMenu);

  
  const userId = localStorage.getItem("userId");
  console.log(userId);

  const handleDataUser = async () => {
    const result = await Api.get("/my-account");
    const name = result.data[0].name;
    setName(name);
  };

  handleDataUser();

  // const handleConfirmLogout = () => {
  //   localStorage.clear()
  //   window.location = '/'
  // }
    
      
  const handleLogout = () => {
    setOpenConfirmModal(true)
    
  }
  

  return (
    <>
    <Dialog open={openConfirmModal} onClose={handleCloseModal}>
        <DialogTitle>Deseja realmente deslogar?</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Não
          </Button>
          <Button onClick={handleConfirmLogout} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
      <AppBar position="static" elevation={5}>
        <Container maxWidth="lg">
          <Toolbar>
            
            
            <Box variant="h6" className={classes.title}>
            <Link to='/'>
              <img src={Logo} alt="logo" width={110} height={50} />
            </Link>
            </Box>
            
            <Box className={classes.responsiveHeader}>
              <Link
                to={name ? "/myaccount/publish" : "/login"}
                style={{ textDecoration: "none" }}
              >
                <Button variant="outlined" color="secondary">
                  
                  Anunciar e Vender
                </Button>
              </Link>

              {name ? (
                <IconButton
                  color="secondary"
                  onClick={(e) => setAnchorUserMenu(e.currentTarget)}
                >
                  <AccountCircle />

                  <Typography
                    className={classes.userName}
                    variant="subtitle2"
                    color="secondary"
                  >
                    {`Olá, ${name}`}
                  </Typography>
                </IconButton>
              ) : null}
            </Box>
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertial: "top",
                horizontal: "right",
              }}
            >

            <Link className={classes.linkToasty} to='/myaccount'> <MenuItem>Meus Anuncios</MenuItem></Link>
            <Link className={classes.linkToasty} to='/myaccount/publish'> <MenuItem>Publicar Novo Anuncio</MenuItem> </Link>
              <Divider className={classes.divider} />
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
