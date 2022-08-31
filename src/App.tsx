import { ButtonUI } from "components/CustomUI";
import { FC } from "react";
import { DropDownIcon } from "svgIcons";
import "./App.css";

interface Props {}

const App: FC<Props> = ({}: Props) => {
  return (
    <div className="">
      <ButtonUI title="Button" Icon={<DropDownIcon />} />
    </div>
  );
};

export default App;
