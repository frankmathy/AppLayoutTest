import { useState } from "react";
import "./Charts.css";

const Charts = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div class="Charts">
      <button onClick={() => setVisible(!visible)}>Charts</button>
      {visible && (
        <div>
          <h1>Charts</h1>
          <p>Charts will be here</p>
        </div>
      )}
    </div>
  );
};

export default Charts;
