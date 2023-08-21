"use client";

import Image from "next/image";
import React from "react";

const CustomButton = () => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custpm-btn`}
      onClick={() => {}}
    >

        <span className={`title`}>title</span>
    </button>
  );
};

export default CustomButton;
