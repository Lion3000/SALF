/*****************************************************
* \file Database.cpp
* $Author: BENHMIDA$
* $Rev: 590 $
* $Date: 2017-04-17 23:07:09 +0200 (lun. 17 avril 2017) $

\brief Projet : GEMARA
*******************************************************/

#include "Database.h"

void Database::executeRequest(std::string sqlRequest, bool isSelectRequest, std::vector<std::vector<std::string> > * data)
{
	this->sqlRequest = sqlRequest;
	if(prepareRequest()== -1) { exit(0);}
	if(isSelectRequest && data != NULL) // si select
	{
		int currentRow = 0, i = 0;
		int colsTotal = sqlite3_column_count(statement);
		std::vector<std::vector<std::string> > allResult;
		int j = 0;
		while(1) 
		{
			currentRow = sqlite3_step(this->statement); // pour Un enregistrement ------ returns SQLITE_ROW if select 
			if(currentRow == SQLITE_ROW) 
			{					
				std::vector<std::string> row;
				for(i = 0; i < colsTotal; i++)
				{
					row.push_back(std::string(reinterpret_cast<const char *>(sqlite3_column_text(statement, i))));
				}
				allResult.push_back(row);
			}
			else if (currentRow == SQLITE_DONE) 
			{
				puts("SQL OK");
				break;
			}
			else
			{
				fprintf (stderr, "Failed.\n");
				sqlite3_finalize(this->statement);
				exit(1);
			}
		}
		sqlite3_finalize(this->statement);
		*data = allResult;
	}
	else
		sqlite3_step(this->statement);
}

int Database::prepareRequest()
{
	if(sqlite3_prepare_v2(this->db, sqlRequest.c_str(), -1, &statement, 0)!= SQLITE_OK)
	{
		fprintf(stderr, "erreur prepare: %s\n", sqlite3_errmsg(db));
		return(-1);
	}	
	else
		return 1;
}

#ifndef NDEBUG

	//			g++ -o DatabaseUt Database.cpp -l sqlite3 -std=c++11 -D _Database_UT_ 
	
using namespace std;

	#include <assert.h>
	#ifdef _Database_UT_
		int main(int argc, char** argv)
		{
			Database database;
			
			database.executeRequest("INSERT INTO timer(minuts, seconds) VALUES(17,0)");
			
			// --------------------------------- select -------------------------------------//
			
			std::vector<std::vector<std::string> > resultats; // vector of vector
			std::vector<std::vector<std::string> >::iterator row;	// itérateur
			std::vector<std::string>::iterator col;	// vecteur de string
			
			//~ std::string test = "select identifiant_exterieur, max(timestamp) from tatable group by identifiant_exterieur";
			database.executeRequest("SELECT * FROM timer ORDER BY id DESC LIMIT 1", true, &resultats);	
			//~ database.executeRequest("SELECT minuts, seconds FROM timer", true, &resultats);	
			int tab[2]; int i;	
			
			for(row = resultats.begin(); row != resultats.end(); row++) 
			{
				//~ row = resultats.begin();
				i=0;
				for (col = row->begin(); col != row->end(); col++) {
					
					std::cout << *col << ":";
					//~ tab[i] =  std::stoi(*col);
					i++;
				}
				std::cout << endl;
			}
			//~ printf("min : %d sec : %d\n", tab[0], tab[1]);
			
	
	
			//~ for(row = resultats.begin(); row != resultats.end(); row++) 
			//~ {
				//~ std::cout << std::endl;
				//~ for(col = row->begin(); col != row->end(); col++) 
				//~ {
					//~ std::cout << *col; 
				//~ }
			//~ }

			// --------------------------------- insert into -------------------------------------//
			
					
			
			// selection des données insérées
			
/*			std::vector<std::string> conditions; 
			conditions.push_back("id = 3");
			resultats = database.selectData("timer", "*");
			for(row = resultats.begin(); row != resultats.end(); row++) 
			{
				cout << endl;
				for(col = row->begin(); col != row->end(); col++) 
				{
					cout <<*col; 
				}
			}	
*/		
			// --------------------------------- delete from-------------------------------------//
			//~ std::vector<std::string> conditions; 
			//~ conditions.push_back("id = 4");
			//~ printf("delete = %d", database.deleteData("timer",conditions,1));
			
			//~ resultats = database.selectData("timer", "*",&conditions, 1);
			//~ for(row = resultats.begin(); row != resultats.end(); row++) 
			//~ {
				//~ cout << endl;
				//~ for(col = row->begin(); col != row->end(); col++) 
				//~ {
					//~ cout << *col; 
				//~ }
			//~ }				
			return 0;
		}
	#endif
#endif

// doc : https://www.sqlite.org/cintro.html
