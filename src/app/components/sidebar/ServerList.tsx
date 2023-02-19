const ServerIcon = ({ letter, color }: { letter: string; color: string }) => {
  return (
    <div
      className={`rounded-full w-14 aspect-square ${color} flex flex-col justify-center items-center m-2`}
    >
      {letter}
    </div>
  );
};

const ServerList = () => {
  return (
    <div className="w-1/4 bg-black flex flex-col items-center">
      <ServerIcon letter="A" color="bg-red-100" />
      <ServerIcon letter="B" color="bg-blue-100" />
      <ServerIcon letter="C" color="bg-green-100" />
    </div>
  );
};

export default ServerList;
