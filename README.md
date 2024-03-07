# johan-skoog_FU-JS23_individuell

AirBeanCoffe
EXAMINATION

GODKÄNT
-Todo list, planera kodningen: -*(Genomgående)*Pseudokoda samtliga komponenter
-Skapa ett GitHub repo Main efter namnKonvention.
-Skapa Filstruktur av komponenter, routing, Store och API (+ Använd Zustand)
-Skapa HTML Struktur för samtliga komponenter, merga till main
-Skapa Sass filer utefter Figma designen och koppla ihop, ladda upp till main.
-Skapa en ny Github branch för att kunna arbeteta med logiken separat.
-Skapa Routing mellan komponenter i min branch. Merga till main
-Skapa en Store för Usestate och implementera en Counter från Meny(+) till varukorgen. Varukorgen ska kunna ändra Usestate i varukorgen med pilarna från varje produkt. Nollställning från Cart knappen.(vill du fortsätta med din order?, tryck på din varukorg! samma vy som NAV) Merga till main.
-I /Cart skapa logiken för summering av totalen samt nollställning av varukorg och total --> Routa till /Status
-Skapa logik för att button på /Cart ska rendera ett automatiskt ordernummer och ETA(estimerad tid).

VÄL GODKÄNT
-Skapa fetch API för Menyn. Bryt ner Objektet och skicka som props för menyn.
-Skapa logik från /Meny --> /Cart och skicka props imellan för att uppdatera priset på /Cart sidan.
-Skapa logik från /Cart --> /Profile (om inloggad)
-Skapa logik för inloggningssidan på /Profile. Spara namn och e-post till localstorage(?). Funktionalitet i knappen som ser om GRPR är icheckat, annars Påminelse 'OOps! Har du läst och fyllt i GDPR?' med tillbaka knapp (X).

Förväntan
\*\*\*-Implementera TS i projektet.

---

Filstruktur
-Symboler (från figma)
-Store (Komponent för UseState)
-Routing (huvudkomponent för routing)
-Api (komponent för UseEffekt) (destrukta Objectet). Skapa mappar, Get och Post!
|Get - Get Api Beans - Get Api OrderNr - Get Api OrderHistory - Get Api Status
|Post - Post Api Order - Post Api SignUp - Post Api LoggIn
|-/GdprValidate
|-/OrderValidate
-/Landingpage + scss
-/NAV + scss
-/Meny + scss
-/About + scss
-/Cart + scss
-/Status + scss
-/InLogg + scss
-/Profile + scss

---

LÖRDAG 2/3

1. -Skapa GitHub Repo enligt konvention.
2. -Bygg filstrukturen enligt ovan med sass-filer.
3. - - Pseudokoda & Skapa upp HTML Strukturen för samtliga filer:
       HTML/Sass
       -/Body?
       /-Wrapper
       -/Header
       /-Header
       -/Footer
       /-Footer
       -/Button
       /-Button
       -/h1
       /-Header.scss
       -/MainSection
       /-Main.scss
       -/Img src
       /Image.css
       -/
4. -Ladda ner symboler, bilder etc från figma och börja med stylingen.
5. -Se video om Sass, Använd mixins och Variabler och styla ALLA komponenter:
   -/Landing
   HTML
   -section ()
   -BodyWrapper
   -Symbol
   -h1 -<p>
   -/Nav
   HTML
   --Bodywrapper
   -Button
   -Section
   -H2
   -Underline?
   -/Menu
   Header
   -DropdownButton
6. -När stylingen är färdig, ladda upp i github main.

---

SÖNDAG 3/3

1. Gå in på branche och Clona från main
   -/About
   -/Cart
   -/Status
   -/CreateProfile
   -/Profile
   |-/GdprValidate
   |-/OrderValidate
   \*\*BEM Convention

---

MÅNDAG 4/3

1. -Skapa en branch och Clona ner från main.
2. -Kolla Video på React-Router-Dom och läs på React Docs + Pseudokoda(?).
3. -Koppla ihop samtliga av komponenterna med Routing.
4. -Merga fungerande Routing till main

---

TISDAG 5/3

1. -Gå in på en ny branch och clona ner från main. + installera Zustand.
2. -Kolla Video på UseState Counter, Zustand och läs från React Docs. + Pseudokoda.
3. -Bygg funktionalitet med UseState i Store komponenten (globalt- Zustand).
4. -Implementera Hooken från /Meny till varukorgen.
5. -Implementera Hooken från /Varukorg till symbol varukorg
6. -Lägg in nollställning från button i Varukorgen.
7. -Merga med MainBranch.

---

ONSDAG 6/3

1. -Gå in i Branch och klona ner från Main.
2. -Pseudokoda --> Skapa Logiken för att uppdatera summan från /Cart och /Meny. Inkludera API call!
3. -Pseudokoda --> Skapa nollställningen av summan vid tryck på button i /Cart.
4. -Pseudokoda --> På Button; Skapa logik för ett random ETA och Ordernummer. Inkludera API call!
5. -Merga med Main. ---> GODKÄNT ÄR UPPNÅTT!

---

TORSDAG 7/3

1. - Gå in i Branch, clona från Main.
2. - Se video om fetch API och pseudokoda.
3. - Skapa en fetch i API mappen för Meny api/beans/order {'https://airbean-api-xjlcn.ondigitalocean.app/api/docs/#/[object%20Object]/get_api_beans_order_status__orderNr_'}
     id
     title
     desc
     price
4. Passera dessa som props till /Meny
5. Mercha med main

---

FREDAG 8/3

1. - Gå in i branch, Cloona från main.
2. - Bygg logik för button i /Card att skicka props till /Profile genom api/user/history
     -Ordernr -{date}
     -Total ordersumma -{sum}
3. -Merga med main.

---

LÖRDAG 9/3 --> -Skapa logik från /Cart --> /Profile (om inloggad)

1. - Clona i Branch från main.
2. - Function för Button i /Cart --> Kolla true/false status genom Api/user/status
3. - Mercha med Main.

---

SÖNDAG 10/3
1.Skapa logik för inloggningssidan på /Profile. Spara namn och e-post till localstorage(?). 2. Funktionalitet i knappen som ser om GRPR är icheckat, - annars Påminelse 'OOps! Har du läst och fyllt i GDPR?' ? : - Button (X).

---

MÅNDAG 11/3 --> Implementera TS i projektet.

1. -Clona i Branch Main
2. \*TS Verifiering av /Symboler?
3. \*TS Verifiering i userStore
4. Spara i Branch

---

TISDAG 12/3

1. \*TS Routing --> Interface?
2. \*TS API --> Interface?
3. \*TS verifiering:
   -|-/GdprValidate
   -|-/OrderValidate
4. Spara i Branch

---

ONSDAG 13/3

1. \*TS verifiering:
   -/Landingpage + scss
   -/NAV + scss
   -/Meny + scss
   -/About + scss

---

TORSDAG 14/3

1. \*TS verifiering:
   -/Cart + scss
   -/Status + scss
   -/InLogg + scss
   -/Profile + scss
2. Merga med main!
3. Skicka in!

---

FREDAG
\*\*\*Code Review!
