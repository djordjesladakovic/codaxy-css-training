import { Button, Grid } from "cx/widgets";
import { ContentPlaceholder, KeySelection, Repeater } from "cx/ui";
import Controller from "./Controller";
import { Svg } from "cx/svg";
import {
    Chart,
    Gridlines,
    LineGraph,
    NumericAxis,

    CategoryAxis,
    ColumnGraph,
    Column,
    Legend,
  } from "cx/charts";

export default (
    <cx>
        <div controller={Controller}>
            <div class="main">
                <div id="sidebar">
                    <div class="sidebar-header">
                        <div class="company-info">
                            <div class="logo">
                                <img src="/assets/logo.png"></img>
                            </div>
                            <div class="company-name">
                                <img src="/assets/company-name.png"></img>
                            </div>
                            <div class="collapse">
                                <img src="/assets/left-arrow.png"></img>
                            </div>
                        </div>
                        <div class="user-info">
                            <div class="user-photo">
                                <img src="/assets/avatar.png"></img>
                            </div>
                            <div class="user-details">
                                <span class="user-name">Zika Pavlovic</span>
                                <span class="user-email">zikapavlovic@gmail.com</span>
                            </div>
                        </div>
                        <div class="sidebar-item active">
                            <div class="sidebar-item-details">
                                <span><i class="fa-solid fa-calendar m-r-10"></i>Dashboard</span>
                                <span class="sidebar-number sidebar-number-blue">2</span>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <span><i class="fa-solid fa-award m-r-10"></i>Rewards</span>
                                <span class="sidebar-number sidebar-number-red">2</span>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <span><i class="fa-solid fa-location-dot m-r-10"></i>Address</span>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <span><i class="fa-solid fa-wallet m-r-10"></i>Payment Methods</span>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <span><i class="fa-solid fa-percent m-r-10"></i>Offers</span>
                                <span class="sidebar-number sidebar-number-green">2</span>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <span><i class="fa-solid fa-user-group m-r-10"></i>Refer a Friend</span>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <span><i class="fa-solid fa-phone m-r-10"></i>Support</span>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-footer">
                        <div class="sidebar-help"><i class="fa-regular fa-circle-question m-r-10"></i>Color Scheme</div>
                        <div class="sidebar-theme">
                            <div class="sidebar-theme-switch sidebar-theme-active">
                                <i class="fa-solid fa-sun m-r-10"></i>Light
                            </div>
                            <div class="sidebar-theme-switch">
                                <i class="fa-solid fa-moon m-r-10"></i>Dark
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contents"> 

                    <div class="content" id="content1">
                        <div class="picture"></div>
                        <div class="info">
                            <div style="font-size: 12px;">Author name</div>
                            <div style="margin-top: 8px;" class="header">The best way to learn CSS is by building something</div>
                            <div style="margin-top: 24px;" class="detailed-info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123
                            </div>
                            <Button mod="primary" style="margin-top: 24px;">Build something</Button>
                        </div>
                    </div>

                    <div id="content-space"></div>

                    <div class="content" id="content2">
                        <div class="line-chart-details">
                            <div class="header">Line chart</div>
                            <div style="margin-top: 24px; -webkit-line-clamp: 3;" class="detailed-info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123
                            </div>
                            <Button mod="secondary" style="margin-top: 36px;">See Analysis</Button>
                        </div>
                        <div class="chart">
                            <Svg>
                                <Chart offset="20 -10 -40 40" axes={{ x: { type: NumericAxis }, y: { type: NumericAxis, vertical: true } }}>
                                    <Gridlines/>
                                    <LineGraph name="Line 1" data-bind="$page.points" colorIndex={5} yField="y2h" active-bind="$page.line1"/>
                                    <LineGraph name="Line 2" data-bind="$page.points" colorIndex={3} yField="y2" active-bind="$page.line2"/>  
                                    <LineGraph name="Line 3" data-bind="$page.points" colorIndex={10} yField="y2l" active-bind="$page.line3"/>    
                                </Chart>
                            </Svg>
                        </div>
                    </div>

                    <div class="content" id="content3">
                        <div class="bulletpoint-text">
                            Some random text instead of a really long title
                        </div>
                        <div class="bulletpoint-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123
                            sed do eiusmod tempor nesto nesto nesto nesto nesto123
                            sed do eiusmod tempor nesto nesto nesto nesto nesto123
                        </div>
                        <Button mod="hollow">Read More</Button>
                    </div>

                    <div class="content" id="content4">
                        <div class="bulletpoint-text">
                                Some random text instead of a really long title
                            </div>
                            <div class="bulletpoint-detail">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123
                                sed do eiusmod tempor nesto nesto nesto nesto nesto123
                                sed do eiusmod tempor nesto nesto nesto nesto nesto123
                            </div>
                            <Button mod="hollow">Read More</Button>
                        </div>
                    <div class="content" id="content5">
                        <div class="line-chart-details">
                            <div class="header">Bar chart</div>
                            <div style="margin-top: 24px; -webkit-line-clamp: 3;" class="detailed-info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123
                            </div>
                            <Button mod="secondary" style="margin-top: 36px;">See Analysis</Button>
                        </div>
                        <div class="chart">
                            <Svg>
                                <Chart
                                offset="20 -20 -40 40"
                                axes={{
                                    x: { type: CategoryAxis },
                                    y: { type: NumericAxis, vertical: true, snapToTicks: 0 }
                                }}
                                >
                                <Gridlines />
                                <Repeater records:bind="$page.pointsBar" recordAlias="$point">
                                    <Column
                                    name="V1"
                                    active:bind="$page.v1"
                                    colorIndex={2}
                                    width={0.3}
                                    offset={-0.15}
                                    x:bind="$point.x"
                                    y:bind="$point.v1"
                                    tooltip:tpl="V1 {$point.x} {$point.v1:n}"
                                    stack="v"
                                    stacked
                                    />
                                    <Column
                                    name="V2"
                                    active:bind="$page.v2"
                                    colorIndex={1}
                                    width={0.3}
                                    offset={-0.15}
                                    x:bind="$point.x"
                                    y:bind="$point.v2"
                                    tooltip:tpl="V2 {$point.x} {$point.v2:n}"
                                    stack="v"
                                    stacked
                                    />
                                    <Column
                                    name="V3"
                                    active:bind="$page.v3"
                                    colorIndex={0}
                                    width={0.3}
                                    offset={-0.15}
                                    x:bind="$point.x"
                                    y:bind="$point.v3"
                                    tooltip:tpl="V3 {$point.x} {$point.v3:n}"
                                    stack="v"
                                    stacked
                                    />
                                </Repeater>
                                </Chart>
                            </Svg>
                        </div>
                    </div>
                    <div class="content" id="content6">
                        <div class="table-info">
                            <div class="header">
                                Customer Overview
                            </div>
                            <Button mod="secondary">Add Customer</Button>
                        </div>
                        <div class="table">
                            <Grid baseClass="gridHeader"
                                records-bind="$page.records"
                                mod="responsive"
                                scrollable
                                columns={[
                                { header: "Name", field: "fullName", sortable: true },
                                { header: "Continent", field: "continent", sortable: true },
                                { header: "Browser", field: "browser", sortable: true },
                                { header: "OS", field: "os", sortable: true },
                                { header: "Visits", field: "visits", sortable: true, align: "right" }
                                ]}
                                selection={{ type: KeySelection, bind: "$page.selection" }}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
            <ContentPlaceholder />
        </div>
    </cx>
);
