import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        "bg-foreground text-background cursor-pointer rounded-xl px-6 py-2 transition-colors hover:bg-[#383838] disabled:cursor-not-allowed",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
