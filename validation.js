function isValidNietEmail(email) {

    const nietEmailPattern =
        /^[a-zA-Z0-9._%+-]+@niet\.co\.in$/;

    return nietEmailPattern.test(email);
}


module.exports = {
    isValidNietEmail
};