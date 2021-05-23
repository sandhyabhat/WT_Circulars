import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Avatar, CardHeader, IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { deepOrange, deepPurple, white } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import EventNoteIcon from "@material-ui/icons/EventNote";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  subheader: {
    color: "gray",
  },
  pos: {
    marginBottom: 12,
  },
  red: {
    color: "#e3f2fd",
    backgroundColor: deepOrange[500],
  },
}));

function Departments({ dept }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const history = useHistory();

  return (
    <Card className={classes.root} variant="outlined" raised="true">
      <CardContent>
        <CardHeader
          avatar={
            <Avatar style={{ backgroundColor: deepOrange[500] }}>
              {dept.name[0]}
            </Avatar>
          }
          title={dept.name}
          subheader={dept.abbr}
        ></CardHeader>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          style={{backgroundColor:"#1565c0",color:"white"}}
					variant="contained"
          onClick={() => history.push(`/${dept.name}`)}
        >
          CIRCULARS
        </Button>
        <IconButton>
          <EventNoteIcon></EventNoteIcon> 42
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Departments;
