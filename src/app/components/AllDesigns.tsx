// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { getRoomByType } from "../../../sanity/lib/query";
// import type { RoomsType } from "../../../types";

// const roomTypes = [
//   "2-bedroom-bungalow",
//   "3-bedroom-bungalow",
//   "4-bedroom-bungalow",
//   "5-bedroom-bungalow",
//   "6-bedroom-bungalow",
//   "2-bedroom-duplex",
//   "3-bedroom-duplex",
//   "4-bedroom-duplex",
//   "5-bedroom-duplex",
//   "6-bedroom-duplex",
//   "2-bedroom-flat",
//   "3-bedroom-flat",
//   "4-bedroom-flat",
//   "5-bedroom-flat",
//   "6-bedroom-flat",
// ];

// const AllDesigns: React.FC = async () => {
//   const allDesigns: RoomsType[] = [];

//   // Fetch designs concurrently using Promise.all
//   const fetchedDesigns = await Promise.all(
//     roomTypes.map(async (roomType) => {
//       try {
//         return await getRoomByType(roomType);
//       } catch (error) {
//         console.error(`Error fetching ${roomType} designs:`, error);
//         // Handle errors (e.g., display a message to the user)
//         return []; // Return empty array to avoid issues in rendering
//       }
//     })
//   );

//   // Combine fetched designs into allDesigns
//   allDesigns.push(...fetchedDesigns.flat());
//   return (
//     <div className=" py-8 md:py-6" id="design">
//       <div className="container place-items-center mx-auto gap-8 pt-6 grid md:grid-cols-3 grid-cols-1 w-full md:px-4 lg:w-11/12">
//         {allDesigns.map((design: any) => (
//           <>
//             <div
//               className="md:max-w-sm w-full mx-2 rounded overflow-hidden shadow-lg"
//               key={design._id}
//             >
//               <Image
//                 className="w-full"
//                 width={300}
//                 height={300}
//                 priority
//                 src={design.fullImage.image}
//                 alt="image"
//               />
//               <div className="px-2 py-4">
//                 <div className="font-bold uppercase text-base mb-2 text-center">
//                   {design.name}
//                 </div>
//               </div>
//               <div className="mx-auto px-20 pb-1">
//                 <Link
//                   //   href={`/designs/${design.currentSlug}`}
//                   href={`/${design.roomTypes}/designs/${design.currentSlug}`}
//                   className="text-blue bg-white justify-center align-middle flex mx-auto gap-2 px-2 py-3 mb-5 rounded-full border border-blue shadow-xl text-sm"
//                 >
//                   <h3>View plan</h3>
//                   <IoIosArrowRoundForward className="text-blue border-blue text-xl rounded-[50%] border" />
//                 </Link>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>

//       <div className="flex justify-center">
//         <Link
//           href="/all-designs"
//           className="text-white bg-blue flex items-center gap-2 px-4 py-2 md:my-5 rounded-full border border-blue shadow-xl text-sm"
//         >
//           <h3>See more</h3>
//           <IoIosArrowRoundForward className="text-white text-xl rounded-[50%] border" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AllDesigns;
