class CRT {
    constructor(height) {
        this.screen = new Array(height).fill("........................................");
        this.rowLength = 40;
        this.currentRow = 0;
        this.currentDrawPosition = 0;
    }

    drawPixel(register) {
        const sprite = [register - 1, register, register + 1];

        if(sprite.includes(this.currentDrawPosition)) {
            this.changePixel();
        }
        
        this.move();
    }

    changePixel() {
        const row = this.screen[this.currentRow];
        const left = row.substring(0, this.currentDrawPosition);
        const right = row.substring(this.currentDrawPosition + 1);
        this.screen[this.currentRow] = left + "#" + right;
    }

    move() {
        if (this.currentDrawPosition > 38 && this.currentRow < 6) {
            ++this.currentRow;
            this.currentDrawPosition = 0;
            return;
        }        
        
        ++this.currentDrawPosition;
    }

    display() {
        // this.screen.forEach(row => console.log(row));
        console.log(this.screen)
    }
}

module.exports = CRT;
