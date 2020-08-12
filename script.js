const myProblem1 = ( ) => {
    var answOne = document.getElementById("input1").value;
        if (answOne == 4) {
            return "Good Job!";
        } else
            return "Try Again";
}
const myCalc1 = ( ) => {
    document.getElementById("demo1").innerHTML = myProblem1( );
};

const myProblem2 = ( ) => {
    var answTwo = document.getElementById("input2").value;
        if (answTwo == 9) {
            return "Good Job!";
        } else
            return "Try Again";
}
const myCalc2 = ( ) => {
    document.getElementById("demo2").innerHTML = myProblem2( );
};

const myProblem3 = ( ) => {
    var answThree = document.getElementById("input3").value;
        if (answThree == 16) {
            return "Good Job!";
        } else
            return "Try Again";
} 
const myCalc3 = ( ) => {
    document.getElementById("demo3").innerHTML = myProblem3( );
};

const myProblem4 = ( ) => {
    var answFour = document.getElementById("input4").value;
        if (answFour == 49) {
            return "Good Job!";
        } else
            return "Try Again";
}
const myCalc4 = ( ) => {
    document.getElementById("demo4").innerHTML = myProblem4( );
};

// ANSWERS TO SQUARE ROOT PROBLEMS
const myProblem5 = ( ) => {
            return "6 un.";
}
const squareRoot = ( ) => {
    document.getElementById("demo5").innerHTML = myProblem5( );
};


const myProblem6 = ( ) => {
    return "8 un.";
}
const squareRoot2 = ( ) => {
    document.getElementById("demo6").innerHTML = myProblem6( );
};


const myProblem7 = ( ) => {
    return "9 un.";
}
const squareRoot3 = ( ) => {
    document.getElementById("demo7").innerHTML = myProblem7( );
};

const myProblem8 = ( ) => {
    return "10 un.";
}
const squareRoot4 = ( ) => {
document.getElementById("demo8").innerHTML = myProblem8( );
};

// ****************************************
// Need to fix this. want it to reveal the answers.png image

// BUTTON: REVEAL ANSWERS IMAGE
const myImage = ( ) => {
    return <img src="answers.png" alt="answers" />;
}
const seeMore = ( ) => {
    document.getElementById("seemore").innerHTML = myImage( );
};
// BUTTON:    CLOSE THE EXTRA INFORMATION
const myCloseButton = ( ) => {
    return " ";
}
const seeLess = ( ) => {
    document.getElementById("seemore").innerHTML = myCloseButton( );
};
