let rook;
let knight;
let pawn;
let bishop;
let queen;
let king;


class square{
  constructor(col,v=null,type){
    this.size=squareSize
    this.color=col
    this.piece=v
    this.type=type
  }

  setPiece(piece){
    this.piece=piece
  }

  show(x,y,z){
    push()
    translate(x,y,z)
    noStroke()
    fill(this.color,220)
    box(squareSize,10,squareSize)
    if(this.piece!=null){
      push()
      translate(0,-50,0)
      if(this.type!=null){
        fill(this.type,230)
        // specularMaterial(this.type,200)
      }
      scale(0.5)
      model(this.piece)
      pop()
    }
    pop()
  }

}
let x=8;
let y=8;
let z=8;

const boardSize = 864;
const squareSize = boardSize/8;
const squareCenter = squareSize/2;
let p = new square("white")
let col=[0,255]
let choice = 0;
let board=[]

let pieces=[]
let colors=[
      [
        [null,null,null,null,null,null,null,255],
        [null,null,null,null,null,null,255,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,0,null,null,null,null,null,null],
        [0,null,null,null,null,null,null,null],
      ],
      [
        [null,null,null,null,null,null,null,255],
        [null,null,null,null,null,null,255,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,0,null,null,null,null,null,null],
        [0,null,null,null,null,null,null,null],
      ],
      [
        [null,null,null,null,null,null,null,255],
        [null,null,null,null,null,null,255,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,0,null,null,null,null,null,null],
        [0,null,null,null,null,null,null,null],
      ],
      [
        [null,null,null,null,null,null,null,255],
        [null,null,null,null,null,null,255,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,0,null,null,null,null,null,null],
        [0,null,null,null,null,null,null,null],
      ],
      [
        [null,null,null,null,null,null,null,255],
        [null,null,null,null,null,null,255,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,0,null,null,null,null,null,null],
        [0,null,null,null,null,null,null,null],
      ],
      [
        [null,null,null,null,null,null,null,255],
        [null,null,null,null,null,null,255,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,0,null,null,null,null,null,null],
        [0,null,null,null,null,null,null,null],
      ],
      [
        [null,null,null,null,null,null,null,255],
        [null,null,null,null,null,null,255,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,0,null,null,null,null,null,null],
        [0,null,null,null,null,null,null,null],
      ],
      [
        [null,null,null,null,null,null,null,255],
        [null,null,null,null,null,null,255,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,0,null,null,null,null,null,null],
        [0,null,null,null,null,null,null,null],
      ]
]

function setup() {
  createCanvas(1500, 1500, WEBGL);
  strokeWeight(0.2)
  console.log(pieces)
  for(var i=0;i<x;i++){
    board.push([])
    for(var j=0;j<y;j++){
      board[i].push([])
      for(var k=0;k<z;k++){
        board[i][j].push(new square(col[choice],pieces[i][j][k],colors[i][j][k]))
        choice=(choice+1)%2
      }
      choice=(choice+1)%2
    }
    choice=(choice+1)%2

  }
  console.log(board)
}

function preload(){
  king=loadModel("../assets/king.obj",true);
  knight=loadModel("../assets/knight.obj",true);
  queen=loadModel("../assets/queen.obj",true);
  pawn=loadModel("../assets/pawn.obj",true);
  rook=loadModel("../assets/rook.obj",true);
  bishop=loadModel("../assets/bishop.obj",true);

  pieces=[
    [
    [null,null,null,null,null,null,null,rook],
    [null,null,null,null,null,null,pawn,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,pawn,null,null,null,null,null,null],
    [rook,null,null,null,null,null,null,null],
  ],
  [
    [null,null,null,null,null,null,null,knight],
    [null,null,null,null,null,null,pawn,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,pawn,null,null,null,null,null,null],
    [knight,null,null,null,null,null,null,null],
  ],
  [
    [null,null,null,null,null,null,null,bishop],
    [null,null,null,null,null,null,pawn,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,pawn,null,null,null,null,null,null],
    [bishop,null,null,null,null,null,null,null],
  ],
   [
    [null,null,null,null,null,null,null,king],
    [null,null,null,null,null,null,pawn,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,pawn,null,null,null,null,null,null],
    [king,null,null,null,null,null,null,null],
  ],
  [
    [null,null,null,null,null,null,null,queen],
    [null,null,null,null,null,null,pawn,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,pawn,null,null,null,null,null,null],
    [queen,null,null,null,null,null,null,null],
  ],
  [
    [null,null,null,null,null,null,null,bishop],
    [null,null,null,null,null,null,pawn,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,pawn,null,null,null,null,null,null],
    [bishop,null,null,null,null,null,null,null],
  ],
  [
    [null,null,null,null,null,null,null,knight],
    [null,null,null,null,null,null,pawn,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,pawn,null,null,null,null,null,null],
    [knight,null,null,null,null,null,null,null],
  ],
  [
    [null,null,null,null,null,null,null,rook],
    [null,null,null,null,null,null,pawn,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,pawn,null,null,null,null,null,null],
    [rook,null,null,null,null,null,null,null],
  ]]        
}

let b=true;
let height=120
function draw() {
  background(30,30,2);
  orbitControl();
  push()
  translate(-800,-1000,-1000)
  rotateX(-30*PI/180)
  rotateY(20*PI/180)
  for(var i=0;i<x;i++){
    for(var j=0;j<y;j++){
      for(var k=0;k<z;k++){
        board[i][j][k].show(i*squareSize,k*height,j*squareSize)
      }
    }
  }
  pop()
}



