/** @jsxImportSource @emotion/react */
import AuthPageInput from "../../../Account/AuthPageInput/AuthPageInput"
import * as s from "./style"

function PasswordEditor({
    oldPassword, oldPasswordChange, oldPasswordMessage,
    newPassword, newPasswordChange, newPasswordMessage,
    newPasswordCheck, newPasswordCheckChange, newPasswordCheckMessage,
    onSubmit
}) {
  return (
        <div css={s.passwordBox}>
            <AuthPageInput
                type="password"
                name="oldPassword"
                placeholder="현재 비밀번호를 입력하세요."
                value={oldPassword}
                onChange={oldPasswordChange}
                message={oldPasswordMessage}
            />
            <AuthPageInput
                type="password"
                name="newPassword"
                placeholder="새로운 비밀번호를 입력하세요."
                value={newPassword}
                onChange={newPasswordChange}
                message={newPasswordMessage}
            />
            <AuthPageInput
                type="password"
                name="newPasswordCheck"
                placeholder="새로운 비밀번호를 확인하세요."
                value={newPasswordCheck}
                onChange={newPasswordCheckChange}
                message={newPasswordCheckMessage}
            />
            <button css={s.passwordButton} onClick={onSubmit}>비밀번호 변경하기</button>
        </div>
  )
}

export default PasswordEditor