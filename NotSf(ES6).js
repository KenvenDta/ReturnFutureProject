//禁止缩放(ES6未转码)
document.addEventListener('mousewheel', (e) => {
    e = e || window.event;
    if ((e.wheelDelta && event.ctrlKey) || e.detail) {
        event.preventDefault();
    }
}, { capture: false, passive: false });
document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey === true || event.metaKey === true)
        && (event.keyCode === 61 || event.keyCode === 107
            || event.keyCode === 173 || event.keyCode === 109
            || event.keyCode === 187 || event.keyCode === 189)) {
        event.preventDefault();
    }
}, false);