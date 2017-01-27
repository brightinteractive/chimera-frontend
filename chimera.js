function chimera() {
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

chimera()
