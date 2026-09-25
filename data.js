/* ============================================================
   VoyageQuest — Données du programme DEP 5236 (Vente de voyages)
   Contenu bâti sur le moteur web PWA (identique à SoudageQuest / ÉlectricitéQuest).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   ⚠️ Les questions (QCM, vrai/faux, association, mises en situation) sont des
   EXEMPLES à VALIDER par les enseignants du programme. Les codes de module et
   les heures sont INDICATIFS (à confirmer avec le référentiel officiel).
   ============================================================ */

const PROGRAM = {
  fr: { title: "Vente de voyages", subtitle: "DEP 5236 — 690 heures (indicatif)" },
  en: { title: "Travel Sales", subtitle: "DVS 5236 — 690 hours (indicative)" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes". */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "mise en situation": scénario + choix multiple. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage. */
const COMPETENCIES = [
 {
  "id": "voy01", "order": 1, "code": "5236-01", "hours": 30,
  "title_fr": "Métier et formation", "title_en": "Trade and Training", "icon": "🧭",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Quel est le rôle principal d'un conseiller ou d'une conseillère en voyages?",
       "en": "What is the main role of a travel counselor?",
       "choices": [
        ch("Conseiller la clientèle et vendre des produits de voyage adaptés à ses besoins", "Advise clients and sell travel products suited to their needs", true),
        ch("Piloter les avions de ligne", "Fly the airliners", false),
        ch("Construire les hôtels des destinations", "Build the hotels at destinations", false),
        ch("Délivrer les passeports", "Issue passports", false)
       ],
       "explFr": "Le conseiller en voyages est un intermédiaire de vente : il analyse les besoins du client, propose des produits (forfaits, vols, hébergements) et effectue les réservations.",
       "explEn": "A travel counselor is a sales intermediary: they assess the client's needs, propose products (packages, flights, lodging) and make the bookings." },
     { "fr": "Dans quel type d'entreprise un conseiller en voyages travaille-t-il le plus souvent?",
       "en": "In what type of business does a travel counselor most often work?",
       "choices": [
        ch("Une agence de voyages", "A travel agency", true),
        ch("Un cabinet comptable", "An accounting firm", false),
        ch("Une usine de fabrication", "A manufacturing plant", false),
        ch("Un cabinet d'avocats", "A law firm", false)
       ],
       "explFr": "La majorité des conseillers exercent en agence de voyages (détaillant), en ligne ou au sein d'un grossiste (voyagiste).",
       "explEn": "Most counselors work in a travel agency (retailer), online, or within a wholesaler (tour operator)." },
     tf("Au Québec, la vente au détail de voyages est encadrée par la Loi sur les agents de voyages et l'Office de la protection du consommateur (OPC).",
        "In Quebec, the retail sale of travel is regulated by the Travel Agents Act and the Office de la protection du consommateur (OPC).", true),
     tf("Un conseiller en voyages n'a besoin d'aucune connaissance en géographie pour exercer son métier.",
        "A travel counselor needs no knowledge of geography to do their job.", false),
     { "fr": "Laquelle de ces qualités est la plus importante pour un conseiller en voyages?",
       "en": "Which of these qualities is most important for a travel counselor?",
       "choices": [
        ch("Le sens du service à la clientèle et l'écoute", "Customer service skills and good listening", true),
        ch("La force physique", "Physical strength", false),
        ch("La capacité à travailler seul sans jamais parler", "The ability to work alone without ever speaking", false),
        ch("Une indifférence aux besoins du client", "Indifference to the client's needs", false)
       ],
       "explFr": "La relation-client est au cœur du métier : écouter, comprendre et proposer une solution adaptée fidélise la clientèle.",
       "explEn": "Client relationships are central to the job: listening, understanding and proposing a suitable solution builds loyalty." }
   ]},
   { "level": 2, "questions": [
     { "fr": "Que signifie l'acronyme « OPC » dans le contexte de la vente de voyages au Québec?",
       "en": "What does the acronym 'OPC' mean in the context of travel sales in Quebec?",
       "choices": [
        ch("Office de la protection du consommateur", "Office de la protection du consommateur (consumer protection office)", true),
        ch("Organisation des pilotes canadiens", "Organization of Canadian Pilots", false),
        ch("Ordre des professionnels du commerce", "Order of Trade Professionals", false),
        ch("Office public des croisières", "Public Cruise Office", false)
       ],
       "explFr": "L'OPC administre la Loi sur les agents de voyages et le Fonds d'indemnisation des clients des agents de voyages (FICAV) au Québec.",
       "explEn": "The OPC administers the Travel Agents Act and the compensation fund (FICAV) for travel agency clients in Quebec." },
     { "fr": "À quoi sert le FICAV (Fonds d'indemnisation des clients des agents de voyages)?",
       "en": "What is the FICAV (travel agency clients' compensation fund) for?",
       "choices": [
        ch("Rembourser un client si un service payé n'est pas fourni (ex. faillite d'un fournisseur)", "Reimburse a client if a paid service isn't provided (e.g. supplier bankruptcy)", true),
        ch("Payer le salaire des conseillers", "Pay the counselors' salaries", false),
        ch("Financer la publicité des agences", "Fund agency advertising", false),
        ch("Offrir des rabais sur les forfaits", "Offer discounts on packages", false)
       ],
       "explFr": "Le FICAV protège le consommateur : il peut être indemnisé lorsqu'un service touristique payé n'est pas rendu, notamment en cas de faillite.",
       "explEn": "The FICAV protects the consumer: they can be compensated when a paid travel service is not delivered, notably in case of bankruptcy." },
     tf("Un conseiller en voyages doit détenir un certificat de l'OPC pour vendre des voyages au public au Québec.",
        "A travel counselor must hold an OPC certificate to sell travel to the public in Quebec.", true),
     match("Associe chaque intervenant du secteur à son rôle.", "Match each industry player to its role.", [
        pair("Voyagiste (grossiste)", "Tour operator (wholesaler)", "Assemble et vend des forfaits aux agences", "Assembles and sells packages to agencies"),
        pair("Agence de détail", "Retail agency", "Vend directement au consommateur", "Sells directly to the consumer"),
        pair("GDS", "GDS", "Système informatique de réservation mondial", "Global computerized reservation system"),
        pair("Réceptif (DMC)", "DMC", "Organise les services à la destination", "Organizes services at the destination")
     ]),
     { "fr": "Quel document officiel décrit les compétences à acquérir dans le programme de formation?",
       "en": "Which official document describes the competencies to be acquired in the training program?",
       "choices": [
        ch("Le programme d'études (référentiel de compétences)", "The study program (competency framework)", true),
        ch("Le passeport de l'élève", "The student's passport", false),
        ch("Le catalogue d'un voyagiste", "A tour operator's catalogue", false),
        ch("La carte d'embarquement", "The boarding pass", false)
       ],
       "explFr": "Le programme d'études officiel du MEQ définit les compétences, leur durée et les critères d'évaluation.",
       "explEn": "The official MEQ study program defines the competencies, their duration and the evaluation criteria." }
   ]},
   { "level": 3, "questions": [
     scenario("Un client se présente à ton agence après la faillite du voyagiste qui devait lui fournir son forfait déjà payé. Il n'a reçu aucun service.\n\nQue lui expliques-tu?",
       "A client comes to your agency after the tour operator that was to provide their already-paid package went bankrupt. They received no service.\n\nWhat do you explain to them?", [
        ch("Qu'il peut présenter une réclamation au FICAV pour être indemnisé", "That they can file a claim with FICAV to be compensated", true),
        ch("Qu'il a tout perdu et qu'il n'y a aucun recours", "That they've lost everything and have no recourse", false),
        ch("Qu'il doit poursuivre lui-même les pilotes", "That they must personally sue the pilots", false),
        ch("Qu'il doit simplement racheter un autre forfait sans recours", "That they must simply buy another package with no recourse", false)
       ]),
     tf("Le professionnalisme, la confidentialité des renseignements du client et l'exactitude de l'information font partie de l'éthique du métier.",
        "Professionalism, confidentiality of client information and accuracy of information are part of the trade's ethics.", true),
     { "fr": "Pourquoi la formation continue est-elle importante pour un conseiller en voyages?",
       "en": "Why is ongoing training important for a travel counselor?",
       "choices": [
        ch("Parce que les destinations, tarifs, formalités et technologies changent constamment", "Because destinations, fares, formalities and technologies change constantly", true),
        ch("Parce que la loi interdit d'apprendre après l'école", "Because the law forbids learning after school", false),
        ch("Parce que les voyages n'existent que l'été", "Because travel only exists in summer", false),
        ch("Parce que les clients ne posent jamais de questions", "Because clients never ask questions", false)
       ],
       "explFr": "Le secteur du voyage évolue vite (nouvelles routes aériennes, exigences d'entrée, outils). Se tenir à jour est essentiel pour bien conseiller.",
       "explEn": "The travel sector changes fast (new air routes, entry requirements, tools). Staying current is essential to advise well." },
     { "fr": "Un « éductour » (voyage de familiarisation) sert principalement à...",
       "en": "A 'fam trip' (familiarization trip) mainly serves to...",
       "choices": [
        ch("Permettre au conseiller de découvrir une destination ou un produit pour mieux le vendre", "Let the counselor discover a destination or product to sell it better", true),
        ch("Offrir des vacances gratuites sans lien avec le travail", "Provide free vacation unrelated to work", false),
        ch("Remplacer la formation initiale", "Replace initial training", false),
        ch("Vendre le produit aux autres passagers", "Sell the product to other passengers", false)
       ],
       "explFr": "L'éductour permet de connaître concrètement l'hôtel, le circuit ou la destination afin de conseiller la clientèle avec précision.",
       "explEn": "A fam trip gives firsthand knowledge of the hotel, tour or destination so the counselor can advise clients accurately." },
     tf("Divulguer les coordonnées et l'itinéraire d'un client à un tiers sans son consentement est une pratique acceptable.",
        "Disclosing a client's contact details and itinerary to a third party without consent is an acceptable practice.", false)
   ]}
  ]
 },
 {
  "id": "voy02", "order": 2, "code": "5236-02", "hours": 60,
  "title_fr": "Géographie touristique et destinations", "title_en": "Tourism Geography and Destinations", "icon": "🌍",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Quelle est la capitale de la France, destination touristique majeure?",
       "en": "What is the capital of France, a major tourist destination?",
       "choices": [ ch("Paris", "Paris", true), ch("Lyon", "Lyon", false), ch("Nice", "Nice", false), ch("Marseille", "Marseille", false) ],
       "explFr": "Paris, avec la tour Eiffel et le Louvre, est l'une des villes les plus visitées au monde.",
       "explEn": "Paris, with the Eiffel Tower and the Louvre, is one of the most visited cities in the world." },
     { "fr": "Cancún, destination soleil très prisée des Québécois, se trouve dans quel pays?",
       "en": "Cancún, a sun destination very popular with Quebecers, is in which country?",
       "choices": [ ch("Mexique", "Mexico", true), ch("Cuba", "Cuba", false), ch("Brésil", "Brazil", false), ch("Espagne", "Spain", false) ],
       "explFr": "Cancún est située sur la péninsule du Yucatán, au Mexique, sur la mer des Caraïbes.",
       "explEn": "Cancún is on the Yucatán Peninsula in Mexico, on the Caribbean Sea." },
     tf("La République dominicaine (Punta Cana) est une destination soleil des Caraïbes fréquentée l'hiver par les Québécois.",
        "The Dominican Republic (Punta Cana) is a Caribbean sun destination frequented by Quebecers in winter.", true),
     tf("Rome se trouve en Espagne.", "Rome is located in Spain.", false),
     { "fr": "Dans quel océan se trouve l'archipel d'Hawaï?",
       "en": "In which ocean is the Hawaiian archipelago located?",
       "choices": [ ch("Océan Pacifique", "Pacific Ocean", true), ch("Océan Atlantique", "Atlantic Ocean", false), ch("Océan Indien", "Indian Ocean", false), ch("Océan Arctique", "Arctic Ocean", false) ],
       "explFr": "Hawaï est un État américain formé d'îles volcaniques au milieu de l'océan Pacifique.",
       "explEn": "Hawaii is a U.S. state made of volcanic islands in the middle of the Pacific Ocean." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque ville à son pays.", "Match each city to its country.", [
        pair("Barcelone", "Barcelona", "Espagne", "Spain"),
        pair("Marrakech", "Marrakech", "Maroc", "Morocco"),
        pair("Bangkok", "Bangkok", "Thaïlande", "Thailand"),
        pair("Lisbonne", "Lisbon", "Portugal", "Portugal")
     ]),
     { "fr": "Un client veut fuir l'hiver québécois en janvier pour la chaleur. Quelle destination de l'hémisphère sud est alors en été?",
       "en": "A client wants to escape the Quebec winter in January for warmth. Which Southern Hemisphere destination is then in summer?",
       "choices": [ ch("Australie", "Australia", true), ch("Islande", "Iceland", false), ch("Norvège", "Norway", false), ch("Groenland", "Greenland", false) ],
       "explFr": "Les saisons sont inversées dans l'hémisphère sud : janvier y correspond à l'été (Australie, Argentine, Afrique du Sud).",
       "explEn": "Seasons are reversed in the Southern Hemisphere: January is summer there (Australia, Argentina, South Africa)." },
     tf("Le décalage horaire (jet lag) doit être pris en compte lorsqu'on conseille un vol long-courrier vers l'Asie.",
        "Time difference (jet lag) should be considered when advising a long-haul flight to Asia.", true),
     { "fr": "Quelle chaîne de montagnes traverse plusieurs pays d'Amérique du Sud le long de la côte ouest?",
       "en": "Which mountain range crosses several South American countries along the west coast?",
       "choices": [ ch("La cordillère des Andes", "The Andes", true), ch("Les Alpes", "The Alps", false), ch("Les Rocheuses", "The Rockies", false), ch("L'Himalaya", "The Himalayas", false) ],
       "explFr": "La cordillère des Andes longe l'ouest de l'Amérique du Sud (Pérou, Chili, Bolivie, etc.).",
       "explEn": "The Andes run along western South America (Peru, Chile, Bolivia, etc.)." },
     tf("Connaître le climat et la saison des pluies d'une destination aide à conseiller la meilleure période pour voyager.",
        "Knowing a destination's climate and rainy season helps advise the best time to travel.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Un couple souhaite faire un safari pour observer les « Big Five » en pleine nature.\n\nVers quelle région du monde les orientes-tu en priorité?",
       "A couple wants a safari to observe the 'Big Five' in the wild.\n\nWhich region do you point them to first?", [
        ch("L'Afrique de l'Est ou australe (Kenya, Tanzanie, Afrique du Sud)", "East or Southern Africa (Kenya, Tanzania, South Africa)", true),
        ch("Les fjords de Norvège", "The Norwegian fjords", false),
        ch("Les plages de Cuba", "The beaches of Cuba", false),
        ch("Les Alpes suisses", "The Swiss Alps", false)
       ]),
     { "fr": "Un client veut voir des aurores boréales. Quelle destination lui conseilles-tu en hiver?",
       "en": "A client wants to see the northern lights. Which winter destination do you recommend?",
       "choices": [ ch("L'Islande ou le nord de la Scandinavie", "Iceland or northern Scandinavia", true), ch("Les Bahamas", "The Bahamas", false), ch("Le Sahara", "The Sahara", false), ch("Les Maldives", "The Maldives", false) ],
       "explFr": "Les aurores boréales s'observent aux hautes latitudes nord (Islande, Norvège, Finlande, Yukon) durant les nuits d'hiver.",
       "explEn": "The northern lights are seen at high northern latitudes (Iceland, Norway, Finland, Yukon) during winter nights." },
     match("Associe chaque site emblématique à son pays.", "Match each landmark to its country.", [
        pair("Machu Picchu", "Machu Picchu", "Pérou", "Peru"),
        pair("Taj Mahal", "Taj Mahal", "Inde", "India"),
        pair("Colisée", "Colosseum", "Italie", "Italy"),
        pair("Pyramides de Gizeh", "Pyramids of Giza", "Égypte", "Egypt")
     ]),
     tf("Le fuseau horaire d'une destination peut modifier la date d'arrivée affichée sur un billet d'avion.",
        "A destination's time zone can change the arrival date shown on an air ticket.", true),
     { "fr": "Pourquoi est-il utile de connaître la monnaie et la langue d'une destination avant de conseiller un client?",
       "en": "Why is it useful to know a destination's currency and language before advising a client?",
       "choices": [
        ch("Pour préparer le client (change, communication) et enrichir le conseil", "To prepare the client (currency exchange, communication) and enrich the advice", true),
        ch("Ce n'est jamais utile", "It's never useful", false),
        ch("Uniquement pour les croisières", "Only for cruises", false),
        ch("Seulement si le client le demande deux fois", "Only if the client asks twice", false)
       ],
       "explFr": "Informer le client sur la monnaie, la langue et les usages locaux fait partie d'un service-conseil complet.",
       "explEn": "Informing the client about currency, language and local customs is part of complete advisory service." }
   ]}
  ]
 },
 {
  "id": "voy03", "order": 3, "code": "5236-03", "hours": 60,
  "title_fr": "Produits touristiques (forfaits, croisières, circuits)", "title_en": "Tourism Products (packages, cruises, tours)", "icon": "🧳",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Qu'est-ce qu'un forfait « tout inclus »?",
       "en": "What is an 'all-inclusive' package?",
       "choices": [
        ch("Un ensemble regroupant vol, hébergement, repas et boissons pour un prix unique", "A bundle of flight, lodging, meals and drinks for a single price", true),
        ch("Uniquement un billet d'avion", "Only a plane ticket", false),
        ch("Une location de voiture seule", "A car rental only", false),
        ch("Une assurance seule", "Insurance only", false)
       ],
       "explFr": "Le forfait tout inclus combine plusieurs services (transport, hébergement, repas, parfois activités) à un tarif global.",
       "explEn": "An all-inclusive package combines several services (transport, lodging, meals, sometimes activities) at a bundled price." },
     { "fr": "Qu'est-ce qu'une croisière?",
       "en": "What is a cruise?",
       "choices": [
        ch("Un voyage à bord d'un navire avec hébergement, repas et escales", "A trip aboard a ship with lodging, meals and port calls", true),
        ch("Un séjour dans un hôtel de montagne", "A stay in a mountain hotel", false),
        ch("Un vol nolisé sans escale", "A non-stop charter flight", false),
        ch("Un circuit en autocar uniquement", "A coach tour only", false)
       ],
       "explFr": "La croisière offre transport, hébergement, restauration et divertissement à bord, avec des escales dans différents ports.",
       "explEn": "A cruise provides transport, lodging, dining and entertainment on board, with stops at various ports." },
     tf("Un circuit accompagné inclut généralement un guide et un itinéraire de plusieurs villes ou sites.",
        "An escorted tour generally includes a guide and an itinerary covering several cities or sites.", true),
     tf("Un « vol sec » comprend obligatoirement l'hébergement et les repas.",
        "A 'flight-only' fare necessarily includes lodging and meals.", false),
     { "fr": "Que signifie la formule d'hébergement « occupation double »?",
       "en": "What does the lodging term 'double occupancy' mean?",
       "choices": [
        ch("Le prix par personne basé sur deux personnes partageant la chambre", "The per-person price based on two people sharing the room", true),
        ch("Deux chambres pour une personne", "Two rooms for one person", false),
        ch("Une chambre gratuite", "A free room", false),
        ch("Le prix total pour dix personnes", "The total price for ten people", false)
       ],
       "explFr": "Les prix des forfaits sont souvent affichés « par personne, occupation double » : deux voyageurs partagent la chambre.",
       "explEn": "Package prices are often shown 'per person, double occupancy': two travelers share the room." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque plan de repas de croisière ou d'hôtel à sa définition.", "Match each meal plan to its definition.", [
        pair("Tout inclus", "All-inclusive", "Repas et boissons compris", "Meals and drinks included"),
        pair("Demi-pension", "Half board", "Petit-déjeuner et un repas", "Breakfast and one meal"),
        pair("Pension complète", "Full board", "Trois repas par jour", "Three meals per day"),
        pair("Européen (EP)", "European plan", "Aucun repas inclus", "No meals included")
     ]),
     { "fr": "Un client veut un voyage clé en main avec le moins d'organisation possible. Quel produit lui convient le mieux?",
       "en": "A client wants a turnkey trip with as little planning as possible. Which product suits them best?",
       "choices": [
        ch("Un forfait tout inclus ou une croisière", "An all-inclusive package or a cruise", true),
        ch("Un vol sec sans hébergement", "A flight-only with no lodging", false),
        ch("Une simple location de voiture", "A car rental only", false),
        ch("Un voyage à organiser lui-même sur place", "A trip to organize himself on site", false)
       ],
       "explFr": "Le tout inclus et la croisière regroupent l'essentiel des services : idéals pour un client qui veut peu d'organisation.",
       "explEn": "All-inclusive and cruises bundle the essential services: ideal for a client who wants minimal planning." },
     tf("Une escale de croisière permet aux passagers de descendre à terre pour visiter le port et parfois faire des excursions.",
        "A cruise port call lets passengers go ashore to visit the port and sometimes take excursions.", true),
     { "fr": "Qu'est-ce qu'une excursion (activité optionnelle) sur un forfait ou une croisière?",
       "en": "What is a shore excursion / optional activity on a package or cruise?",
       "choices": [
        ch("Une activité proposée en supplément à la destination ou en escale", "An activity offered as an extra at the destination or port of call", true),
        ch("Le trajet aller-retour en avion", "The round-trip flight", false),
        ch("La taxe d'aéroport", "The airport tax", false),
        ch("Le pourboire obligatoire du personnel", "The mandatory staff gratuity", false)
       ],
       "explFr": "Les excursions sont des activités facultatives (visites, plongée, tours guidés) souvent vendues en supplément.",
       "explEn": "Excursions are optional activities (visits, diving, guided tours) often sold as extras." },
     tf("Choisir le bon produit implique de faire correspondre le budget, le rythme et les intérêts du client au produit.",
        "Choosing the right product means matching the client's budget, pace and interests to the product.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Une famille avec deux jeunes enfants dispose d'un budget serré et veut du soleil, une plage sécuritaire et des repas inclus pour la semaine de relâche.\n\nQuel produit proposes-tu?",
       "A family with two young children has a tight budget and wants sun, a safe beach and included meals for spring break.\n\nWhat product do you propose?", [
        ch("Un forfait tout inclus familial dans un complexe des Caraïbes ou du Mexique", "A family all-inclusive package at a Caribbean or Mexican resort", true),
        ch("Un tour du monde de trois mois", "A three-month round-the-world tour", false),
        ch("Une expédition en Antarctique", "An Antarctic expedition", false),
        ch("Un vol sec sans hébergement ni repas", "A flight-only with no lodging or meals", false)
       ]),
     scenario("Un couple de retraités aime la culture, veut visiter plusieurs villes d'Europe sans conduire ni changer d'hôtel chaque soir.\n\nQuel produit est le plus adapté?",
       "A retired couple loves culture and wants to visit several European cities without driving or changing hotels every night.\n\nWhich product fits best?", [
        ch("Une croisière fluviale ou un circuit accompagné en autocar", "A river cruise or an escorted coach tour", true),
        ch("Un forfait plage tout inclus", "An all-inclusive beach package", false),
        ch("Un billet d'avion seul", "A flight ticket only", false),
        ch("Un camping sauvage autonome", "Self-guided wild camping", false)
       ]),
     tf("Un grossiste (voyagiste) assemble les forfaits que l'agence de détail revend ensuite au client.",
        "A wholesaler (tour operator) assembles the packages that the retail agency then resells to the client.", true),
     { "fr": "Pourquoi lit-on attentivement la catégorie d'étoiles et les avis d'un hôtel avant de le proposer?",
       "en": "Why read a hotel's star category and reviews carefully before proposing it?",
       "choices": [
        ch("Pour s'assurer que le niveau de confort correspond aux attentes du client", "To ensure the comfort level matches the client's expectations", true),
        ch("Parce que les étoiles n'ont aucune signification", "Because stars mean nothing", false),
        ch("Pour augmenter la taxe", "To raise the tax", false),
        ch("Uniquement pour les croisières", "Only for cruises", false)
       ],
       "explFr": "La catégorie et les avis aident à ajuster la recommandation au budget et aux attentes, et à éviter les déceptions.",
       "explEn": "The category and reviews help match the recommendation to budget and expectations, avoiding disappointment." },
     tf("Vendre un produit inadapté au client, juste pour conclure une vente, nuit à la relation à long terme et à la réputation de l'agence.",
        "Selling a product unsuited to the client, just to close a sale, harms the long-term relationship and the agency's reputation.", true)
   ]}
  ]
 },
 {
  "id": "voy04", "order": 4, "code": "5236-04", "hours": 75,
  "title_fr": "Systèmes de réservation (GDS) et billetterie", "title_en": "Reservation Systems (GDS) and Ticketing", "icon": "💺",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Que signifie l'acronyme GDS?",
       "en": "What does the acronym GDS stand for?",
       "choices": [
        ch("Global Distribution System (système de distribution mondial)", "Global Distribution System", true),
        ch("Grand Départ Standard", "Grand Standard Departure", false),
        ch("Guide de Sécurité", "Safety Guide", false),
        ch("Gestion Des Salaires", "Salary Management", false)
       ],
       "explFr": "Un GDS (Amadeus, Sabre, Travelport) est un système mondial qui relie les agences aux compagnies aériennes, hôtels et loueurs pour réserver en temps réel.",
       "explEn": "A GDS (Amadeus, Sabre, Travelport) is a global system connecting agencies to airlines, hotels and car rentals for real-time booking." },
     { "fr": "Lequel de ces noms est un GDS?",
       "en": "Which of these is a GDS?",
       "choices": [ ch("Amadeus", "Amadeus", true), ch("Excel", "Excel", false), ch("Photoshop", "Photoshop", false), ch("Windows", "Windows", false) ],
       "explFr": "Amadeus, Sabre et Travelport (Galileo/Apollo) sont les principaux GDS utilisés par les agences de voyages.",
       "explEn": "Amadeus, Sabre and Travelport (Galileo/Apollo) are the main GDS used by travel agencies." },
     tf("Un code IATA à trois lettres identifie un aéroport (ex. YUL pour Montréal-Trudeau).",
        "A three-letter IATA code identifies an airport (e.g. YUL for Montreal-Trudeau).", true),
     tf("Le PNR (Passenger Name Record) est le dossier de réservation qui regroupe les renseignements d'un voyage.",
        "The PNR (Passenger Name Record) is the booking file that gathers a trip's information.", true),
     { "fr": "Que représente le code « YUL »?",
       "en": "What does the code 'YUL' represent?",
       "choices": [ ch("L'aéroport de Montréal-Trudeau", "Montreal-Trudeau airport", true), ch("La ville de Toronto", "The city of Toronto", false), ch("Une compagnie aérienne", "An airline", false), ch("Un type de tarif", "A fare type", false) ],
       "explFr": "YUL est le code IATA de l'aéroport international Montréal-Trudeau. YYZ = Toronto, YVR = Vancouver.",
       "explEn": "YUL is the IATA code for Montreal-Trudeau International Airport. YYZ = Toronto, YVR = Vancouver." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque code IATA d'aéroport à sa ville.", "Match each IATA airport code to its city.", [
        pair("YUL", "YUL", "Montréal", "Montreal"),
        pair("YYZ", "YYZ", "Toronto", "Toronto"),
        pair("JFK", "JFK", "New York", "New York"),
        pair("CDG", "CDG", "Paris", "Paris")
     ]),
     { "fr": "Dans un PNR, quelle information est essentielle pour émettre un billet d'avion?",
       "en": "In a PNR, which information is essential to issue an air ticket?",
       "choices": [
        ch("Le nom exact du passager tel qu'il figure sur son passeport", "The passenger's exact name as it appears on their passport", true),
        ch("La couleur préférée du passager", "The passenger's favorite color", false),
        ch("Le nom de son animal de compagnie", "The name of their pet", false),
        ch("Sa pointure de chaussures", "Their shoe size", false)
       ],
       "explFr": "Le nom doit correspondre exactement au document de voyage : une erreur peut empêcher l'embarquement ou entraîner des frais de correction.",
       "explEn": "The name must exactly match the travel document: an error can prevent boarding or trigger correction fees." },
     tf("Une classe tarifaire (ex. Y, B, Q) détermine le prix et les conditions d'un billet d'avion (changements, remboursement).",
        "A fare class (e.g. Y, B, Q) determines the price and conditions of an air ticket (changes, refund).", true),
     { "fr": "Qu'est-ce qu'une correspondance (connexion) dans un itinéraire aérien?",
       "en": "What is a connection in an air itinerary?",
       "choices": [
        ch("Un changement d'avion dans un aéroport intermédiaire vers la destination finale", "A change of plane at an intermediate airport toward the final destination", true),
        ch("Le retour à l'aéroport de départ", "The return to the departure airport", false),
        ch("Le repas servi à bord", "The meal served on board", false),
        ch("Le numéro du siège", "The seat number", false)
       ],
       "explFr": "Une correspondance implique de changer d'avion; il faut prévoir un temps de connexion suffisant pour ne pas manquer le vol suivant.",
       "explEn": "A connection involves changing planes; enough connection time must be allowed so as not to miss the next flight." },
     tf("Réserver un temps de correspondance trop court augmente le risque de manquer le vol suivant.",
        "Booking too short a connection time increases the risk of missing the next flight.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Tu réserves un vol Montréal–Tokyo avec correspondance. Le premier vol arrive à 14 h 10 et le vol suivant part à 14 h 40 dans un grand aéroport international.\n\nQuel est ton réflexe professionnel?",
       "You're booking a Montreal–Tokyo flight with a connection. The first flight arrives at 2:10 p.m. and the next departs at 2:40 p.m. at a large international airport.\n\nWhat's your professional reflex?", [
        ch("Prévenir le client que 30 minutes est trop court et proposer une connexion plus longue", "Warn the client that 30 minutes is too short and propose a longer connection", true),
        ch("Réserver quand même, 30 minutes suffisent toujours", "Book anyway, 30 minutes is always enough", false),
        ch("Annuler tout le voyage", "Cancel the whole trip", false),
        ch("Ignorer les horaires", "Ignore the schedule", false)
       ]),
     { "fr": "Un client t'appelle : son nom est mal orthographié sur son billet réservé hier. Que fais-tu?",
       "en": "A client calls: their name is misspelled on the ticket booked yesterday. What do you do?",
       "choices": [
        ch("Corriger le nom dans le PNR selon les règles de la compagnie, avant le départ", "Correct the name in the PNR per the airline's rules, before departure", true),
        ch("Lui dire que ce n'est pas grave et de partir ainsi", "Tell them it's fine and to travel as is", false),
        ch("Lui dire d'acheter un nouveau passeport", "Tell them to buy a new passport", false),
        ch("Ne rien faire", "Do nothing", false)
       ],
       "explFr": "Le nom sur le billet doit correspondre au passeport. Selon la compagnie, une correction mineure est possible; sinon des frais ou une réémission peuvent s'appliquer.",
       "explEn": "The ticket name must match the passport. Depending on the airline, a minor correction may be allowed; otherwise fees or reissue may apply." },
     tf("Les billets à tarif réduit sont souvent non remboursables et comportent des frais de modification élevés.",
        "Discounted fares are often non-refundable and carry high change fees.", true),
     match("Associe chaque terme de billetterie à sa signification.", "Match each ticketing term to its meaning.", [
        pair("PNR", "PNR", "Dossier de réservation du passager", "Passenger booking record"),
        pair("E-ticket", "E-ticket", "Billet électronique", "Electronic ticket"),
        pair("No-show", "No-show", "Passager absent au départ", "Passenger absent at departure"),
        pair("Stopover", "Stopover", "Escale prolongée volontaire", "Voluntary extended stopover")
     ]),
     tf("Vérifier les franchises de bagages et les taxes avant de confirmer un billet fait partie d'une réservation soignée.",
        "Checking baggage allowances and taxes before confirming a ticket is part of a careful booking.", true)
   ]}
  ]
 },
 {
  "id": "voy05", "order": 5, "code": "5236-05", "hours": 45,
  "title_fr": "Documents de voyage et formalités", "title_en": "Travel Documents and Formalities", "icon": "🛂",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Quel document est généralement exigé pour un voyage international?",
       "en": "Which document is generally required for international travel?",
       "choices": [ ch("Un passeport valide", "A valid passport", true), ch("Une carte de bibliothèque", "A library card", false), ch("Un permis de pêche", "A fishing licence", false), ch("Une carte-cadeau", "A gift card", false) ],
       "explFr": "Le passeport est le document de voyage international de base. Certaines destinations exigent en plus un visa.",
       "explEn": "The passport is the basic international travel document. Some destinations also require a visa." },
     { "fr": "Qu'est-ce qu'un visa?",
       "en": "What is a visa?",
       "choices": [
        ch("Une autorisation officielle d'entrer ou de séjourner dans un pays", "An official authorization to enter or stay in a country", true),
        ch("Un type de billet d'avion", "A type of plane ticket", false),
        ch("Une carte d'embarquement", "A boarding pass", false),
        ch("Une assurance médicale", "Medical insurance", false)
       ],
       "explFr": "Le visa est délivré par le pays de destination et autorise l'entrée ou le séjour selon des conditions (durée, motif).",
       "explEn": "A visa is issued by the destination country and authorizes entry or stay under conditions (duration, purpose)." },
     tf("Il est recommandé que le passeport soit valide au moins six mois après la date de retour pour de nombreuses destinations.",
        "It is recommended that a passport be valid for at least six months beyond the return date for many destinations.", true),
     tf("Une assurance voyage (médicale, annulation) n'est jamais utile.",
        "Travel insurance (medical, cancellation) is never useful.", false),
     { "fr": "Pour un vol vers les États-Unis, quelle autorisation électronique un citoyen canadien pourrait-il devoir vérifier?",
       "en": "For a flight to the United States, which electronic authorization might a Canadian citizen need to check?",
       "choices": [
        ch("Les exigences d'entrée américaines (documents et règles en vigueur)", "U.S. entry requirements (documents and rules in force)", true),
        ch("Un permis de conduire international obligatoire", "A mandatory international driving permit", false),
        ch("Une carte d'assurance-maladie provinciale suffisante seule", "A provincial health card sufficient on its own", false),
        ch("Aucune vérification n'est jamais nécessaire", "No check is ever needed", false)
       ],
       "explFr": "Les formalités d'entrée varient selon la nationalité et la destination : il faut toujours vérifier les exigences officielles à jour.",
       "explEn": "Entry formalities vary by nationality and destination: always verify the current official requirements." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque type d'assurance voyage à ce qu'elle couvre.", "Match each travel insurance type to what it covers.", [
        pair("Assurance médicale", "Medical insurance", "Frais de soins de santé à l'étranger", "Health care costs abroad"),
        pair("Annulation", "Trip cancellation", "Frais si le voyage est annulé avant le départ", "Costs if the trip is cancelled before departure"),
        pair("Bagages", "Baggage", "Perte ou vol de bagages", "Lost or stolen luggage"),
        pair("Interruption", "Trip interruption", "Retour anticipé pendant le voyage", "Early return during the trip")
     ]),
     { "fr": "Pourquoi conseiller fortement une assurance médicale voyage à un client qui quitte le Canada?",
       "en": "Why strongly recommend travel medical insurance to a client leaving Canada?",
       "choices": [
        ch("Parce que les soins de santé à l'étranger peuvent coûter très cher et ne sont pas couverts par la RAMQ", "Because health care abroad can be very expensive and isn't covered by the provincial plan", true),
        ch("Parce que c'est obligatoire pour prendre l'avion", "Because it's mandatory to board a plane", false),
        ch("Parce que ça remplace le passeport", "Because it replaces the passport", false),
        ch("Ce n'est jamais nécessaire", "It's never necessary", false)
       ],
       "explFr": "La couverture publique québécoise rembourse très peu les soins hors Canada; une assurance médicale évite des factures énormes en cas d'urgence.",
       "explEn": "Quebec's public plan reimburses very little for care outside Canada; medical insurance avoids huge bills in an emergency." },
     tf("Un enfant mineur doit posséder son propre passeport pour voyager à l'international.",
        "A minor child must have their own passport to travel internationally.", true),
     tf("Certains pays exigent une preuve de vaccination pour l'entrée sur leur territoire.",
        "Some countries require proof of vaccination to enter their territory.", true),
     { "fr": "Que devrais-tu recommander à un client concernant ses documents pendant le voyage?",
       "en": "What should you recommend to a client regarding their documents during the trip?",
       "choices": [
        ch("Conserver des copies (papier ou numériques) séparées des originaux", "Keep copies (paper or digital) separate from the originals", true),
        ch("Jeter le passeport après l'embarquement", "Throw away the passport after boarding", false),
        ch("Partager son passeport sur les réseaux sociaux", "Post the passport on social media", false),
        ch("Ne jamais noter ses coordonnées d'urgence", "Never write down emergency contacts", false)
       ],
       "explFr": "Garder des copies des documents facilite le remplacement en cas de perte ou de vol à l'étranger.",
       "explEn": "Keeping copies of documents makes replacement easier if they're lost or stolen abroad." }
   ]},
   { "level": 3, "questions": [
     scenario("Ta cliente part dans trois jours pour l'Europe. En vérifiant son passeport, tu remarques qu'il expire dans quatre mois.\n\nQue fais-tu?",
       "Your client leaves in three days for Europe. Checking her passport, you notice it expires in four months.\n\nWhat do you do?", [
        ch("L'avertir immédiatement, car plusieurs pays exigent 6 mois de validité, et vérifier les règles de la destination", "Warn her immediately, since many countries require 6 months' validity, and check the destination's rules", true),
        ch("Ne rien dire, quatre mois c'est toujours suffisant partout", "Say nothing, four months is always enough everywhere", false),
        ch("Annuler son voyage sans explication", "Cancel her trip without explanation", false),
        ch("Lui dire de voyager sans passeport", "Tell her to travel without a passport", false)
       ]),
     scenario("Un client refuse l'assurance médicale voyage pour économiser. Il part deux semaines dans un pays où les soins sont coûteux.\n\nQuelle est la bonne pratique professionnelle?",
       "A client declines travel medical insurance to save money. He's leaving for two weeks in a country where care is expensive.\n\nWhat's the correct professional practice?", [
        ch("L'informer clairement des risques financiers et consigner son refus au dossier", "Clearly inform him of the financial risks and record his refusal in the file", true),
        ch("Le forcer à souscrire sans explication", "Force him to subscribe without explanation", false),
        ch("Souscrire à son insu", "Subscribe without his knowledge", false),
        ch("Ne rien documenter", "Document nothing", false)
       ]),
     tf("Le conseiller a le devoir d'informer le client des formalités (documents, visas, vaccins) applicables à sa destination.",
        "The counselor has a duty to inform the client of the formalities (documents, visas, vaccinations) applicable to their destination.", true),
     { "fr": "Un client possède un passeport d'un autre pays que le Canada. Pourquoi est-ce important de le savoir?",
       "en": "A client holds a passport from a country other than Canada. Why is it important to know this?",
       "choices": [
        ch("Parce que les visas et exigences d'entrée dépendent de la nationalité du voyageur", "Because visas and entry requirements depend on the traveler's nationality", true),
        ch("Parce que ça change le prix du forfait", "Because it changes the package price", false),
        ch("Parce que ça n'a aucune importance", "Because it has no importance", false),
        ch("Uniquement pour les croisières", "Only for cruises", false)
       ],
       "explFr": "Les exigences de visa varient selon le passeport détenu; un même trajet peut nécessiter un visa pour une nationalité et non pour une autre.",
       "explEn": "Visa requirements vary by passport held; the same trip may need a visa for one nationality and not another." },
     tf("Se fier uniquement à sa mémoire plutôt qu'aux sources officielles à jour pour les formalités d'entrée est une bonne pratique.",
        "Relying only on memory rather than up-to-date official sources for entry formalities is good practice.", false)
   ]}
  ]
 },
 {
  "id": "voy06", "order": 6, "code": "5236-06", "hours": 60,
  "title_fr": "Tarification et calcul de prix", "title_en": "Pricing and Price Calculation", "icon": "💵",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Qu'est-ce qu'une commission pour une agence de voyages?",
       "en": "What is a commission for a travel agency?",
       "choices": [
        ch("Un pourcentage versé par le fournisseur à l'agence sur une vente", "A percentage paid by the supplier to the agency on a sale", true),
        ch("Une taxe gouvernementale", "A government tax", false),
        ch("Le prix du passeport", "The price of the passport", false),
        ch("Un pourboire au pilote", "A tip for the pilot", false)
       ],
       "explFr": "La commission est une part du prix versée par le fournisseur (voyagiste, croisiériste) à l'agence en rémunération de la vente.",
       "explEn": "A commission is a portion of the price paid by the supplier (tour operator, cruise line) to the agency as compensation for the sale." },
     { "fr": "Que représente le prix « par personne, occupation double »?",
       "en": "What does the price 'per person, double occupancy' represent?",
       "choices": [
        ch("Le coût pour une personne quand deux partagent la chambre", "The cost for one person when two share the room", true),
        ch("Le coût total pour la chambre entière", "The total cost for the whole room", false),
        ch("Le coût pour quatre personnes", "The cost for four people", false),
        ch("Un prix sans taxes ni frais", "A price with no taxes or fees", false)
       ],
       "explFr": "Il faut multiplier ce prix par le nombre de personnes et vérifier les taxes/frais pour obtenir le total réel du dossier.",
       "explEn": "You multiply this price by the number of people and check taxes/fees to get the file's real total." },
     tf("Le prix affiché d'un forfait n'inclut pas toujours les taxes, les frais de service et les suppléments.",
        "A package's advertised price does not always include taxes, service fees and surcharges.", true),
     tf("Un supplément « occupation simple » peut s'appliquer lorsqu'une seule personne occupe une chambre double.",
        "A 'single occupancy' supplement may apply when one person occupies a double room.", true),
     { "fr": "Deux adultes paient 1 200 $ par personne (occupation double) pour un forfait. Quel est le sous-total avant taxes?",
       "en": "Two adults pay $1,200 per person (double occupancy) for a package. What is the subtotal before taxes?",
       "choices": [ ch("2 400 $", "$2,400", true), ch("1 200 $", "$1,200", false), ch("600 $", "$600", false), ch("3 600 $", "$3,600", false) ],
       "explFr": "1 200 $ × 2 personnes = 2 400 $. On ajoute ensuite taxes et frais applicables pour obtenir le total.",
       "explEn": "$1,200 × 2 people = $2,400. Applicable taxes and fees are then added for the total." }
   ]},
   { "level": 2, "questions": [
     { "fr": "Un forfait coûte 1 500 $ par personne. Pour deux personnes, avec des frais fixes de 100 $ au dossier, quel est le total avant taxes?",
       "en": "A package costs $1,500 per person. For two people, with a fixed file fee of $100, what is the total before taxes?",
       "choices": [ ch("3 100 $", "$3,100", true), ch("3 000 $", "$3,000", false), ch("1 600 $", "$1,600", false), ch("3 200 $", "$3,200", false) ],
       "explFr": "(1 500 $ × 2) + 100 $ = 3 100 $ avant taxes.",
       "explEn": "($1,500 × 2) + $100 = $3,100 before taxes." },
     match("Associe chaque élément de tarification à sa nature.", "Match each pricing element to its nature.", [
        pair("Commission", "Commission", "Revenu de l'agence", "Agency revenue"),
        pair("Frais de service", "Service fee", "Frais facturés au client par l'agence", "Fee billed to the client by the agency"),
        pair("Taxe", "Tax", "Montant perçu pour le gouvernement", "Amount collected for the government"),
        pair("Supplément", "Surcharge", "Coût additionnel selon options", "Additional cost based on options")
     ]),
     { "fr": "Une cliente change une monnaie : 1 USD = 1,35 CAD. Combien coûtent 200 USD en dollars canadiens?",
       "en": "A client exchanges currency: 1 USD = 1.35 CAD. How much do 200 USD cost in Canadian dollars?",
       "choices": [ ch("270 $ CAD", "$270 CAD", true), ch("200 $ CAD", "$200 CAD", false), ch("148 $ CAD", "$148 CAD", false), ch("335 $ CAD", "$335 CAD", false) ],
       "explFr": "200 × 1,35 = 270 $ CAD. Le taux de change influence le coût réel des dépenses à l'étranger.",
       "explEn": "200 × 1.35 = $270 CAD. The exchange rate affects the real cost of spending abroad." },
     tf("Un acompte (dépôt) est souvent exigé à la réservation, le solde étant payable avant le départ.",
        "A deposit is often required at booking, with the balance payable before departure.", true),
     tf("Le taux de change n'a aucune incidence sur le budget de voyage d'un client.",
        "The exchange rate has no impact on a client's travel budget.", false)
   ]},
   { "level": 3, "questions": [
     scenario("Un client a un budget maximum de 3 000 $ pour deux personnes, taxes incluses. Le forfait que tu regardes affiche 1 350 $/pers. + 380 $ de taxes et frais au total.\n\nQuel est le total et est-ce dans le budget?",
       "A client has a maximum budget of $3,000 for two, taxes included. The package you're looking at shows $1,350/pers. + $380 in total taxes and fees.\n\nWhat is the total and is it within budget?", [
        ch("3 080 $ — c'est légèrement au-dessus du budget, il faut ajuster", "$3,080 — slightly over budget, an adjustment is needed", true),
        ch("2 700 $ — dans le budget", "$2,700 — within budget", false),
        ch("1 730 $ — dans le budget", "$1,730 — within budget", false),
        ch("3 380 $ — dans le budget", "$3,380 — within budget", false)
       ]),
     { "fr": "Sur une vente de 2 000 $ commissionnée à 12 %, quel est le revenu de commission de l'agence?",
       "en": "On a $2,000 sale commissioned at 12%, what is the agency's commission revenue?",
       "choices": [ ch("240 $", "$240", true), ch("120 $", "$120", false), ch("200 $", "$200", false), ch("24 $", "$24", false) ],
       "explFr": "2 000 $ × 12 % = 240 $. La commission rémunère l'agence pour la vente et le service rendu.",
       "explEn": "$2,000 × 12% = $240. The commission compensates the agency for the sale and the service provided." },
     tf("Présenter un prix « tout compris » clair (taxes et frais inclus) évite les mauvaises surprises et les litiges.",
        "Presenting a clear 'all-in' price (taxes and fees included) avoids unpleasant surprises and disputes.", true),
     { "fr": "Pourquoi vérifier la date limite de paiement du solde d'un forfait?",
       "en": "Why check the balance payment deadline for a package?",
       "choices": [
        ch("Parce qu'un solde impayé à la date limite peut entraîner l'annulation du dossier et des pénalités", "Because an unpaid balance by the deadline can lead to file cancellation and penalties", true),
        ch("Parce que ça change la destination", "Because it changes the destination", false),
        ch("Parce que ça double la commission", "Because it doubles the commission", false),
        ch("Ce n'est jamais important", "It's never important", false)
       ],
       "explFr": "Le non-paiement du solde à l'échéance peut annuler la réservation et faire perdre l'acompte : il faut informer le client des échéances.",
       "explEn": "Failure to pay the balance by the deadline can cancel the booking and forfeit the deposit: the client must be told of deadlines." },
     tf("Arrondir ou modifier un prix sans base réelle pour conclure une vente est une pratique acceptable.",
        "Rounding or altering a price with no real basis to close a sale is an acceptable practice.", false)
   ]}
  ]
 },
 {
  "id": "voy07", "order": 7, "code": "5236-07", "hours": 75,
  "title_fr": "Service-conseil et gestion du dossier client", "title_en": "Advisory Service and Client File Management", "icon": "🤝",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Quelle est la première étape d'un bon service-conseil?",
       "en": "What is the first step of good advisory service?",
       "choices": [
        ch("Écouter et cerner les besoins, le budget et les attentes du client", "Listen and identify the client's needs, budget and expectations", true),
        ch("Vendre le forfait le plus cher immédiatement", "Immediately sell the most expensive package", false),
        ch("Ignorer les préférences du client", "Ignore the client's preferences", false),
        ch("Réserver sans poser de questions", "Book without asking questions", false)
       ],
       "explFr": "Bien comprendre les besoins avant de proposer permet d'offrir une solution adaptée et de gagner la confiance du client.",
       "explEn": "Understanding needs before proposing lets you offer a suitable solution and earn the client's trust." },
     { "fr": "Qu'est-ce qu'un dossier client (fiche client) contient?",
       "en": "What does a client file contain?",
       "choices": [
        ch("Les coordonnées, préférences et historique de réservation du client", "The client's contact details, preferences and booking history", true),
        ch("Le salaire des employés de l'agence", "The salaries of the agency's employees", false),
        ch("Les plans de vol des pilotes", "The pilots' flight plans", false),
        ch("Rien d'utile", "Nothing useful", false)
       ],
       "explFr": "Un dossier client bien tenu facilite le suivi, les rappels et un service personnalisé lors des prochains voyages.",
       "explEn": "A well-kept client file supports follow-up, reminders and personalized service on future trips." },
     tf("Poser des questions ouvertes aide à mieux comprendre ce que recherche le client.",
        "Asking open-ended questions helps better understand what the client is looking for.", true),
     tf("Les renseignements personnels du client doivent être traités de façon confidentielle.",
        "The client's personal information must be handled confidentially.", true),
     { "fr": "Que devrais-tu faire après avoir confirmé une réservation avec un client?",
       "en": "What should you do after confirming a booking with a client?",
       "choices": [
        ch("Lui remettre une confirmation écrite et récapituler les détails importants", "Give a written confirmation and recap the important details", true),
        ch("Effacer son dossier", "Delete their file", false),
        ch("Ne plus jamais le contacter", "Never contact them again", false),
        ch("Changer sa destination sans l'avertir", "Change their destination without notice", false)
       ],
       "explFr": "Une confirmation écrite claire (dates, prix, conditions) protège le client et l'agence et prévient les malentendus.",
       "explEn": "A clear written confirmation (dates, price, conditions) protects the client and agency and prevents misunderstandings." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque étape de la vente-conseil à sa description.", "Match each advisory-sale step to its description.", [
        pair("Découverte", "Discovery", "Cerner les besoins du client", "Identify the client's needs"),
        pair("Proposition", "Proposal", "Présenter des produits adaptés", "Present suitable products"),
        pair("Conclusion", "Closing", "Confirmer la réservation", "Confirm the booking"),
        pair("Suivi", "Follow-up", "Recontacter après le voyage", "Recontact after the trip")
     ]),
     { "fr": "Un client hésite entre deux forfaits. Quelle est la meilleure approche?",
       "en": "A client hesitates between two packages. What is the best approach?",
       "choices": [
        ch("Comparer objectivement les deux selon ses besoins et son budget", "Objectively compare the two based on their needs and budget", true),
        ch("Choisir à sa place sans explication", "Choose for them with no explanation", false),
        ch("Lui dire de revenir un autre jour", "Tell them to come back another day", false),
        ch("Pousser le plus cher sans justification", "Push the most expensive with no justification", false)
       ],
       "explFr": "Comparer les avantages de chaque option en fonction des besoins aide le client à décider en confiance.",
       "explEn": "Comparing each option's benefits against the needs helps the client decide with confidence." },
     tf("Le suivi après-vente (souhaiter bon voyage, demander un retour) favorise la fidélisation.",
        "After-sale follow-up (wishing a good trip, asking for feedback) fosters loyalty.", true),
     { "fr": "Comment gérer une plainte d'un client mécontent de son séjour?",
       "en": "How should you handle a complaint from a client unhappy with their stay?",
       "choices": [
        ch("Écouter, faire preuve d'empathie, documenter et transmettre la réclamation au fournisseur", "Listen, show empathy, document and forward the claim to the supplier", true),
        ch("L'ignorer et raccrocher", "Ignore them and hang up", false),
        ch("Le blâmer immédiatement", "Immediately blame them", false),
        ch("Promettre un remboursement impossible", "Promise an impossible refund", false)
       ],
       "explFr": "Une plainte bien gérée (écoute, suivi auprès du fournisseur) peut préserver la relation et parfois obtenir une compensation.",
       "explEn": "A well-managed complaint (listening, follow-up with the supplier) can preserve the relationship and sometimes obtain compensation." },
     tf("Tenir le dossier à jour permet un meilleur service lors des voyages suivants du client.",
        "Keeping the file up to date enables better service on the client's next trips.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Un client appelle en panique : sa correspondance a été annulée par la compagnie aérienne et il est bloqué à l'aéroport.\n\nQuelle est ta priorité comme conseiller?",
       "A client calls in a panic: their connection was cancelled by the airline and they're stuck at the airport.\n\nWhat's your priority as a counselor?", [
        ch("Le rassurer, vérifier les options de réacheminement et l'aider à trouver une solution rapidement", "Reassure them, check rebooking options and help find a solution quickly", true),
        ch("Lui dire que ce n'est pas ton problème", "Tell them it's not your problem", false),
        ch("Fermer le dossier", "Close the file", false),
        ch("Attendre plusieurs jours avant de répondre", "Wait several days before responding", false)
       ]),
     scenario("Une cliente régulière fête son 25e anniversaire de mariage et veut une surprise mémorable, sans idée précise.\n\nComment utilises-tu son dossier client?",
       "A regular client is celebrating her 25th wedding anniversary and wants a memorable surprise, with no precise idea.\n\nHow do you use her client file?", [
        ch("Consulter ses voyages passés et préférences pour proposer une destination et des extras personnalisés", "Review her past trips and preferences to propose a personalized destination and extras", true),
        ch("Proposer le premier forfait venu au hasard", "Propose the first random package", false),
        ch("Ignorer son historique", "Ignore her history", false),
        ch("Lui demander de tout organiser elle-même", "Ask her to organize everything herself", false)
       ]),
     tf("Un conseiller doit respecter les lois sur la protection des renseignements personnels dans la tenue des dossiers clients.",
        "A counselor must comply with personal-information protection laws when keeping client files.", true),
     { "fr": "Pourquoi la fidélisation d'un client est-elle précieuse pour une agence?",
       "en": "Why is client loyalty valuable to an agency?",
       "choices": [
        ch("Un client satisfait revient et recommande l'agence à son entourage", "A satisfied client returns and recommends the agency to others", true),
        ch("Parce qu'un client fidèle ne paie jamais", "Because a loyal client never pays", false),
        ch("Parce que ça supprime les taxes", "Because it removes taxes", false),
        ch("Ça n'a aucune valeur", "It has no value", false)
       ],
       "explFr": "La fidélisation réduit les coûts d'acquisition et génère du bouche-à-oreille : un client satisfait est le meilleur ambassadeur de l'agence.",
       "explEn": "Loyalty lowers acquisition costs and generates word-of-mouth: a satisfied client is the agency's best ambassador." },
     tf("Faire une promesse qu'on sait impossible à tenir pour conclure une vente est une bonne pratique de service.",
        "Making a promise you know can't be kept in order to close a sale is good service practice.", false)
   ]}
  ]
 },
 {
  "id": "voy08", "order": 8, "code": "5236-08", "hours": 45,
  "title_fr": "Tourisme responsable et éthique professionnelle", "title_en": "Responsible Tourism and Professional Ethics", "icon": "🌱",
  "tiers": [
   { "level": 1, "questions": [
     { "fr": "Qu'est-ce que le tourisme responsable (ou durable)?",
       "en": "What is responsible (or sustainable) tourism?",
       "choices": [
        ch("Voyager en respectant l'environnement, les cultures locales et l'économie des communautés", "Traveling while respecting the environment, local cultures and community economies", true),
        ch("Voyager le plus loin possible sans limite", "Traveling as far as possible with no limit", false),
        ch("Ne jamais rencontrer les habitants", "Never meeting the locals", false),
        ch("Gaspiller les ressources de la destination", "Wasting the destination's resources", false)
       ],
       "explFr": "Le tourisme responsable cherche à limiter les impacts négatifs (environnement, culture) et à faire profiter les communautés d'accueil.",
       "explEn": "Responsible tourism seeks to limit negative impacts (environment, culture) and to benefit host communities." },
     { "fr": "Quel comportement respecte les cultures locales en voyage?",
       "en": "Which behavior respects local cultures while traveling?",
       "choices": [
        ch("Se renseigner sur les coutumes et s'habiller de façon appropriée sur les lieux de culte", "Learning about customs and dressing appropriately at places of worship", true),
        ch("Ignorer toutes les règles locales", "Ignoring all local rules", false),
        ch("Photographier les gens sans leur accord", "Photographing people without their consent", false),
        ch("Se moquer des traditions", "Mocking traditions", false)
       ],
       "explFr": "Le respect des coutumes locales (tenue, comportement, consentement pour les photos) est au cœur d'un voyage responsable.",
       "explEn": "Respecting local customs (dress, behavior, consent for photos) is central to responsible travel." },
     tf("Réduire son empreinte écologique (déchets, énergie) fait partie du tourisme responsable.",
        "Reducing one's ecological footprint (waste, energy) is part of responsible tourism.", true),
     tf("Un conseiller peut recommander des fournisseurs qui respectent des pratiques durables.",
        "A counselor can recommend suppliers that follow sustainable practices.", true),
     { "fr": "L'éthique professionnelle du conseiller inclut...",
       "en": "The counselor's professional ethics include...",
       "choices": [
        ch("L'honnêteté, la transparence des prix et le respect du client", "Honesty, price transparency and respect for the client", true),
        ch("Cacher les frais au client", "Hiding fees from the client", false),
        ch("Mentir sur les destinations", "Lying about destinations", false),
        ch("Divulguer les données du client", "Disclosing the client's data", false)
       ],
       "explFr": "L'éthique du métier repose sur l'honnêteté, la confidentialité, l'exactitude de l'information et le respect du client.",
       "explEn": "The trade's ethics rest on honesty, confidentiality, accurate information and respect for the client." }
   ]},
   { "level": 2, "questions": [
     match("Associe chaque geste au type d'impact touristique.", "Match each action to its type of tourism impact.", [
        pair("Acheter de l'artisanat local", "Buying local crafts", "Impact économique positif", "Positive economic impact"),
        pair("Respecter les sentiers balisés", "Staying on marked trails", "Protection de l'environnement", "Environmental protection"),
        pair("Apprendre quelques mots de la langue", "Learning a few words of the language", "Respect culturel", "Cultural respect"),
        pair("Surcharger un site fragile", "Overcrowding a fragile site", "Impact négatif", "Negative impact")
     ]),
     { "fr": "Pourquoi encourager un client à acheter auprès de commerces locaux à destination?",
       "en": "Why encourage a client to buy from local businesses at the destination?",
       "choices": [
        ch("Pour soutenir l'économie de la communauté d'accueil", "To support the host community's economy", true),
        ch("Pour appauvrir la région", "To impoverish the region", false),
        ch("Parce que c'est toujours moins cher partout", "Because it's always cheaper everywhere", false),
        ch("Pour éviter de rencontrer les habitants", "To avoid meeting locals", false)
       ],
       "explFr": "Acheter localement fait profiter directement les habitants des retombées du tourisme.",
       "explEn": "Buying locally lets residents directly benefit from tourism's economic spinoffs." },
     tf("Le surtourisme peut nuire aux sites naturels fragiles et à la qualité de vie des résidents.",
        "Overtourism can harm fragile natural sites and residents' quality of life.", true),
     { "fr": "Un client demande un produit qui exploite des animaux sauvages de façon cruelle. Quelle est la posture éthique?",
       "en": "A client asks for a product that cruelly exploits wild animals. What is the ethical stance?",
       "choices": [
        ch("L'informer des enjeux et proposer une alternative respectueuse du bien-être animal", "Inform them of the issues and propose an animal-welfare-friendly alternative", true),
        ch("Vendre sans rien dire", "Sell it without a word", false),
        ch("Se moquer de sa demande", "Mock their request", false),
        ch("Refuser brutalement sans expliquer", "Refuse bluntly with no explanation", false)
       ],
       "explFr": "Un conseiller responsable informe et oriente vers des activités éthiques, tout en respectant le choix éclairé du client.",
       "explEn": "A responsible counselor informs and steers toward ethical activities, while respecting the client's informed choice." },
     tf("Compenser les émissions de carbone d'un vol est une option que certains voyageurs choisissent.",
        "Offsetting a flight's carbon emissions is an option some travelers choose.", true)
   ]},
   { "level": 3, "questions": [
     scenario("Un fournisseur t'offre une commission plus élevée pour pousser un forfait qui ne convient pas vraiment aux besoins de ta cliente.\n\nQue fais-tu?",
       "A supplier offers you a higher commission to push a package that doesn't really fit your client's needs.\n\nWhat do you do?", [
        ch("Recommander le produit réellement adapté au client, peu importe la commission", "Recommend the product truly suited to the client, regardless of commission", true),
        ch("Pousser le produit le plus commissionné", "Push the highest-commission product", false),
        ch("Cacher les autres options au client", "Hide the other options from the client", false),
        ch("Mentir sur les avantages du produit", "Lie about the product's benefits", false)
       ]),
     scenario("Ta cliente veut un séjour écotouristique authentique qui bénéficie aux communautés locales.\n\nQue lui proposes-tu?",
       "Your client wants an authentic ecotourism stay that benefits local communities.\n\nWhat do you propose?", [
        ch("Un hébergement local certifié durable, avec des guides et activités communautaires", "Locally owned, sustainability-certified lodging with community guides and activities", true),
        ch("Un méga-complexe qui rapatrie tous les profits à l'étranger", "A mega-resort that repatriates all profits abroad", false),
        ch("Une activité qui détruit un écosystème protégé", "An activity that destroys a protected ecosystem", false),
        ch("Aucune information sur l'impact", "No information about the impact", false)
       ]),
     tf("Un conseiller doit donner une information exacte même si cela peut faire perdre une vente.",
        "A counselor must give accurate information even if it may cost a sale.", true),
     { "fr": "Pourquoi la transparence des prix (frais et taxes) fait-elle partie de l'éthique professionnelle?",
       "en": "Why is price transparency (fees and taxes) part of professional ethics?",
       "choices": [
        ch("Parce que le client a droit à un prix clair pour décider en toute connaissance de cause", "Because the client is entitled to a clear price to make an informed decision", true),
        ch("Parce que cacher les frais augmente la fidélité", "Because hiding fees increases loyalty", false),
        ch("Parce que la loi encourage les frais cachés", "Because the law encourages hidden fees", false),
        ch("Ce n'est pas de l'éthique", "It has nothing to do with ethics", false)
       ],
       "explFr": "Un prix transparent respecte le droit du consommateur à une information juste et bâtit une relation de confiance durable.",
       "explEn": "A transparent price respects the consumer's right to fair information and builds lasting trust." },
     tf("Accepter un avantage d'un fournisseur pour tromper le client est conforme à l'éthique du métier.",
        "Accepting a benefit from a supplier to deceive the client conforms to the trade's ethics.", false)
   ]}
  ]
 }
];

const UI_TEXT = {
  fr: {
    appName: "VoyageQuest",
    tagline: "Deviens conseiller(ère) en voyages — DEP 5236",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée — badge débloqué!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "VoyageQuest",
    tagline: "Become a travel counselor — DVS 5236",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered — badge unlocked!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "chameau",
  "name_fr": "Chameau",
  "name_en": "Camel",
  "title_fr": "L'Aventurier",
  "title_en": "The Adventurer",
  "stages": [
   "🥚",
   "🥚",
   "🐫",
   "🐫",
   "🐫",
   "🐫",
   "🐫",
   "🐫",
   "🐫",
   "🐫",
   "🐫",
   "🐫"
  ]
 },
 {
  "id": "baleine",
  "name_fr": "Baleine",
  "name_en": "Whale",
  "title_fr": "Le Grand Voyageur",
  "title_en": "The Great Traveler",
  "stages": [
   "🥚",
   "🥚",
   "🐋",
   "🐋",
   "🐋",
   "🐋",
   "🐋",
   "🐋",
   "🐋",
   "🐋",
   "🐋",
   "🐋"
  ]
 },
 {
  "id": "mouette",
  "name_fr": "Mouette",
  "name_en": "Seagull",
  "title_fr": "La Libre",
  "title_en": "The Free One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🐦",
   "🐦",
   "🐦",
   "🐦",
   "🐦",
   "🐦"
  ]
 },
 {
  "id": "phoquevoy",
  "name_fr": "Phoque",
  "name_en": "Seal",
  "title_fr": "L'Explorateur",
  "title_en": "The Explorer",
  "stages": [
   "🥚",
   "🥚",
   "🦭",
   "🦭",
   "🦭",
   "🦭",
   "🦭",
   "🦭",
   "🦭",
   "🦭",
   "🦭",
   "🦭"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
