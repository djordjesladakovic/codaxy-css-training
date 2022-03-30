import { Link } from "cx/widgets";
import { ContentPlaceholder } from "cx/ui";
import Controller from "./Controller";

export default (
    <cx>
        <div controller={Controller}>
            <div class="main">
                <div class="sidebar">
                
                </div>
                <div class="container">
                    <div class="item item1">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="item item2"></div>
                    <div class="item item3"></div>
                    <div class="item item4"></div>
                    <div class="item item5"></div>
                    <div class="item item6"></div>
                </div>
            </div>
            <ContentPlaceholder />
        </div>
    </cx>
);
