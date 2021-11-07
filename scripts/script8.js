const popupLinks2 = document.querySelectorAll(".cps_modular_btn");

const inputPurpose = document.querySelector('#input_purpose');
const dropList = document.querySelector('.droplist');
const dropItem = document.querySelectorAll('.dropItem');
const iconInput =document.querySelector('.fa-sort-desc');

inputPurpose.onclick = () => {
  dropList.className = "droplist-open";
}

iconInput.onclick = () => {
  dropList.className = "droplist-open";
}

for(item of dropItem){
  item.onclick = function() {
    dropList.className = "droplist";
    inputPurpose.value = this.innerText;
  }
}


if (popupLinks2.length > 0) {
  for (let index = 0; index < popupLinks2.length; index++) {
    const popupLink = popupLinks2[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon2 = document.querySelectorAll(".popup_close2");


if (popupCloseIcon2.length > 0) {
  for (let index = 0; index < popupCloseIcon2.length; index++) {
    const el = popupCloseIcon2[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup2"));
      e.preventDefault();
    });
  }
}

let unlock = true;

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".cps_wrap").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup2.open");
    popupClose(popupActive);
  }
});