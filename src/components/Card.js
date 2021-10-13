import { Typography, CardMedia, CardContent, Card as CardMUI, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>({
  
  sizeImage:{
    paddingTop:'56%'
  },
}))




const Card = ({image, title, subtitle, isButton}) =>{
  const classes = useStyles()
  return(
    <>
    <CardMUI>
              <CardMedia
                image={image}
                title={title}
                className={classes.sizeImage}
              />
              <CardContent>
                <Typography variant='h5' component='h2'>
                  {title}
                </Typography>
                <Typography>
                  {subtitle}
                </Typography>
              </CardContent>
              {isButton ?
                (<CardActions>
                  {isButton}
                </CardActions>)
              : null}
              
              
            </CardMUI>
    </>
  )
}

export default Card