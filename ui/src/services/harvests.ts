import axios from 'axios';
import Harvest from "../entities/harvest";

const instance = axios.create({
    baseURL: 'http://localhost:9001',
});

// getAll: returns all harvests from source (currently mock data).
async function getAll(): Promise<Array<Harvest>> {
    var harvests: Array<Harvest> = [];

    try {
        const response = await instance.get(`/harvests`);
        response.data.map((object) => {
            harvests.push(new Harvest(
                object.id,
                object.name,
                `/images/harvests/harvest${object.id}.jpg`
            ));
        });
    } catch (error) {
        console.log(error)
    }

    return harvests;
}

// getByGrowerId: returns harvests associated to a grower id.
async function getByGrowerId(id: Number): Promise<Array<Harvest>> {
    var harvests: Array<Harvest> = [];

    try {
        const response = await instance.get(`/harvests?grower_id=${id}`);
        response.data.map((object) => {
            harvests.push(new Harvest(
                object.id,
                object.name,
                `/images/harvests/harvest${object.id}.jpg`
            ));
        });
    } catch (error) {
        console.log(error)
    }

    return harvests;
}

// getById: returns harvest associated to id.
async function getById(id: Number): Promise<Harvest> {
    var harvest: Harvest = null;

    try {
        const response = await instance.get(`/harvests/${id}`);
        response.data.map((object) => {
            harvest = new Harvest(
                object.id,
                object.name,
                `/images/harvests/harvest${object.id}.jpg`
            );
        });
    } catch (error) {
        console.log(error)
    }

    return harvest;
}

export default {
    getAll: getAll,
    getByGrowerId: getByGrowerId,
    getById: getById,
}