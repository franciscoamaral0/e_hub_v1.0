import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useState } from "react";
import Logo from "../eHub_logo-removebg-preview.png";
import Api from "../api/api.config";

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
}));
const Header = () => {
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUserMenu] = useState(false);
  const [name, setName] = useState();
  const openUserMenu = Boolean(anchorUserMenu);

  const userId = localStorage.getItem("userId");
  console.log(userId);

  const handleDataUser = async () => {
    const result = await Api.get("/my-account");
    const name = result.data[0].name;
    setName(name);
  };

  handleDataUser();

  return (
    <>
      <AppBar position="static" elevation={5}>
        <Container maxWidth="lg">
          <Toolbar>
            {/* <Link href='/' passHref> add route to / */}
            <Box variant="h6" className={classes.title}>
              <img src={Logo} alt="logo" width={110} height={50} />
            </Box>
            {/* </Link>   */}
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

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertial: "top",
                horizontal: "right",
              }}
            >
              <MenuItem>Dashboard</MenuItem>
              <MenuItem>Meus Anuncios</MenuItem>
              <MenuItem>Publicar Novo Anuncio</MenuItem>
              <Divider className={classes.divider} />
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
