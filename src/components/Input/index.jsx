import React from "react";
import { InputText, InputContainer, IconContainer } from "./styles";

const Input = ({leftIcon, name, ...rest}) => {
    return (
        <InputContainer>
            {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
            <InputText {...rest}/>
        </InputContainer>
    )
} 

export {Input}