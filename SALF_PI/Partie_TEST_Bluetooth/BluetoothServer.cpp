/*
 * BluetoothServer.cpp
 *
 *  Created on: 9 mars 2017
 *      Author: gemara
 */

#include "BluetoothServer.h"

BluetoothServer::BluetoothServer(std::string serverMacAddress)
{
	this->serverMacAddress = serverMacAddress;
	this->opt = sizeof(rem_addr);
    this->s = socket(AF_BLUETOOTH, SOCK_STREAM, BTPROTO_RFCOMM); // allocate socket

    // bind socket to port 1 of the first available local bluetooth adapter
    loc_addr.rc_family = AF_BLUETOOTH;
    str2ba(this->serverMacAddress.c_str(), &loc_addr.rc_bdaddr); // hci0 : server adress
    //~ loc_addr.rc_bdaddr = *BDADDR_ANY;
    loc_addr.rc_channel = (uint8_t) 1; // port (maximum = 30 for rfcomm)
    bind(this->s, (struct sockaddr *)&loc_addr, sizeof(loc_addr));
		puts("bind ok");
}

void BluetoothServer::launch()
{
	// put socket into listening mode
	puts("attente de connexion");
    listen(this->s, 1);
    // accept one connection
    client = accept(this->s, (struct sockaddr *)&rem_addr, &opt);
    ba2str( &rem_addr.rc_bdaddr, buf );
    fprintf(stderr, "accepted connection from %s\n", buf);
    memset(buf, 0, sizeof(buf));
}

std::string BluetoothServer::readData()
{	  
	// read data from the client
    bytes_read = read(client, this->buf, sizeof(this->buf));
    if( bytes_read > 0 ) {
        printf("received [%s]\n", this->buf);
    }
    return std::string(buf);
}

void BluetoothServer::writeData(std::string toSend)
{
	memcpy(this->buf, toSend.c_str(), sizeof(toSend));
	write(client, this->buf, sizeof(this->buf));	
}


#ifndef NDEBUG


//	PI		g++ -o BluetoothServer BluetoothServer.cpp  -lbluetooth -pthread -std=c++11 -D _BluetoothServer_UT_
//			g++ -o BluetoothServer  BluetoothServer.cpp -D _BluetoothServer_UT_ -pthread -std=c++11

#include <assert.h>
#ifdef _BluetoothServer_UT_

 #include <pthread.h>
#include <cstdint>

int main(int argc, char** argv)
{
	BluetoothServer bluetoothServer("60:36:DD:39:22:30");
	bluetoothServer.launch();
	bluetoothServer.writeData("test from serveur");
	std::string test = bluetoothServer.readData();	
	
	return 0;
}
	
	// sudo apt-get install libbluetooth-dev

#endif
#endif



