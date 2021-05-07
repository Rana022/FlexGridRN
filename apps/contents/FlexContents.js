//all flex contents
export const flexContents = [
    {title:"Introduction",
     details: "The Flexible Box Module, usually known as flexbox. It is a one-dimensional layout model, it helps space distribution between items in an interface with powerful alignment capabilities.",
     axis: "It's very important to familiar with flexbox axis  before start learning flexbox properties. If we take flex-direction property as row(default) ,main axis will be horizontally (left to right) or if we take flex-direction as column main axis will be vertically (top to buttom).",
     note: " flexbox deals with layout in onedimension at a time — either as a row or as a column. The two-dimensional model is CSS Grid Layout, which controls columns and rows together.",
     key: "1"
    },

    {title:"Flex Properties",
     details: "There are different types parent element properties and child element properties in flexbox.",
     parentProperties:["display", "flex-direction", "flex-wrap", "flex-flow", "justify-content", "align-items", "align-content", ],
     childProperties:["order", "flex-grow", "flex-shrink", "flex-basis", "flex", "align-self"],
     key: "2"
    },

    {title:"Display & Flex-Direction",
     displayDetails: "Display defines a flex container. It enables a flex context for all its direct children elements.Exactly this is the entrance of flexbox world",
     flexDetails: "Flex-direction establishes the main-axis, we know flexbox is a one dimensional layout creator. So we can only think horizontally or vertically while working with flexbox. If we take flex-direction as row (default) it will create horizontal row its main axis and if we take flex-direction as column it will create vertical column its main axis.",
     flexPropertis: ["row (default): left to right", "row-reverse: right to left", "column: same as row but top to bottom", "column-reverse: same as row-reverse but bottom to top"],
     key: "3"
    },

    {title:"flex-wrap & flex-flow",
     details: "By default, flex items will try to fit all child elements into one line. But we can change that and allow the items to wrap as needed with this flex-wrap  property.",
     properties: ["nowrap (default): all flex items will be on one line", "wrap: flex items will wrap onto multiple lines, from top to bottom.", "wrap-reverse: flex items will wrap onto multiple lines from bottom to top."],
     flowDetails: "We can write flex-direction and flex-wrap in shorthand by using flex-flow property. which together define the flex container’s main and cross axis. The default value is row nowrap.",
     key: "4"
    },

    {title:"justify-content",
     details: "Justify-content defines the alignment of child elements  along the main axis. It helps to move elements left, right, center etc.",
     note: "if we take flex-direction property as flex main axis will be horizontal(left to right) and if we take flex-direction property as column main axis will be vertical(top to buttom).",
     properties: [
         "flex-start (default): items are stayed toward the start of the flex-direction.",
         "flex-end: items are stayed toward the end of the flex-direction.",
         "start: items are stayed toward the start of the writing-mode direction.",
         "end: items are stayed toward the end of the writing-mode direction.",
         "left: items are styed toward left side of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.",
         "right: items are stayed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like end.",
         "center: items are centered along the main axis",
         "space-between: items are evenly distributed in the line; first item is on the start edge, last item on the end edge",
         "space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.",
         "space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal."
        ],
     key: "5"
    },

    {title:"align-items",
     details: "This defines the default behavior for how flex items are align along the cross axis on the current line. Just like justify-content version for the cross-axis (perpendicular to the main-axis).",
     properties: [
         "stretch (default): stretch to fill the container (still respect min-width/max-width)",
         "flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.",
         "flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.",
         "center: items are centered in the cross-axis",
         "baseline: items are aligned such as their baselines align"
        ],
     key: "6"
    },

    {title:"align-content",
     details: "This aligns a flex container’s child elements lines within when there is extra space in the cross-axis, just like justify-content behaviour in main axis",
     note: "This property only takes effect on multi-line flexible containers, where flex-flow is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-flow is set to its default value, no-wrap) will not reflect align-content.",
     properties: [
         "normal (default): items are packed in their default position as if no value was set.",
         "flex-start / start: items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.",
         "flex-end / end: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.",
         "center: items centered in the container",
         "space-between: items evenly distributed; the first line is at the start of the container while the last one is at the end",
         "space-around: items evenly distributed with equal space around each line",
         "space-evenly: items are evenly distributed with equal space around them",
         "stretch: lines stretch to take up the remaining space"
        ],
     key: "7"
    },

    {title:"order",
     details: "By default, flex items are laid out in the source order(default value 0). However, the order property controls the item order in which they appear in the flex container.",
     key: "8"
    },

    {title:"flex-grow & flex-shrink",
     growDetails: "Flex-grow defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up. If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).",
     shrinkDetails: "Flex-shrink defines the ability for a flex item to shrink if necessary. It's a opposite behaviour of flex-grow",
     note: "Negative numbers are invalid.",
     key: "9"
    },

    {title:"flex-basis",
     details: "This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.",
     detailsTwo: "If set to 0, the extra space around content isn’t factored in. If set to auto, the extra space is distributed based on its flex-grow value.",
     key: "10"
    },

    {title:"flex",
     details: "This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. The default is 0 1 auto, but if you set it with a single number value, it’s like 1 0.",
     note: "It is recommended that you use this shorthand property rather than set the individual properties. The shorthand sets the other values intelligently.",
     key: "11"
    },

    {title:"align-self",
     details: "This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Please see the align-items explanation to understand the available values.",
     note: "Note that float, clear and vertical-align have no effect on a flex item.",
     key: "12"
    }
] 