interface GalleryImage {
  mobile: string | { folderName: string; fileName: string };
  tablet: string;
  desktop: string;
}

interface Gallery {
  first: GalleryImage;
  second: GalleryImage;
  third: GalleryImage;
}

interface IncludedItem {
  quantity: number;
  item: string;
}

interface OtherProduct {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface Product {
  cartImage: string;
  category: string;
  quantity:number;

  categoryImage: {
    mobile: string | { folderName: string; fileName: string };
    tablet: string;
    desktop: string;
  };
  description: string;
  features: string;
  gallery: Gallery;
  id: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  includedItems: IncludedItem[];
  name: string;
  new: boolean;
  others: OtherProduct[];
  price: number;
  shortName: string;
  slug: string;
}
