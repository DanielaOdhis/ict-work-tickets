import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [workOrders, setWorkOrders] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setWorkOrders(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const showNextOrder = () => {
    if (currentIndex < workOrders.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPreviousOrder = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentOrder = workOrders[currentIndex];

  return (
    <div className='wrapper'>
      <div className="top-section">
        <div className="container">
          <h1>State Department For Energy</h1>
          <address>
            Kawi Complex, Off Red Cross Rd, Nairobi, <br />
            Nairobi. <br />
            Phone: +254(0) 20 4841000 <br />
            <a href="mailto:info@energy.go.ke">info@energy.go.ke</a> <br />
            <a href="https://energy.go.ke">https://energy.go.ke</a>
          </address>
        </div>
        {currentOrder && (
          <div className="order">
            <h2>ICT Work Ticket</h2>
            <table>
              <tbody>
                <tr>
                  <td className="work"><b>WORK ORDER NAME(S)</b></td>
                </tr>
                <tr>
                  <td className="name"><b>{currentOrder.work_order_name}</b></td>
                </tr>
              </tbody>
            </table>
            <br />
            <table>
              <tbody>
                <tr>
                  <td className="work"><b>DATE</b></td>
                </tr>
                <tr>
                  <td className="name"><b>{new Date(currentOrder.date_time).toLocaleString()}</b></td>
                </tr>
              </tbody>
            </table>
            <br />
            <b>Ticket No: {currentOrder.ticket_number}</b>
          </div>
        )}
      </div>
      {currentOrder && (
        <div className="request">
          <table>
            <tbody>
              <tr>
                <td className="names"><b>REQUESTED BY</b></td>
                <td className="names"><b>Telephone/Official Email</b></td>
                <td className="names"><b>FLOOR/ DEPARTMENT</b></td>
              </tr>
              <tr>
                <td className="num"><b>{currentOrder.name_requested}</b></td>
                <td className="num"><b>{currentOrder.contact.telephone}<br />{currentOrder.contact.email}</b></td>
                <td className="num"><b>{currentOrder.location.floor}, {currentOrder.location.department}</b></td>
              </tr>
            </tbody>
          </table> <br/>
          <table>
            <tbody>
              <tr>
                <td className="names"><b>REPORTED ISSUE</b></td>
                <td className='names'><b>JOB DETAILS</b></td>
              </tr>
              <tr>
                <td className="num">{currentOrder.reported_issue}</td>
                <td className="num">{currentOrder.job_details}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <hr />
      <div>
        <p>User Remarks: ____________________________________________________________________</p>
        <p>Completed Date (ICT): __/__/2024</p>
        <p>Signature: ________________  Date: __/__/2024</p>
        <p><center>Thank You</center></p>
      </div>
      {workOrders.length > 1 && (
        <div className="navigation">
          {currentIndex > 0 && <button onClick={showPreviousOrder}>Previous</button>}
          {currentIndex < workOrders.length - 1 && <button onClick={showNextOrder}>Next</button>}
        </div>
      )}
    </div>
  );
}

export default App;
