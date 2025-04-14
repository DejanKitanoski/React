

function EmailInput({ value, onChange, error }) {
    return (
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          className="w-full border px-2 py-1"
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
  export default EmailInput