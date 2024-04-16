import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getRoomByType } from "../../../../sanity/lib/query";
import type { RoomsType } from "../../../../types";
import { IoIosArrowRoundForward } from "react-icons/io";
import NoDesign from "../NoDesign";

const SixBedB: React.FC = async () => {
  const bungalow: RoomsType[] = await getRoomByType("6-bedroom-bungalow");

  return (
    <div className="py-8 md:py-6">
      {bungalow.length === 0 ? (
        <p>
          <NoDesign />
        </p>
      ) : (
        <div className="container place-items-center mx-auto gap-8 pt-6 grid md:grid-cols-3 grid-cols-1 w-full md:px-4 lg:w-11/12">
          {bungalow.map((bungalow: any) => (
            <>
              <div
                className="md:max-w-sm w-full mx-2 rounded overflow-hidden shadow-lg"
                key={bungalow._id}
              >
                <Image
                  className="w-full"
                  width={300}
                  height={300}
                  priority
                  src={bungalow.fullImage.image}
                  alt="image"
                />
                <div className="px-2 py-4">
                  <div className="font-bold uppercase text-base mb-2 text-center">
                    {bungalow.name}
                  </div>
                </div>
                <div className="mx-auto px-20 pb-1">
                  <Link
                    href={`/bungalows/2-bedroom-bungalow/${bungalow.currentSlug}`}
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

export default SixBedB;
