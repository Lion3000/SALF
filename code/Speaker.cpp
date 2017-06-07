/*****************************************************
* \file Speaker.cpp
* $Author: BENHMIDA$
* $Rev: 588 $
* $Date: 2017-04-14 15:34:52 +0200 (ven. 14 avril 2017) $

\brief Projet : GEMARA
*******************************************************/

#include "Speaker.h"
#ifdef NDEBUG
#define printf //printf
#endif

void Speaker::play(std::string textToPlay)
{
	textToPlay+= "  ";
	espeak_Synth(textToPlay.c_str() , strlen(textToPlay.c_str()) , 0 , POS_CHARACTER , 0 , espeakCHARS_AUTO , NULL , NULL);
}

bool Speaker::isPlaying()
{
	return (espeak_IsPlaying() == 1) ? true:false ;
}

#ifndef NDEBUG

	//			g++ -o Speaker Speaker.cpp -I/usr/include/espeak -L/usr/lib/ -lespeak -lportaudio -std=c++11 -D _Speaker_UT_ 

	#include <assert.h>
	#include <unistd.h>
	#include <stdio.h>
	
	#ifdef _Speaker_UT_
	 
	int main(int argc, char** argv)
	{
		Speaker speaker("en");
		
		for(int i =32; i >= 0; i--)
		{
			speaker.play(std::to_string(i));
			sleep(1);
		}
		//printf("%s : %d\n", __FILE__,__LINE__);
		return 0;
	}
	#endif
#endif

