var guestName = prompt('Ismingiz kiriting')

var guestPass = +prompt('Parolingiz kiriting')

if (guestName == 'Azizbek' && guestPass == 123) {
    alert('Hush kelibsiz ' + guestName)
} else {
    // alert('Hush kelibsiz Azizbek')
}

if (guestName !== 'Azizbek' && guestPass !== 123) {
    alert('login va parolingiz notogri kiritildi ');
} else {
    if (guestName !== 'Azizbek') {
        alert("login notogri kiritildi");
    } else if (guestPass !== 123) {
        alert("parolingiz notogri kiritildi");
    }
}
