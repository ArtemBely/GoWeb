// "use strict"
$(document).ready(function() {
    $(".cmp_header__burger").click(function(event) {
        $(".cmp_header__burger,.cmp_header_list").toggleClass("active");
        $("body").toggleClass("lock")
    });
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("#order_our2").submit(function() { //Change
    swal({
    text: "Message was sent. Our team will contact you soon.",
    button: "OK"
    });
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      console.log('done');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("#order_our0").submit(function() { //Change
    swal({
    text: "Message was sent. Our team will contact you soon.",
    button: "OK"
    });
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      console.log('done');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

//Popup
const popupLinks = document.querySelectorAll(".popup_link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock_padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute("href").replace("#", "");
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener("click", function (e) {
			popupClose(el.closest(".closest"));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector(".popup.open");
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add("open");
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest(".gray_closest")) {
				popupClose(e.target.closest(".closest"));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove("open");
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector(".cmp_wrap").offsetWidth + "px";

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add("lock");

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function() {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = "0px";
			}
		}
		body.style.paddingRight = "0px";
		body.classList.remove("lock");
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener("keydown", function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector(".popup.open");
		popupClose(popupActive);
	}
});
document.addEventListener("keydown", function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector(".popup2.open");
		popupClose(popupActive);
	}
});
