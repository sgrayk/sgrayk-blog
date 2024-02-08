import { Fireworks } from "@fireworks-js/react";
import "./index.css";

const Tet2024 = () => {
  return (
    <>
      <div className="tet2024-body">
        <Fireworks
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            transitionDuration: "40s",
            animationDuration: "20s",
            counterIncrement: "10",
          }}
        />
        <h1 className="tet-2024-header1">
          <span>01.</span>
          <span>01.</span>
          <span>2024</span>
        </h1>
      </div>
    </>
  );
};

export default Tet2024;
