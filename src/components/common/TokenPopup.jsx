// Token popup component implementation to display the token data

import { formatNumber } from "../../utils/funcs";
const TokenPopup = ({ tokenData, closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button
          className="close-button"
          style={{
            algin: "right",
            background: "none",
            fontSize: "small",
            border: "none",
            marginLeft: "90%",
            color: "white",
          }}
          onClick={closePopup}
        >
          X
        </button>
        <h4>
          <img
            src={
              tokenData.logo
                ? `https://assets.thetatoken.org/tokens/${tokenData.logo}`
                : svg2img(tokenData)
            }
            style={
              tokenData.logo
                ? { width: "20px", marginRight: "10px" }
                : { width: "20px", marginRight: "10px", borderRadius: "50%" }
            }
          />
          {tokenData.symbol}
        </h4>

        <div>
          <p className="text-left">Token Name : {tokenData.name}</p>
          <p className="text-left">Price : ${tokenData.derivedUSD}</p>
          <p className="text-left">Contract Address : 0x{tokenData.id}</p>
          <p className="text-left">
            DerivedETH : ${formatNumber(tokenData.derivedETH * 1)}{" "}
          </p>
          <p className="text-left">
            Volume : {formatNumber(tokenData.tradeVolume * 1)}
          </p>
          <p className="text-left">
            TradeVolumeETH : ${formatNumber(tokenData.tradeVolumeETH * 1)}
          </p>
          <p className="text-left">
            UntrackedVolumeETH : $
            {formatNumber(tokenData.untrackedVolumeETH * 1)}
          </p>
          <p className="text-left">
            TotalLiquidity : ${formatNumber(tokenData.totalLiquidity * 1)}
          </p>
          <p className="text-left">TxCount : {tokenData.txCount}</p>
          <p className="text-left">
            Volume24HrsETH : ${formatNumber(tokenData.volume24HrsETH * 1)}
          </p>
          <p className="text-left">
            Volume24HrsUSD : ${formatNumber(tokenData.volume24HrsUSD * 1)}
          </p>
          <p className="text-left">txCount24Hrs : {tokenData.txCount24Hrs}</p>
          <p className="text-left">
            MarketCap : ${formatNumber(tokenData.tradeVolumeUSD * 1)}
          </p>
          <p className="text-left">
            Liquidity : ${formatNumber(tokenData.totalLiquidityUSD * 1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenPopup;
