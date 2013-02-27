#pragma strict

//to declare a variable

//this is a number (no decimal points)
var speed:int;

//this is a number (with decimal points) 
var speedDecimalPoints:float;
var fishEaten:int;

//this is a string of letters (as normal)
var myName:String;
var score:int;
//slot to generate the mouse
var mousePrefabSlot:Rigidbody;


var winTime:float;

//boolean variable controlling if text is shown.
var showText:boolean;
var gameWon:boolean;

var startTime:float;



function Start () {
	//the object to instantiate, position,rotation
	score = 0;
	Instantiate(mousePrefabSlot,Vector3(0,0,2),Quaternion.identity);
	showText = true;
	//the time when the game starts
	startTime = Time.time;
}


function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "fish")
	{
		fishEaten++;
		Destroy(other.gameObject);
	}
	
	
	if (other.gameObject.tag == "mouse")
	{
		Destroy(other.gameObject);
		score++;
		//the object to instantiate, position,rotation
		Instantiate(mousePrefabSlot,Vector3(0,0,2),Quaternion.identity);
		
	}
	else if (other.gameObject.tag == "box3")
	{
		print("Hit box 3");
	}
	

}


function Update () {
	if (Input.GetKeyDown(KeyCode.R))
	{
		//r is pressed
		startTime = Time.time;
	}
	
	if (score>=20)
	{
		//player has finished the game. Display time taken and score.
		if(gameWon==false)
		{
		winTime = Time.time - startTime;
		}
		gameWon = true;
	}
	else {
		//if the score has not reached 20 yet
		var currentX:float;
		var currentY:float;
	
		currentX = transform.position.x;
		currentY = transform.position.y;
	
	
		transform.Translate(Vector3.right * speed * Input.GetAxis("Horizontal") * Time.deltaTime);
		transform.Translate(Vector3.up * speed * Input.GetAxis("Vertical") * Time.deltaTime);
	}
	//x coordinates -- border
	if (transform.position.x > BordersScript.rightmost)
	{
		transform.position.x = BordersScript.leftmost;
	}	
	
	
	if (transform.position.x < BordersScript.leftmost)
	{
		transform.position.x = BordersScript.rightmost;
	}
	
	//y coordinates -- border
	if (transform.position.y < BordersScript.bottommost)
	{
		transform.position.y = BordersScript.topmost;
	}
	
	if (transform.position.y > BordersScript.topmost)
	{
		transform.position.y = BordersScript.bottommost;
	}
	
			
	//if C is pressed, it will bring the box back to the center
	if (Input.GetKeyDown(KeyCode.C))
	{
		transform.position.x = 0;
		transform.position.y = 0;
	}
	
	
	//if escape is pressed, bring up the menu
	if (Input.GetKeyDown(KeyCode.Escape))
	{
		Application.LoadLevel(0);
	}
	
	if (Input.GetKeyDown(KeyCode.X))
	{
		showText = !showText;
		print(showText);
	}
	
}

function OnGUI()
{
	//change color of text 
	GUI.color = Color.red;
	
	//coordinates relative to top left corner.  x,y,width,height
	if(showText == true)
	{
		GUI.Label(Rect(10,10,300,50),"Score "+score);
	
		GUI.Label(Rect(10,60,300,50),"X: "+transform.position.x + " Y: "+transform.position.y);
		
		GUI.Label(Rect(10,100,300,25),"Current time: "+(Time.time - startTime));
	}
	
	if(gameWon == true)
	{
		var centerX:float;
		var centerY:float;
		//find the middle of the screen, display score and time taken
		centerX = Camera.main.WorldToScreenPoint(Vector3(0,0,0)).x;
		centerY = Camera.main.WorldToScreenPoint(Vector3(0,0,0)).y;
		
		GUI.Label(Rect(centerX,centerY,200,25),"Game won!");
		GUI.Label(Rect(centerX,centerY+25,200,25),"Time taken: "+winTime);
		GUI.Label(Rect(centerX,centerY+50,200,25),"Press escape to restart!");
	}
	
	
}

