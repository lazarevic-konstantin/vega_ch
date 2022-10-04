import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [value, setValue] = useState("Update me from Child");

  return (
    <div>
      <h1>Parent</h1>
      <p>{value}</p>

      <Child setValue={setValue} />
    </div>
  );
}
