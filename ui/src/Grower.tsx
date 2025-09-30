import { useParams } from 'react-router';
import growerService from './services/growers';

function Grower() {
    let { id } = useParams();
    const grower = growerService.getById(id);

    return ( 
        <>
            <h1>{grower.name}</h1>
            <img src={grower.image} />
            <p>
                Bio goes here...
            </p>
        </>
    );
}

export default Grower