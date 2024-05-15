import React from "react";
import { tv } from "tailwind-variants";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    color: "primary" | "secondary";
    size: "xl" | "lg" | "sm";
}

const buttonVariants = tv({
    base: "text-white px-4 py-2 rounded-md",
    variants: {
        color: {
            primary: "bg-[#201722]",
            secondary: "bg-[#9D29BC]",
        },
        size: {
            sm: "text-sm px-3 py-1.5",
            lg: "text-lg",
            xl: "text-xl",
        }
    }
})

export const Button: React.FC<ButtonProps> = ({ color, size, ...props }) => {
    return (
        <button className={buttonVariants({ color: color, size: size })} {...props}></button>
    )
}

Button.displayName = "Button";