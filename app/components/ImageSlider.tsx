import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
export const ImageSlider = (children: any) => {
  const [index, setIndex] = useState(0);
  const Slider = {
    images: [
      "https://images.unsplash.com/photo-1521334884684-d80222895322", // Existing
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Existing
      //   "https://unsplash.com/photos/mountains-meet-clouds-near-a-vast-body-of-water-Od2f0cYyXmQ",
      //   "https://unsplash.com/photos/woman-looks-at-her-phone-outside-a-hotel-2IizTR7gowg",
      //   "https://unsplash.com/photos/clothes-and-accessories-are-laid-out-on-the-bed-dWDkdXRZmn4",
      //
    ],
  };
  const HandlePrev = () => {
    const firstSlide = index === 0;
    const newIndex = firstSlide ? Slider.images.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const handleNext = () => {
    const lastSlide = index === Slider.images.length - 1;
    const newIndexed = lastSlide ? 0 : index + 1;
    setIndex(newIndexed);
  };
  return (
    <div className="relative flex-row  flex w-full justify-center items-center ">
      <button
        className="fixed p-1 left-4 rounded-full shadow  justify-between bg-white-80 text-gray-800 hover:bg-white"
        onClick={HandlePrev}
      >
        <ChevronLeft size={40} />
      </button>
      {/* {Slider.images.map((e) => (
        <img key={e.id} src={e.url} alt={e.alt} />
      ))} */}
      <div className="">
        {/* <img src={Slider.images[index]} alt="Images" /> */}
        {/* <Image
          //src={Slider.images[index]}
          src={Slider.images[index]}
          alt="image"
          height={600}
          width={1000}
        /> */}                        
        <img
        src={Slider.images[index]}
          alt="Images"
          className="w-full h-screen object-cover"
        />
      </div>
      <button
        className="fixed right-4 p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
        onClick={handleNext}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
};

export default ImageSlider;
