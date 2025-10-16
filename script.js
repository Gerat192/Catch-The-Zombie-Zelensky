function buttonClick() {
    alert("Button clicked!");
}
document.getElementById("myButton").addEventListener("click", buttonClick);

function changeText() {
    document.getElementById("myText").innerHTML = "Text changed!";
}
document.getElementById("changeTextButton").addEventListener("click", changeText);

function toggleVisibility() {
    var elem = document.getElementById("myDiv");
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}
document.getElementById("toggleButton").addEventListener("click", toggleVisibility);

function updateInput() {
    var inputVal = document.getElementById("myInput").value;
    document.getElementById("displayInput").innerHTML = inputVal;
}
document.getElementById("updateButton").addEventListener("click", updateInput);
document.getElementById("myInput").
addEventListener("input", updateInput);

function changeColor() {
    document.getElementById("colorDiv").style.backgroundColor = "lightblue";
}
document.getElementById("colorButton").addEventListener("click", changeColor);
document.getElementById("colorDiv").addEventListener("mouseover", changeColor);
document.getElementById("colorDiv").addEventListener("mouseout", function() {
    document.getElementById("colorDiv").style.backgroundColor = "white";
});

function logKey(event) {
    console.log("Key pressed: " + event.key);
}
document.addEventListener("keydown", logKey);
document.addEventListener("keyup", logKey);

function showAlert() {
    alert("This is an alert!");
}
document.getElementById("alertButton").addEventListener("click", showAlert);
document.getElementById("alertButton").addEventListener("mouseover", showAlert);
document.getElementById("alertButton").addEventListener("mouseout", showAlert);
document.getElementById("alertButton").addEventListener("mousedown", showAlert);
document.getElementById("alertButton").addEventListener("mouseup", showAlert);

function logMousePosition(event) {
    console.log("Mouse position: X=" + event.clientX + ", Y=" + event.clientY);
}
document.addEventListener("mousemove", logMousePosition);
document.addEventListener("click", logMousePosition);
document.addEventListener("dblclick", logMousePosition);
document.addEventListener("contextmenu", logMousePosition);
document.addEventListener("wheel", logMousePosition);
document.addEventListener("mouseenter", logMousePosition);
document.addEventListener("mouseleave", logMousePosition);
document.addEventListener("mouseover", logMousePosition);
document.addEventListener("mouseout", logMousePosition);
document.addEventListener("mousedown", logMousePosition);
document.addEventListener("mouseup", logMousePosition);
document.addEventListener("drag", logMousePosition);
document.addEventListener("dragend", logMousePosition);
document.addEventListener("dragenter", logMousePosition);
document.addEventListener("dragleave", logMousePosition);
document.addEventListener("dragover", logMousePosition);
document.addEventListener("dragstart", logMousePosition);
document.addEventListener("drop", logMousePosition);
document.addEventListener("scroll", logMousePosition);

function logFocus(event) {
    console.log(event.type + " event on " + event.target.id);
}
document.getElementById("focusInput").addEventListener("focus", logFocus);
document.getElementById("focusInput").addEventListener("blur", logFocus);
document.getElementById("focusInput").addEventListener("change", logFocus);
document.getElementById("focusInput").addEventListener("select", logFocus);
document.getElementById("focusInput").addEventListener("input", logFocus);

function logClipboard(event) {
    console.log(event.type + " event");
}   
document.getElementById("clipboardInput").addEventListener("copy", logClipboard);
document.getElementById("clipboardInput").addEventListener("cut", logClipboard);
document.getElementById("clipboardInput").addEventListener("paste", logClipboard);
document.getElementById("clipboardInput").addEventListener("input", logClipboard);
document.getElementById("clipboardInput").addEventListener("change", logClipboard);

function logForm(event) {
    console.log(event.type + " event on form");
    event.preventDefault();
}
PaymentAddress = document.getElementById("myForm");
PaymentAddress.addEventListener("submit", logForm);
PaymentAddress.addEventListener("reset", logForm);
PaymentAddress.addEventListener("input", logForm);
PaymentAddress.addEventListener("change", logForm); 
PaymentAddress.addEventListener("focus", logForm, true);
PaymentAddress.addEventListener("blur", logForm, true);
PaymentAddress.addEventListener("invalid", logForm, true);

function logWindow(event) {
    console.log(event.type + " event on window");
}
window.addEventListener("load", logWindow);
window.addEventListener("resize", logWindow);
window.addEventListener("scroll", logWindow);
window.addEventListener("beforeunload", logWindow);
window.addEventListener("unload", logWindow);
window.addEventListener("error", logWindow);
window.addEventListener("hashchange", logWindow);
window.addEventListener("popstate", logWindow);
window.addEventListener("pagehide", logWindow); 
PaymentResponse = window.addEventListener("pageshow", logWindow);
window.addEventListener("message", logWindow);
window.addEventListener("online", logWindow);
window.addEventListener("offline", logWindow); 
PaymentDonattelon = window.addEventListener("storage", logWindow);
window.addEventListener("orientationchange", logWindow);
window.addEventListener("visibilitychange", logWindow);
window.addEventListener("fullscreenchange", logWindow);
window.addEventListener("pointerlockchange", logWindow);
window.addEventListener("copy", logWindow);
window.addEventListener("cut", logWindow);

function amineteDiv() {
    var elem = document.getElementById("animateDiv");   
    var pos = 0;
    var id = setInterval(frame, 10); 
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}
document.getElementById("animateButton").addEventListener("click", amineteDiv);

function logTouch(event) {
    console.log(event.type + " event with " + event.touches.length + " touch(es)");
}   
document.addEventListener("touchstart", logTouch);
document.addEventListener("touchend", logTouch);
document.addEventListener("touchmove", logTouch);
document.addEventListener("touchcancel", logTouch); 
document.addEventListener("touchenter", logTouch);
document.addEventListener("touchleave", logTouch);
document.addEventListener("touchforcechange", logTouch);
document.addEventListener("gesturestart", logTouch);
document.addEventListener("gesturechange", logTouch);
document.addEventListener("gestureend", logTouch);
document.addEventListener("pointerdown", logTouch);
document.addEventListener("pointerup", logTouch);
document.addEventListener("pointermove", logTouch);
document.addEventListener("pointercancel", logTouch);
document.addEventListener("gotpointercapture", logTouch);
document.addEventListener("lostpointercapture", logTouch);
document.addEventListener("pointerenter", logTouch);
document.addEventListener("pointerleave", logTouch);
document.addEventListener("pointerover", logTouch);
document.addEventListener("pointerout", logTouch);
document.addEventListener("selectstart", logTouch);
document.addEventListener("selectionchange", logTouch);
document.addEventListener("beforecopy", logTouch);
document.addEventListener("beforecut", logTouch);
document.addEventListener("beforepaste", logTouch);
document.addEventListener("copy", logTouch);   