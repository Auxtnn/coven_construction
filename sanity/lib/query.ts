// sanity/sanity.query.ts

import { groq } from "next-sanity";
import { client } from "./client";

export async function getRoomByType(roomType: string) {
  try {
    const response = await client.fetch(
      groq`*[_type == $roomType] {
        'currentSlug': slug.current,
        _id,
        name,
        slug,
        fullImage { "image": asset->url },
        leftViewImage { "image": asset->url },
        rightViewImage { "image": asset->url },
        price,
        drawingRefNo,
        description
      }`,
      { roomType },
      { cache: "force-cache" }
    );

    console.log("Fetched:", response);

    return response;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw new Error(`Failed to fetch rooms: ${(error as Error).message}`);
  }
}
