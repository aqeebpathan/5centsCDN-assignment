import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = {
  id: string;
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  id,
  label,
  error,
  className,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        {...rest}
        className={clsx(
          "w-full rounded-xl px-3 py-2 font-medium ring-[1.5px] transition-all outline-none placeholder:font-normal",
          {
            "ring-red-500 focus:ring-red-500": error,
            "focus:ring-foreground ring-neutral-400/60": !error,
          },
          className,
        )}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
