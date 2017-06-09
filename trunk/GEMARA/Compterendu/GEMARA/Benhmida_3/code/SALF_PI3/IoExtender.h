/**
* \file LedColor.h
* $Author: Benhmida$
* $Rev$
* $Date$

\brief Projet : GEMARA
*******************************************************/
#ifndef _IoExtender_H
#define _IoExtender_H

/**
 * \enum IoExtender
 * \brief Enum contenant la correspondance entre les éléments du Ioextender (leds + afficheur : sequence, minutes, secondes) et leur valeurs dans le tableau envoyé sur le spi
 * $Author: Benhmida$ 
 * $Rev$
 * $Date$
 */
enum IoExtender 
{
	LEDS = 0,
	SEQUENCE = 1, 
	SECONDS = 2, 
	MINUTS = 3
};
#endif


