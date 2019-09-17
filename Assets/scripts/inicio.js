var btn:GameObject;
var btn2:GameObject;
var btn3:GameObject;
var btn4:GameObject;
static var sBTN:boolean;
static var sBTN2:boolean;
static var sBTN3:boolean;
static var sBTN4:boolean;
function Start()
{
	btn = GameObject.Find("BTN");
	btn2 = GameObject.Find("BTN2");
	btn3 = GameObject.Find("BTN3");
	btn4 = GameObject.Find("BTN4");
	sBTN = false;
	sBTN2 = false;
	sBTN3 = false;
	sBTN4 = false;
}
function OnMouseDown()
{
	if(gameObject.tag == "BTN")
	{
		sBTN = true;
		sBTN2 = false;
		sBTN3 = false;
		sBTN4 = false;
	}
	if(gameObject.tag == "BTN2")
	{
		sBTN = false;
		sBTN2 = true;
		sBTN3 = false;
		sBTN4 = false;
	}
	if(gameObject.tag == "BTN3")
	{
		sBTN = false;
		sBTN2 = false;
		sBTN3 = true;
		sBTN4 = false;
	}
	if(gameObject.tag == "BTN4")
	{
		sBTN = false;
		sBTN2 = false;
		sBTN3 = false;
		sBTN4 = true;
	}
	Application.LoadLevel("2-inicioGame");
}