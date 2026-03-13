import componentImg from "/assets/components.png";
import jsxImg from "/assets/jsx-ui.png";
import propsImg from "/assets/config.png";
import stateImg from "/assets/state-mgmt.png";

export const coreConcepts = [
    {
        title: "Components",
        description:
            "The core UI building block - compose the user interface by combining multiple components.",
        alt: "component icon",
        img: componentImg
    },
    {
        title: "JSX",
        description:
            "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
        alt: "jsx icon",
        img: jsxImg
    },
    {
        title: "Props",
        description:
            "Make components configurable (and therefore reusable) by passing input data to them.",
        alt: "props icon",
        img: propsImg
    },
    {
        title: "State",
        description:
            "React-managed data which, when changed, causes the component to re-render & the UI to update.",
        alt: "state icon",
        img: stateImg
    }
];
