var anchor = document.getElementById("inside-hotstar-navigation")
var span1 = document.getElementById("span1")
var span2 = document.getElementById("span2")
var span3 = document.getElementById("span3")
var span4 = document.getElementById("span4")
var span5 = document.getElementById("span5")
var span6 = document.getElementById("span6")
var lineargradient = document.getElementById("linear-gradient")
function hover(){
    if((span1.style.display = "none") ||(span2.style.display = "none") || (span3.style.display = "none") || (span4.style.display = "none")||(span5.style.display = "none") || (span6.style.display = "none")(mainbody.style.backgroundImage = "none") || (lineargradient.style.display = "none")){
        span1.style.display = "inline"
        span2.style.display = "inline"
        span3.style.display = "inline"
        span4.style.display = "inline"
        span5.style.display = "inline"
        span6.style.display = "inline"
        lineargradient.style.display = "block"
    }
}
function hoverleave(){
    if(span1.style.display = "inline"){
        span1.style.display = "none"
        span2.style.display = "none"
        span3.style.display = "none"
        span4.style.display = "none"
        span5.style.display = "none"
        span6.style.display = "none"
        lineargradient.style.display = "none" 
    }
}
anchor.addEventListener("mouseover",hover)
anchor.addEventListener("mouseleave",hoverleave)
// change hotstar images function
var images = document.querySelector(".hotstar_image_source")
var mname = document.getElementById("movie-name")
var mcategory= document.getElementById("moviecategory")
var mstory = document.getElementById("moviestory")
var mdetails = document.getElementById("movieotherdetails")
var buttons = document.getElementById("button1")
var buttons2 = document.getElementById("button2")
var video = document.getElementById("videoss")
var src = video.getAttribute("src")
var animated = document.getElementById("animation-images")

 var data = function changeimg(){
const animatedimages1 = document.getElementById("animation-images").getElementsByTagName("section")[0]
const animatedimages2 = document.getElementById("animation-images").getElementsByTagName("section")[1]
const animatedimages3 = document.getElementById("animation-images").getElementsByTagName("section")[2]
const animatedimages4 = document.getElementById("animation-images").getElementsByTagName("section")[3]
const animatedimages5 = document.getElementById("animation-images").getElementsByTagName("section")[4]
const animatedimages6 = document.getElementById("animation-images").getElementsByTagName("section")[5]
const animatedimages7 = document.getElementById("animation-images").getElementsByTagName("section")[6]
const animatedimages8 = document.getElementById("animation-images").getElementsByTagName("section")[7]
const animatedimages9 = document.getElementById("animation-images").getElementsByTagName("section")[8]
const animatedimages10 = document.getElementById("animation-images").getElementsByTagName("section")[9]
const animatedimages11 = document.getElementById("animation-images").getElementsByTagName("section")[10]
const animatedimages12 = document.getElementById("animation-images").getElementsByTagName("section")[11]
    
    const randomimg = [
        "url(../images/hotstarsrc1.jpg)",
        "url(../images/hotstarsrc2.jpg)",
        "url(../images/hotstarsrc3.jpg)",
        "url(../images/hotstarsrc4.jpg)",
        "url(../images/hotstarsrc5.jpg)",
        "url(../images/hotstarsrc6.jpg)",
        "url(../images/hotstarsrc7.jpg)"
    ]
    const moviename = [
        "Mission: Impossible-Dead Reckoning Part 1",
        "Blue Beetle",
        "Evil Dead Rise",
        "Oppenheimer",
        "John Wick: Chapter 4",
        "Godzilla x Kong: The New Empire",
        "Leo"
      ]
     const moviecategory = {
         catagory1:"Action/Thriller",
         catagory2:"Action/Sci-fi ",
         catagory3:"Horror/Fantasy",
         catagory4:"Thriller/Thriller",
         catagory5:"Action/Thriller",
         category6:"Action/Fantasy",
         category7:"Action/Crime "
     }
     const moviestory ={
         story1:"When U.S. government operative Ethan Hunt (Tom Cruise) and his mentor, Jim Phelps (Jon Voight), go on a covert assignment that takes a disastrous turn, Jim is killed, and Ethan becomes the prime murder suspect.",
         story2:"In the film, recent graduate Jaime Reyes is bestowed with an armor that grants him superpowers after being accidentally chosen by an ancient alien relic known as the Scarab.",
         story3:"A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
         story4:"The film is about the creation of the atomic bomb during World War II. More specifically, it follows J. Robert Oppenheimer, the man responsible for making the Manhattan Project a success.",
         story5:"With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.",
         story6:"Premise. This latest entry follows up the explosive showdown of Godzilla vs. Kong with an all-new cinematic adventure, pitting mighty Kong and the fearsome Godzilla against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
         story7:"Plot. Parthiban Parthi is an animal rescuer and a café owner in Theog, Himachal Pradesh living with his wife, Sathya, son Siddharth Siddhu and daughter Mathi Chintu. One day, Parthi's friend, Joshy Andrews, a forest ranger, calls him to help tame a spotted hyena threatening the townsfolk."
     }
     const movieotherdetails = {
         details1:"2023 • 2h 43m • English • U/A",
         details2:"2023 • 2h 7m • English • U/A",
         details3:"2023 • 1h 37m • English • U/A",
         details4:"2023 • 3h 2m • English • U/A",
         details5:"2023 • 2h 49m • English • U/A",
         details6:"2024 • 141min • English • U/A",
         details7:"2023 • 2h 44m • Tamil • U/A"
     }
    animatedimages1.style.backgroundImage = randomimg[0]
    animatedimages2.style.backgroundImage = randomimg[1]
    animatedimages3.style.backgroundImage = randomimg[2]
    animatedimages4.style.backgroundImage = randomimg[3]
    animatedimages5.style.backgroundImage = randomimg[4]
    animatedimages6.style.backgroundImage = randomimg[5]
    animatedimages7.style.backgroundImage = randomimg[6]
    animatedimages8.style.backgroundImage = randomimg[0]
    animatedimages9.style.backgroundImage = randomimg[1]
    animatedimages10.style.backgroundImage = randomimg[2]
    animatedimages11.style.backgroundImage = randomimg[3]
    animatedimages12.style.backgroundImage = randomimg[4]
   
    var index = Number( [Math.floor(Math.random() * randomimg.length)] )
    var values = randomimg[index];
    images.style.backgroundImage = values;

   if(values === 'url(../images/hotstarsrc3.jpg)'){
    mname.textContent = moviename[index]
    // console.log(moviename.name3)
    mcategory.textContent = moviecategory.catagory3
    // console.log(moviecategory.catagory3)
    mstory.textContent = moviestory.story3
    // console.log(moviestory.story3)
    mdetails.textContent = movieotherdetails.details3
    animatedimages3.style.border = "2px solid white"
    animatedimages10.style.border = "2px solid white"
    animatedimages3.style.opacity = "1.0"
    animatedimages10.style.opacity = "1.0"
    buttons.style.display = "block"
   }
   else{
    animatedimages3.style.border = "none"
    animatedimages10.style.border = "none"
    animatedimages3.style.opacity = "0.7"
    animatedimages10.style.opacity = "0.7"
   }
    if(values === 'url(../images/hotstarsrc2.jpg)'){
    mname.textContent = moviename[index]
    // console.log(moviename.name2)
    mcategory.textContent = moviecategory.catagory2
    // console.log(moviecategory.catagory2)
    mstory.textContent = moviestory.story2
    // console.log(moviestory.story2)  
    buttons.style.display = "block" 
    animatedimages2.style.border = "2px solid white"
    animatedimages2.style.opacity = "1.0"
    animatedimages9.style.border = "2px solid white"
    animatedimages9.style.opacity = "1.0"
   }
   else{
    animatedimages2.style.border = "none"
    animatedimages2.style.opacity = "0.7"
    animatedimages9.style.border = "none"
    animatedimages2.style.opacity = "0.7"
   }
    if(values === 'url(../images/hotstarsrc1.jpg)'){
    mname.textContent = moviename[index]
    // console.log(moviename.name1)
    mcategory.textContent = moviecategory.catagory1
    // console.log(moviecategory.catagory1)
    mstory.textContent = moviestory.story1
    // console.log(moviestory.story1)
    mdetails.textContent = movieotherdetails.details1
    animatedimages1.style.border = "2px solid white"
    animatedimages1.style.opacity = "1.0"
    animatedimages8.style.border = "2px solid white"
    animatedimages8.style.opacity = "1.0"
    buttons.style.display = "block" 
   }
   else{
    animatedimages1.style.border = "none"
    animatedimages8.style.border = "none"
    animatedimages1.style.opacity = "0.7"
    animatedimages8.style.opacity = "0.7"
   }
   if(values === 'url(../images/hotstarsrc4.jpg)'){
    mname.textContent = moviename[index]
    // console.log(moviename.name4)
    mcategory.textContent = moviecategory.catagory4
    // console.log(moviecategory.catagory4)
    mstory.textContent = moviestory.story4
    // console.log(moviestory.story4)
    mdetails.textContent = movieotherdetails.details4
    buttons.style.display = "block" 
    animatedimages4.style.border = "2px solid white"
    animatedimages11.style.border = "2px solid white"
    animatedimages4.style.opacity = "1.0"
    animatedimages11.style.opacity = "1.0"
   }
   else{
    animatedimages4.style.border = "none"
    animatedimages11.style.border = "none"
    animatedimages4.style.opacity = "0.7"
    animatedimages11.style.opacity = "0.7"
   }
    if(values === 'url(../images/hotstarsrc5.jpg)'){
    mname.textContent = moviename[index]
    // console.log(moviename.name5)
    mcategory.textContent = moviecategory.catagory5
    // console.log(moviecategory.catagory5)
    mstory.textContent = moviestory.story5
    // console.log(moviestory.story5)
    mdetails.textContent = movieotherdetails.details5
    buttons.style.display = "block"
    animatedimages5.style.border = "2px solid white"
    animatedimages12.style.border = "2px solid white"
    animatedimages5.style.opacity = "1.0"
    animatedimages12.style.opacity = "1.0"
   }
   else{
    animatedimages5.style.border = "none"
    animatedimages12.style.border = "none"
    animatedimages5.style.opacity = "0.7"
    animatedimages12.style.opacity = "0.7"
   }
    if(values === 'url(../images/hotstarsrc6.jpg)'){
    mname.textContent = moviename[index]
    mcategory.textContent = moviecategory.category6;
    mstory.textContent = moviestory.story6;
    mdetails.textContent = movieotherdetails.details6;
    animatedimages6.style.border = "2px solid white"
    animatedimages6.style.opacity = "1.0"
    buttons.style.display = "block" 
   }
   else{
    animatedimages6.style.border = "none"
    animatedimages6.style.opacity = "0.7"
   }
   if(values === "url(../images/hotstarsrc7.jpg)"){
    mname.textContent = moviename[index]
    mcategory.textContent = moviecategory.category7;
    mstory.textContent = moviestory.story7;
    mdetails.textContent = movieotherdetails.details7;
    buttons.style.display = "block" 
    animatedimages7.style.border = "2px solid white"
    animatedimages7.style.opacity = "1.0"
   }
   else{
    animatedimages7.style.border = "none"
    animatedimages7.style.opacity = "0.7"
   }
   click = 0
   buttons.onclick = function(){
    click  ++
    if(click === 1){
        mname.style.display = "none"
        mcategory.style.display = "none"
        mstory.style.display = "none"
        mdetails.style.display = "none"
        images.style.backgroundImage = "none"
        animatedimages1.style.display = "none"
        animatedimages2.style.display = "none"
        animatedimages3.style.display = "none"
        animatedimages4.style.display = "none"
        animatedimages5.style.display = "none"
        animatedimages6.style.display = "none"
        animatedimages7.style.display = "none"
        animatedimages8.style.display = "none"
        animatedimages9.style.display = "none"
        animatedimages10.style.display = "none"
        animatedimages11.style.display = "none"
        animatedimages12.style.display = "none"
        if(index === 0){
            video.setAttribute("src","../video/trailer1.mp4")
            video.style.display = "block"
        }
        if(index === 1){
            video.setAttribute("src","../video/trailer2.webm")
            video.style.display = "block"
        }
        if(index ===2){
            video.setAttribute("src","../video/trailer3.mp4")
            video.style.display = "block"
        }
        if(index === 3){
            video.setAttribute("src","../video/trailer4.mp4")
            video.style.display = "block"
        }
        if(index === 4){
            video.setAttribute("src","../video/trailer5.webm")
            video.style.display = "block"
        }
        if(index === 5){
            video.setAttribute("src","../video/trailer6.webm")
            video.style.display = "block"
        }
        if(index ===6){
            video.setAttribute("src","../video/trailer7.mp4")
            video.style.display = "block"
        }
        buttons.textContent = "Exit Trailer"
        buttons.style.marginTop = "100px"
        clearInterval(clear)        
    }
   if(click === 2){
    mname.style.display = "block"
    mcategory.style.display = "block"
    mstory.style.display = "block"
    mdetails.style.display = "block"
    images.style.backgroundImage = "block"
    animated.style.display = "inline-flex"
    buttons.textContent = "Watch trailer"
        animatedimages1.style.display = "block"
        animatedimages2.style.display = "block"
        animatedimages3.style.display = "block"
        animatedimages4.style.display = "block"
        animatedimages5.style.display = "block"
        animatedimages6.style.display = "block"
        animatedimages7.style.display = "block"
        animatedimages8.style.display = "block"
        animatedimages9.style.display = "block"
        animatedimages10.style.display = "block"
        animatedimages11.style.display = "block"
        animatedimages12.style.display = "block"
    video.style.display = "none"
    buttons.style.marginTop = "0px"
    clearInterval(clear)
    clear =  setInterval(data,5000)
   }}}
var clear = setInterval(data,5000)
var scrollgradient = document.getElementById("gradient")
window.addEventListener("scroll",()=>{
    if(window.scrollY>35){
        scrollgradient.style.backgroundColor = "rgba(0, 0, 0, 0.280)"
       }
    if(window.scrollY>50){
        scrollgradient.style.backgroundColor = "rgba(0, 0, 0, 0.308)"
       }
    if(window.scrollY>100){
        scrollgradient.style.backgroundColor = "rgba(0, 0, 0, 0.480)"
       }
   if(window.scrollY>150){
  scrollgradient.style.backgroundColor = "rgba(0, 0, 0, 0.557)"
   }
   if(window.scrollY>250){
    scrollgradient.style.backgroundColor = "rgba(0, 0, 0, 0.668)"
   }
   if(window.scrollY>350){
    scrollgradient.style.backgroundColor = "rgba(0, 0, 0, 0.889)"
   }
   if(window.scrollY>450){
    scrollgradient.style.backgroundColor = "rgba(0, 0, 0)"
   }
   if(window.scrollY>550){
    scrollgradient.style.backgroundColor = "rgba(0, 0, 0)"
   }
   if(window.scrollY<35){
    scrollgradient.style.backgroundColor = "rgba(0, 0, 0, 0)"
   }
   else{
    scrollgradient.style.backgroundImage = "linear-gradient(to top right,#0f101465,transparent)"
   }
})




