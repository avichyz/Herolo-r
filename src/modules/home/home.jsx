import React, { Component } from 'react';
import styles from './home.scss';


class Home extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.title}>
                    Welcome Watchers!
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.movieImage}
                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                alt="" />
                </div>
            </div>
        )
    }
}

export default Home;