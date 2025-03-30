import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("");
  const actualText = "Shibin";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(actualText.substring(0, index));
      index++;

      if (index > actualText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };

    
  }, [onComplete]);

  return (
    <div className="fixed bg-black flex flex-col items-center justify-center inset-0 text-gray-200 z-50">
      <div className="mb-4 font-mono font-bold text-4xl">
        {text} <span className="animate-blink"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative ">
        <div className="w-[40%] bg-blue-500 h-full shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
