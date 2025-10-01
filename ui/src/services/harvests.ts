import Harvest from "../entities/harvest";

const HARVESTS = [
    new Harvest(1, 1, "Meyer Lemon", "/images/harvest1.jpg"),
    new Harvest(2, 3, "Arugula", "/images/harvest2.jpg"),
    new Harvest(3, 2, "Green Cabbage", "/images/harvest3.jpg"),
];

// getAll: returns all harvests from source (currently mock data)
function getAll(): Array<Harvest> {
    return HARVESTS;
}

function getByGrowerId(id: Number): Array<Harvest> {
    return HARVESTS.filter(harvest => harvest.grower === id);
}

export default {
    getAll: getAll,
    getByGrowerId: getByGrowerId,
}