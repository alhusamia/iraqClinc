var modal = document.getElementById("Modal");
const body = document.getElementById("body");
const greet = document.getElementById("greet");

var phone = document.getElementById("phone");
var WhatsApp = document.getElementById("WhatsApp");
var Email = document.getElementById("Email");
var btn = document.getElementById("CheckIn");
var span = document.getElementsByClassName("close")[0];
var cont = document.getElementById("contact");
var submit = document.getElementById("submit");
const name = document.getElementById("name");
var formel = document.getElementById("myForm");
var method = "";

function Book() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

phone.onclick = function () {
  cont.style.display = "block";
  cont.placeholder = "00962-xxx-xxx-xxx";
  value = "phone";
};

WhatsApp.onclick = function () {
  cont.style.display = "block";
  cont.placeholder = "00962-xxx-xxx-xxx";
  value = "whatsapp";
};

Email.onclick = function () {
  cont.style.display = "block";
  cont.placeholder = "****@gmail.com";
  value = "email";
};

formel.onsubmit = async (e) => {
  e.preventDefault();
  let obj = {
    name: name.value,
    contactMethod: `${method} ${cont.value} -Clinic : Al-Qimmah Clinic`,
  };

  let response = await fetch(
    "https://gwhb7l31r0.execute-api.eu-central-1.amazonaws.com/default/clinicsMailerFunction",
    {
      method: "POST",
      body: JSON.stringify(obj),
    }
  );

  if (response.status == 200) {
    body.style.display = "none";
    greet.style.display = "block";
  }
};
