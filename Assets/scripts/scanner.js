var scanner:GameObject;
var modify:float;
function Start()
{
	scanner = GameObject.Find("Scanner");
}
function Update()
{
	modify = modify+0.5*Time.deltaTime;
	scanner.transform.position.y = -3.8f+modify;
	if(modify > 4.33)
	{
		Application.LoadLevel("4-scanover");
	}
}