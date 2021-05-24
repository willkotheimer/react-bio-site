import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Slide from "@material-ui/core/Slide";


const useStyles = makeStyles(theme => ({
  root: {
    margin: 150,
    width: 3000,
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function MakeshiftDrawer({ open }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  return (
    <div className="display: flex; flex-wrap: row">
    <Slide direction="right" in={open} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
           
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
          
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
          >
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </div>
    </Slide>
    </div>
  );
}
