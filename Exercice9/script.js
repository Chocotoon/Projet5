// votre code ici
function checkAge(age) {
    switch(age) {
        case age < 18: 
        console.log("Vous êtes mineur.")
        case 18 < age < 6: 
        console.log("Vous êtes majeur.")
        case age > 65:
        console.log("Vous êtes senior.")
    }
}
export default checkAge;
