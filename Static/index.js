window.onload = function () {
  console.log('document has been loaded')
  var h1 = document.querySelector('.title')
  h1.addEventListener('click', function (e) {
    var target = e.target
    target.style.color = '#e3e3e3'
  })
}
