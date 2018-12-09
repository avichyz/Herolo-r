import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import EditContainer from '../../createOrEdit/EditContainer';
import DeletePrompt from './DeletePrompt';
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
        editOpened: false,
        deleteOpened: false
    }

    handleClose = () => {
        this.setState({ editOpened: false })
    }

    onOpen = () => {
        this.setState({ editOpened: true })
    }

    openDeleteDialog = () => {
        this.setState({ deleteOpened: true })
    }

    closeDeleteDialog = () => {
        this.setState({ deleteOpened: false })
    }
    render() {

        const { title, id, year, runtime, genre, poster, director } = this.props;
        return (
            <div className={styles.container}>
                {
                    id && !poster &&
                    <CircularProgress className={styles.cProgress} /> ||
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

                <div className={styles.buttons}>
                <Button color="primary"
                    onClick={this.onOpen}
                    className={styles.button}>
                    Edit
                </Button>
                <Button color="primary"
                        onClick={this.openDeleteDialog}
                    className={styles.button}>
                    Delete
                </Button>
                </div>

                <DeletePrompt
                    open={this.state.deleteOpened}
                    onClose={this.closeDeleteDialog}
                    onDelete={this.props.onDelete}
                    id={id} />

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.editOpened}
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