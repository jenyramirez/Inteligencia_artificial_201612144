function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN" ;
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

function opcionEnsuciar(){
    const estado = ["DIRTY" , "CLEAN"];
    const random= Math.floor(Math.random() * estado.length);
    return estado[random];
}


function cambiarEstado(){
    const estado = ["1" , "2"];
    const random= Math.floor(Math.random() * estado.length);
    if(estado[random] == "1"){
        states[1] = "DIRTY";
    }
    else if(estado[random] == "2"){
        states[2] = "DIRTY";
    }
    return estado;
}


function limpiarEnsuciar(){
    const estado = ["1" , "2"];
    const random= Math.floor(Math.random() * estado.length);
    var resultado;
    if(estado[random] == "1"){
        resultado = "CLEAN";
    }
    else if(estado[random] == "2"){
        resultado = "DIRTY";
    }
    return resultado;
}

function test(states){
       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);


       if(location == "A" && action_result == "CLEAN" && states[1] == "DIRTY" && states[2] == "DIRTY"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/1.png\">";
       }
       else if(location == "A" && action_result == "RIGHT" && states[1] == "CLEAN" && states[2] == "CLEAN"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/4.png\">";
       }
       else if(location == "A" && action_result == "RIGHT" && states[1] == "CLEAN" && states[2] == "DIRTY"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/2.png\">";
       }
       else if(location == "A" && action_result == "DIRTY" && states[1] == "DIRTY" && states[2] == "CLEAN"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/6.png\">";
       }
       if(location == "A" && action_result == "CLEAN" && states[1] == "DIRTY" && states[2] == "CLEAN"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/6.png\">";
            action_result= limpiarEnsuciar();
       }
       else if(location == "B" && action_result == "CLEAN" && states[1] == "CLEAN" && states[2] == "DIRTY"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/3.png\">";
       }
       else if(location == "B" && action_result == "LEFT" && states[1] == "CLEAN" && states[2] == "CLEAN"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/5.png\">";
       }
       else if(location == "B" && action_result == "LEFT" && states[1] == "DIRTY" && states[2] == "CLEAN"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/7.png\">";
        }
       
        
       document.getElementById("log").innerHTML+= "<table><tr><td>"+
                                                  "Location: ".concat(location).concat(" | Action: ").concat(action_result) +
                                                  "<br>".concat(states[1]).concat(" | ").concat(states[2]) +
                                                  "<br>-----------------><br>";
       document.getElementById("log").innerHTML+= "</td>";

       if (action_result == "CLEAN"){
          if (location == "A"){      
            states[1] = "CLEAN"; 
          }
          else if (location == "B"){
            states[2] = "CLEAN";
          }
          
       }
       else if (action_result == "RIGHT"){
            states[0] = "B";
       } 
       else if (action_result == "LEFT") {
           states[0] = "A";		
       }

       if(states[1] == "CLEAN" && states[2] == "CLEAN"){
            if(location == "A" && action_result == "RIGHT"){
                var estado= cambiarEstado();
                action_result= "DIRTY";
                location= "B";
            }
            else if(location == "B" && action_result == "LEFT"){
                var estado= cambiarEstado();
                action_result= "DIRTY";
                location= "A";
            }

       }

       if(location == "B" && action_result == "LEFT" && states[1] == "DIRTY" && states[2] == "CLEAN"){
            action_result= opcionEnsuciar();
            if(action_result == "DIRTY"){
                states[2]= "DIRTY"
            }
            else if(action_result == "CLEAN"){
                states[1] = "CLEAN"
            }
        }


       

       if(location == "A" && action_result == "CLEAN" && states[1] == "CLEAN" && states[2] == "DIRTY"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/2.png\">";
       }
       if(location == "A" && action_result == "CLEAN" && states[1] == "CLEAN" && states[2] == "CLEAN"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/5.png\">";
       }
       else if(location == "A" && action_result == "RIGHT" && states[1] == "CLEAN" && states[2] == "DIRTY"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/3.png\">";
       }
       else if(location == "A" && action_result == "DIRTY" && states[1] == "DIRTY" && states[2] == "CLEAN"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/6.png\">";
       }
       else if(location == "A" && action_result == "DIRTY" && states[1] == "CLEAN" && states[2] == "DIRTY"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/2.png\">";
       }
       else if(location == "B" && action_result == "CLEAN" && states[1] == "CLEAN" && states[2] == "CLEAN"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/4.png\">";
       }
       else if(location == "B" && action_result == "DIRTY" && states[1] == "DIRTY" && states[2] == "CLEAN"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/7.png\">";
            action_result= opcionEnsuciar();
       }
       else if(location == "B" && action_result == "DIRTY" && states[1] == "CLEAN" && states[2] == "DIRTY"){
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/3.png\">";
            action_result= opcionEnsuciar();
       }
       else if(location == "B" && action_result == "DIRTY" && states[1] == "DIRTY" && states[2] == "DIRTY"){
            //Se termina le ejecuacion es el ultimo estado
            document.getElementById("log").innerHTML+="<img width=\"200px\" src=\"./Imagenes/8.png\">";
            var timer = setBgPosition();
            clearInterval(timer);
       }


       document.getElementById("log").innerHTML+= "<br><td>"+
                                                  "Location: ".concat(location).concat(" | Action: ").concat(action_result) +
                                                  "<br> ".concat(states[1]).concat(" | ").concat(states[2])
       document.getElementById("log").innerHTML+= "</td></tr>";
       document.getElementById("log").innerHTML+= "</table><br>";
       document.getElementById("log").innerHTML+="<br>--------------------------------------------------------------------------<br><br><br>";
       


 setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);