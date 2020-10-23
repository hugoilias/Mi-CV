$(document).ready(function () {
  $("body").addClass("js");
  var $menu = $("#menu"),
    $menulink = $(".menu-link");
  $links = $("#menu").find("a");

  $menulink.click(function () {
    $menulink.toggleClass("active");
    $menu.toggleClass("active");
    return false;
  });
  $links.click(function () {
    $menulink.toggleClass("active");
    $menu.toggleClass("active");
  });
});


let animado = document.querySelectorAll('.cont-tec');

const mostrarScroll = () => {

  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 300 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add('mostrar');
    }
  }
}

window.addEventListener('scroll', mostrarScroll);
