isEmpty = () => {
    let name = document.getElementById('name-text').value;
    let address = document.getElementById('address-text').value;
    let phone = document.getElementById('phone-text').value;
    let email = document.getElementById('email-text').value;

    let $errorName = document.getElementById('error-name');
    let $errorAddress = document.getElementById('error-address');
    let $errorPhone = document.getElementById('error-phone');
    let $errorEmail = document.getElementById('error-email');

    if (name === "" || address === "" || phone === "" || email === "") {
        if (name === "") $errorName.innerHTML = 'Không để trống Họ tên';
        else $errorName.innerHTML = "";
        if (address === "") $errorAddress.innerHTML = 'Không để trống Địa chỉ';
        else $errorAddress.innerHTML = "";
        if (phone === "") $errorPhone.innerHTML = 'Không để trống Số điện thoại';
        else $errorPhone.innerHTML = "";
        if (email === "") $errorEmail.innerHTML = 'Không để trống Email';
        else $errorEmail.innerHTML = "";

        return false;
    }
    return true;
}

validatePhone = (phone) => {
    const regPhone = /^\d+$/;
    // return regPhone.test(String(phone));
    if (phone.value.match(regPhone)) {
        document.getElementById('error-phone').innerHTML = "";
        return true;
    }
    else {
        document.getElementById('error-phone').innerHTML = "Phone is stupid";
        // alert('Phone sida');
        return false
    }
}

validateEmail = (email) => {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return regEmail.test(String(email).toLowerCase());
    if (email.value.match(regEmail)) {
        document.getElementById('error-email').innerHTML = "";
        return true;
    }
    else {
        document.getElementById('error-email').innerHTML = "Email sida";
        return false;
    }
}

validateFormat = () => {
    if (validatePhone(document.getElementById('phone-text')) === false ||
        validateEmail(document.getElementById('email-text')) === false) {
        console.log('sida');
        return false;
    }
    return true;

}

mainValidate = () => {
    if (isEmpty() === false) {
        console.log('Fields are empty...');
        return false;
    }

    // var phone = document.getElementById('phone-text').value;
    // var email = document.getElementById('email-text').value;
    // if (validatePhone(document.getElementById('phone-text').value) === false ||
    //     validateEmail(document.getElementById('email-text').value) === false) {
    //     if (validatePhone(document.getElementById('phone-text').value) === false) {
    //         console.log('phone is not accept');
    //         document.getElementById('error-phone').innerHTML('Số điện thoại gồm số và có 10 kí tự');
    //     }
    //     else document.getElementById('error-phone').innerHTML('');
    //     if (validateEmail(document.getElementById('email-text').value) === false) {
    //         document.getElementById('error-email0').innerHTML('Hãy nhập đúng định dạng email');
    //     }
    //     else document.getElementById('error-email').innerHTML('');
    //     return false;
    // }

    if (validateFormat() === false) {
        console.log('Fields are stupid...');
        return false;
    }
    alert('Login success');
    return true;
}

// document.getElementById('btn-submit').addEventListener('click', function () {
//     if (isEmpty() === false) {
//         console.log('Fields are empty...');
//         return;
//     }
//
//     // var phone = document.getElementById('phone-text').value;
//     // var email = document.getElementById('email-text').value;
//     if (validatePhone(document.getElementById('phone-text').value) === false ||
//         validateEmail(document.getElementById('email-text').value) === false) {
//         if (validatePhone(document.getElementById('phone-text').value) === false) {
//             console.log('phone is not accept');
//             document.getElementById('error-phone').innerHTML('Số điện thoại gồm số và có 10 kí tự');
//         }
//         else document.getElementById('error-phone').innerHTML('');
//         if (validateEmail(document.getElementById('email-text').value) === false) {
//             document.getElementById('error-email0').innerHTML('Hãy nhập đúng định dạng email');
//         }
//         else document.getElementById('error-email').innerHTML('');
//         return;
//     }
//
//     alert('Login success');
//     // return true;
//});