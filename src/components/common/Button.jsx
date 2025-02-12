import React from "react";

const Button = ({ title,buttonType }) => {
  return (
    <div
      className={`px-3 py-2 rounded-md ${(buttonType==="primary")?(" bg-[var(--primary-color)] text-[var(--secondary-color)]"):("bg-[var(--secondary-color)]  hover:bg-[var(--secondary-light-color)] text-[var(--primary-color)]")}`}
    >
      {title}
    </div>
  );
};

export default Button;
