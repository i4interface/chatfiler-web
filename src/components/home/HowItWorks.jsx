import React from "react";

function HowItWorks() {
  return (
    <>
      <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5">
        <div className="flex flex-col mt-8 w-full max-w-[1183px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-3.5 self-start pr-4 text-base items-center text-red-700 whitespace-nowrap bg-rose-100 rounded-3xl">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c04013bda5d5e7c260e208cebf6250c3ec2c9e78ffa09eabbb020b1488647969?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                      className="aspect-square w-[49px]"
                    />
                    <div className="flex-auto my-auto">HOW IT WORKS</div>
                  </div>
                  <div className="mt-9 text-6xl leading-[83.84px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
                    How It Works:
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/312304b50ddc1ed30a820fda44de4a97f9fd8276a5512475bae5a79768e21e73?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/312304b50ddc1ed30a820fda44de4a97f9fd8276a5512475bae5a79768e21e73?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/312304b50ddc1ed30a820fda44de4a97f9fd8276a5512475bae5a79768e21e73?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/312304b50ddc1ed30a820fda44de4a97f9fd8276a5512475bae5a79768e21e73?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/312304b50ddc1ed30a820fda44de4a97f9fd8276a5512475bae5a79768e21e73?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/312304b50ddc1ed30a820fda44de4a97f9fd8276a5512475bae5a79768e21e73?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/312304b50ddc1ed30a820fda44de4a97f9fd8276a5512475bae5a79768e21e73?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/312304b50ddc1ed30a820fda44de4a97f9fd8276a5512475bae5a79768e21e73?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                    className="mt-20 w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 justify-between items-start mt-9 text-3xl leading-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col gap-4 w-[60px] mt-2 text-white whitespace-nowrap basis-0 max-md:hidden">
                    <div className="flex w-full bg-red-700 justify-center items-center text-center aspect-square rounded-full ">
                      1
                    </div>
                    <div className="self-center w-2 bg-red-700 rounded h-[114px]" />
                    <div className="flex bg-red-700 justify-center items-center text-center aspect-square rounded-full ">
                      2
                    </div>
                    <div className="self-center w-2 bg-red-700 rounded h-[114px]" />
                    <div className="flex w-[60px] justify-center items-center bg-red-700 rounded-full aspect-square">
                      3
                    </div>
                    <div className="self-center w-2 bg-red-700 rounded h-[180px] xl:h-[100px]" />
                    <div className="flex w-[60px] justify-center items-center bg-red-700 rounded-full aspect-square">
                      4
                    </div>
                  </div>
                  <ol className="w-full flex flex-col px-[30px] md:px-0 flex-1 text-zinc-900 list-decimal md:list-none">
                    <li className="text-2xl md:text-3xl">
                      <div>Create Your Account</div>
                      <ol className="mt-4 text-base leading-6 list-disc">
                        <li>Sign up with Chatfilers to create your account.</li>
                        <li>
                          Provide the necessary information to get started.
                        </li>
                      </ol>
                    </li>

                    <li className="text-2xl md:text-3xl">
                      <div className="mt-[60px] whitespace-nowrap max-md:mt-10">
                        Input Your Information
                      </div>
                      <ol className="mt-2.5 text-base leading-6 list-disc">
                        <li>Our user-friendly interface guides you through</li>

                        <li>the process of entering your tax information.</li>

                        <li>
                          Have all your documents ready for a seamless
                          experience.
                        </li>
                      </ol>
                    </li>

                    <li className="text-2xl md:text-3xl">
                      <div className="mt-[30px] max-md:mt-10">
                        Review and Confirm
                      </div>
                      <ol className="mt-4 text-base leading-6 list-disc">
                        <li>Double-check your details and ensure accuracy.</li>

                        <li>
                          Our platform highlights any potential errors,giving
                          you the confidence that your returnis error-free.
                        </li>
                      </ol>
                    </li>

                    <li className="text-2xl md:text-3xl">
                      <div className="mt-[30px] max-md:mt-10">
                        Submit with Confidence
                      </div>
                      <ol className="mt-4 text-base leading-6 list-disc">
                        <li>
                          Once you are satisfied with your tax return, submit it
                          securely using our Netfile service.
                        </li>
                        <li>
                          Relax, knowing that your submission meets CRA
                          standards.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
