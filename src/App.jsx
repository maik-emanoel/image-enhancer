import { useCallback, useState } from "react";
import img1 from "./assets/img1.jpg";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import {
  CaretLeft,
  CaretRight,
  CircleNotch,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

// eslint-disable-next-line react/prop-types
export const CustomHandle = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  setTimeout(() => {
    setIsLoading((prevState) => !prevState);
  }, 2000);

  return (
    <>
      {isLoading ? (
        <div>
          <CircleNotch
            className="animate-spin"
            color="#fffc"
            size={24}
            weight="bold"
          />
        </div>
      ) : (
        <ReactCompareSlider
          className="aspect-video animate-appear sm:aspect-auto"
          {...props}
          handle={
            <div className="bg-[#fffc] h-full w-[2px] relative cursor-w-resize">
              <button className="w-12 h-12 backdrop-blur-md absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full border-[2px] border-[#fffc] flex items-center justify-center cursor-w-resize sm:w-4 sm:h-4">
                <CaretLeft
                  weight="fill"
                  color="#fffc"
                  className="w-4 sm:hidden"
                />
                <CaretRight
                  weight="fill"
                  color="#fffc"
                  className="w-4 sm:hidden"
                />
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
      )}
    </>
  );
};

export default function App() {
  return (
    <>
      <h1 className="text-4xl mb-12 font-bold tracking-wide uppercase text-white drop-shadow-h1Shadow sm:text-2xl">
        IA - Image Enhancer
      </h1>

      <div className="rounded-lg overflow-hidden mx-5 shadow-containerShadow">
        <CustomHandle position={50} />
      </div>

      <footer className="absolute bottom-4 text-zinc-400 flex items-center gap-2">
        <p className="text-sm">By Maik Emanoel</p>
        <span>|</span>
        <div className="flex gap-0">
          <a
            href="https://github.com/maik-emanoel"
            rel="noreferrer"
            target="_blank"
            className="transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-white"
          >
            <GithubLogo size={20} />
          </a>
          <a
            href="https://linkedin.com/in/maik-emanoel-b21539269/"
            rel="noreferrer"
            target="_blank"
            className="transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-white"
          >
            <LinkedinLogo size={20} />
          </a>
        </div>
      </footer>
    </>
  );
}
