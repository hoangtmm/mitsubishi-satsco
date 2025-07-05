import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function QuickQuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [carModel, setCarModel] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch("https://mitsubishiapi.onrender.com/api/QuickQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, phone, carModel }),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
      setFullName("");
      setPhone("");
      setCarModel("");
    } catch {
      alert("Gửi báo giá thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
        {/* Semi‐transparent backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
         <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        {/* Center panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="flex flex-col items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mb-2">
                  <EnvelopeIcon className="w-8 h-8 text-blue-600" />
                </div>
                <Dialog.Title className="text-2xl font-semibold text-gray-800">
                  Đăng ký báo giá nhanh
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-gray-500 text-center">
                  Cho chúng tôi biết thông tin, chúng tôi sẽ gọi lại cho bạn sớm nhất.
                </Dialog.Description>
              </div>

              {/* Body */}
              {success ? (
                <div className="text-green-600 text-center font-medium">
                  🎉 Đã gửi thành công! Chúng tôi sẽ liên hệ bạn trong ít phút.
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {[
                    { label: "Họ và tên", value: fullName, setter: setFullName, type: "text" },
                    { label: "Số điện thoại", value: phone, setter: setPhone, type: "tel" },
                    { label: "Dòng xe quan tâm", value: carModel, setter: setCarModel, type: "text" },
                  ].map(({ label, value, setter, type }) => (
                    <div key={label}>
                      <label className="block text-sm font-medium text-gray-700">
                        {label}
                      </label>
                      <input
                        type={type}
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                                   focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center px-4 py-2
                               bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg
                               shadow-md transition"
                  >
                    {loading ? "Đang gửi..." : "Gửi yêu cầu"}
                  </button>
                </form>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
