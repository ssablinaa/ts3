interface Motorcycle {
    brand: string;
    frameType: string;
    isSportBike: boolean;
}
declare class Motorcycle {
    brand: string;
    frameType: string;
    isSportBike: boolean;
    constructor(brand: string, frameType: string, isSportBike: boolean);
    getFrameAndSportInfo(): {
        frameType: string;
        isSportBike: boolean;
    };
}
declare const myMotorcycle: Motorcycle;
declare const frameAndSportInfo: {
    frameType: string;
    isSportBike: boolean;
};
