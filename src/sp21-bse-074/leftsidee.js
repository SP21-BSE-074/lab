import '../sp21-bse-074/style.css';
function Leftside() {
    return ( 
        <div id="cards">
        <div id="card1" class="card">
<div class="card-header" style={{color:"black",fontFamily:"bold"}}>
Quick Links
</div>
<div class="card-body">
<blockquote class="blockquote mb-0">
<p style={{fontSize:13}}>T20 Timeout</p>
<p style={{fontSize:13}}>T20 Timeout</p>
<p style={{fontSize:13}}>fantasy Pick</p>
<p style={{fontSize:13}}>ICC Ranking</p>
</blockquote>
</div>
</div>
<div id="card2" class="card">
<div   class="card-header" style={{color:"black",fontFamily:"bold"}}>
ESPNcricinfo
</div>
<div class="card-body">
<blockquote class="blockquote mb-0">
<p style={{fontSize:13}}>Android App</p>
<p style={{fontSize:13}}>iOS App</p>
<p style={{fontSize:13}}>Anroid App</p>
      <Link to={"IosApp"}><p style={{fontSize:13}}>iOS App</p></Link>
</blockquote>
</div>
</div>
<div id="card3" class="card">
<div class="card-header" style={{color:"black",fontFamily:"bold"}}>
Follow ESPNcricinfo
</div>
<div class="card-body">
<blockquote class="blockquote mb-0">
<p style={{fontSize:13}}>Instagram</p>
<p style={{fontSize:13}}>Twitter</p>
<p style={{fontSize:13}}>Facebook</p>
<p style={{fontSize:13}}>You Tube</p>

</blockquote>
</div>
</div>
<div id="card4" class="card">
<div class="card-header" style={{color:"black",fontFamily:"bold"}}>
ESPN Site
</div>
<div class="card-body">
<blockquote class="blockquote mb-0">
<p style={{fontSize:13}}>The Cricket Monthly</p>
<p style={{fontSize:13}}>ESPN</p>


</blockquote>
</div>
</div>

</div>
     );
}

export default Leftside;