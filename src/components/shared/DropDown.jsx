/* eslint-disable react/prop-types */

const DropDown = ({ options, defaultOption, value, onChange }) => {
  return (
    <>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value={""} key={""}>
          {defaultOption}
        </option>

        {options.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
