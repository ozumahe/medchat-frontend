import { FC, useEffect, useState } from "react";
import Select from "react-select";

type Props = {
  isMulti: boolean;
  data: any;
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const SelectUI: FC<Props> = ({ isMulti }: Props) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <Select
        defaultValue={options[0]}
        onChange={setSelectedOption}
        isMulti={isMulti}
        options={options}
        // className="select"
      />
    </div>
  );
};

export default SelectUI;
