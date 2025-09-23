/** @jsxImportSource @emotion/react */
import * as s from "./style";

export const RootFooter = () => {
  return (
    <div css={s.footer}>
            <div>
                <span css={s.spanContent}>&#9889;위 웹사이트는 개발역량을 키우기 위한 개발자 웹 프로젝트 입니다. 사적 이익 추구를 목적으로 운영되지 않습니다.<br/><br/></span>
                (주)기부 프로젝트 / 대표 서대표 / 사업자 등록번호 0000-00-0000<br/>
                대표번호: 0000-0000 / 고객센터문의: 0000-0000<br/>
                운영시간: 오전 9시 ~ 오후 6시(주말 및 공휴일 휴무)<br/>
                점심시간: 오후 12시 ~ 오후 1시<br/>
            </div>
            <div>
                <div>
                    <a href="https://github.com/dksadasjkl/project_give_front" target="_black">&#9989;Front-End Code 보러가기</a>
                </div>
                <div>
                    <a href="https://github.com/dksadasjkl/project_give_back" target="_black">&#9989;Back-End Code 보러가기</a>
                </div>
                <br/>   
                <div>
                    <div css={s.githubContent}>&#10024;깃허브 보러가기</div>
                    <div>
                        <a href="https://github.com/dksadasjkl" target="_black">&#9995;서창현</a>
                    </div>
                </div>
            </div>
        </div>
  )
}
