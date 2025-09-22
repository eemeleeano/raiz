const Grower = (props) => {
    const name = props.name;
    const location = props.location;
    const image = props.image;

    return (
        <div>
            {name}
            {location}
            <img src={image} />
        </div>
    )
}

function generateGrowers(k) {
    return k;
}

const PopularGrowers = ({ k }) => {
    console.log(`asked for ${k} growers, providing 3 for now.`);

    const growers = [
        { id: "1", name: "Evergreen Growers", location: "11237", image: "/images/farm1.jpg" },
        { id: "2", name: "Forever Farms", location: "11216", image: "/images/farm2.jpg" },
        { id: "3", name: "Red River Acres", location: "11301", image: "/images/farm3.jpg" },
    ]

    return (
        <div>
            <p>Popular growers</p>
            <ul>
                {growers.map(info => 
                    <Grower 
                        key={info.id} 
                        name={info.name} 
                        location={info.location} 
                        image={info.image} />)}
            </ul>
        </div>
    )
}

export default PopularGrowers