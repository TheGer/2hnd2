#pragma strict

static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;

function Start () {

}

function Update () {
	//calculate screen borders
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y; 
	

}