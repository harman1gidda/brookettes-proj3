import { createElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Maintenance.css";
import {Link} from 'react-router-dom';

export default function Maintenance() {
    const maintenanceData = []
    const [filter, setFilter] = useState("");
    const [filteredData, setFilteredData] = useState(maintenanceData);
    const [data, setData] = useState()

    

    useEffect(() => {
      fetch("http://localhost:8081/joined")
        .then(res => res.json())
        .then(res2 => setData(res2))
    }, [])

    useEffect(() => {
      setFilteredData(data)
    }, [data])
  
    useEffect(() => {
      if (filter) {
        setFilteredData(maintenanceData.filter(item => item.site_id === filter));
      } else {
        setFilteredData(maintenanceData);
      }
    }, [filter]);
  
    return (
      <>
        <div className="container">
          {/* <h1 className='header'>Maintenance PAGE</h1> */}
          <div className="filter-container">
            <label htmlFor="filter">Filter by Site:</label>
            <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="">All Sites</option>
              {Array.from(new Set(maintenanceData.map(item => item.site_id))).map(site_id => (
                <option key={site_id} value={site_id}>{site_id}</option>
              ))}
            </select>
          </div>
    
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
              </tr>
            </thead>
            
            <tbody >
              {filteredData.map((row) => (
                <tr key={row.task_title}>
                  <td >{row.id}</td>
                  <td >{row.task_title}</td>
                  <td>{row.site_id}</td>
                  <td>{row.site_name}</td>
                  <td>{row.start_date}</td>
                  <td>{row.end_date}</td>
                  <td style={{ borderColor: conColor(row.condition_color), borderWidth: '3px', borderStyle: 'solid' }}>{row.condition_color}</td>
                  <td>{row.approved_rejected}</td>
                  <td>{row.approver_comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>  
    );
  }

  function conColor(condition) {
    switch (condition) {
      case "Red":
        return "red";
      case "Yellow":
        return "yellow";
      case "Green":
        return "green";
      default:
        return "black";
    }
  }