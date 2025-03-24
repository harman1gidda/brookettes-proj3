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
    const [myEventsList, setMyEventsList] = useState([])


    var conflictArry = [];

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
                    var first = data[i]
                    var second = data[j]
                    
                    var firstStart = first.start_date
                    var secondStart = second.start_date
                    var firstEnd = first.end_date
                    var secondEnd = second.end_date
        
                    if( (firstStart <= secondEnd) && (firstEnd >= secondStart) ) {
                        conflictArry.push(second.id)
                        conflictArry.push(first.id)
                    }
                }
            }

        
        
            for(let i =0; i < data.length; i++){
                setMyEventsList(myEventsList => [
                    ...myEventsList, 
                    {title: data[i].site_name + " | " + data[i].task_title, start: data[i].start_date.slice(0,10) , end: data[i].end_date.slice(0,10), id: data[i].id,
                        className: conflictArry.includes(data[i].id) ? 'conflicts' : ''
                    }
                ])
            }
            
        }
        
    }, [loading])

    return (
        <>  
            <div className='calendar-div'>
                <FullCalendar plugins={[ dayGridPlugin ]} initialView='dayGridMonth' events={myEventsList}/>
            </div>
        </>
    )
}