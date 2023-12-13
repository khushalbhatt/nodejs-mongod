function mymiddleware(req, res, next) {
    console.log('I am a middleware')
    next()
}

module.exports = mymiddleware;
