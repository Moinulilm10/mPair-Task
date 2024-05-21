/* eslint-disable react/prop-types */
const YearSelector = ({ selectedYear, onYearChange }) => {
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <div>
      <select
        name="Year"
        className="px-8 py-2 rounded-md bg-[#E5E5E5] text-black"
        id="year"
        value={selectedYear}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
      >
        {years.map((year) => (
          <option className="text-black" key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;
