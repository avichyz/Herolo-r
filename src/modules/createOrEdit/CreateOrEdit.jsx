import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { required } from './validation';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import styles from './createOrEdit.scss';


class CreateOrEdit extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        director: PropTypes.string,
        year: PropTypes.string,
        runtime: PropTypes.string,
        genre: PropTypes.string,
        poster: PropTypes.string,
        className: PropTypes.string,
        handleCloseDialog: PropTypes.func
    }

    state = {
        id: null,
        title: null,
        director: null,
        year: null,
        runtime: null,
        genre: null,
        poster: null
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSave = (event) => {
        event.preventDefault();
        const { id, title, director, year, runtime, genre, poster } = this.state;
        this.props.handleSave(title, year, genre, runtime, director, poster, id);
        this.props.handleCloseDialog();
    }

    componentDidUpdate(prevProps) {
        if (this.props.movie != prevProps.movie) {
            this.setState({ ...this.props.movie });
        }
    }

    render() {
        const { title, director, year, runtime, genre, poster } = this.state;
        const rootClasses = classNames(styles.root, this.props.className)

        return (
            <Card className={rootClasses}>
                <CardContent className={styles.cardContent}>
                    <form
                        noValidate
                        autoComplete="off"
                        className={styles.form}
                        onSubmit={this.handleSave}>
                        <div className={styles.textBoxes}>
                            <TextField
                                required
                                error={required(title)}
                                id="standard-required"
                                label="title"
                                value={title}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleChange('title')}
                                className={styles.textField}
                                margin="normal"
                            />

                            <TextField
                                required
                                error={required(director)}
                                id="standard-required"
                                label="director"
                                value={director}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleChange('director')}
                                className={styles.textField}
                                margin="normal"
                            />
                            <TextField
                                required
                                error={required(year)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="standard-required"
                                label="year"
                                value={year}
                                onChange={this.handleChange('year')}
                                className={styles.textField}
                                margin="normal"
                            />
                            <TextField
                                required
                                error={required(runtime)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="standard-required"
                                label="runtime"
                                value={runtime}
                                onChange={this.handleChange('runtime')}
                                className={styles.textField}
                                margin="normal"
                            />

                            <TextField
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="standard-multiline-static"
                                label="genre"
                                error={required(genre)}
                                value={genre}
                                onChange={this.handleChange('genre')}
                                multiline
                                rows="4"
                                className={styles.textField}
                                margin="normal"
                            />

                            <TextField
                                required
                                error={required(poster)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="standard-required"
                                value={poster}
                                label="Poster"
                                onChange={this.handleChange('poster')}
                                className={styles.textField}
                                margin="normal"
                            />
                        </div>
                        <div className={styles.actionButtons}>
                            <Button
                                type="submit" label="login" className="button-submit"
                                variant="fab" color="primary" aria-label="Add">
                                <SaveIcon />
                            </Button>
                            <Button
                                type="cancel" label="login" className="button-submit"
                                variant="fab" color="primary" aria-label="Cancel"
                                onClick={this.props.handleCloseDialog}>
                                <CancelIcon />
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        );
    }
}


export default CreateOrEdit;