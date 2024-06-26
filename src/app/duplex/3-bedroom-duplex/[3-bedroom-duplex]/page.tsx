import React from "react";
import Image from "next/image";
import { getRoomByType } from "../../../../../sanity/lib/query";
import type { RoomsType } from "../../../../../types";
import Navbar from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const TwoBedroomBungalow = async () => {
  const duplex: RoomsType[] = await getRoomByType("3-bedroom-duplex");

  return (
    <>
      <Navbar />

      <div className="py-8 md:py-6">
        {duplex.map((duplex: any) => (
          <div key={duplex._id}>
            <div className="md:max-w-full md:mx-auto mx-4 lg:w-11/12 rounded border-2 p-5 border-opacity-45 overflow-hidden shadow-lg">
              <Image
                className="w-full"
                width={300}
                height={300}
                src={duplex.fullImage.image}
                alt="image"
              />
              <div className="py-4">
                <h1 className="font-semibold uppercase text-base md:text-lg">
                  {duplex.name}
                </h1>
                <h1 className="font-semibold uppercase text-base md:text-lg">
                  {duplex.drawingRefNo}
                </h1>
              </div>
            </div>
            <div className="container mt-10 gap-6 place-items-center mx-auto pt-6 grid md:grid-cols-2 grid-cols-1 w-full lg:w-11/12">
              <div className="md:max-w-full w-full border-2 p-5 border-opacity-45 rounded overflow-hidden shadow-lg">
                <Image
                  className="w-full"
                  width={300}
                  height={300}
                  src={duplex.leftViewImage.image}
                  alt="image"
                />
                <div className="px-2 py-4">
                  <div className="font-bold md:text-lg uppercase text-base mb-2 text-center">
                    Left Elevation
                  </div>
                </div>
              </div>
              <div className="md:max-w-full w-full border-2 p-5 border-opacity-45 rounded overflow-hidden shadow-lg">
                <Image
                  className="w-full"
                  width={300}
                  height={300}
                  src={duplex.rightViewImage.image}
                  alt="image"
                />
                <div className="px-2 py-4">
                  <div className="font-bold uppercase md:text-lg text-base mb-2 text-center">
                    Right Elevation
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 pb-10 lg:w-11/12 md:mx-auto mx-4 border-2 p-5 border-opacity-45">
              <div className="my-6">
                <h1 className=" uppercase font-semibold md:text-lg text-base">
                  All floors
                </h1>
                <p
                  className="mt-4 uppercase"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {duplex.description}
                </p>
              </div>

              <p className="my-2 uppercase">PLAN PRICE: ₦ {duplex.price}</p>
              <p className="my-2 uppercase mb-8">
                DRAWING REF NO: {duplex.drawingRefNo}
              </p>
              <Link
                href="https://wa.link/530cj2"
                target="_blank"
                className="font-semibold bg-transparent shadow-lg text-blue rounded border-blue border py-2 px-4 hover:text-white hover:bg-blue"
              >
                Buy Plan
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default TwoBedroomBungalow;
