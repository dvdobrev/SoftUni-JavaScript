class Rectangle {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;    
    }

    calcArea() {
        let result = this.width * this.height;
        return result;
}       
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());