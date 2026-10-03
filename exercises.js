// Civic knowledge practice. Authored questions and scenarios, not an official question bank.
const EXERCISES = {
  "1": [
    {
      "id": "p1-q1",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "symbols",
      "readingId": "p1-devise-libert-et-galit",
      "sourcePages": "6",
      "q": "Quelles valeurs forment ensemble la devise française ?",
      "options": [
        "Liberté, Égalité, Fraternité",
        "Travail, Famille, Patrie",
        "Liberté, Autorité, Religion",
        "Unité, Force, Obéissance"
      ],
      "answer": 0,
      "explanation": "La devise exprime les trois valeurs fondatrices de la République."
    },
    {
      "id": "p1-q2",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "symbols",
      "readingId": "p1-devise-libert-et-galit",
      "sourcePages": "6",
      "q": "Que signifie l’égalité devant la loi ?",
      "options": [
        "Les citoyens doivent avoir les mêmes opinions.",
        "Les citoyens ont les mêmes droits, quels que soient leur origine, leur sexe ou leur religion.",
        "Les droits dépendent du revenu.",
        "La loi ne s’applique qu’aux personnes nées en France."
      ],
      "answer": 1,
      "explanation": "L’égalité garantit les mêmes droits ; elle n’impose pas les mêmes opinions ou modes de vie."
    },
    {
      "id": "p1-q3",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "symbols",
      "readingId": "p1-les-symboles-de-la-france",
      "sourcePages": "8-9",
      "q": "Quel ensemble correspond aux symboles de la République ?",
      "options": [
        "Le drapeau européen, un roi et La Marseillaise",
        "Un drapeau vert et blanc, Marianne et un roi",
        "Le drapeau bleu, blanc, rouge, Marianne et La Marseillaise",
        "Le drapeau tricolore, une couronne et un hymne royal"
      ],
      "answer": 2,
      "explanation": "Le drapeau tricolore, Marianne et l’hymne national représentent la République."
    },
    {
      "id": "p1-q4",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "symbols",
      "readingId": "p1-les-symboles-de-la-france",
      "sourcePages": "8-9",
      "q": "À quelle date les Français célèbrent-ils la fête nationale ?",
      "options": [
        "Le 1er janvier",
        "Le 9 mai",
        "Le 11 novembre",
        "Le 14 juillet"
      ],
      "answer": 3,
      "explanation": "Le 14 juillet renvoie à la prise de la Bastille de 1789 et à la Fête de la Fédération de 1790."
    },
    {
      "id": "p1-q5",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "secularism",
      "readingId": "p1-rpublique-indivisible-et-laque",
      "sourcePages": "10-13",
      "q": "Quel principe définit la laïcité française ?",
      "options": [
        "La liberté de conscience et la neutralité de l’État à l’égard des religions",
        "Une religion obligatoire pour tous",
        "L’interdiction de croire en une religion",
        "Le financement obligatoire de toute activité religieuse"
      ],
      "answer": 0,
      "explanation": "La laïcité protège le droit de croire, de ne pas croire et de changer de religion ; l’État reste neutre."
    },
    {
      "id": "p1-q6",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "secularism",
      "readingId": "p1-rpublique-indivisible-et-laque",
      "sourcePages": "10-13",
      "q": "Quelle loi constitue un repère majeur de la séparation des Églises et de l’État ?",
      "options": [
        "La Constitution de 1791",
        "La loi de 1905",
        "Le Code civil de 1804",
        "Le traité de Rome de 1957"
      ],
      "answer": 1,
      "explanation": "La loi du 9 décembre 1905 est un texte fondateur de la laïcité."
    },
    {
      "id": "p1-q7",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "social",
      "readingId": "p1-rpublique-dmocratique-et-sociale",
      "sourcePages": "14",
      "q": "Pourquoi la République est-elle qualifiée de sociale ?",
      "options": [
        "Elle impose l’adhésion à une association.",
        "Elle réserve les soins aux personnes riches.",
        "Elle organise la solidarité et la protection sociale.",
        "Elle supprime toutes les contributions sociales."
      ],
      "answer": 2,
      "explanation": "La protection sociale et la solidarité collective participent au caractère social de la République."
    },
    {
      "id": "p1-q8",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "democracy",
      "readingId": "p1-rpublique-dmocratique-et-sociale",
      "sourcePages": "14",
      "q": "Dans une République démocratique, d’où vient la légitimité politique ?",
      "options": [
        "D’une famille royale",
        "D’une autorité religieuse",
        "De la seule richesse personnelle",
        "Du peuple, notamment par les élections"
      ],
      "answer": 3,
      "explanation": "La souveraineté appartient au peuple ; les citoyens participent à la vie démocratique."
    },
    {
      "id": "p1-q9",
      "type": "mcq",
      "kind": "scenario",
      "notion": "values-scenario",
      "readingId": "p1-devise-libert-et-galit",
      "sourcePages": "6",
      "q": "Vous critiquez une décision du gouvernement sans menacer ni diffamer. Que permet la liberté d’expression ?",
      "options": [
        "Exprimer cette opinion dans le respect des limites prévues par la loi",
        "La critique du gouvernement est toujours interdite.",
        "Seules les opinions approuvées par le gouvernement sont autorisées.",
        "Toute critique autorise aussi les menaces."
      ],
      "answer": 0,
      "explanation": "On peut exprimer un désaccord politique ; la liberté d’expression doit respecter la loi et les droits d’autrui."
    },
    {
      "id": "p1-q10",
      "type": "mcq",
      "kind": "scenario",
      "notion": "values-scenario",
      "readingId": "p1-discriminations-et-fraternit",
      "sourcePages": "6-7",
      "q": "Un employeur écarte une candidature uniquement à cause de l’origine de la personne. Comment qualifier cette décision ?",
      "options": [
        "Une préférence toujours autorisée",
        "Une discrimination interdite",
        "Une obligation légale",
        "Une règle de la laïcité"
      ],
      "answer": 1,
      "explanation": "L’origine ne peut justifier un traitement défavorable à l’embauche."
    },
    {
      "id": "p1-q11",
      "type": "mcq",
      "kind": "scenario",
      "notion": "values-scenario",
      "readingId": "p1-discriminations-et-fraternit",
      "sourcePages": "6-7",
      "q": "À compétences égales, une entreprise refuse une femme uniquement parce qu’elle est une femme. Quel principe est violé ?",
      "options": [
        "Le secret du vote",
        "La séparation des pouvoirs",
        "L’égalité entre les femmes et les hommes",
        "La liberté de circulation"
      ],
      "answer": 2,
      "explanation": "L’égalité s’applique notamment à l’emploi ; la discrimination fondée sur le sexe est interdite."
    },
    {
      "id": "p1-q12",
      "type": "mcq",
      "kind": "scenario",
      "notion": "values-scenario",
      "readingId": "p1-discriminations-et-fraternit",
      "sourcePages": "6-7",
      "q": "Vous participez à une collecte pour aider des personnes en difficulté. Quelle valeur illustre cet engagement ?",
      "options": [
        "La monarchie",
        "La censure",
        "La préférence religieuse de l’État",
        "La fraternité et la solidarité"
      ],
      "answer": 3,
      "explanation": "L’engagement associatif et l’aide aux autres sont des formes concrètes de fraternité."
    },
    {
      "id": "p1-q13",
      "type": "mcq",
      "kind": "scenario",
      "notion": "values-scenario",
      "readingId": "p1-rpublique-indivisible-et-laque",
      "sourcePages": "10-13",
      "q": "Un agent public refuse de traiter un dossier parce que l’usager a une autre religion. Que doit-il faire ?",
      "options": [
        "Traiter le dossier de façon neutre et sans discrimination",
        "Exiger un changement de religion",
        "Réserver le service aux personnes de sa religion",
        "Refuser tous les usagers croyants"
      ],
      "answer": 0,
      "explanation": "Les agents publics doivent respecter la neutralité et l’égalité des usagers."
    },
    {
      "id": "p1-q14",
      "type": "mcq",
      "kind": "scenario",
      "notion": "values-scenario",
      "readingId": "p1-rpublique-indivisible-et-laque",
      "sourcePages": "10-13",
      "q": "Une amie souhaite abandonner sa religion ou en choisir une autre. Quel droit la protège ?",
      "options": [
        "L’obligation de conserver la religion familiale",
        "La liberté de conscience",
        "Une autorisation obligatoire de son employeur",
        "L’interdiction de changer de croyance"
      ],
      "answer": 1,
      "explanation": "Chacun peut croire, ne pas croire ou changer de religion librement."
    }
  ],
  "2": [
    {
      "id": "p2-q1",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "democracy",
      "readingId": "p2-dmocratie-tat-de-droit-et-institutions",
      "sourcePages": "16",
      "q": "Quelle institution vote les lois françaises ?",
      "options": [
        "Le Parlement, composé de l’Assemblée nationale et du Sénat",
        "La police",
        "La Banque centrale européenne",
        "Les seules préfectures"
      ],
      "answer": 0,
      "explanation": "Le pouvoir législatif appartient au Parlement."
    },
    {
      "id": "p2-q2",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "organisation",
      "readingId": "p2-dmocratie-tat-de-droit-et-institutions",
      "sourcePages": "16",
      "q": "Qui nomme le Premier ministre ?",
      "options": [
        "Les maires réunis",
        "Le Président de la République",
        "Le président de la Commission européenne",
        "Les citoyens par un vote direct spécifique"
      ],
      "answer": 1,
      "explanation": "Le Président nomme le Premier ministre, qui dirige l’action du gouvernement."
    },
    {
      "id": "p2-q3",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "organisation",
      "readingId": "p2-dmocratie-tat-de-droit-et-institutions",
      "sourcePages": "16",
      "q": "Quels pouvoirs sont séparés dans les institutions françaises ?",
      "options": [
        "Les pouvoirs religieux, royal et militaire",
        "Les pouvoirs municipal, commercial et familial",
        "Les pouvoirs exécutif, législatif et judiciaire",
        "Les pouvoirs scolaire, médical et bancaire"
      ],
      "answer": 2,
      "explanation": "La séparation des pouvoirs empêche leur concentration et protège les libertés."
    },
    {
      "id": "p2-q4",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "organisation",
      "readingId": "p2-dmocratie-tat-de-droit-et-institutions",
      "sourcePages": "16",
      "q": "À quoi sert le Conseil constitutionnel ?",
      "options": [
        "À gérer les hôpitaux",
        "À élire les maires",
        "À remplacer toutes les juridictions pénales",
        "À contrôler notamment la conformité des lois à la Constitution"
      ],
      "answer": 3,
      "explanation": "Le Conseil constitutionnel veille au respect de la Constitution."
    },
    {
      "id": "p2-q5",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "democracy",
      "readingId": "p2-le-droit-de-vote",
      "sourcePages": "17-18",
      "q": "Quel est l’âge minimum pour voter à une élection présidentielle française ?",
      "options": [
        "18 ans",
        "16 ans",
        "21 ans",
        "25 ans"
      ],
      "answer": 0,
      "explanation": "Il faut notamment être majeur, français, jouir de ses droits civiques et être inscrit sur les listes électorales."
    },
    {
      "id": "p2-q6",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "democracy",
      "readingId": "p2-le-droit-de-vote",
      "sourcePages": "17-18",
      "q": "Quelle est la durée normale du mandat présidentiel ?",
      "options": [
        "Trois ans",
        "Cinq ans",
        "Six ans",
        "Neuf ans"
      ],
      "answer": 1,
      "explanation": "Le mandat du Président de la République dure cinq ans."
    },
    {
      "id": "p2-q7",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "democracy",
      "readingId": "p2-le-droit-de-vote",
      "sourcePages": "17-18",
      "q": "Comment les députés de l’Assemblée nationale sont-ils élus ?",
      "options": [
        "Par nomination du Président",
        "Par les seuls sénateurs",
        "Au suffrage universel direct",
        "Par héritage"
      ],
      "answer": 2,
      "explanation": "Les électeurs choisissent directement leurs députés lors des élections législatives."
    },
    {
      "id": "p2-q8",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "organisation",
      "readingId": "p2-organisation-territoriale",
      "sourcePages": "19-21",
      "q": "Qui représente l’État dans un département ?",
      "options": [
        "Le roi",
        "Le président du Parlement européen",
        "Le directeur de chaque école",
        "Le préfet"
      ],
      "answer": 3,
      "explanation": "Le préfet représente l’État dans le département."
    },
    {
      "id": "p2-q9",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "organisation",
      "readingId": "p2-organisation-territoriale",
      "sourcePages": "19-21",
      "q": "Qui administre une commune ?",
      "options": [
        "Le maire et le conseil municipal",
        "La Commission européenne",
        "Le Conseil constitutionnel",
        "Les seuls sénateurs"
      ],
      "answer": 0,
      "explanation": "Le conseil municipal est élu ; il élit le maire."
    },
    {
      "id": "p2-q10",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "europe",
      "readingId": "p2-lunion-europenne",
      "sourcePages": "22-23",
      "q": "Quel scrutin permet aux citoyens de choisir leurs députés au Parlement européen ?",
      "options": [
        "Les élections municipales",
        "Les élections européennes",
        "Les élections présidentielles françaises",
        "Les élections sénatoriales françaises"
      ],
      "answer": 1,
      "explanation": "Les députés européens sont élus au suffrage universel direct par les citoyens de l’Union européenne."
    }
  ],
  "3": [
    {
      "id": "p3-q1",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "rights",
      "readingId": "p3-cadre-gnral-et-liberts-individuelles",
      "sourcePages": "25-27",
      "q": "Que permet la liberté d’expression ?",
      "options": [
        "Exprimer ses opinions dans les limites fixées par la loi",
        "Diffuser librement toutes les menaces",
        "Interdire toute opinion différente",
        "Échapper à toute responsabilité pour ses propos"
      ],
      "answer": 0,
      "explanation": "La liberté d’expression protège les opinions mais n’autorise pas notamment la diffamation ou l’incitation à la haine."
    },
    {
      "id": "p3-q2",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "rights",
      "readingId": "p3-cadre-gnral-et-liberts-individuelles",
      "sourcePages": "25-27",
      "q": "Quel texte de 1789 affirme des droits fondamentaux comme la liberté et l’égalité ?",
      "options": [
        "Le traité de Maastricht",
        "La Déclaration des droits de l’homme et du citoyen",
        "Le Code du travail",
        "La loi de séparation des Églises et de l’État"
      ],
      "answer": 1,
      "explanation": "La Déclaration de 1789 est un texte fondateur des droits et libertés."
    },
    {
      "id": "p3-q3",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "rights",
      "readingId": "p3-dignit-vie-prive-et-droit-de-disposer-de-son-corps",
      "sourcePages": "28-29",
      "q": "Quel principe protège une personne contre les traitements humiliants ou dégradants ?",
      "options": [
        "La préférence nationale dans tous les services",
        "Le droit de punir sans jugement",
        "Le respect de la dignité humaine",
        "Le pouvoir absolu de l’employeur"
      ],
      "answer": 2,
      "explanation": "La dignité humaine doit être respectée pour toute personne."
    },
    {
      "id": "p3-q4",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "rights",
      "readingId": "p3-dignit-vie-prive-et-droit-de-disposer-de-son-corps",
      "sourcePages": "28-29",
      "q": "Que protège le droit au respect de la vie privée ?",
      "options": [
        "La possibilité de diffuser les données privées d’autrui sans limite",
        "Le droit d’imposer une religion aux autres",
        "L’interdiction de toute vie familiale",
        "La vie personnelle et familiale de chacun"
      ],
      "answer": 3,
      "explanation": "La vie privée protège notamment la vie personnelle, familiale et les informations concernant une personne."
    },
    {
      "id": "p3-q5",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "duties",
      "readingId": "p3-sret-justice-et-droits-politiques",
      "sourcePages": "29-31",
      "q": "Quelle est la catégorie d’infraction pénale la plus grave ?",
      "options": [
        "Le crime",
        "La contravention",
        "Le délit",
        "Une simple divergence d’opinion"
      ],
      "answer": 0,
      "explanation": "Les infractions sont classées en contraventions, délits et crimes, selon leur gravité."
    },
    {
      "id": "p3-q6",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "rights",
      "readingId": "p3-sret-justice-et-droits-politiques",
      "sourcePages": "29-31",
      "q": "Que signifie la présomption d’innocence ?",
      "options": [
        "Une accusation suffit à prouver la culpabilité.",
        "Une personne est présumée innocente tant que sa culpabilité n’est pas légalement établie.",
        "Une personne ne peut jamais être jugée.",
        "La police prononce toujours la condamnation définitive."
      ],
      "answer": 1,
      "explanation": "Une accusation ne constitue pas une condamnation ; la culpabilité doit être établie selon la loi."
    },
    {
      "id": "p3-q7",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "duties",
      "readingId": "p3-lois-institutions-et-devoirs-civiques",
      "sourcePages": "32-36",
      "q": "À quoi servent notamment les impôts ?",
      "options": [
        "À financer seulement les partis politiques",
        "À remplacer toutes les lois",
        "À financer les services publics et la solidarité collective",
        "À payer uniquement les dépenses privées des contribuables"
      ],
      "answer": 2,
      "explanation": "Les impôts financent des dépenses publiques comme l’éducation, la sécurité et les infrastructures."
    },
    {
      "id": "p3-q8",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "duties",
      "readingId": "p3-lois-institutions-et-devoirs-civiques",
      "sourcePages": "32-36",
      "q": "Que doit faire une personne résidant en France à l’égard des lois ?",
      "options": [
        "Respecter seulement les lois qu’elle apprécie",
        "Suivre uniquement les lois de son pays d’origine",
        "Ignorer les décisions judiciaires",
        "Respecter les lois, même si elle est en désaccord avec elles"
      ],
      "answer": 3,
      "explanation": "Les lois s’appliquent à tous ; un désaccord peut s’exprimer par des moyens légaux."
    },
    {
      "id": "p3-q9",
      "type": "mcq",
      "kind": "scenario",
      "notion": "duties-scenario",
      "readingId": "p3-cadre-gnral-et-liberts-individuelles",
      "sourcePages": "25-27",
      "q": "Un message appelle à agresser un groupe en raison de sa religion. La liberté d’expression protège-t-elle cet appel ?",
      "options": [
        "Non, l’incitation à la haine ou à la violence est interdite.",
        "Oui, si le message est publié sur internet.",
        "Oui, si l’auteur dit qu’il s’agit d’une opinion.",
        "Oui, si le groupe est minoritaire."
      ],
      "answer": 0,
      "explanation": "La liberté d’expression a des limites légales, y compris sur les réseaux sociaux."
    },
    {
      "id": "p3-q10",
      "type": "mcq",
      "kind": "scenario",
      "notion": "duties-scenario",
      "readingId": "p3-dignit-vie-prive-et-droit-de-disposer-de-son-corps",
      "sourcePages": "28-29",
      "q": "Quelqu’un veut publier la photo privée d’une autre personne sans son accord. Quelle attitude respecte ses droits ?",
      "options": [
        "La publier parce qu’elle a été reçue par message",
        "Respecter sa vie privée et demander son accord avant la diffusion",
        "La publier si cela fait rire les collègues",
        "La publier pour obtenir plus d’abonnés"
      ],
      "answer": 1,
      "explanation": "Le droit à la vie privée et le droit à l’image doivent être respectés."
    },
    {
      "id": "p3-q11",
      "type": "mcq",
      "kind": "scenario",
      "notion": "duties-scenario",
      "readingId": "p3-sret-justice-et-droits-politiques",
      "sourcePages": "29-31",
      "q": "Un voisin est accusé de vol mais n’a pas été condamné. Quelle attitude respecte la présomption d’innocence ?",
      "options": [
        "Le considérer automatiquement comme coupable",
        "Décider soi-même de sa peine",
        "Ne pas le présenter comme coupable avant que sa culpabilité soit établie",
        "L’exclure de tout service public"
      ],
      "answer": 2,
      "explanation": "La présomption d’innocence protège aussi les personnes mises en cause."
    },
    {
      "id": "p3-q12",
      "type": "mcq",
      "kind": "scenario",
      "notion": "duties-scenario",
      "readingId": "p3-lois-institutions-et-devoirs-civiques",
      "sourcePages": "32-36",
      "q": "Vous voyez une personne gravement blessée. Vous pouvez appeler les secours sans vous mettre en danger. Que devez-vous faire ?",
      "options": [
        "Partir sans rien faire",
        "Attendre systématiquement l’accord d’un juge",
        "Filmer la scène au lieu de prévenir les secours",
        "Alerter les secours et apporter l’aide possible sans danger"
      ],
      "answer": 3,
      "explanation": "Il faut porter assistance lorsqu’on peut le faire sans danger pour soi ou autrui ; appeler les secours est une forme d’aide."
    },
    {
      "id": "p3-q13",
      "type": "mcq",
      "kind": "scenario",
      "notion": "duties-scenario",
      "readingId": "p3-lois-institutions-et-devoirs-civiques",
      "sourcePages": "32-36",
      "q": "Une personne refuse de respecter une loi uniquement parce qu’elle ne l’aime pas. Quelle réponse est correcte ?",
      "options": [
        "Elle doit respecter la loi et peut la contester par des moyens légaux.",
        "Chacun décide des lois qui s’appliquent à lui.",
        "Les lois sont facultatives hors du lieu de travail.",
        "Un désaccord dispense toujours de respecter la loi."
      ],
      "answer": 0,
      "explanation": "Le respect de la loi est un devoir ; les recours et la participation démocratique permettent d’exprimer un désaccord."
    },
    {
      "id": "p3-q14",
      "type": "mcq",
      "kind": "scenario",
      "notion": "duties-scenario",
      "readingId": "p3-lois-institutions-et-devoirs-civiques",
      "sourcePages": "32-36",
      "q": "Vous devez déclarer vos revenus selon les règles fiscales. Que devez-vous faire ?",
      "options": [
        "Déclarer seulement si vous souhaitez voter",
        "Effectuer une déclaration exacte selon les règles applicables",
        "Cacher des revenus pour éviter l’impôt",
        "Laisser un ami inventer les montants"
      ],
      "answer": 1,
      "explanation": "Les obligations fiscales contribuent au financement de la vie collective."
    }
  ],
  "4": [
    {
      "id": "p4-q1",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "history",
      "readingId": "p4-du-moyen-ge-lancien-rgime",
      "sourcePages": "38-39",
      "q": "Quel roi est associé au château de Versailles et à la monarchie absolue ?",
      "options": [
        "Louis XIV",
        "Charles de Gaulle",
        "Napoléon III",
        "François Mitterrand"
      ],
      "answer": 0,
      "explanation": "Louis XIV a fait de Versailles un centre du pouvoir royal."
    },
    {
      "id": "p4-q2",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "history",
      "readingId": "p4-du-moyen-ge-lancien-rgime",
      "sourcePages": "38-39",
      "q": "Sous l’Ancien Régime, quel type de pouvoir domine en France ?",
      "options": [
        "La Cinquième République",
        "Une monarchie",
        "Une démocratie parlementaire contemporaine",
        "Une présidence élue pour cinq ans"
      ],
      "answer": 1,
      "explanation": "L’Ancien Régime désigne notamment la monarchie avant la Révolution."
    },
    {
      "id": "p4-q3",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "history",
      "readingId": "p4-rvolution-rpublique-et-empire",
      "sourcePages": "40-41",
      "q": "Quelle année marque le début de la Révolution française ?",
      "options": [
        "1515",
        "1848",
        "1789",
        "1958"
      ],
      "answer": 2,
      "explanation": "1789 est un repère majeur : prise de la Bastille et Déclaration des droits de l’homme et du citoyen."
    },
    {
      "id": "p4-q4",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "history",
      "readingId": "p4-rvolution-rpublique-et-empire",
      "sourcePages": "40-41",
      "q": "Quel texte juridique est associé à Napoléon Bonaparte ?",
      "options": [
        "La Constitution de 1958",
        "Le traité de Rome",
        "La Charte de l’environnement",
        "Le Code civil"
      ],
      "answer": 3,
      "explanation": "Le Code civil a été adopté en 1804 sous Napoléon."
    },
    {
      "id": "p4-q5",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "history",
      "readingId": "p4-du-xixe-sicle-la-cinquime-rpublique",
      "sourcePages": "42-46",
      "q": "Quel changement politique important concerne les femmes en 1944 ?",
      "options": [
        "Elles obtiennent le droit de vote et d’éligibilité.",
        "Elles perdent leur droit de travailler.",
        "Elles deviennent les seules électrices.",
        "Elles sont exclues des élections municipales."
      ],
      "answer": 0,
      "explanation": "Les femmes obtiennent le droit de vote et d’éligibilité en 1944 ; elles votent pour la première fois en 1945."
    },
    {
      "id": "p4-q6",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "history",
      "readingId": "p4-du-xixe-sicle-la-cinquime-rpublique",
      "sourcePages": "42-46",
      "q": "Quelle année correspond à la Constitution de la Cinquième République ?",
      "options": [
        "1789",
        "1958",
        "1905",
        "2002"
      ],
      "answer": 1,
      "explanation": "La Constitution du 4 octobre 1958 fonde la Cinquième République."
    },
    {
      "id": "p4-q7",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "geography",
      "readingId": "p4-prsidents-territoire-et-gographie",
      "sourcePages": "47-52",
      "q": "Quel fleuve traverse Paris ?",
      "options": [
        "La Loire",
        "Le Rhône",
        "La Seine",
        "La Garonne"
      ],
      "answer": 2,
      "explanation": "La Seine traverse Paris."
    },
    {
      "id": "p4-q8",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "geography",
      "readingId": "p4-prsidents-territoire-et-gographie",
      "sourcePages": "47-52",
      "q": "Quel territoire français se trouve en Amérique du Sud ?",
      "options": [
        "La Bretagne",
        "La Corse",
        "La Réunion",
        "La Guyane"
      ],
      "answer": 3,
      "explanation": "La Guyane fait partie de la France d’outre-mer et se situe en Amérique du Sud."
    },
    {
      "id": "p4-q9",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "geography",
      "readingId": "p4-prsidents-territoire-et-gographie",
      "sourcePages": "47-52",
      "q": "Quelle chaîne de montagnes se situe à la frontière entre la France et l’Espagne ?",
      "options": [
        "Les Pyrénées",
        "Les Alpes",
        "Le Jura",
        "Les Vosges"
      ],
      "answer": 0,
      "explanation": "Les Pyrénées séparent la France et l’Espagne."
    },
    {
      "id": "p4-q10",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "culture",
      "readingId": "p4-culture-et-patrimoine",
      "sourcePages": "53-60",
      "q": "Dans quel musée parisien peut-on voir la Joconde ?",
      "options": [
        "Le musée d’Orsay",
        "Le musée du Louvre",
        "Le Centre Pompidou",
        "Le musée Rodin"
      ],
      "answer": 1,
      "explanation": "La Joconde, peinte par Léonard de Vinci, est conservée au Louvre."
    },
    {
      "id": "p4-q11",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "culture",
      "readingId": "p4-culture-et-patrimoine",
      "sourcePages": "53-60",
      "q": "Quel écrivain est célèbre pour ses pièces de théâtre comme Le Malade imaginaire ?",
      "options": [
        "Claude Monet",
        "Auguste Rodin",
        "Molière",
        "Louis Pasteur"
      ],
      "answer": 2,
      "explanation": "Molière est un grand auteur de théâtre français."
    },
    {
      "id": "p4-q12",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "culture",
      "readingId": "p4-culture-et-patrimoine",
      "sourcePages": "53-60",
      "q": "Quel monument a été construit pour l’Exposition universelle de 1889 à Paris ?",
      "options": [
        "Le château de Versailles",
        "Le Mont-Saint-Michel",
        "Le pont du Gard",
        "La tour Eiffel"
      ],
      "answer": 3,
      "explanation": "La tour Eiffel est un repère majeur du patrimoine français."
    }
  ],
  "5": [
    {
      "id": "p5-q1",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "residence",
      "readingId": "p5-se-loger",
      "sourcePages": "62",
      "q": "Quel document fixe les engagements du locataire et du propriétaire ?",
      "options": [
        "Le contrat de location, appelé bail",
        "La carte Vitale",
        "La carte électorale",
        "Le diplôme scolaire"
      ],
      "answer": 0,
      "explanation": "Le bail précise les droits et les obligations du locataire et du propriétaire."
    },
    {
      "id": "p5-q2",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "residence",
      "readingId": "p5-se-loger",
      "sourcePages": "62",
      "q": "Quelle charge le locataire doit-il normalement payer selon son contrat de location ?",
      "options": [
        "Le salaire du propriétaire",
        "Le loyer convenu",
        "Les impôts de tous ses voisins",
        "Le coût de toutes les ventes de l’immeuble"
      ],
      "answer": 1,
      "explanation": "Le locataire doit notamment payer le loyer et les charges prévus par le bail."
    },
    {
      "id": "p5-q3",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "public-space",
      "readingId": "p5-se-dplacer-sassurer-et-espace-public",
      "sourcePages": "63-65",
      "q": "Que faut-il respecter lorsqu’on conduit en France ?",
      "options": [
        "Seulement les règles de son pays d’origine",
        "Les feux rouges seulement s’il y a un policier",
        "Le Code de la route et les obligations de permis et d’assurance applicables",
        "Aucune règle sur les petits trajets"
      ],
      "answer": 2,
      "explanation": "Les règles de circulation et d’assurance protègent les usagers de la route."
    },
    {
      "id": "p5-q4",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "public-space",
      "readingId": "p5-se-dplacer-sassurer-et-espace-public",
      "sourcePages": "63-65",
      "q": "Sans autorisation correspondante, peut-on stationner sur une place réservée aux personnes handicapées ?",
      "options": [
        "Oui, si l’on est pressé.",
        "Oui, pendant une journée entière.",
        "Oui, si aucune autre place n’est libre.",
        "Non, cette place est réservée aux personnes autorisées."
      ],
      "answer": 3,
      "explanation": "Il faut respecter les emplacements réservés et les droits des personnes handicapées."
    },
    {
      "id": "p5-q5",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "health",
      "readingId": "p5-environnement-sant-et-urgences",
      "sourcePages": "66-69",
      "q": "Quel organisme assure notamment le remboursement des soins dans le régime général ?",
      "options": [
        "La CPAM, au titre de l’Assurance Maladie",
        "Le conseil municipal",
        "Le Parlement européen",
        "France Travail"
      ],
      "answer": 0,
      "explanation": "La CPAM gère les droits et remboursements de l’Assurance Maladie pour les assurés du régime général."
    },
    {
      "id": "p5-q6",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "health",
      "readingId": "p5-environnement-sant-et-urgences",
      "sourcePages": "66-69",
      "q": "Quel numéro peut-on composer pour une urgence dans l’Union européenne ?",
      "options": [
        "Le 115 pour toutes les urgences médicales européennes",
        "Le 112",
        "Le 119 pour toutes les urgences routières européennes",
        "Le 39 39 pour un secours immédiat"
      ],
      "answer": 1,
      "explanation": "Le 112 est le numéro d’urgence européen."
    },
    {
      "id": "p5-q7",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "work",
      "readingId": "p5-travailler-en-france",
      "sourcePages": "70-72",
      "q": "Quelle est la durée légale hebdomadaire du travail à temps complet en France ?",
      "options": [
        "25 heures",
        "32 heures",
        "35 heures",
        "48 heures"
      ],
      "answer": 2,
      "explanation": "La durée légale est de 35 heures ; elle ne correspond pas à une interdiction de toute heure supplémentaire."
    },
    {
      "id": "p5-q8",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "work",
      "readingId": "p5-travailler-en-france",
      "sourcePages": "70-72",
      "q": "Quelle juridiction traite les litiges individuels entre un salarié et un employeur du secteur privé ?",
      "options": [
        "Le tribunal de police dans tous les cas",
        "Le Conseil constitutionnel",
        "La Commission européenne",
        "Le conseil de prud’hommes"
      ],
      "answer": 3,
      "explanation": "Le conseil de prud’hommes règle les litiges individuels liés au contrat de travail dans le secteur privé."
    },
    {
      "id": "p5-q9",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "education",
      "readingId": "p5-vie-familiale-enfants-et-ducation",
      "sourcePages": "73-76",
      "q": "Entre quels âges l’instruction est-elle obligatoire en France ?",
      "options": [
        "De 3 à 16 ans",
        "De 6 à 12 ans",
        "De 10 à 18 ans",
        "De 5 à 21 ans"
      ],
      "answer": 0,
      "explanation": "L’instruction est obligatoire de 3 à 16 ans. Il faut distinguer cette obligation de l’obligation de formation des 16–18 ans."
    },
    {
      "id": "p5-q10",
      "type": "mcq",
      "kind": "knowledge",
      "notion": "education",
      "readingId": "p5-vie-familiale-enfants-et-ducation",
      "sourcePages": "73-76",
      "q": "Quel objectif guide l’exercice de l’autorité parentale ?",
      "options": [
        "Permettre toutes les violences physiques",
        "Protéger la santé, la sécurité et l’éducation de l’enfant dans son intérêt",
        "Décider que l’enfant n’a aucun droit",
        "Supprimer l’obligation d’instruction"
      ],
      "answer": 1,
      "explanation": "L’autorité parentale s’exerce dans l’intérêt de l’enfant, dans le respect de sa personne et sans violences physiques ou psychologiques."
    }
  ]
};
const MOCK_QUESTION_IDS = ["p1-q1", "p1-q2", "p1-q3", "p1-q5", "p1-q6", "p1-q9", "p1-q10", "p1-q11", "p1-q12", "p1-q13", "p1-q14", "p2-q1", "p2-q5", "p2-q6", "p2-q2", "p2-q3", "p2-q10", "p3-q1", "p3-q2", "p3-q5", "p3-q7", "p3-q8", "p3-q9", "p3-q10", "p3-q11", "p3-q12", "p3-q13", "p3-q14", "p4-q1", "p4-q2", "p4-q3", "p4-q7", "p4-q8", "p4-q9", "p4-q10", "p4-q11", "p5-q1", "p5-q5", "p5-q7", "p5-q9"];
const MOCK_QUESTIONS = MOCK_QUESTION_IDS.map(id => {
  const question = Object.values(EXERCISES).flat().find(q => q.id === id);
  return {...question, part: Number(id.match(/^p(\d+)/)[1]), question: question.q};
});
globalThis.EXERCISES = EXERCISES;
globalThis.MOCK_QUESTIONS = MOCK_QUESTIONS;
