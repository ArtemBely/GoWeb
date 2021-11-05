const requestBtn = document.querySelector('.cmp_advantages_btn');
const inputEmail =document.querySelector('.cmp_advantages_input');

requestBtn.onclick = () => {
    let inputValue = inputEmail.value;
    let emailRes = '';

    if (inputValue == '') {
        return
    }else {
         emailRes = inputValue;
         inputEmail.value = '';
         alert('Thank you, we will contact you soon');
    }
}