import axios from "axios";
import { useState, useEffect } from "react";
import PingStatsCard from "./PingStatsCard.tsx";
import SingleStatCard from "./SingleStatCard.tsx";

export default function Body(){

    const [contents, setContent] = useState([]);
    useEffect(()=>{
        axios.get("http://loltmi.site:8081/contents/v2/list",{},
            {
                withCredentials: true
            }
        )
        .then(function(res){
            setContent(res.data);
        })
    }, []);

    
    return(
        <div>
        <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 max-w-8xl mx-auto">
            <PingStatsCard />
            <SingleStatCard />
        </main>
        </div>
    )
}