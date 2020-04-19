var urlSendData = 'https://murmuring-caverns-60089.herokuapp.com/api/v1/leads';

var form1 = $('#regiration_form_step1'),
  form2 = $('#regiration_form_step2');

var firstName, email, day, month, phone, refer;

function postAjax(data) {
  fetch(urlSendData, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ form: data }),
  });
}

function sendForm1() {
  const sendOjb = {
    step: 1,
    first_name: firstName.val(),
    email: email.val(),
    day: day.val(),
    month: month.val(),
  };
  postAjax(sendOjb);
}

function sendForm2() {
  const sendOjb = {
    first_name: firstName.val(),
    last_name: lastName.val(),
    email: email.val(),
    phone: phone.val(),
    refer: refer.val(),
  };
  postAjax(sendOjb);
}

$('#firstName', form1).on('input', function(e) {
  $('#firstName', form2).val(e.target.value);
});

form1.submit(function(event) {
  event.preventDefault();
  firstName = $('#firstName', form1);
  email = $('#email', form1);
  day = $('#day', form1);
  month = $('#month', form1);

  if (email.val().length > 0) {
    form1.hide();
    form2.removeClass('hide');
    sendForm1();
  }
});

form2.submit(function(event) {
  firstName = $('#firstName', form2);
  lastName = $('#lastName', form2);
  phone = $('#phone', form2);
  refer = $('#refer', form2);

  event.preventDefault();
  if (phone.val().length > 0) {
    $('.alert-success').removeClass('hide');
    sendForm2();
    form2.hide();
  }
});
