import { useParams } from 'react-router';
import growerService from './services/growers';
import harvestService from './services/harvests';

function Grower() {
    let { id } = useParams();
    const grower = growerService.getById(id);
    const harvests = harvestService.getByGrowerId(grower.id);

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
                        <a href={"harvests/" + String(Number(h.id) - 1)}>
                            <img className="img-medium" src={h.image} />
                            {h.name}
                        </a>
                    </li>)}
            </ul>
        </>
    );
}

export default Grower