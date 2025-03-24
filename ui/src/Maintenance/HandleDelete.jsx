import { useEffect, useState } from 'react';

export default function HandleDelete({id}){
  const [status, setStatus] =useState(null);

  const handleDelete = ()=>{
    fetch(`http://localhost:8081/maintenance/${id}`,{
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res)=>{
      if(res.ok){
        alert('Item deleted!')
        window.location.reload();
      }else{
        setStatus('Failed to delete')
      }
    })
  }

  return (  
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}