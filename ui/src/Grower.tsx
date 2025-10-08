import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import growerService from './services/growers';
import harvestService from './services/harvests';

// main page for growers. this is where they will have information about
// their operation, images, bios, harvests available and maybe contact info.

const Harvest = ({ id, name, imageLocation }) => {
    return (
        <a href={"/harvests/" + String(Number(id))}>
            <img className="img-medium" src={imageLocation} />
                {name}
        </a>
    );   
}

function Grower() {
    let { id } = useParams();
    const [grower, setGrower] = useState(null);
    const [harvests, setHarvests] = useState([]);

    useEffect(() => {
        growerService.getById(id)
            .then((result) => {
                setGrower(result);
            });
        
        harvestService.getByGrowerId(Number(id))
            .then((result) => {
                setHarvests(result)
            });
    }, []);

    if (!grower) {
        return (
            <>
                <h1>Grower not found.</h1>
            </>
        );
    }

    return ( 
        <>
            <h1 className="grower-title">{grower.name}</h1>
            <img src={grower.image} />
            <p>
                Bio goes here...
            </p>

            <h2>Harvests</h2>
            <ul>
                {harvests.map(h => 
                    <li key={String(h.id)}>
                        <Harvest id={h.id} 
                            name={h.name} 
                            imageLocation={h.image} />
                    </li>)}
            </ul>
        </>
    );
}

export default Grower