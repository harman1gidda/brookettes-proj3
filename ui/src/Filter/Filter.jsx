import { createElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Filter({ filter, setFilter, data, conditionColor, setConditionColor, setFilteredData, orderBy, setOrderBy }) {
    
  useEffect(() => {

    
    let filtered = [...data];
    if (filter) {
        filtered = filtered.filter(item => item.site_name === filter);
    }
    if (conditionColor) {
        filtered = filtered.filter(item => item.condition_color.toUpperCase() === conditionColor.toUpperCase());
    }

    if (orderBy) { // Added sorting logic
      filtered = filtered.sort((a, b) => {
          if (typeof a[orderBy] === 'number' && typeof b[orderBy] === 'number') {
              return a[orderBy] - b[orderBy];
          }
          if (a[orderBy] < b[orderBy]) return -1;
          if (a[orderBy] > b[orderBy]) return 1;
          return 0;
      });
  }

    setFilteredData(filtered);
}, [filter, conditionColor, data, orderBy]);

   
   
    return (
      <>
        <div className="filterTask-container">
            <label htmlFor="filter">Filters:</label>
            
            <select className="filter" value={filter} 
              onChange={(e) => setFilter(e.target.value)}>

              <option value="">All Sites</option>

              {Array.from(new Set(data.map(item => item.site_name))).map(site_name => (
                <option key={site_name} value={site_name}>{site_name}</option>
              ))}
             </select>

             <select className="filter" value={conditionColor} 
              onChange={(e) => setConditionColor(e.target.value)}>

              <option value="">All Conditions</option>

              {Array.from(new Set(data.map(item => item.condition_color.toUpperCase()))).map(condition_color => (
                <option key={condition_color} value={condition_color}>{condition_color}</option>
              ))}
             </select>

             <select className="filter" value={orderBy} onChange={(e) => setOrderBy(e.target.value)}> {/* Added dropdown for Order By */}
                    <option value="">None</option>
                    <option value="id">Maintenance ID</option>
                    <option value="start_date">Start Date</option>
                    <option value="end_date">End Date</option>
                    <option value="site_id">Site ID</option>
                    <option value="task_title">Task Title</option>
             </select>
        

        </div>

      </>  
    );
  }
