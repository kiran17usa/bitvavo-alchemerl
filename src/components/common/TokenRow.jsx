import { useState, useEffect } from "react";
import { checkImg, formatNumber } from "../../utils/funcs";
import { svg2img } from "../../utils/randomAvatar";
import { green } from "@mui/material/colors";
import { removeW } from "../../utils/funcs";
import TokenPopup from "./TokenPopup"; // Added TokenPopup component to display the token data in a popup
import "./style.css";

const TokenRow = ({ data }) => {
  const [selectedToken, setSelectedToken] = useState(null);
  const [imageExists, setImageExists] = useState(false);

  // State to manage the visibility of the popup
  const [isVisible, setIsVisible] = useState(false);

  // Function to display the token data in the popup
  const displayTokenData = (tokenData) => {
    setIsVisible(!isVisible);
    setSelectedToken(tokenData);
    // console logging the token data for debugging purpose
    if (!isVisible) {
      console.log("Token Name:", tokenData.name);
      console.log("Token clicked:", tokenData.symbol);
      console.log("Token Contract Address:", tokenData.id);
      console.log("Token Price:", tokenData.derivedUSD);
      console.log("Token Price USD:", tokenData.derivedETH);
      console.log("Token Volume:", tokenData.tradeVolumeUSD);
      console.log("Token Trade Volume:", tokenData.tradeVolume);
      console.log("Token Market Cap:", tokenData.tradeVolumeETH);
      console.log("Token Liquidity:", tokenData.totalLiquidity);
      console.log("Token Liquidity:", tokenData.totalLiquidityUSD);
      console.log("Token Volume 24Hrs:", tokenData.volume24HrsETH);
      console.log("Token Volume 24Hrs USD:", tokenData.volume24HrsUSD);
      console.log("Token Trade Volume:", tokenData.tradeVolumeETH);
      console.log("Token 24hrs Transactions count:", tokenData.txCount24Hrs);
      console.log("Token untracked volume ETH:", tokenData.untrackedVolumeETH);
    }
  };

  // Function to hide the token data popup
  const hidePopUp = () => {
    //setSelectedToken(null);
    console.log("Token popup closed");
    setIsVisible(!isVisible); // Toggle the visibility of the popup
  };
  return (
    <tr>
      <td
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-center",
          paddingTop: "20px",
          paddingBottom: "0px",
          borderCollapse: "collapse",
          borderColor: "black",
          paddingLeft: "80px",
          alignItems: "center",
        }}
        className="token-header"
      >
        <img
          src={
            data.logo
              ? `https://assets.thetatoken.org/tokens/${data.logo}`
              : svg2img(data)
          }
          style={
            data.logo
              ? { width: "20px", marginRight: "10px" }
              : { width: "20px", marginRight: "10px", borderRadius: "50%" }
          }
        />
        <div
          className="font-header"
          style={{ marginRight: "3px" }}
          onClick={() => displayTokenData(data)} // Display token data on click
        >
          {selectedToken && isVisible && (
            <TokenPopup
              tokenData={selectedToken}
              closePopup={() => hidePopUp()}
            /> // Token popup component to display the token data
          )}
          {removeW(data.symbol)}
        </div>

        <span
          className="font-regular"
          style={{
            fontSize: "small",
            color: "#449782",
          }}
        >
          {"+" +
            (data.tradeVolumeETH * 1
              ? (
                  ((data.volume24HrsETH * 1) / (data.tradeVolumeETH * 1)) *
                  100
                ).toFixed(2)
              : "0") +
            "%"}
        </span>
      </td>
      <td style={{ textAlign: "start" }} className="font-regular">
        {"$" + data.derivedUSD}
      </td>
      <td style={{ textAlign: "start" }} className="font-regular">
        ${formatNumber(data.tradeVolumeUSD * 1)}
      </td>
      <td style={{ textAlign: "start" }} className="font-regular">
        {"$" + formatNumber(data.totalLiquidityUSD * 1)}
      </td>
      <td style={{ textAlign: "start" }} className="font-regular">
        {"$" + formatNumber(data.tradeVolume * 1)}
      </td>
      <td
        style={{ textAlign: "start", paddingRight: "80px" }}
        className="font-regular"
      >
        {"2yr 3mon"}
      </td>
    </tr>
  );
};

export default TokenRow;
