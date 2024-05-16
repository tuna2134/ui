import React from "react";
import { tv } from "tailwind-variants";

const cardVariants = tv({
    base: "shadow-md rounded-md p-4 shadow-md",
});

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
    href?: string;
}

export const Card: React.FC<CardProps> = ({ href, className, ...props }) => {
    const Component = typeof href === "string" ? "a" : "div";
    const theirProps = props as object;
    return (
        <Component
            className={cardVariants({ className })}
            href={href}
            {...theirProps}
        />
    );
};

export interface CardHeaderProps
    extends React.ComponentPropsWithoutRef<"div"> {}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
    return <div className="mb-4">{children}</div>;
};
