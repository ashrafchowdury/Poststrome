import { RotateIcon } from "@/components/ui/Icons";
import { useStudio } from "@/context/StudioContext";
import {
  hexGenerator,
  gradiantGenerator,
  meshGenerator,
  defaultBg,
} from "@/utils";

const Backgorund = () => {
  const { setMediaBg } = useStudio();
  return (
    <>
      <p className=" md:text-sm text-xs font-medium md:mb-2 mb-1">
        Normal Colors
      </p>
      <BgColors
        colors={defaultBg.colors}
        generateBg={() => hexGenerator(setMediaBg)}
      />

      <p className=" md:text-sm text-xs font-medium md:mb-2 mb-1 md:mt-8 mt-4">
        Gradiants
      </p>
      <BgColors
        colors={defaultBg.linear}
        generateBg={() => gradiantGenerator(setMediaBg)}
      />

      <p className=" md:text-sm text-xs font-medium md:mb-2 mb-1 md:mt-8 mt-4">
        Mesh Gradiant
      </p>
      <BgColors
        colors={defaultBg.mesh}
        generateBg={() => meshGenerator(setMediaBg)}
      />
    </>
  );
};

type BgColorsType = {
  colors: string[];
  generateBg: () => void;
};

export const BgColors = ({ colors, generateBg }: BgColorsType) => {
  const { mediaBg, setMediaBg } = useStudio();
  return (
    <>
      <div className="w-full flex flex-wrap items-center">
        {colors.map((data: string): any => {
          return (
            <button
              className={` ${
                data == mediaBg && "ring-2 ring-neutral-200"
              } md:w-[35px] md:h-[35px] w-7 h-7 rounded-lg md:mr-3 mr-2 my-2 duration-200`}
              style={{ background: data, backgroundColor: `#${data}` }}
              key={data}
              onClick={() => setMediaBg(data)}
            ></button>
          );
        })}

        <button
          className="glass md:w-[35px] md:h-[35px] w-7 h-7 rounded-lg md:mr-3 mr-2 my-2 flex items-center justify-center"
          onClick={generateBg}
        >
          <RotateIcon />
        </button>
      </div>
    </>
  );
};

export default Backgorund;
