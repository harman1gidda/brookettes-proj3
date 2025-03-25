import { useState } from 'react';
import './HandleEdit.css';

export default function handleEdit({ id, currentData }) {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    start_date: '',
    end_date: '',
    condition_color: '',
    approver_comments: '',
    approved_rejected: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
      // [name]: name === 'approved_rejected' ? event.target.checked : value,
    });
  };

  const handleEdit = () => {
    fetch(`http://localhost:8081/maintenance/${id}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.location.reload();
          alert('Item updated!')
          setStatus('Items updated')
        } else {
          setStatus('Failed to update')
        }
      })
      .catch((error) => {
        setStatus('Failed to update')
      })
  }

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  const openModal = () => {
    // Populate formData with current values when the modal is opened
    setFormData({
      start_date: currentData.start_date || '',
      end_date: currentData.end_date || '',
      condition_color: currentData.condition_color || '',
      approver_comments: currentData.approver_comments || '',
      approved_rejected: currentData.approved_rejected || 'Pending',
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className='med-btn' onClick={openModal}>Edit</button>

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
                {/* <label htmlFor="condition_color">Condition Color:</label>
                <input
                  type="text"
                  id="condition_color"
                  name="condition_color"
                  value={formData.condition_color}
                  onChange={handleInputChange}
                  placeholder="Enter condition color"
                /> */}
                <label htmlFor="condition_color">Condition Color:</label>
                <select
                  id="condition_color"
                  name="condition_color"
                  value={formData.condition_color} // Bind dropdown to formData
                  onChange={handleInputChange} // Update formData on change
                >
                  <option value="">Select a color</option> {/* Default option */}
                  <option value="Green">Green</option> {/* Green option */}
                  <option value="Yellow">Yellow</option> {/* Yellow option */}
                  <option value="Red">Red</option> {/* Red option */}
                </select>
              </div>

              <div>
                <label htmlFor="approver_comments">Approver Comments:</label>
                <input
                  type="text"
                  id="userInput"
                  name="approver_comments"
                  placeholder="Any Comments?"
                  value={formData.approver_comments}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="approved_rejected">Approve?:</label>
                <select
                  id="approved_rejected"
                  name="approved_rejected"
                  value={formData.approved_rejected} // Bind dropdown to formData
                  onChange={handleInputChange} // Update formData on change
                >
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Approved">Approved</option>
                </select>
                <p id="status">{formData.approved_rejected ? 'Rejected' : ''}</p>
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