/** @jsxImportSource @emotion/react */
import { HiOutlinePencilAlt } from "react-icons/hi";
import * as s from "./style"
import defaultProfile from "../../../../assets/default_profile.png"; 

function ProfileImageEditor({ imageUrl, fileRef, onFileChange }) {
  return (
    <div css={s.editimgBox}>
      <div css={s.profileImg}>
        <img
          onClick={() => fileRef.current.click()}
          src={imageUrl || defaultProfile} // 기본 이미지 fallback
          alt="프로필"
        />
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileRef}
          onChange={onFileChange}
        />
      </div>
      <div css={s.fileEditbutton} onClick={() => fileRef.current.click()}>
        <HiOutlinePencilAlt />
      </div>
    </div>
  );
}

export default ProfileImageEditor;