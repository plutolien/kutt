import React from 'react';
import styled from 'styled-components';
import Header from '../../components/core/Header';
import LinkShorterHeader from "../../components/core/LinkShorterHeader";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';
import { Grid } from "@material-ui/core";
import Container from '../../components/core/Container';


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

const AreaHomeection = styled.div`
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

const BacktoHomeButton = styled.button`
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
`;

const Home = () => {

    const data = [
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
    ];


    return (
        <div>
            <DashboardContainer>
                <LinkShorterHeader />

                <Container>
                    <InformationSection>
                        <div className='left'>
                            <span>Stats for:</span>
                            <a href="">snik.pics/j3EkK</a>
                        </div>

                        <div className='right'>
                            <a href="">
                                https://www.tokopedia.com/philips-estore/philips-digital-rice-c
                            </a>
                        </div>
                    </InformationSection>

                    <FilterSection>
                        <div className='left'>
                            Total Clicks
                        </div>

                        <div className='right'>
                            <button>All Time</button>
                            <button>Month</button>
                            <button>Week</button>
                            <button className='disabled'>Day</button>
                        </div>
                    </FilterSection>


                    <Divider />

                    <AreaHomeection>
                        <div className="title">2 Tracked clicks in the last day</div>
                        <div className="subtitle">Last updated 04:27pm</div>

                        <div className="area-chart">
                            <ResponsiveContainer width="100%" height={500}>
                                <AreaChart
                                    width={500}
                                    height={400}
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#F0998D" fill="#F0998D" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </AreaHomeection>

                    <Divider />

                    <Grid container spacing={6}>
                        <Grid item lg={6}>
                            <ChartGrid>
                                <div className="title">Referrals</div>
                                <div className="chart-body">
                                    <ResponsiveContainer width="100%" height={400}>
                                        <PieChart width={400} height={400}>
                                            <Pie
                                                data={data02}
                                                dataKey="value"
                                                cx="50%" cy="50%"
                                                innerRadius={70}
                                                outerRadius={120}
                                                fill="#82ca9d"
                                                label
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </ChartGrid>
                        </Grid>

                        <Grid item lg={6}>
                            <ChartGrid>
                                <div className="title">Browsers</div>
                                <div className="chart-body">
                                    <ResponsiveContainer width="100%" height={400}>
                                        <BarChart
                                            layout="vertical"
                                            width={500}
                                            height={300}
                                            data={barChartData1}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis type="number" />
                                            <YAxis type="category" dataKey="name" />
                                            <Tooltip />
                                            <Bar dataKey="pv" fill="#8884d8" />
                                        </BarChart>
                                    </ResponsiveContainer>
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
                                    <CountryCard>
                                        Map Illustration
                                    </CountryCard>
                                </div>
                            </ChartGrid>
                        </Grid>

                        <Grid item lg={6}>
                            <ChartGrid>
                                <div className="title">OS</div>
                                <div className="chart-body">
                                    <ResponsiveContainer width="100%" height={400}>
                                        <BarChart
                                            layout="vertical"
                                            width={500}
                                            height={300}
                                            data={barChartData2}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis type="number" />
                                            <YAxis type="category" dataKey="name" />
                                            <Tooltip />
                                            <Bar dataKey="pv" fill="#8884d8" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </ChartGrid>
                        </Grid>
                    </Grid>

                    <BottomContainer>
                        <BacktoHomeButton>Back to Homepage</BacktoHomeButton>
                    </BottomContainer>
                </Container>
            </DashboardContainer>
        </div >
    );
}

export default Home;