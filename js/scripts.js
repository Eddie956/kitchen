$('.nav a').click(function(e) {
  $(this).tab('show');

  var tabContent = '#tabContent' + this.id;

  $('#tabContent1').hide();
  $('#tabContent2').hide();
  $('#tabContent3').hide();
  $('#tabContent4').hide();

  $(tabContent).show();
})
$(document).ready(function() {
  $('#subscribe').submit(function(event) {
    event.preventDefault()
    var email = $('#email').val();
    alert('hi ' + email + 'you have succesfully been subscribed to anitas kitchen');
  });
});