// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// //import Maintenance from '../Maintenance/Maintenance'

// export default function SiteDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [site, setSite] = useState(null);
//   const [sites, setSites] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:8081/sites/${id}`)
//       .then(res => res.json())
//       .then(data => setSite(data))
//       .catch(err => console.error("Error fetching site details:", err));
//   }, [id]);

//   useEffect(() => {
//     fetch('http://localhost:8081/sites')
//       .then(res => res.json())
//       .then(data => setSites(data))
//       .catch(err => console.error("Error fetching sites:", err));
//   }, []);

//   const handleSiteChange = (e) => {
//     const selectedSiteId = e.target.value;
//     navigate(`/sites/${selectedSiteId}`);
//   };

//   if (!site) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Site Details</h1>
//       <div>
//         <label htmlFor="site-select">Select Site: </label>
//         <select id="site-select" value={id} onChange={handleSiteChange}>
//           {sites.map((site) => (
//             <option key={site.id} value={site.id}>
//               {site.site_name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <p>Site ID: {site.id}</p>
//       <p>Site Name: {site.site_name}</p>
//       {/* Add more site details as needed */}
//       <p>Maintenance info</p> 
//       <p>Tittle : {Maintenance.task_title}</p>
//     </div>
//   );
// }

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
      <ul>
        {maintenanceData.map((record) => (
          <li key={record.id}>
            <p>Task Title: {record.task_title}</p>
            <p>Start Date: {record.start_date}</p>
            <p>End Date: {record.end_date}</p>
            <p>Condition Color: {record.condition_color}</p>
            <p>Approved/Rejected: {record.approved_rejected}</p>
            <p>Approver Comments: {record.approver_comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}