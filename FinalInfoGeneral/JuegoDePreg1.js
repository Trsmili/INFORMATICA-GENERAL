

    //Creo un Array con las preguntas asignadas.
	var preguntas =['¿Cancer es un signo de...?','¿Cual es el primer signo del zodiaco?',
	'¿Cual es el signo mas sensible?','¿Cual es el signo mas engreido?',
	'¿Cual es el ultimo signo del zodiaco?','¿Capricornio es un signo de...?',];
	var respuestas=['AGUA','ARIES','PISCIS','LEO','PISCIS','TIERRA',];
	//Un Array con las respuestas.
	var puntaje1 =0;//Inicializo variable contador en 0
	var actual =0;


   function iniciartod()
   //funcion con boton para que aparezcan el juego del nivel 1 y se inhabilite el boton de iniciar
   {
     document.getElementById('nivel1').style.display='block';
     document.getElementById('juego').style.display='block';
     document.getElementById('iniciartodo').style.display='none';
   }



	function iniciar()
	 {  
        document.getElementById('preg').innerHTML= preguntas[actual];
	 	document.juego.inicio.disabled=true;
	 	document.juego.resp.disabled=false;
     }

     function responder()
     {
     	respuestasusuario=document.juego.user.value.toUpperCase();
     	if (respuestasusuario==respuestas[actual])
     		{   
     			alert('¡Respuesta Correcta!');
     			puntaje1=puntaje1+5;
     		} else{
     			     alert('¡Respuesta INCORRECTA!');
                  }
        cambiarpregunta();
     }

     function cambiarpregunta()
     {
     	actual++; //cambio de pregunta, sumo uno más a la actual
     	if (actual>= preguntas.length)
     		{
     			alert('No hay más preguntas'); //si se supera la cantidad de preguntas, termina
     			document.juego.verif.disabled=false;
     			document.juego.resp.disabled=true;// por lo que deshabilito para poner respuestas.
            } else {
            document.getElementById('preg').innerHTML= preguntas[actual]; //muestro esa pregunta con el nuevo valor de actual
     	    document.juego.user.value = ''; // borro lo que el usuario escribió antes para que haya una nuevaresp
     	    }
     	
     }

     function verificar()
     {  
     	 if (puntaje1<15)

     	{   alert(' No has pasado de nivel - El puntaje obtenido en el nivel 1 fue de ' + puntaje1);
            document.getElementById('intentalodenuevo').style.display='block';
     		document.getElementById('perder').style.display='block';
     		document.getElementById('juego').style.display='none';
     		document.getElementById('nivel1').style.display='none';
                        
     	} else {  
     		     alert('¡Has pasado al siguiente Nivel!');
     		     alert('El puntaje obtenido en el nivel 1 fue de ' + puntaje1);
     	         document.getElementById('nivel1').style.display='none';
     	         document.getElementById('juego').style.display='none';
     	         document.getElementById('nivel2').style.display='block';
                 document.getElementById('juego2').style.display='block';

               }
     }



    var preguntas2= [' ¿¿De que signo son los nacidos entre el 20 de marzo al 20 de abril??', ' ¿A que signo lo simboliza un Leon?',
    '¿A que signo lo simboliza una balanza?', ' ¿De que signo son los nacidos entre el de 22 de dic y 20 de enero?',
    '¿Los de leo en que mes nacieron?', '¿En que mes nacieron los de Cancer',];
    var respuestas2= ['Tauro', 'Leo', 'Libra', 'Capriconrio', 'Agosto', 'Julio',];
    var puntaje2 =0;
    var actual2=0;

 function verificar2()

    {

      if (document.juego2.selectnivel2preg1.value=='Tauro')
        {
           puntaje2=puntaje2+10;
      }
      if (document.juego2.selectnivel2preg2.value=='Leo')
        {
            puntaje2=puntaje2+10;
      }
      if (document.juego2.selectnivel2preg3.value=='Libra')
        {
            puntaje2=puntaje2+10;
      }
      if (document.juego2.selectnivel2preg4.value=='Capriconrio') 
        {
            puntaje2=puntaje2+10;
      }
      if (document.juego2.selectnivel2preg5.value=='Agosto') 
        {
            puntaje2=puntaje2+10;
        }
      if (puntaje2>=40)
        {
      alert('El puntaje sumado en este nivel es de: ' + puntaje2);
      document.juego2.verif2.disabled = 'true'
      document.getElementById('sectionnivel2').style.display='none';
      document.getElementById('Has Ganado').style.display='none';
      }else{
        document.getElementById('sectionnivel2').style.display='none';
        document.getElementById('perder2').style.display='block';
       }
      
    }


    var totalpuntaje=puntaje1+puntaje2;
