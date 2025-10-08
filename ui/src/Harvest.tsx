import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import harvestService from './services/harvests';

const Harvest = () => {
    let { id } = useParams();
    const [harvest, setHarvest] = useState(null);

    useEffect(() => {
        harvestService.getById(Number(id))
            .then((result) => {
                setHarvest(result)
            });
    }, []);

    if (!harvest) {
        return (
            <>
                <h1>Harvest not found...</h1>
            </>
        );
    }

    return (
        <>
            <h1>{String(harvest.name)}</h1>
            <br/>
            <img className="img-large" src={harvest.image} />
            <br/>
            <h2>Description</h2>
            <p>
                This is where we will put the description of the harvest! Also a button below for starting the chat.
            </p>
            <br/>
        </>
    );
}

export default Harvest;