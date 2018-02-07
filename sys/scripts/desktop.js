$(document).ready(function () {

    var windows = document.getElementsByClassName('window');
    var draggableWindows = [];

    for (var win in windows) {
        draggie = new Draggabilly(windows[win], {
            containment: true
        });
        draggableWindows.push(draggie);
    }

});
