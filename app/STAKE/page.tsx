"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TradingViewWidget from "../../components/TradingViewWidget"; // Adjust the path as needed
import { useWeb3Modal, useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import BigNumber from "bignumber.js";

const STAKE = () => {
  const [stakeStatus, setStakeStatus] = useState(true);
  const [symbol, _] = useState("ETHUSD"); // State to manage the symbol

  const container = useRef < HTMLDivElement | null > (null);

  const [selectedLink, setSelectedLink] = useState('bond');

  let isMatured = false;

  const { walletProvider } = useWeb3ModalProvider()
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  function getActionTitle() {
    let res = (isConnected && stakeStatus) ? 'STAKE' : (isConnected && !stakeStatus) ? "UNSTAKE" : 'CONNECT WALLET';
    return res;
  }
  async function onActionClick() {
    if (!isConnected) {
      const { open } = useWeb3Modal()
      open();
    }
  }

  async function _trade() {

  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-normal 2xl:justify-between gap-5 text-white mt-12 mb-28">
      <div className="w-full 2xl:w-[67%]">
        <div className="flex items-end flex-wrap gap-10">
          <h5 className="text-[46px] leading-none">
            SPXDAO
            <span className="text-xl translate-x-[10px] -translate-y-[24px] inline-block ">
              (SPX)
            </span>
          </h5>
          <p className="text-[11px] 2xl:text-xl">Market cap: $20,069,780</p>
          <p className="text-[11px] 2xl:text-xl">
            CA: 2tgwKyAM1rg2wSnBHcotZMA9QvY6dL2NBNDMbjgapump
          </p>
        </div>

        <div className="h-[500px] overflow-hidden mt-2">
          {/* Use the TradingViewWidget component and pass the symbol prop */}
          <TradingViewWidget symbol={symbol} />
        </div>

        <div className="flex gap-x-6 md:gap-x-11 gap-y-2 md:gap-y-4 flex-wrap mt-6">
          <div className="text-lg md:text-[32px] leading-5 md:leading-9">
            <p className="text-[#949494]">apy</p>
            <p>40,015.9%</p>
          </div>
          <div className="text-lg md:text-[32px] leading-5 md:leading-9">
            <p className="text-[#949494]">total value deposited</p>
            <p>$1.56M</p>
          </div>
          <div className="text-lg md:text-[32px] leading-5 md:leading-9">
            <p className="text-[#949494]">current index</p>
            <p>9,206 SPX</p>
          </div>
          <div className="text-lg md:text-[32px] leading-5 md:leading-9">
            <p className="text-[#949494]">bond wait time</p>
            <p>5 days</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[496px] 2xl:w-[32%]">
        <div className="flex items-end justify-between text-sm 2xl:text-xl mt-7 2xl:mt-5 mb-1">
          <p>stake</p>
          <p>next rebase in 3h 29m</p>
        </div>

        <div className="border p-3 2xl:p-8 rounded-[6px] bg-[#0D0E17]">
          <div className="grid grid-cols-2 gap-3 mb-14">
            <button
              className={`h-10 2xl:h-16 ${
                stakeStatus ? "bg-[#999999]" : "bg-[#0F1013] border"
              } relative rounded`}
              onClick={() => setStakeStatus(true)}
            >
              <span
                className={`${
                  stakeStatus
                    ? "bg-white text-black "
                    : "bg-[#0F1013] text-white border"
                } absolute top-0 right-0 left-0 h-8 2xl:h-12 flex items-center justify-center rounded text-lg 2xl:text-2xl`}
              >
                STAKE
              </span>
            </button>
            <button
              className={`h-10 2xl:h-16 ${
                !stakeStatus ? "bg-[#999999]" : "bg-[#0F1013] border"
              } relative rounded`}
              onClick={() => setStakeStatus(false)}
            >
              <span
                className={`${
                  !stakeStatus
                    ? "bg-white text-black "
                    : "bg-[#0F1013] text-white border"
                } absolute top-0 right-0 left-0 h-8 2xl:h-12 flex items-center justify-center rounded text-lg 2xl:text-2xl`}
              >
                UNSTAKE
              </span>
            </button>
          </div>

          <div className="relative">
            <input
              className="w-full bg-[#ffffff10] h-[35px] 2xl:h-14 border rounded-[6px] pl-2 pr-16 text-base 2xl:text-2xl"
              type="text"
              name=""
              id=""
              defaultValue={"1,000,000"}
            />
            <button className="flex items-center gap-1 absolute top-0 bottom-0 my-auto right-2 text-base 2xl:text-xl">
              SPX
              <img src="/images/image.png" className="w-[21px]" alt="" />
            </button>
          </div>
          <div className="text-[10px] 2xl:text-2xl flex gap-5 mt-2 2xl:mt-4">
            <p className="underline">25%</p>
            <p className="underline">50%</p>
            <p className="underline">75%</p>
            <p className="underline">100%</p>
          </div>

          <button onClick={onActionClick} className="w-[90%] flex justify-center mx-auto mb-5 mt-2 2xl:mt-4 h-10 2xl:h-16 bg-[#999999] relative rounded ">
            <span className="bg-white text-black absolute top-0 right-0 left-0 h-8 2xl:h-12 flex items-center justify-center rounded  text-lg 2xl:text-2xl">
              {getActionTitle()}
            </span>
          </button>
          <div className="text-base 2xl:text-xl">
            <p className="flex justify-between">
              Your balance <span>5,325,623 SPX</span>
            </p>
            <p className="flex justify-between">
              Your staked balance <span>12,005,534 SPX</span>
            </p>
            <p className="flex justify-between">
              Next reward amount <span>220,503 SPX</span>
            </p>
            <p className="flex justify-between">
              Next reward yield <span>0.3924%</span>
            </p>
            <p className="flex justify-between">
              ROI (5 day) <span>105%</span>
            </p>
          </div>
          {isConnected && (
            <div className="text-center my-[40px]">
              <p className="text-[12px] text-white">
                Claim your staking rewards <b>here, at anytime </b>
              </p>
              <Link href="/">
                <button className="w-[210px] flex justify-center mx-auto mb-5 h-10 2xl:h-16 bg-[#999999] relative rounded mt-[20px]">
                  <span className="bg-white text-black absolute top-0 right-0 left-0 h-8 2xl:h-12 flex items-center justify-center rounded  text-lg 2xl:text-2xl">
                    CLAIM
                  </span>
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="text-base 2xl:text-2xl font-bold flex gap-1 mt-2 2xl:mt-4">
          <Link href="/BOND">[ bond SPX ]</Link>
          <p className="text-[#818181]">[ stake SPX ]</p>
          <Link href="/DAO">[ trade SPX ]</Link>
        </div>

        <div className="flex items-center gap-5 mt-12">
          <img src="/images/image1.png" alt="" />
          <div className="text-sm 2xl:text-2xl">
            <p className="mb-2">about</p>
            <p>
              Welcome to the S&P6900, an advanced blockchain cryptography token
              with limitless possibilities and scientific utilization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default STAKE;
