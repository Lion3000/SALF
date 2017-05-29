/*****************************************************
* \file Speaker.cpp
* $Author: BENHMIDA$
* $Rev: 588 $
* $Date: 2017-04-14 15:34:52 +0200 (ven. 14 avril 2017) $

\brief Projet : GEMARA
*******************************************************/

#include "Speaker.h"

void Speaker::play(std::string textToPlay)
{
	printf("textToPlay %s\n", textToPlay.c_str());
	espeak_Synth(textToPlay.c_str(), strlen(textToPlay.c_str()), 0, POS_CHARACTER, textToPlay.length(), 0, 0, NULL);
	//~ espeak_Synth(textToPlay.c_str(), textToPlay.length(), 0, POS_CHARACTER, textToPlay.length(), 0, 0, NULL);
	//~ espeak_Synth(truc, textToPlay.length(), 0, POS_CHARACTER, 0, 0, 0, NULL);
	espeak_Synchronize();
}

bool Speaker::isPlaying()
{
	return (espeak_IsPlaying() == 1) ? true:false ;
}

#ifndef NDEBUG

	//			g++ -I/usr/include/espeak -L/usr/lib/ -lespeak -lportaudio -o Speaker Speaker.cpp -std=c++11 -D _Speaker_UT_ 

	#include <assert.h>
	#ifdef _Speaker_UT_
	 
	int main(int argc, char** argv)
	{
		Speaker speaker("fr");
		speaker.play("Ceci est un test");
	}
	#endif
#endif

