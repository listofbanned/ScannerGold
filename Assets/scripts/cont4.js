var mat:Material;
var matAmarillo:Material;
var c:float;
function Start()
{
	this.gameObject.GetComponent.<Renderer>().material = mat;
}
function Update()
{
	c = c+1*Time.deltaTime;
	if(c > 7)
	{
		this.gameObject.GetComponent.<Renderer>().material = matAmarillo;
	}
	if(c > 7.3)
	{
		this.gameObject.GetComponent.<Renderer>().material = mat;
	}
	if(c > 7.6)
	{
		this.gameObject.GetComponent.<Renderer>().material = matAmarillo;
	}
	if(c > 7.9)
	{
		this.gameObject.GetComponent.<Renderer>().material = mat;
	}
	if(c > 8.2)
	{
		this.gameObject.GetComponent.<Renderer>().material = matAmarillo;
	}
	if(c > 8.5)
	{
		this.gameObject.GetComponent.<Renderer>().material = mat;
	}
	if(c > 8.8)
	{
		this.gameObject.GetComponent.<Renderer>().material = matAmarillo;
	}
	if(c > 10)
	{
		Application.LoadLevel("4-scanover4");
	}
}