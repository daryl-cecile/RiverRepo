var RiverUpdate;
(function (RiverUpdate) {
    function updateProgress(percentage) {
        var p = document.querySelector('#update_progress .progress');
        p.style.width = percentage + "%";
    }
    RiverUpdate.updateProgress = updateProgress;
})(RiverUpdate || (RiverUpdate = {}));
var RiverRemote;
(function (RiverRemote) {
    function when(eventName, handler) {
        var onceHandler = (function () {
            handler();
            removeEventListener(eventName, onceHandler);
        });
        addEventListener(eventName, onceHandler);
    }
    RiverRemote.when = when;
})(RiverRemote || (RiverRemote = {}));
