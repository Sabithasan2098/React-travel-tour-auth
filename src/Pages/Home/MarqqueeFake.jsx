import { useEffect, useState } from "react";
import MarQuee from "./MarQuee";

 

const MarqqueeFake = () => {
    const[user,setUser] = useState([])
    useEffect(()=>{
        fetch('pakage.json')
        .then(res => res.json())
        .then(data => setUser(data))

    },[])
     
    return (
        <div>
            {
                user.map(data => <MarQuee key={data.id} data={data}></MarQuee>)
            }
        </div>
    );
};

export default MarqqueeFake;