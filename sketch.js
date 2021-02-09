var ball;
var database, position;
function setup(){
    database=firebase.database();
    //we are creating a database from firebase database and storing it inside the variable
    console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var locationOfChild=database.ref('ball/position')
    //.ref function is used to refer to the location
    locationOfChild.on("value",readOp,shoerr)
    //.on function is used to read the value
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({x:ball.x+x, y:ball.y+y})
   //.set function is used to write the values
}
function readOp(data){
position=data.val();
//data.val function helps to get the value from database
//data is just a parameter in which you will get the value and that value we are storing inside the position
//firebase works on Json 
ball.x=position.x;
ball.y=position.y
}

function shoerr(){
    console.log("error");
}