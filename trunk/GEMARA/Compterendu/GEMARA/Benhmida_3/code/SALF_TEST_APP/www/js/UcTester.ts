/*
* \file UcTester.ts
* $Author: Benhmida$
* $Rev: 1 $
* $Date: 2017-05-30 20:15:00 +0100 $

Projet : GEMARA - SGER
*/

/**
 * Trame pour les élements de la SALF BOX à tester
 * Author: Benhmida
 * Version 1
 * Date: 2017-05-30 20:15:00 +0100
 */
enum BoxElementTest {
    BUTTONS,
    LED_RED,
    LED_TOP,
    LED_MIDDLE,
    LED_BOTTOM,
    DISPLAY,
    SPEAKER,
    TUT
}

/**
 * Trame de réponse de la SALF BOX
 * Author: Benhmida
 * Version 1
 * Date: 2017-05-30 20:15:00 +0100
 */
enum PossibleSalfBoxFrames {
  START_STOP_ON,
  START_STOP_OFF,
  PLUS_ON,
  PLUS_OFF,
  MINUS_ON,
  MINUS_OFF,
  SEQ_ON,
  SEQ_OFF,
  TUT_ON,
  TUT_OFF,
  KLAXON_ON,
  KLAXON_OFF,
  BOTTOM_LED_ON,
	BOTTOM_LED_OFF,
	MIDDLE_LED_ON,
	MIDDLE_LED_OFF,
	TOP_LED_ON,
	TOP_LED_OFF,
	RED_LED_ON,
	RED_LED_OFF,
  DIPLAY_OFF,
  DIPLAY0,
  DIPLAY1,
  DIPLAY2,
  DIPLAY3,
  DIPLAY4,
  DIPLAY5,
  DIPLAY6,
  DIPLAY7,
  DIPLAY8,
  DIPLAY9,
  SPEAKER_ON,
  SPEAKER_OFF,
  END_OF_TEST
}

/**
 * Permet de tester la SALF BOX
 * Author: Benhmida
 * Version 1
 * Date: 2017-05-30 20:15:00 +0100
 */
class UcTester{
  private salfPiBny: {ref: any};

  /**
   * Constructeur qui affiche l'IHM lorsque la communication est établie
   * @param salfPiBny Liaison avec la SALF BOX
   */
  constructor(salfPiBny: any)
  {
    this.salfPiBny = salfPiBny;
    if(this.salfPiBny.ref.connected){
      document.getElementById('loginPanel').style.display = 'none';
      document.getElementById('testPanel').style.display = 'block';
      this.salfPiBny.ref.read.bind(this)(this.onReceive);
    }
    else{
      setTimeout(this.constructor.bind(this, salfPiBny), 1000);
    }
  }

  /**
   * Démarre le test selon l'élément sélectionné
   * @param value L'identifiant de l'élément à tester
   */
  public onClick(value : BoxElementTest) : void
  {
    // envoyer au pi la valeur correspondante
    this.salfPiBny.ref.write(value.toString());
  }

  /**
   * Cache ou affiche les images de l'IHM
   * @param divId L'identifiant de l'élément à cache ou affiche
   * @param showDiv Variable qui deffini si on doit cache ou affiche une image
   */
  private manageDivDisplay(divId : string, showDiv : boolean) : void
  {
    if(showDiv){
      document.getElementById(divId + '_on').style.display = 'block';
      document.getElementById(divId + '_off').style.display = 'none';
    }
    else{
      document.getElementById(divId + '_on').style.display = 'none';
      document.getElementById(divId + '_off').style.display = 'block';
    }
  }

  /**
   * Cache ou affiche les images des Digits de l'IHM
   * @param divId L'identifiant de l'élément à afficher
   */
  private manageDigitsDisplay(divId : string) : void
  {
      this.hideAllDigitsDisplays();
      document.getElementById(divId).style.display = 'block';
  }

  /**
   * Cache toutes les images des Digits
   */
  private hideAllDigitsDisplays() : void
  {
    document.getElementById('display_off').style.display = 'none';
    for(var i = 0; i <=9 ; i++){
      document.getElementById('display_' + i.toString()).style.display = 'none';
    }
  }

  /**
   * Gestion des trames recues
   * @param data donnée recue
   */
  private onReceive(data : string) : void
  {
    data = data.split('\2')[1];
    data = data.split('\3')[0];

    switch(parseInt(data, 10))
    {
      case PossibleSalfBoxFrames.START_STOP_ON : this.manageDivDisplay('button_start_stop', true); break;
      case PossibleSalfBoxFrames.START_STOP_OFF: this.manageDivDisplay('button_start_stop', false); break;

      case PossibleSalfBoxFrames.PLUS_ON: this.manageDivDisplay('button_plus', true); break;
      case PossibleSalfBoxFrames.PLUS_OFF: this.manageDivDisplay('button_plus', false); break;

      case PossibleSalfBoxFrames.MINUS_ON: this.manageDivDisplay('button_minus', true); break;
      case PossibleSalfBoxFrames.MINUS_OFF: this.manageDivDisplay('button_minus', false); break;

      case PossibleSalfBoxFrames.SEQ_ON: this.manageDivDisplay('button_seq', true); break;
      case PossibleSalfBoxFrames.SEQ_OFF: this.manageDivDisplay('button_seq', false); break;

      case PossibleSalfBoxFrames.TUT_ON: this.manageDivDisplay('button_tut', true); break;
      case PossibleSalfBoxFrames.TUT_OFF: this.manageDivDisplay('button_tut', false); break;

      case PossibleSalfBoxFrames.KLAXON_ON: this.manageDivDisplay('klaxon', true); break;
      case PossibleSalfBoxFrames.KLAXON_OFF: this.manageDivDisplay('klaxon', false); break;

      case PossibleSalfBoxFrames.BOTTOM_LED_ON : this.manageDivDisplay('led_bottom', true); break;
      case PossibleSalfBoxFrames.BOTTOM_LED_OFF : this.manageDivDisplay('led_bottom', false); break;
      case PossibleSalfBoxFrames.MIDDLE_LED_ON : this.manageDivDisplay('led_middle', true); break;
      case PossibleSalfBoxFrames.MIDDLE_LED_OFF : this.manageDivDisplay('led_middle', false); break;
      case PossibleSalfBoxFrames.TOP_LED_ON : this.manageDivDisplay('led_top', true); break;
      case PossibleSalfBoxFrames.TOP_LED_OFF : this.manageDivDisplay('led_top', false); break;
      case PossibleSalfBoxFrames.RED_LED_ON : this.manageDivDisplay('led_red', true); break;
      case PossibleSalfBoxFrames.RED_LED_OFF : this.manageDivDisplay('led_red', false); break;

      case PossibleSalfBoxFrames.DIPLAY0: this.manageDigitsDisplay('display_0'); break;
      case PossibleSalfBoxFrames.DIPLAY1: this.manageDigitsDisplay('display_1'); break;
      case PossibleSalfBoxFrames.DIPLAY2: this.manageDigitsDisplay('display_2'); break;
      case PossibleSalfBoxFrames.DIPLAY3: this.manageDigitsDisplay('display_3'); break;
      case PossibleSalfBoxFrames.DIPLAY4: this.manageDigitsDisplay('display_4'); break;
      case PossibleSalfBoxFrames.DIPLAY5: this.manageDigitsDisplay('display_5'); break;
      case PossibleSalfBoxFrames.DIPLAY6: this.manageDigitsDisplay('display_6'); break;
      case PossibleSalfBoxFrames.DIPLAY7: this.manageDigitsDisplay('display_7'); break;
      case PossibleSalfBoxFrames.DIPLAY8: this.manageDigitsDisplay('display_8'); break;
      case PossibleSalfBoxFrames.DIPLAY9: this.manageDigitsDisplay('display_9'); break;
      case PossibleSalfBoxFrames.DIPLAY_OFF: this.manageDigitsDisplay('display_off'); break;

      case PossibleSalfBoxFrames.SPEAKER_ON: this.manageDivDisplay('speaker', true); break;
      case PossibleSalfBoxFrames.SPEAKER_OFF: this.manageDivDisplay('speaker', false); break;

      case PossibleSalfBoxFrames.END_OF_TEST : alert('FIN DU TEST'); break;

    }
  }
}
