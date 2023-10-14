import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import JobApplication from './Component/JobApplication';

function App() {
  return (
    <div className="containe mt-5">
    <div  className="row">
      <div className="col-md-4">
        <h1  className="mb-4">Job Board</h1>
        <button className="btn btn-primary mb-3">Show JOB Form</button>
      </div>
     < JobApplication/>
      <div>
        <form></form>

      </div>
    </div>
    <div className="col-md-8" >Hello Job</div>
   
        
    </div>
  );
}

export default App;
