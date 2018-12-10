// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeinstallprompt

module.exports = function () {
  return new Promise(function (resolve, reject) {
    if ('onbeforeinstallprompt' in window) {
      window.addEventListener('beforeinstallprompt', deferredPrompt => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        deferredPrompt.preventDefault()

        const prompt = () => {
          // hide our user interface that shows our A2HS button
          // Show the prompt
          deferredPrompt.prompt()
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt')
            } else {
              console.log('User dismissed the A2HS prompt')
            }
            deferredPrompt = null
          })
        }

        resolve(prompt)
      })
    } else {
      // not support
      reject(new Error(`'onbeforeinstallprompt' not support on current browser.`))
    }
  })
}
