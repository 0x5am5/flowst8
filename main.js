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

const nav = document.getElementById('nav')
const watcher = document.createElement('div')
watcher.setAttribute('data-scroll-watcher', '')
nav.before(watcher, )

const navObserver = new IntersectionObserver((entries) => {
    nav.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin: '200px 0px 0px 0px'})

navObserver.observe(watcher)

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