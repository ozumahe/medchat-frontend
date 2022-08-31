import { FC } from "react";

type Props = {
  open: boolean;
};

const ModalUI: FC<Props> = ({ open }: Props) => {
  return (
    <div
      style={{
        display: `${open ? "flex" : "none"}`,
        position: `${open ? "fixed" : "relative"}`,
        top: "0",
        right: "0",
        left: "0",
        bottom: "0",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "1",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      ModalUI
    </div>
  );
};

export default ModalUI;
