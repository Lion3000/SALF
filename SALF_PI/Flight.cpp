/*
 * Flight.cpp
 *
 *  Created on: 9 mars 2017
 *      Author: gemara
 */

#include "Flight.h"

Flight::Flight()
{
	isActive = false; 
	stopNow = false;  
	speaker = new Speaker();
	completeSequence[Race::FIRST] = '1';
	completeSequence[Race::SECOND] = '2';
	completeSequence[Race::THIRD] = '3';	
	currentRace = '0';
	initializeMapRaceLeds();	
}

void Flight::setCompleteSequence(char first, char second, char third){
	this->completeSequence[Race::FIRST] = first;
	this->completeSequence[Race::SECOND] = second;
	this->completeSequence[Race::THIRD] = third;
}

void Flight::initializeMapRaceLeds()
{
	mapRaceLeds.insert(std::make_pair('0', LedColor::ALL_LEDS_OFF));	
	mapRaceLeds.insert(std::make_pair('1', LedColor::TOP_LED));
	mapRaceLeds.insert(std::make_pair('2', LedColor::TOP_MIDDLE));
	mapRaceLeds.insert(std::make_pair('3', LedColor::ALL_3_LEDS));
	
	mapLedsReds.insert(std::make_pair(LedColor::TOP_LED, LedColor::TOP_AND_RED));
	mapLedsReds.insert(std::make_pair(LedColor::TOP_MIDDLE, LedColor::TOP_MIDDLE_AND_RED));
	mapLedsReds.insert(std::make_pair(LedColor::ALL_3_LEDS, LedColor::ALL_LEDS_ON));
	mapLedsReds.insert(std::make_pair(LedColor::ALL_LEDS_OFF, LedColor::ALL_LEDS_OFF));
}

int * Flight::getTimerFromDb()
{
	std::vector<std::vector<std::string> > resultats; 
	std::vector<std::vector<std::string> >::iterator row;
	std::vector<std::string>::iterator col;	
	
	database.executeRequest("SELECT minuts, seconds FROM timer ORDER BY id DESC LIMIT 1", true, &resultats);	
	int * timer; 
	int i = 0;	
	timer = (int*) malloc (sizeof(int) * 2);
	row = resultats.begin();
	for (col = row->begin(); col != row->end(); col++) {
		timer[i] =  std::stoi(*col);
		i++;
	}
	return timer;
}

void Flight::getSequenceFromDb(std::string sequence[3])
{
	std::vector<std::vector<std::string> > resultats; 
	std::vector<std::vector<std::string> >::iterator row;
	std::vector<std::string>::iterator col;	
	
	database.executeRequest("SELECT firstRace, secondRace, thirdRace FROM racesSequence ORDER BY id DESC LIMIT 1", true, &resultats);	
	int i = 0;	
	row = resultats.begin();
	for (col = row->begin(); col != row->end(); col++) {
		sequence[i] = *col;
		i++;
	}
}


void Flight::doFirstRace(int m)
{
	if(m == 15)
	{
		this->currentRace = this->completeSequence[Race::FIRST];
		SalfBoxIhm::setSequence(currentRace);
		SalfBoxIhm::setLeds(mapRaceLeds.at(currentRace)); // lancement course 1
	}
	if(currentRace != '0') 
	{		
		switch(m)
		{
			case 14:
				SalfBoxIhm::setLeds(mapLedsReds.at(mapRaceLeds.at(currentRace)));
				break;
				
			case 11:
				SalfBoxIhm::setLeds(mapRaceLeds.at(currentRace));
				break;
		}
	}
}

void Flight::doSecondRace(int m)
{
	if(m == 10)
	{
		currentRace = completeSequence[Race::SECOND];
		SalfBoxIhm::setSequence(currentRace);
		SalfBoxIhm::setLeds(mapRaceLeds.at(currentRace)); // lancement course 2
	}
	if(currentRace != '0') 
	{
		switch(m)
		{
			case 9:
				SalfBoxIhm::setLeds(mapLedsReds.at(mapRaceLeds.at(currentRace)));
				break;
			case 6:
				SalfBoxIhm::setLeds(mapRaceLeds.at(currentRace));
				break;
			default: 
				break;
		}
	}
}

void Flight::doThirdRace(int m)
{	
	if(m == 5)
	{
		currentRace = completeSequence[Race::THIRD];
		SalfBoxIhm::setSequence(currentRace);
		SalfBoxIhm::setLeds(mapRaceLeds.at(currentRace)); // lancement course 3
	}
	switch(m)
	{
		case 4:
			SalfBoxIhm::setLeds(mapLedsReds.at(mapRaceLeds.at(currentRace)));
			break;
		case 1:
			SalfBoxIhm::setLeds(mapRaceLeds.at(currentRace));
			break;
		default: 
			break;
	}
}

void Flight::checkMinuts(int m){
	if(m <= 15 && m > 10) doFirstRace(m);
	if(m <= 10 && m > 5) doSecondRace(m);
	if(m <= 5 && m >= 0) doThirdRace(m);
}

bool Flight::getIsActive(){
	return this->isActive;
	
}


void * Flight::executePlaySeconds(void * context){
	
	return ((Flight *)context)->playSeconds();
}

void * Flight::playSeconds(){
	if(this->seconds <= 10|| this->seconds == 20 || this->seconds == 30){
		puts("condition ");	
		speaker->play(std::to_string(this->seconds));		
	}
} 

void * Flight::start()
{	
	puts("Flight lancé\n");
	printf(" sequence du flight %c : %c : %c\n",this->completeSequence[Race::FIRST], this->completeSequence[Race::SECOND], this->completeSequence[Race::THIRD]);	
	isActive = true;
	char car;
	
	while (this->isActive)
	{
		while((this->minuts >= 0) && (!this->stopNow))
		{
			if(this->seconds == 0) SalfBoxIhm::setCompteur(this->minuts, this->seconds);
			while((this->seconds > 0) && (!this->stopNow))
			{
				if((this->seconds < 31) && ((this->minuts == 15) || (this->minuts == 10) || (this->minuts == 5))) {	
					pthread_t threadLaunch;
					pthread_create(&threadLaunch, NULL, Flight::executePlaySeconds,this);					
				}
				this->seconds--;				
				SalfBoxIhm::setCompteur(this->minuts, this->seconds);
				printf("%d:%d\n",minuts, seconds);
				//~ car = getchar();
				std::this_thread::sleep_for(std::chrono::seconds(1));				
			}
			checkMinuts(this->minuts);
			this->seconds = 60;
			this->minuts--;
		}
		SalfBoxIhm::clearIoExtender();
		this->isActive = false;
	}
	puts (stopNow ? "Flight arrêté" : "Flight terminé");
	this->stopNow = false;
}	

void * Flight::executeStart(void * context)
{
	return ((Flight *)context)->start();
}

void Flight::stop()
{
	this->stopNow = true;
	printf("arrêt demandé\n");
}

void Flight::setMinuts(int minuts)
{
	this->minuts = minuts; 
	printf("minuts = %d\n",this->minuts);
}


void Flight::setSeconds(int seconds)
{
	this->seconds = seconds; 
	printf("seconds = %d\n",this->seconds);
}

#ifndef NDEBUG

//			g++ -o Flight *.cpp -I/usr/include/espeak -L/usr/lib/ -lespeak -lportaudio -l wiringPi -l sqlite3 -pthread -std=c++11 -D _Flight_UT_
//			g++ -o Flight  Flight.cpp SalfBoxIhm.cpp -D _UBUNTU_ -D _Flight_UT_  wiringUbuntu.cpp -pthread -std=c++11

#include <assert.h>
#ifdef _Flight_UT_

 #include <pthread.h>
#include <cstdint>

int main(int argc, char** argv)
{
	SalfBoxIhm::init();
	int min, sec;
	int status, test;
	Flight flight;
	pthread_t thread;
	if (fork() == 0)
	{
		//paramétrage du timer
		int * timer = flight.getTimerFromDb();
		flight.setMinuts(timer[0]);
		flight.setSeconds(timer[1]);
		free(timer);
		
		//paramétrage de la séquence
		char * sequenceList = flight.getSequenceFromDb();		
		//~ flight.setCompleteSequence(sequenceList[0],sequenceList[1],sequenceList[2]);		
		flight.setCompleteSequence('1','2','3');		
		free(sequenceList);		
		
		//lancement
		pthread_t threadLaunch;
		pthread_create(&threadLaunch, NULL, flight.executeStart,&flight);
		pthread_join(threadLaunch, NULL);
	}
	else
	{	
		//~ SalfBoxIhm::updateIoExtender();
		puts("Press Ctrl + c to quit\n");	
		while(true)
		{						
			SalfBoxIhm::updateIoExtender();
		}		
	}	
	wait(&status);
	if(WIFEXITED(status))
	{
		puts("fils terminé correctement");
	}	
	//~ flight.setSeconds(SalfBoxIhm::getSeconds());
	//~ flight.setMinuts(SalfBoxIhm::getMinuts());
	//~ pthread_create(&thread, NULL, &Flight::executeStart, &flight);
	//~ std::this_thread::sleep_for(std::chrono::seconds(15));
	//~ flight.stop();
	//~ pthread_join(thread, NULL);		
	return 0;
}
	
	

#endif
#endif



