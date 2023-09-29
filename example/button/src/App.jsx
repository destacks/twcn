import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-blue-600">TC</span> Button Example With React +
          Vite
        </h1>
        <div className="space-y-4">
          <Button
            isAlert={false}
            isActive={true}
            onClick={() => setCount((count) => count + 1)}
            className="m-4"
          >
            Count is {count}
          </Button>
          <Button
            isAlert={true}
            isActive={true}
            onClick={() => setCount(0)}
            className="m-4"
          >
            Reset count
          </Button>
          <p className="border p-4 rounded bg-gray-100">
            Edit <code className="bg-gray-200 rounded p-1">src/Button.jsx</code>
            to test <span className="text-blue-600 font-bold">TC</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
