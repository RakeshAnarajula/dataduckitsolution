import { useState, useEffect } from "react";
const WebsiteLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimer);
  }, []);
  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#312D2A]">
      <div className="relative w-[100px] h-[100px]">
        <div 
          className="absolute w-[30px] h-[30px] top-1/2 left-1/2 bg-[#052f5d]"
          style={{
            animation: 'blockUp 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite'
          }}
        ></div>
        <div 
          className="absolute w-[30px] h-[30px] bg-[#8d5e06]"
          style={{
            top: 'calc(50% - 30px)',
            left: 'calc(50% - 30px)',
            animation: 'blockDown 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite'
          }}
        ></div>
      </div>
      <style>{`
        @keyframes blockUp {
          0%, 100% {
            transform: none;
          }
          25% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(-100%) translateY(-100%);
          }
          75% {
            transform: translateY(-100%);
          }
        }
        
        @keyframes blockDown {
          0%, 100% {
            transform: none;
          }
          25% {
            transform: translateX(100%);
          }
          50% {
            transform: translateX(100%) translateY(100%);
          }
          75% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
};
export default WebsiteLoader;