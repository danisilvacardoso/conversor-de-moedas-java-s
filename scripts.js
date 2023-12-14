const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

const currencySelectOf = document.querySelector(".currency-select-0f")

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.22
    const bitcoinToday = 206242.46
    const realToday = 1

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BTG"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
       
    }
   
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changecurrencySelectOf() {

    const currency = document.querySelector(".currency")
    const convertImg = document.querySelector(".convert-img")


    if (currencySelectOf.value == "dolar") {
        currency.innerHTML = 'Dolar americano'
        convertImg.src = "./assets/dolar.png"
        
     }
     

    if (currencySelectOf.value == "libra") {
        currency.innerHTML = 'Libra'
        convertImg.src = "./assets/libra.png"
    }

    if (currencySelectOf.value == "euro") {
        currency.innerHTML = 'Euro'
        convertImg.src = "./assets/euro.png"
    }
    if (currencySelectOf.value == "real") {
        currency.innerHTML = 'Real'
        convertImg.src = "./assets/real.png"
    }

    if (currencySelectOf.value == "bitcoin") {
        currency.innerHTML = 'Bitcoin'
        convertImg.src = "./assets/bitcoin.png"
    }

}


function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dolar americano'
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = "./assets/euro.png"
    }


    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == 'real') {
        currencyName.innerHTML = 'Real'
        currencyImage.src = "./assets/real.png"
    }


}

currencySelectOf.addEventListener("change", changecurrencySelectOf)

currencySelect.addEventListener('change', changeCurrency)

convertButton.addEventListener('click', convertValues)

