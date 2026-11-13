/* ============================================================================
   firebase-config.js
   Live-Quiz zur Probelehrveranstaltung von Dr. Christian Neusser
   Modul Controlling (22B0140), Hochschule Osnabrueck
   ============================================================================

   WAS DIESE DATEI TUT
   -------------------
   Diese Datei stellt die Firebase-Konfiguration als globale Variable
   window.FIREBASE_CONFIG bereit. Die beiden Seiten live-admin.html und
   live-quiz.html lesen diese Variable aus, um sich mit der Realtime Database
   zu verbinden und die Geraete (Beamer und Handys) live zu synchronisieren.

   Solange hier nur die PLATZHALTER stehen, zeigen beide Seiten eine
   freundliche Einrichtungs-Hinweisbox an und stuerzen NICHT ab.

   ----------------------------------------------------------------------------
   EINRICHTUNG IN 5 SCHRITTEN (einmalig, ca. 5 Minuten)
   ----------------------------------------------------------------------------

   SCHRITT 1  Firebase-Projekt anlegen
     - Auf https://firebase.google.com einloggen (Google-Konto).
     - Zur Konsole wechseln und "Projekt hinzufuegen" waehlen.
     - Beliebigen Namen vergeben, z. B. "neusser-livequiz".
     - Google Analytics ist nicht noetig und kann abgewaehlt werden.

   SCHRITT 2  Realtime Database erstellen (Region europe-west1)
     - Im linken Menue "Build" und dann "Realtime Database" oeffnen.
     - "Datenbank erstellen" klicken.
     - Als Standort / Region "europe-west1" (Belgien) waehlen.
     - Beim Startmodus zunaechst "Gesperrter Modus" ist in Ordnung, die
       Regeln werden in Schritt 5 fuer die Veranstaltung angepasst.

   SCHRITT 3  Web-App registrieren
     - In der Projektuebersicht auf das Web-Symbol "</>" klicken
       ("App hinzufuegen", Plattform Web).
     - Spitznamen vergeben, z. B. "livequiz-web". Hosting ist nicht noetig.
     - Firebase zeigt danach ein Objekt "firebaseConfig" mit Werten an.

   SCHRITT 4  config hierher kopieren
     - Die Werte aus dem angezeigten "firebaseConfig" in das Objekt unten
       eintragen (alle Platzhalter ersetzen). Wichtig ist, dass auch der
       Eintrag "databaseURL" gesetzt ist. Wird er nicht automatisch
       angezeigt, findet man ihn in der Realtime Database oben als URL,
       z. B. https://neusser-livequiz-default-rtdb.europe-west1.firebasedatabase.app

   SCHRITT 5  Datenbank-Regeln fuer das Event temporaer freigeben
     - In der Realtime Database den Reiter "Regeln" oeffnen und fuer die
       Dauer der Veranstaltung exakt Folgendes eintragen und veroeffentlichen:

         {
           "rules": {
             ".read": true,
             ".write": true
           }
         }

     - HINWEIS: Diese offenen Regeln gelten NUR fuer die Veranstaltung.
       Sie erlauben jedem mit der Datenbank-URL Lese- und Schreibzugriff.
       Direkt nach der Probelehrveranstaltung die Regeln wieder auf einen
       gesperrten Stand zuruecksetzen (z. B. ".read": false, ".write": false)
       oder die Datenbank-Daten loeschen.

   ----------------------------------------------------------------------------
   AB HIER: PLATZHALTER ERSETZEN
   ----------------------------------------------------------------------------
   Alle Werte, die mit "HIER_" beginnen, sind PLATZHALTER und muessen durch
   die echten Werte aus Schritt 4 ersetzt werden. Wird einer dieser
   Platzhalter nicht ersetzt, bleibt die Einrichtungs-Hinweisbox sichtbar.
============================================================================ */

window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyA5NGTuVJS03zx5qAzdWLpayHa_aD3uJVk",
  authDomain:        "osnabrueck-quiz.firebaseapp.com",
  databaseURL:       "https://osnabrueck-quiz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "osnabrueck-quiz",
  storageBucket:     "osnabrueck-quiz.firebasestorage.app",
  messagingSenderId: "657293657830",
  appId:             "1:657293657830:web:7e30c1a02a28fc066ddd27"
};
