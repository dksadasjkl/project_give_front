/** @jsxImportSource @emotion/react */
import * as s from './style'; 

function SortDropdown({ disabled, options, name, onChange, value }) {

     const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };
    
 
  return (
    <div css={s.item}>
      <div>
            <select
                  css={s.select}
                  name={name}
                  onChange={handleSelectChange}
                  value={value}
                >
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </select>
        </div>
    </div>
  );
}


export default SortDropdown;