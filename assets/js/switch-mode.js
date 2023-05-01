const SwitchButton = {
    btnLightMode: document.querySelector('.light-mode'),
    btnDarkMode: document.querySelector('.dark-mode'),
    htmlBody: document.body,

    lightMode() {
        SwitchButton.btnLightMode.classList.add('hide')
        SwitchButton.btnDarkMode.classList.remove('hide')
        
        SwitchButton.htmlBody.classList.remove('dark')
        SwitchButton.htmlBody.classList.add('light')
    },

    darkMode() {
        SwitchButton.btnLightMode.classList.remove('hide')
        SwitchButton.btnDarkMode.classList.add('hide')

        SwitchButton.htmlBody.classList.remove('light')
        SwitchButton.htmlBody.classList.add('dark')
    }
}

const lightMode = () => SwitchButton.lightMode()

const darkMode = () => SwitchButton.darkMode()
