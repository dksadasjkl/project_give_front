/** @jsxImportSource @emotion/react */
import * as s from "./style";

const TopSelect = ({ label, name, value, options, disabled, setState }) => {
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [name]: Number(e.target.value),
    }));
  };

  return (
    <div css={s.inputBox}>
      <label>{label}</label>
      <select value={value} disabled={disabled} onChange={handleChange}>
        <option value="">선택</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TopSelect;
