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
          <span>pé&nbsp;</span>
          <span>công chúa&nbsp;</span>
          <span>Dzite iu</span>
        </h1>
        <h2 className="tet-2024-header2">Happy new year</h2>
        <div className="glowing">
          {Array.from({ length: 10 }, (_, index) => (
            <span
              key={index}
              style={{ "--i": index } as React.CSSProperties}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tet2024;
