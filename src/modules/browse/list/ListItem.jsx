import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import loading from '../../../assets/loading.gif';
import styles from './listItem.scss';

class ListItem extends Component {

    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        poster: PropTypes.string,
        year: PropTypes.string
    };

    capitalize = (text) => {
        return text && text.toLowerCase().split(' ').map((s) => s.charAt(0)
            .toUpperCase() + s.substring(1)).join(' ') || "";

    }

    normalize = (text) => {
        return text && text.replace(/[^a-zA-Z ]/g, "") || "";
    }
    
    handleSelectMovie = () => {
        const { handleSelectMovie, id } = this.props;
        handleSelectMovie(id);
    }

    render() {
        const { title, poster, year, director } = this.props;
        const image = poster ? poster : loading;
        const { capitalize, normalize, handleSelectMovie } = this;

        return (
            <Fragment>
                <div
                    className={styles.itemContainer}
                    onClick={handleSelectMovie}>
                    <img
                        className={styles.img}
                        src={image}
                        alt={loading}>
                    </img>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>
                            {capitalize(normalize(title))}
                        </div>
                        <div className={styles.director}>
                            {director}
                        </div>
                        <div className={styles.year}>
                            {year}
                        </div>
                    </div>
                </div>
                <hr></hr>
            </Fragment>
        )
    }
}

export default ListItem;