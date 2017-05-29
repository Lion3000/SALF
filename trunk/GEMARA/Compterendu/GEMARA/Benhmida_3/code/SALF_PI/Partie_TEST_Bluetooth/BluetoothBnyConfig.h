/*
 * BluetoothBnyConfig.h
 *
 *  Created on: 23 mars 2017
 *      Author: gemara
 */


#define SERVER_MAC_ADRESS "B8:27:EB:26:5B:C7"

#ifndef BLUETOOTHBNYCONFIG_H_
#define BLUETOOTHBNYCONFIG_H_

/**
 * \enum BluetoothBnyConfig
 * \brief Enum contenant les pins gpio de chaque boutons du boitier SALF
 * $Author: Benhmida$
 * $Rev: 597 $
 * $Date: 2017-04-24 23:17:55 +0200 (lun. 24 avril 2017) $
 */
enum BluetoothBny
{
	BUTTONS = 0, 		
	DISPLAY = 1,				
	LEDS = 2,				
	KLAXON = 3,				
	SPEAKERS = 4			
};


#endif /* BUTTONCONFIG_H_ */
