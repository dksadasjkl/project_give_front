/** @jsxImportSource @emotion/react */
import * as s from "./style";

const TopInput = ({ label, name, value, type = "text", disabled, setState }) => {
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  return (
    <div css={s.inputBox}>
      <label>{label}</label>
      <input
        type={type}
        value={value || ""}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
};

export default TopInput;
