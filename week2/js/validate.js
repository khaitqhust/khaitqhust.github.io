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
        if (name === "") $errorName.innerHTML = "Không để trống Họ tên";
        else $errorName.innerHTML = "";
        if (address === "") $errorAddress.innerHTML = "Không để trống Địa chỉ";
        else $errorAddress.innerHTML = "";
        if (phone === "") $errorPhone.innerHTML = "Không để trống Số điện thoại";
        else $errorPhone.innerHTML = "";
        if (email === "") $errorEmail.innerHTML = "Không để trống Email";
        else $errorEmail.innerHTML = "";

        return false;
    }
    else {
        $errorName.innerHTML = "";
        $errorAddress.innerHTML = "";
        $errorPhone.innerHTML = "";
        $errorEmail.innerHTML = "";
        return true;
    }

}

validateFormat = () => {
    const regPhone = /^\d+$/;
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let phone = document.getElementById('phone-text');
    let email = document.getElementById('email-text');

    const testPhone = phone.value.match(regPhone);
    const testEmail = email.value.match(regEmail);

    if (!testPhone || !testEmail) {
        if (!testPhone) document.getElementById('error-phone').innerHTML = "Số điện thoại phải là số";
        else document.getElementById('error-phone').innerHTML = "";
        if (!testEmail) document.getElementById('error-email').innerHTML = "Email không đúng định dạng";
        else document.getElementById('error-email').innerHTML = "";
        return false;
    }
    else {
        document.getElementById('error-phone').innerHTML = "";
        document.getElementById('error-email').innerHTML = "";
        return true;
    }
}

mainValidate = () => {
    if (isEmpty() === false) {
        console.log('Fields are empty...');
        return false;
    }

    if (validateFormat() === false) {
        console.log('Fields are stupid...');
        return false;
    }
    alert('Login success');
    return true;
};