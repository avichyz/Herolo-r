import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { selectMovie, loadMoviesWithData } from '../../redux/actions'
import CreateContainer from '../createOrEdit/CreateContainer';
import Browse from './Browse';
import styles from './browseContainer.scss';


class BrowseContainer extends Component {

    state = ({ addDialogOpened: false, loading: true });

    handleOpen = () => {
        this.setState({ addDialogOpened: true });
    }

    handleClose = () => {
        this.setState({ addDialogOpened: false });
    }

    handleSelectMovie = (id) => {
        this.props.onSelectMovie(id);
    }

    componentDidMount() {
        this.props.loadMovies()
        .then(() => this.setState({loading: false}))
    }

    render() {
        const { selectedId, movies } = this.props;
        const { addDialogOpened, loading } = this.state;
        return (
            <Fragment>
                {
                    loading &&
                    <CircularProgress className={styles.cProgress} /> ||

                    addDialogOpened &&
                    <CreateContainer handleCloseDialog={this.handleClose} /> ||

                    <Browse
                        movies={movies}
                        selectedId={selectedId}
                        handleSelectMovie={this.handleSelectMovie}
                        handleOpenDialog={this.handleOpen}
                        handleCloseDialog={this.handleClose} />
                }
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    movies: (state.movies.movies || []),
    selectedId: state.movies.selectedId
})

const mapDispatchToProps = dispatch => ({
    onSelectMovie: id => dispatch(selectMovie(id)),
    loadMovies: () => dispatch(loadMoviesWithData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BrowseContainer)
