import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 80,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flex: 1,
  },
  appBar: {
    background: "white",
  },
  hyperlink: {
    color: "darkgray",
    marginRight: theme.spacing(2),
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <div className={classes.root}>
      {/* <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <div>
            <a className={classes.hyperlink}>Home</a>
            <a className={classes.hyperlink}>Resources</a>
          </div>
        </Toolbar>
      </AppBar> */}
      <AppBar position="static" className={classes.appBar}>
  <Toolbar>
    <img src={logo} alt="logo" className={classes.logo} />
    <Typography variant="h6" className={classes.title}>
      
    </Typography>
    <Link href="https://survivorcentral.org/" className={classes.hyperlink}>Home</Link>
    <Link href="https://survivorcentral.org/" className={classes.hyperlink}>Resources</Link>
  </Toolbar>
</AppBar>
    </div>
  );
};
export default NavBar;
