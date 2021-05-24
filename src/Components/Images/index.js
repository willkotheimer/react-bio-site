import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ImageCard({ imageUrl }) {
  const classes = useStyles();
  return (
    <Card className={`${classes.root} grow spacer`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ imageUrl[0] }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {imageUrl[1]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {imageUrl[2]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
