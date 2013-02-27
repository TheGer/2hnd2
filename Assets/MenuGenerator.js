#pragma strict
//coordinates

var x:int;
var y:int;

//the skin of my menu text
var theme:GUISkin;



function Start () {
	
}

function Update () {

}

function OnGUI()
{
	//apply theme
	GUI.skin = theme;
	

//label at x,y position
//rectangle x, y, width, height
	GUI.Label(Rect(x,y,150,50),"Smiley and purple square");
	
//creating a button. 3 further to the right and 28 down from the text
	if (GUI.Button(Rect(x+3,y+53,100,30),"New Game"))
	{
		//new game was clicked
		Application.LoadLevel(1);
		
	}
//another button
	if (GUI.Button(Rect(x+3,y+116,100,30),"Exit"))
	{
		//exit was clicked
		print("Exit");
	}



}