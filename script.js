function shareCard() {

    if (navigator.share) {

        navigator.share({
            title: 'Neveen Elshaarawy',
            text: 'CEO - ONYX Global Logistics',
            url: window.location.href
        });

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("Business Card Link Copied Successfully");

    }

}

new QRCode(document.getElementById("qrcode"), {
    text: window.location.href,
    width: 170,
    height: 170
});
