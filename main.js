const faqs = Array.from(document.querySelectorAll('[data-faq]'))
if (faqs.length) {
    faqs.forEach(faq => {
        const trigger = faq.querySelector('button')
        trigger.addEventListener('click', (e) => {
            faq.classList.toggle('faq-open')
        })
    })
}

const scrollToLinks = Array.from(document.querySelectorAll('[href^="#"]'))
if (scrollToLinks.length) {
    scrollToLinks.forEach(link => {
        const target = document.getElementById(link.hash.substr(1))

        if (target) {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: 'smooth'
                })
            })
        }
    })
}

let options = {
    timeZone: 'Europe/Budapest',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  },
formatter = new Intl.DateTimeFormat([], options);

setInterval(() => {
    document.getElementById('time').innerText = formatter.format(new Date())
}, 1000)