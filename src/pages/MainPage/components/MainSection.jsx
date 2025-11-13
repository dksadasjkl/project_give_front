/** @jsxImportSource @emotion/react */
import * as s from "./MainSection.style";

function MainSection({ title, children }) {
  return (
    <section css={s.sectionWrapper}>
      <h3 css={s.sectionTitle}>{title}</h3>
      {children}
    </section>
  );
}

export default MainSection;
