/*
 * BluetoothBnyConfig.h
 *
 *  Created on: 23 mars 2017
 *      Author: gemara
 */

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
	BLUETOOTH_BUTTONS, 		
	BLUETOOTH_LED_RED,
    BLUETOOTH_LED_TOP,
    BLUETOOTH_LED_MIDDLE,
    BLUETOOTH_LED_BOTTOM,			
	BLUETOOTH_DISPLAY, 				
	BLUETOOTH_SPEAKERS,				
	BLUETOOTH_KLAXON			
};

enum BluetoothFrame
{
	START_STOP_ON,
	START_STOP_OFF,
	PLUS_ON,
	PLUS_OFF,
	MINUS_ON,
	MINUS_OFF,
	SEQ_ON,
	SEQ_OFF,
	TUT_ON,
	TUT_OFF,
	KLAXON_ON,
	KLAXON_OFF,
	BOTTOM_LED_ON,
	BOTTOM_LED_OFF,
	MIDDLE_LED_ON,
	MIDDLE_LED_OFF,
	TOP_LED_ON,
	TOP_LED_OFF,
	RED_LED_ON,
	RED_LED_OFF,
	DIPLAY_OFF,
	DIPLAY0,
	DIPLAY1,
	DIPLAY2,
	DIPLAY3,
	DIPLAY4,
	DIPLAY5,
	DIPLAY6,
	DIPLAY7,
	DIPLAY8,
	DIPLAY9,	
	SPEAKER_ON,
	SPEAKER_OFF,
	END_OF_TEST		
};

#endif /* BUTTONCONFIG_H_ */
