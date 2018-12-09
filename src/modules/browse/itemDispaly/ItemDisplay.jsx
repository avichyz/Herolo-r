import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import EditContainer from '../../createOrEdit/EditContainer';
import loading from '../../../assets/loading.gif';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import styles from './itemDisplay.scss';

class ItemDisplay extends Component {

    static proptypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
        genre: PropTypes.string,
        runtime: PropTypes.string,
        director: PropTypes.string,
    }

    state = {
        opened: false
    }

    handleClose = () => {
        this.setState({ opened: false })
    }

    onOpen = () => {
        this.setState({ opened: true })
    }


    render() {

        const { title, id, year, runtime, genre, poster, director } = this.props;
        return (
            <div className={styles.container}>
                {
                    id && !poster &&
                    <CircularProgress className={styles.cProgress}/> ||
                    <Fragment>
                        <img
                            className={styles.img}
                            src={poster}
                            alt="">
                        </img>
                        <div className={styles.details}>
                            <div className={styles.title}>
                                {title}
                            </div>
                            <div className={styles.year}>
                                {`year: ${year}`}
                            </div>
                            <div className={styles.director}>
                                {`director: ${director}`}
                            </div>
                            <div className={styles.runtime}>
                                {`runtime: ${runtime}`}
                            </div>
                            <div className={styles.genre}>
                                {`genre: ${genre}`}
                            </div>
                        </div>
                    </Fragment>
                }
                <Button color="primary"
                    onClick={this.onOpen}
                    className={styles.button}>
                    Edit
                </Button>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.opened}
                    onClose={this.handleClose}>
                    <EditContainer
                        handleCloseDialog={this.handleClose}
                        id={id} />
                </Modal>
            </div>
        )
    }
}

export default ItemDisplay;