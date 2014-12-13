//VARIABLES

//FUNCIONES

//fundido al aparecer
function home_fadein(){
	$('body').fadeIn(1300);
};
//cargar las referencias de navbar en div contenido cuando se hace click en el enlace
function carga_contenido(id){
	$('#contenido').fadeOut(150);
	$('#contenido').load('./'+id+'.html');
	$('#contenido').fadeIn(300);
};
//agrandar los avatars
function agranda_avatars(){
  $('#avatar img').animate({height:'80px'}, 300);
  $("#nombrepub").animate({fontSize:'3em'}, 300);
};
//volver al estado inicial los avatars
function inicial_avatars(){
  $('#avatar img').animate({height:'55px'}, 300);
  $("#nombrepub").animate({fontSize:'2em'}, 300);
};


//EVENTOS

$(document).ready(function(){
  carga_contenido('home');
  //fundido inicial
  home_fadein();
  //cargas al hacer click en elementos de navbar
	$('#home').click(function(){
    carga_contenido('home');
	});
	$('#eventos').click(function(){
    carga_contenido('eventos');
	});
	$('#fotogaleria').click(function(){
    carga_contenido('fotogaleria');
	});
	$('#ofertas').click(function(){
    carga_contenido('ofertas');
	});
	$('#futbol').click(function(){
    carga_contenido('futbol');
	});
	$('#contacto').click(function(){
    carga_contenido('contacto');
	});
  //animacion cuando el raton esta sobre el logo
  $("#logo").hover(function(){
    agranda_avatars();
    },function(){
    inicial_avatars();
  });
});