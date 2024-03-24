import React from "react";

const Number = () => {
  return (
    <div className="flex justify-center items-center px-16 py-10 text-center bg-slate-900 max-md:px-5">
      <div className="flex gap-5 justify-between mt-2 w-full max-w-[1100px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col">
          <div className="self-center text-5xl font-semibold text-white leading-[67.2px] max-md:text-4xl">
            20+
          </div>
          <div className="text-base font-medium leading-6 text-neutral-100">
            Years in the industry
          </div>
        </div>
        <div className="flex flex-col">
          <div className="self-center text-5xl font-semibold text-white leading-[67.2px] max-md:text-4xl">
            90%
          </div>
          <div className="text-base font-medium leading-6 text-neutral-100">
            Customer satisfaction
          </div>
        </div>
        <div className="flex flex-col">
          <div className="self-center text-5xl font-semibold text-white leading-[67.2px] max-md:text-4xl">
            10K
          </div>
          <div className="text-base font-medium leading-6 text-neutral-100">
            Properties sold
          </div>
        </div>
        <div className="flex flex-col">
          <div className="self-center text-5xl font-semibold text-white leading-[67.2px] max-md:text-4xl">
            50+
          </div>
          <div className="text-base font-medium leading-6 text-neutral-100">
            Country served
          </div>
        </div>
      </div>
    </div>
  );
}


export default Number;