/*
* \file SalfPiBny.ts
* $Author: Benhmida$
* $Rev: 1 $
* $Date: 2017-05-30 20:15:00 +0100 $

Projet : GEMARA - SGER
*/
/**
 * Classe qui crée une communication en Bluetooth avec la SALF BOX
 * Author: Benhmida
 * Version 1
 * Date: 2017-05-30 20:15:00 +0100
 */
var SalfPiBny = (function () {
    /**
     * Constructeur qui initialise les attributs et force l'activation du Bluetooth
     * puis tente de se connecter
     * @param macAddress L'adresse MAC de la SALF BOX
     */
    function SalfPiBny(macAddress) {
        this.macAddress = macAddress;
        this.connectionState = false;
        bluetoothSerial.enable(this.connect.bind(this), this.constructor.bind(this, macAddress));
    }
    /**
     * Tente de se connecter à la SALF BOX
     */
    SalfPiBny.prototype.connect = function () {
        this.setMacAddress();
        bluetoothSerial.connectInsecure(this.macAddress, this.connectionSuccess.bind(this), this.reconnect.bind(this));
    };
    /**
     * Tente de se connecter à la SALF BOX jusqu'à atteindre son but en affichant l'erreur en cas d'échec
     * @param errorMessage Le message d'erreur
     */
    SalfPiBny.prototype.reconnect = function (errorMessage) {
        alert(errorMessage);
        this.setMacAddress();
        bluetoothSerial.connectInsecure(this.macAddress, this.connectionSuccess.bind(this), this.reconnect.bind(this));
    };
    SalfPiBny.prototype.setMacAddress = function () {
        var regex = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;
        do {
            this.macAddress = prompt("Please enter macAddress of SALF BOX:", this.macAddress);
        } while (!regex.test(this.macAddress));
    };
    /**
     * Met l'état de la connexion en actif en affichant le message de confirmation de connexion
     */
    SalfPiBny.prototype.connectionSuccess = function () {
        alert('Connexion établie!');
        this.connectionState = true;
    };
    /**
     * Retourne l'état de la connexion
     * @returns L'état de la connexion
     */
    SalfPiBny.prototype.connected = function () {
        return this.connectionState;
    };
    /**
     * Permet d'écrire à la SALF BOX
     * @param data Le message à envoyer
     */
    SalfPiBny.prototype.write = function (data) {
        bluetoothSerial.write("\2" + data + "\3");
    };
    /**
     * Ecoute la SALF BOX
     */
    SalfPiBny.prototype.read = function (onReceive) {
        bluetoothSerial.subscribe.bind(this)('\3', onReceive.bind(this));
    };
    return SalfPiBny;
}());
