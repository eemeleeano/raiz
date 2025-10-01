import { useParams } from 'react-router';
import harvestService from './services/harvests';

const Harvest = () => {
    let { id } = useParams();
    const harvest = harvestService.getById(Number(id));

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