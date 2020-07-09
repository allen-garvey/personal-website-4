function smartenQuotes(s){
    return s
        .replace(/(\s)'/g, '$1‘')
        .replace(/'/g, '’')
        .replace(/(\s)"/g, '$1“')
        .replace(/"/g, '”');
}

module.exports = {
    smartenQuotes
};