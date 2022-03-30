import { Link } from "cx/widgets";
import { ContentPlaceholder } from "cx/ui";
import Controller from "./Controller";

export default (
    <cx>
        <div controller={Controller}>
            <div class="main">
                <div id="sidebar">

                </div>
                <div class="contents">  
                    <div class="content" id="content1">Content 1</div>
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
