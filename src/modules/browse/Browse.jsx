import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import List from './list/List';
import ItemDisplayContainer from './itemDispaly/ItemDisplayContainer'
import Card from '@material-ui/core/Card';
import styles from './browse.scss';


class Browse extends Component {
    static defaultProps = {
        movies: []
    }

    static propTypes = {
        movies: PropTypes.array,
        selectedId: PropTypes.string,
        selectedTitle: PropTypes.string,
        selectedYear: PropTypes.string,
        selectedPoster: PropTypes.string,
        handleSelectMovie: PropTypes.func
    }

    render() {
        const {
            movies,
            handleSelectMovie,
            handleOpenDialog,
            handleCloseDialog,
            selectedId } = this.props;

        return (
            <Card className={styles.root}>
                <Header
                    moviesCount={movies.length}
                    onAdd={handleOpenDialog}
                    onClose={handleCloseDialog} />
                <div className={styles.listAndItemDisplay}>
                    {
                        selectedId &&
                        <ItemDisplayContainer
                            id={selectedId} />
                    }
                    <List
                        movies={movies}
                        handleSelectMovie={handleSelectMovie} />
                </div>
            </Card>
        )
    }
}

export default Browse;