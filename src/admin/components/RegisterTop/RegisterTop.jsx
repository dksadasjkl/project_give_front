/** @jsxImportSource @emotion/react */
import * as s from "./style";

const RegisterTop = ({ registerInputs, submitClick }) => {
  return (
    <div css={s.container}>
      {registerInputs.map((row, i) => (
        <div key={i} css={s.row}>
          {row.map((field, j) => (
            <div key={j}>{field}</div>
          ))}
        </div>
      ))}

      {submitClick && (
        <button css={s.submitBtn} onClick={submitClick}>
          저장
        </button>
      )}
    </div>
  );
};

export default RegisterTop;
