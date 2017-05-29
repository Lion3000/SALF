/*
 * buttonConfig.h
 *
 *  Created on: 23 mars 2017
 *      Author: gemara
 */

#ifndef BUTTONCONFIG_H_
#define BUTTONCONFIG_H_

#define PRESS 1
#define RELEASED 2
#define TIME_ANTIREBOUND 100

/**
 * \enum buttonConfig
 * \brief Enum contenant les pins gpio de chaque boutons du boitier SALF
 * $Author: Benhmida$
 * $Rev: 597 $
 * $Date: 2017-04-24 23:17:55 +0200 (lun. 24 avril 2017) $
 */
enum ButtonGpio
{
	START_STOP_PIN = 13, 		// ascii : n
	SEQ_PIN = 18,				// ascii : s
	PLUS_PIN = 15,				// ascii : q
	MINUS_PIN = 16,				// ascii : p
	TUT_PIN = 29				// ascii : ~
};

enum Button
{
	START_STOP = 16, 	
	SEQ = 8,				
	PLUS = 4,				
	MINUS = 2,	
	CLEAR = 6,		
	TUT = 1			
};


#endif /* BUTTONCONFIG_H_ */
