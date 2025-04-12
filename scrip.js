let ismingiz = prompt("Ismingizni kiriting 😀");
let familya = prompt("Familyangizni kiriting 😎");
let yosh = prompt("Yoshingizni kiriting 😁");
let bilmadim = prompt("Ismingiz katta harf yoki kichik harf bilan boshlanishni tanlang 🤗\n1) katta harf \n2) kichik harf");


if (bilmadim === "1") {
    ismingiz = ismingiz[0].toUpperCase() + ismingiz.slice(1);
} else if (bilmadim === "2") {
    ismingiz = ismingiz[0].toLowerCase() + ismingiz.slice(1);
} else {
    alert("Notog'ri tanlov qilindi. Ismingiz o'zgartirilmaydi.");
}

document.querySelector(".interhtml").innerHTML = `
    <p>Ismingiz: ${ismingiz}</p>
    <p>Familyangiz: ${familya}</p>
    <p>Yoshingiz: ${yosh}</p>
    <p>Sizning ismingiz ${
        bilmadim === "1" ? "katta harfda" : bilmadim === "2" ? "kichik harfda" : "o'zgarmagan holda"
    } kiritildi.</p>
`;
