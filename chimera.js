function chimera() {
  fetchJsonWithCreds('/asset-bank/go/reverse-proxy/features')
    .then(enabledFeatures => {
      if (enabledFeatures.features.includes('ANNOTATIONS')) {
        enableAnnotations();
      } else {
        console.log('Feature not enabled')
      }
    })

  function fetchJsonWithCreds(url) {
    return fetch(url, { credentials: 'include' })
      .then(response => response.json())
  }

  function enableAnnotations() {
    const button = document.createElement('button')
    button.innerHTML = 'Annotation';
    button.addEventListener('click', fetchAnnotation)

    insertAfter(document.querySelector('.js-notifications'), button)
  }

  function fetchAnnotation() {
    fetchJsonWithCreds('/asset-bank/go/reverse-proxy/annotations/test')
      .then(annotation => alert(JSON.stringify(annotation)));
  }

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}

chimera()
