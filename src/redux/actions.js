const data = [
  {
    scrip: "AADR",
    quantity: 430,
    price: "$50.30",
    avgCost: "$41.75",
    invAmount: "$17,952.07",
    portfolioVal: "22.06%",
    pAndL: "$3,676.93",
    returnPer: "20.48%",
  },
  {
    scrip: "MFEM",
    quantity: 210,
    price: "$23.20",
    avgCost: "$22.50",
    invAmount: "$4,725.84",
    portfolioVal: "5.81%",
    pAndL: "$146.16",
    returnPer: "3.09%",
  },
  {
    scrip: "JPEM",
    quantity: 328,
    price: "$52.50",
    avgCost: "$56.70",
    invAmount: "$18,597.60",
    portfolioVal: "22.86%",
    pAndL: "-$1,377.60",
    returnPer: "-7.41%",
  },
  {
    scrip: "KEMQ",
    quantity: 801,
    price: "$20.40",
    avgCost: "$22.24",
    invAmount: "$17,811.04",
    portfolioVal: "21.89%",
    pAndL: "-$1,470.64",
    returnPer: "-8.26%",
  },
  {
    scrip: "KLDW",
    quantity: 523,
    price: "$32.90",
    avgCost: "$26.32",
    invAmount: "$13,765.36",
    portfolioVal: "16.92%",
    pAndL: "$3,441.34",
    returnPer: "25.00%",
  },
  {
    scrip: "KOIN",
    quantity: 335,
    price: "$25.40",
    avgCost: "$25.40",
    invAmount: "$8,509.00",
    portfolioVal: "10.46%",
    pAndL: "$ -",
    returnPer: "0.00%",
  },
];

export const getMarketValue = () => {
  return {
    type: "INIT_DATA",
    data,
  };
};
