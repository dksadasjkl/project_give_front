/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";

function AuthPageInput({ type, name, placeholder, value, onChange, ref, message, onKeyDown }) {
    return (
        <div css={s.inputBox}>
            <input 
                css={s.input}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                ref={ref}
                onKeyDown={onKeyDown}
            />
         { 
            !!message?.text && (
                <div css={s.inputIcon(message.type)}>
                    {message.type === "error" ? <MdErrorOutline /> : <MdCheckCircleOutline />}
                </div>
            )
        }
        { 
            !!message?.text && (
                <div css={s.messageBox(message.type)}>
                    { message.text }
                </div>
            )
        }
            
        </div>
    );
}

export default AuthPageInput;