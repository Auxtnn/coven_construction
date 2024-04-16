import { PortableTextBlock } from "sanity";

export type RoomsType = {
  currentSlug: any;
  _id: string;
  name: string;
  slug: string;
  fullImage: {
    image: string;
  };
  leftViewImage: {
    image: string;
  };
  rightViewImage: {
    image: string;
  };
  price: number;
  drawingRefNo: number;
  description: PortableTextBlock[];
};
