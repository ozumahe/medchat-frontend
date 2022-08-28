import { FC } from "react";
import "./App.css";

import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelListContainer } from "./components";

interface Props {}

const App: FC<Props> = ({}: Props) => {
  const apiKey = "w5ubfwttser2s";
  const client = StreamChat.getInstance(apiKey);
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelContainer />
        <ChannelListContainer />
      </Chat>
    </div>
  );
};

export default App;
