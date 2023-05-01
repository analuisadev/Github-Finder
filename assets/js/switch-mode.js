const SwitchButton = {
    btnLightMode: document.querySelector('.light-mode'),
    btnDarkMode: document.querySelector('.dark-mode'),
    htmlBody: document.body,

    lightMode() {
        this.btnLightMode.classList.add('hide')
        this.btnDarkMode.classList.remove('hide')
        
        this.htmlBody.classList.remove('dark')
        this.htmlBody.classList.add('light')
    },

    darkMode() {
        this.btnLightMode.classList.remove('hide')
        this.btnDarkMode.classList.add('hide')

        this.htmlBody.classList.remove('light')
        this.htmlBody.classList.add('dark')
    }
}

const lightMode = () => SwitchButton.lightMode()

const darkMode = () => SwitchButton.darkMode()