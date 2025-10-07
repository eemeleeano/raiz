class Harvest {
    private _id: Number;
    private _name: string;
    private _images: Array<string>;

    constructor(id: Number, name: string, image: string) {
        this._id = id;
        this._name = name;
        this._images = [image];
    }

    get id(): Number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get image(): string {
        return this._images[0];
    }
}

export default Harvest;