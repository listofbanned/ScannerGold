function Start()
{
	Handheld.PlayFullScreenMovie ("video.m4v", Color.black, FullScreenMovieControlMode.CancelOnInput);
	yield WaitForSeconds(0.0001);
	Application.LoadLevel("1-inicio");
}