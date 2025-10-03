/** @jsxImportSource @emotion/react */
import * as s from "./style";

function RootLayout({ children }) {
    return (
        <>
            <div css={s.layout}>
                {children}
            </div>
        </>
    );
}

export default RootLayout;