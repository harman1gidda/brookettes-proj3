import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SiteDetail() {
  const { id } = useParams();
  const [site, setSite] = useState(null);
  const [maintenanceData, setMaintenanceData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/sites/${id}`)
      .then(res => res.json())
      .then(data => setSite(data[0])) // Assuming the API returns an array
      .catch(err => console.error("Error fetching site details:", err));
  }, [id]);

  useEffect(() => {
    fetch('http://localhost:8081/maintenance')
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(record => record.site_id === parseInt(id));
        setMaintenanceData(filteredData);
      })
      .catch(err => console.error("Error fetching maintenance data:", err));
  }, [id]);

  if (!site) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Site Details</h1>
      <p>Site ID: {site.id}</p>
      <p>Site Name: {site.site_name}</p>
      <h2>Maintenance Records</h2>
      <table className="maintenance-table">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Condition Color</th>
            <th>Approved/Rejected</th>
            <th>Approver Comments</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceData.map((record) => (
            <tr key={record.id}>
              <td>{record.task_title}</td>
              <td>{new Date(record.start_date).toISOString().split('T')[0]}</td>
              <td>{new Date(record.end_date).toISOString().split('T')[0]}</td>
              <td style={{
                borderColor: conColor(record.condition_color),
                borderWidth: '5px',
                borderStyle: 'solid'
              }}>
                {record.condition_color.toUpperCase()}
              </td>
              <td>{record.approved_rejected}</td>
              <td>{record.approver_comments}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
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