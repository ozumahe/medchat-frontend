import { ButtonUI, SelectUI } from "components/CustomUI";
import ModalUI from "components/Modal";
import { FC } from "react";
import { DropDownIcon } from "svgIcons";
import "./App.css";

interface Props {}

const App: FC<Props> = ({}: Props) => {
  return (
    <div className="">
      <ButtonUI title="Button" Icon={<DropDownIcon />} />
      <SelectUI isMulti={true} data={[]} />
      <ModalUI open={true} />
    </div>
  );
};

export default App;
