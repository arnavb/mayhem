import Main from "components/main";
import ServerChannelContainer from "components/server-channel-container";

export const metadata = {
  title: "Mayhem",
};

export default function Home() {
  return (
    <div className="flex h-full flex-1">
      <ServerChannelContainer />
      <Main />
    </div>
  );
}
