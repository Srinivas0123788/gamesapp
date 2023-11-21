function Carousel() {
    return (
      <div id="carouselExample" class="carousel slide" style={{
        background: "hsla(356, 76%, 50%, 1)",

      background: "linear-gradient(90deg, hsla(356, 76%, 50%, 1) 0%, hsla(14, 63%, 36%, 1) 100%)",
     
      background: "-moz-linear-gradient(90deg, hsla(356, 76%, 50%, 1) 0%, hsla(14, 63%, 36%, 1) 100%)",
     
      background: "-webkit-linear-gradient(90deg, hsla(356, 76%, 50%, 1) 0%, hsla(14, 63%, 36%, 1) 100%)"
  
      }}>
    <div class="carousel-inner">
      <div class="carousel-item active"><b><p style={{"textAlign":"center","color":"lightgrey"}}>GRAND THEFT AUTO</p></b>
        <img src="Grand Theft Auto.jpg" style={{"backgroundSize":"cover","height":"100vh"}} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item"><b><p style={{"textAlign":"center","color":"lightgrey"}}>GOD OF WAR</p></b>
        <img src="godofwar.jpg" style={{"backgroundSize":"cover","height":"100vh"}} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item"><b><p style={{"textAlign":"center","color":"lightgrey"}}>HALO</p></b>
        <img src="Halo.jpg" style={{"backgroundSize":"cover","height":"100vh"}} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item"><b><p style={{"textAlign":"center","color":"lightgrey"}}>HITMAN</p></b>
        <img src="Hitman1.jpg" style={{"backgroundSize":"cover","height":"100vh"}} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item"><b><p style={{"textAlign":"center","color":"lightgrey"}}>ASPHALT</p></b>
        <img src="asphalt.jpg" style={{"backgroundSize":"cover","height":"100vh"}} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item"><b><p style={{"textAlign":"center","color":"lightgrey"}}>FIFA-23</p></b>
        <img src="fifa.jpg" style={{"backgroundSize":"cover","height":"100vh"}} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item"><b><p style={{"textAlign":"center","color":"lightgrey"}}>HULK</p></b>
        <img src="hulk.jpg" style={{"backgroundSize":"cover","height":"100vh"}} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item"><b><p style={{"textAlign":"center","color":"lightgrey"}}>TEKKEN-6</p></b>
        <img src="tekken.jpg" style={{"backgroundSize":"cover","height":"100vh"}} class="d-block w-100" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    );
  }
  
  export default Carousel;
  