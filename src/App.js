import './App.css';

function App() {
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
        <div className="order">
          <h2>ICT Work Ticket</h2>
          <table>
            <tr>
              <td className="work"><b>WORK ORDER NAME(S)</b></td>
            </tr>
            <tr>
              <td className="name"><b>Alex Morara</b></td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <td className="work"><b>DATE</b></td>
            </tr>
            <tr>
              <td className="name"><b>09-May-2024 10:14</b></td>
            </tr>
          </table>
          <br />
          <b>Ticket No: MOEICT65406854</b>
        </div>
      </div>
      <div className="request">
        <table>
          <tr>
            <td className="names"><b>REQUESTED BY</b></td>
            <td className="names"><b>Telephone/Official Email</b></td>
            <td className="names"><b>FLOOR/ DEPARTMENT</b></td>
          </tr>
          <tr>
            <td className="num"><b>Peninah Munyao</b></td>
            <td className="num"><b>20 484100</b></td>
            <td className="num"><b>M1, Accounts-Imprest</b></td>
          </tr>
        </table>
      </div>
      <div className='reports'>
        <table>
          <tr>
            <td className="names"><b>REPORTED ISSUE</b></td>
            <td className='names'><b>JOB DETAILS</b></td>
          </tr>
          <tr>
            <td>Printer Configuration</td>
            <td>0</td>
          </tr>
        </table>
      </div>
      <hr/>
      <div>
        <p>User Remarks: ____________________________________________________________________</p>
        <p>Completed Date (ICT): __/__/2024</p>
        <p>Signature: ________________  Date: __/__/2024</p>
        <p>Thank You</p>
      </div>
    </div>
  );
}

export default App;
