
#include "UcTester.h"
#include "UcLancer.h"
#include "ButtonController.h"
#include "SalfBoxIhm.h"
#include "BluetoothServer.h"


#ifdef _SALF_

	void * fonction1(void * arg){
		while(true)
		{
			SalfBoxIhm::updateIoExtender();
		}
	}

	void * fonction2(void * arg){
		
		BluetoothServer * bluetoothServer;
		while(true){
			try{
				bluetoothServer = new BluetoothServer();
				SalfBoxIhm::setIsTesting(true);								
				UcTester().doIt(bluetoothServer);
			}								
			catch(std::invalid_argument error){
				puts("fin test mode");
				SalfBoxIhm::setIsTesting(false);
				SalfBoxIhm::initializeInterrupt();
				delete bluetoothServer;
			}
		}				
	}

	void * fonction3(void * arg){
		
		ButtonController * buttonController = new ButtonController(SalfBoxIhm::getIoExtenderFileGet());
		while(true)
		{
			buttonController->getButtonsState(); 
		}	
	}

	int main(int argc, char** argv)
	{
		int status;
		SalfBoxIhm::init();
		SalfBoxIhm::clearIoExtender();
		ButtonController * buttonController = new ButtonController(SalfBoxIhm::getIoExtenderFileGet());	
		
		pthread_t t1, t2, t3;
		pthread_create(&t1, NULL, fonction1, NULL);
		pthread_create(&t2, NULL, fonction2, NULL);
		pthread_create(&t3, NULL, fonction3, NULL);
		pthread_join(t1, NULL);
		pthread_join(t2, NULL);
		pthread_join(t3, NULL);
	}
		

#endif
	// 		g++ -o Salf *.cpp -I/usr/include/espeak -L/usr/lib/ -lespeak -lportaudio -l wiringPi -l sqlite3 -lbluetooth -pthread -std=c++11 -D _SALF_
