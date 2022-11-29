import { useState } from "react";
import "../sp21-bse-074/style.css";

function Middle() {
    const [data,setData] = useState([
        { id:1,header: "Pakistan news",
        Image1: "../Image/image1.jpg",
        Image2: "../Image/image4.jpg",
        title1: "Abrar Ahmed, Muhammad Ali get maiden call-ups for England Tests; Fawad, hasan, Yasir dropped",
        title2: "Warner: I'm not a criminal. you should get right of appeal'",
        text: "Shaheen Shah Afridi is not fit and available for selection yet",
        text1: "He is also currently undergoing a two-week rehab for his knees injury"
    },
    {
      id:2, 
      header: "Australia News",
        Image1: "../Image/image4.jfif",
        Image2: "../Image/image1.webp",
        title1: "Warner: I'm not a criminal. you should get right of appeal'",
        title2: "meredith calls up as starc is rested for final ODI against England",
        text:"Australia batter set to apply to have his lifetime leadership ban reviewed",
        text1:"agar also set to miss out after flying to Canberra to play a four-day tour match against WI on wednesday"
    }
    ])
    function  handleDelete(id) {
      const updatedRecord = 
      data.filter((srf) =>
          srf.id !== id
      )
  setData(updatedRecord);
      console.log("clicked..." + id);
  }
    return ( 
        <div>
      {
        data.map((d)=>(
            <div id="mid1" class="card text-bg-light mb-3">
            <div class="card-header">{d.header}</div>
            <div style={{height:500,width:300}} class="card-body">
            <div class="card mb-3">
            <img src={d.Image1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{d.title1}</h5>
              <p>{d.text}</p>
             
              <button className="btn btn-danger" 
                                    onClick={() => handleDelete (d.id)}>
                                                Delete
                                        </button>
              
            </div>
          </div>
          
          <div id="shah" style={{width:300,height:400}} class="card mb-3">
            <div class="row g-0">
              {/* <div class="col-md-4">
                <img src={d.Image2} class="img-fluid rounded-start" alt="..."/>
              </div> */}
              {/* <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{d.title2}</h5>
                  <p>{d.text1}</p>
                </div>
              </div> */}
              <div class="card mb-3">
            <img src={d.Image2} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{d.title2}</h5>
              <p>{d.text2}</p>
             
              <button className="btn btn-danger" 
                                    onClick={() => handleDelete (d.id)}>
                                                Delete
                                        </button>
              
            </div>
            </div>
          </div>
            </div>
          </div>
          </div>
        ))
      }
        </div>
     );
}

export default Middle;