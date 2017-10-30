$(function() {
  var usuario = "",
      pass = "";

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
                        +'<div id="loguser"></div>'
                        +'<nav>'
                        +'<a href="./inicio.html"Inicio>Inicio</a>'
                        +'<a href="#Productos">Productos</a>'
                        +'<a href="#Ejemplos">Ejemplos</a>'
                        +'<a href="./acercade">Acerca de</a>'
                        +'<a href="http://localhost/programminglearning/index.html">Cerrar sesión</a>'
                        +'</nav> </div>'
                      );
$("#inc-header2").html('<div class="cent">'
                        +'<div class="logo">Programming Learning</div></div>'
  );
  console.log(usuario +"  "+ pass);
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
$("#pie").html('<div class="cent">Desarrollado por: Inmysion</div>');
//--------------

  //Funcion para obtener el id de un elemento del DOM
  function nom_div(div)
  {
    return document.getElementById(div);
  }
})
