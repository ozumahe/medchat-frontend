import { ButtonUI } from "components/CustomUI";
import { FC } from "react";
import "./App.css";

interface Props {}

const App: FC<Props> = ({}: Props) => {
  return (
    <div className="">
      <ButtonUI />
    </div>
  );
};

export default App;
