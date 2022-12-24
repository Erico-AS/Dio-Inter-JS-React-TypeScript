import React from "react";
import { InputText, InputContainer, IconContainer, ErrorText } from "./styles";

import { Controller } from "react-hook-form";
import { IInput } from "./types";

export const Input = ({leftIcon, control, name, errorMessage, ...rest}: IInput) => {
    return (
    <>
        <InputContainer>
            {leftIcon ? <IconContainer> {leftIcon} </IconContainer> : null}
            {control ? <Controller 
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <InputText {...field} {...rest}/>}
            /> : <InputText {...rest} /> }
        </InputContainer>
        {errorMessage ? <ErrorText> { errorMessage } </ErrorText> : null}
    </>)
} 