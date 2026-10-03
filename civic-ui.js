// Readable civic exercise components used by the existing React page.
globalThis.createCivicComponents = function (React, jsx) {
  const h = jsx.jsx;
  const hs = jsx.jsxs;
  const sourceUrl = 'https://www.immigration.interieur.gouv.fr/documentation/guides-textes-et-brochures/questions-de-connaissance-pour-lexamen-civique-nationalite-francaise.html';

  function Question({question, index, prefix, selected, onSelect, checked}) {
    const correct = selected === question.answer;
    return hs('section', {className: 'assessment-card', children: [
      h('span', {className: 'exercise-meta', children: `${index + 1}. ${question.kind === 'scenario' ? 'Mise en situation' : 'Connaissance civique'} · QCM`}),
      h('h2', {children: question.q}),
      h('div', {className: 'choice-list', children: question.options.map((option, optionIndex) =>
        hs('label', {children: [
          h('input', {type: 'radio', name: `${prefix}-${index}`, checked: selected === optionIndex,
            onChange: () => onSelect(optionIndex)}), option
        ]}, optionIndex))}),
      checked && hs('div', {className: `feedback ${correct ? 'good' : ''}`, role: 'status', children: [
        h('strong', {children: correct ? 'Bonne réponse. ' : `À revoir. Réponse : ${question.options[question.answer]}. `}),
        question.explanation,
        h('div', {className: 'question-reference', children: `À relire : Livret p. ${question.sourcePages}.`})
      ]})
    ]});
  }

  function ReadingPractice({reading, completed, total, mastered, ready, onAssessment}) {
    const questions = globalThis.EXERCISES[reading.part].filter(q => q.readingId === reading.id);
    const [index, setIndex] = React.useState(0);
    const [selected, setSelected] = React.useState(null);
    const [checked, setChecked] = React.useState(false);
    const question = questions[index];
    function changeQuestion(next) {
      setIndex(next); setSelected(null); setChecked(false);
    }
    return hs('div', {className: 'practice-body', children: [
      h('span', {className: 'exercise-meta', children: `Préparation civique · Question ${index + 1} / ${questions.length}`}),
      h('p', {className: 'instruction', children: 'Choisissez une seule réponse. Ces questions vérifient votre compréhension du chapitre.'}),
      h(Question, {question, index, prefix: `reading-${reading.id}`, selected,
        onSelect: value => {setSelected(value); setChecked(false);}, checked}),
      hs('div', {className: 'assessment-actions', children: [
        h('button', {className: 'primary', disabled: selected === null, onClick: () => setChecked(true), children: 'Vérifier ma réponse'}),
        index > 0 && h('button', {className: 'subtle', onClick: () => changeQuestion(index - 1), children: 'Question précédente'}),
        checked && index < questions.length - 1 && h('button', {className: 'subtle', onClick: () => changeQuestion(index + 1), children: 'Question suivante'})
      ]}),
      h('hr', {}),
      h('h3', {children: 'Votre prochaine étape'}),
      h('p', {className: 'instruction', children: ready ? 'Toutes les lectures sont terminées. Passez à l’évaluation de cette partie.' : `Terminez les ${total} lectures, puis obtenez 100 % à l’évaluation.`}),
      hs('div', {className: 'part-progress', children: [
        h('span', {children: `${completed} / ${total} lectures terminées`}),
        h('span', {children: mastered ? 'Évaluation : 100 %' : 'Objectif : 100 %'})
      ]}),
      h('button', {className: 'primary', disabled: !ready, onClick: onAssessment, children: 'Évaluation de la partie'}),
      !ready && h('p', {className: 'hint', children: 'Le bouton s’active après toutes les lectures.'})
    ]});
  }

  function PracticeNotice() {
    return hs('p', {className: 'civic-notice', children: [
      'Questions d’entraînement rédigées à partir du Livret et des thèmes de l’examen. Les scénarios sont des exemples créés pour réviser, pas les mises en situation officielles. ',
      h('a', {href: sourceUrl, target: '_blank', rel: 'noopener noreferrer', children: 'Consulter la liste officielle (naturalisation)'})
    ]});
  }

  function PartAssessment({part, completed, total, onBack, onMastery, onNext, alreadyMastered}) {
    const questions = globalThis.EXERCISES[part];
    const [answers, setAnswers] = React.useState({});
    const [result, setResult] = React.useState(null);
    const score = result?.score;
    const passed = score === questions.length || alreadyMastered;
    function check() {
      const checks = questions.map((q, i) => answers[i] === q.answer);
      const points = checks.filter(Boolean).length;
      setResult({score: points, checks});
      if (points === questions.length) onMastery();
      window.scrollTo({top: 0});
    }
    return hs('div', {className: 'assessment-page', children: [
      hs('div', {className: 'assessment-heading', children: [
        hs('div', {children: [h('h1', {children: `Évaluation · Partie ${part}`}),
          h('p', {children: `${questions.length} QCM de connaissances et de compréhension. Obtenez ${questions.length} / ${questions.length} pour débloquer ${part === 5 ? 'le test blanc final' : 'la partie suivante'}.`})]}),
        h('button', {className: 'subtle', onClick: onBack, children: 'Retour à la lecture'})
      ]}),
      hs('div', {className: 'assessment-status', children: [
        h('span', {children: `${completed} / ${total} lectures terminées`}),
        h('span', {children: 'Objectif du parcours : 100 %'}),
        h('span', {children: alreadyMastered ? 'Partie déjà maîtrisée' : 'Vous pouvez réessayer.'})
      ]}),
      h(PracticeNotice, {}),
      result && hs('div', {className: `score-banner ${score === questions.length ? 'passed' : ''}`, role: 'status', children: [
        h('strong', {children: `${score} / ${questions.length} · ${Math.round(score / questions.length * 100)} %`}),
        h('span', {children: score === questions.length ? 'Bravo ! Vous pouvez continuer.' : 'Revoyez les réponses et leurs explications, puis réessayez.'})
      ]}),
      h('div', {className: 'assessment-grid', children: questions.map((question, index) => h(Question, {
        question, index, prefix: `part-${part}`, selected: answers[index], checked: !!result,
        onSelect: value => {setAnswers(previous => ({...previous, [index]: value})); setResult(null);}
      }, question.id))}),
      hs('div', {className: 'assessment-actions', children: [
        h('button', {className: 'primary', onClick: check, children: 'Vérifier mes réponses'}),
        result && score < questions.length && h('button', {className: 'subtle', onClick: () => {
          setAnswers(previous => Object.fromEntries(Object.entries(previous).filter(([i]) => result.checks[i])));
          setResult(null); window.scrollTo({top: 0});
        }, children: 'Réessayer les questions à revoir'}),
        passed && h('button', {className: 'primary next', onClick: onNext, children: part === 5 ? 'Accéder au test blanc' : `Continuer vers la partie ${part + 1}`})
      ]})
    ]});
  }

  function MockExam({onBack, onBest, best}) {
    const questions = globalThis.MOCK_QUESTIONS;
    const [answers, setAnswers] = React.useState({});
    const [result, setResult] = React.useState(null);
    const answered = Object.keys(answers).length;
    function check() {
      const score = questions.filter((q, i) => answers[i] === q.answer).length;
      setResult({score}); onBest(score); window.scrollTo({top: 0});
    }
    return hs('div', {className: 'assessment-page', children: [
      hs('div', {className: 'assessment-heading', children: [
        hs('div', {children: [h('h1', {children: 'Test blanc final'}),
          h('p', {children: '40 questions : 28 connaissances et 12 mises en situation. Une réponse parmi quatre. Objectif : au moins 32 / 40. Prévoyez 45 minutes pour vous entraîner.'})]}),
        h('button', {className: 'subtle', onClick: onBack, children: 'Retour au parcours'})
      ]}),
      h(PracticeNotice, {}),
      hs('div', {className: 'assessment-status', children: [
        h('span', {children: `${answered} / 40 réponses choisies`}),
        h('span', {children: `Meilleur score : ${best} / 40`})
      ]}),
      result && hs('div', {className: `score-banner ${result.score >= 32 ? 'passed' : ''}`, role: 'status', children: [
        h('strong', {children: `${result.score} / 40 · ${Math.round(result.score / 40 * 100)} %`}),
        h('span', {children: result.score >= 32 ? 'Objectif de 80 % atteint pour ce test d’entraînement.' : 'Objectif : 32 bonnes réponses. Relisez les explications et recommencez.'})
      ]}),
      h('div', {className: 'mock-grid', children: questions.map((question, index) => h(Question, {
        question, index, prefix: 'mock', selected: answers[index], checked: !!result,
        onSelect: value => {setAnswers(previous => ({...previous, [index]: value})); setResult(null);}
      }, question.id))}),
      hs('div', {className: 'assessment-actions', children: [
        h('button', {className: 'primary', onClick: check, children: 'Voir mon résultat'}),
        h('button', {className: 'subtle', onClick: () => {setAnswers({}); setResult(null); window.scrollTo({top: 0});}, children: 'Recommencer le test'})
      ]})
    ]});
  }
  return {ReadingPractice, PartAssessment, MockExam};
};
