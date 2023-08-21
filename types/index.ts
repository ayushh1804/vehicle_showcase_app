import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyle?: String;
    handleClick? : MouseEventHandler<HTMLButtonElement>;
}