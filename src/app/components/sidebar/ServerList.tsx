const ServerIcon = ({ letter, color }: { letter: string; color: string }) => {
  return (
    <div
      className={`aspect-square w-14 rounded-full ${color} m-2 flex flex-col items-center justify-center`}
    >
      {letter}
    </div>
  );
};

const ServerList = () => {
  return (
    <div className="flex w-1/4 flex-col items-center bg-black">
      <ServerIcon letter="A" color="bg-red-100" />
      <ServerIcon letter="B" color="bg-blue-100" />
      <ServerIcon letter="C" color="bg-green-100" />
    </div>
  );
};

export default ServerList;
