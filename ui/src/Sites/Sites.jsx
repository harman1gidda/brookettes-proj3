import { createElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Sites.css";
import {Link} from 'react-router-dom';
//import "./SiteDetail.jsx"

export default function Sites(){
    const sitesData = []
    const [data, setData] = useState([]);
    const [btnClick, setBtnClick] = useState(0);
    const [form, setForm] = useState(true);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        fetch("http://localhost:8081/sites")
          .then(res => res.json())
          .then(res2 => setData(res2))
      }, [])

    function createNewSite(newSite){
      if(newSite == ''){
        alert('Enter a Name')
        return
      }
      fetch('http://localhost:8081/sites', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          site_name: newSite
        })
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log("Server Response:", data)
          console.log(data.succeess)
          if(data.succeess == true){
            alert('Request Submitted!')
            //formData ={};
            window.location.reload();
            console.log('Request submitted')
          }else{
            console.log('Failed to submit a Request')
          }
        })
          .catch((error)=>{
            console.log('Catching errors!')
          })
    }  


    const inputChange = (event) => {
      setNewName(event.target.value)
    }

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
        <div className='newSiteButton'>
          <button onClick={()=>{ setForm(false)}}>Add New Site</button>
        </div>

        <div hidden={form} className='newSiteForm'>
          <button id='xbtn' onClick={() => {setForm(true)}}>X</button>
            <div>
              <h1 className='siteInputLabel'>Add New Site</h1>
              <div>
                <input className='siteInput' defaultValue='New Site Name' type="text" onChange={inputChange}/>
              </div>
              <button className='siteSubmitButton' onClick={()=>{createNewSite(newName)}}>Submit</button>
              
              
            </div>
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