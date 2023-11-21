// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import './AnimalList.css'
// import {Link, useNavigate} from "react-router-dom";
 
// function GameList() {
//   const [games, setGames] = useState([]);
//   const navigate = useNavigate();
 
//   useEffect(() => {
//     const token = localStorage.getItem("token");
 
//     if (!token) {
//       navigate("/login");
//     } else {
//       axios
//         .get("http://localhost:5000/games/all", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           setGames(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching animal data: ", error);
//         });
//     }
//   }, [navigate]);
 
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };
 
 
//   return (
//     <div  >
//       <div style={{"display":"grid" , "gridTemplateColumns":"11fr 1fr" }}>
//       <h1 style={{"textAlign":"center","margin":"20px"}}>Games List</h1>
//       <button onClick={handleLogout} className="logout-button" style={{"border":"1px solid lightgreen","outline":"0" , "width":"100px","height":"40px","marginTop":"25px" ,"background":"transparent"}} >Logout</button>
//       </div>
//     <div className="game-list" style={{"display":"grid","gridTemplateRows":"2fr 2fr 2fr", "gridTemplateColumns":"1fr 1fr 1fr", "background": "lightgrey",}}>
//       {games.map((game, index) => (
//         <Link key={game._id} to = {`/games/${game._id}`}className="game-box" style={{"background":"brown","border":"solid 2px black","width" : "300px" ,"height":"400px","marginRight":"20px","marginLeft":"20px","margin" :"20px","color":"white" }}>
//         <div>
//             <img src={game.imageUrl} style={{"width" : "160px","objectFit":"cover","height":"160px","padding":"10px"}} alt=''/>
//           <h2 style={{color:"yellow"}}><u>{game.title}</u></h2>
//           <p>rating: {game.rating}</p>
//           <p>storage: {game.storage}</p>
//           <p>genre: {game.genre}</p>
//         </div>
//         </Link>
//       ))}
//     </div>
//     </div>
//   );
// }
 
// export default GameList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './GameList.css'; // Import your CSS file

function GameList() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else {
      axios
        .get('http://localhost:5000/games/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setGames(response.data);
        })
        .catch((error) => {
          console.error('Error fetching game data: ', error);
        });
    }
  }, [navigate]);


  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '11fr 1fr' }}>
        <h1 style={{ textAlign: 'center', marginLeft: '60px' }}>Games List</h1>
        
      </div>
      <div
        className="game-list"
        style={{
          display: 'grid',
          gridTemplateRows: '2fr 2fr 2fr',
          gridTemplateColumns: '1fr 1fr 1fr',
          background: 'lightgrey',
        }}
      >
        {games.map((game, index) => (
          <Link
            key={game._id}
            to={`/games/${game._id}`}
            className="game-box"
            style={{
              background: 'brown',
              border: 'solid 2px black',
              width: '300px',
              height: '400px',
              marginRight: '20px',
              marginLeft: '20px',
              margin: '20px',
              color: 'white',
            }}
          >
            <div className="game-content">
              <img
                src={game.imageUrl}
                style={{
                  width: '160px',
                  objectFit: 'cover',
                  height: '160px',
                  padding: '10px',
                }}
                alt=""
              />
              <h2 style={{ color: 'yellow' }}>
                <u>{game.title}</u>
              </h2>
              <p>Rating: {game.rating}</p>
              <p>Storage: {game.storage}</p>
              <p>Genre: {game.genre}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GameList;
