function sendMail(formId) {
  var name = document.getElementById(`${formId}_name`).value;
  var phone = document.getElementById(`${formId}_phone`).value;
  var email = document.getElementById(`${formId}_email`).value;
  var params = {
    name: name,
    phone: phone,
    email: email,
  };

  const serviceID = "service_ognut3z";
  const templeId = "template_18pbxyg";

  emailjs
    .send(serviceID, templeId, params)
    .then((res) => {
      document.getElementById(`${formId}_name`).value = "";
      document.getElementById(`${formId}_phone`).value = "";
      document.getElementById(`${formId}_email`).value = "";
      console.log("res: ", res);
      $(".main-popup-regis").fadeOut(300);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
}
