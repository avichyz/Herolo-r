import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemDisplay from './ItemDisplay';
import { deleteMovie, clearSelectedId } from '../../../redux/actions';
import { connect } from 'react-redux'

class ItemDisplayContainer extends Component {

    state = {
        title: null,
        year: null,
        genre: null,
        runtime: null,
        director: null,
        poster: null
    }

    static proptypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
        genre: PropTypes.string,
        runtime: PropTypes.string,
        director: PropTypes.string,
    }

    loadData = (movieId) => {
        const movie = this.props.movies.find(mov => mov.id == movieId);
        this.setState({ ...movie })
    }

    handleDelete = (id) => {
        this.props.handleDelete(id)
        this.props.clearSelected()
    }
    componentDidMount() {
        if (this.props.id) {
            this.loadData(this.props.id);
        }
    }

    componentDidUpdate(prevProps) {
        if ((this.props.id !== prevProps.id) || (this.props.movies !== prevProps.movies)) {
            this.loadData(this.props.id);
        }
    }

    render() {
        const { id } = this.props;
        const { title, year, poster, runtime, genre, director } = this.state;

        return (
            <ItemDisplay
                title={title}
                id={id}
                poster={poster}
                year={year}
                director={director}
                runtime={runtime}
                genre={genre}
                onDelete={this.handleDelete} />
        )
    }
}


const mapStateToProps = state => ({
    movies: state.movies.movies
})


const mapDispatchToProps = dispatch => ({
    handleDelete: (id) =>
        dispatch(deleteMovie(id)),
    clearSelected: () => dispatch(clearSelectedId())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDisplayContainer)

