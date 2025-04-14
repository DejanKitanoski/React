




 function InterestsInput({ selected, onChange, error }) {
    const interests = ['Music', 'Sports', 'Reading', 'Traveling'];
    return (
      <div>
        <label>Interests:</label>
        <div className="flex flex-col">
          {interests.map((interest) => (
            <label key={interest}>
              <input
                type="checkbox"
                value={interest}
                checked={selected.includes(interest)}
                onChange={onChange}
              />
              {interest}
            </label>
          ))}
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
  export default InterestsInput