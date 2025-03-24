import { useState } from 'react';
import './HandleEdit.css';

export default function handleEdit({ id }) {
  const [status, setStatus] =useState(null);
  const [formData, setFormData] = useState({
    start_date: '',
    end_date: '',
    condition_color: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEdit= ()=>{
    fetch(`http://localhost:8081/maintenance/${id}`,{
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    .then((res)=>res.json())
    .then((data)=>{
      if(data.success){        
        window.location.reload();
        alert('Item updated!')
        setStatus('Items updated')
      }else{
        setStatus('Failed to update')
      }
    })
    .catch((error)=>{
      setStatus('Failed to update')
    })
  }

const openModal = () => {
  setIsModalOpen(true);
};


const closeModal = () => {
  setIsModalOpen(false);
};

return(
  <div>
      <button onClick={openModal}>Edit</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Item</h2>
            <form onSubmit={(event) => event.preventDefault()}>
              <div>
                <label htmlFor="start_date">Start Date:</label>
                <input
                  type="date"
                  id="start_date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="end_date">End Date:</label>
                <input
                  type="date"
                  id="end_date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="condition_color">Condition Color:</label>
                <input
                  type="text"
                  id="condition_color"
                  name="condition_color"
                  value={formData.condition_color}
                  onChange={handleInputChange}
                  placeholder="Enter condition color"
                />
              </div>

              <button type="button" onClick={handleEdit}>Submit</button>
              <button type="button" onClick={closeModal}>Cancel</button>
            </form>

          </div>
        </div>
      )}
    </div>
  )
}