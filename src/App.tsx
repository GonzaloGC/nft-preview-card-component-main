// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "@fontsource-variable/outfit";
import "./index.css";

export const App = () => {
  return (
    <>
      <section className="flex justify-center items-center h-screen bg-[#0d192b] font-outfit">
        <div className="w-[327px] h-[544px] rounded-[15px] bg-[#14253d] text-[#fff] shadow-custom md:w-[350px] md:h-[596px]">
          <div className="h-full flex justify-between items-center p-[24px] md:pt-[24px] md:pr-[24px] md:pl-[24px] md:pb-[31px] flex-col gap-[22px] md:gap-[22px]">
            <div className="h-full w-full">
              <div className="bg-[url('src/assets/images/image-equilibrium.jpg')] bg-cover bg-center bg-no-repeat md:bg-cover md:bg-center md:bg-no-repeat flex justify-center items-center w-[280px] h-[280px] rounded-[8px] md:w-[302px] md:h-[302px] cursor-pointer">
                <div className="hover:bg-opacity-40 md:hover:bg-opacity-40 hover:bg-[#00fff7] md:hover:bg-[#00fff7] hover:w-full hover:h-full md:hover:w-full md:hover:h-full flex justify-center items-center hover:z-50 relative md:relative rounded-[8px]">
                  <div className="hover:bg-[url('src/assets/images/icon-view.svg')] md:hover:bg-[url('src/assets/images/icon-view.svg')] bg-[length:48px_48px] bg-center bg-no-repeat w-[280px] h-[280px] rounded-[8px] md:w-[302px] md:h-[302px]"></div>
                </div>
              </div>
            </div>
            <section className="flex flex-col h-full justify-between">
              <div className="md:flex md:flex-col md:gap-[11px] flex flex-col gap-[13px]">
                <h1 className="text-[22px] md:text-[23px] font-medium">
                  Equilibrium <span className="cursor-pointer">#3429</span>
                </h1>
                <p className="text-[16px] md:text-[18px] font-extralight text-[#a2b6da]">
                  Our Equilibrium collection promotes balance and calm.
                </p>
              </div>
              <div className="flex justify-between gap-">
                <div className="flex gap-2">
                  <img
                    src="src/assets/images/icon-ethereum.svg"
                    alt="icon ethereum"
                    className="w-[11px] h-[18px] self-center"
                  />
                  <span className="text-[15px] md:text-[16px] font-medium">
                    0.041 ETH
                  </span>
                </div>
                <div className="flex">
                  <div className="flex gap-2">
                    <img
                      src="src/assets/images/icon-clock.svg"
                      alt="icon clock"
                      className="w-[17px] h-[17px] self-center"
                    />
                    <span className="text-[#a2b6da] text-[15px] md:text-[17px] font-light">
                      3 days left
                    </span>
                  </div>
                </div>
              </div>
                <span className="border-b-[0.01px] border-solid border-[#2f415b] w-full"></span>
                <section className="flex items-center gap-[15px]">
                  <img
                    src="src/assets/images/image-avatar.png"
                    alt="avatar"
                    className="w-[33px] h-[33px] md:w-[33px] md:h-[33px] border border-solid border-[#fbffff] rounded-[50%]"
                  />
                  <p className="text-[16px] md:text-[17px] font-light">
                    <span className="text-[#a2b6da]">Creation of</span>{" "}
                    <span className="cursor-pointer">Jules Wyvern</span>
                  </p>
                </section>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
