import React from 'react';

const Watermark = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 pointer-events-none">
      <div className="bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs leading-relaxed shadow-xl backdrop-blur-sm border border-white border-opacity-10 max-w-xs">
        <p className="font-bold text-yellow-400 mb-1 text-sm">Made by BytesFlare InfoTech</p>
        <p className="mb-2 text-red-400 italic">This is a demo site</p>
        <div className="border-t border-white border-opacity-20 pt-2">
          <p className="mb-1 text-gray-300 text-xs">📧 bytesflareinfotechsales@gmail.com</p>
          <p className="text-gray-300 text-xs">📱 8799196162</p>
        </div>
      </div>
    </div>
  );
};

export default Watermark;
