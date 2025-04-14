




 function GenderInput({ value, onChange, error }) {
    const options = ['Male', 'Female', 'Other'];
    return (
      <div>
        <label>Gender:</label>
        <div className="flex gap-4">
          {options.map((gender) => (
            <label key={gender}>
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={value === gender}
                onChange={onChange}
              />
              {gender}
            </label>
          ))}
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
  export default GenderInput