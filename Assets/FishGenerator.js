#pragma strict
//maximum number of fish
var maxFish:int;

//the variable I am going to drag the prefab onto.
//tells us what a fish is.
var fishPrefab:Rigidbody;




function createFish()
{
	//if you have less than five fish, create a new fish
	if (GameObject.FindGameObjectsWithTag("fish").length < maxFish)
	{
	var x:float;
	var y:float;
	
	//random coordinates for the fish to appear in
	x = Random.Range(-10,10);
	y = Random.Range(-10,10);
	
	//create an instance of a fish.  x, y position z always the same (2 like the cube)
	//quaternion.identity means zero rotation (no angle)
	Instantiate(fishPrefab,Vector3(x,y,2),Quaternion.identity);
	
	//end if
	}
}


function Start () {
	//invoke createFish every 2 seconds
	InvokeRepeating("createFish",1.0,2.0);
}

function Update () {

}