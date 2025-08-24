import { useState } from "react";
import allDevices from "../public/devices";
import Device from "./components/Device";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [link, setLink] = useState("");

  const handleSetUrl = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a valid url!");
      return;
    }

    setLink(inputValue.startsWith("http") ? inputValue : `http://${inputValue}`);
  }

  return (
    <div>
      {/* Input & Button */}
      <div className="flex justify-center gap-5 my-10">
        <input className="border p-3 text-xl rounded-lg" type="text" placeholder="Enter a url to preview" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleSetUrl} className="bg-[dodgerblue] p-3.5 rounded-lg cursor-pointer">Show Preview</button>
      </div>

      <hr className="max-w-6xl mx-auto" />

      {/* Devices */}
      <div className="flex items-center flex-col gap-y-20">
        {
          allDevices.map(device => <Device key={device.name} name={device.name} width={device.width} height={device.height} type={device.type} link={link} />)
        }
      </div>
    </div>
  );
};

export default App;