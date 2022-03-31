import { Button, Link } from "cx/widgets";
import { ContentPlaceholder } from "cx/ui";
import Controller from "./Controller";

export default (
    <cx>
        <div controller={Controller}>
            <div class="main">
                <div id="sidebar">

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
                            <Button class="primary-button" style="margin-top: 24px;">Build something</Button>
                        </div>
                    </div>
                    <div class="content" id="content2">Content 2</div>
                    <div id="content-space"></div>
                    <div class="content" id="content3">Content 3</div>
                    <div class="content" id="content4">Content 4</div>
                    <div class="content" id="content5">Content 5</div>
                    <div class="content" id="content6">Content 6</div>
                </div>
            </div>
            <ContentPlaceholder />
        </div>
    </cx>
);
