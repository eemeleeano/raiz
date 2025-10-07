import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import growerService from './services/growers';
import harvestService from './services/harvests';

// main page for growers. this is where they will have information about
// their operation, images, bios, harvests available and maybe contact info.

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

    if (grower) {
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
                            <a href={"/harvests/" + String(Number(h.id))}>
                                <img className="img-medium" src={h.image} />
                                {h.name}
                            </a>
                        </li>)}
                </ul>
            </>
        );
    } else {
        return (
            <>
                <h1>Grower not found.</h1>
            </>
        );
    }
}

export default Grower