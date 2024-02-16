import * as React from "react";
import HeroImage from "../../images/heroImg.png";
import shadows from "@mui/material/styles/shadows";
function Heronew() {
  return (
    <section className="w-full my-0 md:my-10 xl:my-20 flex justify-center items-center px-16 py-6 md:py-12 bg-white max-md:px-5">
      <div className="w-full h-full container max-w-[1500px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-5 ">
          <div className="flex flex-col w-6/12 max-md:w-full">
            <div className="flex flex-col text-black max-md:max-w-full gap-8">
              <h1 className="text-6xl max-md:hidden font-semibold leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                File your tax ease!
              </h1>
              <p className=" text-xl leading-8 max-md:max-w-full">
                Do it yourself with expert help and mentoring. Take your device
                and let’s start your filing
              </p>
              <button className="w-fit px-6 py-2 uppercase text-white bg-[#AF1B19] hover:bg-[#8d2725] ease-in-out duration-300 rounded-full">
                File my tax returns
              </button>
              <div className="flex gap-10 md:mt-8 text-black max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col gap-4">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="12" fill="black" />
                    <path
                      d="M22 14.9C22.9283 14.9 23.8185 15.2503 24.4749 15.8739C25.1313 16.4974 25.5 17.3432 25.5 18.225C25.5 19.1068 25.1313 19.9526 24.4749 20.5761C23.8185 21.1997 22.9283 21.55 22 21.55C21.0717 21.55 20.1815 21.1997 19.5251 20.5761C18.8687 19.9526 18.5 19.1068 18.5 18.225C18.5 17.3432 18.8687 16.4974 19.5251 15.8739C20.1815 15.2503 21.0717 14.9 22 14.9ZM27.5 18.225C27.5 16.8392 26.9205 15.5102 25.8891 14.5304C24.8576 13.5505 23.4587 13 22 13C20.5413 13 19.1424 13.5505 18.1109 14.5304C17.0795 15.5102 16.5 16.8392 16.5 18.225C16.5 19.6108 17.0795 20.9398 18.1109 21.9196C19.1424 22.8995 20.5413 23.45 22 23.45C23.4587 23.45 24.8576 22.8995 25.8891 21.9196C26.9205 20.9398 27.5 19.6108 27.5 18.225ZM31 29.15C31 27.8902 30.4732 26.682 29.5355 25.7912C28.5979 24.9004 27.3261 24.4 26 24.4H18C16.6739 24.4 15.4021 24.9004 14.4645 25.7912C13.5268 26.682 13 27.8902 13 29.15V32H31V29.15ZM26 26.3C26.7956 26.3 27.5587 26.6003 28.1213 27.1347C28.6839 27.6692 29 28.3941 29 29.15V30.1H15V29.15C15 28.3941 15.3161 27.6692 15.8787 27.1347C16.4413 26.6003 17.2044 26.3 18 26.3H26Z"
                      fill="white"
                    />
                  </svg>
                  <div className=" text-xl font-bold ">3500+</div>
                  <div className=" text-base ">Satisfied Users</div>
                </div>
                <div className="flex flex-col gap-4">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="12" fill="black" />
                    <path
                      d="M22.75 21.075C22.625 21.075 22.625 20.9562 22.5 20.9562V17.275C24 17.3937 25.25 17.9875 25.25 17.9875L26.375 15.85C26.25 15.85 24.5 14.9 22.5 14.9V13H21.25V14.9C20.25 15.1375 19.5 15.4938 18.75 15.9688C18 16.6813 17.5 17.6313 17.5 18.7C17.5 19.5312 17.75 21.4312 21.25 22.975V27.6062C20.125 27.3688 18.75 26.775 18.25 26.5375L17 28.5563C17.25 28.675 19.25 29.7437 21.25 29.9813V32H22.5V29.9813C25.375 29.625 27 27.4875 27 25.4688C27 23.6875 25.75 22.2625 22.75 21.075ZM21.25 20.3625C20.25 19.7687 20 19.175 20 18.8187C20 18.3438 20.125 17.9875 20.5 17.75L21.25 17.3938V20.3625ZM22.5 27.6062V23.5687C23.875 24.1625 24.5 24.875 24.5 25.4688C24.5 26.1812 24.125 27.3688 22.5 27.6062Z"
                      fill="white"
                    />
                  </svg>
                  <div className=" text-xl font-bold">250k+</div>
                  <div className=" text-base">Successful transactions</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex w-full z-10 h-1/2 ">
              <div
                className="flex flex-col bg-white gap-2 h-fit items-start max-w-[150px] md:max-w-[100px] p-2 rounded-2xl mt-4 ml-4"
                style={{ boxShadow: "#7d12115e 6px 3px 18px" }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="44" rx="12" fill="black" />
                  <path
                    d="M22.75 21.075C22.625 21.075 22.625 20.9562 22.5 20.9562V17.275C24 17.3937 25.25 17.9875 25.25 17.9875L26.375 15.85C26.25 15.85 24.5 14.9 22.5 14.9V13H21.25V14.9C20.25 15.1375 19.5 15.4938 18.75 15.9688C18 16.6813 17.5 17.6313 17.5 18.7C17.5 19.5312 17.75 21.4312 21.25 22.975V27.6062C20.125 27.3688 18.75 26.775 18.25 26.5375L17 28.5563C17.25 28.675 19.25 29.7437 21.25 29.9813V32H22.5V29.9813C25.375 29.625 27 27.4875 27 25.4688C27 23.6875 25.75 22.2625 22.75 21.075ZM21.25 20.3625C20.25 19.7687 20 19.175 20 18.8187C20 18.3438 20.125 17.9875 20.5 17.75L21.25 17.3938V20.3625ZM22.5 27.6062V23.5687C23.875 24.1625 24.5 24.875 24.5 25.4688C24.5 26.1812 24.125 27.3688 22.5 27.6062Z"
                    fill="white"
                  />
                </svg>
                <h4 className="text-xs">Successful transcations</h4>
                <p className="text-sm font-semibold">$ 3989</p>
                <span className="flex justify-center items-center p-2 gap-2 rounded-full bg-[#AF1B19] text-white text-xs ">
                  + 8.65%
                  <svg
                    width="8"
                    height="4"
                    viewBox="0 0 8 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.1852 0.0824257L7.40005 3.39767C7.60065 3.60453 7.47906 4 7.21485 4H0.785152C0.520944 4 0.399347 3.60453 0.599948 3.39767L3.8148 0.0824257C3.92137 -0.0274754 4.07863 -0.0274751 4.1852 0.0824257Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <img
              src={HeroImage}
              alt="person using laptop"
              className="absolute object-bottom z-[1] w-full h-[85%] object-cover rounded-xl"
            />
            <div className="w-1/2 h-[65%] bg-red-700 z-0 blur-[175px] absolute bottom-0 right-0"></div>
            <div className="flex flex-col max-md:hidden z-10 gap-4 justify-center items-end w-full h-1/2 ">
              <div className="w-[80%] flex justify-between items-start flex-col gap-4 p-4 mt-10 h-[80%] bg-white rounded-3xl">
                <div className="flex gap-2 justify-center items-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="11.25" fill="black" />
                    <path
                      d="M20 11C15.0373 11 11 15.0373 11 20C11 24.9628 15.0373 29 20 29C24.9628 29 29 24.9628 29 20H26.975C26.975 23.846 23.846 26.975 20 26.975C16.154 26.975 13.025 23.846 13.025 20C13.025 16.154 16.154 13.025 20 13.025V11ZM25.55 12.9372L19.9213 19.9655L17.291 17.81L15.7895 19.637L19.3453 22.553C19.466 22.6526 19.6055 22.7272 19.7554 22.7724C19.9053 22.8176 20.0628 22.8325 20.2185 22.8163C20.3742 22.8 20.5252 22.7529 20.6625 22.6777C20.7999 22.6025 20.9209 22.5007 21.0185 22.3783L27.3965 14.4155L25.55 12.9372Z"
                      fill="white"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold">
                    CRA <span className="text-sm">Certified</span> No: 1 NETFILE{" "}
                  </h3>
                </div>
                <div className="flex gap-2 lg:ml-4 justify-center items-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="9" fill="black" />
                    <path
                      d="M9.77778 12.1111H12.1111C12.3174 12.1111 12.5152 12.0292 12.6611 11.8833C12.8069 11.7374 12.8889 11.5396 12.8889 11.3333V10.5556C12.8889 10.143 13.0528 9.74733 13.3445 9.45561C13.6362 9.16389 14.0319 9 14.4444 9C14.857 9 15.2527 9.16389 15.5444 9.45561C15.8361 9.74733 16 10.143 16 10.5556V11.3333C16 11.5396 16.0819 11.7374 16.2278 11.8833C16.3737 12.0292 16.5715 12.1111 16.7778 12.1111H19.1111C19.3174 12.1111 19.5152 12.1931 19.6611 12.3389C19.8069 12.4848 19.8889 12.6826 19.8889 12.8889V15.2222C19.8889 15.4285 19.9708 15.6263 20.1167 15.7722C20.2626 15.9181 20.4604 16 20.6667 16H21.4444C21.857 16 22.2527 16.1639 22.5444 16.4556C22.8361 16.7473 23 17.143 23 17.5556C23 17.9681 22.8361 18.3638 22.5444 18.6555C22.2527 18.9472 21.857 19.1111 21.4444 19.1111H20.6667C20.4604 19.1111 20.2626 19.1931 20.1167 19.3389C19.9708 19.4848 19.8889 19.6826 19.8889 19.8889V22.2222C19.8889 22.4285 19.8069 22.6263 19.6611 22.7722C19.5152 22.9181 19.3174 23 19.1111 23H16.7778C16.5715 23 16.3737 22.9181 16.2278 22.7722C16.0819 22.6263 16 22.4285 16 22.2222V21.4444C16 21.0319 15.8361 20.6362 15.5444 20.3445C15.2527 20.0528 14.857 19.8889 14.4444 19.8889C14.0319 19.8889 13.6362 20.0528 13.3445 20.3445C13.0528 20.6362 12.8889 21.0319 12.8889 21.4444V22.2222C12.8889 22.4285 12.8069 22.6263 12.6611 22.7722C12.5152 22.9181 12.3174 23 12.1111 23H9.77778C9.5715 23 9.37367 22.9181 9.22781 22.7722C9.08194 22.6263 9 22.4285 9 22.2222V19.8889C9 19.6826 9.08194 19.4848 9.22781 19.3389C9.37367 19.1931 9.5715 19.1111 9.77778 19.1111H10.5556C10.9681 19.1111 11.3638 18.9472 11.6555 18.6555C11.9472 18.3638 12.1111 17.9681 12.1111 17.5556C12.1111 17.143 11.9472 16.7473 11.6555 16.4556C11.3638 16.1639 10.9681 16 10.5556 16H9.77778C9.5715 16 9.37367 15.9181 9.22781 15.7722C9.08194 15.6263 9 15.4285 9 15.2222V12.8889C9 12.6826 9.08194 12.4848 9.22781 12.3389C9.37367 12.1931 9.5715 12.1111 9.77778 12.1111Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h5 className="text-sm font-medium">
                    Resolving complex returns
                  </h5>
                </div>
                <div className="flex gap-2 lg:ml-4 justify-center items-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="9" fill="black" />
                    <path
                      d="M22.5661 20.9133L19.2499 18.0932C18.9069 17.7843 18.5403 17.6434 18.2445 17.6566C19.1247 16.6245 19.5712 15.2919 19.4906 13.938C19.41 12.584 18.8085 11.3138 17.8122 10.3935C16.8158 9.47315 15.502 8.97415 14.1459 9.00103C12.7898 9.02791 11.4968 9.57859 10.5377 10.5377C9.57859 11.4968 9.02791 12.7898 9.00103 14.1459C8.97415 15.502 9.47315 16.8158 10.3935 17.8122C11.3138 18.8085 12.584 19.41 13.938 19.4906C15.2919 19.5712 16.6245 19.1247 17.6566 18.2445C17.6426 18.5403 17.7843 18.9069 18.0932 19.2499L20.9133 22.5661C21.3963 23.1025 22.1846 23.148 22.6659 22.6667C23.1471 22.1855 23.1016 21.3963 22.5652 20.9141L22.5661 20.9133ZM14.2502 17.7493C13.322 17.7493 12.4317 17.3806 11.7754 16.7242C11.119 16.0678 10.7503 15.1776 10.7503 14.2493C10.7503 13.3211 11.119 12.4309 11.7754 11.7745C12.4317 11.1181 13.322 10.7494 14.2502 10.7494C15.1785 10.7494 16.0687 11.1181 16.7251 11.7745C17.3814 12.4309 17.7502 13.3211 17.7502 14.2493C17.7502 15.1776 17.3814 16.0678 16.7251 16.7242C16.0687 17.3806 15.1785 17.7493 14.2502 17.7493Z"
                      fill="white"
                    />
                  </svg>

                  <h5 className="text-sm font-medium">Accurate support</h5>
                </div>
              </div>
              <div className="w-[80%] h-[20%] bg-white rounded-3xl flex justify-between items-center px-2 py-[6px] gap-2">
                <a
                  href="#"
                  className="px-[10px] py-1 bg-[#ECC8C8] grow text-center text-base rounded-full"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="px-[10px] py-1 bg-[#EDEDED] grow text-center text-base rounded-full"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="bg-red-700 h-full aspect-square rounded-full flex justify-center items-center"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h1 className="font-semibold mb-4 md:hidden max-md:max-w-full max-md:text-4xl ">
            File your tax ease!
          </h1>
        </div>
      </div>
    </section>
  );
}
export default Heronew;
