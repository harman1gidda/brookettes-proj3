import { createElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Conflicts.css";
// import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200")
import {Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'



export default function Conflicts(){
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)
    const [dates, setDates] = useState([])
    const [overlap, setOverlap] = useState([])
    const [conflict, setConflict] = useState([])
    const [myEventsList, setMyEventsList] = useState([])

    useEffect(() => {
        fetch("http://localhost:8081/joined")
            .then(res => res.json())
            .then(res2 => {
                setData(res2);
                setLoading(false);
        })
        
    }, [])

    useEffect(() => {
        if(!loading){
            for (let i = 0; i < data.length; i++) {
                for (let j = i + 1; j < data.length; j++){
                    setOverlap(overlap => [...overlap, [data[i].id, data[j].id]])
                }
            }

            for(let i of overlap){
                // i = [1,5]
                var first;
                var second;
                for(let j of data){
                    if(j.id == i[0]){first = j}
                    if(j.id == i[1]){second = j}
                }
                var firstStart = first.start_date
                var secondStart = second.start_date
                var firstEnd = first.end_date
                var secondEnd = second.end_date
     
                if( (firstStart <= secondEnd) && (firstEnd >= secondStart) ) {
                     setConflict(conflict => [...conflict, [first, second]])
                }
     
            }
        
        
            for(let i =0; i < data.length; i++){
                console.log(data[i].start_date.slice(0,10))
                setMyEventsList(myEventsList => [...myEventsList, {title: data[i].site_name , start: data[i].start_date.slice(0,10) , end: data[i].end_date.slice(0,10)}])
            }
        }
        
    }, [loading])

    function consoleLog(){
        
    }

    




    return (
        <>  
            <div className='calendar-div'>
                <FullCalendar plugins={[ dayGridPlugin ]} initialView='dayGridMonth' events={myEventsList}/>
            </div>
        </>
    )
}