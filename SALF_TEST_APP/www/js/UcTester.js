/*
* \file UcTester.ts
* $Author: Benhmida$
* $Rev: 1 $
* $Date: 2017-05-30 20:15:00 +0100 $

Projet : GEMARA - SGER
*/
/**
 * Elements de la SALF BOX à tester
 * Author: Benhmida
 * Version 1
 * Date: 2017-05-30 20:15:00 +0100
 */
var BoxElementTest;
(function (BoxElementTest) {
    BoxElementTest[BoxElementTest["BUTTONS"] = 0] = "BUTTONS";
    BoxElementTest[BoxElementTest["LED_RED"] = 1] = "LED_RED";
    BoxElementTest[BoxElementTest["LED_TOP"] = 2] = "LED_TOP";
    BoxElementTest[BoxElementTest["LED_MIDDLE"] = 3] = "LED_MIDDLE";
    BoxElementTest[BoxElementTest["LED_BOTTOM"] = 4] = "LED_BOTTOM";
    BoxElementTest[BoxElementTest["DISPLAY"] = 5] = "DISPLAY";
    BoxElementTest[BoxElementTest["SPEAKER"] = 6] = "SPEAKER";
    BoxElementTest[BoxElementTest["TUT"] = 7] = "TUT";
})(BoxElementTest || (BoxElementTest = {}));
var PossibleSalfBoxFrames;
(function (PossibleSalfBoxFrames) {
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["START_STOP_ON"] = 0] = "START_STOP_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["START_STOP_OFF"] = 1] = "START_STOP_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["PLUS_ON"] = 2] = "PLUS_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["PLUS_OFF"] = 3] = "PLUS_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["MINUS_ON"] = 4] = "MINUS_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["MINUS_OFF"] = 5] = "MINUS_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["SEQ_ON"] = 6] = "SEQ_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["SEQ_OFF"] = 7] = "SEQ_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["TUT_ON"] = 8] = "TUT_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["TUT_OFF"] = 9] = "TUT_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["KLAXON_ON"] = 10] = "KLAXON_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["KLAXON_OFF"] = 11] = "KLAXON_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["BOTTOM_LED_ON"] = 12] = "BOTTOM_LED_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["BOTTOM_LED_OFF"] = 13] = "BOTTOM_LED_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["MIDDLE_LED_ON"] = 14] = "MIDDLE_LED_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["MIDDLE_LED_OFF"] = 15] = "MIDDLE_LED_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["TOP_LED_ON"] = 16] = "TOP_LED_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["TOP_LED_OFF"] = 17] = "TOP_LED_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["RED_LED_ON"] = 18] = "RED_LED_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["RED_LED_OFF"] = 19] = "RED_LED_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY_OFF"] = 20] = "DIPLAY_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY0"] = 21] = "DIPLAY0";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY1"] = 22] = "DIPLAY1";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY2"] = 23] = "DIPLAY2";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY3"] = 24] = "DIPLAY3";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY4"] = 25] = "DIPLAY4";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY5"] = 26] = "DIPLAY5";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY6"] = 27] = "DIPLAY6";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY7"] = 28] = "DIPLAY7";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY8"] = 29] = "DIPLAY8";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["DIPLAY9"] = 30] = "DIPLAY9";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["SPEAKER_ON"] = 31] = "SPEAKER_ON";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["SPEAKER_OFF"] = 32] = "SPEAKER_OFF";
    PossibleSalfBoxFrames[PossibleSalfBoxFrames["END_OF_TEST"] = 33] = "END_OF_TEST";
})(PossibleSalfBoxFrames || (PossibleSalfBoxFrames = {}));
/**
 * Permet de tester la SALF BOX
 * Author: Benhmida
 * Version 1
 * Date: 2017-05-30 20:15:00 +0100
 */
var UcTester = (function () {
    /**
     * Constructeur qui affiche l'IHM lorsque la communication est établie
     * @param salfPiBny Liaison avec la SALF BOX
     */
    function UcTester(salfPiBny) {
        this.salfPiBny = salfPiBny;
        if (this.salfPiBny.ref.connected) {
            document.getElementById('loginPanel').style.display = 'none';
            document.getElementById('testPanel').style.display = 'block';
            this.salfPiBny.ref.read.bind(this)(this.onReceive);
        }
        else {
            setTimeout(this.constructor.bind(this, salfPiBny), 1000);
        }
    }
    /**
     * Démarre le test selon l'élément sélectionné
     * @param value L'identifiant de l'élément à tester
     */
    UcTester.prototype.onClick = function (value) {
        // envoyer au pi la valeur correspondante
        this.salfPiBny.ref.write(value.toString());
    };
    UcTester.prototype.manageDivDisplay = function (divId, showDiv) {
        if (showDiv) {
            document.getElementById(divId + '_on').style.display = 'block';
            document.getElementById(divId + '_off').style.display = 'none';
        }
        else {
            document.getElementById(divId + '_on').style.display = 'none';
            document.getElementById(divId + '_off').style.display = 'block';
        }
    };
    UcTester.prototype.manageDigitsDisplay = function (divId) {
        this.hideAllDigitsDisplays();
        document.getElementById(divId).style.display = 'block';
    };
    UcTester.prototype.hideAllDigitsDisplays = function () {
        document.getElementById('display_off').style.display = 'none';
        for (var i = 0; i <= 9; i++) {
            document.getElementById('display_' + i.toString()).style.display = 'none';
        }
    };
    UcTester.prototype.onReceive = function (data) {
        data = data.split('\2')[1];
        data = data.split('\3')[0];
        switch (parseInt(data, 10)) {
            case PossibleSalfBoxFrames.START_STOP_ON:
                this.manageDivDisplay('button_start_stop', true);
                break;
            case PossibleSalfBoxFrames.START_STOP_OFF:
                this.manageDivDisplay('button_start_stop', false);
                break;
            case PossibleSalfBoxFrames.PLUS_ON:
                this.manageDivDisplay('button_plus', true);
                break;
            case PossibleSalfBoxFrames.PLUS_OFF:
                this.manageDivDisplay('button_plus', false);
                break;
            case PossibleSalfBoxFrames.MINUS_ON:
                this.manageDivDisplay('button_minus', true);
                break;
            case PossibleSalfBoxFrames.MINUS_OFF:
                this.manageDivDisplay('button_minus', false);
                break;
            case PossibleSalfBoxFrames.SEQ_ON:
                this.manageDivDisplay('button_seq', true);
                break;
            case PossibleSalfBoxFrames.SEQ_OFF:
                this.manageDivDisplay('button_seq', false);
                break;
            case PossibleSalfBoxFrames.TUT_ON:
                this.manageDivDisplay('button_tut', true);
                break;
            case PossibleSalfBoxFrames.TUT_OFF:
                this.manageDivDisplay('button_tut', false);
                break;
            case PossibleSalfBoxFrames.KLAXON_ON:
                this.manageDivDisplay('klaxon', true);
                break;
            case PossibleSalfBoxFrames.KLAXON_OFF:
                this.manageDivDisplay('klaxon', false);
                break;
            case PossibleSalfBoxFrames.BOTTOM_LED_ON:
                this.manageDivDisplay('led_bottom', true);
                break;
            case PossibleSalfBoxFrames.BOTTOM_LED_OFF:
                this.manageDivDisplay('led_bottom', false);
                break;
            case PossibleSalfBoxFrames.MIDDLE_LED_ON:
                this.manageDivDisplay('led_middle', true);
                break;
            case PossibleSalfBoxFrames.MIDDLE_LED_OFF:
                this.manageDivDisplay('led_middle', false);
                break;
            case PossibleSalfBoxFrames.TOP_LED_ON:
                this.manageDivDisplay('led_top', true);
                break;
            case PossibleSalfBoxFrames.TOP_LED_OFF:
                this.manageDivDisplay('led_top', false);
                break;
            case PossibleSalfBoxFrames.RED_LED_ON:
                this.manageDivDisplay('led_red', true);
                break;
            case PossibleSalfBoxFrames.RED_LED_OFF:
                this.manageDivDisplay('led_red', false);
                break;
            case PossibleSalfBoxFrames.DIPLAY0:
                this.manageDigitsDisplay('display_0');
                break;
            case PossibleSalfBoxFrames.DIPLAY1:
                this.manageDigitsDisplay('display_1');
                break;
            case PossibleSalfBoxFrames.DIPLAY2:
                this.manageDigitsDisplay('display_2');
                break;
            case PossibleSalfBoxFrames.DIPLAY3:
                this.manageDigitsDisplay('display_3');
                break;
            case PossibleSalfBoxFrames.DIPLAY4:
                this.manageDigitsDisplay('display_4');
                break;
            case PossibleSalfBoxFrames.DIPLAY5:
                this.manageDigitsDisplay('display_5');
                break;
            case PossibleSalfBoxFrames.DIPLAY6:
                this.manageDigitsDisplay('display_6');
                break;
            case PossibleSalfBoxFrames.DIPLAY7:
                this.manageDigitsDisplay('display_7');
                break;
            case PossibleSalfBoxFrames.DIPLAY8:
                this.manageDigitsDisplay('display_8');
                break;
            case PossibleSalfBoxFrames.DIPLAY9:
                this.manageDigitsDisplay('display_9');
                break;
            case PossibleSalfBoxFrames.DIPLAY_OFF:
                this.manageDigitsDisplay('display_off');
                break;
            case PossibleSalfBoxFrames.SPEAKER_ON:
                this.manageDivDisplay('speaker', true);
                break;
            case PossibleSalfBoxFrames.SPEAKER_OFF:
                this.manageDivDisplay('speaker', false);
                break;
            case PossibleSalfBoxFrames.END_OF_TEST:
                alert('FIN DU TEST');
                break;
        }
    };
    return UcTester;
}());
