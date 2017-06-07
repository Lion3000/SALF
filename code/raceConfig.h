/*
 * buttonConfig.h
 *
 *  Created on: 23 mars 2017
 *      Author: gemara
 */

#ifndef RACECONFIG_H_
#define RACECONFIG_H_

#define DEFAULT_STARTING_TIME 17
#define DEFAULT_FIRST_RACE '1'
#define DEFAULT_SECOND_RACE '2'
#define DEFAULT_THIRD_RACE '3'

/**
 * \enum race
 * \brief Enum contenant les courses
 * $Author: Benhmida$
 * $Rev: 590 $
 * $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $
 */
enum Race
{		
	FIRST = 0,				
	SECOND = 1,				
	THIRD = 2,
	MAX_RACE_NUMBER = 3						
};


#endif /* RACECONFIG_H_ */
