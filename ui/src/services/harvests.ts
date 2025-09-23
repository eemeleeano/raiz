import Harvest from "../entities/harvest";

// getAll: returns all harvests from source (currently mock data)
function getAll(): Array<Harvest> {
    return [
        new Harvest(1, 1, "Meyer Lemon", "/images/harvest1.jpg"),
        new Harvest(2, 3, "Arugula", "/images/harvest2.jpg"),
        new Harvest(3, 2, "Green Cabbage", "/images/harvest3.jpg"),
    ]
}

export default {
    getAll: getAll,
}