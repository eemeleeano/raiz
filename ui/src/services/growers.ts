import axios from 'axios';
import Grower from "../entities/grower";

// getAll: returns all harvests from source (currently mock data)
async function getAll(): Promise<Array<Grower>> {
    var growers: Array<Grower> = [];

    try {
        const response = await axios.get('http://localhost:9001/growers');
        response.data.map((growerObject) => {
            const newGrower = new Grower(
                growerObject.id,
                growerObject.name,
                growerObject.location,
                `/images/growers/farm${growerObject.id}.jpg`
            );
            growers.push(newGrower);
        });
    } catch (error) {
        console.log(error)
    }

    return growers;
}

// getById: returns grower associated to id.
async function getById(id: string): Promise<Grower> {
    var grower: Grower = null;

    try {
        const response = await axios.get(`http://localhost:9001/growers/${id}`);
        const growerObject = response.data;

        grower = new Grower(
            growerObject.id,
            growerObject.name,
            growerObject.location,
            `/images/growers/farm${growerObject.id}.jpg`
        );
    } catch (error) {
        console.log(error)
    }

    return grower;
} 

export default {
    getAll: getAll,
    getById: getById,
}