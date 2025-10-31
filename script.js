window.onload = function () {
  let botones = document.querySelectorAll("button");

  botones.forEach(function (boton) {
    boton.onclick = function () {
      let producto = boton.parentElement;
      let nombre = producto.querySelector("h3").textContent;
      let imagen = producto.querySelector("img").src;
      let precio = producto.querySelector(".precio").textContent

      let item = { nombre: nombre, imagen: imagen, precio:precio};

      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(item);
      localStorage.setItem("carrito", JSON.stringify(carrito));

      window.location.href = "carrito.html";
    };
  });
};
