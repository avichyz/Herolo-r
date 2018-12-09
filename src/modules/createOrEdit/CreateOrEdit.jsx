import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import validate from './validation';
import { Field, reduxForm } from 'redux-form'
import styles from './createOrEdit.scss';


class CreateOrEdit extends React.Component {

    renderTextField = ({
        input,
        label,
        meta: { touched, error },
        ...custom }) => (
            <div className={styles.textFieldContainer}>
                <TextField
                    label={label}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                    className={styles.textField}
                    margin="normal"
                    floatingLabelText={label}
                    error={error}
                    {...input}
                    {...custom}
                />
                {
                    touched &&
                    error && 
                    <span>{error}</span>
                }
            </div>
        )

    render() {
        const { handleSubmit, pristine, submitting, error } = this.props;
        const renderTextField = this.renderTextField;
        const rootClasses = classNames(styles.root, this.props.className)

        return (
            <Card className={rootClasses}>
                <CardContent className={styles.cardContent}>
                    <form
                        noValidate
                        autoComplete="off"
                        className={styles.form}
                        onSubmit={handleSubmit}>
                        <div className={styles.textBoxes}>
                            <Field
                                name="title"
                                component={renderTextField}
                                label="title"
                            />

                            <Field
                                name="director"
                                component={renderTextField}
                                label="director"
                            />
                            <Field
                                name="year"
                                component={renderTextField}
                                label="year"
                            />
                            <Field
                                name="runtime"
                                component={renderTextField}
                                label="runtime"
                            />

                            <Field
                                name="genre"
                                component={renderTextField}
                                label="genre"
                                multiline
                                rows="4"
                            />

                            <Field
                                name="poster"
                                component={renderTextField}
                                label="Poster"
                            />
                        </div>
                        <div className={styles.actionButtons}>
                            <Button
                                type="submit" className="button-submit"
                                variant="fab" color="primary" aria-label="Add"
                                disabled={error || pristine || submitting}>
                                <SaveIcon />
                            </Button>
                            <Button
                                type="cancel" className="button-submit"
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


CreateOrEdit = reduxForm({
    form: 'createOrEdit',
    enableReinitialize: true,
    validate
})(CreateOrEdit)

export default CreateOrEdit;