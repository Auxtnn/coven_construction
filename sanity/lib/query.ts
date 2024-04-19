import { groq } from "next-sanity";
import { client } from "./client";

export async function getRoomByType(roomType: string) {
  try {
    const response = await client.fetch(
      groq`*[_type == $roomType && defined(slug.current)] {
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
      { tag: 'roomType', cache: "force-cache" } // Include tags within the query
    );

    console.log("Fetched:", response);

    return response;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw new Error(`Failed to fetch rooms: ${(error as Error).message}`);
  }
}
