
import { useModal } from "@/context/ModalProvider";
import React from "react";

export default function CompletedClearBasket() {
  const { closeModal } = useModal();
  return (
    <>
          <div className=" w-[646] rounded-[10px] bg-white py-[80] px-[90]">
      <div className="flex flex-col items-center gap-[24px]">
        <svg
          width="58"
          height="64"
          viewBox="0 0 58 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.6667 25.3333V48.6667M22.3334 25.3333V48.6667M9.00004 12V51.3333C9.00004 55.067 9.00004 56.9326 9.72666 58.3586C10.3658 59.6131 11.3849 60.6349 12.6394 61.2741C14.064 62 15.93 62 19.6564 62H38.3437C42.0701 62 43.9333 62 45.358 61.2741C46.6124 60.6349 47.635 59.6131 48.2741 58.3586C49 56.934 49 55.07 49 51.3436V12M9.00004 12H15.6667M9.00004 12H2.33337M15.6667 12H42.3334M15.6667 12C15.6667 8.89372 15.6667 7.34135 16.1742 6.11621C16.8508 4.48269 18.1478 3.1841 19.7813 2.50747C21.0064 2 22.5604 2 25.6667 2H32.3334C35.4396 2 36.9928 2 38.2179 2.50747C39.8514 3.1841 41.1489 4.48269 41.8256 6.11621C42.333 7.34135 42.3334 8.89373 42.3334 12M42.3334 12H49M49 12H55.6667"
            stroke="#1E2128"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="font-[MullerBold] text-[32px] text-center pb-[50px]">
          Корзина очищена!
        </p>
      </div>
      <div className="flex gap-[48px] h-[60px] justify-between">
        <button
          onClick={closeModal}
          className="w-full rounded-[10px] border-black bg-black border text-white hover:bg-white hover:text-black"
        >
          Отменить
        </button>

        <button className="w-full rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
          Выйти
        </button>
      </div>
      </div>
    </>
  );
}
