import { useState, useEffect } from 'react';
import harvestService from './services/harvests';
import growerService from './services/growers';

function App() {
  const [growers, setGrowers] = useState([]);
  const [harvests, setHarvests] = useState([]);

  useEffect(() => {
    growerService
      .getAll()
      .then(response => {
        setGrowers(response);
      });

    harvestService
      .getAll()
      .then(response => {
        setHarvests(response);
      });
  }, []);

  return (
    <>
      <h1>Raiz</h1>
      <h4>Food Network</h4>

      <h2>Growers</h2>
      <ul>
          {growers.map(g => 
            <li className="grower-view" key={String(g.id)}>
              <a href={"growers/" + String(Number(g.id))}>
                {g.name} - {String(g.location)}
              </a>
            </li>)}
      </ul>
      
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
  )
}

export default App
