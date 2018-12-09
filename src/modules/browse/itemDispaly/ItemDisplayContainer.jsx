import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemDisplay from './ItemDisplay';
import { connect } from 'react-redux'

class ItemDisplayContainer extends Component {

    state = {
        genre: null,
        runtime: null,
        director: null
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
        const movie = this.props.movies.find(mov=> mov.id == movieId);
        this.setState({...movie})
    }

    componentDidMount() {
        if (this.props.id) {
            this.loadData(this.props.id);
        }
    }

    componentDidUpdate(prevProps) {
        if ((this.props.id !== prevProps.id) || (this.props.movies !== prevProps.movies))  {
            this.loadData(this.props.id);
        }
    }

    render() {
        const { id } = this.props;
        const { title, year, poster, runtime, genre, director} = this.state;
        
        return (
           <ItemDisplay 
                title={title}
                id={id}
                poster={poster}
                year={year}
                director={director}
                runtime={runtime}
                genre={genre}/>
        )
    }
}


const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(
    mapStateToProps,
    null
)(ItemDisplayContainer)

