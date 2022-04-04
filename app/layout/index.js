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
                <div id="sidebar" class={{hiddable: {bind: 'hiddable'}}}>
                    <div class="sidebar-logo">
                        <div class="company-info">
                            <div class="logo">
                                <img src="/assets/logo.png"></img>
                            </div>
                            <div class="company-name hiddable">
                                <img src="/assets/company-name.png"></img>
                            </div>
                            <div class="collapse" onClick={(event, {store}) => {
                                    console.log('caooo')
                                    store.toggle('hiddable');
                                }}>
                                <img src="/assets/left-arrow.png"></img>
                            </div>
                        </div>
                    </div>    
                    <div class="sidebar-header">    
                        <div class="user-info">
                            <div class="user-photo">
                                <img src="/assets/avatar.png"></img>
                            </div>
                            <div class="user-details hiddable">
                                <span class="user-name">Zika Pavlovic</span>
                                <span class="user-email">zikapavlovic@gmail.com</span>
                            </div>
                        </div>
                        <div class="sidebar-item active">
                            <div class="sidebar-item-details">
                                <i class="fa-solid fa-calendar icon-margin"></i>
                                <div class="hiddable">
                                    <span>Dashboard</span>
                                    <span class="sidebar-number sidebar-number-blue">2</span>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <i class="fa-solid fa-award icon-margin"></i>
                                <div class="hiddable">
                                    <span>Rewards</span>
                                    <span class="sidebar-number sidebar-number-red">2</span>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <i class="fa-solid fa-location-dot icon-margin"></i>
                                <div class="hiddable">
                                    <span>Address</span>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <i class="fa-solid fa-wallet icon-margin"></i>
                                <div class="hiddable">
                                    <span>Payment Methods</span>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <i class="fa-solid fa-percent icon-margin"></i>
                                <div class="hiddable">
                                    <span>Offers</span>
                                    <span class="sidebar-number sidebar-number-green">2</span>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                                <i class="fa-solid fa-user-group icon-margin"></i>
                                <div class="hiddable">
                                    <span>Refer a Friend</span>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-item-details">
                            <i class="fa-solid fa-phone icon-margin"></i>
                                <div class="hiddable">
                                    <span>Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-footer">
                        <div class="sidebar-help"><i class="fa-regular fa-circle-question icon-margin"></i>Color Scheme</div>
                        <div class="sidebar-theme">
                            <div class="sidebar-theme-switch sidebar-theme-active">
                                <i class="fa-solid fa-sun icon-margin"></i>Light
                            </div>
                            <div class="sidebar-theme-switch">
                                <i class="fa-solid fa-moon icon-margin"></i>Dark
                            </div>
                        </div>
                        <div class="sidebar-collapse-theme">
                            <i class="fa-solid fa-cloud-sun"></i>
                        </div>
                    </div>
                </div>
                <div class="dashboard"> 

                    <div class="dashboardcard" id="content1">
                        <div class="dashboardcard_image"></div>
                        <article class="dashboardcard_content post">
                            <div class="post_author" text="Author name" />
                            <h3 class="post_title" text="The best way to learn CSS is by building something" />
                            <p class="post_text" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123"/>
                            <Button mod="primary" class="post_button" text="Build something" />
                        </article>
                    </div>

                    <div id="content-space"></div>

                    <div class="dashboardcard" id="content2">
                        <div class="dashboardcard_content post">
                            <h3 class="post_title" text="Line chart" />
                            <p class="post_text" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123" />
                            <Button mod="secondary" class="post_button">See Analysis</Button>
                        </div>
                        <div class="post_chart">
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

                    <div class="dashboardcard" id="content3">
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

                    <div class="dashboardcard" id="content4">
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
                    <div class="dashboardcard" id="content5">
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
                    <div class="dashboardcard" id="content6">
                        <div class="table-info">
                            <div class="header">
                                Customer Overview
                            </div>
                            <Button mod="secondary">Add Customer</Button>
                        </div>
                        <div class="table">
                            <Grid
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
