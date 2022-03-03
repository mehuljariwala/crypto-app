import React, { useCallback, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Loading from "../loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState([{ data: [{}] }]);
  const [errMsg, setErrMsg] = useState("");
  const END_POINT =
    "https://api.coincap.io/v2/candles?exchange=poloniex&interval=d1&baseId=bitcoin&quoteId=tether";

  const getOptions = useCallback(() => {
    return {
      title: {
        text: "BTC-USDT",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        labels: {
          formatter: function (y) {
            return "$" + y.toLocaleString("en");
          },
          tooltip: {
            enabled: true,
            y: {
              formatter: function (y) {
                return "$" + y.toLocaleString("en");
              },
            },
          },
        },
      },
    };
  }, []);

  const convertData = (coinData) => {
    coinData?.forEach((d) => {
      d.open = Math.round(d.open * 10000) / 10000;
      d.high = Math.round(d.high * 10000) / 10000;
      d.low = Math.round(d.low * 10000) / 10000;
      d.close = Math.round(d.close * 10000) / 10000;
    });
    let candlestickFormat = coinData?.map((d) => {
      return {
        x: new Date(d.period),
        y: [d.open, d.high, d.low, d.close],
      };
    });

    return candlestickFormat;
  };

  useEffect(() => {
    try {
      fetch(END_POINT)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setErrMsg("");
          setSeries([{ data: convertData(result.data.slice(-90)) }]);
          setIsLoading(false);
        });
    } catch (error) {
      setErrMsg(error);
    }
  }, []);

  const renderChart = () => {
    return (
      <div id="chart">
        <ReactApexChart
          options={getOptions()}
          series={series}
          type="candlestick"
          height="500"
        />
      </div>
    );
  };

  const renderLoading = () => <Loading />;

  return (
    <div>
      {errMsg && (
        <div>
          <i>{errMsg}</i>
        </div>
      )}
      {isLoading ? renderLoading() : renderChart()}
    </div>
  );
};

export default Index;

// HERE I TRY WITH THIS API BUT LOOKS LIKE ITS NOT GIVING ME TIME AND GRPAH IS FAILING TO I USE THIS ABOVE API
// fetch("https://api2.binance.com/api/v3/ticker/24hr")
//   .then((res) => res.json())
//   .then(
//     (result) => {
//       result = result.slice(-90);
//       result.forEach(function (d) {
//         d.open = Math.round(d.openPrice * 10000) / 10000;
//         d.high = Math.round(d.highPrice * 10000) / 10000;
//         d.low = Math.round(d.lowPrice * 10000) / 10000;
//         d.close = Math.round(123 * 10000) / 10000;
//       });

//       console.log("e", result);

//       let candlestickFormat = result.map((d) => {
//         return {
//           x: new Date(new Date(d.closeTime) - new Date(d.openTime)),
//           y: [d.open * 100, d.high * 100, d.low * 100, d.close * 100],
//         };
//       });

//       console.log("candlestickFormat2", candlestickFormat);
//     },
//     (error) => {
//       setErrMsg(error);
//     }
//   );
