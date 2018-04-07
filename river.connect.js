var RiverUpdate;
(function (RiverUpdate) {
    function updateProgress(percentage) {
        var p = document.querySelector('#update_progress .progress');
        p.style.width = percentage + "%";
    }
    RiverUpdate.updateProgress = updateProgress;
})(RiverUpdate || (RiverUpdate = {}));
