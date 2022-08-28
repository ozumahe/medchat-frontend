import React, { FC } from "react";

type Props = {};

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1-inner">
        <img src="" alt="Hospital" />
      </div>
    </div>
  </div>
);

const ChannelListContainer: FC<Props> = (props: Props) => {
  return <div>ChannelListContainer</div>;
};

export default ChannelListContainer;
