 //create countdown fucntion from 10 to blast off
 function countDown() {
    var count = 10;

    // start count at 10
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);


    //counts to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);



    //counts to 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    // counts to 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    // counts to 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    // counts to 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    // counts to 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    // counts to 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    // counts to 2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    // counts to one
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 10000);

    //blastoff 
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "BLASTOFF!!!";
        count = count - 1;

    }, 11000);
 }

    function playCraps(){
      var die1;
      var die1; 
      die1=Math.random();
      die2=Math.random();
      document.getElementById("die1Res").innerHTML = die1;
      document.getElementById("die2Res").innerHTML = die2;


}
