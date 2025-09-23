import harvestService from '../services/harvests'

const View = ({ harvest }) => {
    return (
        <li>
            {harvest.name}
            <img src={harvest.image} />
        </li>
    )
}

const HarvestFeed = () => {
    const harvests = harvestService.getAll();

    return (
        <div>
            <h2>Harvests nearby</h2>
            <ul>
                {harvests.map(h => <View key={String(h.id)} harvest={h} />)}
            </ul>
        </div>
    )
}

export default HarvestFeed