/** @jsxImportSource @emotion/react */
import * as s from "./style"
import defaultProfile from "../../../../assets/default_profile.png"; // 기본 이미지 import

function ProfileView({ nickname, email, profileImageUrl, onEditClick }) {
    return (
        <div css={s.editimgBox}>
            <div css={s.imgBox}>
                <div css={s.profileImg}>
                    <img 
                        src={profileImageUrl || defaultProfile} 
                        alt="프로필" 
                    />
                </div>
            </div>
            <div css={s.userBox} >
              <div>{nickname}</div>
              <div>{email}</div>
              <button css={s.button} onClick={onEditClick}>수정</button>
            </div>
        </div>
    );
}

export default ProfileView;