$(document).ready(function () {
    // toggles the state of the popover text
    $(function () {
        $('[data-toggle="popover"]').popover();
    });

// chol calculation

let cholCalc = $('#chol-cal');

cholCalc.on('click', (e) => {
    e.preventDefault();
    let chol = $('#chol-input').val();
    let hdl = $('#hdl-input').val();
    let trig = $('#trig-input').val();

    // formula chol - (trig / 5 + HDL) 194-(31.66 + 82.1) = 80.24
   
    // make variables here for calculations


    // if statement here for empty inputs



})




});