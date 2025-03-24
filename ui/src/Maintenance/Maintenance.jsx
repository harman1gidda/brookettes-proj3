import { createElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Maintenance.css";
import {Link} from 'react-router-dom';
import Filter from '../Filter/Filter.jsx';
import HandleEdit from './HandleEdit.jsx';
import HandleDelete from './HandleDelete.jsx';

export default function Maintenance() {
    const [filter, setFilter] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [site, setSite] = useState('')
    const [startDate, setStartDate] =useState('');
    const [endDate, setendDate] =useState('');
    const [conditionColor, setConditionColor] =useState('');

    const [orderBy, setOrderBy] = useState("");

  

    useEffect(() => {
      fetch("http://localhost:8081/joined")
        .then(res => res.json())
        .then(res2 => {
          setData(res2);
          setFilteredData(res2); 
        })
    }, []);

    useEffect(() => {
      console.log('🔥 Rendered table with rows:', filteredData.length);
    }, [filteredData]);

    return (
      <>
       <div className="chart-container">
        
        <Filter
          filter={filter}
          setFilter={setFilter}
          conditionColor={conditionColor}
          setConditionColor={setConditionColor}
          data={data}
          setFilteredData={setFilteredData} 
          orderBy={orderBy}             
          setOrderBy={setOrderBy}  
        />
    
          <table className="maintenance-table">
            <thead>
              <tr>
                <th>Maintenance ID</th>
                <th>Task Title</th>
                <th>Site ID</th>
                <th>Site Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Condition Color</th>
                <th>Approved/Rejected</th>
                <th>Approver Comments</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            
            <tbody >
              {filteredData.map((row) => (
                
                <tr key={row.id}>
                  <td >{row.id}</td>
                  <td >{row.task_title}</td>
                  <td>{row.site_id}</td>
                  <td>{row.site_name}</td>
                  <td>{row.start_date}</td>
                  <td>{row.end_date}</td>
                  <td style={{ borderColor: conColor(row.condition_color),
                    borderWidth: '5px',
                    borderStyle: 'solid' }}>
                    {row.condition_color.toUpperCase()} 
                  </td>
                  <td>{row.approved_rejected}</td>
                  <td>{row.approver_comments}</td>
                  <td>
                    <HandleEdit id={row.id}/>
                    <HandleDelete id={row.id}/>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>  
    );
  }

  function conColor(condition) {
    switch (condition.toLowerCase()) {
      case "red":
        return "red";
      case "yellow":
        return "yellow";
      case "green":
        return "green";
      default:
        return "white";
    }
  }