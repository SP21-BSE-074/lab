import { useState } from "react";
import Leftside from "./Leftside";
function Teams() {
    const [data,setData] = useState([
        {id:1, team1:{
            Name: "England", overs:"(75 ov)", score: "222/4d"
        },
    team2:{
        Name :"England Lions*"}, dis:"Day 2 - Eng lions trail by 89 runs "},
    {id:2, team1:{
        Name: "India*", overs:"(73 ov)", score:"324/1"},
team2:{
    Name : "New Zealand"},
dis:"New Zealand chose to field"}
// {id:3, team1:{
//     Name: "lahore*", score:"234/2" , overs: "(20 ov)"},
// team2:{
// Name : "Khyber Pakhtunkhwa"
// }, dis:"Khyber Trail by 210 runs"
// }
    ])
    return ( 
        <div>
          <Leftside
          team={data} sate={setData}
          />
        </div>
     );

    }
export default Teams;