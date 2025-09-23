class Grower {
    private _id: Number;
    private _name: string;
    private _location: Number; // using zip codes for location
    private _image: string | null;

    constructor(id: Number, name: string, location: Number, image: string) {
        this._id = id;
        this._name = name;
        this._location = location;
        this._image = image;
    }

    get id(): Number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

   get location(): Number {
    return this._location;
   } 

   get image(): string | null {
    return this._image;
   }
}

export default Grower;