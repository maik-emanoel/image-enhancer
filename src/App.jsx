import { useCallback } from "react";
import img1 from "./assets/img1.jpg"

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from "react-compare-slider";

// eslint-disable-next-line react/prop-types
export const CustomHandle = ({ ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <ReactCompareSlider className="aspect-video"
      {...props}
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: 'blur(12px)',
            border: '2px solid #fffc',
            color: "#fffc",
          }}
          linesStyle={{opacity: .8}}
        />
      }
      itemOne={
        <ReactCompareSliderImage
          src={img1}
          style={{ filter: "blur(1.5px)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={img1}
          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "810px",
        maxHeight: "500px"
      }}
    />
  );
};

export default function App() {
  return (
    <>
      <h1 className="text-4xl mb-12 font-bold tracking-wide uppercase text-white drop-shadow-h1Shadow sm:text-2xl">IA - Image Enhancer</h1>

      <div className="rounded-lg overflow-hidden mx-5 shadow-containerShadow border border-zinc-900">
        <CustomHandle position={50} />
      </div>
    </>
  )
}
