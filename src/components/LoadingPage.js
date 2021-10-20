import React from 'react';
import ReactLoading from 'react-loading';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';



const useStyles = makeStyles((theme) =>({
  backgroundContainer: {
    height: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    
  }
}))

const Example = ({ type, color }) => {
  const classes = useStyles()
  
  return (
    
    <Container  className={classes.backgroundContainer} maxWidth='mx' >

    <ReactLoading type={type} color={color} height={200} width={150} />
    </Container>
    
  
  )
}

 
export default Example;