import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import JobApplication from './Component/JobApplication';
import { useEffect, useState } from 'react';
import JobList from './Component/JobList';
import JobDetail from './Component/JobDetails';
import { getData } from './Component/services/api';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getJobData = async () => {
      const response = await getData();
      setJobs(response);
    }
    !showForm && getJobData();
  }, [showForm])

  const handleSelectJob = (job) => {
    setSelectedJob(job);
    setShowForm(false);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
    setSelectedJob(null);
  };


  return (
    <div className="containe mt-5">
    <div  className="row">
      <div className="col-md-4">
        <h1  className="mb-4">Job Board</h1>
        <button className="btn btn-primary mb-3"onClick={handleToggleForm}>
        {showForm ? 'Hide Job Form' : 'Show Job Form'} Show JOB Form</button>

        {showForm && <JobApplication setShowForm={setShowForm} />}
          {!showForm && <JobList onSelectJob={handleSelectJob} jobs={jobs} />}
      </div>
      
     {/* < JobApplication/> */}
      <div>
  

      </div>

    {selectedJob && (
          <div className="col-md-8">
            <JobDetail job={selectedJob} />
          </div>
        )}
       </div>
        
    </div>
  );
}

export default App;
