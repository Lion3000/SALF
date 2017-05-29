/**
* \file Speaker.h
* $Author: BENHMIDA$
* $Rev: 588 $
* $Date: 2017-04-14 15:34:52 +0200 (ven. 23 mai 2017) $

\brief Projet : GEMARA
*******************************************************/

#ifndef _Speaker_H
#define _Speaker_H

#include <stdio.h> 
#include <string.h> 
#include <string> 
#include "/usr/include/espeak/speak_lib.h" 


/**
* \class Speaker
* \brief permet d'effectuer un décompte sonore  
* \author Benhmida
* \version $Rev: 590 $
* \date $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $
*/
class Speaker 
{
	private:
	
		std::string voiceLanguage;
 
	public : 
	
		/**
		* \fn    Speaker();
		* \brief initialise les attributs de la classe
		*/
		Speaker(std::string voiceLanguage = "en") : voiceLanguage(voiceLanguage){
			espeak_Initialize(AUDIO_OUTPUT_PLAYBACK, 0, NULL, 0);
			espeak_SetVoiceByName(voiceLanguage.c_str());
		}
		
		/**
		* \fn    void play();
		* \brief effectue synthèse vocale du texte passé en paramètre
		* \param[in] textToPlay : texte à synthétiser 
		*/
		void play(std::string textToPlay);
		
		/**
		* \fn    bool isPlaying();
		* \brief indique si un texte est en cours de synthétisation vocale ou non
		* \return retourne vrai si le texte est en cours de synthétisation et faux dans le cas contraire
		*/
		bool isPlaying();
		
};
#endif
 
