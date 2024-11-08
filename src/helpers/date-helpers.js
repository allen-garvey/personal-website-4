function currentTimestampString() {
    return new Date().toISOString().replace(/T|\..*$/g, ' ');
}

module.exports = {
    currentTimestampString,
};
