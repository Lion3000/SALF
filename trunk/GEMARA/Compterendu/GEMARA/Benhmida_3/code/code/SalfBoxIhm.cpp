/*****************************************************
 * \file SalfBoxIhm.cpp
 * $Author: BENHMIDA$
 * $Rev: 597 $
 * $Date: 2017-04-24 23:17:55 +0200 (lun. 24 avril 2017) $

 \brief Projet : GEMARA
 *******************************************************/

#include "SalfBoxIhm.h"
#include <string.h>
#include <fstream>
#include <iostream>

int SalfBoxIhm::buttonState, SalfBoxIhm::etatLeds, SalfBoxIhm::ioExtenderFileId, SalfBoxIhm::ioExtenderFileGet;
std::map<ButtonGpio, Button> SalfBoxIhm::gpioMasques;
bool SalfBoxIhm::isTesting;	
char SalfBoxIhm::ioExtender[IO_EXTENDER_SIZE+1];
key_t SalfBoxIhm::keySetBox, SalfBoxIhm::keyGetBox;
std::ofstream SalfBoxIhm::spi;

void SalfBoxIhm::init() 
{
	wiringPiSetupPhys();
	initializeInterrupt();
		spi.open("/dev/spidev0.0");
	keySetBox = ftok("/tmp",1);
	keyGetBox = ftok("/tmp",2);
	buttonState = 0;	
	etatLeds = 0;	
	isTesting = false;
	ioExtenderFileId = msgget(SalfBoxIhm::keySetBox, 0666 | IPC_CREAT);
	ioExtenderFileGet = msgget(SalfBoxIhm::keyGetBox, 0666 | IPC_CREAT);
	SalfBoxIhm::initializeButtonsMap();
	ioExtender[IoExtender::LEDS]= 0x0; 
	ioExtender[IoExtender::SEQUENCE]= 0x0; 
	ioExtender[IoExtender::SECONDS]= 0x0; 
	ioExtender[IoExtender::MINUTS]= 0x0;
	ioExtender[4]= 0x0;
	puts("init OK");
}

void SalfBoxIhm::initializeInterrupt()
{
	wiringPiISR(ButtonGpio::MINUS_PIN, INT_EDGE_BOTH, doMinus);
	wiringPiISR(ButtonGpio::PLUS_PIN, INT_EDGE_BOTH, doPlus);
	wiringPiISR(ButtonGpio::SEQ_PIN, INT_EDGE_BOTH, doSeq);
	wiringPiISR(ButtonGpio::START_STOP_PIN, INT_EDGE_BOTH, doStartStop);
	wiringPiISR(ButtonGpio::TUT_PIN, INT_EDGE_BOTH, doTut);
}


void SalfBoxIhm::initializeButtonsMap()
{
	SalfBoxIhm::gpioMasques.insert(std::make_pair(ButtonGpio::START_STOP_PIN, Button::START_STOP));
	SalfBoxIhm::gpioMasques.insert(std::make_pair(ButtonGpio::SEQ_PIN, Button::SEQ));
	SalfBoxIhm::gpioMasques.insert(std::make_pair(ButtonGpio::PLUS_PIN, Button::PLUS));
	SalfBoxIhm::gpioMasques.insert(std::make_pair(ButtonGpio::MINUS_PIN, Button::MINUS));
	SalfBoxIhm::gpioMasques.insert(std::make_pair(ButtonGpio::TUT_PIN, Button::TUT));	
}

int SalfBoxIhm::getIoExtenderFileGet()
{
	return SalfBoxIhm::ioExtenderFileGet;
}
void SalfBoxIhm::setCompteur(uint8_t minuts, uint8_t seconds) {

	SalfBoxIhm::Request msg;
	msg.mtype = SalfBoxIhm::COMPTEUR;
	msg.ioExtender[IoExtender::MINUTS] = inverseDigits(minuts);
	msg.ioExtender[IoExtender::SECONDS] = inverseDigits(seconds);
	msgsnd(ioExtenderFileId, &msg, IO_EXTENDER_SIZE, 0);
}	

void SalfBoxIhm::setSequence(uint8_t sequence) {
	
	SalfBoxIhm::Request msg;
	msg.mtype = SalfBoxIhm::SEQUENCE;
	msg.ioExtender[IoExtender::SEQUENCE] = sequence;
	msgsnd(ioExtenderFileId, &msg, IO_EXTENDER_SIZE, 0);
}

void SalfBoxIhm::setLeds(LedColor positionLed, bool tutEnd) {
	if((int)SalfBoxIhm::getEtatLeds()&(int)LedColor::TUT_CONTACTEUR == (int)LedColor::TUT_CONTACTEUR){
		if(!tutEnd){
			positionLed = (LedColor)((int)positionLed|(int)LedColor::TUT_CONTACTEUR);
		}
	}
	SalfBoxIhm::Request msg;
	msg.mtype = SalfBoxIhm::LEDS;
	msg.ioExtender[IoExtender::LEDS] = (char)positionLed ;
	msgsnd(ioExtenderFileId, &msg, IO_EXTENDER_SIZE, 0);
	SalfBoxIhm::etatLeds = (int)positionLed;
}

uint8_t SalfBoxIhm::inverseDigits(uint8_t nb)
{
	uint8_t d = nb/10;
	uint8_t u = nb%10;
	return (u<<4) + d;
}

uint8_t SalfBoxIhm::inverseDigitsBack(uint8_t nb)
{
	uint8_t d = nb<<4;
	d = d>>4;
	uint8_t u = nb>>4;
	return (d*10) + u;
}

void SalfBoxIhm::updateIoExtender()
{	
	SalfBoxIhm::Request msg;
	msgrcv(ioExtenderFileId, &msg, IO_EXTENDER_SIZE, 0, 0);
	
	switch(msg.mtype) 
	{
		case SalfBoxIhm::COMPTEUR:
			SalfBoxIhm::ioExtender[IoExtender::MINUTS] = msg.ioExtender[IoExtender::MINUTS];	// minuts
			SalfBoxIhm::ioExtender[IoExtender::SECONDS] = msg.ioExtender[IoExtender::SECONDS];	// seconds
			break;

		case SalfBoxIhm::SEQUENCE:
			SalfBoxIhm::ioExtender[IoExtender::SEQUENCE] = msg.ioExtender[IoExtender::SEQUENCE];	// sequence	
			break;

		case SalfBoxIhm::LEDS:
			SalfBoxIhm::ioExtender[IoExtender::LEDS] = msg.ioExtender[IoExtender::LEDS];	// leds	
			break;

		default:
			break;
	}
	#ifdef _UBUNTU_
		std::cout<< SalfBoxIhm::ioExtender<<std::endl;
	#else
		
		spi.write(SalfBoxIhm::ioExtender, SalfBoxIhm::IO_EXTENDER_SIZE);
		spi.flush();
						
	#endif
}

void SalfBoxIhm::clearIoExtender()
{
	SalfBoxIhm::setLeds(ALL_LEDS_OFF);
	SalfBoxIhm::setCompteur(0,0);
	SalfBoxIhm::setSequence(0);	
}

#include <ctime>
void SalfBoxIhm::buttonTest(ButtonGpio pin) 
{
	std::string pinStopIsr = std::string("/usr/bin/gpio edge ") + std::to_string((int)pin) + std::string(" none");
	system(pinStopIsr.c_str()) ;
	std::this_thread::sleep_for(std::chrono::milliseconds(TIME_ANTIREBOUND));
	SalfBoxIhm::RequestGet msg;
	
	if(digitalRead(pin) == 0) 
	{
		msg.mtype = (long)PRESS; 		
		SalfBoxIhm::buttonState = SalfBoxIhm::buttonState | (int)gpioMasques.at(pin);		
	}
	else
	{
		msg.mtype = (long)RELEASED;	
		SalfBoxIhm::buttonState = SalfBoxIhm::buttonState | (int)gpioMasques.at(pin);					
	}	
	pinStopIsr = std::string("/usr/bin/gpio edge ") + std::to_string((int)pin) + std::string(" both");	
	system(pinStopIsr.c_str()) ;
	msg.data[0] = SalfBoxIhm::buttonState;	
	msgsnd(ioExtenderFileGet, &msg, sizeof(int), 0);	
	SalfBoxIhm::buttonState = 0;	
}

void SalfBoxIhm::doTut() 
{
	buttonTest(ButtonGpio::TUT_PIN);
}

void SalfBoxIhm::doSeq() 
{
	buttonTest(ButtonGpio::SEQ_PIN);
}

void SalfBoxIhm::doPlus() 
{
	buttonTest(ButtonGpio::PLUS_PIN);	
}
	
void SalfBoxIhm::doMinus() 
{
	buttonTest(ButtonGpio::MINUS_PIN);
}

void SalfBoxIhm::doStartStop() 
{
	buttonTest(ButtonGpio::START_STOP_PIN);
}

char SalfBoxIhm::getMinuts() {
	
	return inverseDigitsBack(SalfBoxIhm::ioExtender[IoExtender::MINUTS]);
}

char SalfBoxIhm::getSeconds() {

	return inverseDigitsBack(SalfBoxIhm::ioExtender[IoExtender::SECONDS]);
}

char SalfBoxIhm::getSequence() {

	return SalfBoxIhm::ioExtender[IoExtender::SEQUENCE];
}

int SalfBoxIhm::getEtatLeds(){
	return SalfBoxIhm::etatLeds;
}

void SalfBoxIhm::setIsTesting(bool value){
	SalfBoxIhm::isTesting = value;
	printf("testing dans salfbox %d\n", isTesting);
}
		
bool SalfBoxIhm::getIsTesting(){
	return SalfBoxIhm::isTesting;
}

#ifndef NDEBUG

//	pour pi				g++ -o SalfBoxIhm *.cpp -I/usr/include/espeak -L/usr/lib/ -lespeak -lportaudio -l wiringPi -l sqlite3 -pthread -std=c++11 -D _SalfBoxIhm_UT_
//	pour ubuntu			g++ -o SalfBoxIhmUbuntu  SalfBoxIhm.cpp ButtonController.cpp ucLancer.cpp Flight.cpp Database.cpp -D _UBUNTU_ -D_SalfBoxIhm_UT_  wiringUbuntu.cpp -pthread -std=c++11

#include <assert.h>


#ifdef _SalfBoxIhm_UT_

	int main(int argc, char** argv)
	{
		int status, test;
		SalfBoxIhm::init();		
		SalfBoxIhm::clearIoExtender();
		
		if(fork() == 0)
		{
			
			while(true)
			{
				SalfBoxIhm::updateIoExtender();
			}
		}

		else
		{	
			
			SalfBoxIhm::setLeds(LedColor::TUT_CONTACTEUR);
			//~ while(true){
				//~ ButtonController().getButtonsState();
			//~ }	
			//~ puts("Press Ctrl + c to quit");	
	
		}	
		wait(&status);
		if(WIFEXITED(status))
		{
			puts("fils terminé correctement");

		}	
			//~ 
		return 0;
	}
	#endif
#endif
//#endif

