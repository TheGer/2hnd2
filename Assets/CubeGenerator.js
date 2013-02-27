#pragma strict

var cubePrefab:Rigidbody;

var xposition:int;
var yposition:int;


function Start () {
	
	//create one instance of a cube at position, at rotation zero
	Instantiate(cubePrefab,Vector3(xposition,yposition,2),Quaternion.identity);
	



}

function Update () {

}