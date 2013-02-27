#pragma strict
var speed:int;

var direction:int;


function Start () {
	//stuff that happens once
	
	//random speed for the mouse
	speed=Mathf.Round(Random.Range(5.0,20.0));
	
	
	//generate a random number between 1 and 4
	direction = Mathf.Round(Random.Range(1,8));
	
	
	//will print a random number from 1 to 4 in the console.
	print(direction);
	
	
	
	//random position on screen between borders defined in Borders Script
	transform.position.x = Random.Range(BordersScript.leftmost,BordersScript.rightmost);
	transform.position.y = Random.Range(BordersScript.topmost,BordersScript.bottommost);
}

function moveUp()
{
	transform.Translate(Vector3.up * speed * Time.deltaTime);
}

function moveDown()
{
	transform.Translate(Vector3.down * speed * Time.deltaTime);
}

function moveLeft()
{
	transform.Translate(Vector3.left * speed * Time.deltaTime);
}

function moveRight()
{
	transform.Translate(Vector3.right * speed * Time.deltaTime);	
}

function moveDiagonalLeftUp()
{
	moveUp();
	moveLeft();
}

function moveDiagonalRightUp()
{
	moveUp();
	moveRight();
}

function moveDiagonalLeftDown()
{
	moveDown();
	moveLeft();
}

function moveDiagonalRightDown()
{
	moveDown();
	moveRight();
}




function Update () {
	//---select the direction of movement--//
	if (direction==1)
	{
		moveUp();
	}
	if (direction==2)
	{
		moveDown();
	}
	if (direction==3)
	{
		moveLeft();
	}
	if (direction==4)
	{
		moveRight();
	}
	if (direction==5)
	{
		moveDiagonalLeftUp();
	}
	if (direction==6)
	{
		moveDiagonalRightUp();
	}
	if (direction==7)
	{
		moveDiagonalLeftDown();
	}
	if (direction==8)
	{
		moveDiagonalRightDown();
	}
	//---for the mouse not to leave the screen---//
	if (transform.position.x > BordersScript.rightmost)
	{
		direction = Mathf.Round(Random.Range(1,8));
		transform.position.x = BordersScript.leftmost;
	}
	
	if (transform.position.x < BordersScript.leftmost)
	{
		direction = Mathf.Round(Random.Range(1,8));
		transform.position.x = BordersScript.rightmost;
	}
	
	if (transform.position.y > BordersScript.topmost)
	{
		direction = Mathf.Round(Random.Range(1,8));
		transform.position.y = BordersScript.bottommost;
	}
	
	if (transform.position.y < BordersScript.bottommost)
	{
		direction = Mathf.Round(Random.Range(1,8));
		transform.position.y = BordersScript.bottommost;
	}		

}