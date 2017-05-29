/*****************************************************
* \file ButtonController.cpp
* $Author: BENHMIDA$
* $Rev$
* $Date$

\brief Projet : GEMARA
*******************************************************/

#include "ButtonController.h"

ButtonController::ButtonController(int idFileButtons)
{	
	this->timerConfiguring = false; 
	this->sequenceConfiguring = false; 
	this->idFileButtons = idFileButtons;
	this->seqModified = false; 
	this->started = false; 
	this->nbAppuiSeq = 0; 
	this->buttonCombinaison = 0;
	this->symbolPosition = 0;
	this->minuts = 0;
	this->seconds = 0;	
	this->selectedSymbol = ' ';	
	this->sequence[0] = '1' ; this->sequence[1] = '2' ; this->sequence[2] = '3'; 
	this->flight= new Flight();
	resetSymbols();
}

void ButtonController::resetSymbols()
{
	this->symbols.clear();
	this->symbols.push_back('1');
	this->symbols.push_back('2');
	this->symbols.push_back('3');
	this->symbols.push_back('0');
}

void ButtonController::getButtonsState(){
	ButtonController::RequestGet msg;
	msgrcv(idFileButtons, &msg, sizeof(int), 0, 0);
	this->buttonCombinaison = msg.data[0];	
	this->onPress = (msg.type==PRESS) ? true : false;
	manageButtons();				
}

void ButtonController::manageButtons()
{
	switch(buttonCombinaison){
		
		case (int)Button::START_STOP :
			startStop();
			break;
			
		case (int)Button::SEQ :
			seq();
			break;
		
		case (int)Button::PLUS :
			plusMinus();
			break;
		
		case (int)Button::MINUS :			
			plusMinus();
			break;
		
		case (int)Button::TUT :
			tut();
			break;
			
		case (int)Button::CLEAR :
			clearTimer();
			break;
			
		default:
			break;
	}
}		
		
void * ButtonController::executeIncrementDecrement(void * context)
{
	return ((ButtonController *)context)->incrementDecrement();
}

void ButtonController::clearTimer()
{
	if(this->onPress){
		SalfBoxIhm::setCompteur(0,0);
		this->minuts = 0;
		this->seconds = 0;
	}
}

void * ButtonController::startStopFlightLaunch()
{	
	//paramétrage du timer
	int * timer = flight->getTimerFromDb();
	flight->setMinuts(timer[0]);
	flight->setSeconds(timer[1]);
	free(timer);
	
	//paramétrage de la séquence
	std::string sequenceList[3];
	flight->getSequenceFromDb(sequenceList);
	char seqTotal[3];
	seqTotal[0] = sequenceList[0][0];
	seqTotal[1] = sequenceList[1][0];
	seqTotal[2] = sequenceList[2][0];	
	flight->setCompleteSequence(seqTotal[0], seqTotal[1], seqTotal[2]);			
	
	//lancement
	pthread_t threadLaunch;
	pthread_create(&threadLaunch, NULL, &Flight::executeStart,flight);
	pthread_join(threadLaunch, NULL);
} 

void * ButtonController::executeStartStopFlightLaunch(void * context)
{
	return ((ButtonController *)context)->startStopFlightLaunch();
}

void ButtonController::startStop()
{	
	if(this->onPress)
	{		
		if(this->started)
		{
			if(this->flight->getIsActive()){
				this->flight->stop();
				SalfBoxIhm::clearIoExtender();
				this->started = false;
			}				
		}	
		
		else if(!this->started){
			if(timerConfiguring){
				timerConfiguring = false;
				std::string sql = std::string("INSERT INTO timer(minuts, seconds) VALUES(") + std::to_string(this->minuts) + std::string(",") + std::to_string(this->seconds) + std::string(");");
				database.executeRequest(sql);	
				puts("Timer enregistré\n");		
			}
			else{
				if(!this->flight->getIsActive()){
				pthread_t threadLaunch;
				pthread_create(&threadLaunch, NULL, &ButtonController::executeStartStopFlightLaunch,this);
				puts("LANCEMENT\n");
				this->started = true;
				}
			}
		}	
	}	
}

void * ButtonController::executeSetUpSequence(void * context)
{
	return ((ButtonController *)context)->setUpSequence();
}

void ButtonController::seq()
{
	if(this->onPress && !this->started){	
		pthread_t threadSeq;
		pthread_create(&threadSeq, NULL, &ButtonController::executeSetUpSequence, this);	
	}		
}
using namespace std;
void ButtonController::getAvailableSymbol()
{
	std::vector<char>::iterator it;
	it = find(symbols.begin(), symbols.end(), this->sequence[currentRace-1]);
	if(it == symbols.end()){
		sequence[currentRace-1] = symbols.at(0);	
	}
}

bool ButtonController::checkSequenceConfiguration(){
	if((this->sequence[0] != this->sequence[1]) && (this->sequence[0] != this->sequence[2]))
	{
		if(this->sequence[1] != this->sequence[2])
		{
			return true;
		}
	}
	else
		return false;	
}

void * ButtonController::setUpSequence()
{	
	this->nbAppuiSeq++;	
	currentRace = nbAppuiSeq;
	
	if(nbAppuiSeq == 1) sequenceConfiguring = true;
	else if(nbAppuiSeq == 3) nbAppuiSeq = 0;	
	if(seqModified)
	{
		sequence[currentRace-2] = selectedSymbol;				 
		symbols.erase(symbols.begin()+(symbolPosition)); 
		getAvailableSymbol();								
		seqModified = false;
	}
	SalfBoxIhm::setSequence(sequence[currentRace-1]);
	printf("Sequence entière = %c - %c - %c\n", this->sequence[0], this->sequence[1], this->sequence[2]);	
	if(checkSequenceConfiguration() == true){
		
		std::this_thread::sleep_for(std::chrono::seconds(2));
				
		if(onPress && (buttonCombinaison == (int)Button::SEQ))				
		{			
			std::string sql = "INSERT INTO racesSequence(firstRace, secondRace, thirdRace) VALUES(" + std::string(1,this->sequence[0]) + "," + std::string(1,this->sequence[1]) + "," + std::string(1,this->sequence[2]) + ");";
			database.executeRequest(sql);
			resetSymbols();
			sequenceConfiguring = false;
			resetSymbols();
			puts("SEQUENCE CONFIGUREE ET ENREGISTREE\n");
		}
	}	
}

void ButtonController::plusMinus()
{		
	if(this->onPress && !this->started){
		if(this->sequenceConfiguring)
		{	
			seqModified = true;
			if(buttonCombinaison == (int)Button::PLUS) symbolPosition++; 
			else if(buttonCombinaison == (int)Button::MINUS) symbolPosition--;				
			if((buttonCombinaison == (int)Button::PLUS) && (symbolPosition == symbols.size())){
				symbolPosition = 0; //si +
			}	
			else if((buttonCombinaison == (int)Button::MINUS) && (symbolPosition < 0)){
				symbolPosition = symbols.size()-1; //si -
			}
			selectedSymbol = symbols.at(symbolPosition);
			SalfBoxIhm::setSequence(selectedSymbol);
		}
		else if(!this->sequenceConfiguring)
		{
			this->timerConfiguring = true;			
			pthread_t thread;
			pthread_create(&thread, NULL, &ButtonController::executeIncrementDecrement, this);				
		}	
	}	
}

void * ButtonController::incrementDecrement()
{
	if(buttonCombinaison == (int)Button::PLUS) this->minuts++ ;
	else if(buttonCombinaison == (int)Button::MINUS) this->minuts--;			
	if(this->minuts>=59) this->minuts = 0; // si +
	if(this->minuts<=0) this->minuts = 59; // si -
	SalfBoxIhm::setCompteur(this->minuts,0);							
	std::this_thread::sleep_for(std::chrono::seconds(2));
	while(this->onPress)
	{			
		if(buttonCombinaison == (int)Button::PLUS) this->minuts++;
		else if(buttonCombinaison == (int)Button::MINUS) this->minuts--;
		if(this->minuts>=59) this->minuts = 0; // si +
		else if(this->minuts<=0) this->minuts = 59; // si -		
		SalfBoxIhm::setCompteur(this->minuts,0);
		std::this_thread::sleep_for(std::chrono::milliseconds(250));
	}			
}

void * ButtonController::executeTut(void * context)
{
	return ((ButtonController *)context)->tut();
}

void * ButtonController::tut()
{
	if(this->onPress){
		SalfBoxIhm::setLeds((LedColor)( (int)LedColor::TUT_CONTACTEUR|SalfBoxIhm::getEtatLed()));
		std::this_thread::sleep_for(std::chrono::seconds(2));
		
		int truc = (SalfBoxIhm::etatLed-(int)LedColor::TUT_CONTACTEUR);
		if(truc < 0)
			truc = 0;
		SalfBoxIhm::setLeds((LedColor)truc, true);
	}
}

#ifndef NDEBUG

	//	UBUNTU	g++ -o ButtonControllerUt ButtonController.cpp SalfBoxIhm.cpp Flight.cpp Flight.cpp Database.cpp wiringUbuntu.cpp -l sqlite3 -pthread -D _UBUNTU_ -std=c++11 -D _ButtonController_UT_ 
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
