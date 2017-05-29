/**
 * \file Flight.h
 * $Author: BENHMIDA$
 * $Rev: 590 $
 * $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $

 \brief Projet : GEMARA
 *******************************************************/
 
#ifndef FLIGHT_H_
#define FLIGHT_H_

#include <unistd.h>

#include "Database.h"
#include "SalfBoxIhm.h"
#include "raceConfig.h"
#include "LedColor.h"
#include "Speaker.h"
#include <map>

/**
* \class Flight
* \brief permet de paramétrer, lancer et arrêter un flight  
* \author Benhmida
* \version $Rev: 590 $
* \date $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $
*/

class Flight
{
	private:
	
		Database database;
		bool isActive, stopNow;
		char currentRace;
		Speaker * speaker;
		char completeSequence[Race::MAX_RACE_NUMBER];
		int minuts, seconds;
		std::map<char,LedColor> mapRaceLeds;
		std::map<LedColor,LedColor> mapLedsReds;		
		
	public:

		/**
		* \fn    Flight();
		* \brief initialise les attributs de la classe
		*/
		Flight();
		
		/**
		* \fn    ~Flight();
		* \brief destructeur 
		*/
		~Flight(){speaker = NULL;}
		
		/**
		* \fn    void initializeMapRaceLeds();
		* \brief initialise la map reliant les numéros de course et les leds à allumer
		*/
		void initializeMapRaceLeds();
		
		/**
		* \fn    void start();
		* \brief demarre le lancement du flight
		*/
		void * start();
		
		/**
		* \fn    void stop();
		* \brief stoppe le lancement du flight
		*/		
		void stop();
		
		/**
		* \fn    void playSeconds();
		* \brief lance le décompte vocal des secondes
		*/	
		void * playSeconds();
		
		/**
		* \fn    void executeStart();
		* \brief permet à la méthode start d'être utilisée dans un tread
		* \param context instance appelante
		* \return retourne la méthode start
		*/
		static void * executeStart(void * context);
		
		/**
		* \fn    void executePlaySeconds();
		* \brief permet à la méthode start d'être utilisée dans un tread
		* \param context instance appelante
		* \return retourne la méthode playSeconds
		*/
		static void * executePlaySeconds(void * context);			
			
		/**
		* \fn    void setSeconds();
		* \brief change la valeur de l'attribut seconds
		* \param[in] seconds valeur à insérer dans l'attribut seconds
		*/
		void setSeconds(int seconds);
		
		/**
		* \fn    bool getIsActive();
		* \brief indique si le flight est en cours de lancement ou non
		* \return retourne vrai si le flight est en cours de lancement et false dans le cas contraire
		*/
		bool getIsActive();
		
		/**
		* \fn    void setMinuts();
		* \brief change la valeur de l'attribut minuts
		* \param[in] minuts valeur à insérer dans l'attribut minuts
		*/
		void setMinuts(int minuts);
		
		/**
		* \fn    void setCompleteSequence();
		* \brief permet de paramétrer la séquence de course du flight en cours
		* \param[in] first numéro de course du premier départ
		* \param[in] second numéro de course du deuxième départ
		* \param[in] third numéro de course du troisième départ
		*/
		void setCompleteSequence(char first, char second, char third);
		
		/**
		* \fn    void setSequence();
		* \brief met à jour le digit correspondant au numéro de course (sequence) sur l'afficheur
		* \param[in] sequence à afficher
		*/
		void setSequence(char sequence);
		
		/**
		* \fn    void checkMinuts();
		* \brief active les différentes leds et change le numéro de sequence en fonction du chronomètre
		* \param m minute à tester 
		*/
		void checkMinuts(int m);
		
		/**
		* \fn    void doFirstRace();
		* \brief envoie les signaux visuels de la première course
		* \param m minute actuelle
		*/
		void doFirstRace(int m);
		
		/**
		* \fn    void doSecondRace();
		* \brief envoie les signaux visuels de la deuxième course
		* \param m minute actuelle
		*/
		void doSecondRace(int m);
		
		/**
		* \fn    void doThirdRace();
		* \brief envoie les signaux visuels de la troisième course
		* \param m minute actuelle 
		*/
		void doThirdRace(int m);
		
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
#endif /* FLIGHT_H_ */
