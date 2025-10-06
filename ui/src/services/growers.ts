import axios from 'axios';
import Grower from "../entities/grower";

// // mock data.
// const GROWERS = [
//     new Grower(1, "Evergreen Growers", 11237, "/images/farm1.jpg"),
//     new Grower(2, "Forever Farms", 11216, "/images/farm2.jpg"),
//     new Grower(3, "Red River Acres", 11301, "/images/farm3.jpg"),
// ];

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
                `/images/growers/${growerObject.id}.jpg`
            );
            growers.push(newGrower);
        });
    } catch (error) {
        console.log(error)
    }

    return growers;
}

// getById: returns grower associated to id.
function getById(id: string): Grower {
    return GROWERS[id];
} 

export default {
    getAll: getAll,
    getById: getById,
}