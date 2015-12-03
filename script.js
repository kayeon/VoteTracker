//first I'll create an array containing the photos of cats
var k1 = "k1";
var k2 = "k2";
var k3 = "k3";
var k4 = "k4";
var k5 = "k5";
var k6 = "k6";
var k7 = "k7";
var k8 = "k8";
var k9 = "k9";
var k10 = "k10";
var k11 = "k11";
var k12 = "k12";
var k13 = "k13";
var kittyPics = [k1,k2,k3,k4,k5,k6,k7,k8,k9,k10,k11,k12,k13];

//this named function generates a random number between 0-12
//then assigns that number to an index value in the kittyPics array




// '<img width="150px" height="150px" src="pics/'+ kittyPics[Math.floor(Math.random() * 13)] + '.jpg">';
$(document).ready(function(){
  $('#votedirections').append('Vote on which cat you find cuter. Click to vote!');
})

$(document).ready(function(){
  $('#kittyOne img').click(function(){
    $(this).css('border', 'solid 2px red');
  });
});

$(document).ready(function(){
  $('button').click(function(){

    var cycleKitties = function(){
    var number = Math.floor(Math.random() * 13);
    return kittyPics[number];
}
var random1 = cycleKitties();
var random2 = cycleKitties();

//create some variables for getting DOM nodes
var frame1 = document.getElementById('kittyOne');
var frame2 = document.getElementById('kittyTwo');

frame1.innerHTML = '<img width="150px" height="150px" src="pics/'+ random1 + '.jpg">';
frame2.innerHTML = '<img width="150px" height="150px" src="pics/'+ random2 + '.jpg">';

  })
});


