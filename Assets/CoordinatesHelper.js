#pragma strict


var visible:boolean;

function Start () {

}

function Update () {
	
	//if d is pressed
	if (Input.GetKey(KeyCode.K))
	{
		//toggle visible
		visible = !visible;
	}
}

function OnGUI()
{
	if (visible)
	{
		displayCoordinates();
	}
}

function displayCoordinates()
{
	GUI.color = Color.black;
	
	var xcoord:int;
	var ycoord:int;
	
	xcoord = Screen.width-325;
	ycoord = 0;
	
	//calculate rightmost border
	//rightmost border is at screen.width
	
	var rightmost:float;
	var leftmost:float;
	var topmost:float;
	var bottommost:float;
	//the X position of the rightmost border in world coordinates
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	//text label showing the rightmost margin
	GUI.Label(Rect(xcoord,ycoord,300,25),"Rightmost margin in world:"+rightmost);
	GUI.Label(Rect(xcoord,ycoord+30,300,25),"Leftmost margin in world:"+leftmost);
	
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	
	GUI.Label(Rect(xcoord,ycoord+55,300,25),"Topmost margin in world:"+topmost);
	GUI.Label(Rect(xcoord,ycoord+80,300,25),"Bottommost margin in world:"+bottommost);
	
	
}