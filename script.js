const text = document.querySelector("#text")
const submit = document.querySelector("#submit")
const password = document.querySelector("#password")
const tbody = document.querySelector('#tbody')
const regexname = /^[A-Z]{1}[a-zA-Z]{1,}\s[A-Z]{1}[a-zA-Z]{2,}/
const regexpass = /^[A-Z][a-zA-z]+\.?([a-zA-Z]+)?[\d+]{2,14}$/
submit.addEventListener('click', () => {
    if (!regexname.test(text.value) || !regexpass.test(password.value)) {
        alert('Entered Data Error!!!')
        text.value = ''
        password.value = ''
    } else {
        const tdname=document.createElement('td')
        const tdpass=document.createElement('td')
        tdname.textContent=text.value
        tdpass.textContent=password.value
        tbody.append(tdname,tdpass)
        text.value = ''
        password.value = ''
    }
})

