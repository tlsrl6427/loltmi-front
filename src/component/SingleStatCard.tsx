import React, { useState } from "react";

// Dummy chart component placeholder (replace with Chart.js or Recharts later)
const DummyChart = () => (
  <div className="bg-gray-800 h-40 rounded-md flex items-center justify-center text-gray-400">
    [그래프 자리]
  </div>
);

const SingleStatCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setFlipped(true);
    setTimeout(() => setShowModal(true), 500);
  };

  const handleClose = () => {
    setShowModal(false);
    setFlipped(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="w-full max-w-md perspective cursor-pointer"
      >
        <div
          className={`relative w-full h-80 transition-transform duration-700 transform-style preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-gradient-to-br from-[#0e1b28] to-[#1f2e45] text-white p-4 rounded-2xl shadow-lg border border-green-500 text-center backface-hidden">
            <h2 className="text-lg font-semibold mb-2">첫 번째 포탑 선취 시 승률</h2>
            <div className="text-4xl font-bold text-green-300 mb-1">73.44%</div>
            <p className="text-sm text-gray-400">지난 30일 기준</p>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full bg-gradient-to-br from-[#0e1b28] to-[#1f2e45] rounded-2xl flex items-center justify-center text-yellow-400 text-2xl font-bold rotate-y-180 backface-hidden">
            
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-[#101820] text-white p-6 rounded-2xl w-[90%] max-w-2xl overflow-y-auto max-h-[90%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">📊 포탑 선취와 승률의 관계</h2>
              <button
                onClick={handleClose}
                className="text-gray-300 hover:text-white text-lg"
              >
                ❌ 닫기
              </button>
            </div>
            <p className="text-sm text-gray-300 mb-4">지난 30일간 데이터를 기반으로 한 통계입니다.</p>
            <DummyChart />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleStatCard;