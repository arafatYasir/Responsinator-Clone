import { useState } from "react";
import allDevices from "../public/devices";
import Device from "./components/Device";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [link, setLink] = useState("");

  const handleSetUrl = () => {
    if (inputValue.trim() === "") {
      alert("⚠️ Please enter a valid URL!");
      return;
    }
    setLink(inputValue.startsWith("http") ? inputValue : `http://${inputValue}`);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-10 px-4 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-400 mb-8">
        Responsinator Clone
      </h1>

      {/* Input & Button */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xl mb-10">
        <input
          className="flex-grow bg-slate-800 text-gray-200 border border-slate-700 px-4 py-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter a URL to preview"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleSetUrl}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          Show Preview
        </button>
      </div>

      <hr className="w-full max-w-5xl border-slate-700 mb-10" />

      {/* Devices */}
      <div className="flex flex-col items-center gap-y-20">
        {allDevices.map((device) => (
          <Device
            key={device.name}
            name={device.name}
            width={device.width}
            height={device.height}
            type={device.type}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
