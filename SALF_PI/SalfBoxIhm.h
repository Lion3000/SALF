/**
 * \file SalfBoxIhm.h
 * $Author: BENHMIDA$
 * $Rev: 597 $
 * $Date: 2017-04-24 23:17:55 +0200 (lun. 24 avril 2017) $

 \brief Projet : GEMARA
 *******************************************************/

#ifndef _SalfBoxIhm_H
#define _SalfBoxIhm_H

#include <sys/msg.h>	//file de messages
#include <sys/types.h>	// file de messages
#include <sys/ipc.h>	//file de messages
#include <sys/wait.h> 
#include <errno.h> 
#include <unistd.h>
#include <map>
#include <chrono>
#include <thread>

#ifdef _UBUNTU_
	#include "wiringUbuntu.h"
	#define INT_EDGE_BOTH 2
#else
	#include <wiringPi.h> //wiringPi gpio
#endif

#include "IoExtender.h"
#include "buttonConfig.h"
#include "LedColor.h"

/**
* \class SalfBoxIhm
* \brief représente le boitier SALF et permet de récupérer et changer son état
* \author Benhmida
* \version $Rev: 597 $
* \date $Date: 2017-04-24 23:17:55 +0200 (lun. 23 mai 2017) $
*/

class SalfBoxIhm 
{
	private:
		
		static key_t keySetBox, keyGetBox;
		static int ioExtenderFileId, ioExtenderFileGet, etatLeds, buttonState;
		static std::ofstream spi;
		static std::map<ButtonGpio, Button> gpioMasques;	


	public: // constantes

		static const int IO_EXTENDER_SIZE = 4;
		static const long COMPTEUR = 2, LEDS = 3, SEQUENCE = 4;
		static char ioExtender[IO_EXTENDER_SIZE+1];	

	public:	// structures

		/**
		* \struct Request
		* \brief structure utilisée pour lire et écrire dans la file de message permettant de changer l'état du boitier (leds et afficheur)
		*/		
		struct Request 
		{ 
			long mtype; 
			uint8_t ioExtender[IO_EXTENDER_SIZE];
		};

		/**
		* \struct RequestGet
		* \brief structure utilisée pour écrire dans la file de message pour les appuis sur boutons
		*/		
		struct RequestGet 
		{ 
			long mtype; 
			int data[1];
		};

	private:	// méthodes privées

		/**
		* \fn    void initializeButtonsMap();
		* \brief initialise la map reliant les numéros de pins gpio des boutons et leurs identifiants
		*/
		static void initializeButtonsMap();
		
		/**
		* \fn    void inverseDigits();
		* \brief inverse les digits du nombre à afficher sur le boitier pour s'adapter à la contrainte matérielle de l'afficheur
		* \param[in] nb nombre à inverser
		* \return retourne le nombre prêt à l'envoi sur l'afficheur
		*/
		static uint8_t inverseDigits(uint8_t nb);
		
		/**
		* \fn    uint8_t inverseDigitsBack();
		* \brief permet de retrouver la valeur initiale d'un nombre en sortie de la méthode inverseDigits
		* \param nom description
		* \param[in] nb nombre dont on veut retrouver la valeur initiale
		* \return retourne la valeur initiale de nb
		*/
		static uint8_t inverseDigitsBack(uint8_t nb);

		static void buttonTest(ButtonGpio pin);

	public:	
		
		/**
		* \fn    void init();
		* \brief initialise les attributs et variables 
		*/
		static void init();
		
		/**
		* \fn    void updateIoExtender();
		* \brief met à jour l'afficheur
		*/
		static void updateIoExtender();
		
		/**
		* \fn    void getIoExtender();
		* \brief récupère l'état du boitier
		*/
		static void getIoExtender();
		
		/**
		* \fn    void clearIoExtender();
		* \brief met tous les digits de l'afficheur à zéro 
		*/
		static void clearIoExtender();
		
		/**
		* \fn    void getIoExtenderFileGet();
		* \brief permet d'obtenir l'identifiant de la file de messages des boutons 
		* \return retourne l'identifiant de la file 
		*/
		static int getIoExtenderFileGet();
		
		/**
		* \fn    void setCompteur();
		* \brief modifie les digits de l'afficheur correspondant aux minutes et secondes 
		* \param[in] uint8_t minuts : minutes à afficher sur le boitier
		* \param[in] uint8_t seconds: secondes à afficher sur le boitier
		*/
		static void setCompteur(uint8_t minuts, uint8_t seconds);
		
		/**
		* \fn    void setSequence();
		* \brief modifie les digits de l'afficheur correspondant à la séquence (numéro de course)
		* \param[in] sequence : numéro de sequence à afficher sur le boitier
		*/
		static void setSequence(uint8_t sequence);
			
		/**
		* \fn    void setLeds();
		* \brief allume ou éteint une ou plusieurs leds 
		* \param[in] positionLed led ou combinaison de leds à allumer ou éteindre
		*/
		static void setLeds(LedColor positionLed, bool tutEnd = false);
		
		/**
		* \fn    void getSeconds();
		* \brief retourne la valeur des secondes inscrites sur l'afficheur
		* \return retourne la valeur des secondes inscrites sur l'afficheur
		*/
		static char getSeconds();
		
		/**
		* \fn    void getMinuts();
		* \brief retourne la valeur des minutes inscrites sur l'afficheur
		* \return retourne la valeur des minutes inscrites sur l'afficheur
		*/
		static char getMinuts();
		
		/**
		* \fn    void getLeds();
		* \brief permet d'obtenir l'état actuel des leds
		* \return retourne la valeur de l'état actuel des leds
		*/
		static int getEtatLed();
		
		/**
		* \fn    void getSequence();
		* \brief retourne la sequence en cours
		* \return retourne la valeur de la sequence en cours
		*/
		static char getSequence();
		
		/**
		* \fn    void doTut();
		* \brief méthode appelé lors de l'appui sur le bouton tut
		*/
		static void doTut();
		
		/**
		* \fn    void doSeq();
		* \brief méthode appelé lors de l'appui sur le bouton Seq
		*/
		static void doSeq();
		
		/**
		* \fn    void doMinus();
		* \brief méthode appelé lors de l'appui sur le bouton -
		*/
		static void doMinus();
		
		/**
		* \fn    void doPlus();
		* \brief méthode appelé lors de l'appui sur le bouton +
		*/
		static void doPlus();
		
		/**
		* \fn    void doStartStop();
		* \brief méthode appelé lors de l'appui sur le bouton start/stop
		*/
		static void doStartStop();
};
#endif
