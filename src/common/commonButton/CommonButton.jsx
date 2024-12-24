import React from "react";

const CommonButton = ({ commonButtonContent }) => {
  return (
    <>
      <button type="submit" className="w-[155px] h-[55px] bg-[#7B8CE5] text-[#FFFFFF] rounded-[100px]    ">
        {commonButtonContent}
      </button>
    </>
  );
};

export default CommonButton;
