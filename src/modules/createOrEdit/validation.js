
const validate = values => {
    const errors = {}

    if (!values.title || !values.title.toString().trim().length) {
        errors.title = 'Required'
    }
    if (!values.year || !values.year.toString().trim().length) {
        errors.year = 'Required'
    } else if (isNaN(Number(values.year))) {
        errors.year = 'Must be a number'
    } else if (values.year > 3000 || values.year < 1500) {
        errors.year = 'Must be between 1500 and 3000'
    }

    if (!values.director || !values.director.toString().trim().length) {
        errors.director = 'Required'
    }
    if (!values.runtime || !values.runtime.toString().trim().length) {
        errors.runtime = 'Required'
    } 

    if (!values.genre || !values.genre.toString().trim().length) {
        errors.genre = 'Required'
    }
    if (!values.poster || !values.poster.toString().trim().length) {
        errors.poster = 'Required'
    }
    return errors
}

export default validate;