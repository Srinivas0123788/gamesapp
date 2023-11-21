// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function GameDetails() {
//   const [game, setGame] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/games/${id}`)
//       .then((response) => {
//         setGame(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching game details: ', error);
//       });
//   }, [id]);

//   if (!game) {
//     return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
//   }

//   return (
//     <div style={{background:"grey"}}>
//       <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: "2px 1px 30px 3px red",backgroundColor: 'brown', color: 'lightgrey' }}>
//       <h2 style={{ fontSize: '24px', color: 'lightgrey' }}><b>{game.title} DETAILS</b></h2>
//       <img style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} src={game.imageUrl} alt={game.title} />
//       <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}><b>Rating: </b><p style={{color:"lightgrey"}}>{game.rating}</p></p>
//       <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}><b>Storage: </b><p style={{color:"lightgrey"}}>{game.storage}</p></p>
//       <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}><b>Genre: </b><p style={{color:"lightgrey"}}>{game.genre}</p></p>
//       <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}><b>Players: </b><p style={{color:"lightgrey"}}>{game.players}</p></p>
//       <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}><b>Processor: </b><p style={{color:"lightgrey"}}>{game.processor}</p></p>
//       <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}><b>Graphics: </b><p style={{color:"lightgrey"}}>{game.graphics}</p></p>
//       <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}><b>Compatibility: </b><p style={{color:"lightgrey"}}>{game.compatibility}</p></p>
//     </div>
//     </div>
//   );
// }

// export default GameDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GameDetails() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/games/${id}`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.error('Error fetching game details: ', error);
      });
  }, [id]);

  if (!game) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
  }

  return (
    <div style={{ background: 'grey', display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          width: '100%',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          boxShadow: '2px 1px 30px 3px red',
          backgroundColor: 'brown',
          color: 'lightgrey',
        }}
      >
        <h2 style={{ fontSize: '24px', color: 'lightgrey' }}>
          <b>{game.title} DETAILS</b>
        </h2>
        <img style={{ maxWidth: '100%', height: 'auto', marginTop: '10px', borderRadius: '5px' }} src={game.imageUrl} alt={game.title} />
        <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}>
          <b>Rating: </b>
          <span style={{ color: 'lightgrey' }}>{game.rating}</span>
        </p>
        <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}>
          <b>Storage: </b>
          <span style={{ color: 'lightgrey' }}>{game.storage}</span>
        </p>
        <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}>
          <b>Genre: </b>
          <span style={{ color: 'lightgrey' }}>{game.genre}</span>
        </p>
        <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}>
          <b>Players: </b>
          <span style={{ color: 'lightgrey' }}>{game.players}</span>
        </p>
        <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}>
          <b>Processor: </b>
          <span style={{ color: 'lightgrey' }}>{game.processor}</span>
        </p>
        <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}>
          <b>Graphics: </b>
          <span style={{ color: 'lightgrey' }}>{game.graphics}</span>
        </p>
        <p style={{ fontSize: '16px', color: 'black', marginTop: '8px' }}>
          <b>Compatibility: </b>
          <span style={{ color: 'lightgrey' }}>{game.compatibility}</span>
        </p>
      </div>
    </div>
  );
}

export default GameDetails;

