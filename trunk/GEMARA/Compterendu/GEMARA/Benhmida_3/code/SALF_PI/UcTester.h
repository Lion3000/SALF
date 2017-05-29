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
#include "SalfBoxIhm.h"
#include "Speaker.h"
#include "LedColor.h"
#include <stdio.h>
#include <sqlite3.h> 
#include <string> 		//	std::string
#include <string.h> 	// strlen
#include <vector> 	// strlen
#include <iostream>

class UcTester 
{
  private:
	BluetoothServer bluetoothServer;
	bool buttons[5];
	bool stopTest;
	
  public:
     UcTester();
     void doIt();
     bool checkCompleteButtonTest();
};
#endif
