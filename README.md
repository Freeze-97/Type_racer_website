# Projekt
## Utvecklingsmiljö & Verktyg
Operativsystem: Windows 10
IDE: PhpStorm
Git version: 2.23.0.windows.1
Web browser: Google Chrome
## Syfte
Målet med laborationen var att skapa en hemsida där användaren skulle få spela ett spel, typeracer. Spelet testar hur snabb någon kan skriva en text, men även om all inmatning är korrekt. Sidan ska dynamiskt visa vad användaren ska skriva för varje input, och även visa statistik efter varje input. Sidan skulle ha minst 3 olika texter att välja mellan. HTML, Javascript och CSS skulle användas för att skapa hemsidan.
## Genomförande
Html och CSS var de som inte krävde så mycket tid, därför började jag med dessa två delar för att skapa alla element och design för hemsidan, man kan enkelt använda dessa två filer igen för att skapa en egen, liknande hemsida där alla delar finns med. 
Det som tog upp mest tid och som var mer krävande var Javascript eftersom det är här all dynamisk funktion finns. Först behövdes eventlisteners för att kunna välja text, sedan för input där den skulle läsa in, visa statistik, samt rensa inputboxen efter mellanslag. Allt detta gjordes med oilka evenlisteners. 
Det jag fick störst problem med var faktiskt <span> som skulle finnas mellan varje tecken, jag fick googla runt en hel del flr att hitaa olika lösningar på hur man "skickar" element till HTML-delen via javascript. Till slut valde jag att använda mig an enkla for-loops för att kunna få med <span>, via document där man kommer åt HTML-filen.
## Diskussion
Programmet fungerar som det är tänkt, alla komponenter finns med och användaren kommer enkelt kunna förstå vad den kan och ska göra för att starta spelet. Det som kan ifrågasättas är hur jag har valt att skriva Javascript koden. Den är funktionsbaserad men jag använde mig av globala variabler som inte heller var konstanter. Jag använde mig av addListener i en funktion som kan anropas flera gånger vilket kan förstöra koden. Det är något som defenitivt kan fixas för att göra koden effektivare, och enklare att förstå för andra läsare.
Jag tycker ändå att det var ett rimligt projekt som inte alls var för stort, den var enkel att förstå och man fick mycket bra hjälp i beskrivningen med hur man skulle kunna ta sig an de olika momenten. Det jag lärde mig var för det mesta Javascript och hur man använda dess funktioner för att göra en hemsida livlig och dynamisk. HTML och CSS var mest repition från tidigare labbar men dessa två bitar är inte like komplicerade. 









    