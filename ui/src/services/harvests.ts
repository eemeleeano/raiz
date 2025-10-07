import axios from 'axios';
import Harvest from "../entities/harvest";

// getAll: returns all harvests from source (currently mock data).
async function getAll(): Promise<Array<Harvest>> {
    var harvests: Array<Harvest> = [];

    try {
        const response = await axios.get(`http://localhost:9001/harvests`);
            response.data.map((harvestObject) => {
                const newHarvest = new Harvest(
                    harvestObject.id,
                    harvestObject.name,
                    `/images/harvests/harvest${harvestObject.id}.jpg`
                );
                harvests.push(newHarvest);
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
        const response = await axios.get(`http://localhost:9001/harvests?grower_id=${id}`);
            response.data.map((harvestObject) => {
                const newHarvest = new Harvest(
                    harvestObject.id,
                    harvestObject.name,
                    `/images/harvests/harvest${harvestObject.id}.jpg`
                );
                harvests.push(newHarvest);
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
        const response = await axios.get(`http://localhost:9001/harvests/${id}`);
            response.data.map((harvestObject) => {
                harvest = new Harvest(
                    harvestObject.id,
                    harvestObject.name,
                    `/images/harvests/harvest${harvestObject.id}.jpg`
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