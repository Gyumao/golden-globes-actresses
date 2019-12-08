$(function () {
    let $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIdenx = -1,

        init = function () {
            $mainMenuItems.children(".images").click(function () {
                let newIndex = $(this).parent().index(),
                    $item = $mainMenuItems.eq(newIndex),
                    $colorImage = $item.find(".color");
            });
        };
});