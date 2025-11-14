/** @jsxImportSource @emotion/react */
import * as s from "./MainSection.style";

function MainSection({ title, children }) {
  return (
    <div css={s.sectionWrapper}>
      <h3 css={s.sectionTitle}>{title}</h3>
      <div css={s.gridWrapper}>{children}</div>
    </div>
  );
}

export default MainSection;
