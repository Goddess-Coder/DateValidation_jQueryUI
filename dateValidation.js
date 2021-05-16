function confirmDate(){
    $('button').click(function(){
        $('form').submit(function(e){
            var person = $('.nameField').val();
            var from = $('.leaveDate').val();
            var to = $('.returnDate').val();
            if (from.length == 0) {
                $('#smallLeave').show();
            }
            if (to.length == 0) {
                $('#smallReturn').show();
            }
            if (person.length == 0) {
                $('#smallName').show();
            }
            else{
                alert(person + "," + " your cruise is confirmed! You will be departing on " + from + " and returning on " + to);
            }
            e.preventDefault();
        })
    })
}

$(document).ready(function(){
    $('small').hide()
    $('#leaveDate').datepicker();
    $('#returnDate').datepicker();
    confirmDate();
})