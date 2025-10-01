import { useParams } from 'react-router';
import growerService from './services/growers';
import harvestService from './services/harvests';

const Harvest = () => {
    let { id } = useParams();
    const harvest = harvestService.getById(Number(id));

    return (
        <>
            <h1>{String(harvest.name)}</h1>
        </>
    );
}

export default Harvest;