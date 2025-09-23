class Harvest {
    private _id: Number;
    private _grower: Number; // identified by grower ID
    private _name: string;
    private _images: Array<string>;

    constructor(id: Number, grower: Number, name: string, image: string) {
        this._id = id;
        this._grower = grower;
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

    get grower(): Number {
        return this._grower;
    }
}

export default Harvest;