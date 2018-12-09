import React from 'react';
import { connect } from 'react-redux'
import { addMovie } from '../../redux/actions';
import CreateOrEdit from './CreateOrEdit';
import styles from './createOrEdit.scss';

class CreateContainer extends React.Component {

    handleSaveNewMovie = (values) => {
        const { title, director, year, runtime, genre, poster } = values;

        if (this.props.movies.find(mov => mov.title === title))
            throw "Movie name already exists!";

        this.props.saveNewMovie(title, director, year, runtime, genre, poster)
        this.props.handleCloseDialog();

    }

    render() {
        return (
            <CreateOrEdit
                className={styles.width100}
                handleSave={this.handleSaveNewMovie}
                handleCloseDialog={this.props.handleCloseDialog}
                onSubmit={this.handleSaveNewMovie}
            />
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})


const mapDispatchToProps = dispatch => ({
    saveNewMovie: (title, director, year, runtime, genre, poster) =>
        dispatch(addMovie(title, director, year, runtime, genre, poster))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContainer)
