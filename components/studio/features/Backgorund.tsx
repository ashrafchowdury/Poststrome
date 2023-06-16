import { RotateIcon } from "@/components/ui/Icons";
import { useStudio } from "@/context/StudioContext";
import { defaultBg } from "@/utils/helpers/defaultBg";
import {
  hexGenerator,
  gradiantGenerator,
  meshGenerator,
} from "@/utils/functions/bgGenerator";

const Backgorund = () => {
  const { setMediaBg } = useStudio();
  return (
    <>
      <p className=" text-sm font-medium mb-2">Normal Colors</p>
      <BgColors
        colors={defaultBg.colors}
        generateBg={() => hexGenerator(setMediaBg)}
      />

      <p className=" text-sm font-medium mb-2 mt-8">Gradiants</p>
      <BgColors
        colors={defaultBg.linear}
        generateBg={() => gradiantGenerator(setMediaBg)}
      />

      <p className=" text-sm font-medium mb-2 mt-8">Mesh Gradiant</p>
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
  const { setMediaBg } = useStudio();
  return (
    <>
      <div className="w-full flex flex-wrap items-center">
        {colors.map((data: string): any => {
          return (
            <button
              className=" w-[35px] h-[35px] rounded-lg mr-3 my-2"
              style={{ background: data, backgroundColor: `#${data}` }}
              key={data}
              onClick={() => setMediaBg(data)}
            ></button>
          );
        })}

        <button
          className="glass w-[37px] h-[37px] rounded-lg mr-3 my-2 flex items-center justify-center"
          onClick={generateBg}
        >
          <RotateIcon />
        </button>
      </div>
    </>
  );
};

export default Backgorund;
