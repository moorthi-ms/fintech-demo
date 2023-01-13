import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import MenuIcon from "@mui/icons-material/Menu";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinearProgress from "@mui/material/LinearProgress";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { AppBar, Toolbar, BottomNavigation } from "@mui/material";
import { padding, width } from "@mui/system";
import { makeStyles, CircularProgress } from "@mui/material";
import Chart from "react-apexcharts";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getMarketValue } from "./redux/actions";

//tablecell stying
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid gray",
    textAlign: "center",
  },
  [`&.${tableCellClasses.head}`]: {
    border: "1px solid gray",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
}));

//table row stying
const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

function App() {
  const dispatch = useDispatch();
  const marketData = useSelector((state) => state.marketValue);
  const [tableData, setTableData] = useState([]);
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  const data = {
    series: [55],
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
            background: "transparent",
          },
          track: {
            show: true,
            background: "#ab974d",
          },
          dataLabels: {
            show: false,

            value: {
              show: false,
            },
          },
        },
      },
      labels: [""],
    },
  };

  // Market data from reducer
  useEffect(() => {
    setTimeout(() => {
      dispatch(getMarketValue());
    }, 3000);
  }, []);

  // Effect after getting marketData
  useEffect(() => {
    if (marketData["marketData"]) {
      setTableData(marketData.marketData);
    }
  }, [marketData]);

  return (
    <div style={{ marginLeft: "10%", marginRight: "10%" }}>
      {marketData.loader ? (
        <>
          <div style={{ paddingBottom: "100px" }} />
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>Getting the Market Data...</p>
            <CircularProgress />
          </div>
        </>
      ) : (
        <>
          <div style={{ paddingBottom: "100px" }} />
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    backgroundColor: "yellow",
                    width: "190px",
                    height: "100px",
                    backgroundColor: "#F6F8F6",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      padding: "5px",
                    }}
                  >
                    <MenuIcon sx={{ color: "gray" }}></MenuIcon>
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        margin: 1,
                      }}
                    >
                      ITOT
                    </p>
                    <p
                      style={{
                        color: "#87CEEB",
                        textAlign: "center",
                        fontSize: "13px",
                        margin: 1,
                      }}
                    >
                      $283.3
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {" "}
                    <img
                      src={require("./images/bannerImage.PNG")}
                      width={"90"}
                      style={{ margin: 1, textAlign: "left" }}
                    ></img>
                    <p
                      style={{
                        fontWeight: "bold",

                        fontSize: "13px",
                        margin: 1,
                      }}
                    >
                      S&P 500 index
                    </p>
                    <p
                      style={{
                        fontSize: "13px",

                        margin: 1,
                      }}
                    >
                      US Equity
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#F6F8F6",
                    width: "160px",
                    height: "100px",
                    marginLeft: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "70%",

                        display: "flex",
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "11px",

                          marginLeft: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AlternateEmailIcon
                          sx={{ color: "gray", width: "9px" }}
                        ></AlternateEmailIcon>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          marginLeft: "2%",
                        }}
                      >
                        <p style={{ fontSize: "11px", margin: 0 }}>Quantity</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", margin: 0 }}>150</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "70%",
                        display: "flex",
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "11px",
                          marginLeft: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AlternateEmailIcon
                          sx={{ color: "gray", width: "9px" }}
                        ></AlternateEmailIcon>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          marginLeft: "2%",
                        }}
                      >
                        <p style={{ fontSize: "11px", margin: 0 }}>Avg.Cost</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", margin: 0 }}>$44.9</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "70%",
                        display: "flex",
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "11px",
                          marginLeft: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AlternateEmailIcon
                          sx={{ color: "gray", width: "9px" }}
                        ></AlternateEmailIcon>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          marginLeft: "2%",
                        }}
                      >
                        <p style={{ fontSize: "11px", margin: 0 }}>
                          Invested Amt
                        </p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", margin: 0 }}>$6736.98</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#F6F8F6",
                    width: "160px",
                    height: "100px",
                    marginLeft: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "70%" }}>
                      <p
                        style={{
                          fontSize: "11px",
                          margin: 0,
                          marginLeft: "10px",
                        }}
                      >
                        Market Value
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", margin: 0 }}>$9542.56</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "80%" }}>
                      <p
                        style={{
                          fontSize: "11px",
                          margin: 0,
                          marginLeft: "10px",
                        }}
                      >
                        % of portfolio value
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", margin: 0 }}>10%</p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "80%",
                      marginLeft: "10%",
                    }}
                  >
                    <LinearProgress variant="determinate" value={50} />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#F6F8F6",
                    width: "160px",
                    height: "100px",
                    marginLeft: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "70%" }}>
                      <p
                        style={{
                          fontSize: "11px",
                          margin: 0,
                          marginLeft: "10px",
                        }}
                      >
                        Unrealized P/L
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", margin: 0 }}>$9542.56</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "80%" }}>
                      <p
                        style={{
                          fontSize: "11px",
                          margin: 0,
                          marginLeft: "10px",
                        }}
                      >
                        % of portfolio value
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", margin: 0 }}>10%</p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "80%",
                      marginLeft: "10%",
                    }}
                  >
                    <LinearProgress variant="determinate" value={50} />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#F6F8F6",
                    width: "160px",
                    height: "100px",
                    marginLeft: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Button variant="outlined" color="error">
                      buy
                    </Button>
                  </div>

                  <div>
                    <Button variant="outlined" color="error">
                      sell
                    </Button>
                  </div>
                </div>
              </div>
              <div
                style={{ height: "10px", backgroundColor: "lightgray" }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "yellow",
                      width: "190px",
                      height: "100px",
                      backgroundColor: "#F6F8F6",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        padding: "5px",
                      }}
                    >
                      <MenuIcon sx={{ color: "gray" }}></MenuIcon>
                    </div>
                    <div
                      style={{
                        padding: "5px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "13px",
                          margin: 1,
                        }}
                      >
                        EFA
                      </p>
                      <p
                        style={{
                          color: "#87CEEB",
                          textAlign: "center",
                          fontSize: "13px",
                          margin: 1,
                        }}
                      >
                        $68.9
                      </p>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      {" "}
                      <img
                        src={require("./images/bannerImage.PNG")}
                        width={"90"}
                        style={{ margin: 1, textAlign: "left" }}
                      ></img>
                      <p
                        style={{
                          fontWeight: "bold",

                          fontSize: "13px",
                          margin: 1,
                        }}
                      >
                        MSCI EAFE Index
                      </p>
                      <p
                        style={{
                          fontSize: "13px",

                          margin: 1,
                        }}
                      >
                        Developed Market Equity
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#F6F8F6",
                      width: "160px",
                      height: "100px",
                      marginLeft: "5px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "70%",

                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "11px",

                            marginLeft: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <AlternateEmailIcon
                            sx={{ color: "gray", width: "9px" }}
                          ></AlternateEmailIcon>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            marginLeft: "2%",
                          }}
                        >
                          <p style={{ fontSize: "11px", margin: 0 }}>
                            Quantity
                          </p>
                        </div>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", margin: 0 }}>150</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "70%",
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "11px",
                            marginLeft: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <AlternateEmailIcon
                            sx={{ color: "gray", width: "9px" }}
                          ></AlternateEmailIcon>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            marginLeft: "2%",
                          }}
                        >
                          <p style={{ fontSize: "11px", margin: 0 }}>
                            Avg.Cost
                          </p>
                        </div>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", margin: 0 }}>$44.9</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "70%",
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "11px",
                            marginLeft: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <AlternateEmailIcon
                            sx={{ color: "gray", width: "9px" }}
                          ></AlternateEmailIcon>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            marginLeft: "2%",
                          }}
                        >
                          <p style={{ fontSize: "11px", margin: 0 }}>
                            Invested Amt
                          </p>
                        </div>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", margin: 0 }}>$6736.98</p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#F6F8F6",
                      width: "160px",
                      height: "100px",
                      marginLeft: "5px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ width: "70%" }}>
                        <p
                          style={{
                            fontSize: "11px",
                            margin: 0,
                            marginLeft: "10px",
                          }}
                        >
                          Market Value
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", margin: 0 }}>$9542.56</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ width: "80%" }}>
                        <p
                          style={{
                            fontSize: "11px",
                            margin: 0,
                            marginLeft: "10px",
                          }}
                        >
                          % of portfolio value
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", margin: 0 }}>10%</p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "80%",
                        marginLeft: "10%",
                      }}
                    >
                      <LinearProgress variant="determinate" value={50} />
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#F6F8F6",
                      width: "160px",
                      height: "100px",
                      marginLeft: "5px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ width: "70%" }}>
                        <p
                          style={{
                            fontSize: "11px",
                            margin: 0,
                            marginLeft: "10px",
                          }}
                        >
                          Unrealized P/L
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", margin: 0 }}>$9542.56</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ width: "80%" }}>
                        <p
                          style={{
                            fontSize: "11px",
                            margin: 0,
                            marginLeft: "10px",
                          }}
                        >
                          % of portfolio value
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", margin: 0 }}>10%</p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "80%",
                        marginLeft: "10%",
                      }}
                    >
                      <LinearProgress variant="determinate" value={50} />
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#F6F8F6",
                      width: "160px",
                      height: "100px",
                      marginLeft: "5px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Button variant="outlined" color="error">
                        buy
                      </Button>
                    </div>

                    <div>
                      <Button variant="outlined" color="error">
                        sell
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "lightgray",
                width: "50px",
              }}
            >
              <p
                style={{
                  color: "lightgray",
                }}
              />
            </div>
            <div style={{ backgroundColor: "#F6F8F6", width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      paddingLeft: "13px",
                    }}
                  >
                    Portfolio
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      paddingRight: "16px",
                    }}
                  >
                    Asset-Wise
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",

                  alignItems: "center",
                }}
              >
                <div>
                  <Chart
                    options={data.options}
                    series={data.series}
                    type="radialBar"
                    width={100}
                    height={170}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "5px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ab974d",
                        width: "10px",
                        height: "10px",
                      }}
                    ></div>
                    <div style={{ width: "100px" }}>
                      <p
                        style={{
                          fontSize: "11px",
                          marginLeft: "10px",
                        }}
                      >
                        ETFs
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "5px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#69b6d5",
                        width: "10px",
                        height: "10px",
                      }}
                    ></div>
                    <div style={{ width: "100px" }}>
                      <p
                        style={{
                          fontSize: "11px",
                          marginLeft: "10px",
                        }}
                      >
                        Mutual Funds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingBottom: "50px" }} />
          {tableData.length > 0 && (
            <Grid item xs={10}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 700, border: "1px solid gray" }}
                  aria-label="customized table"
                >
                  <TableHead style={{}}>
                    <TableRow>
                      <StyledTableCell>Scrip</StyledTableCell>
                      <StyledTableCell>Quantity</StyledTableCell>
                      <StyledTableCell>Price</StyledTableCell>
                      <StyledTableCell>Avg.Cost</StyledTableCell>
                      <StyledTableCell>Invested Amount</StyledTableCell>
                      <StyledTableCell>% of Portfolio Value</StyledTableCell>
                      <StyledTableCell>Unrealized P & L</StyledTableCell>
                      <StyledTableCell>% of Return</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((item) => {
                      return (
                        <StyledTableRow>
                          <StyledTableCell>{item.scrip}</StyledTableCell>
                          <StyledTableCell>{item.quantity}</StyledTableCell>
                          <StyledTableCell>{item.price}</StyledTableCell>
                          <StyledTableCell>{item.avgCost}</StyledTableCell>
                          <StyledTableCell>{item.invAmount}</StyledTableCell>
                          <StyledTableCell>{item.portfolioVal}</StyledTableCell>
                          <StyledTableCell>{item.pAndL}</StyledTableCell>
                          <StyledTableCell>{item.returnPer}</StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          )}
        </>
      )}
    </div>
  );
}

export default App;
