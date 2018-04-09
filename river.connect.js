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
    function start_listening() {
        if (River.IsListening() == true) {
            stop_listening();
            return;
        }
        var btn = document.querySelector("#talk_btn");
        btn.classList.add("active");
        btn.innerHTML = "<img src=\"mic.png\" style=\"width: 10vw\" alt=\"\"> <span>Listening...</span>";
        River.SpeakRequest(River.RegisterTask(""));
    }
    RiverRemote.start_listening = start_listening;
    function stop_listening() {
        River.StopListening();
        var btn = document.querySelector("#talk_btn");
        btn.classList.remove("active");
        btn.innerHTML = "<img src=\"mic.png\" style=\"width: 10vw\" alt=\"\">";
    }
    RiverRemote.stop_listening = stop_listening;
    function user_speak(message) {
        makeBubble(message, "sent");
        scrollConversationBox();
    }
    RiverRemote.user_speak = user_speak;
    function response_speak(message) {
        makeBubble(message, "received");
        scrollConversationBox();
    }
    RiverRemote.response_speak = response_speak;
    function when(eventName, handler) {
        var onceHandler = (function () {
            handler();
            removeEventListener(eventName, onceHandler);
        });
        addEventListener(eventName, onceHandler);
    }
    RiverRemote.when = when;
    function scrollConversationBox() {
        var conversationbox = document.querySelector(".conversation");
        conversationbox.scrollTop = conversationbox.scrollHeight;
    }
    function makeBubble(text, side) {
        var template = "<div class=\"bubble\">\n          <span>" + text + "</span>\n          <span>" + (side === 'sent' ? 'You' : River.GetApplicationName()) + "</span>\n        </div>";
        var divMsg = document.createElement('div');
        divMsg.className = 'msg ' + side;
        divMsg.innerHTML = template;
        document.querySelector(".conversation").appendChild(divMsg);
    }
})(RiverRemote || (RiverRemote = {}));
document.querySelector("#talk_btn").addEventListener("click", RiverRemote.start_listening);
