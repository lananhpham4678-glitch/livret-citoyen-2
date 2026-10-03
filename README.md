# Mon Livret Citoyen 2026

Parcours de lecture bilingue avec entraînement aux connaissances civiques.

## Exercices

- 60 QCM, chacun avec quatre propositions et une seule bonne réponse.
- Questions liées à chacune des 23 lectures : valeurs républicaines, institutions, droits et devoirs, histoire, géographie, culture et vie quotidienne.
- 12 mises en situation originales sur la discrimination, la laïcité, la liberté d’expression et les devoirs civiques.
- Correction et explication de chaque réponse, avec les pages du Livret à relire.
- Évaluation de chaque partie : toutes les lectures doivent être terminées, puis un score de 100 % débloque la partie suivante.
- Test blanc final de 40 questions : 28 connaissances et 12 mises en situation. Objectif : 32 / 40 (80 %). Prévoir 45 minutes ; le test n’impose pas de chronomètre.
- Vocabulaire conservé dans son onglet comme aide à la lecture.

Les questions, réponses et scénarios sont rédigés pour l’entraînement. Ils ne constituent pas la banque officielle exhaustive. Les mises en situation officielles ne sont pas publiques.

## Répartition du test blanc

| Thème | Questions | Répartition |
| --- | ---: | --- |
| Principes et valeurs | 11 | 3 devise/symboles, 2 laïcité, 6 situations |
| Institutions et politique | 6 | 3 démocratie/vote, 2 organisation, 1 Europe |
| Droits et devoirs | 11 | 2 droits fondamentaux, 3 devoirs, 6 situations |
| Histoire, géographie, culture | 8 | 3 histoire, 3 géographie, 2 patrimoine |
| Vie dans la société française | 4 | 1 logement, 1 santé, 1 travail, 1 éducation |

Références vérifiées le 3 octobre 2026 :

- [Programme et répartition officiels, article 3](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000052382287/)
- [Format, durée et seuil de réussite](https://www.service-public.gouv.fr/particuliers/actualites/A18713)
- [Questions officielles de connaissance, naturalisation](https://www.immigration.interieur.gouv.fr/documentation/guides-textes-et-brochures/questions-de-connaissance-pour-lexamen-civique-nationalite-francaise.html)

Les lectures du Livret servent de base aux explications. Les options et scénarios sont créés pour ce parcours.

## Fichiers utilisés

- `index.html` contient l’application React et les styles du parcours existant.
- `exercises.js` est la source unique des QCM et du choix des 40 questions finales.
- `civic-ui.js` contient les composants lisibles des exercices, évaluations et test blanc.
- `course-data.js` conserve les lectures sources, aussi intégrées dans `index.html`.
- `app.js` et `styles.css` conservent l’ancien lecteur autonome ; la page actuelle ne les charge pas.

Déployer ensemble `index.html`, `exercises.js` et `civic-ui.js`. Aucun build n’est nécessaire pour ces changements. Tester localement avec `python -m http.server 8000`.

La progression reste locale au navigateur. La migration de `livret-citoyen-learning-v4` vers `livret-citoyen-learning-v5` conserve les lectures terminées et le choix FR/EN. Les validations et l’ancien score sur 20 sont à refaire avec les nouveaux QCM ; le parcours reprend à la première lecture.
