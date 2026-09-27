const EXERCISES = {
  1: [
    {type:'mcq',q:'Quelle est la devise de la République française ?',options:['Liberté, Égalité, Fraternité','Travail, Justice, Solidarité','Unité, Laïcité, Liberté'],answer:0,explanation:'La devise officielle est « Liberté, Égalité, Fraternité ».'},
    {type:'fill',q:'Complétez : La langue officielle de la République est le _____.',answer:'français'},
    {type:'truefalse',q:'La laïcité signifie que l’État choisit une religion officielle.',answer:false,explanation:'La laïcité impose la neutralité de l’État vis-à-vis des religions.'},
    {type:'matching',q:'Associez chaque symbole à sa signification.',pairs:[['La Marseillaise','Hymne national'],['14 juillet','Fête nationale'],['Marianne','Symbole de la République'],['Drapeau tricolore','Bleu, blanc, rouge']]},
    {type:'ordering',q:'Remettez ces événements dans l’ordre chronologique.',items:['Prise de la Bastille (1789)','Fête de la Fédération (1790)','Le drapeau tricolore devient officiel (1794)','Le 14 juillet devient fête nationale (1880)']},
    {type:'short',q:'Expliquez avec vos mots ce que signifie la liberté en France.',model:'La liberté permet à chacun de faire ses choix, penser et s’exprimer, dans le respect de la loi et des droits des autres.'}
  ],
  2: [
    {type:'mcq',q:'Quelles sont les deux chambres du Parlement ?',options:['Assemblée nationale et Sénat','Sénat et Gouvernement','Conseil constitutionnel et Assemblée nationale'],answer:0,explanation:'Le Parlement est composé de l’Assemblée nationale et du Sénat.'},
    {type:'fill',q:'Le Président de la République est élu pour _____ ans.',answer:'5'},
    {type:'truefalse',q:'Les sénateurs sont élus au suffrage universel direct.',answer:false,explanation:'Ils sont élus au suffrage universel indirect.'},
    {type:'matching',q:'Associez l’institution à sa fonction.',pairs:[['Parlement','Vote les lois'],['Gouvernement','Met en œuvre les lois'],['Justice','Rend la justice'],['Conseil constitutionnel','Contrôle la conformité des lois à la Constitution']]},
    {type:'ordering',q:'Classez les grandes étapes européennes.',items:['CECA (1951)','Traité de Rome / CEE (1957)','Union européenne (1992)','Mise en circulation de l’euro (2002)']},
    {type:'short',q:'Quelles conditions principales faut-il remplir pour voter en France ?',model:'Il faut notamment être majeur, avoir la nationalité requise selon l’élection, ne pas être privé de ses droits civiques et être inscrit sur les listes électorales.'}
  ],
  3: [
    {type:'mcq',q:'Quelle juridiction juge les contraventions ?',options:['Tribunal de police','Cour d’assises','Conseil de prud’hommes'],answer:0,explanation:'Les contraventions sont jugées par le tribunal de police.'},
    {type:'fill',q:'Complétez : La présomption d’_____ s’applique tant qu’aucune condamnation définitive n’a été prononcée.',answer:'innocence'},
    {type:'truefalse',q:'La liberté d’expression autorise tous les propos sans aucune limite.',answer:false,explanation:'La loi interdit notamment certains propos diffamatoires, haineux ou violents.'},
    {type:'matching',q:'Associez la catégorie à un exemple.',pairs:[['Contravention','Tapage nocturne'],['Délit','Vol'],['Crime','Assassinat'],['Droit environnemental','Vivre dans un environnement équilibré']]},
    {type:'ordering',q:'Classez de la moins grave à la plus grave.',items:['Contravention','Délit','Crime']},
    {type:'short',q:'Que signifie l’obligation d’assistance à personne en danger ?',model:'Lorsqu’une personne est en danger, chacun doit porter secours s’il peut le faire sans mettre sa propre vie en péril.'}
  ],
  4: [
    {type:'mcq',q:'Quel événement a lieu le 14 juillet 1789 ?',options:['Prise de la Bastille','Adoption de la Constitution de 1958','Création de la Sécurité sociale'],answer:0,explanation:'La prise de la Bastille marque le début de la Révolution française.'},
    {type:'fill',q:'La Cinquième République est fondée par la Constitution de _____.',answer:'1958'},
    {type:'truefalse',q:'La loi de séparation des Églises et de l’État date de 1905.',answer:true,explanation:'Oui, la loi du 9 décembre 1905 organise cette séparation.'},
    {type:'matching',q:'Associez la personnalité à son repère.',pairs:[['Clovis','Unifie plusieurs royaumes francs'],['Louis XIV','Versailles'],['Napoléon Bonaparte','Code civil'],['Charles de Gaulle','Fondateur de la Cinquième République']]},
    {type:'ordering',q:'Remettez les régimes dans l’ordre.',items:['Ancien Régime','Révolution française','Première République','Premier Empire','Troisième République','Cinquième République']},
    {type:'short',q:'Pourquoi 1789 est-elle une date fondamentale ?',model:'1789 marque le début de la Révolution française et l’adoption de la Déclaration des droits de l’homme et du citoyen, qui fonde des valeurs républicaines majeures.'}
  ],
  5: [
    {type:'mcq',q:'Quelle est la durée légale du travail hebdomadaire mentionnée dans le Livret ?',options:['32 heures','35 heures','39 heures'],answer:1,explanation:'Le Code du travail fixe une durée légale de 35 heures par semaine.'},
    {type:'fill',q:'Le numéro européen d’urgence est le _____.',answer:'112'},
    {type:'truefalse',q:'La polygamie est autorisée en France.',answer:false,explanation:'La polygamie est interdite par la loi.'},
    {type:'matching',q:'Associez le service à son rôle.',pairs:[['France Travail','Aide à la recherche d’emploi'],['CPAM','Remboursement de frais de santé'],['Mairie','Inscription à l’école publique'],['Prud’hommes','Litiges individuels du travail']]},
    {type:'ordering',q:'Remettez les niveaux scolaires dans l’ordre.',items:['École maternelle','École élémentaire','Collège','Lycée']},
    {type:'short',q:'Quels sont quelques devoirs essentiels des parents ?',model:'Les parents doivent protéger leur enfant, veiller à sa santé et à sa sécurité, assurer son éducation, respecter sa dignité et sa vie privée, et l’accompagner dans ses usages numériques.'}
  ]
};
