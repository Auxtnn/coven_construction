import React from "react";

const Number: React.FC = () => {
  return (
    <div className="flex z-1 right-0 -bottom-0 w-full absolute justify-center items-center px-16 py-10 bg-blue max-md:px-5">
      <div className="md:flex md:gap-5 gap-10 grid grid-cols-2 md:justify-between mt-2 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col">
          <div className="self-center text-xl md:text-3xl font-semibold text-white leading-[67.2px] max-md:text-4xl">
            15+
          </div>
          <div className="md:text-sm text-xs text-center font-medium leading-6 text-neutral-100">
            Years in the industry
          </div>
        </div>
        <div className="flex flex-col">
          <div className="self-center text-xl md:text-3xl font-semibold text-white leading-[67.2px] max-md:text-4xl">
            95%
          </div>
          <div className="text-sm text-center font-medium leading-6 text-neutral-100">
            Satisfaction
          </div>
        </div>
        <div className="flex flex-col">
          <div className="self-center text-xl md:text-3xl font-semibold text-white leading-[67.2px] max-md:text-4xl">
            100+
          </div>
          <div className="text-xs md:text-sm text-center font-medium leading-6 text-neutral-100">
            Projects completed
          </div>
        </div>
        <div className="flex flex-col">
          <div className="self-center text-xl md:text-3xl font-semibold text-white leading-[67.2px] max-md:text-4xl">
            50+
          </div>
          <div className="text-xs md:text-sm text-center font-medium leading-6 text-neutral-100">
            Designs sold
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
