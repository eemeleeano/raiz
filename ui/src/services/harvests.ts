import axios from 'axios';
import Harvest from "../entities/harvest";

// mock data.
const HARVESTS = [
    new Harvest(1, 1, "Meyer Lemon", "/images/harvest1.jpg"),
    new Harvest(2, 3, "Arugula", "/images/harvest2.jpg"),
    new Harvest(3, 2, "Green Cabbage", "/images/harvest3.jpg"),
];

// getAll: returns all harvests from source (currently mock data).
function getAll(): Array<Harvest> {
    return HARVESTS;
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
                    harvestObject.location,
                    `/images/growers/farm${harvestObject.id}.jpg`
                );
                harvests.push(newHarvest);
            });
    } catch (error) {
        console.log(error)
    }

    return harvests;
}

// getById: returns harvest associated to id.
function getById(id: Number): Harvest {
    return HARVESTS.filter(harvest => harvest.id === id)[0];
}

export default {
    getAll: getAll,
    getByGrowerId: getByGrowerId,
    getById: getById,
}