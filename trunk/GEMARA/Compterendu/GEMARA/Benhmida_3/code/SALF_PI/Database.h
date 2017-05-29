/**
* \file Database.h
* $Author: BENHMIDA$
* $Rev: 590 $
* $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $

\brief Projet : GEMARA
*******************************************************/

#ifndef _Database_H
#define _Database_H

#include <stdio.h>
#include <sqlite3.h> 
#include <string> 		//	std::string
#include <string.h> 	// strlen
#include <vector> 	// strlen
#include <iostream>

/**
* \class Database
* \brief permet de lire et écrire dans une base de données
* \author Benhmida
* \version $Rev: 597 $
* \date $Date: 2017-04-24 23:17:55 +0200 (lun. 24 avril 2017) $
*/
class Database 
{
  private:
	sqlite3 * db;
	char *zErrMsg;
	sqlite3_stmt * statement;
	std::string sqlRequest;
	std::string filename;
	
  public:
  
	/**
	* \fn    Database();
	* \brief initialise les attributs de l'instance de classe et ouvre la base de données
	* \param[in] filename nom de la base de données à utiliser
	*/
    Database(std::string filename = "Salf.db") : filename(filename), zErrMsg(NULL), statement(NULL), db(NULL), sqlRequest("")
	{
		int r = sqlite3_open(filename.c_str(), &db);
		if(r)
		{
			fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
			sqlite3_close(db);
		}
	}	

	/**
	* \fn    ~Database();
	* \brief destructeur : ferme la base de données
	*/
	~Database()
	{
	 sqlite3_close(db);
	}

	/**
	* \fn    bool executeRequest();
	* \brief exécute la requête en paramètre, si c'est un Select, la méthode renvoie le résultat de la requête dans un vecteur passé en paramètre
	* \param[in] sqlRequest : requête sql à exécuter
	* \param[in] isSelectRequest : booléen indiquant si la requête est une selection de données ou non (vrai si select, faux sinon)
	* \param[in,out] data : vecteur contenant les données extraites de la base de données (utilisé si la requête est un select) 
	*/
	void executeRequest(std::string sqlRequest, bool isSelectRequest = false, std::vector<std::vector<std::string> > * data = NULL);
	
	/**
	* \fn    bool prepareRequest();
	* \brief prépare la requete et permet de tester si elle est correcte
	* \return retourne 1 si la requête s'est exécuté correctement et -1 dans le cas contraire
	*/
	int prepareRequest();
};
#endif
