function smartenQuotes(s){
    const htmlAttributeStartReplacement = '<<HTML_ATTRIBUTE_START';
    // will only work with 1 attribute per element
    const htmlAttributeEndReplacement = '<<HTML_ATTRIBUTE_END';

    return s
        // for urls
        .replace(/="/g, htmlAttributeStartReplacement)
        .replace(/">/g, htmlAttributeEndReplacement)
        .replace(/(\s)'/g, '$1‘')
        .replace(/'/g, '’')
        .replace(/(\s)"/g, '$1“')
        .replace(/"/g, '”')
        .replace(new RegExp(htmlAttributeStartReplacement, 'g'), '="')
        .replace(new RegExp(htmlAttributeEndReplacement, 'g'), '">');
}

module.exports = {
    smartenQuotes
};