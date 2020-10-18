(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{352:function(e,n,t){e.exports=t.p+"assets/img/create.dbd558d2.png"},353:function(e,n,t){e.exports=t.p+"assets/img/ifttt_aanmaken.5e79eedc.png"},354:function(e,n,t){e.exports=t.p+"assets/img/if_this.41c49383.png"},355:function(e,n,t){e.exports=t.p+"assets/img/if.2ecf1414.png"},356:function(e,n,t){e.exports=t.p+"assets/img/then.442d8e14.png"},357:function(e,n,t){e.exports=t.p+"assets/img/prob_local.5553c436.png"},358:function(e,n,t){e.exports=t.p+"assets/img/prob_0ip.6f4c5791.png"},375:function(e,n,t){"use strict";t.r(n);var a=t(42),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project"}},[e._v("#")]),e._v(" Project")]),e._v(" "),a("p",[e._v("Tutorial: "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=g9Y559Y7Vl8",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.youtube.com/watch?v=g9Y559Y7Vl8"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v('Voor mijn project heb ik gekozen om de Google Nest Mini aan te sluiten op de Raspberry Pi om een home automation te simuleren. Ikzelf heb thuis geen home automation producten, daarom ga ik mijn Sense HAT gebruiken als lamp. Door het commando "Hey Google, Turn my lamp on" te zeggen zou de Sense HAT moeten oplichten.')]),e._v(" "),a("h2",{attrs:{id:"benodigdheden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benodigdheden"}},[e._v("#")]),e._v(" Benodigdheden")]),e._v(" "),a("ul",[a("li",[e._v("Google Nest Mini (of andere Google Assistant)")]),e._v(" "),a("li",[e._v("Raspberry Pi")]),e._v(" "),a("li",[e._v("Sense HAT")]),e._v(" "),a("li",[e._v("Voedingskabel")]),e._v(" "),a("li",[e._v("HDMI-kabel")]),e._v(" "),a("li",[e._v("SD-kaart met Raspbian")]),e._v(" "),a("li",[e._v("Toetsenbord")]),e._v(" "),a("li",[e._v("Muis")]),e._v(" "),a("li",[e._v("Google account")]),e._v(" "),a("li",[e._v("IFTTT account")])]),e._v(" "),a("h2",{attrs:{id:"stappenplan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stappenplan"}},[e._v("#")]),e._v(" Stappenplan")]),e._v(" "),a("p",[e._v("Voordat je begint met de Raspberry Pi moet je ervoor zorgen dat de Google Assistant in het stopcontact zit en helemaal in orde staat om hem te gebruiken. Er zit een instructieboekje bij de Google Assistant waar je al die informatie kan vinden. Wanneer de Google Assistant volledig gebruiksklaar is gaan we naar de website van "),a("a",{attrs:{href:"https://ifttt.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("IFTTT"),a("OutboundLink")],1),e._v(". Op deze website vind je verschillende toepassingen waarbij je de Google Assistant kan gebruiken. IFTTT staat voor If This Then That. Wij gaan zelf een IFTTT aanmaken, hiervoor moet je eerst een account aanmaken en ervoor zorgen dat je Google Account gekoppeld is aan je IFTTT account. Als dit allemaal in orde is kunnen we zelf de IFTTT gaan aanmaken, dit kan je doen via de create knop in het menu.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(352),alt:"Create"}})]),e._v(" "),a("p",[e._v("Als je op de create knop geklikt hebt kom je op het scherm om zelf de If This Then That aan te maken. We gaan eerst de If This en dan pas de Then That aanmaken.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(353),alt:"IFTTT aanmaken"}})]),e._v(" "),a("p",[e._v('Voor de If This kiezen we als service de Google Assistant. Je hebt enkele opties wat je kiest als trigger, je kan kiezen voor een simpele zin maar het kan ook een zin met een nummer in zijn, hierbij kies je volledig zelf. Ik kies voor de simpele zin aangezien ik voor het trigger "Hey Google, turn my lamp on" kies.')]),e._v(" "),a("p",[a("img",{attrs:{src:t(354),alt:"If This"}})]),e._v(" "),a("p",[e._v('Je kiest welk zinnetje je gaat gebruiken als trigger (in mijn geval "Turn my lamp on"). Je kan er nog een verkorte versie bijzetten (bijvoorbeeld "Lamp on") maar dit is optioneel dus is niet verplicht. Als je drie verschillende opties wilt kan je er nog een derde trigger bijzetten. Daarna kies je of de Google Assistant iets terug zegt, dit is handig aangezien je dan zeker weet of ze het verstaan heeft. Hierbij heb ik gekozen voor "Turning lamp on", simpel maar hierbij ben je zeker dat ze het verstaan heeft. Op het laatste kan je nog een taal kiezen aangezien er geen Nederlands bij zit kies is voor Engels. Als alles ingevuld is kan je het trigger aanmaken en kom je terug op het IFTTT aanmaken scherm. Je kan dit zien aan het balkje want het trigger is daar in toegevoegd (Zie voorbeeld hieronder).')]),e._v(" "),a("p",[a("img",{attrs:{src:t(355),alt:"If"}})]),e._v(" "),a("p",[e._v("Na de If This is het tijd om de Then That aan te maken. Voor de Then That hebben we de Raspberry Pi nodig, je zorgt ervoor dat alles werkt en dat je hem kan gebruiken. We gaan een klein Python script schrijven om de Sense HAT te laten op lichten.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("\tfrom flask import Flask\n\tfrom sense_hat import SenseHat\n\n\tapp = Flask(__name__)\n\t\t\n\t@app.route('/', methods=['GET', 'POST'])\n\tdef index():\n\t\tsense = SenseHat()\n\t\tsense.show_message('Lamp on')\n\t\treturn \"Lamp on\"\n\t\t\n\t@app.route('/off', methods=['GET', 'POST'])\n\tdef off():\n\t\tsense = SenseHat()\n\t\tsense.clear()\n\t\treturn \"Lamp off\"\n\n\tif __name__ == \"__main__\":\n\t\tapp.run(host='IP address', port=5000, debug=True)\n")])])]),a("p",[e._v("Bij de app.run moet je enkel bij host nog uw IP address invullen. Door de flask hier bij te voegen kunnen we via het IP address het script aanspreken. We gaan eerst terug naar de "),a("a",{attrs:{href:"https://ifttt.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("IFTTT"),a("OutboundLink")],1),e._v(" website en gaan daar de Then That verder aanvullen. Je zoekt de service Webhooks, je hebt enkel de optie om een Web Request te kiezen dus doen we dit ook.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(356),alt:"Then"}})]),e._v(" "),a("p",[e._v("Bij de URL vullen we het IP address in die we in de script hebben geschreven. Je kiest de methode, ik kies hierbij voor de post methode. Als content type kiezen we voor text/plain en in de body laten we het leeg. Je maakt de actie aan en zo kom je terug terecht op het IFTTT aanmaken scherm. Je hebt beide ingevuld dus zou het nu moeten werken.")]),e._v(" "),a("p",[e._v('Als je nu tegen je Google Assistant "Hey Google, turn my lamp on" zegt dan zegt zij "Turning lamp on" terug en zou de Sense HAT moeten oplichten.')]),e._v(" "),a("h2",{attrs:{id:"problemen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problemen"}},[e._v("#")]),e._v(" Problemen")]),e._v(" "),a("p",[e._v("In mijn geval was dit niet zo. Ik ben op een paar problemen gestoten.")]),e._v(" "),a("p",[e._v("Eerst had ik een probleem met de Web Request, ik dacht dat ik met een Github Page ook een Web Request kon doen. Ik had dus van mijn script een Github Page gemaakt, achter wat zoekwerk vond ik dat dit dus niet lukte. Hierdoor ben ik flask en het IP address beginnen gebruiken.")]),e._v(" "),a("p",[e._v("Bij mijn eerste poging heb ik gebruik gemaakt van mijn local IP address van mijn Raspberry Pi. Wanneer ik het trigger zei tegen de Google Assistant zei ze het antwoord terug maar de Sense HAT ging niet oplichten. Bij de IFTTT website heb je een activity pagina waarbij je kan zien welke applets gebruikt worden maar ook welke fout lopen. Hier zag ik dus dat ik een error kreeg. (Zie foto hieronder)")]),e._v(" "),a("p",[a("img",{attrs:{src:t(357),alt:"Probleem local IP"}})]),e._v(" "),a("p",[e._v('Door wat opzoek werk heb ik gevonden dat het local IP address niet aanspreekbaar is vanop de Google Assistant (terwijl ik het wel kon aanspreken op mijn computer en gsm). Op het internet gaven ze de oplossing om mijn external IP address te gebruiken, deze kan je vinden door gewoon in Google "What\'s my ip" in te geven. Ik heb dus mijn local IP address vervangen door mijn external IP address maar hierbij gaf mijn script een fout.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("\tOSError: [Errno 99] Cannot assign requested address\n")])])]),a("p",[e._v("Door deze error ben ik weer op het internet beginnen zoeken wat het precies betekende en hoe ik het kon oplossen. Iemand gaf de tip om 0.0.0.0 als IP address te gebruiken. Ik heb dit dan ook gedaan en mijn script werkte weer. Toen ik het trigger zei tegen de Google Assistant antwoorde ze maar de Sense HAT licht weer niet op. Ik ben dan weer in de activity pagina gaan kijken en zag deze melding.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(358),alt:"Probleem 0.0.0.0 IP"}})]),e._v(" "),a("p",[e._v("Spijtig genoeg heb ik de problemen niet kunnen oplossen en werkt het dus niet. Als ik het local IP address gebruik en het gewoon aanspreek via mijn computer werkt het wel, dus enkel de uitwerking met de Google Assistant werkt niet.")])])}),[],!1,null,null,null);n.default=i.exports}}]);