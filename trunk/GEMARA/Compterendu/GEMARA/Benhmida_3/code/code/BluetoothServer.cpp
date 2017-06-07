/*
 * BluetoothServer.cpp
 *
 *  Created on: 12 mai 2017
 *      Author: gemara
 */

#include "BluetoothServer.h"

BluetoothServer::BluetoothServer()
{
	this->opt = sizeof(rem_addr);
    this->s = socket(AF_BLUETOOTH, SOCK_STREAM, BTPROTO_RFCOMM); // allocate socket
	// bind socket to port 1 of the first available bluetooth adapter
    loc_addr.rc_family = AF_BLUETOOTH;
    bdaddr_t my_bdaddr_any = { 0 };
	while (bacmp(&loc_addr.rc_bdaddr, &my_bdaddr_any)){	
		loc_addr.rc_bdaddr = my_bdaddr_any;	
	}   
    loc_addr.rc_channel = 1; 
    loc_addr.rc_channel = (uint8_t) 1; // port (maximum = 30 for rfcomm)
    bind(this->s, (struct sockaddr *)&loc_addr, sizeof(loc_addr));
    launch();
}

void BluetoothServer::launch()
{
	// put socket into listening mode
	puts("waiting for connexion");
	listen(this->s, 1);
	// accept one connection
	this->client = accept(this->s, (struct sockaddr *)&rem_addr, &opt);
	puts("Connexion acceptée");
}

void BluetoothServer::closeClientSocket()
{
	close(this->client);
}

std::string BluetoothServer::readData()
{	  
	// read data from the client	
	char buf[MAX_BUFFER_SIZE];
	memset(buf, 0, sizeof(buf));
    bytes_read = recv(client, buf, sizeof(buf),0);  
     
    std::string receivedData;
    if( bytes_read > 0 ) {
		
		std::string text = std::string(buf);
		std::size_t pos = text.find(0x02);      
		std::size_t posEnd = text.find(0x03);      
		receivedData = text.substr(pos+1, posEnd-1);
    }
    return receivedData;
}

void BluetoothServer::writeData(std::string toSend)
{
	char buffer[strlen(toSend.c_str())+2];	
	memset(buffer, 0, sizeof(buffer));
	sprintf(buffer, "%c%s%c",0x02, toSend.c_str(), 0x03);
	write(client, buffer, sizeof(buffer));
}

#ifndef NDEBUG

//	PI		g++ -o BluetoothServer BluetoothServer.cpp  -lbluetooth-dev -pthread -std=c++11 -D _BluetoothServer_UT_
//			g++ -o BluetoothServer  BluetoothServer.cpp -lbluetooth -D _BluetoothServer_UT_ -pthread -std=c++11

#include <assert.h>
#ifdef _BluetoothServer_UT_

 #include <pthread.h>
#include <cstdint>

int main(int argc, char** argv)
{
	BluetoothServer bluetoothServer;
	bluetoothServer.launch();
	while(true){
		std::string data = bluetoothServer.readData();
		bluetoothServer.writeData(data);   
	}	
	return 0;
}
	
	// sudo apt-get install libbluetooth-dev

#endif
#endif



