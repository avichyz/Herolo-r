import React from 'react';
import { connect } from 'react-redux'
import { addMovie } from '../../redux/actions';
import CreateOrEdit from './CreateOrEdit';
import styles from './createOrEdit.scss';
import { MuiThemeProvider } from '@material-ui/core';

class CreateContainer extends React.Component {

    handleSaveNewMovie = (title, director, year, runtime, genre, poster) => {
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
            />
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})


const mapDispatchToProps = dispatch => ({
    saveNewMovie: (title, director, year, runtime, genre, poster) =>
        dispatch(addMovie(title, director, year, runtime, genre, poster))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContainer)
