interface Motorcycle {
    brand: string;
    frameType: string;
    isSportBike: boolean;
}

class Motorcycle {
    brand: string;
    frameType: string;
    isSportBike: boolean;

    constructor(brand: string, frameType: string, isSportBike: boolean) {
        this.brand = brand;
        this.frameType = frameType;
        this.isSportBike = isSportBike;
    }

    getFrameAndSportInfo(): { frameType: string, isSportBike: boolean } {
        return { frameType: this.frameType, isSportBike: this.isSportBike };
    }
}

const myMotorcycle = new Motorcycle("Honda", "Стальная", true);
const frameAndSportInfo = myMotorcycle.getFrameAndSportInfo();

console.log(JSON.stringify(frameAndSportInfo));