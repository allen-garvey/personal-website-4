// from: https://stackoverflow.com/a/16060619
function requireUncached(module) {
    delete require.cache[module];
    return require(module);
}

module.exports = {
    requireUncached,
};
