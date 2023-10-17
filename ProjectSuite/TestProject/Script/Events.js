function EventControl_OnStartTest(Sender) {
  Log.Message("Starting test...");
}

function EventControl_OnLogError(Sender, LogParams)
{
  LogParams.FontColor = clRed;
  Log.Message("WARNING! Error ocured but test will continue because of the local settings (i hope my coloborator has Continue running on error enabled) ")
 
}

function EventControl_OnStopTest(Sender)
{
  Log.Message("Test Has Finished!")
}
 

