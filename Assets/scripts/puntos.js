var punto1:GameObject;
var punto2:GameObject;
var punto3:GameObject;
function Start()
{
	punto1 = GameObject.Find("punto1");
	punto2 = GameObject.Find("punto2");
	punto3 = GameObject.Find("punto3");
	Starting();
}
function Starting()
{
	punto1.SetActive(false);
	punto2.SetActive(false);
	punto3.SetActive(false);
	Punto();
}
function Punto()
{
	yield WaitForSeconds(0.5f);
	punto1.SetActive(true);
	yield WaitForSeconds(0.5f);
	punto2.SetActive(true);
	yield WaitForSeconds(0.5f);
	punto3.SetActive(true);
	yield WaitForSeconds(0.5f);
	Starting();
}