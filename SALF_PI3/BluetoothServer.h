/**
 * \file BluetoothServer.h
 * $Author: BENHMIDA$
 * $Rev: 590 $
 * $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $

 \brief Projet : GEMARA
 *******************************************************/
 
#ifndef BluetoothServer_H_
#define BluetoothServer_H_

#include <unistd.h>
#include <stdio.h>
#include <string.h>
#include <string>
#include <sys/socket.h>	// socket
#include <bluetooth/bluetooth.h> // bluetooth
#include <bluetooth/rfcomm.h> // bluetooth

#define MAX_BUFFER_SIZE 255

/**
* \class BluetoothServer
* \brief permet de créer un serveur bluetooth
* \author Benhmida
* \version $Rev: 590 $
* \date $Date: 2017-04-17 23:07:09 +0200 (lun. 17 mai 2017) $
*/

class BluetoothServer
{
	private:
		struct sockaddr_rc loc_addr, rem_addr;
		int s, client, bytes_read;		
		socklen_t opt;   
		
	public:
		
		/**
		* \fn    BluetoothServer();
		* \brief constructeur : permet d'instancier les attributs
		*/
		BluetoothServer();
		
		/**
		* \fn    ~BluetoothServer();
		* \brief destructeur : permet de fermer les sockets
		*/
		~BluetoothServer(){
			close(client);
			close(s);
		}
		
		void closeClientSocket();
		
		/**
		* \fn   void launch();
		* \brief permet de démarrer le serveur	
		*/
		void launch();
		
		/**
		* \fn   void readData();
		* \brief permet de réceptionner une donnée
		* * \return retourne une string contenant les données reçues
		*/
		std::string readData();
		
		/**
		* \fn   void writeData();
		* \brief permet d'envoyer une donnée
		* * \param toSend : string contenant les données à envoyer
		*/
		void writeData(std::string toSend);

};
#endif /* BluetoothServer_H_ */

