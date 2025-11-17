/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./DetailModal.style";
import { v4 as uuid } from "uuid";
import instance from "../../../../apis/utills/instance";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../apis/firebase/firebaseConfig";

const DetailModal = ({ projectId, editItem, closeModal, reload }) => {
  const [form, setForm] = useState({
    subtitle: editItem?.donationProjectDetailSubtitle || "",
    content: editItem?.donationProjectDetailContent || "",
    imageUrl: editItem?.donationProjectDetailImageUrl || "",
    orderNo: editItem?.donationProjectDetailOrderNo || 1,
  });

  /** 이미지 업로드 */
  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, `donation/detail/${uuid()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      () => alert("업로드 실패"),
      () => {
        getDownloadURL(storageRef).then((url) => {
          setForm((prev) => ({ ...prev, imageUrl: url }));
          alert("이미지 업로드 완료!");
        });
      }
    );
  };

  /** 저장 */
  const saveDetail = async () => {
    try {
      if (editItem) {
        // 수정
        await instance.put(
          `/admin/donation/projects/details/${editItem.donationProjectDetailId}`,
          {
            donationProjectDetailSubtitle: form.subtitle,
            donationProjectDetailContent: form.content,
            donationProjectDetailImageUrl: form.imageUrl,
            donationProjectDetailOrderNo: form.orderNo,
          }
        );
      } else {
        // 등록
        await instance.post(`/admin/donation/projects/${projectId}/details`, {
          donationProjectDetailSubtitle: form.subtitle,
          donationProjectDetailContent: form.content,
          donationProjectDetailImageUrl: form.imageUrl,
          donationProjectDetailOrderNo: form.orderNo,
        });
      }

      alert("저장 완료");
      reload();
      closeModal();
    } catch (e) {
      alert("저장 실패");
    }
  };

  return (
    <div css={s.overlay}>
      <div css={s.modal}>
        <h2 css={s.title}>
          {editItem ? "상세 수정" : "상세 추가"}
        </h2>

        <label css={s.label}>소제목</label>
        <input
          css={s.input}
          value={form.subtitle}
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
        />

        <label css={s.label}>내용</label>
        <textarea
          css={s.textarea}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />

        <label css={s.label}>순서</label>
        <input
          css={s.input}
          type="number"
          value={form.orderNo}
          onChange={(e) => setForm({ ...form, orderNo: e.target.value })}
        />

        <label css={s.label}>이미지 업로드</label>
        <input type="file" css={s.file} onChange={uploadImage} />

        {form.imageUrl && (
          <img src={form.imageUrl} css={s.preview} alt="" />
        )}

        <div css={s.btnBox}>
          <button css={s.saveBtn} onClick={saveDetail}>
            저장
          </button>
          <button css={s.cancelBtn} onClick={closeModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
