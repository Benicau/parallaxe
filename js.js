const zoneParalax = document.querySelectorAll('.parallax')
zoneParalax.forEach(zone=>{
    const parallax = zone.querySelectorAll('.layer')
    const move = {
        left:0,
        top : 0
    }
window.addEventListener('mousemove',e=>{
   move.left = (e.pageX-zone.offsetLeft) / zone.offsetWidth * 2 
   move.top = (e.pageY-zone.offsetTop) / zone.offsetHeight * 2 
                   //console.log(move)
   moveOBJ()
})
const moveOBJ = () => {

parallax.forEach(elem=>{
   const delta = parseFloat(elem.getAttribute('data-move'))
   const x = parseFloat(elem.getAttribute('data-x'))
   const y = parseFloat(elem.getAttribute('data-y'))
   elem.style.left = x + move.left*delta + "%"
   elem.style.top = y + move.top*delta + "%"
})

}
})

const banniere = document.querySelector(".banniere")
const rotation = document.querySelector(".rotation")
var rot = 0 
var rotDegre

rotation.addEventListener('mouseover', e=>{   
    banniere.style.visibility = "visible"
    clearInterval(rotDegre)
    rot = 0 
    degreRotation ()
    rotDegre = setInterval ( degreRotation,5)
})


 
function degreRotation () {
rot+=1
if(rot==360)
{
    rot=0
    clearInterval(rotDegre)
    banniere.style.visibility = "hidden"
}
rotation.style.transform = "rotate(" + rot + "deg)"
}
