/*Name this external file gallery.js*/

function upDate(previewPic){
     document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")"
     console.log("preview")
     document.getElementById("image").innerHTML=previewPic.alt

    
}
   
       function unDo(){
       document.getElementById("image").style.backgroundImage= "URL()"
       document.getElementById("image").innerHTML="Pase el cursor sobre una imagen a continuación para mostrarla aquí."    
       }