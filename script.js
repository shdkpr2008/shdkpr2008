// Code and documentation copyright the Bootstrap Authors, further can be read at https://github.com/twbs/bootstrap/

const TOAST_OPTIONS = {
    "autohide": true,
    "delay": 5000,
    "animation": true
}

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, TOAST_OPTIONS);
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const TOAST_SHOW_TIMEOUT = 1000;

if (toastList.length) {
    let toast = toastList[0];

    setTimeout(() => {
        toast.show();
    }, TOAST_SHOW_TIMEOUT);
}