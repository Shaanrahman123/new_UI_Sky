import Button from "./Button";
import React from "react";

const ButtonPrimary = ({ className = "", ...args }) => {
    return (
        <Button
            className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`}
            {...args}
        />
    );
};

export default ButtonPrimary;









