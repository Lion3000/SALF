/**
* \file LedColor.h
* $Author: Benhmida$
* $Rev$
* $Date$

\brief Projet : GEMARA
*******************************************************/
#ifndef _LedColor_H
#define _LedColor_H

/**
 * \enum LedColor
 * \brief Enum contenant les valeurs des leds et leur positions
 * $Author: Benhmida$ 
 * $Rev$
 * $Date$
 */
enum LedColor 
{
	RED = 8,
	TOP_LED = 4, 
	MIDDLE_LED = 1, 
	BOTTOM_LED = 2, 
	TOP_MIDDLE = 5,
	ALL_3_LEDS = 7,
	TOP_AND_RED = 12,
	TOP_MIDDLE_AND_RED = 13,
	MIDDLE_AND_RED = 9,
	ALL_LEDS_ON = 15,
	ALL_LEDS_OFF = 0,
	TUT_CONTACTEUR = 16,
	
	TUT_RED = RED|TUT_CONTACTEUR,
	TUT_TOP_LED = TOP_LED|TUT_CONTACTEUR,
	TUT_MIDDLE_LED = MIDDLE_LED|TUT_CONTACTEUR,
	TUT_BOTTOM_LED = BOTTOM_LED|TUT_CONTACTEUR,
	TUT_TOP_MIDDLE = TOP_MIDDLE|TUT_CONTACTEUR,
	TUT_ALL_3_LEDS = ALL_3_LEDS|TUT_CONTACTEUR,
	TUT_TOP_AND_RED = TOP_AND_RED|TUT_CONTACTEUR,
	TUT_TOP_MIDDLE_AND_RED = TOP_MIDDLE_AND_RED|TUT_CONTACTEUR,
	TUT_MIDDLE_AND_RED = MIDDLE_AND_RED|TUT_CONTACTEUR,
	TUT_ALL_LEDS_ON = ALL_LEDS_ON|TUT_CONTACTEUR,
	TUT_ALL_LEDS_OFF = ALL_LEDS_OFF|TUT_CONTACTEUR
	
	
};
#endif


