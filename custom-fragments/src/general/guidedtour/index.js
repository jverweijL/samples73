introJs().setOptions({
  steps: [{
    intro: "Hello world!"
  }, {
    element: document.querySelector('span.sign-in'),
    intro: "Click here to login!"
  }]
}).start();