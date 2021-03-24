/* =========================================================================================
    Summary
========================================================================================= 
    Container properties:
        Flex-direction
        Justify-content
        Align-items
        Align-content
        Flex-wrap

    Multi Flex

    Content properties:
        Align-self
        Flex-grow
        Flex-shrink
        Order
*/

// TODO: refactor

/* =========================================================================================
    Container properties
========================================================================================= */

/* Flex Direction */
function flexDir(option) {
    let flexDirectionStyle = document.getElementById("flex-direction-container").style;
    flexDirectionStyle.flexDirection = option;
}

/* Justify Content */
function justifyContent(option) {
    let justifyContentStyle = document.getElementById("justify-content-container").style;
    justifyContentStyle.justifyContent = option;
}

/* Align Items*/
function alignItems(option) {
    let alignItemsStyle = document.getElementById("align-items-container").style;
    alignItemsStyle.alignItems = option;    /* Container need height  */
}

/* Align Content */
function alignContent(option) {
    let alignContentStyle = document.getElementById("align-content-container").style;
    alignContentStyle.alignContent = option;    /* Container need height  */
}

/* Flex Wrap */
function flexWrap(option) {
    let flexWrapStyle = document.getElementById("flex-wrap-container").style;
    flexWrapStyle.flexWrap = option;
}
function itemSize(value) {
    console.log("item width: " + value + "rem")
    let itemSize = document.getElementsByClassName('fw');

    for (let i = 0; i < itemSize.length; i++) {
        itemSize[i].style.width =  value + "rem";
    }
}
function containerWidth(value) {
    console.log("container width: " + value + "%")
    let flexWrapStyle = document.getElementById("flex-wrap-container").style;
    flexWrapStyle.width = value + "%";
}


/* ============================================================================
    MULTIFLEX 
============================================================================ */

/* Flex Direction */
function multiFlexDir(option) {
    let flexDirectionStyle = document.getElementById("multiflex-container").style;
    flexDirectionStyle.flexDirection = option;
    console.log(option);
}

/* Justify Content */
function multiJustifyContent(option) {
    let justifyContentStyle = document.getElementById("multiflex-container").style;
    justifyContentStyle.justifyContent = option;
}
/* Align Items*/
function multiAlignItems(option) {
    let alignItemsStyle = document.getElementById("multiflex-container").style;
    alignItemsStyle.alignItems = option;    /* Container need size  */
}
/* Align Content */
function multiAlignContent(option) {
    let alignContentStyle = document.getElementById("multiflex-container").style;
    alignContentStyle.alignContent = option;    /* Container need size  */
}
/* Flex Wrap */
function multiFlexWrap(option) {
    let flexWrapStyle = document.getElementById("multiflex-container").style;
    flexWrapStyle.flexWrap = option;
}
// TODO: add option overflow hidden/visible

/* Item dimensions */
/* Item width */
function multiItemWidth(value) {
    console.log("item width: " + value + "rem")
    let itemSize = document.getElementsByClassName('multiflexitem');

    for (let i = 0; i < itemSize.length; i++) {
        itemSize[i].style.width =  value + "rem";
    }
}
/* Item height */
function multiItemHeight(value) {
    console.log("item width: " + value + "rem")
    let itemSize = document.getElementsByClassName('multiflexitem');

    for (let i = 0; i < itemSize.length; i++) {
        itemSize[i].style.height =  value + "rem";
    }
}

/* Container dimensions */
/* Container width */
function multiContainerWidth(value) {
    console.log("container width: " + value + "%")
    let flexWrapStyle = document.getElementById("multiflex-container").style;
    flexWrapStyle.width = value + "vw";
}
/* Container height */
function multiContainerHeight(value) {
    console.log("container width: " + value + "%")
    let flexWrapStyle = document.getElementById("multiflex-container").style;
    flexWrapStyle.height = value + "vh";
}

/* Item Quantity */
function multiItemQuantity(value) {
    let multiContainer = document.getElementById("multiflex-container"); 
    let itemQuantity = document.getElementsByClassName("multiflexitem").length;

    // Delete all the existing items
    while(multiContainer.firstChild) {
        multiContainer.removeChild(multiContainer.firstChild);
    }
    
    // Create as many items as input value
    for (let i = 0; i < value; i++) {
        let item = document.createElement("div");
            item.className = "multiflexitem";
            multiContainer.appendChild(item);
    }
    
    console.log("item Quantity: " + itemQuantity);
    console.log("input value: " + value);
}


/* ============================================================================
    Content properties 
============================================================================ */

/* Align self */
function alignSelf(option) {
    let alignSelfStyle = document.getElementById("align_self_item3").style;
    alignSelfStyle.alignSelf = option;
}

/* Flex grow */
function flexGrow1(option) {
    let flexGrowStyle = document.getElementById("flex-grow-item1").style;
    flexGrowStyle.flexGrow = option;
}
function flexGrow2(option) {
    let flexGrowStyle = document.getElementById("flex-grow-item2").style;
    flexGrowStyle.flexGrow = option;
}
function flexGrow3(option) {
    let flexGrowStyle = document.getElementById("flex-grow-item3").style;
    flexGrowStyle.flexGrow = option;
}
function flexGrow4(option) {
    let flexGrowStyle = document.getElementById("flex-grow-item4").style;
    flexGrowStyle.flexGrow = option;
}
function flexGrow5(option) {
    let flexGrowStyle = document.getElementById("flex-grow-item5").style;
    flexGrowStyle.flexGrow = option;
}

/* Flex shrink */
function flexShrink1(option) {
    let flexShrinkStyle = document.getElementById("flex-shrink-item1").style;
    flexShrinkStyle.flexShrink = option;    // Total items widths must exceed containers width
}
function flexShrink2(option) {
    let flexShrinkStyle = document.getElementById("flex-shrink-item2").style;
    flexShrinkStyle.flexShrink = option;
}
function flexShrink3(option) {
    let flexShrinkStyle = document.getElementById("flex-shrink-item3").style;
    flexShrinkStyle.flexShrink = option;
}
function flexShrink4(option) {
    let flexShrinkStyle = document.getElementById("flex-shrink-item4").style;
    flexShrinkStyle.flexShrink = option;
}
function flexShrink5(option) {
    let flexShrinkStyle = document.getElementById("flex-shrink-item5").style;
    flexShrinkStyle.flexShrink = option;
}

/* Order */
function flexOrder1(option) {
    let flexOrderStyle = document.getElementById("flex-order-item1").style;
    flexOrderStyle.order = option;
}
function flexOrder2(option) {
    let flexOrderStyle = document.getElementById("flex-order-item2").style;
    flexOrderStyle.order = option;
}
function flexOrder3(option) {
    let flexOrderStyle = document.getElementById("flex-order-item3").style;
    flexOrderStyle.order = option;
}
function flexOrder4(option) {
    let flexOrderStyle = document.getElementById("flex-order-item4").style;
    flexOrderStyle.order = option;
}
function flexOrder5(option) {
    let flexOrderStyle = document.getElementById("flex-order-item5").style;
    flexOrderStyle.order = option;
}









