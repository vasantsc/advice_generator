import { useState, CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000");

  return (
    <div className="sweet-loading">
      <SyncLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;