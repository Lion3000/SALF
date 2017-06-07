/*****************************************************
* \file ButtonController.cpp
* $Author: BENHMIDA$
* $Rev$
* $Date$

\brief Projet : GEMARA
*******************************************************/

#include "UcTester.h"

int UcTester::nbAppuiButtons[5]; 
bool UcTester::buttons[5]; 
BluetoothServer * UcTester::bluetoothServer;

UcTester::UcTester(){
	resetButtonState();
}

void UcTester::resetButtonState(){
	for(int i = 0; i>5; i++){
		UcTester::buttons[i] = false;
		UcTester::nbAppuiButtons[i] = 0;
	}
}

void UcTester::tut(){
	UcTester::manageButtonsState(BUTTON_TUT, BluetoothFrame::TUT_ON, BluetoothFrame::TUT_OFF);
}

void UcTester::plus(){
	UcTester::manageButtonsState(BUTTON_PLUS, BluetoothFrame::PLUS_ON, BluetoothFrame::PLUS_OFF);
}

void UcTester::minus(){	
	UcTester::manageButtonsState(BUTTON_MINUS, BluetoothFrame::MINUS_ON, BluetoothFrame::MINUS_OFF);	
}

void UcTester::startStop(){
	UcTester::manageButtonsState(BUTTON_START_STOP, BluetoothFrame::START_STOP_ON, BluetoothFrame::START_STOP_OFF);
}

void UcTester::seq(){
	UcTester::manageButtonsState(BUTTON_SEQ, BluetoothFrame::SEQ_ON, BluetoothFrame::SEQ_OFF);
}

void UcTester::manageButtonsState(int idButton, int idAppui, int idRelachement)
{
	std::this_thread::sleep_for(std::chrono::milliseconds(20));
	UcTester::buttons[idButton] = true;
	nbAppuiButtons[idButton] ++;
	if(nbAppuiButtons[idButton]%2 != 0){ UcTester::bluetoothServer->writeData(std::to_string(idAppui)); }
	 else { UcTester::bluetoothServer->writeData(std::to_string(idRelachement)); }
}

bool UcTester::checkCompleteButtonTest(){
	int i = 0;
	bool complete = true; 
	while(i < 5){		
		if(buttons[i] == false)
			return false;
		i++;				
	}
	return true;
}

void UcTester::doIt(BluetoothServer * bluetoothServer)
{	
	UcTester::bluetoothServer = bluetoothServer;
	wiringPiSetupPhys();
	wiringPiISR(ButtonGpio::MINUS_PIN, INT_EDGE_BOTH, minus);
	wiringPiISR(ButtonGpio::PLUS_PIN, INT_EDGE_BOTH, plus);
	wiringPiISR(ButtonGpio::SEQ_PIN, INT_EDGE_BOTH, seq);
	wiringPiISR(ButtonGpio::START_STOP_PIN, INT_EDGE_BOTH, startStop);
	wiringPiISR(ButtonGpio::TUT_PIN, INT_EDGE_BOTH, tut);
	SalfBoxIhm::clearIoExtender();
	SalfBoxIhm::setSequence(0xe);		
	printf("ds un tester %d\n",SalfBoxIhm::getIsTesting());
	while(true)
	{		
		if(SalfBoxIhm::getIsTesting()){
			std::string receivedData = UcTester::bluetoothServer->readData();
			switch(std::stoi(receivedData))
			{
				case BluetoothBny::BLUETOOTH_BUTTONS : 				
					while(!checkCompleteButtonTest() && SalfBoxIhm::getIsTesting()){
						std::this_thread::sleep_for(std::chrono::milliseconds(20));
					} 				
					UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::END_OF_TEST));
					resetButtonState();
					break;
					
				case BluetoothBny::BLUETOOTH_DISPLAY : 
					for(int i = 0; i <= 9; i++){
						SalfBoxIhm::setCompteur((i*10)+i,(i*10)+i);
						SalfBoxIhm::setSequence(i);
						UcTester::bluetoothServer->writeData(std::to_string((BluetoothFrame::DIPLAY0)+i));
						std::this_thread::sleep_for(std::chrono::milliseconds(300));
					}
					SalfBoxIhm::clearIoExtender();
					UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::DIPLAY_OFF));
					UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::END_OF_TEST));
					break;
					
				case BluetoothBny::BLUETOOTH_LED_RED : 
					doLedsTest(LedColor::RED, BluetoothFrame::RED_LED_ON, BluetoothFrame::RED_LED_OFF);
					break;
					
				case BluetoothBny::BLUETOOTH_LED_TOP : 
					doLedsTest(LedColor::TOP_LED, BluetoothFrame::TOP_LED_ON, BluetoothFrame::TOP_LED_OFF);
					break;
					
				case BluetoothBny::BLUETOOTH_LED_MIDDLE : 
					doLedsTest(LedColor::MIDDLE_LED, BluetoothFrame::MIDDLE_LED_ON, BluetoothFrame::MIDDLE_LED_OFF);
					break;
					
				case BluetoothBny::BLUETOOTH_LED_BOTTOM : 
					doLedsTest(LedColor::BOTTOM_LED, BluetoothFrame::BOTTOM_LED_ON,BluetoothFrame::BOTTOM_LED_OFF);		
					break;
									
				case BluetoothBny::BLUETOOTH_KLAXON : 
					SalfBoxIhm::setLeds(LedColor::TUT_CONTACTEUR);
					UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::KLAXON_ON));
					std::this_thread::sleep_for(std::chrono::seconds(2));				
					SalfBoxIhm::setLeds(LedColor::ALL_LEDS_OFF);
					UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::KLAXON_OFF));
					UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::END_OF_TEST));
					break;
					
				case BluetoothBny::BLUETOOTH_SPEAKERS : 
					UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::SPEAKER_ON));	
					Speaker().play("Speaker test OK");				
					std::this_thread::sleep_for(std::chrono::seconds(2));			
					UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::SPEAKER_OFF));	
					UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::END_OF_TEST));
					break;	
			}
		}	
	}
}

void UcTester::doLedsTest(LedColor ledToSet, int idLedOn,  int idLedOff)
{
	SalfBoxIhm::setLeds(ledToSet);
	UcTester::bluetoothServer->writeData(std::to_string(idLedOn));
	std::this_thread::sleep_for(std::chrono::seconds(2));
	SalfBoxIhm::setLeds(LedColor::ALL_LEDS_OFF);
	SalfBoxIhm::setLeds(LedColor::ALL_LEDS_OFF);
	UcTester::bluetoothServer->writeData(std::to_string(idLedOff));
	UcTester::bluetoothServer->writeData(std::to_string(BluetoothFrame::END_OF_TEST));
}

#ifndef NDEBUG

	//	PI	g++ -o UcTester *.cpp -I/usr/include/espeak -L/usr/lib/ -lespeak -lportaudio -l wiringPi -l sqlite3 -lbluetooth -pthread -std=c++11 -D _UcTester_UT_

	#include <assert.h>
	#ifdef _UcTester_UT_
	  
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
			if(fork() == 0){
				BluetoothServer * bluetoothServer;
				while(true){
					try{
						bluetoothServer = new BluetoothServer();
						UcTester().doIt(bluetoothServer);
					}
					catch(std::invalid_argument error){
						delete bluetoothServer;
					}
				}
			}
			else{
				while(true)
				{
					buttonController.getButtonsState(); 
				}			
			}		
		}
	}
	#endif
#endif

// printf "\x0\x0\x0\x0" > /dev/spidev0.0
