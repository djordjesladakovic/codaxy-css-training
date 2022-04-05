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
    Column,
  } from "cx/charts";

export default (
    <cx>
        <div controller={Controller}>
            <div class="main">
                <div class={{hiddable: {bind: 'hiddable'}}} className="sidebar">
                    <div class="sidebar_logo">
                        <div class="company">
                            <div class="company_logo">
                                <img src="/assets/logo.png"></img>
                            </div>
                            <div class="company_name hiddable">
                                <img src="/assets/company-name.png"></img>
                            </div>
                            <div class="collapse" onClick={(event, {store}) => {
                                    store.toggle('hiddable');
                                }}>
                                <img src="/assets/left-arrow.png"></img>
                            </div>
                        </div>
                    </div>    
                    <div class="sidebar_header">    
                        <div class="user">
                            <div class="user_photo">
                                <img src="/assets/avatar.png"></img>
                            </div>
                            <div class="user_details hiddable">
                                <span class="user_name">Zika Pavlovic</span>
                                <span class="user_email">zikapavlovic@gmail.com</span>
                            </div>
                        </div>
                        <div class="navitem active">
                            <i class="fa-solid fa-calendar icon_margin"></i>
                            <div class="hiddable">
                                <span>Dashboard</span>
                                <span class="navitem_number navitem_blue">2</span>
                            </div>
                        </div>
                        <div class="navitem">
                            <i class="fa-solid fa-award icon_margin"></i>
                            <div class="hiddable">
                                <span>Rewards</span>
                                <span class="navitem_number navitem_red">2</span>
                            </div>
                        </div>
                        <div class="navitem">
                            <i class="fa-solid fa-location-dot icon_margin"></i>
                            <div class="hiddable">
                                <span>Address</span>
                            </div>
                        </div>    
                        <div class="navitem">
                            <i class="fa-solid fa-wallet icon_margin"></i>
                            <div class="hiddable">
                                <span>Payment Methods</span>
                            </div>
                        </div>
                        <div class="navitem">
                            <i class="fa-solid fa-percent icon_margin"></i>
                            <div class="hiddable">
                                <span>Offers</span>
                                <span class="navitem_number navitem_green">2</span>
                            </div>
                        </div>
                        <div class="navitem">
                            <i class="fa-solid fa-user-group icon_margin"></i>
                            <div class="hiddable">
                                <span>Refer a Friend</span>
                            </div>
                        </div>
                        <div class="navitem">
                        <i class="fa-solid fa-phone icon_margin"></i>
                            <div class="hiddable">
                                <span>Support</span>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar_footer">
                        <div class="sidebar_help"><i class="fa-regular fa-circle-question icon_margin"></i>Color Scheme</div>
                        <div class="sidebar_theme">
                            <div class="sidebar_switch sidebar_active">
                                <i class="fa-solid fa-sun icon_margin"></i>Light
                            </div>
                            <div class="sidebar_switch">
                                <i class="fa-solid fa-moon icon_margin"></i>Dark
                            </div>
                        </div>
                        <div class="sidebar_collapse">
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
                        <article class="dashboardcard_content post">
                            <h3 class="post_title" text="Line chart" />
                            <p class="post_text" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123" />
                            <Button mod="secondary" class="post_button">See Analysis</Button>
                        </article>
                        <div class="dashboardcard_chart">
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
                        <article class="dashboardcard_content post">
                            <div class="post_pointtitle" text="Some random text instead of a really long title" />
                            <div class="post_pointdetail">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123
                                sed do eiusmod tempor nesto nesto nesto nesto nesto123
                                sed do eiusmod tempor nesto nesto nesto nesto nesto123
                            </div>
                            <Button mod="hollow">Read More</Button>
                        </article>
                    </div>

                    <div class="dashboardcard" id="content4">
                        <article class="dashboardcard_content post">
                            <div class="post_pointtitle" text="Some random text instead of a really long title" />
                            <div class="post_pointdetail">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123
                                sed do eiusmod tempor nesto nesto nesto nesto nesto123
                                sed do eiusmod tempor nesto nesto nesto nesto nesto123
                            </div>
                            <Button mod="hollow">Read More</Button>
                        </article>
                    </div>
                    <div class="dashboardcard" id="content5">
                        <article class="dashboardcard_content post">
                            <div class="post_title" text="Bar chart" />
                            <div class="post_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nesto nesto nesto nesto nesto123
                            </div>
                            <Button mod="secondary" style="margin-top: 36px;">See Analysis</Button>
                        </article>
                        <div class="dashboardcard_chart">
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
                        <div class="dashboardcard_content post table_info">
                            <h3 class="post_title">
                                Customer Overview
                            </h3>
                            <Button mod="secondary">Add Customer</Button>
                        </div>
                        <div class="dashboardcard_table">
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
