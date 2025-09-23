import Grower from "../entities/grower";

// getAll: returns all harvests from source (currently mock data)
function getAll(): Array<Grower> {
    return [
        new Grower(1, "Evergreen Growers", 11237, "/images/farm1.jpg"),
        new Grower(2, "Forever Farms", 11216, "/images/farm2.jpg"),
        new Grower(3, "Red River Acres", 11301, "/images/farm3.jpg"),
    ]
}

export default {
    getAll: getAll,
}