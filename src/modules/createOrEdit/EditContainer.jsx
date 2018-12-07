import React from 'react';
import { connect } from 'react-redux'
import { editMovie } from '../../redux/actions';
import CreateOrEdit from './CreateOrEdit';

class EditContainer extends React.Component {

    state = {
        id: null,
        title: null,
        year: null,
        director: null,
        runtime: null,
        genre: null,
        poster: null
    }

    loadData = (movieId) => {
        const movie = this.props.movies.find(mov => mov.id == movieId);
        this.setState({ ...movie })
    }

    componentDidMount() {
        if(this.props.id) {
            this.loadData(this.props.id);
        }
    }
    render() {
        return (
            <CreateOrEdit
                movie={this.state}
                handleSave={this.props.editExistedMovie}
                handleCloseDialog={this.props.handleCloseDialog}
            />
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => ({
    editExistedMovie: (title, year, genre, runtime, director, poster, id) =>
        dispatch(editMovie(id,title, year, genre, runtime, director, poster))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditContainer)
