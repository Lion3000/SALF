/**
* \file UcLancer.h
* $Author: BENHMIDA$
* $Rev: 590 $
* $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $

\brief Projet : GEMARA
*******************************************************/

#ifndef _UcLancer_H
#define _UcLancer_H

#include "Flight.h"
#include "raceConfig.h"
#include <stdio.h>
#include <sqlite3.h> 
#include <string> 		//	std::string
#include <string.h> 	// strlen
#include <vector> 	// strlen
#include <iostream>

/**
* \class UcLancer
* \brief permet de lancer et d'arrêter un flight
* \author Benhmida
* \version $Rev: 597 $
* \date $Date: 2017-04-24 23:17:55 +0200 (lun. 24 avril 2017) $
*/
class UcLancer 
{
  private:
	Flight * flight;
	
  public:
  
		UcLancer() {} 
		//~ ~UcLancer() { this->flight = NULL; } 
		
		void doIt(Flight * flight, bool configuredTime = false, bool configuredSequence = false);
		//~ void doIt(bool configuredTime = false, bool configuredSequence = false);
		
		void stop(Flight * flight);
		//~ void stop();
	/**
		* \fn    void getSequenceFromDb();
		* \brief récupère la sequence dans la base de données
		* * \param[in,out] tableau de string contenant la séquence de course extraite de la base de données 
		*/	
		void getSequenceFromDb(std::string sequence[3]);
		
		
		/**
		* \fn    void getTimerFromDb();
		* \brief récupère le temps de départ dans la base de données
		* \return retourne un tableau d'entiers contenant les secondes et minutes extraites de la base de données
		*/
		int * getTimerFromDb();	
};
#endif
