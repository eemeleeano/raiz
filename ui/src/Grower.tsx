import { useParams } from 'react-router';

function Grower() {
    let { id } = useParams();
    return (
        <h1>Grower - {id}</h1>
    );
}

export default Grower