console.log('test')

// variabelen
var eiElement = document.querySelector(".eiernoedels");
var imageElement = document.querySelector(".bord");

var volkorenElement = document.querySelector(".volkorennoedels");

var rijstElement = document.querySelector(".rijstnoedels");

var basisElement = document.querySelector(".basis");

var favorietenElement = document.querySelector(".favorieten");

var sausElement = document.querySelector(".saus");

var kleurenLijst = ["#BA1900", "#FDAC00"]; 


// functions (Joni Hahn , Lotte Veerman en Sander Oudejans geholpen bij de functions)

// functions image
function changeImageE(){
    imageElement.src = "images/eiernoedels.svg";
};

function changeImageV(){
    imageElement.src = "images/garnalen.svg";
};

function changeImageR(){
    imageElement.src = "images/saus.svg";
};

// functions button colors
function changeButtonB(){
    document.querySelector(".basis").style.background = (kleurenLijst[0]);
    document.querySelector(".favorieten").style.background = (kleurenLijst[1]);
    document.querySelector(".saus").style.background = (kleurenLijst[1]);
};

function changeButtonF(){
    document.querySelector(".basis").style.background = (kleurenLijst[1]);
    document.querySelector(".favorieten").style.background = (kleurenLijst[0]);
    document.querySelector(".saus").style.background = (kleurenLijst[1]);
};

function changeButtonS(){
    document.querySelector(".basis").style.background = (kleurenLijst[1]);
    document.querySelector(".favorieten").style.background = (kleurenLijst[1]);
    document.querySelector(".saus").style.background = (kleurenLijst[0]);
};


// functions button text
function changeButtontextF(){
    document.querySelector(".eiernoedels").innerHTML = "Champignons";
    document.querySelector(".volkorennoedels").innerHTML = "Garnalen";
    document.querySelector(".rijstnoedels").innerHTML = "Cashewnoten";
    document.querySelector("h1").innerHTML = "KIES JE FAVORIET";
    document.querySelector("h2").innerHTML = "€1,10";
    document.querySelector(".eiernoedels").className = "favorietenknoppen";
};

function changeButtontextS(){
    document.querySelector(".favorietenknoppen").innerHTML = "Tokyo";
    document.querySelector(".volkorennoedels").innerHTML = "Bankok";
    document.querySelector(".rijstnoedels").innerHTML = "Hong Kong";
    document.querySelector("h1").innerHTML = "KIES JE SAUS";
    document.querySelector("h2").innerHTML = "Gratis";
    document.querySelector(".eiernoedels").className = "sausknoppen";
};

function changeButtontextE(){
    document.querySelector(".totaal").innerHTML = "4,90";
};

function changeButtontextV(){
    document.querySelector(".totaal").innerHTML = "6,00";
};


// sound (Maaike Brugts bij geholpen)
var eiElement = document.querySelector(".eiernoedels");
console.log(eiElement);

function playAudio(){
var audioElement = new Audio ("sound/geld.mp3");
audioElement.play();
}

eiElement.addEventListener("click", playAudio);
volkorenElement.addEventListener("click", playAudio);
rijstElement.addEventListener("click", playAudio);


// if else (Jessy Pasay en Thomas Jansen bij geholpen)
var number = 6;
var rijstElement = document.querySelector(".rijstnoedels");
var totaalElement = document.querySelector(".totaal");

rijstElement.addEventListener("click", function(){

var optellen = number + 0;
number = optellen;
totaalElement.innerText = number;

if (optellen == 6){
    alert("Bestellen maar!");
} else{
    (optellen < 6)
    alert("Niet genoeg aangeklikt.")
}
});


// addEventListeners
eiElement.addEventListener("click",changeImageE);
eiElement.addEventListener("click", changeButtontextE);

volkorenElement.addEventListener("click",changeImageV);
volkorenElement.addEventListener("click", changeButtontextV);

rijstElement.addEventListener("click", changeImageR);

basisElement.addEventListener("click", changeButtonB);

favorietenElement.addEventListener("click", changeButtonF);

sausElement.addEventListener("click", changeButtonS);

favorietenElement.addEventListener("click", changeButtontextF);

sausElement.addEventListener("click", changeButtontextS);