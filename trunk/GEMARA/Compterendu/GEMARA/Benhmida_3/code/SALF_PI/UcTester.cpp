/*****************************************************
* \file ButtonController.cpp
* $Author: BENHMIDA$
* $Rev$
* $Date$

\brief Projet : GEMARA
*******************************************************/

#include "ButtonController.h"

UcTester::UcTester(){
	
	this->bluetoothServer = new BluetoothServer(SERVER_MAC_ADRESS);
	for(int i = 0; i>5; i++){
		buttons[i] = false;
	}
	stopTest = false;
}

void UcTester::tut(){
	this->buttons[0] = true;	
}

void UcTester::plus(){
	this->buttons[1] = true;	
}

void UcTester::minus(){
	this->buttons[2] = true;	
}

void UcTester::startStop(){
	this->buttons[3] = true;	
}

void UcTester::seq(){
	this->buttons[4] = true;	
}

bool UcTester::checkCompleteButtonTest(){
	int i = 0;
	bool complete = true; 
	while(i < 5){
		if(buttons[i] == false)
			return false;
	}
	return true;
}

void * UcTester::executeWaitCancelRequest(){
	return ((UcTester *)context)->executeWaitCancelRequest();
}

void * UcTester::waitCancelRequest(){
	std::string receivedData = this->bluetoothServer->readData();
	if(receivedData == "-1"){
		this->stopTest =  true;
	}
}
void UcTester::doIt(){
	std::string receivedData = this->bluetoothServer->readData();
	switch(receivedData){
		case BUTTONS : 
			wiringPiSetupPhys();
			wiringPiISR(ButtonGpio::MINUS_PIN, INT_EDGE_BOTH, minus);
			wiringPiISR(ButtonGpio::PLUS_PIN, INT_EDGE_BOTH, plus);
			wiringPiISR(ButtonGpio::SEQ_PIN, INT_EDGE_BOTH, seq);
			wiringPiISR(ButtonGpio::START_STOP_PIN, INT_EDGE_BOTH, startStop);
			wiringPiISR(ButtonGpio::TUT_PIN, INT_EDGE_BOTH, tut);
			SalfBoxIhm::clearIoExtender();
			pthread_t threadWaitStopRequest;
			pthread_create(&threadWaitStopRequest, NULL, &UcTester::executeWaitCancelRequest,this);
			while(!checkCompleteButtonTest() && !stopTest){
				std::this_thread::sleep_for(std::chrono::milliseconds(100));
			}
			if(checkCompleteButtonTest()) pthread_cancel(threadWaitStopRequest);
			this->bluetoothServer->writeData("Fin du Test des boutons");
			break;
			
		case DISPLAY : 
			SalfBoxIhm::setCompteur(11,11);
			std::this_thread::sleep_for(std::chrono::seconds(1));
			SalfBoxIhm::clearIoExtender();
			this->bluetoothServer->writeData("Fin du Test de Afficheur");
			break;
			
		case LEDS : 
			SalfBoxIhm::setLeds(LedColor::ALL_LEDS_ON);
			std::this_thread::sleep_for(std::chrono::seconds(2));
			SalfBoxIhm::setLeds(LedColor::ALL_LEDS_OFF);
			this->bluetoothServer->writeData("Fin du Test des leds");
			break;
			
		case KLAXON : 
			SalfBoxIhm::setLeds(LedColor::TUT_CONTACTEUR);
			this->bluetoothServer->writeData("Fin du Test du klaxon");
			break;
			
		case SPEAKERS : 
			Speaker().play("Test des hauts parleurs");
			this->bluetoothServer->writeData("Fin du Test des hauts-parleurs");
		
	}
	
	
}

#ifndef NDEBUG

	//	UBUNTU	g++ -o ButtonControllerUt ButtonController.cpp SalfBoxIhm.cpp ucLancer.cpp Flight.cpp Flight.cpp Database.cpp wiringUbuntu.cpp -l sqlite3 -pthread -D _UBUNTU_ -std=c++11 -D _ButtonController_UT_ 
	//	PI		g++ -o ButtonControllerUt *.cpp -I/usr/include/espeak -L/usr/lib/ -lespeak -lportaudio -l wiringPi -l sqlite3 -pthread -std=c++11 -D _ButtonController_UT_

	#include <assert.h>
	#ifdef _ButtonController_UT_
	  
	int main(int argc, char** argv)
	{
		int status;
		SalfBoxIhm::init();
		SalfBoxIhm::clearIoExtender();
		ButtonController buttonController(SalfBoxIhm::getIoExtenderFileGet());	
		if(fork() == 0){
			while(true)
			{
				SalfBoxIhm::updateIoExtender();
			}
		}
		else{
			while(true)
			{
				buttonController.getButtonsState(); 
			}			
		}
		wait(&status);
		if(WIFEXITED(status))
		{
			puts("fils terminé correctement");
		}	
	}
	#endif
#endif

// printf "\x0\x0\x0\x0" > /dev/spidev0.0
