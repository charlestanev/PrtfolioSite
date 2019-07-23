const portfolioContainer = document.querySelector('.portfolio-items')

portfolioContainer.addEventListener('click', e => {
    // console.log(e)
    e.preventDefault()

    const modalToggle = e.target.closest('.portfolio-link')
    // console.log(modalToggle)
    if (!modalToggle) return

    const modal = modalToggle.parentNode.nextElementSibling
    const closeButton = modal.querySelector('.modal-close')

    modal.classList.add('is-open')
    document.body.style.overflowY = 'hidden'


    closeButton.addEventListener('click', _ => {
        modal.classList.remove('is-open')
        document.body.style.overflowY = 'scroll'

    })

    document.addEventListener('keydown', e => {

        if (e.keyCode === 27) {
            modal.classList.remove('is-open')
            document.body.style.overflowY = 'scroll'
        }
    })



})