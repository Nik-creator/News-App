import React, { useCallback, useMemo } from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  CssBaseline,
  Drawer,
  List,
  Divider,
  IconButton,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar/index';
import listItems from './listItems';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard:FC = ({ children }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = useCallback(
    () => {
      setOpen(true);
    }, [open]
  );
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderSection:React.ReactNode = useMemo(
    () =>
      listItems.map(({ path, text, icon: Icon }) => (
        <NavLink to={path} style={{ color: '#000', textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              {Icon && (
                <Icon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </NavLink>
      )),
    []
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>{renderSection}</div>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <>
            {children}
          </>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
