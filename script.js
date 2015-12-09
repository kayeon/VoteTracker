//first I'll create objects and an array containing the objects
var k1 = {
            name: "k1",
            votes: 0,
            views:0
          };
var k2 = {
            name: "k2",
            votes: 0,
            views: 0
        };
var k3 = {
            name: "k3",
            votes: 0,
            views: 0
        };
var k4 = {
            name: "k4",
            votes: 0,
            views: 0
          };
var k5 = {
            name: "k5",
            votes: 0,
            views: 0
          };
var k6 = {
            name: "k6",
            votes: 0,
            views: 0
          };
var k7 = {
            name: "k7",
            votes: 0,
            views: 0
          };
var k8 = {
            name: "k8",
            votes: 0,
            views: 0
          };
var k9 = {
            name: "k9",
            votes: 0,
            views: 0
          };
var k10 = {
            name: "k10",
            votes: 0,
            views: 0
          };
var k11 = {
            name: "k11",
            votes: 0,
            views: 0
          };
var k12 = {
            name: "k12",
            votes: 0,
            views: 0
          };
var k13 = {
            name: "k13",
            votes: 0,
            views: 0
          };

//I'm not sure what to do with this but it was recommended that I create it
var voteTracker = {};

var kittyPics = [k1,k2,k3,k4,k5,k6,k7,k8,k9,k10,k11,k12,k13];
//the displayedCats array gets values pushed into it each time
//a new set of photos loads
var displayedCats = [];
var cat1;
var cat2;


$(document).ready(function(){
  $('#votedirections').append('Vote on which cat you find cuter. Click to vote!');
})

//the getKitties function fills an array(displayedCats) with two
//random numbers to correspond with a value in the kittyPics array.
var getKitties = function(){
  displayedCats = [];
  for(var x= 0; x < 2; x+= 1){
    var number = Math.floor(Math.random() * 13);
    displayedCats.push(number);
  }
} ;

var printKitties = function(){

  $('#kittyOne').empty();
  $('#kittyTwo').empty();
  $('#kittyOne').removeClass('colorIt');
  $('#kittyTwo').removeClass('colorIt');

  getKitties();
  if(Number(displayedCats[0]) == Number(displayedCats[1])){
    getKitties(); //am I doing this right?
  }else {
    cat1 = kittyPics[displayedCats[0]];
    cat2 = kittyPics[displayedCats[1]];
    console.log(cat1.name);
    console.log(cat2.name);
  }
  $('#kittyOne').append('<img width="150px" height="150px" src="pics/'+ cat1.name + '.jpg">');
  $('#kittyTwo').append('<img width="150px" height="150px" src="pics/'+ cat2.name + '.jpg">');

  cat1.views += 1;
  cat2.views += 1;
};

$(document).ready(function(){
  $('#vote').click(function(){
    printKitties();
    $('#vote').remove();
  });
});

  $('#kittyOne').click(function(){
    cat1.votes += 1;
    console.log(cat1.votes);
    $(this).addClass('colorIt');
  });
//});
//$(document).ready(function(){
  $('#kittyTwo').click(function(){
    cat2.votes += 1;
    console.log(cat2.votes);
    $(this).addClass('colorIt');
  });
//});










////////
//pretending that nothing underneath this line exists
////////
// $(document).ready(function(){
//   $('#vote').click(function(){
//     getKitties();
//     $('#vote').remove();
//   });
// });

// $(document).ready(function(){
//   $('#again').click(function(){
//     $('#kittyOne').empty();
//     $('#kittyTwo').empty();
//     $('#kittyOne').removeClass('colorIt');
//     $('#kittyTwo').removeClass('colorIt');
//     getKitties();
//   });
// });











//instead of applying css directly to an element,
//apply a class to both photo elements so that when one is clicked on
//it takes on properties and once the page reloads (or the vote button is clicked again)
//the class is removed.

// return kittyPics[number].name;

///////////////////////////////
///////////////////////////////
// $(document).ready(function(){
//   $('button').click(function(){
//     var cycleKitties = function(){
//     var number = Math.floor(Math.random() * 13);
//     return kittyPics[number].name;
//     }
//     var random1 = cycleKitties();
//     var random2 = cycleKitties();

//     //create some variables for getting DOM nodes
//     var frame1 = document.getElementById('kittyOne');
//     var frame2 = document.getElementById('kittyTwo');

//     frame1.innerHTML = '<img width="150px" height="150px" src="pics/'+ random1 + '.jpg">';
//     frame2.innerHTML = '<img width="150px" height="150px" src="pics/'+ random2 + '.jpg">';
//   })
// });



