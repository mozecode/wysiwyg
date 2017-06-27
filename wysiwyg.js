// Create an array of objects that represents famous people.

let people =[
{ title:"Math Goddess",
  name: "Hypatia",
  bio: "One of the first known female mathematicians, she studied astronomy, philosophy, and mathematics first under the tutelage of her father, Theon, who was a member of the Library of Alexandria.  Later, she became a leader in the field of mathematics, co-authoring commentaries and translations of great mathematical treatises with her father.  She also began teaching students from her home, giving others the gift of her knowledge and curiosity. She attracted huge crowds of followers not only with her math-related works, but also with her lectures on the philosophy of Plato and Aristotle.  Unfortunately, her popularity led to her death at the hands of Christian zealots after she became part of a dispute between powerful political and religious figures.",
  image: "images/hypatia.jpg",
  lifespan: {
    birth: "circa 370 CE",
    death:"circa 416 CE"
  }
},

{ title:"Math Goddess",
  name: "Ada Lovelace",
  bio: "Ada Lovelace's mother encouraged her to study mathematics and sciences to distance her daughter from the scandals that surrounded  Lovelace's father, Lord Byron. Lovelace began to correspond with peers in the sciences and mathematics, and as a result of her curiosity and ingenuity, she developed the idea for the world's first computer program.  Her program consisted of a method for calculating a sequence of Bernoulli numbers, a sequence of rational numbers used extensively in number theory.",
  image: "https://thumbs-prod.si-cdn.com/cWInN5kKN86k8n_4XVtIQJRArCA=/800x0/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/0f/2b/0f2bebf8-7e0d-4692-aee1-8e8b36f08d53/ada_lovelace.jpg",
  lifespan: {
    birth: 1815,
    death: 1852
  }
},

{ title:"Math Goddess",
  name: "Katherine Johnson",
  bio: "Supremely gifted in mathematics, Katherine Johnson outstripped all her peers throughout her educational experiences, becoming only the third African-American to earn a PhD in Mathematics in 1937.  She then became a teacher and focused on raising her family. In 1952, she joined the all-black West Area Computing section at the National Advisory Committee for Aeronautics’ Langley laboratory. NACA became NASA not long after the Sputnik launch, and in 1962, Katherine Johnson was called upon to verify the equations that would control the flight path of the capsule in John Glenn’s Friendship 7 mission. As a part of preparations, Glenn asked staff to get Katherine Johnson to run the same numbers by hand.  'If she says they’re good, then I’m ready to go,' said Glenn, speaking of Johnson's perfect calculations.",
  image: "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/26646856911_ca242812ee_o_1.jpg?itok=NQu4uW0H",
  lifespan: {
    birth: 1918,
    death: "present"
  }
}

];//end of person array of 3 objects

// sources:
//https://www.nasa.gov/content/katherine-johnson-biography
// http://www.smithsonianmag.com/science-nature/five-historic-female-mathematicians-you-should-know-100731927/

var counter = 0;
var container = document.getElementById("container");

function printToDOM(people){

for (; counter < people.length; counter++) {
  // Give each person element a unique identifier
  //appendChild
  let personDiv = document.createElement("div");
  personDiv.innerHTML += `<row><div class="person__container card col-md-6" id="person-${counter}" value="${counter}">
    <header><h2>${people[counter].name}, ${people[counter].title}</h2></header>
    <section><img src='${people[counter].image}' alt=''> ${people[counter].bio}</section>
     <section class='userInput' id='userInput'></section>
    <footer>Life: ${people[counter].lifespan.birth} to ${people[counter].lifespan.death}  </footer>
    </div></row>`;

    container.appendChild(personDiv);

    let personCard = document.getElementById(`person-${counter}`);
    console.log ("personCard",personCard);
    personCard.addEventListener("click", function(){
        console.log ("card got clicked");
        let personChoice = event.currentTarget.id;
        removeClass();
        document.getElementById(personChoice).classList.add("clicked");// When you click on one of the person elements, a dotted border should appear around it.
        addFocus();

    });
  }

}

printToDOM(people);

let textarea= document. getElementById("input");

var personContainer = document.getElementsByClassName("person__container");
    personContainer[0].style.background = "lightblue";
    personContainer[1].style.background ="yellow";
    personContainer[2].style.background ="lightblue";
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.

  textarea.addEventListener("keyup", function(event){
          if (event.key === "Enter"){
            clearInput();
          }else{
            mirror();
          }

        });

function getText(){
  let textContent = textarea.value;
  return textContent;
}

function mirror(){
  let clickedEl= document.getElementsByClassName("clicked");
  console.log ("clickedEl",clickedEl[0].childNodes);
  let input = getText();
  clickedEl[0].childNodes[5].innerHTML=`${input}`;

};

function addFocus(){
  textarea.focus();
}
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.

function clearInput(){
  textarea.value ="";
}// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

function removeClass(){
  let clickedEl= document.getElementsByClassName("clicked");
  for(var j=0; j<clickedEl.length; j++){
   clickedEl[j].classList.remove("clicked");
  }
}