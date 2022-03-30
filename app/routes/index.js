import { FirstVisibleChildLayout } from "cx/ui";
import { Sandbox } from "cx/widgets";
import AppLayout from "../layout";

export default () => (
    <cx>
        <Sandbox
            key-bind="url"
            storage-bind="pages"
            outerLayout={AppLayout}
            layout={FirstVisibleChildLayout}
        >
            {/* TODO: start here
                Here is advice on how to start:
                (A) add your main layout and style it in app\layout\index.js and app\layout\index.scss -
                    you can see how it can be done in app\layout\index_old.js and app\layout\index_old.scss
                    - also, you can see how this page initially looked in app\layout\index_old.js
                (B) don't forget to add components in app\components\index.js (if you need them) - do it for two reasons:
                    1) some components in the task are identical or at least similar - https://www.figma.com/file/WOZ3FCYedqbYdZ5K8Ng1Nn/CSS-Training?node-id=77%3A576
                    2) to avoid having everything in this file, thus making it difficult to find and understand what is going on in the code here :)
            */}
            {/* <h1 text="This is the place where you add stuff." /> */}
        </Sandbox>
    </cx>
);
