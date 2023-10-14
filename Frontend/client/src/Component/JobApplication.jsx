
import { useState } from "react"
import Inputfield from "./Inputfield"
const  defaultData = {title:"",Componanay:"",Location:"", Dicripition:""}
const JobApplication = () => {

    const [formData,setFormData] = useState(defaultData)
     const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})
     }



  const   handleSubmit  =(event)=>{
    event.preventDefault();

  }

  return (
    <div>
        <h2 className="mt-3 mb-4">Add A job Listing</h2>
      <form onSubmit={handleSubmit}>
     
        <Inputfield type="text"label="Job Title" onChange={handleChange} value={formData.title} id ="title" name="title"/>
        <Inputfield type="text"label="Componanay" id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}/>
        <Inputfield type="text"label="Location" id="Location"
            name="Location"
            value={formData.Location}
            onChange={handleChange}/>
        <Inputfield type="text"label=" Job Dicripition"  id="Dicripition"
            name="Dicripition"
            value={formData.Dicripition}
            onChange={handleChange}/>
 <buttton type="Submit" className="btn btn-primary mt-2">Submit</buttton>
     
      </form>

    </div>
  )
}

export default JobApplication