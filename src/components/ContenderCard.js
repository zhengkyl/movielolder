import React from "react";
// import "./ContenderCard.css";

// import movie from "../images/movie.jpg";
import PosterImage from "./PosterImage"

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  IconButton,
  Collapse,
  Paper,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    height: '35vh',
    // width: 200,
    display: 'flex',
    flexDirection: 'row',
    marginTop:24,
    // marginBottom:24,
  },
  // cardExpanded: {
  //   width: 420,
  // },
  // cardActions: {
  //   margin: -20,
  // },
  media: {
    height: '100%',
    width: 'auto'
  },
  // expand: {
  //   transform: 'rotate(-90deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: 'rotate(90deg)',
  // },
}));

function ContenderCard({ id, posterPath, title, summary }) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
      <>
      <Card className={classes.card} raised={true}>
      {/* <Card className={clsx(classes.card, {[classes.cardExpanded]: expanded})} raised={true}> */}
        <CardMedia className ={classes.media}> 
          {/* <Paper elevation={24}> */}
          <PosterImage path={posterPath} />
          {/* </Paper> */}
        </CardMedia>
        {/* <CardActions className={classes.cardActions}>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            color = "primary"
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant='h6'>{children}</Typography>
            <Typography paragraph>
              5/5
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
          </CardContent>
      </Collapse> */}
      </Card>
      <Typography variant="h6">{title}</Typography>
      </>
  );
}

export default ContenderCard;
