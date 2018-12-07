import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import ListItem from './ListItem';
import styles from './list.scss';

class List extends Component {
    static propTypes = {
        movies: PropTypes.array,
        handleSelectMovie: PropTypes.func
    }

    render() {
        const { movies, handleSelectMovie } = this.props;

        return (
            <Card className={styles.card}>
                <ul className={styles.list}>
                    {
                        movies.map((movie, index) => 
                            <ListItem
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                poster={movie.poster}
                                year={movie.year}
                                genre={movie.genre}
                                director={movie.director}
                                runtime={movie.runtime}
                                handleSelectMovie={handleSelectMovie}/>
                        )
                    }
                </ul>
            </Card>
        )
    }
}

export default List;