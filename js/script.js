$(function() {
  var usuario = "",
      pass = "";

window.history.forward();
//Evento del boton enviar
$("#btnEnviar").click(function()
{
  usuario = document.getElementById("usuario").value;
  pass = document.getElementById("pass").value;
  if(usuario =="user" && pass == "pass")
  {
    window.location.href ="./contenido/inicio.html";
    usuario = document.getElementById("usuario").value;
    pass = document.getElementById("pass").value;
  }else
  {
    $("#error").html('Usuario o contraseña incorrectos');
    $("#error").show();
    console.log(usuario +"  "+ pass);
  }
})

//Encabezado
$("#error").hide();
$("#inc-header").html('<div class="cent">'
                        +'<div class="logo">Programming Learning</div>'
                        +'<nav>'
                        +'<a href="./inicio.html">Inicio</a>'
                        +'<a href="./productos.html">Productos</a>'
                        +'<a href="./ejemploprogramacion.html">Ejemplos</a>'
                        +'<a href="./acercade.html">Acerca de</a>'
                        +'<a href="http://localhost/programminglearning/index.html">Cerrar sesión</a>'
                        +'</nav> </div>'
                      );

$("#inc-header2").html('<div">'
                        +'<div class="logo">Programming Learning</div></div>'
  );
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0)
  {
    $('header').addClass('header2');
  }else {
    $('header').removeClass('header2');
  }
});

//--------
//Pie de pagina
$(".pie").html('Desarrollado por: Inmysion');
//--------------

  //Funcion para obtener el id de un elemento del DOM
  function nom_div(div)
  {
    return document.getElementById(div);
  }
})
