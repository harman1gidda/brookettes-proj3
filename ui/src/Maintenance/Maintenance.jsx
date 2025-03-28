import { useEffect, useState } from 'react';
import "./Maintenance.css";
import Filter from '../Filter/Filter.jsx';
import HandleEdit from './HandleEdit.jsx';
import HandleDelete from './HandleDelete.jsx';

export default function Maintenance() {
    const [filter, setFilter] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [conditionColor, setConditionColor] = useState('');
    const [orderBy, setOrderBy] = useState("id");  

    useEffect(() => {
      fetch("http://localhost:8081/joined")
        .then(res => res.json())
        .then(res2 => {
          setData(res2);
          setFilteredData(res2); 
        })
    }, []);


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
                <th onClick={() => {setOrderBy('id')}}>Maintenance ID</th>
                <th>Task Title</th>
                <th onClick={() => {setOrderBy('site_id')}}>Site ID</th>
                <th onClick={() => {setOrderBy('site_id')}}>Site Name</th>
                <th onClick={() => {setOrderBy('start_date')}}>Start Date</th>
                <th onClick={() => {setOrderBy('end_date')}}>End Date</th>
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
                  <td>{new Date(row.start_date).toISOString().split('T')[0]}</td> {/* Format start_date */}
                  <td>{new Date(row.end_date).toISOString().split('T')[0]}</td>   {/* Format end_date */}
                  <td style={{ borderColor: conColor(row.condition_color),
                    borderWidth: '5px',
                    borderStyle: 'solid' }}>
                    {row.condition_color.toUpperCase()} 
                  </td>
                  <td>{row.approved_rejected ? row.approved_rejected : 'Pending'}</td>
                  <td>{row.approver_comments}</td>
                  
                    <td className='ebtn-container'>
                      <HandleEdit
                        id={row.id}
                        currentData={{
                          ...row,
                          start_date: new Date(row.start_date).toISOString().split('T')[0], // Format start_date
                          end_date: new Date(row.end_date).toISOString().split('T')[0],     // Format end_date
                        }}
                      />
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