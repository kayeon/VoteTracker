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
var kittyPics = [k1,k2,k3,k4,k5,k6,k7,k8,k9,k10,k11,k12,k13];
//the displayedCats array gets values pushed into it each time
//a new set of photos loads
var displayedCats = [];


$(document).ready(function(){
  $('#votedirections').append('Vote on which cat you find cuter. Click to vote!');
})

//the getKitties function fills an array(displayedCats) with two
//random numbers to correspond with a value in the kittyPics array.
var getKitties = function(){

  for(var x= 0; x < 2; x+= 1){
    var number = Math.floor(Math.random() * 13);
    displayedCats.push(number);
  }
  if (displayedCats[0] === displayedCats[1]){
    displayedCats.splice(1, 1, (displayedCats[0]-1));
  }
  console.log(displayedCats);
  //save kitty info for later use

}
//I will now write another function which takes each value from the
//displayedCats array (generated using the getKitties function)
//and uses their name value to print an image to the page
var printKitties = function(){
  displayedCats = [];
  getKitties();

  var firstPic = kittyPics[displayedCats[0]];
  var secondPic = kittyPics[displayedCats[1]];

  var countOne = firstPic.views += 1;
  var countTwo = secondPic.views += 1;

  var catNameOne = firstPic.name;
  var catNameTwo = secondPic.name;

  var catVotesOne = firstPic.votes +=1;
  var catVotesTwo = secondPic.votes +=1;

  console.log('views: ' + countOne);
  console.log('views: ' + countTwo);

  console.log('name: ' + catNameOne);
  console.log('name: ' + catNameTwo);

  console.log('votes: ' + catVotesOne);
  console.log('votes: ' + catVotesTwo);


 $(document).ready(function(){
    $('#kittyOne').append('<img id=\'kat\' width="150px" height="150px" src="pics/'+ catNameOne + '.jpg">');
    $('#kittyTwo').append('<img id=\'catt\' width="150px" height="150px" src="pics/'+ catNameTwo + '.jpg">');
 })

 $(document).ready(function(){
  $('#kittyOne').click(function(){
    //$(this).css('border', 'solid 2px red');
    $(this).addClass('colorIt');
    k1.votes += 1;
  });
  });

}

 $(document).ready(function(){
  $('#kittyTwo').click(function(){
    //$(this).css('border', 'solid 2px red');
    $(this).addClass('colorIt');
    $(this).votes += 1;
  });
  });

$(document).ready(function(){
  $('#vote').click(function(){
    printKitties();
    $('#vote').remove();
  });
});

$(document).ready(function(){
  $('#again').click(function(){
    $('#kittyOne').empty();
    $('#kittyTwo').empty();
    $('#kittyOne').removeClass('colorIt');
    $('#kittyTwo').removeClass('colorIt');
    printKitties();
  });
});


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



