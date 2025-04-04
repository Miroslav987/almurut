
import React, { useState } from "react";
import { useModal } from "@/context/ModalProvider";
import CompletOrder from "./CompletOrder";
import { useAppSelector } from "@/lib/hooks";
import CardOrderingBasket from "@/components/cards/CardOrderingBasket";
// import CardOrdering from "@/app/ui/profile/card-ordering";
export default function MakingOrdering() {
  const {closeModal,openModal} = useModal()
  const {basket} = useAppSelector(state => state.basket)
  const {email , phone, name} = useAppSelector(state => state.user.user)
  const [ phoneState, usePhone] = useState(phone? phone :"")
  const [ emailState, useEmail] = useState(phone? phone :"")
  return (
    <>
      <div className=" relative w-[100%]  rounded-[10px] bg-white container  shadow-[0_0_10px_0_#00000014]">
        <div className="flex justify-end">
          <button onClick={closeModal} className="absolute right-[20] top-[20] rotate-45 text-grey_second text-4xl ">+</button>
        </div>
        <div className="w-full flex ">
          <div className="w-full flex flex-col justify-between py-[80px] px-[60px]  rounded-[10px] bg-[#FCFBFB]">
            <div className="h-[400px] scroll_style overflow-y-scroll pr-[5] flex flex-col gap-[20px]">
                          {basket? basket.products.map((e: any,id:number) => (
                            <CardOrderingBasket key={id} product={e} />
                          )):null}
            </div>
            <div className=" w-full  flex gap-[16] flex-col pt-[45]">
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Доставка</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                ................................
                </p>
                <p className="font-[MullerBold] whitespace-nowrap">Бесплатно</p>
              </div>
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Итого</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                  .................................
                </p>
                <p className="font-[MullerBold] text-[18px] whitespace-nowrap">
                  {basket.price} сом
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  px-[80px] py-[90px] rounded-[10px] shadow-[0_0_10px_0_#00000014]">
            <p className="mb-[60px] text-center text-3xl font-extrabold">
              Оформление заказа
            </p>
            <form action="">
              <div className="w-full flex flex-col gap-[20]">
                <input
                  className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
                  placeholder="Ваше имя"
                  value={name? name :""}
                  type="text"
                />
                <input
                  className="w-full rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
                  value={phone? phone :""}
                  
                  placeholder="+996 500 500 500"
                  type="tel"
                />
                <input
                  className="w-full rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
                  placeholder="example@ex.com"
                  value={email? email :""}
                  type="text"
                />
              </div>
              <button onClick={()=>openModal(<CompletOrder/>)} className="mt-[60px] rounded-[10px] text-white py-[22px] w-full bg-black">
                Оформить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
