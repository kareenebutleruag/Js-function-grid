function getRandom(){
    return "rgb("+randomInt(0, 255) + "," + randomInt(0, 255) + "," + randomInt(0, 255) + ")"
}

function randomInt(start,end){
    return Math.floor(Math.random() * end) + start;
}

setColor(4,5,"green");


$("button").click(function(){
    for(var i=0; i<10; i=i + 1){
        setColor(randomInt(0,9),randomInt(0,9),getRandom());
        // setColor(randomInt(0,9),randomInt(0,9),"rgb(200,100,50)");
    }

})

// function shuffleColors(){
//     for (vari = 0; i < 50; i++) {
//         setColor(random(9,0), randomInt(9,0), getRandomColor())
//     }
// }

// $("button").click(function(){
//     setInterval(shuffleColors, 2);
// })

