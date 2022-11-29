import { Link } from "react-router-dom";
import "./sty.css";
function Header() {
    return ( 
        <div>
            <div id="web">
         <div style={{color:"Red",fontfamily:"serif",fontSize:40,fontstyle:"bold",marginleft:40,
         marginTop:0,display:"flex",alignItems:"center"}}>Customize Styling</div>
        <div id="search">
       <nav class="navbar navbar-light bg-ffd580">
        <div class="container-fluid">
         <form class="d-flex">
      <input class="form-control me-2"type="search"placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-sucess"type="submit">Search</button>
      
   </form>
      </div>
      </nav>
      </div>
      
      <div class="btn-group">
         <Link to={"LogIn"}>
        <div id="btn1" class="btn1"><button type="button"class="btn">
        Log In</button></div>
        </Link>

        <Link to={"SignIn"}>
        <div id="btn1" class="btn1"><button type="button"class="btn">
        Sign In</button></div>
        </Link>
        </div>
     </div>
</div>
        );
     
}

export default Header;