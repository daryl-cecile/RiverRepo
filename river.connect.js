var RiverUpdate;
(function (RiverUpdate) {
    function updateProgress(percentage) {
        var p = document.querySelector('#update_progress');
        p.value = percentage;
        p.max = 100;
    }
    RiverUpdate.updateProgress = updateProgress;
})(RiverUpdate || (RiverUpdate = {}));
