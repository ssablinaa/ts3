class Motorcycle {
    constructor(brand, frameType, isSportBike) {
        this.brand = brand;
        this.frameType = frameType;
        this.isSportBike = isSportBike;
    }
    getFrameAndSportInfo() {
        return { frameType: this.frameType, isSportBike: this.isSportBike };
    }
}
const myMotorcycle = new Motorcycle("Honda", "Стальная", true);
const frameAndSportInfo = myMotorcycle.getFrameAndSportInfo();
console.log(JSON.stringify(frameAndSportInfo));
