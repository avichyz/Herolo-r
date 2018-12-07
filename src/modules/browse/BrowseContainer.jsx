import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { selectMovie, loadMoviesWithData } from '../../redux/actions'

import Browse from './Browse';
import CreateContainer from '../createOrEdit/CreateContainer';


class BrowseContainer extends Component {

    state = ({ addDialogOpened: false });

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
        this.props.loadMovies();
    }

    render() {
        const { selectedId, movies } = this.props;

        return (
            <Fragment>
                {
                    !this.state.addDialogOpened &&
                    <Browse
                        movies={movies}
                        selectedId={selectedId}
                        handleSelectMovie={this.handleSelectMovie}
                        handleOpenDialog={this.handleOpen}
                        handleCloseDialog={this.handleClose} />
                }
                {
                    this.state.addDialogOpened &&
                    <CreateContainer handleCloseDialog={this.handleClose} />

                }
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    movies: (state.movies || []),
    selectedId: state.selectedId
})

const mapDispatchToProps = dispatch => ({
    onSelectMovie: id => dispatch(selectMovie(id)),
    loadMovies: () => dispatch(loadMoviesWithData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BrowseContainer)
