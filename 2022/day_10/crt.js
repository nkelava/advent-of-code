class CRT {
    constructor(height, width) {
        this.screen = new Array(height).fill("........................................");
        this.height = height;
        this.width = width;
        this.currentPixelRow = 0;
        this.currentPixelColumn = 0;
    }

    drawPixel(register) {
        const sprite = [register - 1, register, register + 1];

        if(sprite.includes(this.currentPixelColumn)) {
            this.changePixelValue();
        }
        
        this.movePixel();
    }

    changePixelValue() {
        const pixelRow = this.screen[this.currentPixelRow];
        const leftPixels = pixelRow.substring(0, this.currentPixelColumn);
        const rightPixels = pixelRow.substring(this.currentPixelColumn + 1);
        this.screen[this.currentPixelRow] = leftPixels + "#" + rightPixels;
    }

    movePixel() {
        if(this.currentPixelRow >= this.height || this.currentPixelColumn >= this.width) return;    
        const pixelColumnAtEnd = (this.currentPixelColumn === this.width - 1);
        
        if(pixelColumnAtEnd) this.currentPixelRow++;
    
        this.currentPixelColumn = (pixelColumnAtEnd) ? 0 : this.currentPixelColumn + 1;
    }

    display() {
        console.log("CRT: \n");
        this.screen.forEach(pixelRow => console.log(pixelRow));
        console.log("\n");
    }
}

module.exports = CRT;
