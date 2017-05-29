/**
* \file ButtonController.h
 * $Author: BENHMIDA$
 * $Rev: 597 $
 * $Date: 2017-04-24 23:17:55 +0200 (mar. 23 mai 2017) $

 \brief Projet : GEMARA
 *******************************************************/

//printf "\x0\x0\x0\x0" > /dev/spidev0.0

#ifndef _ButtonController_H
#define _ButtonController_H

#include "buttonConfig.h"
#include "SalfBoxIhm.h"
#include "Flight.h"
#include "Database.h"
#include <map> 
#include <iostream> 
#include <algorithm> // std::find
#include <vector>
#include <stdio.h>
#include <unistd.h> // usleep (microseconds)
#include <thread> // sleep(milliseconds)
#include <pthread.h> 

class Flight;

/**
* \class ButtonController
* \brief permet de gérer les boutons du boitier SALF
* \author Benhmida
* \version $Rev: 597 $
* \date $Date: 2017-04-24 23:17:55 +0200 (lun. 24 avril 2017) $
*/
class ButtonController 
{
	private:
		
		int nbAppuiSeq, symbolPosition, currentRace;
		int buttonCombinaison, minuts, seconds, idFileButtons;
		char sequence[3];
		char selectedSymbol;
		bool started, sequenceConfiguring, timerConfiguring, onPress, seqModified;
		std::vector<char> symbols;		
		Database database;
		Flight * flight;		
		
		/**
		* \fn    void executeIncrementDecrement();
		* \brief permet de lancer la méthode IncrementDecrement dans un thread
		* \param[in] context instance en cours
		* \return retourne la méthode IncrementDecrement de l'instance en cours
		*/
		static void * executeIncrementDecrement(void * context);
		
		/**
		* \fn    void executeSetUpSequence();
		* \brief permet de lancer la méthode SetUpSequence dans un thread
		* \param[in] context instance en cours
		* \return retourne la méthode SetUpSequence de l'instance en cours
		*/
		static void * executeSetUpSequence(void * context);
		
		/**
		* \fn    void executeStartStopFlightLaunch();
		* \brief permet de lancer la méthode StopFlightLaunch dans un thread
		* \param[in] context instance en cours
		* \return retourne la méthode StopFlightLaunch de l'instance en cours
		*/
		static void * executeStartStopFlightLaunch(void * context);
		
		/**
		* \fn    void executeTut();
		* \brief permet de lancer la méthode tut dans un thread
		* \param[in] context instance en cours
		* \return retourne la méthode tut de l'instance en cours
		*/
		static void * executeTut(void * context);
		
		/**
		* \fn    void startStopFlightLaunch();
		* \brief permet de démarrer ou d'arrêter le lancement du flight
		*/
		void * startStopFlightLaunch();
		
		/**
		* \fn    void incrementDecrement();
		* \brief permet d'effectuer l'incrémentation et la décrémentation des minutes sur l'afficheur du boitier
		*/
		void * incrementDecrement();
		
		/**
		* \fn    void setUpSequence();
		* \brief permet de gérer le paramétrage et l'enregistrement de la séquence de course
		*/
		void * setUpSequence();	
		
		/**
		* \fn    void tut();
		* \brief envoie un signal sonore
		*/	
		void * tut();
		
		/**
		* \fn    void resetSymbols();
		* \brief remet à jour les symbols contenus dans la map permettant de paramétrer la séquence
		*/
		void resetSymbols();	
			
		/**
		* \fn    void seq();
		* \brief gère l'appui le bouton séquence
		*/	
		void seq();	
		
		/**
		* \fn    void plusMinus();
		* \brief gère l'appui le bouton plusMinus
		*/					
		void plusMinus();	
		
		/**
		* \fn    void startStop();
		* \brief gère l'appui le bouton startStop
		*/		
		void startStop();
		
		/**
		* \fn    void clearTimer();
		* \brief permet de remettre à zéro les minutes et secondes sur l'afficheur
		*/
		void clearTimer();	
		
		/**
		* \fn    void manageButtons();
		* \brief permet de lancer la méthode correspondant au bouton appuyé
		*/
		void manageButtons();
		
		/**
		* \fn    void getAvailableSymbol();
		* \brief permet d'afficher le premier numéro de course disponible (non utilisé lors du paramétrage de la séquence)
		*/
		void getAvailableSymbol();
		
		/**
		* \fn    bool checkSequenceConfiguration();
		* \brief vérifie que la séquence de courses configurée soit correcte (que la même course ne figure pas plusieurs fois dans la séquence)
		* \return retourne vrai si la séquence est correcte et faux dans le cas contraire
		*/
		bool checkSequenceConfiguration();
				
	public : 
	
		/**
		* \fn    ButtonController();
		* \brief initialise les attributs de l'instance de classe
		*/
		ButtonController(int idFileButtons);
		
		/**
		* \fn   ~ButtonController();
		* \brief destructeur : vide le pointeur contenant le flight à lancer
		*/
		~ButtonController(){ flight = NULL; }	
		
		/**
		* \fn    void getButtonsState();
		* \brief récupère l'état des boutons et l'identifiant du bouton ayant été appuyé
		*/		
		void getButtonsState();	
		
		/**
		* \struct RequestGet
		* \brief structure utilisé pour lire dans la file de message contenant les appuis sur les boutons
		*/		
		struct RequestGet 
		{ 
			long type; 
			int data[1];
		};
};
#endif
