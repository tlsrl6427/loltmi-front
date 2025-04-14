import React, { useState } from "react";

// Dummy chart component placeholder (replace with Chart.js or Recharts later)
const DummyChart = () => (
  <div className="bg-gray-800 h-40 rounded-md flex items-center justify-center text-gray-400">
    [그래프 자리]
  </div>
);

const PingStatsCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setFlipped(true);
    setTimeout(() => setShowModal(true), 500); // flip 애니메이션 후 모달 오픈
  };

  const handleClose = () => {
    setShowModal(false);
    setFlipped(false);
  };

  const top3 = [
    { icon: "/images/ping-danger.png", name: "⚠ 위험 핑", count: 12345, rankChange: 2 },
    { icon: "/images/ping-missing.png", name: "❌ 미아 핑", count: 11001, rankChange: -1 },
    { icon: "/images/ping-group.png", name: "🌀 다 모여 핑", count: 7890 }
  ];

  const extendedData = [
    "❓ 질문 핑 – 6,543회",
    "🆘 도움 요청 핑 – 5,987회",
    "🛑 철수 핑 – 4,321회",
    "📍 위치 핑 – 3,876회",
    "🔄 다시 핑 – 2,345회"
  ];

  return (
    <>
      <div
        className="w-full max-w-md perspective cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`relative w-full h-80 transition-transform duration-700 transform-style preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-gradient-to-br from-[#0e1b28] to-[#1f2e45] text-white p-4 rounded-2xl shadow-lg border border-yellow-500 backface-hidden">
            <h2 className="text-xl font-bold mb-2">📊 가장 많이 사용된 핑</h2>
            {top3.map((ping, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <img src={ping.icon} alt={ping.name} className="w-10 h-10 rounded-md border border-yellow-400" />
                <div className="flex-1">
                  <p className="text-lg font-semibold">{ping.name}</p>
                  <p className="text-sm text-gray-300">{ping.count.toLocaleString()}회</p>
                </div>
                <div className="text-sm">
                  {ping.rankChange != null && (
                    <span className={ping.rankChange > 0 ? "text-green-400" : "text-red-400"}>
                      {ping.rankChange > 0 ? `▲ +${ping.rankChange}` : `▼ ${ping.rankChange}`}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Back */}
          <div className="absolute w-full h-full bg-gradient-to-br from-[#0e1b28] to-[#1f2e45] rounded-2xl flex items-center justify-center text-yellow-400 text-2xl font-bold rotate-y-180 backface-hidden">
            
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-[#101820] text-white p-6 rounded-2xl w-[90%] max-w-4xl overflow-y-auto max-h-[90%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">📊 상세 핑 통계</h2>
              <button
                onClick={handleClose}
                className="text-gray-300 hover:text-white text-lg"
              >
                ❌ 닫기
              </button>
            </div>

            <h3 className="text-lg font-semibold mb-2">🔥 TOP 4~10 핑</h3>
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
              {extendedData.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">📈 시간대별 핑 사용 추세</h3>
            <DummyChart />

            <h3 className="text-lg font-semibold mt-6 mb-2">🧠 챔피언별 핑 사용량</h3>
            <DummyChart />
          </div>
        </div>
      )}
    </>
  );
};

export default PingStatsCard;