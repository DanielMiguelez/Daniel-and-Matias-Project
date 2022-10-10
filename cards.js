 //manipalacion de datos DOM
 let user = JSON.parse(localStorage.getItem("users"));
 console.log(user);
 const div_usuarios = document.querySelector('.pintarDatos');
 console.log(div_usuarios);
 
 //vacimos div
 function actualizarUsuario(){
 
 while (div_usuarios.firstChild){
     div_usuarios.removeChild(div_usuarios.firstChild);
     }
 
 //pintra datos en cards
 for (let i = 0; i < user.length; i++){
     const div_card = document.createElement('div');
     div_card.className = "cards"
     div_card.innerHTML =
    `
    <div class="card-deck">
  <div class="card bg-primary"><br><br><br><br><br>
  <b>Usuario</b> ${i + 1}
    <div class="card-body text-center"><br>
    <div class="list-group-item"><div><b>NOMBRE:</b></div> <div>${user[i].name}</div><br>
    <div class="list-group-item"><div><b>COREO:</b></div> <div>${user[i].email}</div><br>
    <div class="list-group-item"><div><b>CONTRASEÑA:</b></div> <div>${user[i].contra1}</div><br>
    </div>
  </div>    
    `
 div_usuarios.appendChild(div_card);
 
     }
 }
 
 actualizarUsuario()
 
 setInterval("location.reload()",3000);