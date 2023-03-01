
var elemento = document.getElementById("saludos");

document.addEventListener("click", function(evento) {
  if (elemento.style.display !== "none" && evento.target !== elemento) {
    elemento.classList.add("ocultar");
  }
});


document.querySelectorAll('section[id$="sobre mi-content"]').forEach(function(section) {
section.style.display = 'none';}); 


   document.querySelectorAll('a[id^="sobre mi"]').forEach(function(link) {
    link.addEventListener('click', function(event) {
    event.preventDefault();
    var sectionId = this.id.replace('sobre mi', '');
    document.getElementById(sectionId + 'sobre mi-content').style.display = 'block';
     });
    });

 document.querySelectorAll('section[id$="experiencia-content"]').forEach(function(section) {
    section.style.display = 'none';
    });


document.querySelectorAll('a[id^="experiencia"]').forEach(function(link) {
        link.addEventListener('click', function(event) {
        event.preventDefault();
        var sectionId = this.id.replace('experiencia', '');
        document.getElementById(sectionId + 'experiencia-content').style.display = 'block';
         });
        });


document.querySelectorAll('section[id$="habilidades-content"]').forEach(function(section) {
  section.style.display = 'none';
 });
    
document.querySelectorAll('a[id^="habilidades"]').forEach(function(link) {
    link.addEventListener('click', function(event) {event.preventDefault();
    var sectionId = this.id.replace('habilidades', '');
    document.getElementById(sectionId + 'habilidades-content').style.display = 'block';
    }); });


document.querySelectorAll('section[id$="contacto-content"]').forEach(function(section) 
{section.style.display = 'none';
});

document.querySelectorAll('a[id^="contacto"]').forEach(function(link) {
link.addEventListener('click', function(event) {event.preventDefault();
var sectionId = this.id.replace('contacto', '');
document.getElementById(sectionId + 'contacto-content').style.display = 'block';
}); });


