import { createElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Filter({ filter, setFilter, data, conditionColor, setConditionColor, setFilteredData }) {
    // const [orderBy, setOrderBy] = useState('');
  useEffect(() => {
    let filtered = data;
    if (filter) {
        filtered = filtered.filter(item => item.site_name === filter);
    }
    if (conditionColor) {
        filtered = filtered.filter(item => item.condition_color.toUpperCase() === conditionColor.toUpperCase());
    }
    setFilteredData(filtered);
}, [filter, conditionColor, data]);
   
   
    return (
      <>
        <div className="filterTask-container">
            <label htmlFor="filter">Filter:</label>
            
            <select id="filter" value={filter} 
              onChange={(e) => setFilter(e.target.value)}>

              <option value="">All Sites</option>

              {Array.from(new Set(data.map(item => item.site_name))).map(site_name => (
                <option key={site_name} value={site_name}>{site_name}</option>
              ))}
             </select>

             <select id="condition-filter" value={conditionColor} 
              onChange={(e) => setConditionColor(e.target.value)}>

              <option value="">All Conditions</option>

              {Array.from(new Set(data.map(item => item.condition_color.toUpperCase()))).map(condition_color => (
                <option key={condition_color} value={condition_color}>{condition_color}</option>
              ))}
             </select>

        </div>

      </>  
    );
  }
