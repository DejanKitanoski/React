function CountrySelect({ value, onChange, error }) {
    const countries = ['USA', 'Macedonija', 'UK', 'Maroko', 'Other'];
    return (
      <div>
        <label>Country:</label>
        <select
          name="country"
          className="w-full border px-2 py-1"
          value={value}
          onChange={onChange}
        >
          <option value="">-- Select Country --</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
  export default CountrySelect