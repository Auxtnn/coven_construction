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

// CarouselSettings.ts
interface ResponsiveSettings {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll?: number;
    infinite?: boolean;
    autoplay?: boolean;
    speed?: number;
    autoplaySpeed?: number;
    cssEase?: string;
  };
}

interface CarouselSettings {
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  speed?: number;
  autoplaySpeed?: number;
  cssEase?: string;
  responsive?: ResponsiveSettings[];
}

export default CarouselSettings;
