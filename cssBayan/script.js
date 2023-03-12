document.querySelectorAll('.accordion').forEach(
    (el) => {
        let content = el.querySelector('.accordion__content')
        el.addEventListener('mouseover', () => {

            // content.style.maxHeight = content.scrollHeight + 'px'
            content.classList.toggle('active')
        })
        el.addEventListener('mouseout', () => {
            // content.style.maxHeight = null
            content.classList.toggle('active')
        })
        el.addEventListener('click', () => {
            if (content.classList.contains('selected')) {
                content.classList.remove('selected')
            }
            else {
                document.querySelectorAll('.selected').forEach(
                    (el) => {
                        el.classList.remove('selected')
                    })
                content.classList.add('selected')
            }

        })
    }
)