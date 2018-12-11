let deferredPrompt
let prompt
let trigger
if ('onbeforeinstallprompt' in window) {
  window.addEventListener('beforeinstallprompt', handler)
}

function handler (e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e

  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(function (choiceResult) {
    if (choiceResult.outcome === 'accepted') {
      // User accepted the A2HS prompt
      window.removeEventListener('beforeinstallprompt', handler)
      if (trigger) trigger.removeEventListener('click', prompt)
      deferredPrompt = prompt = null
    } else {
      // User dismissed the A2HS prompt
    }
  })

  prompt = function () {
    // Show the prompt
    deferredPrompt.prompt()
  }
}

trigger = document.querySelector('#test')
trigger.addEventListener('click', function () {
  if (typeof prompt === 'function') prompt()
})
