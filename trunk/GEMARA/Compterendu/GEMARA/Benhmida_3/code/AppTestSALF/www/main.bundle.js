webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CRUD; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file crud.ts
* $Author: Zarzitski$
* $Rev: 2 $
* $Date: 2017-04-05 19:47:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class CRUD
 * \brief Create / Read / Update / Delete
 * \author Zarzitski
 * \version 2
 * \date 2017-04-05 19:47:00 +0100
 */
var CRUD = (function (_super) {
    __extends(CRUD, _super);
    /**
     * \fn    constructor();
     * \brief Créer une entité
     * \param[in] entity L'entité qui doit être créé
     */
    function CRUD(divID, table, tableName) {
        var _this = _super.call(this, divID, table) || this;
        _this.currentID = { ref: 0 };
        var requestSQL = { request: '', attribute: [] };
        requestSQL.request = 'SELECT MAX(id) as currentID FROM ' + tableName;
        if (!document.getElementById(tableName + 'CurrentID'))
            document.getElementById("data").innerHTML += '<div id="' + tableName + 'CurrentID' + '" style="background-color: orange; margin: 10px;"></div>';
        _this.readDB(requestSQL, _this.currentID, _this.updateCurrentID, tableName + 'CurrentID');
        return _this;
    }
    /**
     * \fn    getNewID();
     * \brief Supprime l'entité
     * \param[in] entity L'entité qui doit être supprimé
     */
    CRUD.prototype.getNewID = function () {
        this.currentID.ref = this.currentID.ref + 1;
        return this.currentID.ref;
    };
    /**
     * \fn    updateCurrentID();
     * \brief Recuperation de la donnée dans la div et met à jour currentID
     * \param currentID L'identifiant courant
     * \param[in] divID Le nom de la div de stockage
     */
    CRUD.prototype.updateCurrentID = function (currentID, divID) {
        currentID.ref = JSON.parse(document.getElementById(divID).innerHTML)[0].currentID;
        document.getElementById(divID).innerHTML = '';
    };
    return CRUD;
}(__WEBPACK_IMPORTED_MODULE_0__database__["a" /* DataBase */]));

//# sourceMappingURL=crud.js.map

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/**
* \file entity.ts
* $Author: Zarzitski$
* $Rev: 2 $
* $Date: 2017-04-01 10:17:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
/**
 * \class Entity
 * \brief Représentation général de l'entité
 * \version $Rev 2$
 * \date 2017-04-01 10:17:00 +0100
 */
var Entity = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise l'attribut de l'entité
     * \param[in] id L'identifiant de l'entité
     */
    function Entity(id) {
        this.id = id;
    }
    /**
     * \fn     getId();
     * \brief Assesseur de l'attribut id
     * \return id Retourne l'identifiant de l'entité
     */
    Entity.prototype.getId = function () {
        return this.id;
    };
    /**
     * \fn     setId();
     * \brief Mutateur de l'attribut id
     * \param[in] id L'identifiant de l'entité
     */
    Entity.prototype.setId = function (id) {
        this.id = id;
    };
    return Entity;
}());

//# sourceMappingURL=entity.js.map

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phase; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file phase.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-01 13:35:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class Phase
 * \brief Représentation d'une phase
 * \author Zarzitski
 * \version 1
 * \date 2017-04-01 13:35:00 +0100
 */
var Phase = (function (_super) {
    __extends(Phase, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs d'une phase
     * \param[in] id L'identifiant de l'entité
     * \param[in] name Le nom de la phase
     * \param[in] roundRobin Indication si c'est un RoundRobin
     * \param[in] flightsList La liste des flights dans la phase
     */
    function Phase(id, name, roundRobin, flightsList) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        _this.roundRobin = roundRobin;
        _this.flightsList = flightsList;
        return _this;
    }
    /**
     * \fn     getName();
     * \brief Assesseur de l'attribut name
     * \return name Retourne le nom de la phase
     */
    Phase.prototype.getName = function () {
        return this.name;
    };
    /**
     * \fn     setName();
     * \brief Mutateur de l'attribut name
     * \param[in] name Le nom de la phase
     */
    Phase.prototype.setName = function (name) {
        this.name = name;
    };
    /**
     * \fn     getRoundRobin();
     * \brief Assesseur de l'attribut roundRobin
     * \return roundRobin Retourne le nom de la phase
     */
    Phase.prototype.getRoundRobin = function () {
        return this.roundRobin;
    };
    /**
     * \fn     setRoundRobin();
     * \brief Mutateur de l'attribut roundRobin
     * \param[in] roundRobin Indication si c'est un RoundRobin
     */
    Phase.prototype.setRoundRobin = function (roundRobin) {
        this.roundRobin = roundRobin;
    };
    /**
     * \fn     getFlightsList();
     * \brief Assesseur de l'attribut flightsList
     * \return flightsList Retourne la liste des flights dans la phase
     */
    Phase.prototype.getFlightsList = function () {
        return this.flightsList;
    };
    /**
     * \fn     setFlightsList();
     * \brief Mutateur de l'attribut flightsList
     * \param[in] flightsList La liste des flights dans la phase
     */
    Phase.prototype.setFlightsList = function (flightsList) {
        this.flightsList = flightsList;
    };
    return Phase;
}(__WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */]));

//# sourceMappingURL=phase.js.map

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Boat; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file boat.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-01 11:50:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class Boat
 * \brief Représentation d'un bateau
 * \author Zarzitski
 * \version 1
 * \date 2017-04-01 11:50:00 +0100
 */
var Boat = (function (_super) {
    __extends(Boat, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs du bateau
     * \param[in] id L'identifiant de l'entité
     * \param[in] boatNumber Le numero du bateau
     */
    function Boat(id, boatNumber) {
        var _this = _super.call(this, id) || this;
        _this.boatNumber = boatNumber;
        return _this;
    }
    /**
     * \fn     getBoatNumber();
     * \brief Assesseur de l'attribut name
     * \return boatNumber Retourne le numero du bateau
     */
    Boat.prototype.getBoatNumber = function () {
        return this.boatNumber;
    };
    /**
     * \fn     setBoatNumber();
     * \brief Mutateur de l'attribut boatNumber
     * \param[in] boatNumber Le numero du bateau
     */
    Boat.prototype.setBoatNumber = function (value) {
        this.boatNumber = value;
    };
    return Boat;
}(__WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */]));

//# sourceMappingURL=boat.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file event.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-01 11:20:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class Event
 * \brief Représentation d'une épreuve
 * \author Zarzitski
 * \version 1
 * \date 2017-04-01 11:20:00 +0100
 */
var Event = (function (_super) {
    __extends(Event, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs de l'épreuve
     * \param[in] id L'identifiant de l'entité
     * \param[in] name Le nom de l'épreuve
     * \param[in] organization Le nom de l'organisation qui réalise l'épreuve
     * \param[in] location Lieu de déroulement de l'épreuve
     * \param[in] ranking Le grade de l'épreuve
     * \param[in] numberBoats Le nombre de bateaux dans l'épreuve
     * \param[in] date La date de déroulement du l'épreuve
     * \param[in] subscribers La liste des participants de l'épreuve
     * \param[in] phasesList La liste des phases de l'épreuve
     * \param[in] timeManagement Inclusion du gestionnaire de départ
     */
    function Event(id, name, organization, location, ranking, numberBoats, date, subscribers, phasesList, timeManagement) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        _this.organization = organization;
        _this.location = location;
        _this.ranking = ranking;
        _this.numberBoats = numberBoats;
        _this.date = date;
        _this.subscribers = subscribers;
        _this.phasesList = phasesList;
        _this.boatsList = [];
        _this.timeManagement = timeManagement;
        _this.hiddenContent = true;
        return _this;
    }
    /**
     * \fn     getName();
     * \brief Assesseur de l'attribut name
     * \return name Retourne le nom de l'épreuve
     */
    Event.prototype.getName = function () {
        return this.name;
    };
    /**
     * \fn     setName();
     * \brief Mutateur de l'attribut name
     * \param[in] name Le nom de l'épreuve
     */
    Event.prototype.setName = function (value) {
        this.name = value;
    };
    /**
     * \fn     getOrganization();
     * \brief Assesseur de l'attribut organization
     * \return organization Retourne le nom de l'organisation qui réalise l'épreuves
     */
    Event.prototype.getOrganization = function () {
        return this.organization;
    };
    /**
     * \fn     setOrganization();
     * \brief Mutateur de l'attribut organization
     * \param[in] organization Le nom de l'organisation qui réalise l'épreuve
     */
    Event.prototype.setOrganization = function (value) {
        this.organization = value;
    };
    /**
     * \fn     getLocation();
     * \brief Assesseur de l'attribut location
     * \return location Retourne le lieu de déroulement de l'épreuve
     */
    Event.prototype.getLocation = function () {
        return this.location;
    };
    /**
     * \fn     setLocation();
     * \brief Mutateur de l'attribut location
     * \param[in] location Lieu de déroulement de l'épreuve
     */
    Event.prototype.setLocation = function (value) {
        this.location = value;
    };
    /**
     * \fn     getRanking();
     * \brief Assesseur de l'attribut ranking
     * \return ranking Retourne le grade de l'épreuve
     */
    Event.prototype.getRanking = function () {
        return this.ranking;
    };
    /**
     * \fn     setRanking();
     * \brief Mutateur de l'attribut ranking
     * \param[in] ranking Le grade de l'épreuve
     */
    Event.prototype.setRanking = function (value) {
        this.ranking = value;
    };
    /**
     * \fn     getNumberBoats();
     * \brief Assesseur de l'attribut numberBoats
     * \return numberBoats Retourne le nombre de bateaux dans l'épreuve
     */
    Event.prototype.getNumberBoats = function () {
        return this.numberBoats;
    };
    /**
     * \fn     setNumberBoats();
     * \brief Mutateur de l'attribut numberBoats
     * \param[in] numberBoats Le nombre de bateaux dans l'épreuve
     */
    Event.prototype.setNumberBoats = function (value) {
        this.numberBoats = value;
    };
    /**
     * \fn     getDate();
     * \brief Assesseur de l'attribut date
     * \return date Retourne la date du déroulement de l'épreuve
     */
    Event.prototype.getDate = function () {
        return this.date;
    };
    /**
     * \fn     setDate();
     * \brief Mutateur de l'attribut date
     * \param[in] date La date du déroulement de l'épreuve
     */
    Event.prototype.setDate = function (value) {
        this.date = value;
    };
    /**
     * \fn     getSubscriberss();
     * \brief Assesseur de l'attribut subscribers
     * \return subscribers Retourne la liste des participants de l'épreuve
     */
    Event.prototype.getSubscribers = function () {
        return this.subscribers;
    };
    /**
     * \fn     setSubscribers();
     * \brief Mutateur de l'attribut subscribers
     * \param[in] subscribers Le nom de l'épreuve
     */
    Event.prototype.setSubscribers = function (value) {
        this.subscribers = value;
    };
    /**
     * \fn     getPhasesList();
     * \brief Assesseur de l'attribut phasesList
     * \return phasesList Retourne la liste des phases de l'épreuve
     */
    Event.prototype.getPhasesList = function () {
        return this.phasesList;
    };
    /**
     * \fn     setPhasesList();
     * \brief Mutateur de l'attribut phasesList
     * \param[in] phasesList La liste des phases de l'épreuve
     */
    Event.prototype.setPhasesList = function (value) {
        this.phasesList = value;
    };
    /**
     * \fn     getBoatsList();
     * \brief Assesseur de l'attribut boatsList
     * \return boatsList Retourne la liste des bateaux
     */
    Event.prototype.getBoatsList = function () {
        return this.boatsList;
    };
    /**
     * \fn     setBoatsList();
     * \brief Mutateur de l'attribut boatsList
     * \param[in] boatsList La liste des bateaux
     */
    Event.prototype.setBoatsList = function (value) {
        this.boatsList = value;
    };
    /**
     * \fn     getTimeManagement();
     * \brief Assesseur de l'attribut timeManagement
     * \return phasesList Retourne l'état inclusion du gestionnaire de départ
     */
    Event.prototype.getTimeManagement = function () {
        return this.timeManagement;
    };
    /**
     * \fn     setTimeManagement();
     * \brief Mutateur de l'attribut phasesList
     * \param[in] timeManagement Inclusion du gestionnaire de départ
     */
    Event.prototype.setTimeManagement = function (value) {
        this.timeManagement = value;
    };
    /**
     * \fn     getHiddenContent();
     * \brief Assesseur de l'attribut hiddenContent
     * \return hiddenContent Retourne l'état d'affichage du contenu
     */
    Event.prototype.getHiddenContent = function () {
        return this.hiddenContent;
    };
    /**
     * \fn     setHiddenContent();
     * \brief Mutateur de l'attribut hiddenContent
     * \param[in] hiddenContent L'état d'affichage du contenu
     */
    Event.prototype.setHiddenContent = function (value) {
        this.hiddenContent = value;
    };
    return Event;
}(__WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */]));

//# sourceMappingURL=event.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Penalty; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file penalty.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-01 18:19:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class Racer
 * \brief Représentation d'une pénalité
 * \author Zarzitski
 * \version 1
 * \date 2017-04-01 18:19:00 +0100
 */
var Penalty = (function (_super) {
    __extends(Penalty, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs de la pénalité
     * \param[in] id L'identifiant de l'entité
     * \param[in] points Les points de pénalité
     * \param[in] detail Le détail de la pénalité
     */
    function Penalty(id, points, detail) {
        var _this = _super.call(this, id) || this;
        _this.points = points;
        _this.detail = detail;
        return _this;
    }
    /**
     * \fn     getPoints();
     * \brief Assesseur de l'attribut points
     * \return points Retourne les points de pénalité
     */
    Penalty.prototype.getPoints = function () {
        return this.points;
    };
    /**
     * \fn     setPoints();
     * \brief Mutateur de l'attribut points
     * \param[in] points Les points de pénalité
     */
    Penalty.prototype.setPoints = function (value) {
        this.points = value;
    };
    /**
     * \fn     getDetail();
     * \brief Assesseur de l'attribut detail
     * \return detail Retourne le détail de la pénalité
     */
    Penalty.prototype.getDetail = function () {
        return this.detail;
    };
    /**
     * \fn     setDetail();
     * \brief Mutateur de l'attribut detail
     * \param[in] detail Le détail de la pénalité
     */
    Penalty.prototype.setDetail = function (value) {
        this.detail = value;
    };
    return Penalty;
}(__WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */]));

//# sourceMappingURL=penalty.js.map

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Crew; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file crew.ts
* $Author: Zarzitski$
* $Rev: 2 $
* $Date: 2017-04-01 10:31:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class Crew
 * \brief Représentation d'un équipage
 * \author Zarzitski
 * \version $Rev 2$
 * \date 2017-04-01 10:31:00 +0100
 */
var Crew = (function (_super) {
    __extends(Crew, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs de l'équipage
     * \param[in] id L'identifiant de l'entité
     * \param[in] name Le nom de l'équipage
     * \param[in] country Le pays de l'équipage
     * \param[in] isaf Le code ISAF de l'équipage
     * \param[in] ranking Le classement de l'équipage
     */
    function Crew(id, name, country, isaf, ranking) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        _this.country = country;
        _this.isaf = isaf;
        _this.ranking = ranking;
        return _this;
    }
    /**
     * \fn     getName();
     * \brief Assesseur de l'attribut name
     * \return name Retourne le nom de l'équipage
     */
    Crew.prototype.getName = function () {
        return this.name;
    };
    /**
     * \fn     setName();
     * \brief Mutateur de l'attribut name
     * \param[in] name Le nom de l'équipage
     */
    Crew.prototype.setName = function (value) {
        this.name = value;
    };
    /**
     * \fn     getCountry();
     * \brief Assesseur de l'attribut country
     * \return country Retourne le pays de l'équipage
     */
    Crew.prototype.getCountry = function () {
        return this.country;
    };
    /**
    * \fn     setCountry();
    * \brief Mutateur de l'attribut country
    * \param[in] country Le pays de l'équipage
    */
    Crew.prototype.setCountry = function (value) {
        this.country = value;
    };
    /**
     * \fn     getIsaf();
     * \brief Assesseur de l'attribut isaf
     * \return isaf Retourne le code ISAF de l'équipage
     */
    Crew.prototype.getIsaf = function () {
        return this.isaf;
    };
    /**
    * \fn     setIsaf();
    * \brief Mutateur de l'attribut isaf
    * \param[in] isaf Le code ISAF de l'équipage
    */
    Crew.prototype.setIsaf = function (value) {
        this.isaf = value;
    };
    /**
     * \fn     getRanking();
     * \brief Assesseur de l'attribut ranking
     * \return ranking Retourne le classement de l'équipage
     */
    Crew.prototype.getRanking = function () {
        return this.ranking;
    };
    /**
     * \fn     setRanking();
     * \brief Mutateur de l'attribut ranking
     * \param[in] ranking Le classement de l'équipage
     */
    Crew.prototype.setRanking = function (value) {
        this.ranking = value;
    };
    return Crew;
}(__WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */]));

//# sourceMappingURL=crew.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscriber__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Racer; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file penalty.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-01 17:48:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class Racer
 * \brief Représentation d'un coureur
 * \author Zarzitski
 * \version 1
 * \date 2017-04-01 17:48:00 +0100
 */
var Racer = (function (_super) {
    __extends(Racer, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs du coureur
     * \param[in] id L'identifiant de l'entité
     * \param[in] points Les points du coureur
     * \param boat Le bateau du coureur
     * \param[in] penalty La pénalité du coureur
     */
    function Racer(id, name, country, isaf, ranking, letter, points, boat, penalty) {
        var _this = _super.call(this, id, name, country, isaf, ranking, letter) || this;
        _this.points = points;
        _this.boat = boat;
        _this.penalty = penalty;
        return _this;
    }
    /**
     * \fn     getPoints();
     * \brief Assesseur de l'attribut points
     * \return points Retourne les points du coureur
     */
    Racer.prototype.getPoints = function () {
        return this.points;
    };
    /**
     * \fn     setPoints();
     * \brief Mutateur de l'attribut points
     * \param[in] points Les points du coureur
     */
    Racer.prototype.setPoints = function (value) {
        this.points = value;
    };
    /**
     * \fn     getBoat();
     * \brief Assesseur de l'attribut boat
     * \return boat Retourne le bateau du coureur
     */
    Racer.prototype.getBoat = function () {
        return this.boat.ref;
    };
    /**
     * \fn     setBoat();
     * \brief Mutateur de l'attribut boat
     * \param boat Le bateau du coureur
     */
    Racer.prototype.setBoat = function (value) {
        this.boat = value;
    };
    /**
     * \fn     getPenalty();
     * \brief Assesseur de l'attribut penalty
     * \return penalty Retourne la pénalité du coureur
     */
    Racer.prototype.getPenalty = function () {
        return this.penalty;
    };
    /**
     * \fn     setPenalty();
     * \brief Mutateur de l'attribut penalty
     * \param[in] penalty La pénalité du coureur
     */
    Racer.prototype.setPenalty = function (value) {
        this.penalty = value;
    };
    return Racer;
}(__WEBPACK_IMPORTED_MODULE_0__subscriber__["a" /* Subscriber */]));

//# sourceMappingURL=racer.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBase; });
/// <reference path="./requestSQL.ts" />
/**
 * \class DataBase
 * \brief Base de données SQLite
 * \author Zarzitski
 * \version 2
 * \date 2017-04-11 21:54:00 +0100
 */
var DataBase = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs, crée la table SQL s'il n'existe pas et crée la div de stockage des chênes JSON
     * \param[in] dataID Le nom du service
     * \param[in] table La requéte qui crée la table SQL s'il n'existe pas
     */
    function DataBase(dataID, table) {
        this.table = table;
        this.dataID = dataID;
        this.writeDB([this.table, []]);
        if (!document.getElementById(this.dataID))
            document.getElementById("data").innerHTML += '<div id="' + this.dataID + '" style="background-color: orange; margin: 10px;"></div>';
    }
    /**
     * \fn     readDB();
     * \brief Stock dans une div les données extréte de la base de donnée selon la requête
     * \param[in] request La requête à exécuter
     * \param[in] entitys La liste des entités à modifier
     * \param[in] applyResult La fonction qui doit être lancée à la fin du chargement
     * \param[in] divID
     */
    DataBase.prototype.readDB = function (request, entitys, applyResult, divID) {
        SQLite.read(request, divID);
        this.waitResult(this.waitResult, divID, entitys, applyResult);
    };
    /**
     * \fn     writeDB();
     * \brief Créer la table SQL si elle nexiste pas et exécute la requête
     * \param[in] request La requête à exécuter
     */
    DataBase.prototype.writeDB = function (request) {
        SQLite.write(this.table, request);
    };
    /**
     * \fn     waitResult();
     * \brief La fonction qui s'appelle de façon récurrente jusqu'à la détection des données dans la div, puis elle exécute la fonction passée dans les paramètres
     * \param[in] waitResult La fonction elle-même
     * \param[in] divID
     * \param[in] entitys La liste des entités à modifier
     * \param[in] applyResult La fonction qui doit être lancée à la fin du chargement
     */
    DataBase.prototype.waitResult = function (waitResult, divID, entitys, applyResult) {
        if (document.getElementById(divID).innerHTML == '') {
            setTimeout(waitResult.bind(null, waitResult, divID, entitys, applyResult), TIME_TO_WAIT);
        }
        else {
            applyResult(entitys, divID);
        }
    };
    return DataBase;
}());

//# sourceMappingURL=database.js.map

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flight; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file flight.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-01 14:20:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class Flight
 * \brief Représentation d'un fligth
 * \author Zarzitski
 * \version 1
 * \date 2017-04-01 14:20:00 +0100
 */
var Flight = (function (_super) {
    __extends(Flight, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs d'un flight
     * \param[in] id L'identifiant de l'entité
     * \param[in] flightNumber Le numero du flight
     * \param[in] matchsList La liste des matchs dans le fligth
     * \param[in] startDateTime Le debut de la course
     */
    function Flight(id, flightNumber, matchsList, startDateTime) {
        var _this = _super.call(this, id) || this;
        _this.flightNumber = flightNumber;
        _this.matchsList = matchsList;
        _this.startDateTime = startDateTime;
        _this.blueSubscriberId = 0;
        _this.blueBoatId = 0;
        _this.yellowSubscriberId = 0;
        _this.yellowBoatId = 0;
        return _this;
    }
    /**
     * \fn     getFlightNumber();
     * \brief Assesseur de l'attribut flightNumber
     * \return flightNumber Retourne le numero du flight
     */
    Flight.prototype.getFlightNumber = function () {
        return this.flightNumber;
    };
    /**
     * \fn     setFlightNumber();
     * \brief Mutateur de l'attribut flightNumber
     * \param[in] flightNumber Le numero du flight
     */
    Flight.prototype.setFlightNumber = function (flightNumber) {
        this.flightNumber = flightNumber;
    };
    /**
     * \fn     getMatchsList();
     * \brief Assesseur de l'attribut matchsList
     * \return matchsList Retourne la liste des matches dans le fligth
     */
    Flight.prototype.getMatchsList = function () {
        return this.matchsList;
    };
    /**
     * \fn     setMatchsList();
     * \brief Mutateur de l'attribut matchsList
     * \param[in] matchsList La liste des matches dans le fligth
     */
    Flight.prototype.setMatchsList = function (matchsList) {
        this.matchsList = matchsList;
    };
    /**
     * \fn     getStartDateTime();
     * \brief Assesseur de l'attribut matchesList
     * \return matchesList Retourne le debut de la course
     */
    Flight.prototype.getStartDateTime = function () {
        return this.startDateTime;
    };
    /**
     * \fn     setStartDateTime();
     * \brief Mutateur de l'attribut startDateTime
     * \param[in] startDateTime Le debut de la course
     */
    Flight.prototype.setStartDateTime = function (startDateTime) {
        this.startDateTime = startDateTime;
    };
    /**
     * \fn     getHiddenContent();
     * \brief Assesseur de l'attribut hiddenContent
     * \return hiddenContent Retourne l'état d'affichage du contenu
     */
    Flight.prototype.getHiddenContent = function () {
        return this.hiddenContent;
    };
    /**
     * \fn     setHiddenContent();
     * \brief Mutateur de l'attribut hiddenContent
     * \param[in] hiddenContent L'état d'affichage du contenu
     */
    Flight.prototype.setHiddenContent = function (value) {
        this.hiddenContent = value;
    };
    /**
     * \fn     getBlueSubscriberId();
     * \brief Assesseur de l'attribut blueSubscriberId
     * \return blueSubscriberId Retourne l'identifiant du participant bleu sélectionné
     */
    Flight.prototype.getBlueSubscriberId = function () {
        return this.blueSubscriberId;
    };
    /**
     * \fn     setBlueSubscriberId();
     * \brief Mutateur de l'attribut blueSubscriberId
     * \param[in] blueSubscriberId L'identifiant du participant bleu sélectionné
     */
    Flight.prototype.setBlueSubscriberId = function (blueSubscriberId) {
        this.blueSubscriberId = blueSubscriberId;
    };
    /**
     * \fn     getBlueBoatId();
     * \brief Assesseur de l'attribut blueBoatId
     * \return blueBoatId Retourne l'identifiant du bateau bleu sélectionné
     */
    Flight.prototype.getBlueBoatId = function () {
        return this.blueBoatId;
    };
    /**
     * \fn     setBlueBoatId();
     * \brief Mutateur de l'attribut blueBoatId
     * \param[in] blueBoatId L'identifiant du bateau bleu sélectionné
     */
    Flight.prototype.setBlueBoatId = function (blueBoatId) {
        this.blueBoatId = blueBoatId;
    };
    /**
     * \fn     getYellowSubscriberId();
     * \brief Assesseur de l'attribut yellowSubscriberId
     * \return yellowSubscriberId Retourne l'identifiant du participant jaune sélectionné
     */
    Flight.prototype.getYellowSubscriberId = function () {
        return this.yellowSubscriberId;
    };
    /**
     * \fn     setYellowSubscriberId();
     * \brief Mutateur de l'attribut yellowSubscriberId
     * \param[in] yellowSubscriberId L'identifiant du participant jaune sélectionné
     */
    Flight.prototype.setYellowSubscriberId = function (yellowSubscriberId) {
        this.yellowSubscriberId = yellowSubscriberId;
    };
    /**
     * \fn     getYellowBoatId();
     * \brief Assesseur de l'attribut yellowBoatId
     * \return yellowBoatId Retourne l'identifiant du bateau jaune sélectionné
     */
    Flight.prototype.getYellowBoatId = function () {
        return this.yellowBoatId;
    };
    /**
     * \fn     setYellowBoatId();
     * \brief Mutateur de l'attribut yellowBoatId
     * \param[in] yellowBoatId L'identifiant du bateau jaune sélectionné
     */
    Flight.prototype.setYellowBoatId = function (yellowBoatId) {
        this.yellowBoatId = yellowBoatId;
    };
    return Flight;
}(__WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */]));

//# sourceMappingURL=flight.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Match; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file match.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-01 17:15:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class Match
 * \brief Représentation d'un match
 * \author Zarzitski
 * \version 1
 * \date 2017-04-01 17:15:00 +0100
 */
var Match = (function (_super) {
    __extends(Match, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs de l'équipage
     * \param[in] id L'identifiant de l'entité
     * \param[in] blue Le coureur bleu du match
     * \param[in] yellow Le coureur jaune du match
     * \param[in] locked Le verrou de l'édition
     * \param[in] finishDateTime L'heure et date de fin de la course
     */
    function Match(id, blue, yellow, locked, finishDateTime) {
        var _this = _super.call(this, id) || this;
        _this.blue = blue;
        _this.yellow = yellow;
        _this.locked = locked;
        _this.finishDateTime = finishDateTime;
        _this.blueSubscriberId = 0;
        _this.blueBoatId = 0;
        _this.yellowSubscriberId = 0;
        _this.yellowBoatId = 0;
        return _this;
    }
    /**
     * \fn     getBlue();
     * \brief Assesseur de l'attribut blue
     * \return blue Retourne le coureur bleu du match
     */
    Match.prototype.getBlue = function () {
        return this.blue;
    };
    /**
     * \fn     setBlue();
     * \brief Mutateur de l'attribut blue
     * \param[in] blue Le coureur bleu du match
     */
    Match.prototype.setBlue = function (value) {
        this.blue = value;
    };
    /**
     * \fn     getYellow();
     * \brief Assesseur de l'attribut yellow
     * \return yellow Retourne le coureur jaune du match
     */
    Match.prototype.getYellow = function () {
        return this.yellow;
    };
    /**
     * \fn     setYellow();
     * \brief Mutateur de l'attribut yellow
     * \param[in] yellow Le coureur jaune du match
     */
    Match.prototype.setYellow = function (value) {
        this.yellow = value;
    };
    /**
     * \fn     getLocked();
     * \brief Assesseur de l'attribut locked
     * \return locked Retourne le verrou de l'édition
     */
    Match.prototype.getLocked = function () {
        return this.locked;
    };
    /**
     * \fn     setsetLocked();
     * \brief Mutateur de l'attribut locked
     * \param[in] locked Le verrou de l'édition
     */
    Match.prototype.setLocked = function (value) {
        this.locked = value;
    };
    /**
     * \fn     getFinishDateTime();
     * \brief Assesseur de l'attribut finishDateTime
     * \return finishDateTime Retourne l'heure et date de fin de la course
     */
    Match.prototype.getFinishDateTime = function () {
        return this.finishDateTime;
    };
    /**
     * \fn     setFinishDateTime();
     * \brief Mutateur de l'attribut finishDateTime
     * \param[in] finishDateTime L'heure et date de fin de la course
     */
    Match.prototype.setFinishDateTime = function (value) {
        this.finishDateTime = value;
    };
    /**
     * \fn     getBlueSubscriberId();
     * \brief Assesseur de l'attribut blueSubscriberId
     * \return blueSubscriberId Retourne l'identifiant du participant bleu sélectionné
     */
    Match.prototype.getBlueSubscriberId = function () {
        return this.blueSubscriberId;
    };
    /**
     * \fn     setBlueSubscriberId();
     * \brief Mutateur de l'attribut blueSubscriberId
     * \param[in] blueSubscriberId L'identifiant du participant bleu sélectionné
     */
    Match.prototype.setBlueSubscriberId = function (blueSubscriberId) {
        this.blueSubscriberId = blueSubscriberId;
    };
    /**
     * \fn     getBlueBoatId();
     * \brief Assesseur de l'attribut blueBoatId
     * \return blueBoatId Retourne l'identifiant du bateau bleu sélectionné
     */
    Match.prototype.getBlueBoatId = function () {
        return this.blueBoatId;
    };
    /**
     * \fn     setBlueBoatId();
     * \brief Mutateur de l'attribut blueBoatId
     * \param[in] blueBoatId L'identifiant du bateau bleu sélectionné
     */
    Match.prototype.setBlueBoatId = function (blueBoatId) {
        this.blueBoatId = blueBoatId;
    };
    /**
     * \fn     getYellowSubscriberId();
     * \brief Assesseur de l'attribut yellowSubscriberId
     * \return yellowSubscriberId Retourne l'identifiant du participant jaune sélectionné
     */
    Match.prototype.getYellowSubscriberId = function () {
        return this.yellowSubscriberId;
    };
    /**
     * \fn     setYellowSubscriberId();
     * \brief Mutateur de l'attribut yellowSubscriberId
     * \param[in] yellowSubscriberId L'identifiant du participant jaune sélectionné
     */
    Match.prototype.setYellowSubscriberId = function (yellowSubscriberId) {
        this.yellowSubscriberId = yellowSubscriberId;
    };
    /**
     * \fn     getYellowBoatId();
     * \brief Assesseur de l'attribut yellowBoatId
     * \return yellowBoatId Retourne l'identifiant du bateau jaune sélectionné
     */
    Match.prototype.getYellowBoatId = function () {
        return this.yellowBoatId;
    };
    /**
     * \fn     setYellowBoatId();
     * \brief Mutateur de l'attribut yellowBoatId
     * \param[in] yellowBoatId L'identifiant du bateau jaune sélectionné
     */
    Match.prototype.setYellowBoatId = function (yellowBoatId) {
        this.yellowBoatId = yellowBoatId;
    };
    return Match;
}(__WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */]));

//# sourceMappingURL=match.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/**
* \file settings.ts
* $Author: Zarzitski$
* $Rev: 2 $
* $Date: 2017-04-01 19:25:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
/**
 * \class Settings
 * \brief Représentation de la configuration de l'application SGER
 * \author Zarzitski
 * \version 2
 * \date 2017-04-01 19:25:00 +0100
 */
var Settings = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs
     * \param[in] organization Le nom de l'organisation
     * \param[in] phone Le numero de téléphone de l'organisation
     * \param[in] email Le courriel de l'organisation
     * \param[in] address L'adresse de l'organisation
     * \param[in] addressSupplement Le complément adresse de l'organisation
     * \param[in] country Le pays de l'organisation
     * \param[in] postalCode Le code postal de l'organisation
     * \param[in] logo La présence du logo de l'organisation
     * \param[in] location Lieu de déroulement de l'épreuve
     * \param[in] amountBoats Le nombre de bateaux dans l'épreuve
     * \param[in] timeManagement Inclusion du gestionnaire de départ
     */
    function Settings(organization, phone, email, address, addressSupplement, country, postalCode, location, amountBoats, timeManagement) {
        this.organization = organization;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.addressSupplement = addressSupplement;
        this.country = country;
        this.postalCode = postalCode;
        this.location = location;
        this.amountBoats = amountBoats;
        this.timeManagement = timeManagement;
    }
    /**
     * \fn     getOrganization();
     * \brief Assesseur de l'attribut organization
     * \return organization Retourne le nom de l'organisation
     */
    Settings.prototype.getOrganization = function () {
        return this.organization;
    };
    /**
     * \fn     setOrganization();
     * \brief Mutateur de l'attribut organization
     * \param[in] organization Le nom de l'organisation
     */
    Settings.prototype.setOrganization = function (value) {
        this.organization = value;
    };
    /**
     * \fn     getPhone();
     * \brief Assesseur de l'attribut phone
     * \return phone Retourne le numero de téléphone de l'organisation
     */
    Settings.prototype.getPhone = function () {
        return this.phone;
    };
    /**
     * \fn     setPhone();
     * \brief Mutateur de l'attribut phone
     * \param[in] phone Le numero de téléphone de l'organisation
     */
    Settings.prototype.setPhone = function (value) {
        this.phone = value;
    };
    /**
     * \fn     getEmail();
     * \brief Assesseur de l'attribut email
     * \return email Retourne le courriel de l'organisation
     */
    Settings.prototype.getEmail = function () {
        return this.email;
    };
    /**
     * \fn     setEmail();
     * \brief Mutateur de l'attribut email
     * \param[in] email Le courriel de l'organisation
     */
    Settings.prototype.setEmail = function (value) {
        this.email = value;
    };
    /**
     * \fn     getAddress();
     * \brief Assesseur de l'attribut address
     * \return address Retourne l'adresse de l'organisation
     */
    Settings.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * \fn     setAddress();
     * \brief Mutateur de l'attribut address
     * \param[in] address L'adresse de l'organisation
     */
    Settings.prototype.setAddress = function (value) {
        this.address = value;
    };
    /**
     * \fn     getAddressSupplement();
     * \brief Assesseur de l'attribut addressSupplement
     * \return addressSupplement Retourne le complément adresse de l'organisation
     */
    Settings.prototype.getAddressSupplement = function () {
        return this.addressSupplement;
    };
    /**
     * \fn     setAddressSupplement();
     * \brief Mutateur de l'attribut addressSupplement
     * \param[in] addressSupplement Le complément adresse de l'organisation
     */
    Settings.prototype.setAddressSupplement = function (value) {
        this.addressSupplement = value;
    };
    /**
     * \fn     getCountry();
     * \brief Assesseur de l'attribut country
     * \return country Retourne le pays de l'organisation
     */
    Settings.prototype.getCountry = function () {
        return this.country;
    };
    /**
     * \fn     setCountry();
     * \brief Mutateur de l'attribut country
     * \param[in] country Le pays de l'organisation
     */
    Settings.prototype.setCountry = function (value) {
        this.country = value;
    };
    /**
     * \fn     getPostalCode();
     * \brief Assesseur de l'attribut postalCode
     * \return postalCode Retourne le code postal de l'organisation
     */
    Settings.prototype.getPostalCode = function () {
        return this.postalCode;
    };
    /**
     * \fn     setPostalCode();
     * \brief Mutateur de l'attribut postalCode
     * \param[in] postalCode Le code postal de l'organisation
     */
    Settings.prototype.setPostalCode = function (value) {
        this.postalCode = value;
    };
    /**
     * \fn     getLocation();
     * \brief Assesseur de l'attribut location
     * \return location Retourne le lieu de déroulement de l'épreuve
     */
    Settings.prototype.getLocation = function () {
        return this.location;
    };
    /**
     * \fn     setLocation();
     * \brief Mutateur de l'attribut location
     * \param[in] location Lieu de déroulement de l'épreuve
     */
    Settings.prototype.setLocation = function (value) {
        this.location = value;
    };
    /**
     * \fn     getAmountBoats();
     * \brief Assesseur de l'attribut amountBoats
     * \return amountBoats Retourne le nombre de bateaux dans l'épreuve
     */
    Settings.prototype.getAmountBoats = function () {
        return this.amountBoats;
    };
    /**
     * \fn     setAmountBoats();
     * \brief Mutateur de l'attribut amountBoats
     * \param[in] amountBoats Le nombre de bateaux dans l'épreuve
     */
    Settings.prototype.setAmountBoats = function (value) {
        this.amountBoats = value;
    };
    /**
     * \fn     getTimeManagement();
     * \brief Assesseur de l'attribut timeManagement
     * \return phasesList Retourne l'état inclusion du gestionnaire de départ
     */
    Settings.prototype.getTimeManagement = function () {
        return this.timeManagement;
    };
    /**
     * \fn     setTimeManagement();
     * \brief Mutateur de l'attribut phasesList
     * \param[in] timeManagement Inclusion du gestionnaire de départ
     */
    Settings.prototype.setTimeManagement = function (value) {
        this.timeManagement = value;
    };
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__crew__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscriber; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* \file subscriber.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-01 13:08:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/

/**
 * \class Subscriber
 * \brief Représentation d'un participant
 * \author Zarzitski
 * \version 1
 * \date 2017-04-01 13:08:00 +0100
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs d'un participant
     * \param[in] id L'identifiant de l'entité
     * \param[in] name Le nom de l'équipage
     * \param[in] country Le pays de l'équipage
     * \param[in] isaf Le code ISAF de l'équipage
     * \param[in] ranking Le classement de l'équipage
     * \param[in] letter La letter du participant
     *
     */
    function Subscriber(id, name, country, isaf, ranking, letter) {
        var _this = _super.call(this, id, name, country, isaf, ranking) || this;
        _this.letter = letter;
        return _this;
    }
    /**
     * \fn     getLetter();
     * \brief Assesseur de l'attribut letter
     * \return letter Retourne la letter du participant
     */
    Subscriber.prototype.getLetter = function () {
        return this.letter;
    };
    /**
     * \fn     setLetter();
     * \brief Mutateur de l'attribut letter
     * \param[in] letter La letter du participant
     */
    Subscriber.prototype.setLetter = function (letter) {
        this.letter = letter;
    };
    return Subscriber;
}(__WEBPACK_IMPORTED_MODULE_0__crew__["a" /* Crew */]));

//# sourceMappingURL=subscriber.js.map

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBar; });
/**
* \file
* $Author: Zarzitski$
* $Rev: 2 $
* $Date: 2017-05-12 12:33:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
/**
 * \class SearchBar
 * \brief
 * \author Zarzitski
 * \version 2
 * \date 2017-04-11 21:54:00 +0100
 */
var SearchBar = (function () {
    function SearchBar() {
    }
    SearchBar.prototype.resultSearchBar = function (title) {
        var result = true;
        var tagsString = document.getElementById("searchBar").innerHTML;
        if (tagsString != '') {
            var arrayTags = tagsString.split(' ');
            for (var i = 0; i < arrayTags.length; i++) {
                if (arrayTags[i] != '' && arrayTags[i] != ' ')
                    result = result && (title.search(new RegExp(arrayTags[i], "i")) != -1) ? true : false;
            }
        }
        return result;
    };
    return SearchBar;
}());

//# sourceMappingURL=searchbar.js.map

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_crud__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file event.service.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-02 00:37:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/



var EventService = (function (_super) {
    __extends(EventService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase
     */
    function EventService() {
        var _this = _super.call(this, 'EventService', '\
    CREATE TABLE IF NOT EXISTS \
    Event ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, organization TEXT, \
    location TEXT, ranking INTEGER, numberBoats INTEGER, date TEXT, timeManagement INTEGER)', 'Event') || this;
        _this.divID = 'EventService';
        return _this;
    }
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    EventService.prototype.create = function (event) {
        this.writeDB([
            'INSERT INTO \
       Event(id, name, organization, location, ranking, numberBoats, date, timeManagement) \
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [event.getId(), event.getName(), event.getOrganization(), event.getLocation(), event.getRanking(), event.getNumberBoats(), event.getDate(), +event.getTimeManagement()]
        ]);
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    EventService.prototype.read = function (events) {
        var requestSQL = { request: '', attribute: [] };
        requestSQL.request = 'SELECT * FROM Event ORDER BY date DESC, name';
        this.readDB(requestSQL, events, this.applyResult, this.divID);
    };
    /**
     * \fn    readByPhase();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    EventService.prototype.readByPhase = function (event, phase) {
        var requestSQL = { request: '', attribute: [] };
        var phaseID = +phase.getId();
        if (phaseID > 0) {
            requestSQL.request = '\
      SELECT * FROM Event \
      WHERE id = (SELECT event FROM Phase WHERE id = ' + phaseID + ')';
            this.readDB(requestSQL, event, this.applyResultByPhase, this.divID);
        }
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    EventService.prototype.applyResult = function (events, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        events.ref = [];
        for (var i = 0; i < data.length; i++) {
            events.ref.push(new __WEBPACK_IMPORTED_MODULE_1__class_data_event__["a" /* Event */](data[i].id, data[i].name, data[i].organization, data[i].location, data[i].ranking, data[i].numberBoats, data[i].date, [], [], data[i].timeManagement));
        }
    };
    /**
     * \fn    applyResultByPhase();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    EventService.prototype.applyResultByPhase = function (event, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            event.ref.setId(data[i].id);
            event.ref.setName(data[i].name);
            event.ref.setTimeManagement(data[i].timeManagement);
        }
    };
    /**
     * \fn    update();
     * \brief Met à jour l'équipage
     * \param[in] crew L'équipage qui doit être mise à jour
     */
    EventService.prototype.update = function (event) {
        this.writeDB([
            'UPDATE Event \
     SET name = ?, organization = ?, location = ?, ranking = ?, numberBoats = ?, date = ?, timeManagement = ? \
     WHERE id = ?',
            [event.getName(), event.getOrganization(), event.getLocation(), event.getRanking(), event.getNumberBoats(), event.getDate(), +event.getTimeManagement(), event.getId()]
        ]);
    };
    /**
     * \fn    delete();
     * \brief Supprime l'équipage
     * \param[in] crew L'équipage qui doit être supprimé
     */
    EventService.prototype.delete = function (event) {
        var eventID = +event.getId();
        if (eventID > 0) {
            this.writeDB(['DELETE FROM Penalty \
      WHERE id in (\
       SELECT R.penalty \
       FROM Racer R, Matchs M, Flight F, Phase P \
       WHERE R.matchs = M.id AND M.flight = F.id AND F.phase = P.id AND P.event = ' + eventID + ')', []]);
            this.writeDB(['DELETE FROM Racer \
      WHERE matchs = (SELECT M.id FROM Matchs M, Flight F, Phase P WHERE M.flight = F.id AND F.phase = P.id AND P.event = ' + eventID + ')', []]);
            this.writeDB(['DELETE FROM Matchs \
      WHERE flight = (SELECT F.id FROM Flight F, Phase P WHERE F.phase = P.id AND P.event = ' + eventID + ')', []]);
            this.writeDB(['DELETE FROM Flight \
      WHERE phase = (SELECT id FROM Phase WHERE event = ' + eventID + ')', []]);
            this.writeDB(['DELETE FROM \
      Phase WHERE event = ?', [eventID]]);
            this.writeDB(['DELETE FROM Event \
      WHERE id = ?', [eventID]]);
        }
    };
    return EventService;
}(__WEBPACK_IMPORTED_MODULE_2__class_crud__["a" /* CRUD */]));
EventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EventService);

//# sourceMappingURL=event.service.js.map

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(201),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_crew_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_searchbar__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_data_crew__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_ucmanagecrews__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrewsListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file crews-list.component.ts
* $Author: Zarzitski$
* $Rev: 2 $
* $Date: 2017-04-01 22:53:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/





var CrewsListComponent = (function (_super) {
    __extends(CrewsListComponent, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs
     * \param crewsService persistance des équipages
     */
    function CrewsListComponent(crewService) {
        var _this = _super.call(this) || this;
        _this.crewService = crewService;
        _this.crews = { ref: [] };
        _this.crew = { ref: new __WEBPACK_IMPORTED_MODULE_3__class_data_crew__["a" /* Crew */](0, '', '', '', 0) };
        _this.editMode = { ref: true };
        _this.deletePanelIhm = { ref: false };
        _this.crewPanelIhm = { ref: true };
        return _this;
    }
    /**
     * \fn     ngOnInit();
     * \brief Méthode qui initialise ucmanagecrews au chargement du CrewsListComponent
     */
    CrewsListComponent.prototype.ngOnInit = function () {
        this.ucmanagecrews = new __WEBPACK_IMPORTED_MODULE_4__class_ucmanagecrews__["a" /* UcManageCrews */](this.crewService, this.crews, this.crew, this.crewPanelIhm, this.editMode, this.deletePanelIhm);
    };
    return CrewsListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__class_searchbar__["a" /* SearchBar */]));
CrewsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-crews-list',
        template: __webpack_require__(202),
        styles: [__webpack_require__(191)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_crew_service__["a" /* CrewService */]]
    })
    /**
     * \class CrewsListComponent
     * \brief Environnement de gestion des équipages
     * \author Zarzitski
     * \version 3
     * \date 2017-04-01 22:53:00 +0100
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_crew_service__["a" /* CrewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_crew_service__["a" /* CrewService */]) === "function" && _a || Object])
], CrewsListComponent);

var _a;
//# sourceMappingURL=crews-list.component.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crew_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_subscriber_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_phase_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_boat_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_searchbar__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_data_event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_data_settings__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_data_phase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__class_ucorganizeevent__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_ucorganizephase__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file events-list.component.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-13 18:15:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/













var EventsListComponent = (function (_super) {
    __extends(EventsListComponent, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs
     * \param eventService persistance des événements
     * \param settingsService persistance des paramètres
     * \param crewService persistance des équipages
     * \param subscriberService persistance des participants
     * \param phaseService La persistance des phases
     * \param boatService persistance des bateaux
     */
    function EventsListComponent(eventService, settingsService, crewService, subscriberService, phaseService, boatService) {
        var _this = _super.call(this) || this;
        _this.eventService = eventService;
        _this.settingsService = settingsService;
        _this.crewService = crewService;
        _this.subscriberService = subscriberService;
        _this.phaseService = phaseService;
        _this.boatService = boatService;
        _this.events = { ref: [] };
        _this.event = { ref: new __WEBPACK_IMPORTED_MODULE_8__class_data_event__["a" /* Event */](0, '', '', '', 0, 1, '', [], [], false) };
        _this.settings = { ref: new __WEBPACK_IMPORTED_MODULE_9__class_data_settings__["a" /* Settings */]('', '', '', '', '', '', '', '', 0, false) };
        _this.phase = { ref: new __WEBPACK_IMPORTED_MODULE_10__class_data_phase__["a" /* Phase */](0, '', false, []) };
        _this.crews = { ref: [] };
        _this.eventPanelIhm = { ref: true };
        _this.phasePanelIhm = { ref: true };
        _this.editMode = { ref: true };
        _this.deleteEventPanelIhm = { ref: false };
        _this.deletePhasePanelIhm = { ref: false };
        _this.crewId = { ref: 0 };
        _this.crewLetter = { ref: '' };
        return _this;
    }
    /**
     * \fn     ngOnInit();
     * \brief Méthode qui initialise ucorganizeevent au chargement du EventsListComponent
     */
    EventsListComponent.prototype.ngOnInit = function () {
        this.ucorganizeevent = new __WEBPACK_IMPORTED_MODULE_11__class_ucorganizeevent__["a" /* UcOrganizeEvent */](this.eventService, this.settingsService, this.crewService, this.subscriberService, this.boatService, this.events, this.event, this.settings, this.crews, this.eventPanelIhm, this.editMode, this.deleteEventPanelIhm, this.crewId, this.crewLetter);
        this.ucorganizephase = new __WEBPACK_IMPORTED_MODULE_12__class_ucorganizephase__["a" /* UcOrganizePhase */](this.phaseService, this.events, this.event, this.phase, this.phasePanelIhm, this.editMode, this.deletePhasePanelIhm);
    };
    return EventsListComponent;
}(__WEBPACK_IMPORTED_MODULE_7__class_searchbar__["a" /* SearchBar */]));
EventsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-events-list',
        template: __webpack_require__(203),
        styles: [__webpack_require__(192)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_crew_service__["a" /* CrewService */],
            __WEBPACK_IMPORTED_MODULE_4__services_subscriber_service__["a" /* SubscriberService */],
            __WEBPACK_IMPORTED_MODULE_5__services_phase_service__["a" /* PhaseService */],
            __WEBPACK_IMPORTED_MODULE_6__services_boat_service__["a" /* BoatService */]
        ]
    })
    /**
     * \class EventsListComponent
     * \brief Environnement de gestion des événements
     * \author Zarzitski
     * \version 1
     * \date 2017-04-13 18:15:00 +0100
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_crew_service__["a" /* CrewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_crew_service__["a" /* CrewService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_subscriber_service__["a" /* SubscriberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_subscriber_service__["a" /* SubscriberService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_phase_service__["a" /* PhaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_phase_service__["a" /* PhaseService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_boat_service__["a" /* BoatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_boat_service__["a" /* BoatService */]) === "function" && _f || Object])
], EventsListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=events-list.component.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuideComponent = (function () {
    function GuideComponent() {
    }
    GuideComponent.prototype.ngOnInit = function () {
    };
    return GuideComponent;
}());
GuideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-guide',
        template: __webpack_require__(204),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [])
], GuideComponent);

//# sourceMappingURL=guide.component.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file home.component.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-02 00:26:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/


var HomeComponent = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs
     * \param eventService persistance des événements
     */
    function HomeComponent(eventService) {
        this.eventService = eventService;
        this.events = { ref: [] };
    }
    /**
     * \fn     ngOnInit();
     * \brief Méthode qui initialise eventService au chargement du HomeComponent
     */
    HomeComponent.prototype.ngOnInit = function () {
        this.eventService.read(this.events);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(205),
        styles: [__webpack_require__(194)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]]
    })
    /**
     * \class HomeComponent
     * \brief Environnement de la page d'accueil
     * \author Zarzitski
     * \version 1
     * \date 2017-04-13 18:15:00 +0100
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_phase_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_flight_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_subscriber_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_boat_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_match_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_racer_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_penalty_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_searchbar__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__class_data_event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_data_phase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__class_data_flight__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__class_data_match__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__class_data_racer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__class_data_boat__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__class_data_penalty__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__class_ucelaboratepairinglist__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file phase.component.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-22 09:30:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
/// <reference path="../../class/winnerPanel.ts" />





















var PhaseComponent = (function (_super) {
    __extends(PhaseComponent, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs
     * \param eventService persistance des événements
     * \param phaseService La persistance des phases
     * \param flightService La persistance des flights
     * \param subscriberService persistance des participants
     * \param boatService persistance des bateaux
     * \param matchService persistance des matchs
     * \param racerService persistance des concurrents
     * \param penaltyService persistance des pénalités
     * \param route composant Angular
     * \param location composant Angular
  
     */
    function PhaseComponent(eventService, phaseService, flightService, subscriberService, boatService, matchService, racerService, penaltyService, route, location) {
        var _this = _super.call(this) || this;
        _this.eventService = eventService;
        _this.phaseService = phaseService;
        _this.flightService = flightService;
        _this.subscriberService = subscriberService;
        _this.boatService = boatService;
        _this.matchService = matchService;
        _this.racerService = racerService;
        _this.penaltyService = penaltyService;
        _this.route = route;
        _this.location = location;
        _this.event = { ref: new __WEBPACK_IMPORTED_MODULE_13__class_data_event__["a" /* Event */](0, '', '', '', 0, 1, '', [], [], false) };
        _this.phase = { ref: new __WEBPACK_IMPORTED_MODULE_14__class_data_phase__["a" /* Phase */](0, '', false, []) };
        _this.route.params.switchMap(function (params) { return params['id']; }).subscribe(function (id) { return _this.phase.ref.setId(+id); });
        var phases = [];
        phases.push(_this.phase.ref);
        _this.event.ref.setPhasesList(phases);
        _this.flight = { ref: new __WEBPACK_IMPORTED_MODULE_15__class_data_flight__["a" /* Flight */](0, 0, [], '') };
        var racer = new __WEBPACK_IMPORTED_MODULE_17__class_data_racer__["a" /* Racer */](0, '', '', '', 0, '', 0, { ref: new __WEBPACK_IMPORTED_MODULE_18__class_data_boat__["a" /* Boat */](0, 0) }, new __WEBPACK_IMPORTED_MODULE_19__class_data_penalty__["a" /* Penalty */](0, 0, ''));
        _this.match = { ref: new __WEBPACK_IMPORTED_MODULE_16__class_data_match__["a" /* Match */](0, racer, racer, false, '') };
        _this.racer = { ref: new __WEBPACK_IMPORTED_MODULE_17__class_data_racer__["a" /* Racer */](0, '', '', '', 0, '', 0, { ref: new __WEBPACK_IMPORTED_MODULE_18__class_data_boat__["a" /* Boat */](0, 0) }, new __WEBPACK_IMPORTED_MODULE_19__class_data_penalty__["a" /* Penalty */](0, 0, '')) };
        _this.winnerPanelIhm = { ref: { hide: true, deletePanelhide: true, scoreBar: 0, time: '' } };
        _this.deleteFlightPanelIhm = { ref: false };
        _this.penaltyPanelIhm = { ref: false };
        _this.startTime = { ref: '' };
        _this.startDate = { ref: '' };
        return _this;
    }
    /**
     * \fn     ngOnInit();
     * \brief Méthode qui initialise ucelaboratepairinglist au chargement du PhaseComponent
     */
    PhaseComponent.prototype.ngOnInit = function () {
        this.ucelaboratepairinglist = new __WEBPACK_IMPORTED_MODULE_20__class_ucelaboratepairinglist__["a" /* UcElaboratePairingList */](this.eventService, this.phaseService, this.flightService, this.subscriberService, this.boatService, this.matchService, this.racerService, this.penaltyService, this.event, this.phase, this.flight, this.match, this.racer, this.deleteFlightPanelIhm, this.winnerPanelIhm, this.penaltyPanelIhm, this.startTime, this.startDate);
    };
    return PhaseComponent;
}(__WEBPACK_IMPORTED_MODULE_12__class_searchbar__["a" /* SearchBar */]));
PhaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-phase',
        template: __webpack_require__(206),
        styles: [__webpack_require__(195)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_5__services_phase_service__["a" /* PhaseService */],
            __WEBPACK_IMPORTED_MODULE_6__services_flight_service__["a" /* FlightService */],
            __WEBPACK_IMPORTED_MODULE_7__services_subscriber_service__["a" /* SubscriberService */],
            __WEBPACK_IMPORTED_MODULE_8__services_boat_service__["a" /* BoatService */],
            __WEBPACK_IMPORTED_MODULE_9__services_match_service__["a" /* MatchService */],
            __WEBPACK_IMPORTED_MODULE_10__services_racer_service__["a" /* RacerService */],
            __WEBPACK_IMPORTED_MODULE_11__services_penalty_service__["a" /* PenaltyService */]
        ]
    })
    /**
     * \class PhaseComponent
     * \brief Environnement de gestion des phases
     * \author Zarzitski
     * \version 1
     * \date 2017-04-22 09:30:00 +0100
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_phase_service__["a" /* PhaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_phase_service__["a" /* PhaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_flight_service__["a" /* FlightService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_subscriber_service__["a" /* SubscriberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_subscriber_service__["a" /* SubscriberService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_boat_service__["a" /* BoatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_boat_service__["a" /* BoatService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__services_match_service__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_match_service__["a" /* MatchService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__services_racer_service__["a" /* RacerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_racer_service__["a" /* RacerService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__services_penalty_service__["a" /* PenaltyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_penalty_service__["a" /* PenaltyService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */]) === "function" && _k || Object])
], PhaseComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=phase.component.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_result_boat_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_data_phase__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsBoatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResultsBoatComponent = (function () {
    function ResultsBoatComponent(resultBoatService, route, location) {
        var _this = this;
        this.resultBoatService = resultBoatService;
        this.route = route;
        this.location = location;
        this.resultBoatList = { ref: [] };
        this.phase = { ref: new __WEBPACK_IMPORTED_MODULE_5__class_data_phase__["a" /* Phase */](0, '', false, []) };
        this.route.params.switchMap(function (params) { return params['id']; }).subscribe(function (id) { return _this.phase.ref.setId(+id); });
    }
    ResultsBoatComponent.prototype.ngOnInit = function () {
        this.resultBoatService.read(this.resultBoatList, this.phase.ref);
    };
    return ResultsBoatComponent;
}());
ResultsBoatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-results-boat',
        template: __webpack_require__(207),
        styles: [__webpack_require__(196)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_result_boat_service__["a" /* ResultBoatService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_result_boat_service__["a" /* ResultBoatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_result_boat_service__["a" /* ResultBoatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */]) === "function" && _c || Object])
], ResultsBoatComponent);

var _a, _b, _c;
//# sourceMappingURL=results-boat.component.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_result_subscriber_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_data_phase__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultSubscriberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Event } from '../../class/data/event';
//import { Event } from '../../class/data/event';
//import { Subscriber } from '../../class/data/subscriber';
var ResultSubscriberComponent = (function () {
    //  protected phase2: Phase[];
    //  protected event: {ref: Event};
    //protected subscriber: {ref: Subscriber};
    function ResultSubscriberComponent(resultSubscriberService, route, location) {
        var _this = this;
        this.resultSubscriberService = resultSubscriberService;
        this.route = route;
        this.location = location;
        this.resultSubscriberList = { ref: [] };
        this.phase = { ref: new __WEBPACK_IMPORTED_MODULE_5__class_data_phase__["a" /* Phase */](0, '', false, []) };
        //    this.event = {ref: new Event(0,'', '', '', 0, 1, '', [], [], false)};
        this.route.params.switchMap(function (params) { return params['id']; }).subscribe(function (id) { return _this.phase.ref.setId(+id); });
    }
    ResultSubscriberComponent.prototype.ngOnInit = function () {
        //    subscriber.readByPhase(this.event,this.phase.ref)
        //this.resultSubscriberService.read(this.resultSubscriberList, this.phase.ref);
    };
    return ResultSubscriberComponent;
}());
ResultSubscriberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-results-subscriber',
        template: __webpack_require__(208),
        styles: [__webpack_require__(197)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_result_subscriber_service__["a" /* ResultSubscriberService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_result_subscriber_service__["a" /* ResultSubscriberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_result_subscriber_service__["a" /* ResultSubscriberService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */]) === "function" && _c || Object])
], ResultSubscriberComponent);

var _a, _b, _c;
//# sourceMappingURL=results-subscriber.component.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_data_settings__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file settings.component.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-12 16:13:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/



var SettingsComponent = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs
     * \param settingsService La persistance de la configuration
     */
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
        this.settings = { ref: new __WEBPACK_IMPORTED_MODULE_2__class_data_settings__["a" /* Settings */]('', '', '', '', '', '', '', '', 0, false) };
    }
    /**
     * \fn     ngOnInit();
     * \brief Méthode qui lit les données la configuration
     */
    SettingsComponent.prototype.ngOnInit = function () {
        this.settingsService.read(this.settings);
    };
    /**
     * \fn     saveSettings();
     * \brief Méthode qui sauvegarde les modifications si elles sont conformes
     */
    SettingsComponent.prototype.saveSettings = function () {
        if (this.testSettingsPanel()) {
            this.settingsService.update(this.settings.ref);
            alert('Settings was successfully updated');
        }
    };
    /**
     * \fn    testSettingsPanel(): boolean
     * \brief Test les champs du formulaire SettingsPanel et affiche les erreurs
     * \return testResult Retourne le resultat du test
     */
    SettingsComponent.prototype.testSettingsPanel = function () {
        var testResult = true;
        if (!/^[A-Za-z0-9-]{2,}[A-Za-z0-9-]*$/.test(this.settings.ref.getOrganization())) {
            testResult = false;
            alert('The organization contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-").');
        }
        if (!/^[+0-9]*$/.test(this.settings.ref.getPhone()) && this.settings.ref.getPhone() != '') {
            testResult = false;
            alert('The phone number contains unauthorized characters or is incorrect, please correct it with the allowed characters ("+", "-", " ", "0-9").');
        }
        if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.settings.ref.getEmail()) && this.settings.ref.getEmail() != '') {
            testResult = false;
            alert('The E-mail contains unauthorized characters or is incorrect, please correct it with the allowed characters ("@", ",", ".", "_", "-", "0-9", "a-z", "A-Z").');
        }
        if (!/^[A-Za-z0-9-,.]*$/.test(this.settings.ref.getAddress())) {
            testResult = false;
            alert('The Address contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-", ".", ",").');
        }
        if (!/^[A-Za-z0-9-,.]*$/.test(this.settings.ref.getAddressSupplement())) {
            testResult = false;
            alert('The Address Supplement contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-", ".", ",").');
        }
        if (!/^[A-Z]{2}$/.test(this.settings.ref.getCountry()) && this.settings.ref.getCountry() != '') {
            testResult = false;
            alert('The Country contains unauthorized country.');
        }
        if (!/^[0-9]{6}$/.test(this.settings.ref.getPostalCode()) && this.settings.ref.getPostalCode() != '') {
            testResult = false;
            alert('The Postal Code contains unauthorized characters, please use numbers');
        }
        if (!/^[A-Za-z0-9-,.]*$/.test(this.settings.ref.getLocation())) {
            testResult = false;
            alert('The Location contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-", ".", ",").');
        }
        if (!/^[1-9]{1,}[0-9]*$/.test(this.settings.ref.getAmountBoats().toString()) && this.settings.ref.getAmountBoats().toString() != '') {
            testResult = false;
            alert('The Number of Boats contains unauthorized number');
        }
        return testResult;
    };
    /**
     * \fn     cancelSettings();
     * \brief Méthode qui annule les modifications en rechargeant le contenu précédent
     */
    SettingsComponent.prototype.cancelSettings = function () {
        this.settingsService.read(this.settings);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__(209),
        styles: [__webpack_require__(198)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]]
    })
    /**
     * \class SettingsComponent
     * \brief Environnement de configuration général de SGER
     * \author Zarzitski
     * \version 1
     * \date 2017-04-12 16:13:00 +0100
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_boat__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_crud__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoatService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file boat.service.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-23 11:38:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/



var BoatService = (function (_super) {
    __extends(BoatService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase
     */
    function BoatService() {
        var _this = _super.call(this, 'BoatService', '\
    CREATE TABLE IF NOT EXISTS \
    Boat ( id INTEGER PRIMARY KEY AUTOINCREMENT, boatNumber INTEGER)', 'Boat') || this;
        _this.divID = 'BoatService';
        return _this;
    }
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    BoatService.prototype.create = function (event) {
        for (var i = 1; i <= event.getNumberBoats(); i++) {
            this.writeDB([
                'INSERT INTO Boat(boatNumber) \
         SELECT ? WHERE NOT EXISTS(SELECT * FROM Boat WHERE boatNumber = ?)',
                [i, i]
            ]);
        }
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    BoatService.prototype.read = function (event) {
        var requestSQL = { request: '', attribute: [] };
        var phaseID = +event.ref.getPhasesList()[0].getId();
        if (phaseID > 0) {
            requestSQL.request = '\
      SELECT B.id, B.boatNumber \
      FROM Boat B, Event E, Phase P \
      WHERE B.boatNumber <= E.numberBoats \
      AND E.id = P.event AND P.id = ' + phaseID + ' \
      ORDER BY boatNumber';
            this.readDB(requestSQL, event, this.applyResult, this.divID);
        }
    };
    /**
     * \fn    associationBoatsToRacer();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    BoatService.prototype.associationBoatsToRacer = function (flight) {
        var requestSQL = { request: '', attribute: [] };
        var flightID = +flight.ref.getId();
        if (flightID > 0) {
            requestSQL.request = '\
      SELECT B.id, M.id as matchsId, R.color, B.boatNumber \
      FROM Boat B, Racer R, Flight F, Matchs M \
      WHERE F.id = M.flight AND M.id = R.matchs \
      AND R.boat = B.id AND F.id = ' + flightID;
            this.readDB(requestSQL, flight, this.applyResultBoatsToRacer, this.divID);
        }
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    BoatService.prototype.applyResult = function (event, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        var boats = [];
        for (var i = 0; i < data.length; i++) {
            boats.push(new __WEBPACK_IMPORTED_MODULE_1__class_data_boat__["a" /* Boat */](data[i].id, data[i].boatNumber));
        }
        event.ref.setBoatsList(boats.slice(0));
    };
    /**
     * \fn    applyResultBoatsToRacer();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    BoatService.prototype.applyResultBoatsToRacer = function (flight, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        var boats = [];
        var matchs = flight.ref.getMatchsList().slice(0);
        for (var i = 0; i < data.length; i++) {
            var index = matchs.findIndex(function (x) { return x.getId() == data[i].matchsId; });
            if (data[i].color == 'b') {
                matchs[index].getBlue().setBoat({ ref: new __WEBPACK_IMPORTED_MODULE_1__class_data_boat__["a" /* Boat */](data[i].id, data[i].boatNumber) });
            }
            else {
                matchs[index].getYellow().setBoat({ ref: new __WEBPACK_IMPORTED_MODULE_1__class_data_boat__["a" /* Boat */](data[i].id, data[i].boatNumber) });
            }
        }
        flight.ref.setMatchsList(matchs.slice(0));
    };
    /**
     * \fn    update();
     * \brief Met à jour l'équipage
     * \param[in] crew L'équipage qui doit être mise à jour
     */
    BoatService.prototype.update = function (event) {
        this.create(event);
    };
    /**
     * \fn    delete();
     * \brief Supprime l'équipage
     * \param[in] crew L'équipage qui doit être supprimé
     */
    BoatService.prototype.delete = function (boat) {
        this.writeDB([
            'DELETE FROM Boat WHERE id = ?',
            [boat.getId()]
        ]);
    };
    return BoatService;
}(__WEBPACK_IMPORTED_MODULE_2__class_crud__["a" /* CRUD */]));
BoatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BoatService);

//# sourceMappingURL=boat.service.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_crew__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_crud__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrewService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file crew.service.ts
* $Author: Zarzitski$
* $Rev: 2 $
* $Date: 2017-04-02 00:34:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
/// <reference path="../class/requestSQL.ts" />



var CrewService = (function (_super) {
    __extends(CrewService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase
     */
    function CrewService() {
        var _this = _super.call(this, 'CrewService', '\
    CREATE TABLE IF NOT EXISTS \
    Crew (id INTEGER, name TEXT, country TEXT, isaf TEXT, ranking INTEGER, PRIMARY KEY (id))', 'Crew') || this;
        _this.divID = 'CrewService';
        return _this;
    }
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    CrewService.prototype.create = function (crew) {
        this.writeDB([
            'INSERT INTO \
     Crew(id, name, country, isaf, ranking) \
     VALUES (?, ?, ?, ?, ?)',
            [crew.getId(), crew.getName(), crew.getCountry(), crew.getIsaf(), crew.getRanking()]
        ]);
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    CrewService.prototype.read = function (crews) {
        var requestSQL = { request: '', attribute: [] };
        requestSQL.request = 'SELECT * FROM Crew ORDER BY name';
        this.readDB(requestSQL, crews, this.applyResult, this.divID);
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    CrewService.prototype.applyResult = function (crews, dataID) {
        var data = JSON.parse(document.getElementById(dataID).innerHTML);
        document.getElementById(dataID).innerHTML = '';
        crews.ref = [];
        for (var i = 0; i < data.length; i++) {
            crews.ref.push(new __WEBPACK_IMPORTED_MODULE_1__class_data_crew__["a" /* Crew */](data[i].id, data[i].name, data[i].country, data[i].isaf, data[i].ranking));
        }
    };
    /**
     * \fn    update();
     * \brief Met à jour l'équipage
     * \param[in] crew L'équipage qui doit être mise à jour
     */
    CrewService.prototype.update = function (crew) {
        this.writeDB([
            'UPDATE Crew SET name = ?, country = ?, isaf = ?, ranking = ? WHERE id = ?',
            [crew.getName(), crew.getCountry(), crew.getIsaf(), crew.getRanking(), crew.getId()]
        ]);
    };
    /**
     * \fn    delete();
     * \brief Supprime l'équipage
     * \param[in] crew L'équipage qui doit être supprimé
     */
    CrewService.prototype.delete = function (crew) {
        this.writeDB([
            'DELETE FROM Crew WHERE id = ?',
            [crew.getId()]
        ]);
    };
    return CrewService;
}(__WEBPACK_IMPORTED_MODULE_2__class_crud__["a" /* CRUD */]));
CrewService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    /**
     * \class CrewService
     * \brief Cette classe s'occupe de la persistance des équipages
     * \author Zarzitski
     * \version 2
     * \date 2017-04-11 23:41:00 +0100
     */
    ,
    __metadata("design:paramtypes", [])
], CrewService);

//# sourceMappingURL=crew.service.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_phase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_crud__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file phase.service.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-17 14:24:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/



var PhaseService = (function (_super) {
    __extends(PhaseService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase
     */
    function PhaseService() {
        var _this = _super.call(this, 'PhaseService', '\
    CREATE TABLE IF NOT EXISTS \
    Phase ( id INTEGER PRIMARY KEY AUTOINCREMENT, event INTEGER, name TEXT, roundRobin INTEGER, \
    FOREIGN KEY(event) REFERENCES Event(id))', 'Phase') || this;
        _this.divID = 'PhaseService';
        return _this;
    }
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    PhaseService.prototype.create = function (phase) {
        this.writeDB([
            'INSERT INTO Phase(id, name, roundrobin) VALUES (?, ?, ?)',
            [phase.getId(), phase.getName(), +phase.getRoundRobin()]
        ]);
    };
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    PhaseService.prototype.setEventID = function (phase, event) {
        this.writeDB([
            'UPDATE Phase SET event = ? WHERE id = ?',
            [event.getId(), phase.getId()]
        ]);
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    PhaseService.prototype.read = function (events) {
        var requestSQL = { request: '', attribute: [] };
        requestSQL.request = 'SELECT * FROM Phase ORDER BY id';
        this.readDB(requestSQL, events, this.applyResult, this.divID);
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    PhaseService.prototype.readById = function (phase) {
        var requestSQL = { request: '', attribute: [] };
        var phaseID = +phase.ref.getId();
        if (phaseID > 0) {
            requestSQL.request = 'SELECT * FROM Phase WHERE id = ' + phaseID + ' ORDER BY id';
            this.readDB(requestSQL, phase, this.applyResultById, this.divID);
        }
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    PhaseService.prototype.applyResult = function (events, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            var indexEvent = events.ref.findIndex(function (x) { return x.getId() == data[i].event; });
            var phases = events.ref[indexEvent].getPhasesList().slice(0);
            phases.push(new __WEBPACK_IMPORTED_MODULE_1__class_data_phase__["a" /* Phase */](data[i].id, data[i].name, data[i].roundRobin, []));
            events.ref[indexEvent].setPhasesList(phases.slice(0));
        }
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    PhaseService.prototype.applyResultById = function (phase, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            phase.ref.setName(data[i].name);
            phase.ref.setRoundRobin(data[i].roundRobin);
        }
    };
    /**
     * \fn    update();
     * \brief Met à jour l'équipage
     * \param[in] crew L'équipage qui doit être mise à jour
     */
    PhaseService.prototype.update = function (phase) {
        this.writeDB([
            'UPDATE Phase SET name = ?, roundrobin = ? WHERE id = ?',
            [phase.getName(), +phase.getRoundRobin(), phase.getId()]
        ]);
    };
    /**
     * \fn    delete();
     * \brief Supprime l'équipage
     * \param[in] crew L'équipage qui doit être supprimé
     */
    PhaseService.prototype.delete = function (phase) {
        var phaseID = +phase.getId();
        if (phaseID > 0) {
            this.writeDB(['DELETE FROM Penalty \
      WHERE id in (\
        SELECT R.penalty \
        FROM Racer R, Matchs M, Flight F \
        WHERE R.matchs = M.id AND M.flight = F.id AND F.phase = ' + phaseID + ')',
                []]);
            this.writeDB(['DELETE FROM Racer \
      WHERE matchs = (\
        SELECT M.id \
        FROM Matchs M, Flight F \
        WHERE M.flight = F.id AND F.phase = ' + phaseID + ')', []]);
            this.writeDB(['DELETE FROM Matchs \
      WHERE flight = (SELECT id FROM Flight WHERE phase = ' + phaseID + ')', []]);
            this.writeDB(['DELETE FROM Flight WHERE phase = ?', [phaseID]]);
            this.writeDB(['DELETE FROM Phase WHERE id = ?', [phaseID]]);
        }
    };
    return PhaseService;
}(__WEBPACK_IMPORTED_MODULE_2__class_crud__["a" /* CRUD */]));
PhaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PhaseService);

//# sourceMappingURL=phase.service.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_settings__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_database__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file settings.service.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-12 18:26:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
/// <reference path="../class/requestSQL.ts" />



var SettingsService = (function (_super) {
    __extends(SettingsService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase et ajoute à la table les parametres par defaut si ils n'existent pas
     */
    function SettingsService() {
        var _this = _super.call(this, 'SettingsService', 'CREATE TABLE IF NOT EXISTS \
    Settings (id INTEGER, organization TEXT, phone TEXT, email TEXT, address TEXT, \
      addressSupplement TEXT, country TEXT, postalCode TEXT, location TEXT, \
      amountBoats INTEGER, timeManagement INTEGER, PRIMARY KEY (id))') || this;
        _this.divID = 'SettingsService';
        _this.writeDB([
            "INSERT INTO Settings (id, organization, phone, email, address, addressSupplement, country, \
      postalCode, location, amountBoats, timeManagement) \
      SELECT 1,'SGER', '', '', '', '', '', '', '', 1, 0 \
      WHERE NOT EXISTS(SELECT 1 FROM Settings WHERE id = 1)",
            []
        ]);
        return _this;
    }
    /**
     * \fn    read();
     * \brief Obtenir la configuration
     * \param settings La configuration
     */
    SettingsService.prototype.read = function (settings) {
        var requestSQL = { request: '', attribute: [] };
        requestSQL.request = 'SELECT * FROM Settings WHERE id = 1';
        this.readDB(requestSQL, settings, this.applyResult, this.divID);
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour la configuration
     * \param settings La configuration
     * \param dataID Le nom du service
     */
    SettingsService.prototype.applyResult = function (settings, dataID) {
        var data = JSON.parse(document.getElementById(dataID).innerHTML)[0];
        document.getElementById(dataID).innerHTML = '';
        settings.ref = new __WEBPACK_IMPORTED_MODULE_1__class_data_settings__["a" /* Settings */](data.organization, data.phone, data.email, data.address, data.addressSupplement, data.country, data.postalCode, data.location, data.amountBoats, data.timeManagement);
    };
    /**
     * \fn    update();
     * \brief Met à jour la configuration
     * \param[in] settings La configuration qui doit être mise à jour
     */
    SettingsService.prototype.update = function (settings) {
        this.writeDB([
            'UPDATE Settings SET organization = ?, phone = ?, email = ?, address = ?, \
     addressSupplement = ?, country = ?, postalCode = ?, location = ?, amountBoats = ?, \
     timeManagement = ? WHERE id = 1',
            [settings.getOrganization(), settings.getPhone(), settings.getEmail(), settings.getAddress(), settings.getAddressSupplement(), settings.getCountry(), settings.getPostalCode(), settings.getLocation(), settings.getAmountBoats(), +settings.getTimeManagement()]
        ]);
    };
    return SettingsService;
}(__WEBPACK_IMPORTED_MODULE_2__class_database__["a" /* DataBase */]));
SettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    /**
     * \class SettingsService
     * \brief Cette classe s'occupe de la persistance de la configuration général de SGER
     * \author Zarzitski
     * \version 1
     * \date 2017-04-12 18:26:00 +0100
     */
    ,
    __metadata("design:paramtypes", [])
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_subscriber__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_crud__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriberService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file subscriber.service.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-15 21:05:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/



var SubscriberService = (function (_super) {
    __extends(SubscriberService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase
     */
    function SubscriberService() {
        var _this = _super.call(this, 'SubscriberService', 'CREATE TABLE IF NOT EXISTS \
    Subscriber ( id INTEGER PRIMARY KEY AUTOINCREMENT, letter TEXT, event INTEGER, name TEXT, \
    country TEXT, isaf TEXT, ranking TEXT, FOREIGN KEY(event) REFERENCES Event(id) )', 'Subscriber') || this;
        _this.divID = 'SubscriberService';
        return _this;
    }
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    SubscriberService.prototype.create = function (event) {
        var subscribers = event.getSubscribers().slice(0);
        for (var i = 0; i < subscribers.length; i++) {
            this.writeDB([
                'INSERT INTO Subscriber(id, letter, event, name, country, isaf, ranking) \
        VALUES (?, ?, ?, ?, ?, ?, ?)',
                [subscribers[i].getId(), subscribers[i].getLetter(), event.getId(), subscribers[i].getName(), subscribers[i].getCountry(), subscribers[i].getIsaf(), subscribers[i].getRanking()]
            ]);
        }
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    SubscriberService.prototype.read = function (event) {
        var requestSQL = { request: '', attribute: [] };
        var eventID = +event.ref.getId();
        if (eventID > 0) {
            requestSQL.request = '\
      SELECT * FROM Subscriber WHERE event = ' + eventID + ' ORDER BY name';
            var subscribers = { ref: event.ref };
            this.readDB(requestSQL, event, this.applyResult, this.divID);
        }
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    SubscriberService.prototype.readByPhase = function (event, phase) {
        var requestSQL = { request: '', attribute: [] };
        var phaseID = +phase.getId();
        if (phaseID > 0) {
            requestSQL.request = '\
      SELECT S.* \
      FROM Subscriber S, Event E, Phase P \
      WHERE S.event = E.id AND E.id = P.event AND P.id = ' + phaseID + ' ORDER BY name';
            this.readDB(requestSQL, event, this.applyResult, this.divID);
        }
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    SubscriberService.prototype.applyResult = function (event, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        var subscribers = [];
        for (var i = 0; i < data.length; i++) {
            subscribers.push(new __WEBPACK_IMPORTED_MODULE_1__class_data_subscriber__["a" /* Subscriber */](data[i].id, data[i].name, data[i].country, data[i].isaf, data[i].ranking, data[i].letter));
        }
        event.ref.setSubscribers(subscribers.slice(0));
    };
    /**
     * \fn    update();
     * \brief Met à jour l'équipage
     * \param[in] crew L'équipage qui doit être mise à jour
     */
    SubscriberService.prototype.update = function (event) {
        this.delete(event);
        this.create(event);
    };
    /**
     * \fn    delete();
     * \brief Supprime l'équipage
     * \param[in] crew L'équipage qui doit être supprimé
     */
    SubscriberService.prototype.delete = function (event) {
        this.writeDB([
            'DELETE FROM Subscriber WHERE event = ?',
            [event.getId()]
        ]);
    };
    return SubscriberService;
}(__WEBPACK_IMPORTED_MODULE_2__class_crud__["a" /* CRUD */]));
SubscriberService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SubscriberService);

//# sourceMappingURL=subscriber.service.js.map

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 112;


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(135);




document.addEventListener('deviceready', function () {
    if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});
//# sourceMappingURL=main.js.map

/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_events_list_events_list_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_crews_list_crews_list_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_guide_guide_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_settings_settings_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_phase_phase_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_results_subscriber_results_subscriber_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_results_boat_results_boat_component__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'events-list', component: __WEBPACK_IMPORTED_MODULE_3__components_events_list_events_list_component__["a" /* EventsListComponent */] },
    { path: 'crews-list', component: __WEBPACK_IMPORTED_MODULE_4__components_crews_list_crews_list_component__["a" /* CrewsListComponent */] },
    { path: 'guide', component: __WEBPACK_IMPORTED_MODULE_5__components_guide_guide_component__["a" /* GuideComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_6__components_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'results-subscriber/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_results_subscriber_results_subscriber_component__["a" /* ResultSubscriberComponent */] },
    { path: 'results-boat/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_results_boat_results_boat_component__["a" /* ResultsBoatComponent */] },
    { path: 'phase/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_phase_phase_component__["a" /* PhaseComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="./class/navMenu.ts" />

var AppComponent = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs
     * \param settingsService La persistance de la configuration
     */
    function AppComponent() {
        this.sidenav = false;
        this.searchBar = false;
        this.searchBarContent = '';
        this.navMenu = { ref: [] };
    }
    /**
     * \fn     ngOnInit();
     * \brief Méthode qui lit les données la configuration
     */
    AppComponent.prototype.ngOnInit = function () {
        this.navMenu.ref.push({ title: 'Home', link: 'home' });
        this.findMenuDescription(this.findMenuDescription, this.navMenu);
    };
    AppComponent.prototype.pushButtonNav = function (link) {
        this.navMenu.ref = [];
        this.searchBar = false;
        this.searchBarContent = '';
        switch (link) {
            case 'home':
                this.navMenu.ref.push({ title: 'Home', link: 'home' });
                break;
            case 'events-list':
                this.navMenu.ref.push({ title: 'Events List', link: 'events-list' });
                this.searchBar = true;
                break;
            case 'crews-list':
                this.navMenu.ref.push({ title: 'Crews List', link: 'crews-list' });
                this.searchBar = true;
                break;
            case 'guide':
                this.navMenu.ref.push({ title: 'Guide', link: 'guide' });
                break;
            case 'settings':
                this.navMenu.ref.push({ title: 'Settings', link: 'settings' });
                break;
            case 'about':
                this.navMenu.ref.push({ title: 'About', link: 'about' });
                break;
        }
        document.getElementById('MenuData').innerHTML = '';
        this.sidenavShowHide();
    };
    AppComponent.prototype.findMenuDescription = function (findMenuDescription, navMenu) {
        if (document.getElementById("MenuData")) {
            if (document.getElementById('MenuData').innerHTML != '') {
                navMenu.ref = JSON.parse(document.getElementById('MenuData').innerHTML).splice(0);
            }
        }
        setTimeout(findMenuDescription.bind(null, findMenuDescription, navMenu), TIME_TO_WAIT);
    };
    AppComponent.prototype.sidenavShowHide = function () {
        this.sidenav = this.sidenav ? false : true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(200),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_events_list_events_list_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_crews_list_crews_list_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_guide_guide_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_settings_settings_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_phase_phase_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_results_boat_results_boat_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_results_subscriber_results_subscriber_component__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_events_list_events_list_component__["a" /* EventsListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_crews_list_crews_list_component__["a" /* CrewsListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_guide_guide_component__["a" /* GuideComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_phase_phase_component__["a" /* PhaseComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_results_boat_results_boat_component__["a" /* ResultsBoatComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_results_subscriber_results_subscriber_component__["a" /* ResultSubscriberComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultBoat; });
/**
* \file results.ts
* $Author: Sixou$
* $Rev: 1 $
* $Date: 2017-04-20 17:15:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
/**
 * \class Result
 * \brief Représentation des resultats
 * \author Sixou
 * \version 1
 * \date 2017-04-20 18:19:00 +0100
 */
var ResultBoat = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs du coureur
     * \param[in] points Les points du coureur
     * \param boat Le bateau du coureur
     * \param[in] penalty La pénalité du coureur
     */
    function ResultBoat(winTotBoat, winPercentBoat, idBoat) {
        this.winTotBoat = winTotBoat;
        this.winPercentBoat = winPercentBoat;
        this.idBoat = idBoat;
    }
    /**
     * \fn     getWinTotBoat();
     * \brief Assesseur de l'attribut organization
     * \return organization Retourne le nom de l'organisation
     */
    ResultBoat.prototype.getWinTotBoat = function () {
        return this.winTotBoat;
    };
    /**
     * \fn     setWinTotBoat();
     * \brief Mutateur de l'attribut organization
     * \param[in] organization Le nom de l'organisation
     */
    ResultBoat.prototype.setWinTotBoat = function (value) {
        this.winTotBoat = value;
    };
    /**
     * \fn     getWinPercentBoat();
     * \brief Assesseur de l'attribut organization
     * \return organization Retourne le nom de l'organisation
     */
    ResultBoat.prototype.getWinPercentBoat = function () {
        return this.winPercentBoat;
    };
    /**
     * \fn     setWinPercentBoat();
     * \brief Mutateur de l'attribut organization
     * \param[in] organization Le nom de l'organisation
     */
    ResultBoat.prototype.setWinPercentBoat = function (value) {
        this.winPercentBoat = value;
    };
    /**
     * \fn     getIdBoat();
     * \brief Assesseur de l'attribut organization
     * \return organization Retourne le nom de l'organisation
     */
    ResultBoat.prototype.getIdBoat = function () {
        return this.idBoat;
    };
    /**
     * \fn     setIdBoat();
     * \brief Mutateur de l'attribut organization
     * \param[in] organization Le nom de l'organisation
     */
    ResultBoat.prototype.setIdBoat = function (value) {
        this.idBoat = value;
    };
    return ResultBoat;
}());

//# sourceMappingURL=resultBoat.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultSubscriber; });
/**
* \file results.ts
* $Author: Sixou$
* $Rev: 1 $
* $Date: 2017-04-20 17:15:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * \class Result
 * \brief Représentation des resultats
 * \author Sixou
 * \version 1
 * \date 2017-04-20 18:19:00 +0100
 */
var ResultSubscriber = (function (_super) {
    __extends(ResultSubscriber, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs du coureur
     * \param[in] id L'identifiant de l'entité
     * \param[in] points Les points du coureur
     * \param boat Le bateau du coureur
     * \param[in] penalty La pénalité du coureur
     */
    function ResultSubscriber(id, winTotSub, winPercentSub, idSub) {
        var _this = _super.call(this, id) || this;
        _this.winTotSub = winTotSub;
        _this.winPercentSub = winPercentSub;
        _this.idSub = idSub;
        return _this;
    }
    /**
     * \fn     getWinTotSub();
     * \brief Assesseur de l'attribut organization
     * \return organization Retourne le nom de l'organisation
     */
    ResultSubscriber.prototype.getWinTotSub = function () {
        return this.winTotSub;
    };
    /**
     * \fn     setWinTotSub();
     * \brief Mutateur de l'attribut organization
     * \param[in] organization Le nom de l'organisation
     */
    ResultSubscriber.prototype.setWinTotSub = function (value) {
        this.winTotSub = value;
    };
    /**
     * \fn     getWinPercentSub();
     * \brief Assesseur de l'attribut organization
     * \return organization Retourne le nom de l'organisation
     */
    ResultSubscriber.prototype.getWinPercentSub = function () {
        return this.winPercentSub;
    };
    /**
     * \fn     setWinPercentSub();
     * \brief Mutateur de l'attribut organization
     * \param[in] organization Le nom de l'organisation
     */
    ResultSubscriber.prototype.setWinPercentSub = function (value) {
        this.winPercentSub = value;
    };
    /**
     * \fn     getIdSub();
     * \brief Assesseur de l'attribut organization
     * \return organization Retourne le nom de l'organisation
     */
    ResultSubscriber.prototype.getIdSub = function () {
        return this.idSub;
    };
    /**
     * \fn     setIdSub();
     * \brief Mutateur de l'attribut organization
     * \param[in] organization Le nom de l'organisation
     */
    ResultSubscriber.prototype.setIdSub = function (value) {
        this.idSub = value;
    };
    return ResultSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */]));

//# sourceMappingURL=resultSubscriber.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_flight__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_match__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_racer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_boat__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_penalty__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcElaboratePairingList; });





/**
 * \class UcElaboratePairingList
 * \brief UcElaborerPairingList
 * \author Zarzitski
 * \version 1
 * \date 2017-04-21 11:33:00 +0100
 */
var UcElaboratePairingList = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs passés par référence, récupère les informations sur les flights et lance l'autocréation et l'autodescruction des matchs
     * \param eventService Persistance des événements
     * \param phaseService Persistance des phases
     * \param flightService Persistance des flights
     * \param subscriberService Persistance des subscribers
     * \param boatService Persistance des bateaux
     * \param matchService Persistance des matchs
     * \param racerService Persistance des courses
     * \param penaltyService Persistance des pénalités
     * \param event représente un événement
     * \param phase représente une phase
     * \param flight représente un flight
     * \param match représente un match
     * \param racer représente un concurrent
     * \param deleteFlightPanelIhm Variable qui indique le comportement de l'IHM deletePanel
     * \param winnerPanelIhm Booléen qui indique le comportement de l'IHM deletePanel
     * \param penaltyPanelIhm Booléen qui indique le comportement de l'IHM deletePanel
     * \param
     * \param
     */
    function UcElaboratePairingList(eventService, phaseService, flightService, subscriberService, boatService, matchService, racerService, penaltyService, event, phase, flight, match, racer, deleteFlightPanelIhm, winnerPanelIhm, penaltyPanelIhm, startTime, startDate) {
        this.eventService = eventService;
        this.phaseService = phaseService;
        this.flightService = flightService;
        this.subscriberService = subscriberService;
        this.boatService = boatService;
        this.matchService = matchService;
        this.racerService = racerService;
        this.penaltyService = penaltyService;
        this.event = event;
        this.phase = phase;
        this.flight = flight;
        this.match = match;
        this.racer = racer;
        this.winnerPanelIhm = winnerPanelIhm;
        this.deleteFlightPanelIhm = deleteFlightPanelIhm;
        this.penaltyPanelIhm = penaltyPanelIhm;
        this.startTime = startTime;
        this.startDate = startDate;
        this.read();
        this.autoCreateMatch(this.autoCreateMatch, this.matchService, this.racerService, this.event, this.phase);
        this.autoDeleteMatch(this.autoDeleteMatch, this.matchService, this.phase);
    }
    /**
     * \fn    createFlight(): void
     * \brief Créer un flight
     */
    UcElaboratePairingList.prototype.createFlight = function () {
        this.flight.ref = new __WEBPACK_IMPORTED_MODULE_0__data_flight__["a" /* Flight */](this.flightService.getNewID(), this.flightService.getNewFlightNumber(), [], '');
        var flights = this.phase.ref.getFlightsList().slice(0);
        flights.push(new __WEBPACK_IMPORTED_MODULE_0__data_flight__["a" /* Flight */](this.flight.ref.getId(), this.flight.ref.getFlightNumber(), [], ''));
        this.phase.ref.setFlightsList(flights.slice(0));
        this.flightService.create(this.flight.ref);
        this.flightService.setPhaseID(this.flight.ref, this.phase.ref);
    };
    /**
     * \fn    read(): void
     * \brief Initialise toutes les informations sur l'événement sélectionné
     */
    UcElaboratePairingList.prototype.read = function () {
        this.flightService.readCurrentFlightNumber(this.phase.ref);
        this.flightService.read(this.phase);
        this.eventService.readByPhase(this.event, this.phase.ref);
        this.subscriberService.readByPhase(this.event, this.phase.ref);
        this.boatService.read(this.event);
        this.phaseService.readById(this.phase);
        this.updateMenu(this.updateMenu, this.event, this.phase);
    };
    UcElaboratePairingList.prototype.updateMenu = function (updateMenu, event, phase) {
        if (event.ref.getId() != 0 && phase.ref.getName() != '') {
            var menuList = [];
            menuList.push({ title: "Event: " + event.ref.getName(), link: "events-list" });
            menuList.push({ title: "Phase: " + phase.ref.getName(), link: "phase/" + phase.ref.getId() });
            document.getElementById('MenuData').innerHTML = JSON.stringify(menuList);
        }
        else
            setTimeout(updateMenu.bind(null, updateMenu, event, phase), TIME_TO_WAIT);
    };
    /**
     * \fn    deleteFlight(): void
     * \brief Supprime le flight selectionné
     */
    UcElaboratePairingList.prototype.deleteFlight = function () {
        var _this = this;
        var flights = this.phase.ref.getFlightsList().slice(0);
        var indexFlights = flights.findIndex(function (x) { return x.getId() == _this.flight.ref.getId(); });
        flights.splice(indexFlights, 1);
        this.phase.ref.setFlightsList(flights.slice(0));
        this.flightService.delete(this.flight.ref);
        this.flightService.readCurrentFlightNumber(this.phase.ref);
        this.deletePanelHide();
    };
    /**
     * \fn    autoCreateMatch(): void
     * \brief crée automatiquement un match lorsque les champs sont remplis
     */
    UcElaboratePairingList.prototype.autoCreateMatch = function (autoCreateMatch, matchService, racerService, event, phase) {
        var fligths = phase.ref.getFlightsList().slice(0);
        for (var i = 0; i < fligths.length; i++) {
            if (fligths[i].getHiddenContent()) {
                if (fligths[i].getBlueSubscriberId() > 0 && fligths[i].getBlueBoatId() > 0 && fligths[i].getYellowSubscriberId() > 0 && fligths[i].getYellowBoatId() > 0) {
                    var subscribers = event.ref.getSubscribers().slice(0);
                    var boats = event.ref.getBoatsList().slice(0);
                    var indexBlueSubscriber = subscribers.findIndex(function (x) { return x.getId() == fligths[i].getBlueSubscriberId(); });
                    var indexYellowSubscriber = subscribers.findIndex(function (x) { return x.getId() == fligths[i].getYellowSubscriberId(); });
                    var indexBlueBoat = boats.findIndex(function (x) { return x.getId() == fligths[i].getBlueBoatId(); });
                    var indexYellowBoat = boats.findIndex(function (x) { return x.getId() == fligths[i].getYellowBoatId(); });
                    var blueRacer = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](racerService.getNewID(), subscribers[indexBlueSubscriber].getName(), subscribers[indexBlueSubscriber].getCountry(), subscribers[indexBlueSubscriber].getIsaf(), subscribers[indexBlueSubscriber].getRanking(), subscribers[indexBlueSubscriber].getLetter(), 0, { ref: boats[indexBlueBoat] }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
                    var yellowRacer = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](racerService.getNewID(), subscribers[indexYellowSubscriber].getName(), subscribers[indexYellowSubscriber].getCountry(), subscribers[indexYellowSubscriber].getIsaf(), subscribers[indexYellowSubscriber].getRanking(), subscribers[indexYellowSubscriber].getLetter(), 0, { ref: boats[indexYellowBoat] }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
                    var match = new __WEBPACK_IMPORTED_MODULE_1__data_match__["a" /* Match */](matchService.getNewID(), blueRacer, yellowRacer, true, '');
                    var matchsList = fligths[i].getMatchsList().slice(0);
                    matchsList.push(match);
                    fligths[i].setMatchsList(matchsList.slice(0));
                    matchService.create(match);
                    matchService.setEventID(match, fligths[i]);
                    racerService.create(match);
                    fligths[i].setBlueSubscriberId(0);
                    fligths[i].setBlueBoatId(0);
                    fligths[i].setYellowSubscriberId(0);
                    fligths[i].setYellowBoatId(0);
                    phase.ref.setFlightsList(fligths.slice(0));
                }
            }
        }
        setTimeout(autoCreateMatch.bind(null, autoCreateMatch, matchService, racerService, event, phase), TIME_TO_WAIT_BUTTON);
    };
    /**
     * \fn    autoDeleteMatch(): void
     * \brief  Détruit automatiquement un match lorsque les champs sont vidés
     */
    UcElaboratePairingList.prototype.autoDeleteMatch = function (autoDeleteMatch, matchService, phase) {
        var fligths = phase.ref.getFlightsList().slice(0);
        for (var i = 0; i < fligths.length; i++) {
            if (fligths[i].getHiddenContent()) {
                var matchsList = fligths[i].getMatchsList().slice(0);
                for (var j = 0; j < matchsList.length; j++) {
                    if (!matchsList[j].getLocked()) {
                        if (matchsList[j].getBlueSubscriberId() == -1 && matchsList[j].getBlueBoatId() == -1 && matchsList[j].getYellowSubscriberId() == -1 && matchsList[j].getYellowBoatId() == -1) {
                            matchService.delete(matchsList[j]);
                            matchsList.splice(j, 1);
                        }
                    }
                }
                fligths[i].setMatchsList(matchsList.slice(0));
                phase.ref.setFlightsList(fligths.slice(0));
            }
        }
        setTimeout(autoDeleteMatch.bind(null, autoDeleteMatch, matchService, phase), TIME_TO_WAIT_BUTTON);
    };
    /**
     * \fn    unlockMatch(): void
     * \brief Déverouille le match afin de pouvoir le modifier
     */
    UcElaboratePairingList.prototype.unlockMatch = function (match) {
        match.setLocked(false);
        var blueRacer = match.getBlue();
        var yellowRacer = match.getYellow();
        var indexBlueSubscriber = this.event.ref.getSubscribers().findIndex(function (x) { return x.getName() == blueRacer.getName() && x.getCountry() == blueRacer.getCountry()
            && x.getIsaf() == blueRacer.getIsaf() && x.getRanking() == blueRacer.getRanking()
            && x.getLetter() == blueRacer.getLetter(); });
        var indexYellowSubscriber = this.event.ref.getSubscribers().findIndex(function (x) { return x.getName() == yellowRacer.getName() && x.getCountry() == yellowRacer.getCountry()
            && x.getIsaf() == yellowRacer.getIsaf() && x.getRanking() == yellowRacer.getRanking()
            && x.getLetter() == yellowRacer.getLetter(); });
        match.setBlueSubscriberId(this.event.ref.getSubscribers()[indexBlueSubscriber].getId());
        match.setYellowSubscriberId(this.event.ref.getSubscribers()[indexYellowSubscriber].getId());
        match.setBlueBoatId(blueRacer.getBoat().getId());
        match.setYellowBoatId(yellowRacer.getBoat().getId());
    };
    /**
     * \fn    updateMatch(): void
     * \brief Met à jour les informations concernant le match
     */
    UcElaboratePairingList.prototype.updateMatch = function (match) {
        var subscribers = this.event.ref.getSubscribers().slice(0);
        var boats = this.event.ref.getBoatsList().slice(0);
        var indexBlueSubscriber = subscribers.findIndex(function (x) { return x.getId() == match.getBlueSubscriberId(); });
        var indexYellowSubscriber = subscribers.findIndex(function (x) { return x.getId() == match.getYellowSubscriberId(); });
        var indexBlueBoat = boats.findIndex(function (x) { return x.getId() == match.getBlueBoatId(); });
        var indexYellowBoat = boats.findIndex(function (x) { return x.getId() == match.getYellowBoatId(); });
        var blueRacer = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](match.getBlue().getId(), subscribers[indexBlueSubscriber].getName(), subscribers[indexBlueSubscriber].getCountry(), subscribers[indexBlueSubscriber].getIsaf(), subscribers[indexBlueSubscriber].getRanking(), subscribers[indexBlueSubscriber].getLetter(), 0, { ref: boats[indexBlueBoat] }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        var yellowRacer = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](match.getYellow().getId(), subscribers[indexYellowSubscriber].getName(), subscribers[indexYellowSubscriber].getCountry(), subscribers[indexYellowSubscriber].getIsaf(), subscribers[indexYellowSubscriber].getRanking(), subscribers[indexYellowSubscriber].getLetter(), 0, { ref: boats[indexYellowBoat] }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        match.setBlue(blueRacer);
        match.setYellow(yellowRacer);
        match.setLocked(true);
        this.racerService.update(match);
    };
    /**
     * \fn    deletePanelShow(): void
     * \brief Affiche l'IHM deletePanel en récuperant le flight à supprimer
     * \param[in] crew L'équipage selectionné pour la suppression
     */
    UcElaboratePairingList.prototype.deletePanelShow = function (flight) {
        this.flight.ref = new __WEBPACK_IMPORTED_MODULE_0__data_flight__["a" /* Flight */](flight.getId(), flight.getFlightNumber(), flight.getMatchsList(), flight.getStartDateTime());
        this.deleteFlightPanelIhm.ref = true;
        document.body.scrollTop = 0;
    };
    /**
     * \fn    deletePanelHide(): void
     * \brief Cache l'IHM deletePanel et vide la variable flight
     */
    UcElaboratePairingList.prototype.deletePanelHide = function () {
        this.flight.ref = new __WEBPACK_IMPORTED_MODULE_0__data_flight__["a" /* Flight */](0, 0, [], '');
        this.deleteFlightPanelIhm.ref = false;
    };
    /**
     * \fn    saveWinnerScore(): void
     * \brief met à jour l'équipage gagnant dans la base de données en lui ajoutant un point ou met à jour les deux équipages en leur attribuant 0.5 points chacun dans le cas d'un match nul
     */
    UcElaboratePairingList.prototype.saveWinnerScore = function () {
        var _this = this;
        this.match.ref.setFinishDateTime(this.winnerPanelIhm.ref.time);
        switch (this.winnerPanelIhm.ref.scoreBar) {
            case 0:
                this.match.ref.getBlue().setPoints(1);
                break;
            case 1:
                this.match.ref.getBlue().setPoints(0.5);
                this.match.ref.getYellow().setPoints(0.5);
                break;
            case 2:
                this.match.ref.getYellow().setPoints(1);
                break;
        }
        var flights = this.phase.ref.getFlightsList();
        for (var i = 0; i < flights.length; i++) {
            var matchs = flights[i].getMatchsList();
            var index = matchs.findIndex(function (x) { return x.getId() == _this.match.ref.getId(); });
            if (index != -1) {
                matchs[index].getBlue().setPoints(this.match.ref.getBlue().getPoints());
                matchs[index].getYellow().setPoints(this.match.ref.getYellow().getPoints());
                matchs[index].setFinishDateTime(this.match.ref.getFinishDateTime());
                i = flights.length;
            }
        }
        this.matchService.update(this.match.ref);
        this.racerService.update(this.match.ref);
        this.winnerPanelHide();
    };
    /**
     * \fn    removeWinnerScore(): void
     * \brief remet à zéro le nombre de point et de pénalité des deux équipages
     */
    UcElaboratePairingList.prototype.removeWinnerScore = function () {
        var _this = this;
        this.match.ref.setFinishDateTime('');
        this.match.ref.getBlue().setPoints(0);
        this.match.ref.getBlue().setPenalty(new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        this.match.ref.getYellow().setPoints(0);
        this.match.ref.getYellow().setPenalty(new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        var flights = this.phase.ref.getFlightsList();
        for (var i = 0; i < flights.length; i++) {
            var matchs = flights[i].getMatchsList();
            var index = matchs.findIndex(function (x) { return x.getId() == _this.match.ref.getId(); });
            if (index != -1) {
                matchs[index].getBlue().setPoints(this.match.ref.getBlue().getPoints());
                matchs[index].getBlue().setPenalty(new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
                matchs[index].getYellow().setPoints(this.match.ref.getYellow().getPoints());
                matchs[index].getYellow().setPenalty(new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
                matchs[index].setFinishDateTime(this.match.ref.getFinishDateTime());
                i = flights.length;
            }
        }
        this.matchService.update(this.match.ref);
        this.racerService.update(this.match.ref);
        this.deleteWinnerPanelHide();
    };
    /**
     * \fn    winnerPanelShow(): void
     * \brief affiche le formulaire de sélection du vainqueur en présélectionnant l'équipage cliqué
     * \param[in] match représente le match concerné
     * \param[in] racer représente l'équipage sélectionné
     */
    UcElaboratePairingList.prototype.winnerPanelShow = function (match, racer) {
        this.winnerPanelIhm.ref.time = new Date().toTimeString().split(' ')[0];
        this.winnerPanelIhm.ref.hide = false;
        switch (racer) {
            case 'blue':
                this.winnerPanelIhm.ref.scoreBar = 0;
                break;
            case 'blue/yellow':
                this.winnerPanelIhm.ref.scoreBar = 1;
                break;
            case 'yellow':
                this.winnerPanelIhm.ref.scoreBar = 2;
                break;
        }
        var blueRacer = match.getBlue();
        var blueBoat = blueRacer.getBoat();
        var blueRacerNew = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](blueRacer.getId(), blueRacer.getName(), blueRacer.getCountry(), blueRacer.getIsaf(), blueRacer.getRanking(), blueRacer.getLetter(), blueRacer.getPoints(), { ref: new __WEBPACK_IMPORTED_MODULE_3__data_boat__["a" /* Boat */](blueBoat.getId(), blueBoat.getBoatNumber()) }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        var yellowRacer = match.getYellow();
        var yellowBoat = yellowRacer.getBoat();
        var yellowRacerNew = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](yellowRacer.getId(), yellowRacer.getName(), yellowRacer.getCountry(), yellowRacer.getIsaf(), yellowRacer.getRanking(), yellowRacer.getLetter(), yellowRacer.getPoints(), { ref: new __WEBPACK_IMPORTED_MODULE_3__data_boat__["a" /* Boat */](yellowBoat.getId(), yellowBoat.getBoatNumber()) }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        this.match.ref = new __WEBPACK_IMPORTED_MODULE_1__data_match__["a" /* Match */](match.getId(), blueRacerNew, yellowRacerNew, match.getLocked(), match.getFinishDateTime());
        document.body.scrollTop = 0;
    };
    /**
     * \fn    winnerPanelHide(): void
     * \brief Cache l'IHM winnerPanel et vide les variables racer et match
     */
    UcElaboratePairingList.prototype.winnerPanelHide = function () {
        this.winnerPanelIhm.ref.hide = true;
        this.winnerPanelIhm.ref.time = '';
        this.winnerPanelIhm.ref.scoreBar = 0;
        var racer = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](0, '', '', '', 0, '', 0, { ref: new __WEBPACK_IMPORTED_MODULE_3__data_boat__["a" /* Boat */](0, 0) }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        this.match.ref = new __WEBPACK_IMPORTED_MODULE_1__data_match__["a" /* Match */](0, racer, racer, false, '');
    };
    /**
     * \fn    deleteWinnerPanelShow(): void
     * \brief Affiche l'IHM deletePanel en récupérant le match dont les scores sont à supprimer
     * \param[in] match selectionné pour la suppression des scores
     */
    UcElaboratePairingList.prototype.deleteWinnerPanelShow = function (match) {
        var blueRacer = match.getBlue();
        var blueBoat = blueRacer.getBoat();
        var blueRacerNew = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](blueRacer.getId(), blueRacer.getName(), blueRacer.getCountry(), blueRacer.getIsaf(), blueRacer.getRanking(), blueRacer.getLetter(), blueRacer.getPoints(), { ref: new __WEBPACK_IMPORTED_MODULE_3__data_boat__["a" /* Boat */](blueBoat.getId(), blueBoat.getBoatNumber()) }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        var yellowRacer = match.getYellow();
        var yellowBoat = yellowRacer.getBoat();
        var yellowRacerNew = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](yellowRacer.getId(), yellowRacer.getName(), yellowRacer.getCountry(), yellowRacer.getIsaf(), yellowRacer.getRanking(), yellowRacer.getLetter(), yellowRacer.getPoints(), { ref: new __WEBPACK_IMPORTED_MODULE_3__data_boat__["a" /* Boat */](yellowBoat.getId(), yellowBoat.getBoatNumber()) }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        this.match.ref = new __WEBPACK_IMPORTED_MODULE_1__data_match__["a" /* Match */](match.getId(), blueRacerNew, yellowRacerNew, match.getLocked(), match.getFinishDateTime());
        this.winnerPanelIhm.ref.deletePanelhide = false;
        document.body.scrollTop = 0;
    };
    /**
     * \fn    deleteWinnerPanelHide(): void
     * \brief Cache l'IHM deletePanel et vide les variables racer et match
     */
    UcElaboratePairingList.prototype.deleteWinnerPanelHide = function () {
        var racer = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](0, '', '', '', 0, '', 0, { ref: new __WEBPACK_IMPORTED_MODULE_3__data_boat__["a" /* Boat */](0, 0) }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        this.match.ref = new __WEBPACK_IMPORTED_MODULE_1__data_match__["a" /* Match */](0, racer, racer, false, '');
        this.winnerPanelIhm.ref.deletePanelhide = true;
    };
    /**
     * \fn    getRefRacer(): Racer
     * \brief récupère le concurrent sélectionné
     * \return racer le concurrent sélectionné
     */
    UcElaboratePairingList.prototype.getRefRacer = function () {
        var flights = this.phase.ref.getFlightsList();
        var racer;
        for (var i = 0; i < flights.length; i++) {
            var matchs = flights[i].getMatchsList();
            for (var j = 0; j < matchs.length; j++) {
                if (matchs[j].getBlue().getId() == this.racer.ref.getId()) {
                    racer = matchs[j].getBlue();
                    i = flights.length;
                    j = flights.length;
                }
                else if (matchs[j].getYellow().getId() == this.racer.ref.getId()) {
                    racer = matchs[j].getYellow();
                    i = flights.length;
                    j = flights.length;
                }
            }
        }
        return racer;
    };
    /**
     * \fn    createUpdateDeletePenalty(): void
     * \brief gère l'ajout, la mise à jour et la suppression des pénalités
     */
    UcElaboratePairingList.prototype.createUpdateDeletePenalty = function () {
        var penalty = this.racer.ref.getPenalty();
        var racer = this.getRefRacer();
        if (penalty.getId() == 0 && penalty.getPoints() != 0) {
            //Create
            penalty.setId(this.penaltyService.getNewID());
            racer.getPenalty().setId(penalty.getId());
            racer.getPenalty().setPoints(penalty.getPoints());
            racer.getPenalty().setDetail(penalty.getDetail());
            this.penaltyService.create(this.racer.ref);
        }
        else {
            if (penalty.getPoints() == 0) {
                //Delete
                racer.getPenalty().setId(0);
                racer.getPenalty().setPoints(0);
                racer.getPenalty().setDetail('');
                this.penaltyService.delete(this.racer.ref.getPenalty());
            }
            else {
                //Update
                racer.getPenalty().setPoints(penalty.getPoints());
                racer.getPenalty().setDetail(penalty.getDetail());
                this.penaltyService.update(this.racer.ref);
            }
        }
        this.penaltyPanelIhmHide();
    };
    /**
     * \fn    penaltyPanelIhmShow(): void
     * \brief Affiche l'IHM de gestion des pénalités
     * \param[in] racer concurrent selectionné
     */
    UcElaboratePairingList.prototype.penaltyPanelIhmShow = function (racer) {
        this.racer.ref = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](racer.getId(), racer.getName(), racer.getCountry(), racer.getIsaf(), racer.getRanking(), racer.getLetter(), racer.getPoints(), { ref: new __WEBPACK_IMPORTED_MODULE_3__data_boat__["a" /* Boat */](racer.getBoat().getId(), racer.getBoat().getBoatNumber()) }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](racer.getPenalty().getId(), racer.getPenalty().getPoints(), racer.getPenalty().getDetail()));
        this.penaltyPanelIhm.ref = true;
        document.body.scrollTop = 0;
    };
    /**
     * \fn    penaltyPanelIhmHide(): void
     * \brief Cache l'IHM de gestion des pénalités et vide la variable racer
     */
    UcElaboratePairingList.prototype.penaltyPanelIhmHide = function () {
        this.racer.ref = new __WEBPACK_IMPORTED_MODULE_2__data_racer__["a" /* Racer */](0, '', '', '', 0, '', 0, { ref: new __WEBPACK_IMPORTED_MODULE_3__data_boat__["a" /* Boat */](0, 0) }, new __WEBPACK_IMPORTED_MODULE_4__data_penalty__["a" /* Penalty */](0, 0, ''));
        this.penaltyPanelIhm.ref = false;
    };
    /**
     * \fn    detailPanelShowHide(): void
     * \brief Affiche les détails du flight sélectionné : match, concurrents, bateaux et pénalité
     */
    UcElaboratePairingList.prototype.detailPanelShowHide = function (flight) {
        flight.setHiddenContent(flight.getHiddenContent() ? false : true);
        if (flight.getHiddenContent()) {
            this.matchService.read({ ref: flight });
            this.racerService.read({ ref: flight });
            this.boatService.associationBoatsToRacer({ ref: flight });
            this.penaltyService.read({ ref: flight });
        }
    };
    UcElaboratePairingList.prototype.getBoatsList = function (flight, boatId) {
        var boatsList = this.event.ref.getBoatsList().slice(0);
        var matchsInFlight = flight.getMatchsList();
        for (var i = 0; i < matchsInFlight.length; i++) {
            var indexBlue = boatsList.findIndex(function (x) { return x.getId() == matchsInFlight[i].getBlue().getBoat().getId(); });
            boatsList.splice(indexBlue, 1);
            var indexYellow = boatsList.findIndex(function (x) { return x.getId() == matchsInFlight[i].getYellow().getBoat().getId(); });
            boatsList.splice(indexYellow, 1);
        }
        var indexBlueTmp = boatsList.findIndex(function (x) { return x.getId() == flight.getBlueBoatId(); });
        if (indexBlueTmp != -1)
            boatsList.splice(indexBlueTmp, 1);
        var indexYellowTmp = boatsList.findIndex(function (x) { return x.getId() == flight.getYellowBoatId(); });
        if (indexYellowTmp != -1)
            boatsList.splice(indexYellowTmp, 1);
        var index = this.event.ref.getBoatsList().findIndex(function (x) { return x.getId() == boatId; });
        if (index != -1)
            boatsList.push(this.event.ref.getBoatsList().slice(0)[index]);
        return boatsList;
    };
    UcElaboratePairingList.prototype.getSubscribersList = function (flight, subscriberId) {
        var subscribersList = this.event.ref.getSubscribers().slice(0);
        var matchsInFlight = flight.getMatchsList();
        for (var i = 0; i < matchsInFlight.length; i++) {
            var indexBlue = subscribersList.findIndex(function (x) { return x.getLetter() == matchsInFlight[i].getBlue().getLetter(); });
            subscribersList.splice(indexBlue, 1);
            var indexYellow = subscribersList.findIndex(function (x) { return x.getLetter() == matchsInFlight[i].getYellow().getLetter(); });
            subscribersList.splice(indexYellow, 1);
        }
        var indexBlueTmp = subscribersList.findIndex(function (x) { return x.getId() == flight.getBlueSubscriberId(); });
        if (indexBlueTmp != -1)
            subscribersList.splice(indexBlueTmp, 1);
        var indexYellowTmp = subscribersList.findIndex(function (x) { return x.getId() == flight.getYellowSubscriberId(); });
        if (indexYellowTmp != -1)
            subscribersList.splice(indexYellowTmp, 1);
        var index = this.event.ref.getSubscribers().findIndex(function (x) { return x.getId() == subscriberId; });
        if (index != -1)
            subscribersList.push(this.event.ref.getSubscribers().slice(0)[index]);
        return subscribersList;
    };
    UcElaboratePairingList.prototype.createStartDateTime = function (flight) {
        if (this.startDate.ref == '' || this.startTime.ref == '') {
            this.startDate.ref = new Date().yyyymmdd();
            this.startTime.ref = new Date().toTimeString().split(' ')[0];
            ;
        }
        flight.setStartDateTime(this.startDate.ref + ' ' + this.startTime.ref);
        this.flightService.update(flight);
        this.startDate.ref = '';
        this.startTime.ref = '';
    };
    UcElaboratePairingList.prototype.deleteStartDateTime = function (flight) {
        flight.setStartDateTime('');
        this.flightService.update(flight);
    };
    UcElaboratePairingList.prototype.getMaxFligthInArray = function () {
        var numberMax = Math.max.apply(Math, this.phase.ref.getFlightsList().map(this.getNumberOfFligth));
        return /^-?[\d.]+(?:e-?\d+)?$/.test(numberMax) ? numberMax : 0;
    };
    UcElaboratePairingList.prototype.getNumberOfFligth = function (flight) {
        return flight.getFlightNumber();
    };
    return UcElaboratePairingList;
}());

//# sourceMappingURL=ucelaboratepairinglist.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_crew__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcManageCrews; });

/**
 * \class UcManageCrews
 * \brief UcGererEquipage
 * \author Zarzitski
 * \version 3
 * \date 2017-04-05 08:45:00 +0100
 */
var UcManageCrews = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs passés par référence et récupère la liste des équipages
     * \param crewsService La persistance des équipages
     * \param crews Liste des équipages
     * \param crew Stockage de l'equipage selectionné
     * \param crewPanelIhm Variable qui indique le comportement de l'IHM crewPanel
     * \param editMode Variable qui indique si on est en mode édition ou création
     * \param deletePanelIhm Variable qui indique le comportement de l'IHM deletePanel
     */
    function UcManageCrews(crewService, crews, crew, crewPanelIhm, editMode, deletePanelIhm) {
        this.crewService = crewService;
        this.crews = crews;
        this.crew = crew;
        this.crewPanelIhm = crewPanelIhm;
        this.editMode = editMode;
        this.deletePanelIhm = deletePanelIhm;
        this.read();
    }
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     */
    UcManageCrews.prototype.create = function () {
        if (this.testCrewPanel()) {
            this.crew.ref.setId(this.crewService.getNewID());
            this.crewService.create(this.crew.ref);
            this.crews.ref.push(new __WEBPACK_IMPORTED_MODULE_0__data_crew__["a" /* Crew */](this.crew.ref.getId(), this.crew.ref.getName(), this.crew.ref.getCountry(), this.crew.ref.getIsaf(), +this.crew.ref.getRanking()));
            this.crewPanelShowHide();
        }
    };
    /**
     * \fn    update(): void
     * \brief Met à jour l'équipage selectionné
     */
    UcManageCrews.prototype.update = function () {
        var _this = this;
        if (this.testCrewPanel()) {
            var index = this.crews.ref.findIndex(function (x) { return x.getId() === _this.crew.ref.getId(); });
            this.crews.ref[index] = new __WEBPACK_IMPORTED_MODULE_0__data_crew__["a" /* Crew */](this.crew.ref.getId(), this.crew.ref.getName(), this.crew.ref.getCountry(), this.crew.ref.getIsaf(), +this.crew.ref.getRanking());
            this.crewService.update(this.crew.ref);
            this.crewPanelShowHide();
        }
    };
    /**
     * \fn    testCrewPanel(): boolean
     * \brief Test les champs du formulaire CrewPanel et affiche les erreurs
     * \return testResult Retourne le resultat du test
     */
    UcManageCrews.prototype.testCrewPanel = function () {
        var testResult = true;
        if (!/^[A-Za-z0-9-]{2,}[A-Za-z0-9-]*$/.test(this.crew.ref.getName())) {
            testResult = false;
            alert('The name contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-").');
        }
        if (!/^[A-Z]{2}$/.test(this.crew.ref.getCountry())) {
            testResult = false;
            alert('The Country contains unauthorized country.');
        }
        if (!/^[A-Za-z0-9-]*$/.test(this.crew.ref.getIsaf())) {
            testResult = false;
            alert('The ISAF contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-").');
        }
        if (!/^[0-5]{1}$/.test(this.crew.ref.getRanking().toString())) {
            testResult = false;
            alert('The ranking contains unauthorized number, please correct it with the allowed number ("0-5")');
        }
        return testResult;
    };
    /**
     * \fn    read(): void
     * \brief Initialise tous les équipages sauvegardés
     */
    UcManageCrews.prototype.read = function () {
        this.crewService.read(this.crews);
    };
    /**
     * \fn    delete(): void
     * \brief Supprime l'équipage selectionné
     */
    UcManageCrews.prototype.delete = function () {
        var _this = this;
        var index = this.crews.ref.findIndex(function (x) { return x.getId() === _this.crew.ref.getId(); });
        this.crewService.delete(this.crew.ref);
        this.crews.ref.splice(index, 1);
        this.deletePanelHide();
    };
    /**
     * \fn    createCrewPanel(): void
     * \brief Affiche l'IHM crewPanel en mode création
     */
    UcManageCrews.prototype.createCrewPanel = function () {
        this.crewPanelShowHide();
        this.editMode.ref = false;
    };
    /**
     * \fn    editCrewPanel(): void
     * \brief Affiche l'IHM crewPanel en mode édition en récuperant l'équipage à modifier
     * \param[in] crew L'équipage selectionné pour la modification
     */
    UcManageCrews.prototype.editCrewPanel = function (crew) {
        this.crewPanelShowHide();
        this.crew.ref = new __WEBPACK_IMPORTED_MODULE_0__data_crew__["a" /* Crew */](crew.getId(), crew.getName(), crew.getCountry(), crew.getIsaf(), crew.getRanking());
        this.editMode.ref = true;
    };
    /**
     * \fn    crewPanelShowHide(): void
     * \brief Affiche l'IHM crewPanel et vide la variable crew
     */
    UcManageCrews.prototype.crewPanelShowHide = function () {
        this.crew.ref = new __WEBPACK_IMPORTED_MODULE_0__data_crew__["a" /* Crew */](0, '', '', '', 0);
        this.crewPanelIhm.ref = this.crewPanelIhm.ref ? false : true;
    };
    /**
     * \fn    deletePanelShow(): void
     * \brief Affiche l'IHM deletePanel en récuperant l'équipage à supprimer
     * \param[in] crew L'équipage selectionné pour la suppression
     */
    UcManageCrews.prototype.deletePanelShow = function (crew) {
        this.crew.ref = new __WEBPACK_IMPORTED_MODULE_0__data_crew__["a" /* Crew */](crew.getId(), crew.getName(), crew.getCountry(), crew.getIsaf(), crew.getRanking());
        this.deletePanelIhm.ref = true;
    };
    /**
     * \fn    deletePanelHide(): void
     * \brief Cache l'IHM deletePanel et vide la variable crew
     */
    UcManageCrews.prototype.deletePanelHide = function () {
        this.crew.ref = new __WEBPACK_IMPORTED_MODULE_0__data_crew__["a" /* Crew */](0, '', '', '', 0);
        this.deletePanelIhm.ref = false;
    };
    return UcManageCrews;
}());

//# sourceMappingURL=ucmanagecrews.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_subscriber__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcOrganizeEvent; });


/**
 * \class UcOrganizeEvent
 * \brief UcOrganiserEpreuve
 * \author Zarzitski
 * \version 2
 * \date 2017-04-23 16:18:00 +0100
 */
var UcOrganizeEvent = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs passés par référence et récupère les informations concernant l'événement
     * \param eventService persistance des événements
     * \param settingsService persistance des paramètres
     * \param crewService persistance des équipages
     * \param subscriberService persistance des participants
     * \param boatService persistance des bateaux
     * \param eventPanelIhm booleen qui indique le comportement de l'IHM évenement
     * \param editMode booleen qui indique si le mode édition est sélectionné ou non
     * \param deleteEventPanelIhm booleen qui indique si une suppression est demandée
     * \param crewId identifiant du bateau
     * \param crewLetter lettre du bateau
     */
    function UcOrganizeEvent(eventService, settingsService, crewService, subscriberService, boatService, events, event, settings, crews, eventPanelIhm, editMode, deleteEventPanelIhm, crewId, crewLetter) {
        this.eventService = eventService;
        this.settingsService = settingsService;
        this.crewService = crewService;
        this.subscriberService = subscriberService;
        this.boatService = boatService;
        this.events = events;
        this.event = event;
        this.settings = settings;
        this.crews = crews;
        this.eventPanelIhm = eventPanelIhm;
        this.editMode = editMode;
        this.deleteEventPanelIhm = deleteEventPanelIhm;
        this.crewId = crewId;
        this.crewLetter = crewLetter;
        this.read();
    }
    /**
     * \fn    create(): void
     * \brief Créer un événement
     */
    UcOrganizeEvent.prototype.create = function () {
        if (this.testEventPanel()) {
            this.event.ref.setId(this.eventService.getNewID());
            this.eventService.create(this.event.ref);
            this.subscriberService.create(this.event.ref);
            this.boatService.create(this.event.ref);
            this.events.ref.push(new __WEBPACK_IMPORTED_MODULE_0__data_event__["a" /* Event */](this.event.ref.getId(), this.event.ref.getName(), this.event.ref.getOrganization(), this.event.ref.getLocation(), this.event.ref.getRanking(), this.event.ref.getNumberBoats(), this.event.ref.getDate(), this.event.ref.getSubscribers(), this.event.ref.getPhasesList(), this.event.ref.getTimeManagement()));
            this.eventPanelShowHide();
        }
    };
    /**
     * \fn    update(): void
     * \brief Met à jour la liste des événements
     */
    UcOrganizeEvent.prototype.update = function () {
        var _this = this;
        if (this.testEventPanel()) {
            var index = this.events.ref.findIndex(function (x) { return x.getId() == _this.event.ref.getId(); });
            this.events.ref[index] = new __WEBPACK_IMPORTED_MODULE_0__data_event__["a" /* Event */](this.event.ref.getId(), this.event.ref.getName(), this.event.ref.getOrganization(), this.event.ref.getLocation(), this.event.ref.getRanking(), this.event.ref.getNumberBoats(), this.event.ref.getDate(), this.event.ref.getSubscribers(), this.event.ref.getPhasesList(), this.event.ref.getTimeManagement());
            this.eventService.update(this.event.ref);
            this.subscriberService.update(this.event.ref);
            this.boatService.create(this.event.ref);
            this.eventPanelShowHide();
        }
    };
    /**
     * \fn    testEventPanel(): boolean
     * \brief Test les champs du formulaire EventPanel et affiche les erreurs
     * \return testResult Retourne le resultat du test
     */
    UcOrganizeEvent.prototype.testEventPanel = function () {
        var testResult = true;
        if (!/^[A-Za-z0-9- ]{2,}[A-Za-z0-9-]*$/.test(this.event.ref.getName())) {
            testResult = false;
            alert('The event name contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-").');
        }
        if (!/^[A-Za-z0-9- ]{2,}[A-Za-z0-9-]*$/.test(this.event.ref.getOrganization())) {
            testResult = false;
            alert('The event organization name contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-").');
        }
        if (!/^[A-Za-z0-9- ]{2,}[A-Za-z0-9-]*$/.test(this.event.ref.getLocation())) {
            testResult = false;
            alert('The event location contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-").');
        }
        if (!/^[0-5]{1}$/.test(this.event.ref.getRanking().toString())) {
            testResult = false;
            alert('The ranking contains unauthorized number, please correct it with the allowed number ("0-5")');
        }
        if (!/^[1-9]{1,}[0-9]*$/.test(this.event.ref.getNumberBoats().toString())) {
            testResult = false;
            alert('The boats contains unauthorized number, please correct it with the allowed number');
        }
        if (!/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(this.event.ref.getDate())) {
            testResult = false;
            alert('The date contains unauthorized format, please correct it with the allowed format ("YYYY-MM-DD")');
        }
        return testResult;
    };
    /**
     * \fn    read(): void
     * \brief Initialise tous les paramètres, événements et équipages sauvegardés
     */
    UcOrganizeEvent.prototype.read = function () {
        this.settingsService.read(this.settings);
        this.eventService.read(this.events);
        this.crewService.read(this.crews);
    };
    /**
     * \fn    delete(): void
     * \brief Supprime l'événement selectionné
     */
    UcOrganizeEvent.prototype.delete = function () {
        var _this = this;
        var index = this.events.ref.findIndex(function (x) { return x.getId() == _this.event.ref.getId(); });
        this.eventService.delete(this.event.ref);
        this.subscriberService.delete(this.event.ref);
        this.events.ref.splice(index, 1);
        this.deletePanelHide();
    };
    /**
     * \fn    createCrewPanel(): void
     * \brief Affiche l'IHM crewPanel en mode création
     */
    UcOrganizeEvent.prototype.createEventPanel = function () {
        this.eventPanelShowHide();
        this.editMode.ref = false;
    };
    /**
     * \fn    editCrewPanel(): void
     * \brief Affiche l'IHM crewPanel en mode édition en récuperant l'événement à modifier
     * \param[in] event L'événement selectionné pour la modification
     */
    UcOrganizeEvent.prototype.editEventPanel = function (event) {
        this.eventPanelShowHide();
        this.event.ref = new __WEBPACK_IMPORTED_MODULE_0__data_event__["a" /* Event */](event.getId(), event.getName(), event.getOrganization(), event.getLocation(), event.getRanking(), event.getNumberBoats(), event.getDate(), event.getSubscribers().slice(0), event.getPhasesList(), event.getTimeManagement());
        this.subscriberService.read(this.event);
        this.editMode.ref = true;
    };
    /**
     * \fn    eventPanelShowHide(): void
     * \brief Affiche l'IHM crewPanel et vide les variables crewId et crewLetter
     */
    UcOrganizeEvent.prototype.eventPanelShowHide = function () {
        var date = new Date();
        this.event.ref = new __WEBPACK_IMPORTED_MODULE_0__data_event__["a" /* Event */](0, '', this.settings.ref.getOrganization(), this.settings.ref.getLocation(), 0, this.settings.ref.getAmountBoats(), date.yyyymmdd(), [], [], this.settings.ref.getTimeManagement());
        this.crewId.ref = 0;
        this.crewLetter.ref = '';
        this.eventPanelIhm.ref = this.eventPanelIhm.ref ? false : true;
        this.addSubscriberEvent(this.addSubscriberEvent, this.subscriberService, this.crewLetter, this.crewId, this.crews, this.event, this.eventPanelIhm);
    };
    /**
     * \fn    addSubscriberEvent(): void
     * \brief ajoute un participant à l'événement
     * \param[in] addSubscriberEvent fonction addSubscriberEvent
     * \param[in] subscriberService Persistance des participants
     * \param[in] crewLetter lettre de l'équipage
     * \param[in] crewId identifiant de l'équipage
     * \param[in] crews Liste des équipages
     * \param[in] event Liste des événements
     * \param[in] eventPanelIhm Etat de l'ihm de gestion des événements
     */
    UcOrganizeEvent.prototype.addSubscriberEvent = function (addSubscriberEvent, subscriberService, crewLetter, crewId, crews, event, eventPanelIhm) {
        if (crewLetter.ref != '' && crewId.ref != 0) {
            var index = crews.ref.findIndex(function (x) { return x.getId() == crewId.ref; });
            var subscribers = event.ref.getSubscribers().slice(0);
            subscribers.push(new __WEBPACK_IMPORTED_MODULE_1__data_subscriber__["a" /* Subscriber */](subscriberService.getNewID(), crews.ref[index].getName(), crews.ref[index].getCountry(), crews.ref[index].getIsaf(), crews.ref[index].getRanking(), crewLetter.ref));
            event.ref.setSubscribers(subscribers.slice(0));
            crewLetter.ref = '';
            crewId.ref = 0;
        }
        if (!eventPanelIhm.ref)
            setTimeout(addSubscriberEvent.bind(null, addSubscriberEvent, subscriberService, crewLetter, crewId, crews, event, eventPanelIhm), TIME_TO_WAIT_BUTTON);
    };
    /**
     * \fn    removeSubscriberEvent(): void
     * \brief Supprime le participant sélectionné
     * \param[in] subscriber participant sélectionné
     */
    UcOrganizeEvent.prototype.removeSubscriberEvent = function (subscriber) {
        var subscribers = this.event.ref.getSubscribers().slice(0);
        var index = subscribers.findIndex(function (x) { return x.getId() == subscriber.getId(); });
        subscribers.splice(index, 1);
        this.event.ref.setSubscribers(subscribers.slice(0));
    };
    /**
     * \fn    deletePanelShow(): void
     * \brief Affiche l'IHM deletePanel en récuperant l'événement à supprimer
     * \param[in] event événement selectionné pour la suppression
     */
    UcOrganizeEvent.prototype.deletePanelShow = function (event) {
        this.event.ref = new __WEBPACK_IMPORTED_MODULE_0__data_event__["a" /* Event */](event.getId(), event.getName(), event.getOrganization(), event.getLocation(), event.getRanking(), event.getNumberBoats(), event.getDate(), event.getSubscribers(), event.getPhasesList(), event.getTimeManagement());
        this.deleteEventPanelIhm.ref = true;
    };
    /**
     * \fn    deletePanelHide(): void
     * \brief Cache l'IHM deletePanel et vide la variable event
     */
    UcOrganizeEvent.prototype.deletePanelHide = function () {
        this.event.ref = new __WEBPACK_IMPORTED_MODULE_0__data_event__["a" /* Event */](0, '', '', '', 0, 1, '', [], [], false);
        this.deleteEventPanelIhm.ref = false;
    };
    /**
     * \fn    detailPanelShowHide(): void
     * \brief affiche et cache les détails de l'événement sélectionné
     */
    UcOrganizeEvent.prototype.detailPanelShowHide = function (event) {
        event.setHiddenContent(event.getHiddenContent() ? false : true);
    };
    UcOrganizeEvent.prototype.getLattersList = function () {
        var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var subscribersInEvent = this.event.ref.getSubscribers();
        for (var i = 0; i < subscribersInEvent.length; i++) {
            var index = letters.findIndex(function (x) { return x == subscribersInEvent[i].getLetter(); });
            letters.splice(index, 1);
        }
        return letters;
    };
    UcOrganizeEvent.prototype.getCrewsList = function () {
        var crewsList = this.crews.ref.slice(0);
        var subscribersInEvent = this.event.ref.getSubscribers();
        for (var i = 0; i < subscribersInEvent.length; i++) {
            var index = crewsList.findIndex(function (x) {
                return x.getName() == subscribersInEvent[i].getName() &&
                    x.getCountry() == subscribersInEvent[i].getCountry() &&
                    x.getIsaf() == subscribersInEvent[i].getIsaf() &&
                    x.getRanking() == subscribersInEvent[i].getRanking();
            });
            crewsList.splice(index, 1);
        }
        return crewsList;
    };
    return UcOrganizeEvent;
}());

//# sourceMappingURL=ucorganizeevent.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_phase__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcOrganizePhase; });


/**
 * \class UcOrganizePhase
 * \brief UcOrganiserPhase
 * \author Zarzitski
 * \version 1
 * \date 2017-04-13 21:34:00 +0100
 */
var UcOrganizePhase = (function () {
    /**
     * \fn     constructor();
     * \brief Constructeur qui initialise les attributs passés par référence et récupère les informations concernant les phases
     * \param phaseService La persistance des phases
     * \param events Liste des événements
     * \param event événement selectionné
     * \param phase phase sélectionné
     * \param phasePanelIhm booleen qui indique le comportement de l'IHM phase
     * \param editMode booleen qui indique si le mode édition est sélectionné ou non
     * \param deleteEventPanelIhm booleen qui indique si une suppression est demandée
     */
    function UcOrganizePhase(phaseService, events, event, phase, phasePanelIhm, editMode, deletePhasePanelIhm) {
        this.phaseService = phaseService;
        this.events = events;
        this.event = event;
        this.phase = phase;
        this.phasePanelIhm = phasePanelIhm;
        this.editMode = editMode;
        this.deletePhasePanelIhm = deletePhasePanelIhm;
        this.read(this.read, this.phaseService, this.events);
    }
    /**
     * \fn    create(): void
     * \brief Créer une phase
     */
    UcOrganizePhase.prototype.create = function () {
        var _this = this;
        if (this.testPhasePanel()) {
            var index = this.events.ref.findIndex(function (x) { return x.getId() == _this.event.ref.getId(); });
            var phases = this.event.ref.getPhasesList().slice(0);
            this.phase.ref.setId(this.phaseService.getNewID());
            phases.push(new __WEBPACK_IMPORTED_MODULE_1__data_phase__["a" /* Phase */](this.phase.ref.getId(), this.phase.ref.getName(), this.phase.ref.getRoundRobin(), this.phase.ref.getFlightsList()));
            this.events.ref[index].setPhasesList(phases.slice(0));
            this.phaseService.create(this.phase.ref);
            this.phaseService.setEventID(this.phase.ref, this.event.ref);
            this.phasePanelShowHide();
        }
    };
    /**
     * \fn    update(): void
     * \brief Met à jour la phase selectionnée
     */
    UcOrganizePhase.prototype.update = function () {
        var _this = this;
        if (this.testPhasePanel()) {
            var indexEvent = this.events.ref.findIndex(function (x) { return x.getId() == _this.event.ref.getId(); });
            var phases = this.event.ref.getPhasesList().slice(0);
            var indexPhases = phases.findIndex(function (x) { return x.getId() == _this.phase.ref.getId(); });
            phases[indexPhases] = new __WEBPACK_IMPORTED_MODULE_1__data_phase__["a" /* Phase */](this.phase.ref.getId(), this.phase.ref.getName(), this.phase.ref.getRoundRobin(), this.phase.ref.getFlightsList());
            this.events.ref[indexEvent].setPhasesList(phases.slice(0));
            this.phaseService.update(this.phase.ref);
            this.phasePanelShowHide();
        }
    };
    /**
     * \fn    testPhasePanel(): boolean
     * \brief Test les champs du formulaire testPhasePanel et affiche les erreurs
     * \return testResult Retourne le resultat du test
     */
    UcOrganizePhase.prototype.testPhasePanel = function () {
        var testResult = true;
        if (!/^[A-Za-z0-9-]{2,}[A-Za-z0-9- ]*$/.test(this.phase.ref.getName())) {
            alert('The phase name contains unauthorized characters, please correct it with the allowed characters ("A-Z", "a-z", "0-9", "-").');
            testResult = false;
        }
        return testResult;
    };
    /**
     * \fn    read(): void
     * \brief Initialise toutes les phases sauvegardés
     */
    UcOrganizePhase.prototype.read = function (read, phaseService, events) {
        if (events.ref == []) {
            setTimeout(read.bind(null, read, phaseService, events), TIME_TO_WAIT);
        }
        else {
            phaseService.read(events);
        }
    };
    /**
     * \fn    delete(): void
     * \brief Supprime la phase selectionnée
     */
    UcOrganizePhase.prototype.delete = function () {
        var _this = this;
        var indexEvent = this.events.ref.findIndex(function (x) { return x.getId() == _this.event.ref.getId(); });
        var phases = this.event.ref.getPhasesList().slice(0);
        var indexPhases = phases.findIndex(function (x) { return x.getId() == _this.phase.ref.getId(); });
        phases.splice(indexPhases, 1);
        this.events.ref[indexEvent].setPhasesList(phases.slice(0));
        this.phaseService.delete(this.phase.ref);
        this.deletePanelHide();
    };
    /**
     * \fn    createPhasePanel(): void
     * \brief Ajoute une phase
     */
    UcOrganizePhase.prototype.createPhasePanel = function (event) {
        this.phasePanelShowHide();
        this.event.ref = new __WEBPACK_IMPORTED_MODULE_0__data_event__["a" /* Event */](event.getId(), event.getName(), event.getOrganization(), event.getLocation(), event.getRanking(), event.getNumberBoats(), event.getDate(), event.getSubscribers(), event.getPhasesList(), event.getTimeManagement());
        this.editMode.ref = false;
    };
    /**
     * \fn    editPhasePanel(): void
     * \brief Modifie une phase
     * \param[in] phase phase selectionné pour la modification
     * \param[in] event événement dans lequel se trouve la phase sélectionnée
     */
    UcOrganizePhase.prototype.editPhasePanel = function (phase, event) {
        this.phasePanelShowHide();
        this.event.ref = new __WEBPACK_IMPORTED_MODULE_0__data_event__["a" /* Event */](event.getId(), event.getName(), event.getOrganization(), event.getLocation(), event.getRanking(), event.getNumberBoats(), event.getDate(), event.getSubscribers(), event.getPhasesList(), event.getTimeManagement());
        this.phase.ref = new __WEBPACK_IMPORTED_MODULE_1__data_phase__["a" /* Phase */](phase.getId(), phase.getName(), phase.getRoundRobin(), phase.getFlightsList());
        this.editMode.ref = true;
    };
    /**
     * \fn    phasePanelShowHide(): void
     * \brief Affiche et cache l'IHM phasePanel et vide la variable phase
     */
    UcOrganizePhase.prototype.phasePanelShowHide = function () {
        this.phase.ref = new __WEBPACK_IMPORTED_MODULE_1__data_phase__["a" /* Phase */](0, '', false, []);
        this.phasePanelIhm.ref = this.phasePanelIhm.ref ? false : true;
    };
    /**
     * \fn    deletePanelShow(): void
     * \brief Supprime une phase
     * \param[in] phase phase selectionné pour la suppression
     * \param[in] event événement dans lequel se trouve la phase selectionné pour la suppression
     */
    UcOrganizePhase.prototype.deletePanelShow = function (phase, event) {
        this.event.ref = new __WEBPACK_IMPORTED_MODULE_0__data_event__["a" /* Event */](event.getId(), event.getName(), event.getOrganization(), event.getLocation(), event.getRanking(), event.getNumberBoats(), event.getDate(), event.getSubscribers(), event.getPhasesList(), event.getTimeManagement());
        this.phase.ref = new __WEBPACK_IMPORTED_MODULE_1__data_phase__["a" /* Phase */](phase.getId(), phase.getName(), phase.getRoundRobin(), phase.getFlightsList());
        this.deletePhasePanelIhm.ref = true;
    };
    /**
     * \fn    deletePanelHide(): void"'('''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''')'
     * \brief Cache l'IHM deletePanel et vide la variable phase
     */
    UcOrganizePhase.prototype.deletePanelHide = function () {
        this.phase.ref = new __WEBPACK_IMPORTED_MODULE_1__data_phase__["a" /* Phase */](0, '', false, []);
        this.deletePhasePanelIhm.ref = false;
    };
    return UcOrganizePhase;
}());

//# sourceMappingURL=ucorganizephase.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_flight__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_crud__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file flight.service.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-17 14:24:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/



var FlightService = (function (_super) {
    __extends(FlightService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase
     */
    function FlightService() {
        var _this = _super.call(this, 'FlightService', '\
    CREATE TABLE IF NOT EXISTS \
    Flight ( id INTEGER PRIMARY KEY AUTOINCREMENT, phase INTEGER, flightNumber INTEGER, startDateTime TEXT, FOREIGN KEY(phase) REFERENCES Phase(id) )', 'Flight') || this;
        _this.divID = 'FlightService';
        return _this;
    }
    /**
     * \fn    readCurrentFlightNumber();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    FlightService.prototype.readCurrentFlightNumber = function (phase) {
        this.currentFlightNumber = { ref: 0 };
        var requestSQL = { request: '', attribute: [] };
        var phaseID = +phase.getId();
        if (phaseID > 0) {
            requestSQL.request = '\
      SELECT MAX(flightNumber) as currentFlightNumber \
      FROM Flight F, Phase P, Event E \
      WHERE F.phase = P.id  AND E.id = P.event AND \
      E.id = (SELECT event FROM Phase WHERE id = ' + phaseID + ')';
            if (!document.getElementById('CurrentFlightNumber'))
                document.getElementById("data").innerHTML += '<div id="CurrentFlightNumber" style="background-color: orange; margin: 10px;"></div>';
            this.readDB(requestSQL, this.currentFlightNumber, this.updateCurrentFlightNumber, 'CurrentFlightNumber');
        }
    };
    /**
     * \fn    updateCurrentFlightNumber();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    FlightService.prototype.updateCurrentFlightNumber = function (currentFlightNumber, divID) {
        currentFlightNumber.ref = JSON.parse(document.getElementById(divID).innerHTML)[0].currentFlightNumber;
        document.getElementById(divID).innerHTML = '';
    };
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    FlightService.prototype.create = function (flight) {
        this.writeDB([
            'INSERT INTO Flight(id, flightNumber, startDateTime) VALUES (?, ?, ?)',
            [flight.getId(), flight.getFlightNumber(), flight.getStartDateTime()]
        ]);
    };
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    FlightService.prototype.setPhaseID = function (flight, phase) {
        this.writeDB([
            'UPDATE Flight SET phase = ?, flightNumber = ? WHERE id = ?',
            [phase.getId(), flight.getFlightNumber(), flight.getId()]
        ]);
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    FlightService.prototype.read = function (phase) {
        var requestSQL = { request: '', attribute: [] };
        var phaseID = +phase.ref.getId();
        if (phaseID > 0) {
            requestSQL.request = 'SELECT * FROM Flight WHERE phase = ' + phaseID + ' ORDER BY id';
            this.readDB(requestSQL, phase, this.applyResult, this.divID);
        }
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    FlightService.prototype.applyResult = function (phase, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            var fligths = phase.ref.getFlightsList().slice(0);
            fligths.push(new __WEBPACK_IMPORTED_MODULE_1__class_data_flight__["a" /* Flight */](data[i].id, data[i].flightNumber, [], data[i].startDateTime));
            phase.ref.setFlightsList(fligths.slice(0));
        }
    };
    /**
     * \fn    update();
     * \brief Met à jour l'équipage
     * \param[in] crew L'équipage qui doit être mise à jour
     */
    FlightService.prototype.update = function (flight) {
        this.writeDB([
            'UPDATE Flight SET flightNumber = ?, startDateTime = ? WHERE id = ?',
            [flight.getFlightNumber(), flight.getStartDateTime(), flight.getId()]
        ]);
    };
    /**
     * \fn    delete();
     * \brief Supprime l'équipage
     * \param[in] crew L'équipage qui doit être supprimé
     */
    FlightService.prototype.delete = function (flight) {
        var flightID = +flight.getId();
        if (flightID > 0) {
            this.writeDB(['DELETE FROM Penalty \
     WHERE id in (\
       SELECT R.penalty FROM Racer R, Matchs M \
       WHERE R.matchs = M.id AND M.flight = ' + flightID + ')',
                []]);
            this.writeDB(['DELETE FROM Racer \
     WHERE matchs = (SELECT id FROM Matchs WHERE flight = ' + flightID + ')', []]);
            this.writeDB(['DELETE FROM Matchs \
     WHERE flight = ?', [flightID]]);
            this.writeDB(['DELETE FROM Flight \
     WHERE id = ?', [flightID]]);
        }
    };
    /**
     * \fn    getNewID();
     * \brief Supprime l'entité
     * \param[in] entity L'entité qui doit être supprimé
     */
    FlightService.prototype.getNewFlightNumber = function () {
        this.currentFlightNumber.ref = this.currentFlightNumber.ref + 1;
        return this.currentFlightNumber.ref;
    };
    /**
     * \fn    getNewID();
     * \brief Supprime l'entité
     * \param[in] entity L'entité qui doit être supprimé
     */
    FlightService.prototype.getLastFlightNumber = function () {
        return this.currentFlightNumber.ref;
    };
    return FlightService;
}(__WEBPACK_IMPORTED_MODULE_2__class_crud__["a" /* CRUD */]));
FlightService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FlightService);

//# sourceMappingURL=flight.service.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_match__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_data_racer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_data_boat__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_data_penalty__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_crud__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file match.service.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-23 14:40:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/






var MatchService = (function (_super) {
    __extends(MatchService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase
     */
    function MatchService() {
        var _this = _super.call(this, 'MatchService', '\
    CREATE TABLE IF NOT EXISTS \
    Matchs ( id INTEGER PRIMARY KEY AUTOINCREMENT, flight INTEGER, locked INTEGER, finishDateTime INTEGER,\
     FOREIGN KEY(flight) REFERENCES Flight(id) )', 'Matchs') || this;
        _this.divID = 'MatchService';
        return _this;
    }
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    MatchService.prototype.create = function (match) {
        this.writeDB([
            'INSERT INTO Matchs(id, locked, finishDateTime) VALUES (?, ?, ?)',
            [match.getId(), match.getLocked(), match.getFinishDateTime()]
        ]);
    };
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    MatchService.prototype.setEventID = function (match, flight) {
        this.writeDB([
            'UPDATE Matchs SET flight = ? WHERE id = ?',
            [flight.getId(), match.getId()]
        ]);
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    MatchService.prototype.read = function (flight) {
        var requestSQL = { request: '', attribute: [] };
        var flightID = +flight.ref.getId();
        if (flightID > 0) {
            requestSQL.request = '\
      SELECT * FROM Matchs \
      WHERE flight = ' + flightID + ' \
      ORDER BY id';
            this.readDB(requestSQL, flight, this.applyResult, this.divID);
        }
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    MatchService.prototype.applyResult = function (flight, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        var matchs = [];
        var racer = new __WEBPACK_IMPORTED_MODULE_2__class_data_racer__["a" /* Racer */](0, '', '', '', 0, '', 0, { ref: new __WEBPACK_IMPORTED_MODULE_3__class_data_boat__["a" /* Boat */](0, 0) }, new __WEBPACK_IMPORTED_MODULE_4__class_data_penalty__["a" /* Penalty */](0, 0, ''));
        for (var i = 0; i < data.length; i++) {
            matchs.push(new __WEBPACK_IMPORTED_MODULE_1__class_data_match__["a" /* Match */](data[i].id, racer, racer, data[i].locked, data[i].finishDateTime));
        }
        flight.ref.setMatchsList(matchs.slice(0));
    };
    /**
     * \fn    update();
     * \brief Met à jour l'équipage
     * \param[in] crew L'équipage qui doit être mise à jour
     */
    MatchService.prototype.update = function (match) {
        this.writeDB([
            'UPDATE Matchs SET locked = ?, finishDateTime = ? WHERE id = ?',
            [match.getLocked(), match.getFinishDateTime(), match.getId()]
        ]);
    };
    /**
     * \fn    delete();
     * \brief Supprime l'équipage
     * \param[in] crew L'équipage qui doit être supprimé
     */
    MatchService.prototype.delete = function (match) {
        var matchID = +match.getId();
        if (matchID > 0) {
            this.writeDB(['DELETE FROM Penalty \
      WHERE id in (SELECT penalty FROM Racer WHERE matchs = ' + matchID + ')', []]);
            this.writeDB(['DELETE FROM Racer \
      WHERE matchs = ?', [matchID]]);
            this.writeDB(['DELETE FROM Matchs WHERE id = ?', [matchID]]);
        }
    };
    return MatchService;
}(__WEBPACK_IMPORTED_MODULE_5__class_crud__["a" /* CRUD */]));
MatchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MatchService);

//# sourceMappingURL=match.service.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_penalty__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_crud__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PenaltyService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file penalty.service.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-23 15:51:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/



var PenaltyService = (function (_super) {
    __extends(PenaltyService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase
     */
    function PenaltyService() {
        var _this = _super.call(this, 'PenaltyService', '\
    CREATE TABLE IF NOT EXISTS \
    Penalty ( id INTEGER PRIMARY KEY AUTOINCREMENT, points REAL,  detail TEXT )', 'Penalty') || this;
        _this.divID = 'PenaltyService';
        return _this;
    }
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    PenaltyService.prototype.create = function (racer) {
        this.writeDB([
            'INSERT INTO Penalty(id, points, detail) VALUES (?, ?, ?)',
            [racer.getPenalty().getId(), racer.getPenalty().getPoints(), racer.getPenalty().getDetail()]
        ]);
        this.writeDB([
            'UPDATE Racer SET penalty = ? WHERE id = ?',
            [racer.getPenalty().getId(), racer.getId()]
        ]);
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    PenaltyService.prototype.read = function (flight) {
        var requestSQL = { request: '', attribute: [] };
        var flightID = +flight.ref.getId();
        if (flightID > 0) {
            requestSQL.request = '\
      SELECT P.*, M.id as idMatch, R.color \
      FROM Penalty P, Racer R, Matchs M \
      WHERE R.penalty = P.id AND R.matchs = M.id AND M.flight = ' + flightID;
            this.readDB(requestSQL, flight, this.applyResult, this.divID);
        }
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    PenaltyService.prototype.applyResult = function (flight, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            var index = flight.ref.getMatchsList().findIndex(function (x) { return x.getId() == data[i].idMatch; });
            switch (data[i].color) {
                case "b":
                    flight.ref.getMatchsList()[index].getBlue().setPenalty(new __WEBPACK_IMPORTED_MODULE_1__class_data_penalty__["a" /* Penalty */](data[i].id, data[i].points, data[i].detail));
                    break;
                case "y":
                    flight.ref.getMatchsList()[index].getYellow().setPenalty(new __WEBPACK_IMPORTED_MODULE_1__class_data_penalty__["a" /* Penalty */](data[i].id, data[i].points, data[i].detail));
                    break;
            }
        }
    };
    /**
     * \fn    update();
     * \brief Met à jour l'équipage
     * \param[in] crew L'équipage qui doit être mise à jour
     */
    PenaltyService.prototype.update = function (racer) {
        this.delete(racer.getPenalty());
        this.create(racer);
    };
    /**
     * \fn    delete();
     * \brief Supprime l'équipage
     * \param[in] crew L'équipage qui doit être supprimé
     */
    PenaltyService.prototype.delete = function (penalty) {
        this.writeDB([
            'DELETE FROM Penalty WHERE id = ?',
            [penalty.getId()]
        ]);
    };
    return PenaltyService;
}(__WEBPACK_IMPORTED_MODULE_2__class_crud__["a" /* CRUD */]));
PenaltyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PenaltyService);

//# sourceMappingURL=penalty.service.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_data_racer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_data_boat__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_data_penalty__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_crud__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacerService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file racer.service.ts
* $Author: Zarzitski$
* $Rev: 1 $
* $Date: 2017-04-23 12:05:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/





var RacerService = (function (_super) {
    __extends(RacerService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase
     */
    function RacerService() {
        var _this = _super.call(this, 'RacerService', 'CREATE TABLE IF NOT EXISTS\
     Racer ( id INTEGER PRIMARY KEY AUTOINCREMENT, matchs INTEGER, color TEXT, points REAL,\
     boat INTEGER, penalty INTEGER, letter TEXT, name TEXT, country TEXT, isaf TEXT, ranking TEXT, \
     FOREIGN KEY(matchs) REFERENCES Matchs(id), FOREIGN KEY(penalty) REFERENCES Penalty(id), \
     FOREIGN KEY(boat) REFERENCES Boat(id))', 'Racer') || this;
        _this.divID = 'RacerService';
        return _this;
    }
    /**
     * \fn    create(): void
     * \brief Créer un équipage
     * \param[in] crew L'équipage qui doit être créé
     */
    RacerService.prototype.create = function (match) {
        this.writeDB([
            'INSERT INTO Racer(id, matchs, color, points, boat, penalty, letter, name, country, isaf, ranking) \
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [match.getBlue().getId(), match.getId(), 'b', match.getBlue().getPoints(),
                match.getBlue().getBoat().getId(), match.getBlue().getPenalty().getId(),
                match.getBlue().getLetter(), match.getBlue().getName(), match.getBlue().getCountry(),
                match.getBlue().getIsaf(), match.getBlue().getRanking()]
        ]);
        this.writeDB([
            'INSERT INTO Racer(id, matchs, color, points, boat, penalty, letter, name, country, isaf, ranking) \
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [match.getYellow().getId(), match.getId(), 'y', match.getYellow().getPoints(),
                match.getYellow().getBoat().getId(), match.getYellow().getPenalty().getId(),
                match.getYellow().getLetter(), match.getYellow().getName(), match.getYellow().getCountry(),
                match.getYellow().getIsaf(), match.getYellow().getRanking()]
        ]);
    };
    /**
     * \fn    read();
     * \brief Obtenir tous les équipages
     * \param crews La liste des équipages
     */
    RacerService.prototype.read = function (flight) {
        var requestSQL = { request: '', attribute: [] };
        var flightID = +flight.ref.getId();
        if (flightID > 0) {
            requestSQL.request = '\
      SELECT R.* \
      FROM Racer R, Matchs M \
      WHERE R.matchs = M.id AND M.flight = ' + flightID + ' \
      ORDER BY R.id';
            this.readDB(requestSQL, flight, this.applyResult, this.divID);
        }
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour l'équipage
     * \param crews La liste des équipages
     * \param dataID Le nom du service
     */
    RacerService.prototype.applyResult = function (flight, divID) {
        var data = JSON.parse(document.getElementById(divID).innerHTML);
        document.getElementById(divID).innerHTML = '';
        var matchs = flight.ref.getMatchsList();
        for (var i = 0; i < data.length; i++) {
            var index = matchs.findIndex(function (x) { return x.getId() == data[i].matchs; });
            switch (data[i].color) {
                case "b":
                    matchs[index].setBlue(new __WEBPACK_IMPORTED_MODULE_1__class_data_racer__["a" /* Racer */](data[i].id, data[i].name, data[i].country, data[i].isaf, data[i].ranking, data[i].letter, data[i].points, { ref: new __WEBPACK_IMPORTED_MODULE_2__class_data_boat__["a" /* Boat */](0, 0) }, new __WEBPACK_IMPORTED_MODULE_3__class_data_penalty__["a" /* Penalty */](0, 0, '')));
                    break;
                case "y":
                    matchs[index].setYellow(new __WEBPACK_IMPORTED_MODULE_1__class_data_racer__["a" /* Racer */](data[i].id, data[i].name, data[i].country, data[i].isaf, data[i].ranking, data[i].letter, data[i].points, { ref: new __WEBPACK_IMPORTED_MODULE_2__class_data_boat__["a" /* Boat */](0, 0) }, new __WEBPACK_IMPORTED_MODULE_3__class_data_penalty__["a" /* Penalty */](0, 0, '')));
                    break;
            }
        }
        flight.ref.setMatchsList(matchs.slice(0));
    };
    /**
     * \fn    update();
     * \brief Met à jour l'équipage
     * \param[in] crew L'équipage qui doit être mise à jour
     */
    RacerService.prototype.update = function (match) {
        this.delete(match);
        this.create(match);
    };
    /**
     * \fn    delete();
     * \brief Supprime l'équipage
     * \param[in] crew L'équipage qui doit être supprimé
     */
    RacerService.prototype.delete = function (match) {
        var matchID = +match.getId();
        if (matchID > 0) {
            this.writeDB(['DELETE FROM Penalty \
      WHERE id = (SELECT penalty FROM Racer WHERE matchs = ' + matchID + ')', []]);
            this.writeDB(['DELETE FROM Racer \
      WHERE matchs = ?', [matchID]]);
        }
    };
    return RacerService;
}(__WEBPACK_IMPORTED_MODULE_4__class_crud__["a" /* CRUD */]));
RacerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RacerService);

//# sourceMappingURL=racer.service.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_data_resultBoat__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultBoatService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file crew.service.ts
* $Author: Sixou$
* $Rev: 2 $
* $Date: 2017-04-22 00:34:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
/// <reference path="../class/requestSQL.ts" />



var ResultBoatService = (function (_super) {
    __extends(ResultBoatService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase et ajoute à la table les parametres par defaut si ils n'existent pas
     */
    function ResultBoatService() {
        var _this = _super.call(this, 'ResultBoatService', 'CREATE TABLE IF NOT EXISTS Crew (id INTEGER, name TEXT, country TEXT, isaf TEXT, ranking INTEGER, PRIMARY KEY (id))') || this;
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Event ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, organization TEXT, location TEXT, ranking INTEGER, numberBoats INTEGER, date TEXT, timeManagement INTEGER)', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Boat ( id INTEGER PRIMARY KEY AUTOINCREMENT, boatNumber INTEGER)', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Flight ( id INTEGER PRIMARY KEY AUTOINCREMENT, phase INTEGER, flightNumber INTEGER, startDateTime TEXT, FOREIGN KEY(phase) REFERENCES Phase(id) )', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Matchs ( id INTEGER PRIMARY KEY AUTOINCREMENT, flight INTEGER, locked INTEGER, finishDateTime INTEGER, FOREIGN KEY(flight) REFERENCES Flight(id) )', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Phase ( id INTEGER PRIMARY KEY AUTOINCREMENT, event INTEGER, name TEXT, roundRobin INTEGER, FOREIGN KEY(event) REFERENCES Event(id))', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Penalty ( id INTEGER PRIMARY KEY AUTOINCREMENT, points REAL,  detail TEXT )', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Racer ( id INTEGER PRIMARY KEY AUTOINCREMENT, matchs INTEGER, color TEXT, points REAL, boat INTEGER, penalty INTEGER, letter TEXT, name TEXT, country TEXT, isaf TEXT, ranking TEXT, FOREIGN KEY(matchs) REFERENCES Matchs(id), FOREIGN KEY(penalty) REFERENCES Penalty(id), FOREIGN KEY(boat) REFERENCES Boat(id))', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Subscriber ( id INTEGER PRIMARY KEY AUTOINCREMENT, letter TEXT, event INTEGER, name TEXT, country TEXT, isaf TEXT, ranking TEXT, FOREIGN KEY(event) REFERENCES Event(id) )', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Boat ( id INTEGER PRIMARY KEY AUTOINCREMENT, boatNumber INTEGER)', []]);
        _this.writeDB(['\
    CREATE VIEW IF NOT EXISTS \
    Results as SELECT distinct P.id idPhase, M.id idMatchs, B.boatNumber boat, R.points, S.letter, S.name \
    FROM Event E, Phase P, Flight F, Subscriber S, Racer r, Matchs M, Boat B \
    WHERE P.event = E.id AND F.phase = P.id AND M.flight = F.id AND R.matchs = M.id AND R.boat = B.id AND S.event = E.id AND S.letter = R.letter \
    GROUP BY R.id, S.id \
    ', []]);
        _this.divID = 'ResultBoatService';
        return _this;
    }
    /**
     * \fn    read();
     * \brief Obtenir la configuration
     * \param settings La configuration
     */
    ResultBoatService.prototype.read = function (resultBoat, phase) {
        var requestSQL = { request: '', attribute: [] };
        requestSQL.request = '\
    SELECT boat, sum(points) tots, sum(points)*100/count(Boat) percentWin \
    FROM Results \
    WHERE idPhase = ' + phase.getId() + ' \
    GROUP BY boat ORDER BY tots DESC';
        this.readDB(requestSQL, resultBoat, this.applyResult, this.divID);
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour la configuration
     * \param settings La configuration
     * \param dataID Le nom du service
     */
    ResultBoatService.prototype.applyResult = function (resultBoatList, dataID) {
        var data = JSON.parse(document.getElementById(dataID).innerHTML);
        document.getElementById(dataID).innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            resultBoatList.ref[i] = new __WEBPACK_IMPORTED_MODULE_2__class_data_resultBoat__["a" /* ResultBoat */](data[i].tots, data[i].percentWin, data[i].boat);
        }
    };
    return ResultBoatService;
}(__WEBPACK_IMPORTED_MODULE_1__class_database__["a" /* DataBase */]));
ResultBoatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    /**
     * \class ResultBoatService
     * \brief Cette classe s'occupe de la persistance des équipages
     * \author Sixou
     * \version 2
     * \date 2017-04-11 23:41:00 +0100
     */
    ,
    __metadata("design:paramtypes", [])
], ResultBoatService);

//# sourceMappingURL=result-boat.service.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_data_resultSubscriber__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultSubscriberService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* \file crew.service.ts
* $Author: Sixou$
* $Rev: 2 $
* $Date: 2017-04-22 00:34:00 +0100 $

\brief Projet : GEMARA - SGER
*******************************************************/
/// <reference path="../class/requestSQL.ts" />



var ResultSubscriberService = (function (_super) {
    __extends(ResultSubscriberService, _super);
    /**
     * \fn     constructor();
     * \brief Constructeur qui passe la requête de la table SQL au constructeur de la classe DataBase et ajoute à la table les parametres par defaut si ils n'existent pas
     */
    function ResultSubscriberService() {
        var _this = _super.call(this, 'ResultBoatService', 'CREATE TABLE IF NOT EXISTS Crew (id INTEGER, name TEXT, country TEXT, isaf TEXT, ranking INTEGER, PRIMARY KEY (id))') || this;
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Event ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, organization TEXT, location TEXT, ranking INTEGER, numberBoats INTEGER, date TEXT, timeManagement INTEGER)', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Boat ( id INTEGER PRIMARY KEY AUTOINCREMENT, boatNumber INTEGER)', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Flight ( id INTEGER PRIMARY KEY AUTOINCREMENT, phase INTEGER, flightNumber INTEGER, startDateTime TEXT, FOREIGN KEY(phase) REFERENCES Phase(id) )', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Matchs ( id INTEGER PRIMARY KEY AUTOINCREMENT, flight INTEGER, locked INTEGER, finishDateTime INTEGER, FOREIGN KEY(flight) REFERENCES Flight(id) )', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Phase ( id INTEGER PRIMARY KEY AUTOINCREMENT, event INTEGER, name TEXT, roundRobin INTEGER, FOREIGN KEY(event) REFERENCES Event(id))', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Penalty ( id INTEGER PRIMARY KEY AUTOINCREMENT, points REAL,  detail TEXT )', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Racer ( id INTEGER PRIMARY KEY AUTOINCREMENT, matchs INTEGER, color TEXT, points REAL, boat INTEGER, penalty INTEGER, letter TEXT, name TEXT, country TEXT, isaf TEXT, ranking TEXT, FOREIGN KEY(matchs) REFERENCES Matchs(id), FOREIGN KEY(penalty) REFERENCES Penalty(id), FOREIGN KEY(boat) REFERENCES Boat(id))', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Subscriber ( id INTEGER PRIMARY KEY AUTOINCREMENT, letter TEXT, event INTEGER, name TEXT, country TEXT, isaf TEXT, ranking TEXT, FOREIGN KEY(event) REFERENCES Event(id) )', []]);
        _this.writeDB(['CREATE TABLE IF NOT EXISTS Boat ( id INTEGER PRIMARY KEY AUTOINCREMENT, boatNumber INTEGER)', []]);
        _this.writeDB(['\
    CREATE VIEW IF NOT EXISTS \
    Results as SELECT distinct P.id idPhase, M.id idMatchs, B.boatNumber boat, R.points, S.letter, S.name \
    FROM Event E, Phase P, Flight F, Subscriber S, Racer r, Matchs M, Boat B \
    WHERE P.event = E.id AND F.phase = P.id AND M.flight = F.id AND R.matchs = M.id AND R.boat = B.id AND S.event = E.id AND S.letter = R.letter \
    GROUP BY R.id, S.id \
    ', []]);
        _this.divID = 'ResultSubscriberService';
        return _this;
    }
    /**
     * \fn    read();
     * \brief Obtenir la configuration
     * \param settings La configuration
     */
    ResultSubscriberService.prototype.read = function (resultSubscriber, phase) {
        var requestSQL = { request: '', attribute: [] };
        requestSQL.request = '\
     SELECT idMatchs, name, points \
     FROM Results \
     WHERE idPhase = 2;' + phase.getId() + '';
        this.readDB(requestSQL, resultSubscriber, this.applyResult, this.divID);
    };
    /**
     * \fn    applyResult();
     * \brief Recuperation de la donnée dans la div et met à jour la configuration
     * \param settings La configuration
     * \param dataID Le nom du service
     */
    ResultSubscriberService.prototype.applyResult = function (resultSubscriberList, dataID) {
        var data = JSON.parse(document.getElementById(dataID).innerHTML);
        alert(document.getElementById(dataID).innerHTML);
        document.getElementById(dataID).innerHTML = '';
        for (var i; i < data.length; i++)
            resultSubscriberList.ref[i] = new __WEBPACK_IMPORTED_MODULE_2__class_data_resultSubscriber__["a" /* ResultSubscriber */](data[i].id, data[i].winTotSub, data[i].winPercentSub, data[i].idSub);
    };
    return ResultSubscriberService;
}(__WEBPACK_IMPORTED_MODULE_1__class_database__["a" /* DataBase */]));
ResultSubscriberService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    /**
     * \class ResultSubscriberService
     * \brief Cette classe s'occupe de la persistance des équipages
     * \author Sixou
     * \version 2
     * \date 2017-04-11 23:41:00 +0100
     */
    ,
    __metadata("design:paramtypes", [])
], ResultSubscriberService);

//# sourceMappingURL=result-subscriber.service.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    "output-path": "/home/xela/workspace/GEMARA/AppSGER/www"
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".w3-overlay {\n\tdisplay : block;\n}\n\n.hide\n{\n    display: none !important;\n}\n\ntable tbody td {\n\tword-break: break-all;\n\tborder: 1px solid grey;\n}\n\n.matchButton:hover{\n\tbackground-color: grey;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".w3-overlay {\n\tdisplay : block;\n}\n\n.hide\n{\n    display: none !important;\n}\n\n.editMenu\n{\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n\na{\n\ttext-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".w3-overlay {\n\tdisplay : block;\n}\n\n.hide\n{\n    display: none !important;\n}\n\n.editMenu\n{\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n\na{\n\ttext-decoration: none;\n}\n\n.stripe-3 {\n  background: -webkit-repeating-linear-gradient(\n    45deg,\n    rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0.2) 10px,\n    rgba(0, 0, 0, 0.3) 10px,\n    rgba(0, 0, 0, 0.3) 20px\n  );\n  background: repeating-linear-gradient(\n    45deg,\n    rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0.2) 10px,\n    rgba(0, 0, 0, 0.3) 10px,\n    rgba(0, 0, 0, 0.3) 20px\n  );\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".w3-overlay {\n\tdisplay : block;\n}\n\n.hide\n{\n    display: none !important;\n}\n\n.editMenu\n{\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n\na{\n\ttext-decoration: none;\n}\n\ntextarea{\n\twidth: 100%;\n}\n\n.stripe-3 {\n  background: -webkit-repeating-linear-gradient(\n    45deg,\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 0) 10px,\n    rgba(255, 0, 0, 1) 10px,\n    rgba(255, 0, 0, 1) 20px\n  );\n  background: repeating-linear-gradient(\n    45deg,\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 0) 10px,\n    rgba(255, 0, 0, 1) 10px,\n    rgba(255, 0, 0, 1) 20px\n  );\n}\n\ntable button, table a{\n\theight: 44px;\n\twidth: 100%;\n\tdisplay: block;\n\tbackground-size: auto 80%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\ntable a{\n\theight: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 199 */,
/* 200 */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"sidenav\" class=\"w3-sidenav w3-animate-left w3-padding w3-large globalColor\" style=\"z-index:5\">\n\t\t<img class=\"w3-margin-bottom\" [src]=\"'assets/pictures/icon.png'\" style=\"width: 100%;\" />\n\t\t<a routerLink=\"/home\" routerLinkActive=\"active\"  class=\"w3-margin-top\" (click)=\"pushButtonNav('home')\">Home</a>\n\t\t<a routerLink=\"/events-list\" routerLinkActive=\"active\" (click)=\"pushButtonNav('events-list')\">Events List</a>\n\t\t<a routerLink=\"/crews-list\" routerLinkActive=\"active\" (click)=\"pushButtonNav('crews-list')\">Crews List</a>\n\t\t<a routerLink=\"/guide\" routerLinkActive=\"active\" (click)=\"pushButtonNav('guide')\">Guide</a>\n\t\t<a routerLink=\"/settings\" routerLinkActive=\"active\" (click)=\"pushButtonNav('settings')\">Settings</a>\n\t\t<a routerLink=\"/about\" routerLinkActive=\"active\" (click)=\"pushButtonNav('about')\">About</a>\n</nav>\n\n<div (click)=\"sidenavShowHide()\" *ngIf=\"sidenav\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n\n<nav class=\"w3-container globalColor\">\n\t<div class=\"w3-row w3-quarter globalColor\">\n\t\t<div (click)=\"sidenavShowHide()\" class=\"w3-container w3-col w3-opennav w3-xlarge\" style=\"width:auto;\" >&#8801;</div>\n\t\t<div class=\"w3-container w3-rest w3-medium\" ><input *ngIf=\"searchBar\" [(ngModel)]=\"searchBarContent\" type=\"text\" class=\"w3-input\" style=\"width:auto;\" placeholder=\"Search..\" /></div>\n\t\t<div id=\"searchBar\" class=\"hide\" >{{searchBarContent}}</div>\n\t</div>\n\t<div class=\"w3-threequarter w3-medium\">\n\t\t<ul class=\"w3-navbar\" >\n\t\t\t<li *ngFor=\"let index of navMenu.ref\">\n\t\t\t\t<a [routerLink]=\"[index.link]\" >{{index.title}}</a></li>\n\t\t</ul>\n\t</div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<nav id=\"crewPanel\" [ngClass]=\"{ 'hide': crewPanelIhm.ref }\" class=\"w3-margin w3-animate-left w3-padding globalColor\" style=\"z-index:5\">\n\t<h2>Crew Edit</h2>\n\t<label class=\"w3-label w3-text-light-gray\">Name</label>\n\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"crew.ref.name\" />\n\t<label class=\"w3-label w3-text-light-gray\">Country</label>\n\t<select class=\"w3-input\" [(ngModel)]=\"crew.ref.country\">\n\t\t<option value=\"AF\">Afghanistan</option>\n\t\t<option value=\"AX\">Åland Islands</option>\n\t\t<option value=\"AL\">Albania</option>\n\t\t<option value=\"DZ\">Algeria</option>\n\t\t<option value=\"AS\">American Samoa</option>\n\t\t<option value=\"AD\">Andorra</option>\n\t\t<option value=\"AO\">Angola</option>\n\t\t<option value=\"AI\">Anguilla</option>\n\t\t<option value=\"AQ\">Antarctica</option>\n\t\t<option value=\"AG\">Antigua and Barbuda</option>\n\t\t<option value=\"AR\">Argentina</option>\n\t\t<option value=\"AM\">Armenia</option>\n\t\t<option value=\"AW\">Aruba</option>\n\t\t<option value=\"AU\">Australia</option>\n\t\t<option value=\"AT\">Austria</option>\n\t\t<option value=\"AZ\">Azerbaijan</option>\n\t\t<option value=\"BS\">Bahamas</option>\n\t\t<option value=\"BH\">Bahrain</option>\n\t\t<option value=\"BD\">Bangladesh</option>\n\t\t<option value=\"BB\">Barbados</option>\n\t\t<option value=\"BY\">Belarus</option>\n\t\t<option value=\"BE\">Belgium</option>\n\t\t<option value=\"BZ\">Belize</option>\n\t\t<option value=\"BJ\">Benin</option>\n\t\t<option value=\"BM\">Bermuda</option>\n\t\t<option value=\"BT\">Bhutan</option>\n\t\t<option value=\"BO\">Bolivia, Plurinational State of</option>\n\t\t<option value=\"BQ\">Bonaire, Sint Eustatius and Saba</option>\n\t\t<option value=\"BA\">Bosnia and Herzegovina</option>\n\t\t<option value=\"BW\">Botswana</option>\n\t\t<option value=\"BV\">Bouvet Island</option>\n\t\t<option value=\"BR\">Brazil</option>\n\t\t<option value=\"IO\">British Indian Ocean Territory</option>\n\t\t<option value=\"BN\">Brunei Darussalam</option>\n\t\t<option value=\"BG\">Bulgaria</option>\n\t\t<option value=\"BF\">Burkina Faso</option>\n\t\t<option value=\"BI\">Burundi</option>\n\t\t<option value=\"KH\">Cambodia</option>\n\t\t<option value=\"CM\">Cameroon</option>\n\t\t<option value=\"CA\">Canada</option>\n\t\t<option value=\"CV\">Cape Verde</option>\n\t\t<option value=\"KY\">Cayman Islands</option>\n\t\t<option value=\"CF\">Central African Republic</option>\n\t\t<option value=\"TD\">Chad</option>\n\t\t<option value=\"CL\">Chile</option>\n\t\t<option value=\"CN\">China</option>\n\t\t<option value=\"CX\">Christmas Island</option>\n\t\t<option value=\"CC\">Cocos (Keeling) Islands</option>\n\t\t<option value=\"CO\">Colombia</option>\n\t\t<option value=\"KM\">Comoros</option>\n\t\t<option value=\"CG\">Congo</option>\n\t\t<option value=\"CD\">Congo, the Democratic Republic of the</option>\n\t\t<option value=\"CK\">Cook Islands</option>\n\t\t<option value=\"CR\">Costa Rica</option>\n\t\t<option value=\"CI\">Côte d'Ivoire</option>\n\t\t<option value=\"HR\">Croatia</option>\n\t\t<option value=\"CU\">Cuba</option>\n\t\t<option value=\"CW\">Curaçao</option>\n\t\t<option value=\"CY\">Cyprus</option>\n\t\t<option value=\"CZ\">Czech Republic</option>\n\t\t<option value=\"DK\">Denmark</option>\n\t\t<option value=\"DJ\">Djibouti</option>\n\t\t<option value=\"DM\">Dominica</option>\n\t\t<option value=\"DO\">Dominican Republic</option>\n\t\t<option value=\"EC\">Ecuador</option>\n\t\t<option value=\"EG\">Egypt</option>\n\t\t<option value=\"SV\">El Salvador</option>\n\t\t<option value=\"GQ\">Equatorial Guinea</option>\n\t\t<option value=\"ER\">Eritrea</option>\n\t\t<option value=\"EE\">Estonia</option>\n\t\t<option value=\"ET\">Ethiopia</option>\n\t\t<option value=\"FK\">Falkland Islands (Malvinas)</option>\n\t\t<option value=\"FO\">Faroe Islands</option>\n\t\t<option value=\"FJ\">Fiji</option>\n\t\t<option value=\"FI\">Finland</option>\n\t\t<option value=\"FR\">France</option>\n\t\t<option value=\"GF\">French Guiana</option>\n\t\t<option value=\"PF\">French Polynesia</option>\n\t\t<option value=\"TF\">French Southern Territories</option>\n\t\t<option value=\"GA\">Gabon</option>\n\t\t<option value=\"GM\">Gambia</option>\n\t\t<option value=\"GE\">Georgia</option>\n\t\t<option value=\"DE\">Germany</option>\n\t\t<option value=\"GH\">Ghana</option>\n\t\t<option value=\"GI\">Gibraltar</option>\n\t\t<option value=\"GR\">Greece</option>\n\t\t<option value=\"GL\">Greenland</option>\n\t\t<option value=\"GD\">Grenada</option>\n\t\t<option value=\"GP\">Guadeloupe</option>\n\t\t<option value=\"GU\">Guam</option>\n\t\t<option value=\"GT\">Guatemala</option>\n\t\t<option value=\"GG\">Guernsey</option>\n\t\t<option value=\"GN\">Guinea</option>\n\t\t<option value=\"GW\">Guinea-Bissau</option>\n\t\t<option value=\"GY\">Guyana</option>\n\t\t<option value=\"HT\">Haiti</option>\n\t\t<option value=\"HM\">Heard Island and McDonald Islands</option>\n\t\t<option value=\"VA\">Holy See (Vatican City State)</option>\n\t\t<option value=\"HN\">Honduras</option>\n\t\t<option value=\"HK\">Hong Kong</option>\n\t\t<option value=\"HU\">Hungary</option>\n\t\t<option value=\"IS\">Iceland</option>\n\t\t<option value=\"IN\">India</option>\n\t\t<option value=\"ID\">Indonesia</option>\n\t\t<option value=\"IR\">Iran, Islamic Republic of</option>\n\t\t<option value=\"IQ\">Iraq</option>\n\t\t<option value=\"IE\">Ireland</option>\n\t\t<option value=\"IM\">Isle of Man</option>\n\t\t<option value=\"IL\">Israel</option>\n\t\t<option value=\"IT\">Italy</option>\n\t\t<option value=\"JM\">Jamaica</option>\n\t\t<option value=\"JP\">Japan</option>\n\t\t<option value=\"JE\">Jersey</option>\n\t\t<option value=\"JO\">Jordan</option>\n\t\t<option value=\"KZ\">Kazakhstan</option>\n\t\t<option value=\"KE\">Kenya</option>\n\t\t<option value=\"KI\">Kiribati</option>\n\t\t<option value=\"KP\">Korea, Democratic People's Republic of</option>\n\t\t<option value=\"KR\">Korea, Republic of</option>\n\t\t<option value=\"KW\">Kuwait</option>\n\t\t<option value=\"KG\">Kyrgyzstan</option>\n\t\t<option value=\"LA\">Lao People's Democratic Republic</option>\n\t\t<option value=\"LV\">Latvia</option>\n\t\t<option value=\"LB\">Lebanon</option>\n\t\t<option value=\"LS\">Lesotho</option>\n\t\t<option value=\"LR\">Liberia</option>\n\t\t<option value=\"LY\">Libya</option>\n\t\t<option value=\"LI\">Liechtenstein</option>\n\t\t<option value=\"LT\">Lithuania</option>\n\t\t<option value=\"LU\">Luxembourg</option>\n\t\t<option value=\"MO\">Macao</option>\n\t\t<option value=\"MK\">Macedonia, the former Yugoslav Republic of</option>\n\t\t<option value=\"MG\">Madagascar</option>\n\t\t<option value=\"MW\">Malawi</option>\n\t\t<option value=\"MY\">Malaysia</option>\n\t\t<option value=\"MV\">Maldives</option>\n\t\t<option value=\"ML\">Mali</option>\n\t\t<option value=\"MT\">Malta</option>\n\t\t<option value=\"MH\">Marshall Islands</option>\n\t\t<option value=\"MQ\">Martinique</option>\n\t\t<option value=\"MR\">Mauritania</option>\n\t\t<option value=\"MU\">Mauritius</option>\n\t\t<option value=\"YT\">Mayotte</option>\n\t\t<option value=\"MX\">Mexico</option>\n\t\t<option value=\"FM\">Micronesia, Federated States of</option>\n\t\t<option value=\"MD\">Moldova, Republic of</option>\n\t\t<option value=\"MC\">Monaco</option>\n\t\t<option value=\"MN\">Mongolia</option>\n\t\t<option value=\"ME\">Montenegro</option>\n\t\t<option value=\"MS\">Montserrat</option>\n\t\t<option value=\"MA\">Morocco</option>\n\t\t<option value=\"MZ\">Mozambique</option>\n\t\t<option value=\"MM\">Myanmar</option>\n\t\t<option value=\"NA\">Namibia</option>\n\t\t<option value=\"NR\">Nauru</option>\n\t\t<option value=\"NP\">Nepal</option>\n\t\t<option value=\"NL\">Netherlands</option>\n\t\t<option value=\"NC\">New Caledonia</option>\n\t\t<option value=\"NZ\">New Zealand</option>\n\t\t<option value=\"NI\">Nicaragua</option>\n\t\t<option value=\"NE\">Niger</option>\n\t\t<option value=\"NG\">Nigeria</option>\n\t\t<option value=\"NU\">Niue</option>\n\t\t<option value=\"NF\">Norfolk Island</option>\n\t\t<option value=\"MP\">Northern Mariana Islands</option>\n\t\t<option value=\"NO\">Norway</option>\n\t\t<option value=\"OM\">Oman</option>\n\t\t<option value=\"PK\">Pakistan</option>\n\t\t<option value=\"PW\">Palau</option>\n\t\t<option value=\"PS\">Palestinian Territory, Occupied</option>\n\t\t<option value=\"PA\">Panama</option>\n\t\t<option value=\"PG\">Papua New Guinea</option>\n\t\t<option value=\"PY\">Paraguay</option>\n\t\t<option value=\"PE\">Peru</option>\n\t\t<option value=\"PH\">Philippines</option>\n\t\t<option value=\"PN\">Pitcairn</option>\n\t\t<option value=\"PL\">Poland</option>\n\t\t<option value=\"PT\">Portugal</option>\n\t\t<option value=\"PR\">Puerto Rico</option>\n\t\t<option value=\"QA\">Qatar</option>\n\t\t<option value=\"RE\">Réunion</option>\n\t\t<option value=\"RO\">Romania</option>\n\t\t<option value=\"RU\">Russian Federation</option>\n\t\t<option value=\"RW\">Rwanda</option>\n\t\t<option value=\"BL\">Saint Barthélemy</option>\n\t\t<option value=\"SH\">Saint Helena, Ascension and Tristan da Cunha</option>\n\t\t<option value=\"KN\">Saint Kitts and Nevis</option>\n\t\t<option value=\"LC\">Saint Lucia</option>\n\t\t<option value=\"MF\">Saint Martin (French part)</option>\n\t\t<option value=\"PM\">Saint Pierre and Miquelon</option>\n\t\t<option value=\"VC\">Saint Vincent and the Grenadines</option>\n\t\t<option value=\"WS\">Samoa</option>\n\t\t<option value=\"SM\">San Marino</option>\n\t\t<option value=\"ST\">Sao Tome and Principe</option>\n\t\t<option value=\"SA\">Saudi Arabia</option>\n\t\t<option value=\"SN\">Senegal</option>\n\t\t<option value=\"RS\">Serbia</option>\n\t\t<option value=\"SC\">Seychelles</option>\n\t\t<option value=\"SL\">Sierra Leone</option>\n\t\t<option value=\"SG\">Singapore</option>\n\t\t<option value=\"SX\">Sint Maarten (Dutch part)</option>\n\t\t<option value=\"SK\">Slovakia</option>\n\t\t<option value=\"SI\">Slovenia</option>\n\t\t<option value=\"SB\">Solomon Islands</option>\n\t\t<option value=\"SO\">Somalia</option>\n\t\t<option value=\"ZA\">South Africa</option>\n\t\t<option value=\"GS\">South Georgia and the South Sandwich Islands</option>\n\t\t<option value=\"SS\">South Sudan</option>\n\t\t<option value=\"ES\">Spain</option>\n\t\t<option value=\"LK\">Sri Lanka</option>\n\t\t<option value=\"SD\">Sudan</option>\n\t\t<option value=\"SR\">Suriname</option>\n\t\t<option value=\"SJ\">Svalbard and Jan Mayen</option>\n\t\t<option value=\"SZ\">Swaziland</option>\n\t\t<option value=\"SE\">Sweden</option>\n\t\t<option value=\"CH\">Switzerland</option>\n\t\t<option value=\"SY\">Syrian Arab Republic</option>\n\t\t<option value=\"TW\">Taiwan, Province of China</option>\n\t\t<option value=\"TJ\">Tajikistan</option>\n\t\t<option value=\"TZ\">Tanzania, United Republic of</option>\n\t\t<option value=\"TH\">Thailand</option>\n\t\t<option value=\"TL\">Timor-Leste</option>\n\t\t<option value=\"TG\">Togo</option>\n\t\t<option value=\"TK\">Tokelau</option>\n\t\t<option value=\"TO\">Tonga</option>\n\t\t<option value=\"TT\">Trinidad and Tobago</option>\n\t\t<option value=\"TN\">Tunisia</option>\n\t\t<option value=\"TR\">Turkey</option>\n\t\t<option value=\"TM\">Turkmenistan</option>\n\t\t<option value=\"TC\">Turks and Caicos Islands</option>\n\t\t<option value=\"TV\">Tuvalu</option>\n\t\t<option value=\"UG\">Uganda</option>\n\t\t<option value=\"UA\">Ukraine</option>\n\t\t<option value=\"AE\">United Arab Emirates</option>\n\t\t<option value=\"GB\">United Kingdom</option>\n\t\t<option value=\"US\">United States</option>\n\t\t<option value=\"UM\">United States Minor Outlying Islands</option>\n\t\t<option value=\"UY\">Uruguay</option>\n\t\t<option value=\"UZ\">Uzbekistan</option>\n\t\t<option value=\"VU\">Vanuatu</option>\n\t\t<option value=\"VE\">Venezuela, Bolivarian Republic of</option>\n\t\t<option value=\"VN\">Viet Nam</option>\n\t\t<option value=\"VG\">Virgin Islands, British</option>\n\t\t<option value=\"VI\">Virgin Islands, U.S.</option>\n\t\t<option value=\"WF\">Wallis and Futuna</option>\n\t\t<option value=\"EH\">Western Sahara</option>\n\t\t<option value=\"YE\">Yemen</option>\n\t\t<option value=\"ZM\">Zambia</option>\n\t\t<option value=\"ZW\">Zimbabwe</option>\n\t</select>\n\t<label class=\"w3-label w3-text-light-gray\">ISAF</label>\n\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"crew.ref.isaf\" />\n\t<label class=\"w3-label w3-text-light-gray\">Ranking</label>\n\t<input type=\"range\" class=\"w3-input\" min=\"0\" max=\"5\" [(ngModel)]=\"crew.ref.ranking\" step=\"1\" (click)=\"this.crew.ref.setRanking(this.crew.ref.getRanking())\" />\n\t<div class=\"w3-light-grey w3-round\">\n    <div id=\"progressBar\" class=\"w3-container w3-amber w3-round w3-center\" [style.width]=\"crew.ref.getRanking()/5*100+'%'\">{{crew.ref.getRanking()}}</div>\n  </div>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucmanagecrews.crewPanelShowHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button [ngClass]=\"{ 'hide': editMode.ref }\" (click)=\"ucmanagecrews.create()\" class=\"w3-button w3-green w3-margin-top w3-right\">Create</button>\n\t\t<button [ngClass]=\"{ 'hide': !editMode.ref }\" (click)=\"ucmanagecrews.update()\" class=\"w3-button w3-green w3-margin-top w3-right\">Save</button>\n\t</div>\n</nav>\n\n<nav id=\"deletePanel\" [ngClass]=\"{ 'hide': !deletePanelIhm.ref }\" class=\"w3-margin globalColor w3-animate-left w3-padding\" style=\"z-index:5\">\n\t<h2>Are you sure you wish to delete this crew?</h2>\n\t<h3>{{crew.ref.getName() + ' / ' + crew.ref.getCountry() + ' / ' + crew.ref.getIsaf() + ' / ' + crew.ref.getRanking()}}</h3>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucmanagecrews.deletePanelHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button (click)=\"ucmanagecrews.delete()\" class=\"w3-button w3-green w3-margin-top w3-right\">Yes</button>\n\t</div>\n</nav>\n\n<div (click)=\"ucmanagecrews.deletePanelHide()\" [ngClass]=\"{ 'hide': !deletePanelIhm.ref }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n<div (click)=\"ucmanagecrews.crewPanelShowHide()\" [ngClass]=\"{ 'hide': crewPanelIhm.ref }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n\n<div class=\"w3-card-4 w3-margin w3-padding w3-container w3-animate-left\">\n\t<div class=\"w3-padding-0 w3-margin-top\" style=\"width: 100%; overflow: auto;\">\n\t\t<table class=\"w3-table-all w3-large\" >\n\t\t\t<thead>\n\t\t\t\t<tr class=\"globalColor\">\n\t\t\t\t\t<th style=\"width: 50%;\">Crew Name</th>\n\t\t\t\t\t<th style=\"width: 10%;\">Country</th>\n\t\t\t\t\t<th style=\"width: 15%;\">ISAF</th>\n\t\t\t\t\t<th style=\"width: 10%;\">Ranking</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody *ngFor=\"let crewSelected of crews.ref\">\n\t\t\t\t<tr *ngIf=\"resultSearchBar(crewSelected.getName() + ' ' + crewSelected.getCountry() + ' ' + crewSelected.getIsaf())\">\n\t\t\t\t\t<td>{{crewSelected.getName()}}</td>\n\t\t\t\t\t<td>{{crewSelected.getCountry()}}</td>\n\t\t\t\t\t<td>{{crewSelected.getIsaf()}}</td>\n\t\t\t\t\t<td>{{crewSelected.getRanking()}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"crews-list#crewPanel\" (click)=\"ucmanagecrews.editCrewPanel(crewSelected)\" class=\"w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/edit.png'\" style=\"height: 32px;\" /></a>\n\t\t\t\t\t\t<a href=\"crews-list#deletePanel\" (click)=\"ucmanagecrews.deletePanelShow(crewSelected)\" class=\"w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/cross.png'\" style=\"height: 32px;\" /></a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n<div class=\"w3-right-align w3-padding-left w3-padding-right w3-margin\">\n\t<a href=\"crews-list#crewPanel\" (click)=\"ucmanagecrews.createCrewPanel()\" class=\"w3-btn-floating-large hook_bottom_left globalColor w3-margin-top\">+</a>\n</div>\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<nav id=\"eventPanel\" [ngClass]=\"{ 'hide': eventPanelIhm.ref }\" class=\"w3-margin globalColor w3-animate-left w3-padding\" style=\"z-index:5\">\n\t<h2>Event Edit</h2>\n\t<label class=\"w3-label w3-text-light-gray\">Name</label>\n\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"event.ref.name\" />\n\t<label class=\"w3-label w3-text-light-gray\">Organization</label>\n\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"event.ref.organization\" />\n\t<label class=\"w3-label w3-text-light-gray\">Location</label>\n\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"event.ref.location\" />\n\t<label class=\"w3-label w3-text-light-gray\">Date</label>\n\t<input class=\"w3-input\" type=\"date\" [(ngModel)]=\"event.ref.date\" />\n\t<label class=\"w3-label w3-text-light-gray\">Number of Boats</label>\n\t<input class=\"w3-input\" type=\"number\" min=\"1\" step=\"1\" [(ngModel)]=\"event.ref.numberBoats\" />\n\t<label class=\"w3-label w3-text-light-gray\">Ranking</label>\n\t<input type=\"range\" class=\"w3-input\" min=\"0\" max=\"5\"  step=\"1\" [(ngModel)]=\"event.ref.ranking\" (click)=\"this.event.ref.setRanking(this.event.ref.getRanking())\" />\n\t<div class=\"w3-light-grey w3-round\">\n    <div id=\"progressBar\" class=\"w3-container w3-amber w3-round w3-center\" [style.width]=\"event.ref.getRanking()/5*100+'%'\">{{event.ref.getRanking()}}</div>\n  </div>\n\t<input class=\"w3-check w3-margin-top\" type=\"checkbox\" [(ngModel)]=\"event.ref.timeManagement\" />\n\t<label class=\"w3-label w3-text-black\">Time Management</label>\n\t<div class=\"w3-container w3-margin-top\">\n\t\t<table class=\"w3-table-all w3-centered\">\n\t\t\t<thead>\n\t\t\t\t<tr class=\"w3-orange\">\n\t\t\t\t\t<th>Crew</th>\n\t\t\t\t\t<th>ID</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr class=\"w3-white\" *ngFor=\"let subscriberSelected of event.ref.getSubscribers()\">\n\t\t\t\t\t<td>{{subscriberSelected.getName() + ' / ' + subscriberSelected.getCountry() + ' / ' + subscriberSelected.getIsaf()}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"subscriberSelected.letter\">\n\t\t\t\t\t\t\t<option [ngValue]=\"subscriberSelected.letter\">{{subscriberSelected.letter}}</option>\n\t\t\t\t\t\t\t<option *ngFor='let letter of ucorganizeevent.getLattersList()' >{{letter}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"w3-right\">\n\t\t\t\t\t\t<button class=\"w3-button globalColor w3-xlarge\" (click)=\"ucorganizeevent.removeSubscriberEvent(subscriberSelected)\"><img [src]=\"'assets/pictures/cross.png'\" style=\"height: 32px;\" /></button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr class=\"w3-white\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<select class=\"w3-select\"  [(ngModel)]=\"crewId.ref\">\n\t\t\t\t\t\t\t<option value=\"0\"></option>\n\t\t\t\t\t\t\t<option *ngFor=\"let crewSelected of ucorganizeevent.getCrewsList()\" [ngValue]=\"crewSelected.getId()\">{{crewSelected.getName() + ' / ' + crewSelected.getCountry() + ' / ' + crewSelected.getIsaf() + ' / ' + crewSelected.getRanking()}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"crewLetter.ref\">\n\t\t\t\t\t\t\t<option *ngFor='let letter of ucorganizeevent.getLattersList()'>{{letter}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucorganizeevent.eventPanelShowHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button [ngClass]=\"{ 'hide': editMode.ref }\" (click)=\"ucorganizeevent.create()\" class=\"w3-button w3-green w3-margin-top w3-right\">Create</button>\n\t\t<button [ngClass]=\"{ 'hide': !editMode.ref }\" (click)=\"ucorganizeevent.update()\" class=\"w3-button w3-green w3-margin-top w3-right\">Save</button>\n\t</div>\n</nav>\n\n<nav id=\"phasePanel\" [ngClass]=\"{ 'hide': phasePanelIhm.ref }\" class=\"w3-margin globalColor w3-animate-left w3-padding\" style=\"z-index:5\">\n\t<h2>Phase Edit</h2>\n\t<label class=\"w3-label w3-text-light-gray\">Name</label>\n\t<select class=\"w3-select\"  [(ngModel)]=\"phase.ref.name\">\n\t\t<option></option>\n\t\t<option>RoundRobin 1</option>\n\t\t<option>RoundRobin 2</option>\n\t\t<option>RoundRobin 3</option>\n\t\t<option>Semi-final</option>\n\t\t<option>Final</option>\n\t</select>\n\t<input class=\"w3-input w3-margin-top\" type=\"text\" [(ngModel)]=\"phase.ref.name\" />\n\t<input class=\"w3-check w3-margin-top\" [checked]=\"1\" type=\"checkbox\" [(ngModel)]=\"phase.ref.roundRobin\" />\n\t<label class=\"w3-label w3-text-black\">RoundRobin</label>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucorganizephase.phasePanelShowHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button [ngClass]=\"{ 'hide': editMode.ref }\" (click)=\"ucorganizephase.create()\" class=\"w3-button w3-green w3-margin-top w3-right\">Create</button>\n\t\t<button [ngClass]=\"{ 'hide': !editMode.ref }\" (click)=\"ucorganizephase.update()\" class=\"w3-button w3-green w3-margin-top w3-right\">Save</button>\n\t</div>\n</nav>\n\n<nav id=\"deletePanel\" [ngClass]=\"{ 'hide': !deleteEventPanelIhm.ref }\" class=\"w3-margin globalColor w3-animate-left w3-padding\" style=\"z-index:5\">\n\t<h2>Are you sure you wish to delete this Event?</h2>\n\t<h3>{{ event.ref.getName() + ' / ' + event.ref.getOrganization() + ' / ' + event.ref.getLocation() + ' / ' + event.ref.getDate() + ' / Ranking: ' + event.ref.getRanking() }}</h3>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucorganizeevent.deletePanelHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button (click)=\"ucorganizeevent.delete()\" class=\"w3-button w3-green w3-margin-top w3-right\">Yes</button>\n\t</div>\n</nav>\n\n<nav id=\"deletePanel\" [ngClass]=\"{ 'hide': !deletePhasePanelIhm.ref }\" class=\"w3-margin w3-animate-left w3-padding globalColor\" style=\"z-index:5\">\n\t<h2>Are you sure you wish to delete this Phase?</h2>\n\t<h3>{{ phase.ref.getName() + phase.ref.getRoundRobin()?'Type: RoundRobin':'' }}</h3>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucorganizephase.deletePanelHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button (click)=\"ucorganizephase.delete()\" class=\"w3-button w3-green w3-margin-top w3-right\">Yes</button>\n\t</div>\n</nav>\n\n<div (click)=\"ucorganizeevent.deletePanelHide()\" [ngClass]=\"{ 'hide': !deleteEventPanelIhm.ref }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n<div (click)=\"ucorganizephase.deletePanelHide()\" [ngClass]=\"{ 'hide': !deletePhasePanelIhm.ref }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n<div (click)=\"ucorganizeevent.eventPanelShowHide()\" [ngClass]=\"{ 'hide': eventPanelIhm.ref }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n<div (click)=\"ucorganizephase.phasePanelShowHide()\" [ngClass]=\"{ 'hide': phasePanelIhm.ref }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n\n<div class=\"w3-card-4 w3-margin w3-padding w3-container\">\n\t<div class=\"w3-padding-0 w3-margin-top w3-animate-left\" *ngFor=\"let eventSelected of events.ref\">\n\t\t<div *ngIf=\"resultSearchBar(eventSelected.getName() + ' ' + eventSelected.getOrganization() + ' ' + eventSelected.getLocation() + ' ' + eventSelected.getDate())\">\n\t\t\t<div class=\"globalColor w3-container w3-padding-0\">\n\t\t\t\t<button  (click)=\"ucorganizeevent.detailPanelShowHide(eventSelected)\" class=\"w3-threequarter w3-button globalColor w3-xlarge w3-left-align\" style=\"background-color: transparent;\">{{eventSelected.name}}</button>\n\t\t\t\t<div class=\"w3-quarter\">\n\t\t\t\t\t<button class=\"w3-quarter w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/pdf.png'\" style=\"height: 32px;\" title=\"generate PDF\" /></button>\n\t\t\t\t\t<button class=\"w3-quarter w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/html.png'\" style=\"height: 32px;\" title=\"generate HTML\" /></button>\n\t\t\t\t\t<a href=\"events-list#eventPanel\" (click)=\"ucorganizeevent.editEventPanel(eventSelected)\"  class=\"w3-quarter w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/edit.png'\" title=\"edit Event\" style=\"height: 32px;\" /></a>\n\t\t\t\t\t<a href=\"events-list#deletePanel\" (click)=\"ucorganizeevent.deletePanelShow(eventSelected)\" class=\"w3-quarter w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/cross.png'\" style=\"height: 32px;\" title=\"delete Event\" /></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"globalColor w3-center\" [ngClass]=\"{ 'hide': eventSelected.getHiddenContent() }\">\n\t\t\t\t<div class=\"w3-row\">\n\t\t\t\t\t<div class=\"w3-third w3-container\">\n\t\t\t\t\t\t<p>Organization: {{eventSelected.getOrganization()}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"w3-third w3-container\">\n\t\t\t\t\t\t<p>Location: {{eventSelected.getLocation()}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"w3-third w3-container\">\n\t\t\t\t\t\t<p>Date: {{eventSelected.getDate()}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"w3-row\">\n\t\t\t\t\t<div class=\"w3-third w3-container\">\n\t\t\t\t\t\t<p>Number of Boats: {{eventSelected.getNumberBoats()}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"w3-twothird w3-container w3-padding-bottom\">\n\t\t\t\t\t\tRanking:\n\t\t\t\t\t\t<div class=\"w3-light-grey w3-round \">\n\t\t\t\t\t\t\t<div id=\"progressBar\" class=\"w3-container w3-amber w3-round w3-center\" [style.width]=\"eventSelected.getRanking()/5*100+'%'\">{{eventSelected.getRanking()}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"w3-border w3-border-grey w3-padding w3-animate-left\" [ngClass]=\"{ 'hide': eventSelected.getHiddenContent() }\" >\n\t\t\t\t<div class=\"w3-container w3-padding-0 w3-margin-bottom\" *ngFor=\"let phaseSelected of eventSelected.getPhasesList(); let i = index\" [attr.data-index]=\"i\">\n\t\t\t\t\t<a [routerLink]=\"['/phase', phaseSelected.getId()]\" class=\"w3-threequarter w3-button globalColor w3-xlarge w3-left-align\"\n\t\t\t\t\t[ngClass]=\"{'stripe-3': phaseSelected.getRoundRobin()}\"\n\t\t\t\t\tstyle=\"background-color: transparent;\">{{phaseSelected.getName()}}</a>\n\t\t\t\t\t<div class=\"w3-quarter w3-bar\">\n\t\t\t\t\t\t<a [routerLink]=\"['/results-subscriber', phaseSelected.getId()]\" class=\"w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/eye.png'\" title=\"show Results\" style=\"height: 30px;\" /></a>\n\t\t\t\t\t\t<a href=\"events-list#phasePanel\" (click)=\"ucorganizephase.editPhasePanel(phaseSelected, eventSelected)\" class=\"w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/edit.png'\" title=\"edit Phase\" style=\"height: 30px;\" /></a>\n\t\t\t\t\t\t<a href=\"events-list#deletePanel\" *ngIf=\"eventSelected.getPhasesList().length-1 == i\" (click)=\"ucorganizephase.deletePanelShow(phaseSelected, eventSelected)\" class=\"w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/cross.png'\" title=\"delete Phase\" style=\"height: 30px;\" /></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"w3-right-align\">\n\t\t\t\t\t<a href=\"events-list#phasePanel\" title=\"add Phase\" (click)=\"ucorganizephase.createPhasePanel(eventSelected)\" class=\"w3-btn-floating globalColor w3-margin\">+</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"w3-right-align w3-padding-left w3-padding-right w3-margin\">\n\t<a href=\"events-list#eventPanel\" title=\"add Event\" (click)=\"ucorganizeevent.createEventPanel()\" class=\"w3-btn-floating-large hook_bottom_left globalColor w3-margin-top\">+</a>\n</div>\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<p>\n  guide works!\n</p>\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-card-4 w3-margin w3-padding w3-container\">\n\t<div class=\"w3-padding-0 w3-margin-top\" style=\"width: 100%; overflow: auto;\">\n\t\t<h1 class=\"globalColor w3-padding\">Upcoming Events</h1>\n\t\t<table class=\"w3-table-all w3-large\">\n\t\t\t<thead>\n\t\t\t\t<tr class=\"globalColor\">\n\t\t\t\t\t<th style=\"width: 25%;\">Date</th>\n\t\t\t\t\t<th style=\"width: 35%;\">Event</th>\n\t\t\t\t\t<th style=\"width: 30%;\">Location</th>\n\t\t\t\t\t<th style=\"width: 10%;\">Ranking</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t  \t<tbody>\n\t\t\t\t<tr *ngFor=\"let event of events.ref\">\n\t\t\t\t\t<td>{{event.getDate()}}</td>\n\t\t\t\t\t<td>{{event.getName()}}</td>\n\t\t\t\t\t<td>{{event.getLocation()}}</td>\n\t\t\t\t\t<td>{{event.getRanking()}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<nav id=\"deletePanel\" [ngClass]=\"{ 'hide': !deleteFlightPanelIhm.ref }\" class=\"w3-margin w3-animate-left w3-padding globalColor\" style=\"z-index:5\">\n\t<h2>Are you sure you wish to delete this Flight?</h2>\n\t<h3>{{ 'Flight: ' +flight.ref.getFlightNumber() }}</h3>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucelaboratepairinglist.deletePanelHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button (click)=\"ucelaboratepairinglist.deleteFlight()\" class=\"w3-button w3-green w3-margin-top w3-right\">Yes</button>\n\t</div>\n</nav>\n\n<nav id=\"deletePanel\" [ngClass]=\"{ 'hide': winnerPanelIhm.ref.deletePanelhide }\" class=\"w3-margin w3-animate-left w3-padding globalColor\" style=\"z-index:5\">\n\t<h2>Are you sure you wish to remove registered score?</h2>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucelaboratepairinglist.deleteWinnerPanelHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button (click)=\"ucelaboratepairinglist.removeWinnerScore()\" class=\"w3-button w3-green w3-margin-top w3-right\">Yes</button>\n\t</div>\n</nav>\n\n<nav id=\"winnerPanel\" [ngClass]=\"{ 'hide': winnerPanelIhm.ref.hide }\" class=\"w3-margin w3-animate-left w3-padding w3-cyan\" style=\"z-index:5\">\n\t<h3>Winner</h3>\n\t<div class=\"w3-row w3-xlarge\">\n\t\t<div class=\"w3-half w3-container w3-blue\">Blue</div>\n\t\t<div class=\"w3-half w3-container w3-yellow w3-right-align\">Yellow</div>\n\t</div>\n\t<input type=\"range\" class=\"w3-input\" min=\"0\" max=\"2\" step=\"1\" [(ngModel)]=\"winnerPanelIhm.ref.scoreBar\" />\n\t<div class=\"w3-round w3-yellow\" [ngClass]=\"{ 'w3-blue': (winnerPanelIhm.ref.scoreBar == 1)?true:false }\">\n\t\t<div id=\"progressBar\" class=\"w3-container w3-blue w3-round w3-left-align\" style=\"width: 100%;\" *ngIf=\"(winnerPanelIhm.ref.scoreBar == 0)?true:false\">1</div>\n\t\t<div id=\"progressBar\" class=\"w3-container w3-blue w3-round w3-right-align\" style=\"width: 50%;\" *ngIf=\"(winnerPanelIhm.ref.scoreBar == 1)?true:false\">1/2</div>\n\t\t<div id=\"progressBar\" class=\"w3-container w3-yellow w3-round w3-right-align\" style=\"width: 100%;\" *ngIf=\"(winnerPanelIhm.ref.scoreBar == 2)?true:false\">1</div>\n\t</div>\n\t<label class=\"w3-label w3-text-light-gray w3-margin-top\">Race Finish Time: </label>\n\t<input class=\"w3-input\" step=\"1\" type=\"time\" [(ngModel)]=\"winnerPanelIhm.ref.time\"/>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucelaboratepairinglist.winnerPanelHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button (click)=\"ucelaboratepairinglist.saveWinnerScore()\" class=\"w3-button w3-green w3-margin-top w3-right\">Save</button>\n\t</div>\n</nav>\n\n<nav id=\"winnerPanel\" [ngClass]=\"{ 'hide': !penaltyPanelIhm.ref }\" class=\"w3-margin w3-animate-left w3-padding w3-indigo\" style=\"z-index:5\">\n\t<h3>Penalty</h3>\n\t<label class=\"w3-label w3-text-light-gray\">Penalty points: </label>\n\t<input type=\"range\" class=\"w3-input\" min=\"0\" max=\"1\" step=\"0.1\" [(ngModel)]=\"racer.ref.getPenalty().points\" />\n\t<div class=\"w3-round w3-ambre\">\n\t\t<div id=\"progressBar\" class=\"w3-container w3-red w3-round w3-left-align\" [style.width]=\"racer.ref.getPenalty().getPoints()/1*100+'%'\">{{racer.ref.getPenalty().getPoints()}}</div>\n\t</div>\n\t<label class=\"w3-label w3-text-light-gray w3-margin\">Detail: </label>\n\t<textarea rows=\"4\" [(ngModel)]=\"racer.ref.getPenalty().detail\">\n\t</textarea>\n\t<div class=\"w3-bar w3-margin-bottom\">\n\t\t<button (click)=\"ucelaboratepairinglist.penaltyPanelIhmHide()\" class=\"w3-button w3-red w3-margin-top\">Cancel</button>\n\t\t<button (click)=\"ucelaboratepairinglist.createUpdateDeletePenalty()\" class=\"w3-button w3-green w3-margin-top w3-right\">Save</button>\n\t</div>\n</nav>\n\n<div (click)=\"ucelaboratepairinglist.winnerPanelHide()\" [ngClass]=\"{ 'hide': winnerPanelIhm.ref.hide }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n<div (click)=\"ucelaboratepairinglist.penaltyPanelIhmHide()\" [ngClass]=\"{ 'hide': !penaltyPanelIhm.ref }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n<div (click)=\"ucelaboratepairinglist.deleteWinnerPanelHide()\" [ngClass]=\"{ 'hide': winnerPanelIhm.ref.deletePanelhide }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n<div (click)=\"ucelaboratepairinglist.deletePanelHide()\" [ngClass]=\"{ 'hide': !deleteFlightPanelIhm.ref }\" class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\"></div>\n\n<div class=\"w3-card-4 w3-margin w3-padding w3-container w3-animate-left \" >\n\t<div class=\"w3-padding-0 w3-margin-top w3-animate-left \" style=\"width: 100%; overflow: auto;\" *ngFor=\"let flightSelected of phase.ref.getFlightsList(); let i = index\" [attr.data-index]=\"i\">\n\t\t<div *ngIf=\"resultSearchBar('Flight '+flightSelected.getFlightNumber())\">\n\t\t\t<div class=\"globalColor w3-container w3-padding-0\">\n\t\t\t\t<button (click)=\"ucelaboratepairinglist.detailPanelShowHide(flightSelected)\" class=\"w3-threequarter w3-button globalColor w3-xlarge w3-left-align\" style=\"background-color: transparent;\">Flight {{flightSelected.getFlightNumber()}}</button>\n\t\t\t\t<a [routerLink]=\"['/phase', phase.ref.getId()]\" *ngIf=\"flightSelected.getFlightNumber() == flightService.getLastFlightNumber()\" fragment=\"deletePanel\" (click)=\"ucelaboratepairinglist.deletePanelShow(flightSelected)\" class=\"w3-quarter w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/cross.png'\"  title=\"delete Flight\" style=\"height: 32px;\" /></a>\n\t\t\t</div>\n\n\t\t\t<div class=\"w3-border w3-border-grey w3-padding\" [ngClass]=\"{ 'hide': !flightSelected.getHiddenContent() }\">\n\t\t\t<div *ngIf=\"event.ref.getTimeManagement()\" class=\"globalColor w3-container w3-padding w3-row\">\n\t\t\t\t<h3 class=\"w3-quarter w3-container\">Start Time: </h3>\n\t\t\t\t<input *ngIf=\"(flightSelected.getStartDateTime() == '')?true:false;\" class=\"w3-quarter w3-input\" type=\"date\" [(ngModel)]=\"startDate.ref\" />\n\t\t\t\t<input *ngIf=\"(flightSelected.getStartDateTime() == '')?true:false;\" class=\"w3-quarter w3-input\" type=\"time\" step=\"1\" [(ngModel)]=\"startTime.ref\" />\n\t\t\t\t<h3 *ngIf=\"(flightSelected.getStartDateTime() == '')?false:true;\" class=\"w3-half w3-container\">{{flightSelected.getStartDateTime()}}</h3>\n\t\t\t\t<button *ngIf=\"(flightSelected.getStartDateTime() == '')?false:true;\" (click)=\"ucelaboratepairinglist.deleteStartDateTime(flightSelected)\" class=\"w3-quarter w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/cross.png'\" style=\"height: 32px;\" /></button>\n\t\t\t\t<button *ngIf=\"(flightSelected.getStartDateTime() == '')?true:false;\" (click)=\"ucelaboratepairinglist.createStartDateTime(flightSelected)\" class=\"w3-quarter w3-button globalColor w3-xlarge\"><img [src]=\"'assets/pictures/start.png'\" style=\"height: 32px;\" /></button>\n\t\t\t</div>\n\t\t\t<table class=\"w3-table-all w3-large\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"\">\n\t\t\t\t\t\t<th style=\"width: 5%;\">Match</th>\n\t\t\t\t\t\t<th style=\"width: 40%;\" class=\"w3-blue\">Blue</th>\n\t\t\t\t\t\t<th style=\"width: 40%;\" class=\"w3-yellow\">Yellow</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let matchSelected of flightSelected.getMatchsList(); let i = index\" [attr.data-index]=\"i\">\n\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<table *ngIf=\"matchSelected.getLocked()\" class=\"w3-table-all w3-large\">\n\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t(click)=\"ucelaboratepairinglist.penaltyPanelIhmShow(matchSelected.getBlue())\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"matchSelected.getFinishDateTime() != ''\"\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t\t\t\t'w3-blue': (matchSelected.getBlue().getPoints()-matchSelected.getBlue().getPenalty().getPoints())\n\t\t\t\t\t\t\t\t\t >= (matchSelected.getYellow().getPoints()-matchSelected.getYellow().getPenalty().getPoints()),\n\t\t\t\t\t\t\t\t\t 'stripe-3': (matchSelected.getBlue().getPenalty().getPoints() > 0)?true:false\n\t\t\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getBlue().getName() + ' / ' + matchSelected.getBlue().getCountry() + ' / ' + matchSelected.getBlue().getIsaf() }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getBlue().getBoat().getBoatNumber() }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getBlue().getLetter() }}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr class=\"w3-sand\" (click)=\"ucelaboratepairinglist.winnerPanelShow(matchSelected, 'blue')\" *ngIf=\"matchSelected.getFinishDateTime() == ''\">\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getBlue().getName() + ' / ' + matchSelected.getBlue().getCountry() + ' / ' + matchSelected.getBlue().getIsaf() }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getBlue().getBoat().getBoatNumber() }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getBlue().getLetter() }}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<table *ngIf=\"!matchSelected.getLocked()\" class=\"w3-table-all w3-large\">\n\t\t\t\t\t\t\t\t<tr class=\"w3-blue\">\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"matchSelected.blueSubscriberId\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\"></option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor='let subscribeSelected of ucelaboratepairinglist.getSubscribersList(flightSelected, matchSelected.getBlueSubscriberId())' [ngValue]=\"subscribeSelected.getId()\">{{subscribeSelected.getName() + \" / \" + subscribeSelected.getCountry() + \" / \" +subscribeSelected.getLetter()}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"matchSelected.blueBoatId\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\"></option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor='let boatSelected of ucelaboratepairinglist.getBoatsList(flightSelected, matchSelected.getBlueBoatId())' [ngValue]=\"boatSelected.getId()\">{{\"Boat: \" + boatSelected.getBoatNumber()}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<table *ngIf=\"matchSelected.getLocked()\" class=\"w3-table-all w3-large matchYellow\">\n\t\t\t\t\t\t\t\t<tr (click)=\"ucelaboratepairinglist.penaltyPanelIhmShow(matchSelected.getYellow())\"\n\t\t\t\t\t\t\t\t *ngIf=\"matchSelected.getFinishDateTime() != ''\"\n\t\t\t\t\t\t\t\t [ngClass]=\"{\n\t\t\t\t\t\t\t\t\t 'w3-yellow': (matchSelected.getBlue().getPoints()-matchSelected.getBlue().getPenalty().getPoints())\n\t\t\t\t\t\t\t\t\t <= (matchSelected.getYellow().getPoints()-matchSelected.getYellow().getPenalty().getPoints()),\n\t\t\t\t\t\t\t\t\t 'stripe-3': (matchSelected.getYellow().getPenalty().getPoints() > 0)?true:false\n\t\t\t\t\t\t\t\t  }\">\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getYellow().getName() + ' / ' + matchSelected.getYellow().getCountry() + ' / ' + matchSelected.getYellow().getIsaf() }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getYellow().getBoat().getBoatNumber() }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getYellow().getLetter() }}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr class=\"w3-sand\" (click)=\"ucelaboratepairinglist.winnerPanelShow(matchSelected, 'yellow')\" *ngIf=\"matchSelected.getFinishDateTime() == ''\">\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getYellow().getName() + ' / ' + matchSelected.getYellow().getCountry() + ' / ' + matchSelected.getYellow().getIsaf() }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getYellow().getBoat().getBoatNumber() }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ matchSelected.getYellow().getLetter() }}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<table *ngIf=\"!matchSelected.getLocked()\" class=\"w3-table-all w3-large matchYellow\">\n\t\t\t\t\t\t\t\t<tr class=\"w3-yellow\">\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"matchSelected.yellowSubscriberId\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\"></option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor='let subscribeSelected of ucelaboratepairinglist.getSubscribersList(flightSelected, matchSelected.getYellowSubscriberId())' [ngValue]=\"subscribeSelected.getId()\">{{subscribeSelected.getName() + \" / \" + subscribeSelected.getCountry() + \" / \" +subscribeSelected.getLetter()}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"matchSelected.yellowBoatId\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"-1\"></option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor='let boatSelected of ucelaboratepairinglist.getBoatsList(flightSelected, matchSelected.getYellowBoatId())' [ngValue]=\"boatSelected.getId()\">{{\"Boat: \" + boatSelected.getBoatNumber()}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td *ngIf=\"matchSelected.getFinishDateTime() == ''\">\n\t\t\t\t\t\t\t<button title=\"unlock Match\" *ngIf=\"matchSelected.getLocked()\" (click)=\"ucelaboratepairinglist.unlockMatch(matchSelected)\" class=\"w3-quarter w3-button globalColor w3-xlarge\" [ngStyle]=\"{ 'background-image': 'url(' + 'assets/pictures/padlock.png' + ')'}\"></button>\n\t\t\t\t\t\t\t<button title=\"lock Match\" *ngIf=\"!matchSelected.getLocked()\" (click)=\"ucelaboratepairinglist.updateMatch(matchSelected)\" class=\"w3-quarter w3-button globalColor w3-xlarge\" [ngStyle]=\"{ 'background-image': 'url(' + 'assets/pictures/padlockOpen.png' + ')'}\"></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td *ngIf=\"matchSelected.getFinishDateTime() != ''\">\n\t\t\t\t\t\t\t{{matchSelected.getFinishDateTime()}}\n\t\t\t\t\t\t\t<a [routerLink]=\"['/phase', phase.ref.getId()]\" fragment=\"deletePanel\" (click)=\"ucelaboratepairinglist.deleteWinnerPanelShow(matchSelected)\" class=\"w3-quarter w3-button globalColor w3-xlarge\" [ngStyle]=\"{ 'background-image': 'url(' + 'assets/pictures/cross.png' + ')'}\"  title=\"delete Score\"></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"flightSelected.getMatchsList().length < 3\">\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<table class=\"w3-table-all w3-large w3-blue\">\n\t\t\t\t\t\t\t\t<tr class=\"w3-blue\">\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"flightSelected.blueSubscriberId\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\"></option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor='let subscribeSelected of ucelaboratepairinglist.getSubscribersList(flightSelected, flightSelected.blueSubscriberId)' [ngValue]=\"subscribeSelected.getId()\">{{subscribeSelected.getName() + \" / \" + subscribeSelected.getCountry() + \" / \" +subscribeSelected.getLetter()}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"flightSelected.blueBoatId\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\"></option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor='let boatSelected of ucelaboratepairinglist.getBoatsList(flightSelected, flightSelected.blueBoatId)' [ngValue]=\"boatSelected.getId()\">{{\"Boat: \" + boatSelected.getBoatNumber()}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<table class=\"w3-table-all w3-large w3-blue matchYellow\">\n\t\t\t\t\t\t\t\t<tr class=\"w3-yellow\">\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"flightSelected.yellowSubscriberId\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\"></option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor='let subscribeSelected of ucelaboratepairinglist.getSubscribersList(flightSelected, flightSelected.yellowSubscriberId)' [ngValue]=\"subscribeSelected.getId()\">{{subscribeSelected.getName() + \" / \" + subscribeSelected.getCountry() + \" / \" +subscribeSelected.getLetter()}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class=\"w3-select\" [(ngModel)]=\"flightSelected.yellowBoatId\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\"></option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor='let boatSelected of ucelaboratepairinglist.getBoatsList(flightSelected, flightSelected.yellowBoatId)' [ngValue]=\"boatSelected.getId()\">{{\"Boat: \" + boatSelected.getBoatNumber()}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div *ngIf=\"flightService.getLastFlightNumber() == ucelaboratepairinglist.getMaxFligthInArray() || ucelaboratepairinglist.getMaxFligthInArray() == 0\" class=\"w3-right-align w3-padding-left w3-padding-right w3-margin\">\n\t<a (click)=\"ucelaboratepairinglist.createFlight()\" title=\"add Flight\" class=\"w3-btn-floating-large hook_bottom_left globalColor w3-margin-top\">+</a>\n</div>\n"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n\t<div class=\"w3-bar w3-light-grey w3-half\">\n    <div class=\"w3-dropdown-click w3-xxlarge\">\n      <button class=\"w3-button\">Results <i class=\"fa fa-caret-down\"></i></button>\n      <div id=\"choixVue\" class=\"w3-dropdown-content w3-bar-block w3-card-2\">\n        <a href=\"RR1.html\" class=\"w3-bar-item w3-button\">Round Robin 1</a>\n        <a href=\"RR2.html\" class=\"w3-bar-item w3-button\">Round Robin 2</a>\n        <a href=\"RR1.html\" class=\"w3-bar-item w3-button\">Demi-Finale</a>\n        <a href=\"Finale.html\" class=\"w3-bar-item w3-button\">Finale</a>\n        <a href=\"boatStats.html\" class=\"w3-bar-item w3-button\">BoatStats</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"w3-bar w3-half \">\n\t\t<div class=\"w3-bar w3-third\">\n\t\t\t<a [routerLink]=\"['/results-subscriber', phase.ref.getId()]\" class=\"w3-button w3-blue w3-xlarge\" title=\"Result Boat\"><img [src]=\"'assets/pictures/eye.png'\" style=\"height: 30px;\" /></a>\n\n\t\t</div>\n\t\t<div class=\"w3-bar w3-third\">\n  \t\t<a href=\"google.fr\"><img src=\"smiley.gif\"></a>\n\t\t</div>\n\t\t<div class=\"w3-bar w3-third\">\n  \t\t<a href=\"google.fr\"><img src=\"smiley.gif\"></a>\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\"ResultBoat\" class=\"w3-container\">\n  <table  class=\"w3-table-all\">\n    <thead>\n      <tr>\n        <th class=\"w3-blue\">NB Boat</th>\n        <th *ngFor=\"let resultBoat of resultBoatList.ref\">{{ resultBoat.getIdBoat() }}</th>\n      </tr>\n    </thead>\n    <tr>\n\t\t\t<td>POINTS</td>\n\t\t\t<td *ngFor=\"let resultBoat of resultBoatList.ref\">{{ resultBoat.getWinTotBoat() }}</td>\n    </tr>\n    <tr>\n\t\t\t<td>%</td>\n\t\t\t<td *ngFor=\"let resultBoat of resultBoatList.ref\">{{ resultBoat.getWinPercentBoat() }}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n\t<p>hellowuhouhuhuhyuhyuhworld</p>\n\t<div class=\"w3-bar w3-light-grey w3-half\">\n    <div class=\"w3-dropdown-click w3-xxlarge\">\n      <button class=\"w3-button\">Results <i class=\"fa fa-caret-down\"></i></button>\n      <div id=\"choixVue\" class=\"w3-dropdown-content w3-bar-block w3-card-2\">\n        <a href=\"RR1.html\" class=\"w3-bar-item w3-button\">Round Robin 1</a>\n        <a href=\"RR2.html\" class=\"w3-bar-item w3-button\">Round Robin 2</a>\n        <a href=\"RR1.html\" class=\"w3-bar-item w3-button\">Demi-Finale</a>\n        <a href=\"Finale.html\" class=\"w3-bar-item w3-button\">Finale</a>\n        <a href=\"boatStats.html\" class=\"w3-bar-item w3-button\">BoatStats</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"w3-bar w3-half \">\n\t\t<div class=\"w3-bar w3-third\">\n\t  \t\t<a [routerLink]=\"['/results-boat', phase.ref.getId()]\" class=\"w3-button globalColor w3-xlarge\" title=\"Result Boat\"><img [src]=\"'assets/pictures/eye.png'\" style=\"height: 30px;\" /></a>\n\t\t</div>\n\t\t<div class=\"w3-bar w3-third\">\n  \t\t<a href=\"google.fr\"><img src=\"smiley.gif\"></a>\n\t\t</div>\n\t\t<div class=\"w3-bar w3-third\">\n  \t\t<a href=\"google.fr\"><img src=\"smiley.gif\"></a>\n\t\t</div>\n\t</div>\n</div>\n<!--\n<div id=\"ResultRoundRobin\" class=\"w3-container\">\n\t<table  class=\"w3-table-all\">\n    <thead>\n      <tr>\n        <th class=\"w3-blue\">NB CREW</th>\n        <th *ngFor=\"let resultSubscriber of resultSubscriberList.ref\">{{ resultSubscriber.getIdSub() }}</th>\n      </tr>\n    </thead>\n    <tr>\n\t\t\t<td>POINTS</td>\n\t\t\t<td *ngFor=\"let resultSubscriber of resultSubscriberList.ref\">{{ resultSubscriber.getWinTotSub() }}</td>\n    </tr>\n    <tr>\n\t\t\t<td>%</td>\n\t\t\t<td *ngFor=\"let resultSubscriber of resultSubscriberList.ref\">{{ resultSubscriber.getWinPercentSub() }}</td>\n    </tr>\n  </table>\n</div>-->\n"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-card-4 w3-padding w3-margin\">\n\t\t<h2>Company Information</h2>\n\t\t<label class=\"w3-label w3-text-black\">Organization</label>\n\t\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"settings.ref.organization\" />\n\t\t<label class=\"w3-label w3-text-black\">Phone</label>\n\t\t<input class=\"w3-input\" type=\"tel\" [(ngModel)]=\"settings.ref.phone\" />\n\t\t<label class=\"w3-label w3-text-black\">E-mail</label>\n\t\t<input class=\"w3-input\" type=\"email\" [(ngModel)]=\"settings.ref.email\" />\n\t\t<label class=\"w3-label w3-text-black\">Address</label>\n\t\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"settings.ref.address\" />\n\t\t<label class=\"w3-label w3-text-black\">Address supplement</label>\n\t\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"settings.ref.addressSupplement\" />\n\t\t<label class=\"w3-label w3-text-black\">Country</label>\n\t\t<select class=\"w3-input\" [(ngModel)]=\"settings.ref.country\">\n\t\t\t<option value=\"AF\">Afghanistan</option>\n\t\t\t<option value=\"AX\">Åland Islands</option>\n\t\t\t<option value=\"AL\">Albania</option>\n\t\t\t<option value=\"DZ\">Algeria</option>\n\t\t\t<option value=\"AS\">American Samoa</option>\n\t\t\t<option value=\"AD\">Andorra</option>\n\t\t\t<option value=\"AO\">Angola</option>\n\t\t\t<option value=\"AI\">Anguilla</option>\n\t\t\t<option value=\"AQ\">Antarctica</option>\n\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\n\t\t\t<option value=\"AR\">Argentina</option>\n\t\t\t<option value=\"AM\">Armenia</option>\n\t\t\t<option value=\"AW\">Aruba</option>\n\t\t\t<option value=\"AU\">Australia</option>\n\t\t\t<option value=\"AT\">Austria</option>\n\t\t\t<option value=\"AZ\">Azerbaijan</option>\n\t\t\t<option value=\"BS\">Bahamas</option>\n\t\t\t<option value=\"BH\">Bahrain</option>\n\t\t\t<option value=\"BD\">Bangladesh</option>\n\t\t\t<option value=\"BB\">Barbados</option>\n\t\t\t<option value=\"BY\">Belarus</option>\n\t\t\t<option value=\"BE\">Belgium</option>\n\t\t\t<option value=\"BZ\">Belize</option>\n\t\t\t<option value=\"BJ\">Benin</option>\n\t\t\t<option value=\"BM\">Bermuda</option>\n\t\t\t<option value=\"BT\">Bhutan</option>\n\t\t\t<option value=\"BO\">Bolivia, Plurinational State of</option>\n\t\t\t<option value=\"BQ\">Bonaire, Sint Eustatius and Saba</option>\n\t\t\t<option value=\"BA\">Bosnia and Herzegovina</option>\n\t\t\t<option value=\"BW\">Botswana</option>\n\t\t\t<option value=\"BV\">Bouvet Island</option>\n\t\t\t<option value=\"BR\">Brazil</option>\n\t\t\t<option value=\"IO\">British Indian Ocean Territory</option>\n\t\t\t<option value=\"BN\">Brunei Darussalam</option>\n\t\t\t<option value=\"BG\">Bulgaria</option>\n\t\t\t<option value=\"BF\">Burkina Faso</option>\n\t\t\t<option value=\"BI\">Burundi</option>\n\t\t\t<option value=\"KH\">Cambodia</option>\n\t\t\t<option value=\"CM\">Cameroon</option>\n\t\t\t<option value=\"CA\">Canada</option>\n\t\t\t<option value=\"CV\">Cape Verde</option>\n\t\t\t<option value=\"KY\">Cayman Islands</option>\n\t\t\t<option value=\"CF\">Central African Republic</option>\n\t\t\t<option value=\"TD\">Chad</option>\n\t\t\t<option value=\"CL\">Chile</option>\n\t\t\t<option value=\"CN\">China</option>\n\t\t\t<option value=\"CX\">Christmas Island</option>\n\t\t\t<option value=\"CC\">Cocos (Keeling) Islands</option>\n\t\t\t<option value=\"CO\">Colombia</option>\n\t\t\t<option value=\"KM\">Comoros</option>\n\t\t\t<option value=\"CG\">Congo</option>\n\t\t\t<option value=\"CD\">Congo, the Democratic Republic of the</option>\n\t\t\t<option value=\"CK\">Cook Islands</option>\n\t\t\t<option value=\"CR\">Costa Rica</option>\n\t\t\t<option value=\"CI\">Côte d'Ivoire</option>\n\t\t\t<option value=\"HR\">Croatia</option>\n\t\t\t<option value=\"CU\">Cuba</option>\n\t\t\t<option value=\"CW\">Curaçao</option>\n\t\t\t<option value=\"CY\">Cyprus</option>\n\t\t\t<option value=\"CZ\">Czech Republic</option>\n\t\t\t<option value=\"DK\">Denmark</option>\n\t\t\t<option value=\"DJ\">Djibouti</option>\n\t\t\t<option value=\"DM\">Dominica</option>\n\t\t\t<option value=\"DO\">Dominican Republic</option>\n\t\t\t<option value=\"EC\">Ecuador</option>\n\t\t\t<option value=\"EG\">Egypt</option>\n\t\t\t<option value=\"SV\">El Salvador</option>\n\t\t\t<option value=\"GQ\">Equatorial Guinea</option>\n\t\t\t<option value=\"ER\">Eritrea</option>\n\t\t\t<option value=\"EE\">Estonia</option>\n\t\t\t<option value=\"ET\">Ethiopia</option>\n\t\t\t<option value=\"FK\">Falkland Islands (Malvinas)</option>\n\t\t\t<option value=\"FO\">Faroe Islands</option>\n\t\t\t<option value=\"FJ\">Fiji</option>\n\t\t\t<option value=\"FI\">Finland</option>\n\t\t\t<option value=\"FR\">France</option>\n\t\t\t<option value=\"GF\">French Guiana</option>\n\t\t\t<option value=\"PF\">French Polynesia</option>\n\t\t\t<option value=\"TF\">French Southern Territories</option>\n\t\t\t<option value=\"GA\">Gabon</option>\n\t\t\t<option value=\"GM\">Gambia</option>\n\t\t\t<option value=\"GE\">Georgia</option>\n\t\t\t<option value=\"DE\">Germany</option>\n\t\t\t<option value=\"GH\">Ghana</option>\n\t\t\t<option value=\"GI\">Gibraltar</option>\n\t\t\t<option value=\"GR\">Greece</option>\n\t\t\t<option value=\"GL\">Greenland</option>\n\t\t\t<option value=\"GD\">Grenada</option>\n\t\t\t<option value=\"GP\">Guadeloupe</option>\n\t\t\t<option value=\"GU\">Guam</option>\n\t\t\t<option value=\"GT\">Guatemala</option>\n\t\t\t<option value=\"GG\">Guernsey</option>\n\t\t\t<option value=\"GN\">Guinea</option>\n\t\t\t<option value=\"GW\">Guinea-Bissau</option>\n\t\t\t<option value=\"GY\">Guyana</option>\n\t\t\t<option value=\"HT\">Haiti</option>\n\t\t\t<option value=\"HM\">Heard Island and McDonald Islands</option>\n\t\t\t<option value=\"VA\">Holy See (Vatican City State)</option>\n\t\t\t<option value=\"HN\">Honduras</option>\n\t\t\t<option value=\"HK\">Hong Kong</option>\n\t\t\t<option value=\"HU\">Hungary</option>\n\t\t\t<option value=\"IS\">Iceland</option>\n\t\t\t<option value=\"IN\">India</option>\n\t\t\t<option value=\"ID\">Indonesia</option>\n\t\t\t<option value=\"IR\">Iran, Islamic Republic of</option>\n\t\t\t<option value=\"IQ\">Iraq</option>\n\t\t\t<option value=\"IE\">Ireland</option>\n\t\t\t<option value=\"IM\">Isle of Man</option>\n\t\t\t<option value=\"IL\">Israel</option>\n\t\t\t<option value=\"IT\">Italy</option>\n\t\t\t<option value=\"JM\">Jamaica</option>\n\t\t\t<option value=\"JP\">Japan</option>\n\t\t\t<option value=\"JE\">Jersey</option>\n\t\t\t<option value=\"JO\">Jordan</option>\n\t\t\t<option value=\"KZ\">Kazakhstan</option>\n\t\t\t<option value=\"KE\">Kenya</option>\n\t\t\t<option value=\"KI\">Kiribati</option>\n\t\t\t<option value=\"KP\">Korea, Democratic People's Republic of</option>\n\t\t\t<option value=\"KR\">Korea, Republic of</option>\n\t\t\t<option value=\"KW\">Kuwait</option>\n\t\t\t<option value=\"KG\">Kyrgyzstan</option>\n\t\t\t<option value=\"LA\">Lao People's Democratic Republic</option>\n\t\t\t<option value=\"LV\">Latvia</option>\n\t\t\t<option value=\"LB\">Lebanon</option>\n\t\t\t<option value=\"LS\">Lesotho</option>\n\t\t\t<option value=\"LR\">Liberia</option>\n\t\t\t<option value=\"LY\">Libya</option>\n\t\t\t<option value=\"LI\">Liechtenstein</option>\n\t\t\t<option value=\"LT\">Lithuania</option>\n\t\t\t<option value=\"LU\">Luxembourg</option>\n\t\t\t<option value=\"MO\">Macao</option>\n\t\t\t<option value=\"MK\">Macedonia, the former Yugoslav Republic of</option>\n\t\t\t<option value=\"MG\">Madagascar</option>\n\t\t\t<option value=\"MW\">Malawi</option>\n\t\t\t<option value=\"MY\">Malaysia</option>\n\t\t\t<option value=\"MV\">Maldives</option>\n\t\t\t<option value=\"ML\">Mali</option>\n\t\t\t<option value=\"MT\">Malta</option>\n\t\t\t<option value=\"MH\">Marshall Islands</option>\n\t\t\t<option value=\"MQ\">Martinique</option>\n\t\t\t<option value=\"MR\">Mauritania</option>\n\t\t\t<option value=\"MU\">Mauritius</option>\n\t\t\t<option value=\"YT\">Mayotte</option>\n\t\t\t<option value=\"MX\">Mexico</option>\n\t\t\t<option value=\"FM\">Micronesia, Federated States of</option>\n\t\t\t<option value=\"MD\">Moldova, Republic of</option>\n\t\t\t<option value=\"MC\">Monaco</option>\n\t\t\t<option value=\"MN\">Mongolia</option>\n\t\t\t<option value=\"ME\">Montenegro</option>\n\t\t\t<option value=\"MS\">Montserrat</option>\n\t\t\t<option value=\"MA\">Morocco</option>\n\t\t\t<option value=\"MZ\">Mozambique</option>\n\t\t\t<option value=\"MM\">Myanmar</option>\n\t\t\t<option value=\"NA\">Namibia</option>\n\t\t\t<option value=\"NR\">Nauru</option>\n\t\t\t<option value=\"NP\">Nepal</option>\n\t\t\t<option value=\"NL\">Netherlands</option>\n\t\t\t<option value=\"NC\">New Caledonia</option>\n\t\t\t<option value=\"NZ\">New Zealand</option>\n\t\t\t<option value=\"NI\">Nicaragua</option>\n\t\t\t<option value=\"NE\">Niger</option>\n\t\t\t<option value=\"NG\">Nigeria</option>\n\t\t\t<option value=\"NU\">Niue</option>\n\t\t\t<option value=\"NF\">Norfolk Island</option>\n\t\t\t<option value=\"MP\">Northern Mariana Islands</option>\n\t\t\t<option value=\"NO\">Norway</option>\n\t\t\t<option value=\"OM\">Oman</option>\n\t\t\t<option value=\"PK\">Pakistan</option>\n\t\t\t<option value=\"PW\">Palau</option>\n\t\t\t<option value=\"PS\">Palestinian Territory, Occupied</option>\n\t\t\t<option value=\"PA\">Panama</option>\n\t\t\t<option value=\"PG\">Papua New Guinea</option>\n\t\t\t<option value=\"PY\">Paraguay</option>\n\t\t\t<option value=\"PE\">Peru</option>\n\t\t\t<option value=\"PH\">Philippines</option>\n\t\t\t<option value=\"PN\">Pitcairn</option>\n\t\t\t<option value=\"PL\">Poland</option>\n\t\t\t<option value=\"PT\">Portugal</option>\n\t\t\t<option value=\"PR\">Puerto Rico</option>\n\t\t\t<option value=\"QA\">Qatar</option>\n\t\t\t<option value=\"RE\">Réunion</option>\n\t\t\t<option value=\"RO\">Romania</option>\n\t\t\t<option value=\"RU\">Russian Federation</option>\n\t\t\t<option value=\"RW\">Rwanda</option>\n\t\t\t<option value=\"BL\">Saint Barthélemy</option>\n\t\t\t<option value=\"SH\">Saint Helena, Ascension and Tristan da Cunha</option>\n\t\t\t<option value=\"KN\">Saint Kitts and Nevis</option>\n\t\t\t<option value=\"LC\">Saint Lucia</option>\n\t\t\t<option value=\"MF\">Saint Martin (French part)</option>\n\t\t\t<option value=\"PM\">Saint Pierre and Miquelon</option>\n\t\t\t<option value=\"VC\">Saint Vincent and the Grenadines</option>\n\t\t\t<option value=\"WS\">Samoa</option>\n\t\t\t<option value=\"SM\">San Marino</option>\n\t\t\t<option value=\"ST\">Sao Tome and Principe</option>\n\t\t\t<option value=\"SA\">Saudi Arabia</option>\n\t\t\t<option value=\"SN\">Senegal</option>\n\t\t\t<option value=\"RS\">Serbia</option>\n\t\t\t<option value=\"SC\">Seychelles</option>\n\t\t\t<option value=\"SL\">Sierra Leone</option>\n\t\t\t<option value=\"SG\">Singapore</option>\n\t\t\t<option value=\"SX\">Sint Maarten (Dutch part)</option>\n\t\t\t<option value=\"SK\">Slovakia</option>\n\t\t\t<option value=\"SI\">Slovenia</option>\n\t\t\t<option value=\"SB\">Solomon Islands</option>\n\t\t\t<option value=\"SO\">Somalia</option>\n\t\t\t<option value=\"ZA\">South Africa</option>\n\t\t\t<option value=\"GS\">South Georgia and the South Sandwich Islands</option>\n\t\t\t<option value=\"SS\">South Sudan</option>\n\t\t\t<option value=\"ES\">Spain</option>\n\t\t\t<option value=\"LK\">Sri Lanka</option>\n\t\t\t<option value=\"SD\">Sudan</option>\n\t\t\t<option value=\"SR\">Suriname</option>\n\t\t\t<option value=\"SJ\">Svalbard and Jan Mayen</option>\n\t\t\t<option value=\"SZ\">Swaziland</option>\n\t\t\t<option value=\"SE\">Sweden</option>\n\t\t\t<option value=\"CH\">Switzerland</option>\n\t\t\t<option value=\"SY\">Syrian Arab Republic</option>\n\t\t\t<option value=\"TW\">Taiwan, Province of China</option>\n\t\t\t<option value=\"TJ\">Tajikistan</option>\n\t\t\t<option value=\"TZ\">Tanzania, United Republic of</option>\n\t\t\t<option value=\"TH\">Thailand</option>\n\t\t\t<option value=\"TL\">Timor-Leste</option>\n\t\t\t<option value=\"TG\">Togo</option>\n\t\t\t<option value=\"TK\">Tokelau</option>\n\t\t\t<option value=\"TO\">Tonga</option>\n\t\t\t<option value=\"TT\">Trinidad and Tobago</option>\n\t\t\t<option value=\"TN\">Tunisia</option>\n\t\t\t<option value=\"TR\">Turkey</option>\n\t\t\t<option value=\"TM\">Turkmenistan</option>\n\t\t\t<option value=\"TC\">Turks and Caicos Islands</option>\n\t\t\t<option value=\"TV\">Tuvalu</option>\n\t\t\t<option value=\"UG\">Uganda</option>\n\t\t\t<option value=\"UA\">Ukraine</option>\n\t\t\t<option value=\"AE\">United Arab Emirates</option>\n\t\t\t<option value=\"GB\">United Kingdom</option>\n\t\t\t<option value=\"US\">United States</option>\n\t\t\t<option value=\"UM\">United States Minor Outlying Islands</option>\n\t\t\t<option value=\"UY\">Uruguay</option>\n\t\t\t<option value=\"UZ\">Uzbekistan</option>\n\t\t\t<option value=\"VU\">Vanuatu</option>\n\t\t\t<option value=\"VE\">Venezuela, Bolivarian Republic of</option>\n\t\t\t<option value=\"VN\">Viet Nam</option>\n\t\t\t<option value=\"VG\">Virgin Islands, British</option>\n\t\t\t<option value=\"VI\">Virgin Islands, U.S.</option>\n\t\t\t<option value=\"WF\">Wallis and Futuna</option>\n\t\t\t<option value=\"EH\">Western Sahara</option>\n\t\t\t<option value=\"YE\">Yemen</option>\n\t\t\t<option value=\"ZM\">Zambia</option>\n\t\t\t<option value=\"ZW\">Zimbabwe</option>\n\t\t</select>\n\t\t<label class=\"w3-label w3-text-black\">Postal Code</label>\n\t\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"settings.ref.postalCode\" />\n\t\t<h2>Default Event</h2>\n\t\t<label class=\"w3-label w3-text-black\">Location</label>\n\t\t<input class=\"w3-input\" type=\"text\" [(ngModel)]=\"settings.ref.location\" />\n\t\t<label class=\"w3-label w3-text-black\">Number of boats</label>\n\t\t<input class=\"w3-input\" type=\"number\" min=\"1\" [(ngModel)]=\"settings.ref.amountBoats\" />\n\t\t<input class=\"w3-check w3-margin-top\" type=\"checkbox\" [(ngModel)]=\"settings.ref.timeManagement\" />\n\t\t<label class=\"w3-label w3-text-black\">Time Management</label>\n\t\t<div class=\"w3-row w3-margin-bottom  w3-margin-top\">\n\t\t\t<button class=\"w3-bar-item w3-margin-top w3-button w3-red w3-half\" (click)=\"cancelSettings()\" >Cancel</button>\n\t\t\t<button class=\"w3-bar-item w3-margin-top w3-button w3-green w3-half\" (click)=\"saveSettings()\" >Save</button>\n\t\t</div>\n</div>\n"

/***/ }),
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(113);


/***/ })
],[241]);
//# sourceMappingURL=main.bundle.js.map