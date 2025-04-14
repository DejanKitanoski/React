 
 
 function NameInput({ value, onChange}) {
    return (
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          className="w-full border px-2 py-1"
          value={value}
          onChange={onChange}
        />
       
      </div>
    );
  }
  export default NameInput