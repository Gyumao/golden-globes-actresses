"use strict";

$(function () {
    let $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIdenx = -1,

        init = function () {
            $mainMenuItems.children(".pictures").click(function () {
                let newIndex = $(this).parent().index(),
                    $item = $mainMenuItems.eq(newIndex),
                    $colorImage = $item.find(".color");

                $colorImage.animate({ left: "0" }, 250);
                $item.animate({ width: "42rem" }, 250);

                openedIdenx = newIndex;
            });
        };
    init();
});