/**
* \file sqlite.js
* $Author: Zarzitski$
* $Rev: 3 $
* $Date: 2017-04-09 23:32:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class SQLite
 * \brief Gérer le plugin SQLite pour Cordova
 * \author Zarzitski
 * \version 3
 * \date 2017-04-11 21:45:00 +0100
 */
var SQLite = {
	db: null,

  /**
   * \fn    write(): void
   * \brief Créer la table si elle n'existe pas et exécute la requête passé en paramètre
   * \param[in] tableRequestSQL La structure de la table SQL
   * \param[in] requestSQL La requête SQL qui doit être exécuté
   */
	write: function (tableRequestSQL, requestSQL) {
		this.db.sqlBatch([tableRequestSQL, requestSQL], function(){}, this.errorAlert);
	},

  /**
   * \fn    read(): void
   * \brief Exécute la requête passé en paramètre et extrait les données, transforme les données extraites en chaine JSON et la stock dans la div data
   * \param[in] requestSQL La requête SQL qui doit être exécuté
   * \param[in] divID
   */
	read: function (requestSQL, divID){
		this.db.executeSql(requestSQL.request, requestSQL.attribute, function(rs) {
			var data = [];
			for (var i = 0; i < rs.rows.length; i++) {
				data.push(rs.rows.item(i));
			}
			document.getElementById(divID).innerHTML = JSON.stringify(data);
		}, this.errorAlert);
	},

  /**
   * \fn    errorAlert(): void
   * \brief Affiche le message d'erreur
   * \param[in] error Le message d'erreur
   */
  errorAlert: function(error) {
		navigator.notification.alert('SQL batch ERROR: ' + error.message);
	}
}

function testSQl(){
	var person = prompt("Please enter your name your SQL request:", "SELECT * FROM");
	if (person != null && person != "") {
		SQLite.db.executeSql(person, [], function(rs) {
			for (var i = 0; i < rs.rows.length; i++) {
				navigator.notification.alert(rs.rows.item(i));
			}
		}, SQLite.errorAlert);
	}
}

document.addEventListener('deviceready', function() {
	/* Ouverture de la base de données */
	SQLite.db = window.sqlitePlugin.openDatabase({name: 'sger.db', location: 'default'});
});
