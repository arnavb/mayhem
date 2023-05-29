import { randomPlaceholderImage } from "lib/random-placeholder-image";
import Image from "next/image";

const ServerIcon = ({ src }: { src: string }) => {
  return (
    <Image
      width={100}
      height={100}
      className="m-2 h-14 w-14 rounded-full"
      src={src}
      alt=""
    />
  );
};

const ServerList = () => {
  return (
    <div className="flex w-1/4 flex-col items-center bg-neutral-400">
      <ServerIcon src={randomPlaceholderImage()} />
      <ServerIcon src={randomPlaceholderImage()} />
      <ServerIcon src={randomPlaceholderImage()} />
    </div>
  );
};

export default ServerList;
