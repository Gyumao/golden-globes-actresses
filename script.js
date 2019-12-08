"use strict";

$(function () {
    let $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIdenx = -1,

        init = function () {
            $mainMenuItems.children(".pictures").click(function () {
                let newIndex = $(this).parent().index(),
                    $item = $mainMenuItems.eq(newIndex);

                if (openedIdenx === newIndex) {
                    animateItem($item, false, 250);
                    openedIdenx = -1;
                }
                else {
                    if (validIndex(newIndex)) {
                        animateItem($mainMenuItems.eq(openedIdenx), false, 250);
                        openedIdenx = newIndex;
                        animateItem($item, true, 250);
                    }
                }
            });
        },

        validIndex = function (indexToCheck) {
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems)
        },

        animateItem = function ($item, toOpen, speed) {
            let $colorImage = $item.find(".color"),
                itemParam = toOpen ? { width: "42rem" } : { width: "14rem" },
                $colorImageParam = toOpen ? { left: "0" } : { left: "14rem" };

            $colorImage.animate($colorImageParam, speed);
            $item.animate(itemParam, speed);
        };
    init();
});