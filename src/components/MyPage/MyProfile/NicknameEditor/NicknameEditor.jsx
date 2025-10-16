/** @jsxImportSource @emotion/react */
import AuthPageInput from "../../../Account/AuthPageInput/AuthPageInput";
import * as s from "./style"

function NicknameEditor({ nicknameValue, onChange, message, onCancel }) {
    return (
        <div>
            <div css={s.nicknameEdit}>닉네임 변경</div>
            <div css={s.nicknameEditBox}>
                <AuthPageInput type="text" name="nickname" value={nicknameValue} onChange={onChange} message={message} />
                {/* 닉네임 중복 체크 버튼 필요 시 추가 */}
            </div>
            <div>
                <button css={s.button} onClick={onCancel}>취소</button>
            </div>
        </div>
    );
}

export default NicknameEditor