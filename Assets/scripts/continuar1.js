function Start()
{
	yield WaitForSeconds(3);
	ToGame();
}
function ToGame()
{
	if(inicio.sBTN == true)
	{
		Application.LoadLevel("3-scanning");
	}
	if(inicio.sBTN2 == true)
	{
		Application.LoadLevel("3-scanning2");
	}
	if(inicio.sBTN3 == true)
	{
		Application.LoadLevel("3-scanning3");
	}
	if(inicio.sBTN4 == true)
	{
		Application.LoadLevel("3-scanning4");
	}
}