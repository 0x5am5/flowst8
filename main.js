const faqs = Array.from(document.querySelectorAll('[data-faq]'))
if (faqs.length) {
    faqs.forEach(faq => {
        const trigger = faq.querySelector('button')
        trigger.addEventListener('click', (e) => {
            faq.classList.toggle('faq-open')
        })
    })
}

const scrollToLinks = Array.from(document.querySelectorAll('[href^="/#"]'))
if (scrollToLinks.length) {
    scrollToLinks.forEach(link => {
        const target = document.getElementById(link.hash.substr(1))

        if (target) {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                })
            })
        }
    })
}

const nav = document.getElementById('nav')
const watcher = document.createElement('div')
watcher.setAttribute('data-scroll-watcher', '')
nav.before(watcher)

const navObserver = new IntersectionObserver((entries) => {
    nav.classList.toggle('sticking', !entries[0].isIntersecting)
    nav.querySelector(`a.-rotate-3`)?.classList.remove('-rotate-3')
    nav.querySelector(`a.font-bold`)?.classList.remove('font-bold')
    nav.querySelector(`a.text-brand-purple`)?.classList.remove('text-brand-purple')
}, {rootMargin: '200px 0px 0px 0px'})

navObserver.observe(watcher)

let options = {
    timeZone: 'Europe/Rome',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }
const formatter = new Intl.DateTimeFormat("en", options);

function setTime() {
    document.getElementById('time').innerText = formatter.format(new Date())
}
setTime()
setInterval(setTime, 60 * 1000)

const sizeSelector = Array.from(document.querySelectorAll('[data-store-product]'))
if (sizeSelector.length) {
    sizeSelector.forEach(product => {
        const buyButton = product.querySelector('[data-store-buy]')
        product.addEventListener('change', (e) => {
            buyButton.href = e.target.value
        })
    })
}

// const logoBar = document.querySelector('[data-logo-bar]')
// if (logoBar) {
//     const logos = document.querySelector("[data-logo-bar]")
//     const clone = innerBar.cloneNode(true)
//     logos.after(clone)
//     gsap.fromTo('[data-logo-inner]', {
//         x: '0'
//     }, {
//         x: '-100%',
//         repeat: -1,
//         duration: 10,
//         ease: 'none',
//     })
// }

const pageSections = Array.from(document.querySelectorAll('section[id]'))
if (pageSections.length) {
    pageSections.forEach((section, index) => {
        section.setAttribute('data-scroll-section-watcher', index)
        const sectionObserver = new IntersectionObserver((entries) => {
            const sectionId = entries[0].target.id

            if (entries[0].isIntersecting) {
                nav.querySelector(`a.-rotate-3`)?.classList.remove('-rotate-3')
                nav.querySelector(`a.font-bold`)?.classList.remove('font-bold')
                nav.querySelector(`a.text-brand-purple`)?.classList.remove('text-brand-purple')
                nav.querySelector(`a[href*=${sectionId}]`)?.classList.add('-rotate-3')
                nav.querySelector(`a[href*=${sectionId}]`)?.classList.add('font-bold')
                nav.querySelector(`a[href*=${sectionId}]`)?.classList.add('text-brand-purple')
            }

        }, {rootMargin: '0px', threshold: 0.5})
        sectionObserver.observe(section)
    })

}


const paymentLinks = document.getElementById('payment-links')
if (paymentLinks) {
    const tabs = paymentLinks.querySelector('.payment-links-tabs')
    const tabsBody = Array.from(paymentLinks.querySelectorAll('.payment-links-tabs-body'))
    const tabsLabels = Array.from(tabs.querySelectorAll('label'))

    tabs.addEventListener('change', (e) => {
        tabsBody.forEach(tab => tab.classList.add('hidden'))
        tabsLabels.forEach(label => {
            label.classList.remove('text-brand-white')   
            label.classList.remove('bg-brand-purple')   
        })

        document.getElementById(e.target.value).classList.remove('hidden')
        e.target.parentNode.classList.add('text-brand-white')
        e.target.parentNode.classList.add('bg-brand-purple')
    })
}