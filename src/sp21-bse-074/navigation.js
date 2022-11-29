import '../sp21-bse-074/style.css';
function Navigation() {
    return ( 
        <div id="navbar">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a id="mm"class="navbar-brand" href="#">ESPNcricinfo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li  class="nav-item dropdown">
          <a id="drop" class="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Live Scores
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Live Scores Home</a></li>
            <li><a class="dropdown-item" href="#">Result</a></li>
            <li><a class="dropdown-item" href="#">Season View</a></li>
            <li><a class="dropdown-item" href="#">Desktop Scoreboard</a></li>
            <li><a class="dropdown-item" href="#">Schdule</a></li>
            <li><a class="dropdown-item" href="#">Month View</a></li>
            <li><a class="dropdown-item" href="#">International Calender</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a id="iii" class="nav-link active" aria-current="page" href="#">Series</a>
        </li>
        <li class="nav-item">
          <a id="kkk" class="nav-link active" aria-current="page" href="#">Teams</a>
        </li>
        <li class="nav-item">
          <a id="lll" class="nav-link active" aria-current="page" href="#">News</a>
        </li>
        <li class="nav-item">
          <a id="hhh" class="nav-link active" aria-current="page" href="#">Feature</a>
        </li>
        <li class="nav-item">
          <a id="ggg" class="nav-link active" aria-current="page" href="#">Videos</a>
        </li>
        <li class="nav-item">
          <a id="ppp"class="nav-link active" aria-current="page" href="#">Stats</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
     );
}

export default Navigation;