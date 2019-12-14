$(document).ready(function() {
    // toggles the state of the popover text
    $(function() {
        $('[data-toggle="popover"]').popover('show');
    });


    //   $('ul').on('click', '.input-group-text', function() {
    //     $(this).toggleClass('completed')
    //   })

    // chol calculation

    let cholCalc = $('#chol-cal');

    cholCalc.on('click', (e) => {
        e.preventDefault();
        let chol = parseFloat($('#chol-input').val());
        let hdl = parseFloat($('#hdl-input').val());
        let trig = parseFloat($('#trig-input').val());


        // formula chol - (trig / 5 + HDL) 194-(31.66 + 82.1) = 80.24


        let trigCalculation = trig / 5;
        let totalParens = trigCalculation + hdl;
        console.log('total parens ' + totalParens);

        let cholEquation = chol - totalParens;
        console.log('Chol Calc: ' + cholEquation);


        if (isNaN(chol) || chol === "" || isNaN(hdl) || hdl === "" || isNaN(trig) || trig === "") {
            $('#cholCalculation').html("<h5>" + "Error, All fields required!!" + "</h5>");

        } else {

            $('#cholCalculation').html('LDL Chol Calc: ' + cholEquation);
        }

    });


});