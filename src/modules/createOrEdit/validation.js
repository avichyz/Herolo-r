
export const required = (value) => {
    if (!value || !value.toString().trim().length) {
        return true;
    }
    return false;


};
