import styled from 'styled-components';
import Header from '../components/custom/Header';
import LinkShorterHeader from "../components/custom/LinkShorterHeader";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';
import { Grid } from "@material-ui/core";
import Container from '../components/custom/Container';
import { Box, Flex } from "reflexbox/styled-components";
import React, { useState, useEffect } from "react";
import formatDate from "date-fns/format";
import { NextPage } from "next";
import Link from "next/link";
import axios from "axios";

import Text, { H1, H2, H4, Span } from "../components/Text";
import { getAxiosConfig, removeProtocol } from "../utils";
import { Button, NavButton } from "../components/Button";
import { Col, RowCenterV } from "../components/Layout";
import { Map } from "../components/Charts";
import PageLoading from "../components/PageLoading";
import AppWrapper from "../components/AppWrapper";
import { APIv2, Colors } from "../consts";
import { useStoreState } from "../store";
import ALink from "../components/ALink";
import Icon from "../components/Icon";


const DashboardContainer = styled.div`

`;

const InformationSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    .left {
        font-family: "Poppins";
        font-weight: 400;

        a {
            color: #41A1FA;
            margin-left: 10px;
            text-decoration: none;
            font-size: 14px;
        }
    }

    .right {
        a {
            color: #677487;
            text-decoration: none;
        }
    }
`;

const FilterSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    .left {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 16px;
        color: #1D2736;
    }

    .right {
        button {
            color: #000000;
            font-size: 14px;
            border: 1px solid #DFE8FA;
            padding: 6px 10px;
            border-radius: 4px;
            background: #FFFFFF;
            cursor: pointer;
            margin-right: 7px;
            cursor: pointer;

            :last-child {
                margin-right: 0;
            }

            :hover {
                opacity: 0.5;
            }
        }

        .disabled {
            opacity: 0.4;
        }
    }
`;

const AreaStatsPageection = styled.div`
    margin-bottom: 50px;
    .title {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 24px;
        color: #1D2736; 
    }

    .subtitle {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 14px;
        color: #677487;
        margin-top: 15px;
    }

    .area-chart {
        margin-top: 25px;
    }
`;

const Divider = styled.div`
    border-top: 1px solid #DFE8FA;
    margin-top: 20px;
    margin-bottom: 20px;
`

const ChartGrid = styled.div`
    .title {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 24px;
        color: #1D2736; 
    }

    .chart-body {
        margin-top: 25px;
    }
`;

const CountryCard = styled.div`
    height: 200px;
    border-radius: 12px;
    background: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
`;

const BottomContainer = styled.div`
    text-align: center;
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 40px;
`;

const BacktoStatsPageButton = styled.button`
    height: 59px;
    width: 230px;
    border-radius: 15px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    border: 1px solid #F0998D;
    color: #F0998D;
    background: #ffffff;
    cursor: pointer;
`;

interface Props {
  id?: string;
}

const StatsPage: NextPage<Props> = ({ id }) => {

  const { isAuthenticated } = useStoreState(s => s.auth);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Record<string, any> | undefined>();
  const [period, setPeriod] = useState("lastDay");

  const stats = data && data[period];

  useEffect(() => {
    if (!id || !isAuthenticated) return;
    axios
      .get(`${APIv2.Links}/${id}/stats`, getAxiosConfig())
      .then(({ data }) => {
        setLoading(false);
        setError(!data);
        setData(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  let errorMessage;

  if (!isAuthenticated) {
    errorMessage = (
      <Flex mt={3}>
        <Icon name="x" size={32} mr={3} stroke={Colors.TrashIcon} />
        <H2>You need to login to view stats.</H2>
      </Flex>
    );
  }

  if (!id || error) {
    errorMessage = (
      <Flex mt={3}>
        <Icon name="x" size={32} mr={3} stroke={Colors.TrashIcon} />
        <H2>Couldn't get stats.</H2>
      </Flex>
    );
  }

  const loader = loading && <PageLoading />;

  const total = stats && stats.views.reduce((sum, view) => sum + view, 0);
  /* const periodText = period.includes("last")
    ? `the last ${period.replace("last", "").toLocaleLowerCase()}`
    : "all time"; */

  /* const data = [
    {
      name: '18:00',
      uv: 15,
      pv: 18,
      amt: 18,
    },
    {
      name: '20:00',
      uv: 6.5,
      pv: 20,
      amt: 20,
    },
    {
      name: '22:00',
      uv: 1,
      pv: 22,
      amt: 2290,
    },
    {
      name: '00:00',
      uv: 2.5,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '02:00',
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '04:00',
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '06:00',
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '08:00',
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '10:00',
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '12:00',
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '14:00',
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '16:00',
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
  ];


  const data02 = [
    { name: 'A1', value: 300, fill: "#7879FB" },
    { name: 'A2', value: 300, fill: "#F0998D" },
  ];

  const barChartData1 = [
    {
      name: 'Chrome',
      uv: 1,
      pv: 1,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'Opera',
      uv: 1,
      pv: 1,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'Edge',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'Firefox',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'IE',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'Other',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'Safari',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
  ];

  const barChartData2 = [
    {
      name: 'Windows',
      uv: 2,
      pv: 2,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'Android',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'Ios',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'Linux',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'MacOs',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
    {
      name: 'Other',
      uv: 0,
      pv: 0,
      amt: 1,
      fill: "#F0998D",
    },
  ]; */


  return (
    <div>
      <DashboardContainer>
        <LinkShorterHeader />

        <Container>
          <InformationSection>
            <div className='left'>
              <span>Stats for:</span>
              <a href={removeProtocol(data?.link)}>{removeProtocol(data?.link)}</a>
            </div>

            <div className='right'>
              <a href="">
                {data && data.target.length > 80
                  ? `${data.target
                    .split("")
                    .slice(0, 80)
                    .join("")}...`
                  : data?.target}
              </a>
            </div>
          </InformationSection>

          <FilterSection>
            <div className='left'>
              Total Clicks
            </div>

            <div className='right'>
              {[
                ["allTime", "All Time"],
                ["lastMonth", "Month"],
                ["lastWeek", "Week"],
                ["lastDay", "Day"]
              ].map(([p, n]) => (
                <button
                  className={p === period ? 'disabled' : ''}
                  onClick={() => setPeriod(p as any)}
                  key={p}
                >
                  {n}
                </button>
              ))}
            </div>
          </FilterSection>


          <Divider />

          <AreaStatsPageection>
            <div className="title">{total} Tracked clicks in the last day</div>
            <div className="subtitle">Last updated {data && formatDate(new Date(data?.updatedAt), "hh:mm aa")}</div>

            <div className="area-chart">
              <Flex width={1} mt={4}>
                <Area data={stats && stats?.views} period={period} />
              </Flex>
            </div>
          </AreaStatsPageection>

          <Divider />

          {total > 0 && (
            <>
              <Grid container spacing={6}>

                <Grid item lg={6}>
                  <ChartGrid>
                    <div className="title">Referrals</div>
                    <div className="chart-body">
                      <Pie data={stats.stats.referrer} />
                    </div>
                  </ChartGrid>
                </Grid>

                <Grid item lg={6}>
                  <ChartGrid>
                    <div className="title">Browsers</div>
                    <div className="chart-body">
                      <Bar data={stats.stats.browser} />
                    </div>
                  </ChartGrid>
                </Grid>
              </Grid>

              <Divider />

              <Grid container spacing={6}>
                <Grid item lg={6}>
                  <ChartGrid>
                    <div className="title">Country</div>
                    <div className="chart-body">
                      <Map data={stats.stats.country} />
                    </div>
                  </ChartGrid>
                </Grid>

                <Grid item lg={6}>
                  <ChartGrid>
                    <div className="title">OS</div>
                    <div className="chart-body">
                      <Bar data={stats.stats.os} />
                    </div>
                  </ChartGrid>
                </Grid>
              </Grid>
            </>
          )}

          <BottomContainer>
            <Link href="/">
              <BacktoStatsPageButton>Back to Home Page</BacktoStatsPageButton>
            </Link>
          </BottomContainer>
        </Container>
      </DashboardContainer>
    </div >
  );
}

export default StatsPage;