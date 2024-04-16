import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getRoomByType } from "../../../../sanity/lib/query";
import type { RoomsType } from "../../../../types";
import { IoIosArrowRoundForward } from "react-icons/io";
import NoDesign from "../NoDesign";

const SixBedF: React.FC = async () => {
  const flat: RoomsType[] = await getRoomByType("6-bedroom-flat");

  return (
    <div className="py-8 md:py-6">
      {flat.length === 0 ? (
        <p>
          <NoDesign />
        </p>
      ) : (
        <div className="container place-items-center mx-auto gap-8 pt-6 grid md:grid-cols-3 grid-cols-1 w-full md:px-4 lg:w-11/12">
          {flat.map((flat: any) => (
            <>
              <div
                className="md:max-w-sm w-full mx-2 rounded overflow-hidden shadow-lg"
                key={flat._id}
              >
                <Image
                  className="w-full"
                  width={300}
                  height={300}
                  priority
                  src={flat.fullImage.image}
                  alt="image"
                />
                <div className="px-2 py-4">
                  <div className="font-bold uppercase text-base mb-2 text-center">
                    {flat.name}
                  </div>
                </div>
                <div className="mx-auto px-20 pb-1">
                  <Link
                    href={`/flat/2-bedroom-flat/${flat.currentSlug}`}
                    className="text-blue bg-white justify-center align-middle flex mx-auto gap-2 px-2 py-3 mb-5 rounded-full border border-blue shadow-xl text-sm"
                  >
                    <h3>View plan</h3>
                    <IoIosArrowRoundForward className="text-blue border-blue text-xl rounded-[50%] border" />
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};
export default SixBedF;
