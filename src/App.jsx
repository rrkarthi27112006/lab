
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg");

  const value = Number(weight);

  const result =
    weight === ""
      ? ""
      : unit === "kg"
      ? (value * 2.20462).toFixed(2) + " pounds"
      : (value / 2.20462).toFixed(2) + " kilograms";

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Weight Converter</h1>

      <input
        type="number"
        min="0"
        placeholder="Enter weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="kg">Kilograms to Pounds</option>
        <option value="lb">Pounds to Kilograms</option>
      </select>

      <h2>Converted Weight: {result || "--"}</h2>
    </div>
  );
}

export default App;
