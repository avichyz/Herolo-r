import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from '../modules/home/home';
import styles from './shell.scss'
import BrowseContainer from '../modules/browse/BrowseContainer';

class Shell extends Component {
    render() {

        return (
            <div className={styles.root}>
                <AppBar position="static" color="default" className={styles.appBar}>
                    <Toolbar>
                        <Link to='/'><Button>Home</Button></Link>
                        <Link to='/browse'><Button>Browse</Button></Link>
                    </Toolbar>
                </AppBar>
                <div className={styles.content}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/browse' component={BrowseContainer} />
                    </Switch>
                </div>
            </div>

        )
    }
}

export default Shell;