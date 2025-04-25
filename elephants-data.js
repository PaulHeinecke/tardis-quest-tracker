const elephantsData = [  
  // Set 1: "Elefanten der Elemente"  
  {  
    id: 1,  
    name: "Ember",  
    set: "Elefanten der Elemente",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Ember ist immer voller Energie! Seine leuchtend roten Muster erinnern an tanzende Flammen, und er ist bekannt für seine Begeisterung beim Verstecken-Spielen.",  
    discovered: false,  
    image: "1 Ember.png"  
  },  
  {  
    id: 2,  
    name: "Marina",  
    set: "Elefanten der Elemente",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Marina liebt es, an Wasserquellen zu verweilen. Die wellenförmigen Muster auf seinem Körper schimmern in verschiedenen Blautönen. Er ist sehr ruhig und geduldig.",  
    discovered: false,  
    image: "2 Marina.png"  
  },  
  {  
    id: 3,  
    name: "Terra",  
    set: "Elefanten der Elemente",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Terra trägt kleine Pflanzen und Blätter auf seinem Rücken. Er ist sehr bodenständig und versteckt sich gerne zwischen Büschen und in Gärten.",  
    discovered: false,  
    image: "3 Terra.png"  
  },  
  {  
    id: 4,  
    name: "Wölkchen",  
    set: "Elefanten der Elemente",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Wölkchen ist leicht wie eine Feder. Seine wolkenartigen Ohren und das luftige Design lassen ihn fast durchsichtig wirken. Er versteckt sich gerne an hohen Orten.",  
    discovered: false,  
    image: "4 Wölkchen.png"  
  },  
  {  
    id: 5,  
    name: "Nova",  
    set: "Elefanten der Elemente",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Nova verkörpert den Kosmos selbst. Sein Körper scheint mit Sternen und Galaxien gefüllt zu sein, die im Dunkeln sanft leuchten. Er ist der Anführer des Element-Sets.",  
    discovered: false,  
    image: "5 Nova.png"  
  },  
  
  // Set 2: "Historische Elefanten"  
  {  
    id: 6,  
    name: "Amun",  
    set: "Historische Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Amun trägt alte Hieroglyphen auf seinem Körper und eine kleine Pyramide auf dem Kopf. Er liebt Rätsel und versteckt sich oft an Orten, die mit Wissen verbunden sind.",  
    discovered: false,  
    image: "6 Amun.png"  
  },  
  {  
    id: 7,  
    name: "Cäsar",  
    set: "Historische Elefanten",  
    difficulty: "Leicht",  
    rarity: "Selten",  
    points: 20,  
    description: "Cäsar trägt eine kleine römische Rüstung und einen roten Umhang. Er ist stolz und majestätisch und versteckt sich gerne an Orten, die Macht repräsentieren.",  
    discovered: false,  
    image: "7 Cäsar.png"  
  },  
  {  
    id: 8,  
    name: "Roland",  
    set: "Historische Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Roland trägt eine niedliche Ritterrüstung und ein kleines Schild. Er ist mutig und loyal und versteckt sich gerne in der Nähe von alten Gemäuern.",  
    discovered: false,  
    image: "8 Roland.png"  
  },  
  {  
    id: 9,  
    name: "Leonardo",  
    set: "Historische Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Leonardo trägt eine Malermütze und hält einen kleinen Pinsel. Er hat ein gutes Auge für Schönheit und versteckt sich gerne in der Nähe von Kunstwerken.",  
    discovered: false,  
    image: "9 Leonardo.png"  
  },  
  {  
    id: 10,  
    name: "Edison",  
    set: "Historische Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Edison besteht aus bronzenen und kupfernen Teilen mit kleinen Zahnrädern, die sich tatsächlich drehen können. Er ist komplex und mysteriös und versteckt sich an Orten mit Maschinen.",  
    discovered: false,  
    image: "10 Edison.png"  
  },  
  
  // Set 3: "Weltreise-Elefanten"  
  {  
    id: 11,  
    name: "Jabari",  
    set: "Weltreise-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Jabari ist ein naturgetreuer, kleiner afrikanischer Elefant mit großen Ohren. Er ist freundlich und direkt und versteckt sich gerne an sonnigen, warmen Plätzen.",  
    discovered: false,  
    image: "11 Jabari.png"  
  },  
  {  
    id: 12,  
    name: "Indra",  
    set: "Weltreise-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Indra trägt bunte Tücher und festliche Verzierungen. Er ist farbenfroh und fröhlich und versteckt sich gerne an Orten mit viel Aktivität und Leben.",  
    discovered: false,  
    image: "12 Indra.png"  
  },  
  {  
    id: 13,  
    name: "Nora",  
    set: "Weltreise-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Nora scheint aus Eis zu bestehen, mit frostigen Mustern und kristallinen Strukturen. Er liebt die Kälte und versteckt sich an kühlen, schattigen Orten.",  
    discovered: false,  
    image: "13 Nora.png"  
  },  
  {  
    id: 14,  
    name: "Maya",  
    set: "Weltreise-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Maya ist perfekt getarnt mit Dschungelmustern und kleinen Lianen. Er ist scheu und zurückhaltend und meisterhaft im Verstecken zwischen Pflanzen.",  
    discovered: false,  
    image: "14 Maya.png"  
  },  
  {  
    id: 15,  
    name: "Cosmo",  
    set: "Weltreise-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Cosmo trägt ein Galaxienmuster mit Sternen und Nebeln. Er scheint mit jedem Blickwinkel anders auszusehen und versteckt sich an Orten, die mit Wissenschaft und Entdeckungen verbunden sind.",  
    discovered: false,  
    image: "15 Cosmo.png"  
  },  
  
  // Set 4: "Fantasy-Elefanten"  
  {  
    id: 16,  
    name: "Arthur",  
    set: "Fantasy-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Arthur trägt eine silberne Ritterrüstung und ein kleines Schild. Er ist tapfer und beschützend und steht oft an gut sichtbaren, aber symbolisch wichtigen Orten.",  
    discovered: false,  
    image: "16 Arthur.png"  
  },  
  {  
    id: 17,  
    name: "Merlin",  
    set: "Fantasy-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Selten",  
    points: 20,  
    description: "Merlin trägt einen blauen Zaubererhut mit Sternen und hält einen kleinen Zauberstab. Um ihn herum scheinen kleine magische Funken zu tanzen.",  
    discovered: false,  
    image: "17 Merlin.png"  
  },  
  {  
    id: 18,  
    name: "Draco",  
    set: "Fantasy-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Draco hat kleine Drachenflügel und schuppige Hautpartien. Aus seinem Rüssel kommt manchmal ein kleiner \"Feuerhauch\" in Form eines roten Bandes.",  
    discovered: false,  
    image: "18 Draco.png"  
  },  
  {  
    id: 19,  
    name: "Aria",  
    set: "Fantasy-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Glitzerflink hat zarte, durchscheinende Schmetterlingsflügel und ist mit kleinen Blumen geschmückt. Um sie herum schwebt ein Hauch von glitzerndem Feenstaub.",  
    discovered: false,  
    image: "19 Aria.png"  
  },  
  {  
    id: 20,  
    name: "Luna",  
    set: "Fantasy-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Luna hat ein goldenes Horn auf der Stirn und eine bunte Mähne zwischen den Ohren. Seine Haut schimmert in sanften Pastellfarben, die sich je nach Licht zu ändern scheinen.",  
    discovered: false,  
    image: "20 Luna.png"  
  },  
  
  // Set 5: "Pop-Kultur-Elefanten"  
  {  
    id: 21,  
    name: "Mr. Fantastic",  
    set: "Pop-Kultur-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Mr. Fantastic trägt ein rotes Cape und hat ein kleines Superhelden-Symbol auf der Brust. Er steht immer in heroischen Posen und ist bereit, zu helfen.",  
    discovered: false,  
    image: "21 Mr. Fantastic.png"  
  },  
  {  
    id: 22,  
    name: "Neo",  
    set: "Pop-Kultur-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Neo hat ein futuristisches Design mit glatten Paneelen und leuchtenden Linien. Sein Rüssel könnte ein High-Tech-Werkzeug oder ein Laserpointer sein.",  
    discovered: false,  
    image: "22 Neo.png"  
  },  
  {  
    id: 23,  
    name: "Melodie",  
    set: "Pop-Kultur-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Melodie trägt Kopfhörer und hat sehr viele gelbe Locken. Ihr Körper ist mit Musiknoten verziert, und sie wiegt sich immer leicht, als würde sie einer unhörbaren Melodie lauschen.",  
    discovered: false,  
    image: "23 Melodie.png"  
  },  
  {  
    id: 24,  
    name: "Oscar",  
    set: "Pop-Kultur-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Oscar trägt eine Regisseursmütze und hält eine kleine Filmklappe. Sein Körper ist mit golden wie eine Oscar-Figur verziert, und er posiert gerne dramatisch.",  
    discovered: false,  
    image: "24 Oscar.png"  
  },  
  {  
    id: 25,  
    name: "Flori",  
    set: "Pop-Kultur-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Flori leuchtet in bunten Neonfarben wie eine Gaming-Tastatur. Er trägt ein Gaming-Headset und hält einen Controller. Über seinen Körper laufen kleine pixelige Muster wie aus alten Videospielen.",  
    discovered: false,  
    image: "25 Flori.png"  
  },  
  
  // Berufs-Elefanten  
  {  
    id: 26,  
    name: "Henry",  
    set: "Berufs-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Henry trägt eine kleine Bäckermütze und hat einen Mehlklecks auf der Nase. Er liebt es, frühmorgens Brot zu backen und verströmt einen Duft von frischen Zimtschnecken.",  
    discovered: false,  
    image: "26 Henry.png"  
  },  
  {  
    id: 27,  
    name: "Olivia",  
    set: "Berufs-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Olivia trägt ein Stethoskop um den Hals und hat eine kleine Arzttasche dabei. Sie kümmert sich gerne um andere und ist bekannt für ihre sanfte Berührung mit dem Rüssel.",  
    discovered: false,  
    image: "27 Olivia.png"  
  },  
  {  
    id: 28,  
    name: "Finn",  
    set: "Berufs-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Selten",  
    points: 20,  
    description: "Finn trägt einen roten Feuerwehrhelm und hält einen kleinen Wasserschlauch. Er ist mutig und eilt immer dorthin, wo Hilfe gebraucht wird.",  
    discovered: false,  
    image: "28 Finn.png"  
  },  
  {  
    id: 29,  
    name: "Sophie",  
    set: "Berufs-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Sophie trägt eine kleine Brille und hält ein Buch mit ihrem Rüssel. Sie liebt es, Wissen zu teilen und versteckt sich oft in der Nähe von Büchern.",  
    discovered: false,  
    image: "29 Sophie.png"  
  },  
  {  
    id: 30,  
    name: "Leo",  
    set: "Berufs-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Leo trägt eine Kochmütze und eine kleine Schürze. Er schwenkt gerne einen Kochlöffel und experimentiert mit neuen Geschmacksrichtungen.",  
    discovered: false,  
    image: "30 Leo.png"  
  },  
  {  
    id: 31,  
    name: "Flora",  
    set: "Berufs-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Flora trägt einen Strohhut und hält eine kleine Gießkanne. Sie hat eine Vorliebe für bunte Blumen und kann manchmal mit einem Fleck Erde auf dem Rüssel gesehen werden.",  
    discovered: false,  
    image: "31 Flora.png"  
  },  
  {  
    id: 32,  
    name: "Sam",  
    set: "Berufs-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Sam trägt eine Polizeimütze und hat ein kleines Abzeichen an seiner Brust. Er achtet immer auf Ordnung und ist sehr pflichtbewusst.",  
    discovered: false,  
    image: "32 Sam.png"  
  },  
  {  
    id: 33,  
    name: "Stella",  
    set: "Berufs-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Stella trägt einen weißen Raumanzug mit einem transparenten Helm. Sie träumt vom Weltraum und den Sternen und schaut oft in den Nachthimmel.",  
    discovered: false,  
    image: "33 Stella.png"  
  },  
  {  
    id: 34,  
    name: "Jack",  
    set: "Berufs-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Jack trägt einen gelben Schutzhelm und hat einen Werkzeuggürtel um die Taille. Er ist kräftig und hilft gerne beim Aufbau und Konstruieren.",  
    discovered: false,  
    image: "34 Jack.png"  
  },  
  {  
    id: 35,  
    name: "Mia",  
    set: "Berufs-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Mia trägt ein mit Farbklecksen verziertes Barett und hält einen Pinsel. Sie sieht die Welt in Farben und Formen und verwandelt alles in Kunst.",  
    discovered: false,  
    image: "35 Mia.png"  
  },  
  {  
    id: 36,  
    name: "Dylan",  
    set: "Berufs-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Dylan trägt eine Taucherbrille und hat eine kleine Sauerstoffflasche auf dem Rücken. Er liebt die Unterwasserwelt und sammelt gerne bunte Muscheln.",  
    discovered: false,  
    image: "36 Dylan.png"  
  },  
  {  
    id: 37,  
    name: "Amelia",  
    set: "Berufs-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Amelia trägt eine Pilotenkappe und einen Schal, der im Wind zu flattern scheint. Sie träumt davon, die Wolken zu durchqueren und neue Orte zu entdecken.",  
    discovered: false,  
    image: "37 Amelia.png"  
  },  
  {  
    id: 38,  
    name: "Albert",  
    set: "Berufs-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Albert trägt eine kleine Laborbrille und hält ein Reagenzglas. Er ist neugierig und experimentierfreudig und sucht immer nach Antworten.",  
    discovered: false,  
    image: "38 Albert.png"  
  },  
  {  
    id: 39,  
    name: "Sheryl",  
    set: "Berufs-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Sheryl trägt einen karierten Hut und hält eine Lupe. Sie ist scharfsinnig und aufmerksam und entgeht ihr kein noch so kleines Detail.",  
    discovered: false,  
    image: "39 Sheryl.png"  
  },  
  {  
    id: 40,  
    name: "Oliver",  
    set: "Berufs-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Oliver trägt eine Postmütze und hat eine kleine Tasche voller Briefe. Er ist zuverlässig und pünktlich und freut sich, gute Nachrichten zu überbringen.",  
    discovered: false,  
    image: "40 Oliver.png"  
  },  
  
  // Hobby-Elefanten  
  {  
    id: 41,  
    name: "Emma",  
    set: "Hobby-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Emma trägt eine Lesebrille und hat immer ein Buch dabei. Sie verliert sich gerne in Geschichten und taucht in fremde Welten ein.",  
    discovered: false,  
    image: "41 Emma.png"  
  },  
  {  
    id: 42,  
    name: "Jean-Luc",  
    set: "Hobby-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Jean-Luc trägt ein Fußballtrikot und balanciert einen Ball auf seinem Rüssel. Er ist sportlich und energiegeladen und immer bereit für ein Spiel.",  
    discovered: false,  
    image: "42 Jean-Luc.png"  
  },  
  {  
    id: 43,  
    name: "Lily",  
    set: "Hobby-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Selten",  
    points: 20,  
    description: "Lily hat einen kleinen Blumentopf auf dem Kopf, aus dem tatsächlich eine Blume wächst. Sie liebt es, Pflanzen zu pflegen und hat einen grünen Rüssel.",  
    discovered: false,  
    image: "43 Lily.png"  
  },  
  {  
    id: 44,  
    name: "Ben",  
    set: "Hobby-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Ben trägt einen Anglerhut und hält eine kleine Angelrute. Er ist geduldig und entspannt und verbringt gerne Zeit am Wasser.",  
    discovered: false,  
    image: "44 Ben.png"  
  },  
  {  
    id: 45,  
    name: "Clara",  
    set: "Hobby-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Clara trägt eine Kamera um den Hals und ein Fotografen-Weste. Sie hat ein Auge für besondere Momente und fängt gerne schöne Erinnerungen ein.",  
    discovered: false,  
    image: "45 Clara.png"  
  },  
  {  
    id: 46,  
    name: "Thomas",  
    set: "Hobby-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Thomas sitzt vor einem winzigen Schachbrett und trägt eine Denkerbrille. Er ist nachdenklich und strategisch und plant immer mehrere Züge voraus.",  
    discovered: false,  
    image: "46 Thomas.png"  
  },  
  {  
    id: 47,  
    name: "Ekatharina",  
    set: "Hobby-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Ekatharina trägt ein rosa Tutu und Ballettschuhe an ihren Füßen. Sie ist anmutig und elegant trotz ihrer Größe und tanzt mit Leichtigkeit.",  
    discovered: false,  
    image: "47 Ekatharina.png"  
  },  
  {  
    id: 48,  
    name: "Tony",  
    set: "Hobby-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Tony steht auf einem Skateboard und trägt einen Helm. Er ist wagemutig und liebt es, neue Tricks auszuprobieren und Hindernisse zu überwinden.",  
    discovered: false,  
    image: "48 Tony.png"  
  },  
  {  
    id: 49,  
    name: "Aria",  
    set: "Hobby-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Aria hält ein kleines Mikrofon und hat Noten, die um sie herum zu schweben scheinen. Ihre Stimme ist melodisch und berührend und bringt Freude zu allen, die zuhören.",  
    discovered: false,  
    image: "49 Aria.png"  
  },  
  {  
    id: 50,  
    name: "Hank",  
    set: "Hobby-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Hank trägt einen Wanderrucksack und Wanderschuhe. Er hat eine kleine Karte dabei und liebt es, neue Pfade zu erkunden und Aussichten zu genießen.",  
    discovered: false,  
    image: "50 Hank.png"  
  },  
  {  
    id: 51,  
    name: "Charlotte",  
    set: "Hobby-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Charlotte hat eine Nähnadel und bunte Fäden dabei. Sie ist kreativ und geschickt und erschafft gerne schöne Dinge mit ihren Stoffen.",  
    discovered: false,  
    image: "51 Charlotte.png"  
  },  
  {  
    id: 52,  
    name: "Maoi",  
    set: "Hobby-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Maoi steht auf einem Surfbrett und trägt eine Sonnenbrille. Er liebt das Meer und die Wellen und strahlt eine entspannte, positive Energie aus.",  
    discovered: false,  
    image: "52 Maoi.png"  
  },  
  {  
    id: 53,  
    name: "Julia",  
    set: "Hobby-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Selten",  
    points: 20,  
    description: "Julia trägt eine Kochschürze und hält einen Kochlöffel. Sie experimentiert gerne mit Zutaten und teilt ihre Kreationen mit Freunden.",  
    discovered: false,  
    image: "53 Julia.png"  
  },  
  {  
    id: 54,  
    name: "Willhelm",  
    set: "Hobby-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Willhelm hat eine kleine Tasche voller verschiedener Sammlerstücke. Er ist ordentlich und genau und kennt die Geschichte jedes einzelnen Objekts in seiner Sammlung.",  
    discovered: false,  
    image: "54 Willhelm.png"  
  },  
  {  
    id: 55,  
    name: "Lita",  
    set: "Hobby-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Lita trägt eine kleine Gitarre auf dem Rücken. Sie ist musikalisch und kreativ und spielt gerne Lieder für ihre Freunde.",  
    discovered: false,  
    image: "55 Lita.png"  
  },  
  
  // Persönlichkeits-Elefanten  
  {  
    id: 56,  
    name: "Leander",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Leander hat einen verträumten Blick und kleine Wolken, die um seinen Kopf schweben. Er hat eine lebhafte Fantasie und verliert sich oft in seinen Gedanken.",  
    discovered: false,  
    image: "56 Leander.png"  
  },  
  {  
    id: 57,  
    name: "Valerie",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Valerie trägt ein kleines Abzeichen für Tapferkeit. Sie steht immer für andere ein und stellt sich jeder Herausforderung mit Entschlossenheit.",  
    discovered: false,  
    image: "57 Valerie.png"  
  },  
  {  
    id: 58,  
    name: "Charlie",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Charlie versteckt sein Gesicht halb hinter seinen großen Ohren. Er ist sanft und freundlich, braucht aber Zeit, um sich zu öffnen und neue Freunde zu finden.",  
    discovered: false,  
    image: "58 Charlie.png"  
  },  
  {  
    id: 59,  
    name: "Sophia",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Sophia trägt eine kleine Brille und hat Falten um die Augen, weiße krause Haare und eine Korbhandtasche. Sie ist ruhig und nachdenklich und teilt ihre Weisheit mit allen, die um Rat fragen.",  
    discovered: false,  
    image: "59 Sophia.png"  
  },  
  {  
    id: 60,  
    name: "Jasper",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Jasper trägt einen Entdeckerhut und hat eine kleine Karte dabei. Er ist neugierig und mutig und immer bereit für das nächste Abenteuer.",  
    discovered: false,  
    image: "60 Jasper.png"  
  },  
  {  
    id: 61,  
    name: "Joy",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Joy trägt eine bunte Blume hinter dem Ohr und lächelt immer. Sie verbreitet Freude und Optimismus, wohin sie auch geht.",  
    discovered: false,  
    image: "61 Joy.png"  
  },  
  {  
    id: 62,  
    name: "Owen",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Owen sitzt in einer meditativen Pose und hat einen ruhigen Ausdruck. Er ist ausgeglichen und geduldig und nimmt sich Zeit für alles, was er tut.",  
    discovered: false,  
    image: "62 Owen.png"  
  },  
  {  
    id: 63,  
    name: "Hannah",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Hannah trägt ein Freundschaftsarmband und bietet jedem ihren Rüssel zum Gruß an. Sie ist offen und warm und findet überall neue Freunde.",  
    discovered: false,  
    image: "63 Hannah.png"  
  },  
  {  
    id: 64,  
    name: "Leo",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Leo hält eine Lupe und untersucht alles ganz genau. Er ist wissbegierig und forschend und entdeckt gerne die Geheimnisse der Welt.",  
    discovered: false,  
    image: "64 Leo.png"  
  },  
  {  
    id: 65,  
    name: "Isabella",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Isabella hat Farbkleckse auf ihrem Körper und hält einen Pinsel. Sie sieht die Welt als Leinwand und findet überall Inspiration für ihre Kreationen.",  
    discovered: false,  
    image: "65 Isabella.png"  
  },  
  {  
    id: 66,  
    name: "Theo",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Theo hat einen fokussierten Blick und eine kleine Ziellinie zu seinen Füßen. Er ist zielstrebig und hartnäckig und gibt niemals auf, bis er sein Ziel erreicht hat.",  
    discovered: false,  
    image: "66 Theo.png"  
  },  
  {  
    id: 67,  
    name: "Rosa",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Selten",  
    points: 20,  
    description: "Rosa hat ein kleines Herz auf ihrer Wange und trägt eine kleine Blume. Sie ist fürsorglich und einfühlsam und kümmert sich immer um andere.",  
    discovered: false,  
    image: "67 Rosa.png"  
  },  
  {  
    id: 68,  
    name: "Harry",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Harry trägt eine bunte Fliege und hat ein verschmitztes Lächeln. Er ist verspielt und witzig und bringt andere gerne zum Lachen.",  
    discovered: false,  
    image: "68 Harry.png"  
  },  
  {  
    id: 69,  
    name: "Blanche",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Blanche ist eine verführerische Elefanten-Dame und bekannt für ihre Flirts und Männergeschichten.",  
    discovered: false,  
    image: "69 Blanche.png"  
  },  
  {  
    id: 70,  
    name: "Liam",  
    set: "Persönlichkeits-Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Liam liegt in einer Hängematte und trägt eine Sonnenbrille. Er ist gelassen und entspannt und genießt die kleinen Dinge des Lebens.",  
    discovered: false,  
    image: "70 Liam.png"  
  },  
  
  // Weitere besondere Elefanten  
  {  
    id: 71,  
    name: "Luna",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Luna scheint von innen zu leuchten und hat glitzernde Sternenmuster auf ihrer Haut. Sie ist geheimnisvoll und zauberhaft und scheint zwischen unserer Welt und einer anderen zu wandeln.",  
    discovered: false,  
    image: "71 Luna.png"  
  },  
  {  
    id: 72,  
    name: "Lincoln",  
    set: "Besondere Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Lincoln trägt einen altmodischen Hut und eine Taschenuhr. Er hat ein würdevolles Auftreten und scheint Geschichten aus vergangenen Zeiten erzählen zu können.",  
    discovered: false,  
    image: "72 Lincoln.png"  
  },  
  {  
    id: 73,  
    name: "Toby",  
    set: "Besondere Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Toby balanciert einen Ball auf seinem Rüssel und hat ein fröhliches Funkeln in den Augen. Er ist energiegeladen und albern und lädt jeden zum Spielen ein.",  
    discovered: false,  
    image: "73 Toby.png"  
  },  
  {  
    id: 74,  
    name: "Willow",  
    set: "Besondere Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Willow hat kleine Pflanzen, die aus ihrem Rücken zu wachsen scheinen. Sie ist sanft und in Harmonie mit der Natur und versteht die Sprache der Pflanzen und Tiere.",  
    discovered: false,  
    image: "74 Willow.png"  
  },  
  {  
    id: 75,  
    name: "Dorothy",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Dorothy ist ein sehr rechthaberischer, sarkastischer Elefant, der gern seine Mutter in ein Heim stecken würde. Sie ist aber herzensgut.",  
    discovered: false,  
    image: "75 Dorothy.png"  
  },  
  {  
    id: 76,  
    name: "Raven",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Raven trägt einen dunklen Umhang und hat geheimnisvolle Symbole auf seinem Körper. Er ist rätselhaft und tiefgründig und scheint Geheimnisse zu kennen, die andere nicht verstehen.",  
    discovered: false,  
    image: "76 Raven.png"  
  },  
  {  
    id: 77,  
    name: "Mason",  
    set: "Besondere Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Mason trägt einen Werkzeuggürtel und hält einen kleinen Hammer. Er ist geschickt und praktisch veranlagt und kann fast alles reparieren oder bauen.",  
    discovered: false,  
    image: "77 Mason.png"  
  },  
  {  
    id: 78,  
    name: "Victoria",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Victoria trägt eine kleine Perlenkette und hat eine anmutige Haltung. Sie ist stilvoll und kultiviert und bewegt sich mit großer Würde.",  
    discovered: false,  
    image: "78 Victoria.png"  
  },  
  {  
    id: 79,  
    name: "Marco",  
    set: "Besondere Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Marco trägt einen Kompass und hat eine kleine Karte. Er ist abenteuerlustig und wissbegierig und immer bereit, unbekannte Gebiete zu erforschen.",  
    discovered: false,  
    image: "79 Marco.png"  
  },  
  {  
    id: 80,  
    name: "Diana",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Diana trägt ein kleines Schild und hat eine wachsame Haltung. Sie ist stark und mutig und beschützt immer diejenigen, die ihr am Herzen liegen.",  
    discovered: false,  
    image: "80 Diana.png"  
  },  
  {  
    id: 81,  
    name: "Elliot",  
    set: "Besondere Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Elliot schaut zu den Sternen und hat einen verträumten Ausdruck. Er hat eine lebhafte Fantasie und sieht Möglichkeiten, die andere übersehen.",  
    discovered: false,  
    image: "81 Elliot.png"  
  },  
  {  
    id: 82,  
    name: "Ivy",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Ivy trägt ein Bündel Heilkräuter und hat ein sanftes Lächeln. Sie ist fürsorglich und mitfühlend und weiß, wie man kleine Wunden heilt.",  
    discovered: false,  
    image: "82 Ivy.png"  
  },  
  {  
    id: 83,  
    name: "Gus",  
    set: "Besondere Elefanten",  
    difficulty: "Leicht",  
    rarity: "Selten",  
    points: 20,  
    description: "Gus hat einen Ölfleck auf der Stirn und trägt einen Schraubenschlüssel. Er ist praktisch veranlagt und kann alles mit Motoren zum Laufen bringen.",  
    discovered: false,  
    image: "83 Gus.png"  
  },  
  {  
    id: 84,  
    name: "Zoe",  
    set: "Besondere Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Zoe hat einen bunten Rock und steht auf ihren Hinterfüßen. Sie ist rhythmisch und ausdrucksstark und tanzt, wann immer sie Musik hört.",  
    discovered: false,  
    image: "84 Zoe.png"  
  },  
  {  
    id: 85,  
    name: "Platon",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Platon trägt ein kleines Buch und hat einen nachdenklichen Ausdruck. Er ist weise und reflektiert und stellt die großen Fragen des Lebens.",  
    discovered: false,  
    image: "85 Platon.png"  
  },  
  {  
    id: 86,  
    name: "Othto",  
    set: "Besondere Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Othto trägt ein Stirnband und Schweißbänder. Er ist energiegeladen und fit und liebt jede Art von körperlicher Aktivität und Herausforderung.",  
    discovered: false,  
    image: "86 Othto.png"  
  },  
  {  
    id: 87,  
    name: "James",  
    set: "Besondere Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "James trägt eine Fliege und verneigt sich leicht zur Begrüßung. Er ist wohlerzogen und respektvoll und hat immer perfekte Manieren.",  
    discovered: false,  
    image: "87 James.png"  
  },  
  {  
    id: 88,  
    name: "Selene",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Selene hat ein Muster aus Monden und Sternen auf ihrem Körper. Sie ist intuitiv und einfühlsam und scheint in die Herzen anderer sehen zu können.",  
    discovered: false,  
    image: "88 Selene.png"  
  },  
  {  
    id: 89,  
    name: "Ed",  
    set: "Besondere Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Ed trägt eine Mütze und spielt eine kleine Mundharmonika. Er ist kreativ und ausdrucksstark und teilt seine Musik mit jedem, der zuhört.",  
    discovered: false,  
    image: "89 Ed.png"  
  },  
  {  
    id: 90,  
    name: "Cecilia",  
    set: "Besondere Elefanten",  
    difficulty: "Leicht",  
    rarity: "Selten",  
    points: 20,  
    description: "Cecilia trägt eine kleine Armbanduhr und scheint immer in Eile zu sein. Sie ist zuverlässig und organisiert und kommt nie zu spät.",  
    discovered: false,  
    image: "90 Cecilia.png"  
  },  
  {  
    id: 91,  
    name: "Felix",  
    set: "Besondere Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Felix hat ein strahlendes Lächeln und eine fröhliche Haltung. Er ist positiv und optimistisch und sieht in allem das Gute.",  
    discovered: false,  
    image: "91 Felix.png"  
  },  
  {  
    id: 92,  
    name: "Jodie",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Jodie hat kleine Zahnräder und Drähte um sich herum und hält einen Bauplan. Sie ist innovativ und ideenreich und erfindet immer neue und überraschende Dinge.",  
    discovered: false,  
    image: "92 Jodie.png"  
  },  
  {  
    id: 93,  
    name: "Tom",  
    set: "Besondere Elefanten",  
    difficulty: "Mittel",  
    rarity: "Gewöhnlich",  
    points: 20,  
    description: "Tom trägt ein schwarz-weiß gestreiftes Trikot und hat eine kleine Pfeife. Er ist fair und gerecht und sorgt dafür, dass die Regeln eingehalten werden.",  
    discovered: false,  
    image: "93 Tom.png"  
  },  
  {  
    id: 94,  
    name: "Sicilia",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Sicilia hat ein aufgeschlagenes Buch, aus dem kleine Figuren zu steigen scheinen. Sie ist fantasievoll und eloquent und verzaubert andere mit ihren Geschichten.",  
    discovered: false,  
    image: "94 Sicilia.png"  
  },  
  {  
    id: 95,  
    name: "Hermann",  
    set: "Besondere Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Hermann trägt eine Lupenbrille und hält ein kleines Zahnrad. Er ist präzise und geduldig und versteht die Komplexität der Zeit.",  
    discovered: false,  
    image: "95 Hermann.png"  
  },  
  {  
    id: 96,  
    name: "Annalena",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Selten",  
    points: 40,  
    description: "Annalena trägt ein elegantes Halstuch und hat eine offene, einladende Haltung. Sie ist vermittelnd und verständnisvoll und bringt verschiedene Perspektiven zusammen.",  
    discovered: false,  
    image: "96 Annalena.png"  
  },  
  {  
    id: 97,  
    name: "Darwin",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Darwin trägt eine Expeditionsausrüstung und hält ein Notizbuch. Er ist methodisch und beobachtend und entdeckt gerne die Geheimnisse der Natur.",  
    discovered: false,  
    image: "97 Darwin.png"  
  },  
  {  
    id: 98,  
    name: "Penny",  
    set: "Besondere Elefanten",  
    difficulty: "Leicht",  
    rarity: "Gewöhnlich",  
    points: 10,  
    description: "Penny trägt eine Posttasche und einen kleinen Hut. Sie ist freundlich und zuverlässig und bringt gerne gute Nachrichten zu allen.",  
    discovered: false,  
    image: "98 Penny.png"  
  },  
  {  
    id: 99,  
    name: "Cornelius",  
    set: "Besondere Elefanten",  
    difficulty: "Mittel",  
    rarity: "Selten",  
    points: 30,  
    description: "Cornelius trägt eine Lesebrille und hat Bücher, die um ihn herum schweben. Er ist belesen und klug und kennt die Antwort auf fast jede Frage.",  
    discovered: false,  
    image: "99 Cornelius.png"  
  },  
  {  
    id: 100,  
    name: "Mystica",  
    set: "Besondere Elefanten",  
    difficulty: "Schwer",  
    rarity: "Legendär",  
    points: 55,  
    description: "Mystica hat glühende Symbole auf ihrem Körper und einen wissenden Blick. Sie ist rätselhaft und tiefgründig und scheint Dinge zu wissen, die anderen verborgen bleiben.",  
    discovered: false,  
    image: "100 Mystica.png"  
  }  
];  

// Definition der Sets und Boni  
const elephantSets = [  
  {  
    name: "Elefanten der Elemente",  
    elephantIds: [1, 2, 3, 4, 5],  
    completed: false,  
    bonusPoints: 50,  
    description: "Sammle alle fünf Elefanten der Elemente und erhalte einen Bonus von 50 Punkten!"  
  },  
  {  
    name: "Historische Elefanten",  
    elephantIds: [6, 7, 8, 9, 10],  
    completed: false,  
    bonusPoints: 50,  
    description: "Sammle alle fünf historischen Elefanten und erhalte einen Bonus von 50 Punkten!"  
  },  
  {  
    name: "Weltreise-Elefanten",  
    elephantIds: [11, 12, 13, 14, 15],  
    completed: false,  
    bonusPoints: 50,  
    description: "Sammle alle fünf Weltreise-Elefanten und erhalte einen Bonus von 50 Punkten!"  
  },  
  {  
    name: "Fantasy-Elefanten",  
    elephantIds: [16, 17, 18, 19, 20],  
    completed: false,  
    bonusPoints: 50,  
    description: "Sammle alle fünf Fantasy-Elefanten und erhalte einen Bonus von 50 Punkten!"  
  },  
  {  
    name: "Pop-Kultur-Elefanten",  
    elephantIds: [21, 22, 23, 24, 25],  
    completed: false,  
    bonusPoints: 50,  
    description: "Sammle alle fünf Pop-Kultur-Elefanten und erhalte einen Bonus von 50 Punkten!"  
  },  
  {  
    name: "Berufs-Elefanten",  
    elephantIds: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],  
    completed: false,  
    bonusPoints: 100,  
    description: "Sammle alle Berufs-Elefanten und erhalte einen Bonus von 100 Punkten!"  
  },  
  {  
    name: "Hobby-Elefanten",  
    elephantIds: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],  
    completed: false,  
    bonusPoints: 100,  
    description: "Sammle alle Hobby-Elefanten und erhalte einen Bonus von 100 Punkten!"  
  },  
  {  
    name: "Persönlichkeits-Elefanten",  
    elephantIds: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],  
    completed: false,  
    bonusPoints: 100,  
    description: "Sammle alle Persönlichkeits-Elefanten und erhalte einen Bonus von 100 Punkten!"  
  },  
  {  
    name: "Besondere Elefanten",  
    elephantIds: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],  
    completed: false,  
    bonusPoints: 150,  
    description: "Sammle alle besonderen Elefanten und erhalte einen Bonus von 150 Punkten!"  
  }  
];
