/*****************************************************
* \file UcLancer.cpp
* $Author: BENHMIDA$
* $Rev: 590 $
* $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $

\brief Projet : GEMARA
*******************************************************/

#include "UcLancer.h"

//~ void UcLancer::doIt(bool configuredTime, bool configuredSequence)
void UcLancer::doIt(Flight * flight, bool configuredTime, bool configuredSequence)
{
	this->flight = new Flight();
	//paramétrage du timer
	if(configuredTime){
		int * timer = getTimerFromDb();
		flight->setMinuts(timer[0]);
		flight->setSeconds(timer[1]);
		free(timer);		
	}
	else{
		flight->setMinuts(DEFAULT_STARTING_TIME);
		flight->setSeconds(0);
	}
	//paramétrage de la séquence
	if(configuredSequence){	
		std::string sequenceList[3];
		getSequenceFromDb(sequenceList);
		char seqTotal[3];
		seqTotal[0] = sequenceList[0][0];
		seqTotal[1] = sequenceList[1][0];
		seqTotal[2] = sequenceList[2][0];	
		flight->setCompleteSequence(seqTotal[0], seqTotal[1], seqTotal[2]);	
			}		
	else{
		flight->setCompleteSequence(DEFAULT_FIRST_RACE, DEFAULT_SECOND_RACE, DEFAULT_THIRD_RACE);
	}		
	
	//lancement
	pthread_t threadLaunch;
	//~ pthread_create(&threadLaunch, NULL, &Flight::executeStart,this->flight);
	pthread_create(&threadLaunch, NULL, &Flight::executeStart,flight);
}

void UcLancer::stop(Flight * flight){
//~ void UcLancer::stop(){
	if(flight->getIsActive()){
		flight->stop();
	}	
}


int * UcLancer::getTimerFromDb()
{
	Database database;
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

void UcLancer::getSequenceFromDb(std::string sequence[3])
{
	Database database;
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

#ifndef NDEBUG

	//			g++ -o UcLancerUt UcLancer.cpp -l sqlite3 -std=c++11 -D _UcLancer_UT_ 
	
using namespace std;

	#include <assert.h>
	#ifdef _UcLancer_UT_
		int main(int argc, char** argv)
		{
			
			return 0;
		}
	#endif
#endif

// doc : https://www.sqlite.org/cintro.html
