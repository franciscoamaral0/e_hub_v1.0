import { Box, Container, Grid, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer:{
    borderTop: `1px solid ${theme.palette.divider}`,
    
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]:{
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}))


export const Footer = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='md' component='footer' className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Typography color='textSecondary' variant='subtitle1'>Ajuda e Contato</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Typography color='textSecondary' variant='subtitle1'>Comprar e Vender</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Typography color='textSecondary' variant='subtitle1'>Carreiras</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Typography color='textSecondary' variant='subtitle1'>Sobre</Typography>
          </Box>
        </Grid>
      </Grid>

    </Container>
  )
}
