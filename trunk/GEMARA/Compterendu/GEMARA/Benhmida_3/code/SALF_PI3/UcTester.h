/**
* \file Database.h
* $Author: BENHMIDA$
* $Rev: 590 $
* $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $

\brief Projet : GEMARA
*******************************************************/

#ifndef _UcTester_H
#define _UcTester_H

#include "BluetoothBnyConfig.h"
#include "BluetoothServer.h"
#include "SalfBoxIhm.h"
#include "Speaker.h"
#include "LedColor.h"
#include <stdio.h>
#include <sqlite3.h> 
#include <string> 		
#include <string.h> 	
#include <vector> 	
#include <iostream>

#define BUTTON_START_STOP 0
#define BUTTON_PLUS 1
#define BUTTON_MINUS 2
#define BUTTON_SEQ 3
#define BUTTON_TUT 4

class BluetoothServer;
class UcTester 
{
  private:
	static BluetoothServer * bluetoothServer;
	static bool buttons[5];
	static int nbAppuiButtons[5]; 
	
	bool isTestModeActive;
	
  public:
     UcTester();
     ~UcTester(){ }
     void doIt(BluetoothServer * bluetoothServer);
     void resetButtonState();
     void doLedsTest(LedColor ledToSet, int idLedOn, int idLedOff);
     static void manageButtonsState(int idButton, int idAppui, int idRelachement);
     static void tut();
     static void minus();
     static void plus();
     static void seq();
     static void startStop();
     bool checkCompleteButtonTest();
};
#endif
