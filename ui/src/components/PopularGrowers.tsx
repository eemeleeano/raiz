import growerService from '../services/growers'

const View = ({ grower }) => {
    return (
        <li>
            {grower.name}
            {grower.location}
            <img src={grower.image} />
        </li>
    )
}

const PopularGrowers = () => {
    const growers = growerService.getAll();

    return (
        <div>
            <h2>Popular growers</h2>
            <ul>
                {growers.map(g => <View key={String(g.id)} grower={g} />)}
            </ul>
        </div>
    )
}

export default PopularGrowers