function removeDuplicates(arr) {
    return arr.map(JSON.stringify).filter((el, i , ar)=> i === ar.indexOf(el)).map(JSON.parse);
}

module.exports = {
    removeDuplicates
}
