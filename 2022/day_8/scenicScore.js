function hasCrossedEdge(forest, currentRow, currentColumn) {
    if(currentRow < 0) return true; 
    if(currentColumn < 0) return true;
    if(currentRow >= forest.length) return true;
    if(currentColumn >= forest[0].length) return true;
    return false;
}

function calculate(forest, row, column, direction) {
    let scenicScore = 0, currentRow = row, currentColumn = column;

    do {
        switch(direction) {
            case "up":
                --currentRow;
                break;
            case "right":
                ++currentColumn;
                break;
            case "down":
                ++currentRow;
                break;
            case "left":
                --currentColumn;
                break;
        }

        if(hasCrossedEdge(forest, currentRow, currentColumn)) break;
        
        scenicScore++;
    } while(Number(forest[currentRow][currentColumn]) < Number(forest[row][column]));

    return scenicScore;
}

function calculateScenicScore(forest, row, column) {
    const moves = ["up", "right", "down", "left"];

    const product = moves.reduce((product, move) => {
        return product * calculate(forest, row, column, move);
    }, 1);

    return product;
}

function findHighestScenicScore(map) {
    let highestScenicScore = 0;
    let scenicScore = 0;

    map.forEach((row, rowIndex) => {
        row.forEach((_, treeIndex) => {
            scenicScore = calculateScenicScore(map, rowIndex, treeIndex);

            if(scenicScore > highestScenicScore) {
                highestScenicScore = scenicScore;
            }
        })
    });

    return highestScenicScore;
}

module.exports = {
    findHighestScenicScore
}
