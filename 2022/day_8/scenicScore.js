function checkEdge(forest, row, column, direction) {
    if(row === 0 && direction === "up") return true;
    if(row === forest.length - 1 && direction === "down") return true;
    if(column === 0 && direction === "left") return true;
    if(column === forest[0].length - 1 && direction === "right") return true;
    return false;
}

function calculate(forest, row, column, direction) {
    let scenicScore = 0;
    let currentRow = row;
    let currentColumn = column;
    if(checkEdge(forest, row, column, direction)) return 1;

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

        if(currentRow < 0 || currentColumn < 0 || currentRow >= forest.length || currentColumn >= forest[0].length) break;

        scenicScore++;
    } while(Number(forest[currentRow][currentColumn]) < Number(forest[row][column]));

    return scenicScore;
}


function calculateScenicScore(forest, row, column) {
    const up = calculate(forest, row, column, "up");
    const right = calculate(forest, row, column, "right");
    const down = calculate(forest, row, column, "down");
    const left = calculate(forest, row, column, "left");

    return up * right * down * left;
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
