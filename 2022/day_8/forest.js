function checkIfEdge(map, rowIndex, treeIndex) {
    const height = map.length - 1;
    const width = map[0].length - 1;

    return (rowIndex === 0 || rowIndex === height || treeIndex === 0 || treeIndex === width);
}

function checkHorizontally(row, treeIndex) {
    let foundGreaterCount = 0;

    for(let i = 0; i < row.length; ++i) {
        if(i === treeIndex) continue;

        if(Number(row[i]) >= Number(row[treeIndex])) {
            ++foundGreaterCount;
            i = (i < treeIndex) ? treeIndex : row.length;
        }
    }

    return (foundGreaterCount > 1) ? false : true;
}

function checkVertically(map, row, column) {
    let foundGreaterCount = 0;

    for(let i = 0; i < map.length; ++i) {
        if (i === row) continue;

        if(Number(map[i][column]) >= Number(map[row][column])) {
            ++foundGreaterCount;
            i = (i < row) ? row : map.length;
        }
    }

    return (foundGreaterCount > 1) ? false : true;
}

function checkIfVisible(map, rowIndex, treeIndex) {
    if(checkIfEdge(map, rowIndex, treeIndex)) return true;
    if(checkHorizontally(map[rowIndex], treeIndex)) return true;
    if(checkVertically(map, rowIndex, treeIndex)) return true;
    return false;
}

function countVisibleTrees(map) {
    let visibleTreeCounter = 0;

    map.forEach((row, rowIndex) => {
        row.forEach((_, treeIndex) => {
            if (checkIfVisible(map, rowIndex, treeIndex)) {
                ++visibleTreeCounter;
            }
        });
    })

    return visibleTreeCounter;
}

module.exports = {
    countVisibleTrees
}
