function currentTimestampString(){
    //https://stackoverflow.com/questions/7357734/how-do-i-get-the-time-of-day-in-javascript-node-js
    const currentTime = (new Date()).toJSON().slice(0, 19).replace(/[-T]/g, ':').split(':');
    return `${currentTime[1]}/${currentTime[2]}/${currentTime[0]} ${currentTime[3]}:${currentTime[4]}:${currentTime[5]}`;
}

module.exports = {
    currentTimestampString,
};