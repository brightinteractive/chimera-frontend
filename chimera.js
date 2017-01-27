function chimera() {
  fetch('/asset-bank/go/reverse-proxy/features', { credentials: 'include' })
    .then(response => response.json())
    .then(enabledFeatures => {
      if (enabledFeatures.features.includes('ANNOTATIONS')) {
        enableAnnotations();
      } else {
        console.log('Feature not enabled')
      }
    })

  function enableAnnotations() {
    const button = document.createElement('button')
    button.innerHTML = 'Annotation';
    button.addEventListener('click', fetchAnnotation)

    insertAfter(document.querySelector('.js-notifications'), button)
  }

  function fetchAnnotation() {
    fetch('/asset-bank/go/reverse-proxy/annotations/test', { credentials: 'include' })
      .then(response => response.json())
      .then(annotation => alert(JSON.stringify(annotation)));
  }

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}

chimera()
