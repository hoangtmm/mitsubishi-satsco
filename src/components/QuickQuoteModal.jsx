import React, { useEffect, useState } from "react";

const QuickQuoteModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-center mb-4">Báo Giá Nhanh</h2>
        <form className="space-y-3">
          <input type="text" placeholder="Tên Bạn" className="w-full px-4 py-2 border rounded" />
          <input type="text" placeholder="Số Điện Thoại" className="w-full px-4 py-2 border rounded" />
          <input type="text" placeholder="Dòng Xe Quan Tâm" className="w-full px-4 py-2 border rounded" />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
            ĐĂNG KÝ
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickQuoteModal;
