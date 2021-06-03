import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  modalImage: {
    width: '100%',
    height: 'auto',
  },
});

export default function ImageCard({ imageUrl }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

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
          <div>
      <Button onClick={handleClickOpen('paper')}>Read More</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{imageUrl[1]}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography style={ { color: '#10142d', whiteSpace: 'pre-line' }} >
            { [...new Array(1)]
              .map(
                () => `${imageUrl[3]}`,
              )
              .join('\n') }
            </Typography>
            {(imageUrl[5] && imageUrl[6]) && <a href={imageUrl[6]} >{imageUrl[5]}</a>}
              <img src={imageUrl[4]} className={`${classes.modalImage}`} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
