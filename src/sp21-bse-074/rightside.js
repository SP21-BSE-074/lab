function Rightside(props) {

    return ( 
        <div>
        <div id="left">
       
        <div id="cardd" class="card">
  <h6 class="card-header" style={{color:"black",fontStyle:"bold"}}>
    QUAID-E-AZAM Trophy
  </h6>
            {props.team.map((tm) =>(
                 <div class="card text-bg-light mb-3">
                  <div>
                 <article id="article">
                   <h6 class="car">{tm.team1.Name}
                   <span><p style={{fontSize:15}} class="car1">{tm.team1.score}</p></span> <span><p style={{fontSize:12}} class="car2">{tm.team1.overs}</p></span>
                   </h6>
                   <h6 class="card-title" style={{color:"#555555"}}>{tm.team2.Name}</h6>
                   <p class="card-text" style={{fontSize:11}}>{tm.dis}</p>
                   </article>
                   </div>
                       </div>
            ))}
            
        </div>
        </div>
        </div>
     );
}

export default Rightside;