import { useCallback } from "react";
import img1 from "./assets/img1.jpg";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

// eslint-disable-next-line react/prop-types
export const CustomHandle = ({ ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <ReactCompareSlider
      className="aspect-video"
      {...props}
      handle={
        <div className="bg-[#fffc] h-full w-[2px] relative cursor-w-resize">
          <button className="w-12 h-12 backdrop-blur-md absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full border-[2px] border-[#fffc] flex items-center justify-center cursor-w-resize sm:w-4 sm:h-4">
            <CaretLeft weight="fill" color="#fffc" className="w-4 sm:hidden" />
            <CaretRight weight="fill" color="#fffc" className="w-4 sm:hidden" />
          </button>
        </div>
      }
      itemOne={
        <ReactCompareSliderImage
          src={img1}
          style={{ filter: "blur(1.5px)" }}
          alt="one"
        />
      }
      itemTwo={<ReactCompareSliderImage src={img1} alt="two" />}
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "810px",
        maxHeight: "500px",
      }}
    />
  );
};

export default function App() {
  return (
    <>
      <h1 className="text-4xl mb-12 font-bold tracking-wide uppercase text-white drop-shadow-h1Shadow sm:text-2xl">
        IA - Image Enhancer
      </h1>

      <div className="rounded-lg overflow-hidden mx-5 shadow-containerShadow border border-zinc-900">
        <CustomHandle position={50} />
      </div>
    </>
  );
}
