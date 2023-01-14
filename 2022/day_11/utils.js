function compare(a, b) {
    return ( a.inspectCounter < b.inspectCounter ) ? -1 : ( a.inspectCounter > b.inspectCounter ) ? 1 : 0;
};

module.exports = compare;