import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},
  thumbsContainer: {
    display: "flex",
    marginTop: 15,
    flexWrap: "wrap",
  },
  // Area interna com borda dashed
  dropZone: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    textAlign: " center",
    padding: 10,
    margin: "0 15px 15px 0",

    width: 200,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: "2px dashed black",
  },
  thumb: {
    position: "relative",
    width: 200,
    height: 150,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    margin: "0 15px 15px 0",

    // Destaque da foto principal
    "& $mainImage": {
      backgroundColor: "#c8f8f6",
      padding: "6px 10px",
      position: "absolute",
      bottom: "0",
      left: "0",
    },
    // Hover no thumb
    "&:hover $mask": {
      display: "flex",
    },
    // Mascara negra
    "& $mask": {
      backgroundColor: "rgba(0,0,0,0.7)",
      width: "100%",
      height: "100%",
      display: "none",
      justifyContent: "center",
      alignItems: "center",
      textAlign: " center",
    },
    
  },
}));

export default useStyles