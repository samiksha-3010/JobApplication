
const Inputfield =  ({ id, name, type, label, ...props }) => {

  return (
    <div className="form-group mt-2">
      <form>
      <label>
                {label}
            </label>
            <input  className="form-control"  type="text"  id={id} 
                name={name} 
                required
                autoComplete="off"
                {...props} />
      </form>
       
    </div>
  )
}

export default Inputfield