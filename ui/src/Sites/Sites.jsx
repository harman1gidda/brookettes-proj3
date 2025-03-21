import { createElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Sites.css";
import {Link} from 'react-router-dom';
//import "./SiteDetail.jsx"

export default function Sites(){
    const sitesData = []
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/sites")
          .then(res => res.json())
          .then(res2 => setData(res2))
      }, [])

    return (
        <>
        <div>
        <h1 className='title'>Site List</h1>
        </div>
        <div className='sitelist'>
            {data.map((site)=>(
              <div key={site.id} className='site-box'>
                 <Link to={`/sites/${site.id}`} className='site-link'>{site.site_name}</Link>
              </div>
            ))}       
        </div>

            {/* <table className="sites-table">
          <thead>
            <tr>
            <th>Site ID</th>
            <th>Site Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
              <td>{row.id}</td>
                <td>{row.site_name}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        </>
    )
}