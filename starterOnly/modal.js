function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Accés aux éléments du DOM à l'aide de variable
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const close2 = document.querySelector(".close2");
const form = document.getElementById("form");
const modalConfirmation = document.querySelector(".modalConfirmation");
const btnConfirmation = document.querySelector(".btnConfirmation");

// Accés aux inputs à l'aide de la création d'un objet
const forms = {
  forename: document.querySelector("#first"),
  surname: document.querySelector("#last"),
  email: document.querySelector("#email"),
  birthdate: document.querySelector("#birthdate"),
  quantity: document.querySelector("#quantity"),
  city: formData[5],
  conditions: formData[6],
};

// Création d'un élément pour pour afficher le message d'erreur qui correspond
let p = document.createElement("p");
p.style.fontSize = "0.7em";
p.style.color = "red";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture la page d'inscription lors du clic sur la croix
close.addEventListener("click", closeModal);

// Fonction de fermeture de la page d'inscription
function closeModal() {
  modalbg.style.display = "none";
}

// Fonction de fermeture au clic sur la croix de la page de confirmation
close2.addEventListener("click", function (e) {
  modalConfirmation.style.display = "none";
});

// Lorsqu'on apuuie sur le bouton fermer, la page qui confirme la participation disparaît
btnConfirmation.addEventListener("click", function (e) {
  modalConfirmation.style.display = "none";
});

// Lors du click du bouton "submit", on bloque le comportement par défaut si les valeurs saisies sont incorrectes
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Si elles sont valides, on affiche un message qui confirme la participation
  if (
    validForname(forms.forename) &&
    validSurname(forms.surname) &&
    validEmail(forms.email) &&
    validBirthdate(forms.birthdate) &&
    validQuantity(forms.quantity) &&
    validCity(forms.city) &&
    validConditions(forms.conditions)
  ) {
    modalbg.style.display = "none";
    modalConfirmation.style.display = "block";
    return true;
  }
});

// Variables qui contiennent les regex
let nameRegex =
  /^[a-zA-ZÀ-Ÿà-ÿ]+([\s\'\.\-][a-zA-ZÀ-Ÿà-ÿ]+)?([\s\'\.\-][a-zA-ZÀ-Ÿà-ÿ]+)*$/;
let emailRegex = "^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\\.[a-z][a-z]+$";
let birthdateRegex =
  /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

// Ajout des attributs pour la date de naissance (avoir 18 ans minimum)
forms.birthdate.setAttribute("required", "");
forms.birthdate.setAttribute("max", "2004-12-31");

// Fonction de validation pour le prénom
function validForname() {
  if (forms.forename.value.length < 2) {
    formData[0].appendChild(p).innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  } else if (!forms.forename.value.match(nameRegex)) {
    formData[0].appendChild(p).innerHTML =
      "Veuillez insérer des caractères valide";
    return false;
  } else {
    formData[0].appendChild(p).innerHTML = "";
    return true;
  }
}

// Fonction de validation pour le nom
function validSurname() {
  if (forms.surname.value.length < 2) {
    formData[1].appendChild(p).innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  } else if (!forms.surname.value.match(nameRegex)) {
    formData[1].appendChild(p).innerHTML =
      "Veuillez insérer des caractères valide";
    return false;
  } else {
    formData[1].appendChild(p).innerHTML = "";
    return true;
  }
}

// Fonctions de validation pour l'email
function validEmail() {
  if (!forms.email.value.match(emailRegex)) {
    formData[2].appendChild(p).innerHTML =
      "Veuillez insérer une adresse mail valide";
    return false;
  } else {
    formData[2].appendChild(p).innerHTML = "";
    return true;
  }
}

// Fonction de validation pour la date de naissance

function validBirthdate() {
  if (!forms.birthdate.value.match(birthdateRegex)) {
    formData[3].appendChild(p).innerHTML =
      "Veiller à indiquer votre date de naissance au format jj/mm/aaaa";
    return false;
  } else {
    formData[3].appendChild(p).innerHTML = "";
    return true;
  }
}

// Fonction de validation pour le nombre de participation des tounois
function validQuantity() {
  if (forms.quantity.value.length == 0) {
    formData[4].appendChild(p).innerHTML = "Veuillez insérer un nombre";
    return false;
  } else if (forms.quantity.value.length >= 3) {
    formData[4].appendChild(p).innerHTML =
      "Veuillez insérer un nombre compris entre 0 et 99";
    return false;
  } else {
    formData[4].appendChild(p).innerHTML = "";
    return true;
  }
}

// Fonction de validation pour le choix de la ville de participation
function validCity() {
  const radios = document.getElementsByName("location");
  let radioChecked = false;
  for (let element of radios) {
    if (element.checked && element.type == "radio") {
      radioChecked = true;
      forms.conditions.appendChild(p).innerHTML = "";
      return true;
    }
  }
  if (!radioChecked) {
    forms.city.appendChild(p).innerHTML = "Vous devez choisir une option";
    return false;
  }
}

// Fonction de validation qui oblige de valider les conditions d'utilisations
function validConditions() {
  let conditionsError = false;
  let conditions = document.getElementById("checkbox1");
  if (conditions.checked && conditions.type == "checkbox") {
    conditionsError = true;
    forms.conditions.appendChild(p).innerHTML = "";
    return true;
  }
  if (!conditionsError) {
    forms.conditions.appendChild(p).innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions";
    return false;
  }
}

// On applique la fonction à l'événement
forms.forename.addEventListener("change", validForname);

// On applique la fonction à l'événement
forms.surname.addEventListener("change", validSurname);

// On applique la fonction à l'événement
forms.email.addEventListener("change", validEmail);

// On applique la fonction à l'événement
forms.birthdate.addEventListener("input", validBirthdate);

// On applique la fonction à l'événement
forms.quantity.addEventListener("change", validQuantity);

// On applique la fonction à l'événement
forms.city.addEventListener("change", validCity);

// On applique la fonction à l'événement
forms.conditions.addEventListener("change", validConditions);
