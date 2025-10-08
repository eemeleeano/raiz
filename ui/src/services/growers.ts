import axios from 'axios';
import Grower from "../entities/grower";

const instance = axios.create({
    baseURL: 'http://localhost:9001',
});

// getAll: returns all harvests from source (currently mock data)
async function getAll(): Promise<Array<Grower>> {
    var growers: Array<Grower> = [];

    try {
        const response = await instance.get('/growers');
        response.data.map((object) => {
            growers.push(new Grower(
                object.id,
                object.name,
                object.location,
                `/images/growers/farm${object.id}.jpg`
            ));
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
        const response = await instance.get(`/growers/${id}`);
        const object = response.data;

        grower = new Grower(
            object.id,
            object.name,
            object.location,
            `/images/growers/farm${object.id}.jpg`
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