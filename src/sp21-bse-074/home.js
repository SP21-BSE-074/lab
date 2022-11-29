import Navigation from "./navigation";
import '../sp21-bse-074/style.css';
import Leftside from "./leftsidee";
import Content from "./content";
import Teams from "./Team";
import Footer from "./footer";


function Home() {
    return ( 
        <div>
            <div>
           <div id="www" class="col-12"><Navigation/></div>
  <div class="row row-cols-3">
    <div id="uuu" class="col-3"><Leftside/></div>
    <div id="ooo" class="col-6"><Content/></div>
    <div id="nnn" class="col-3"><Teams/></div>
  </div>
  <div id="xxx" class="col-12"><Footer/></div>
</div>
            
            
            
        </div>
     );
}

export default Home;