const convertForm = document.getElementById('convertForm');
const utcDate = document.getElementById('utcDate');
const convertButton = document.getElementById('convertButton');
const resultArea = document.getElementById('resultArea');

const convert = (event) => {
    event.preventDefault()
    var date = new Date(utcDate.value.trim())
    resultArea.innerHTML = [
        { label: 'LOCAL', text: date.toString() },
        { label: 'UTC', text: date.toUTCString() }
    ].map(x => `<div><span class="label">${x.label}</span><span class="data">${x.text}</span></div>`).join('')
}

convertForm.onsubmit = convert
utcDate.onkeyup = convert

utcDate.focus()
