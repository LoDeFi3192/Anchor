"use strict";
const I18N = {
  fr:{
    homeHint:"Une crise commence ? Appuie. Je reste avec toi.",
    panicNow:"JE PANIQUE", panicSub:"Appuie pour de l'aide",
    energy:"Énergie", stage:"Évolution",
    navHome:"Accueil",navGarden:"Jardin",navDash:"Suivi",navContacts:"Contacts",navSettings:"Réglages",
    nightOpen:"Mode Nuit", nightBanner:"Il se fait tard. On essaie le mode Nuit ?", nightLater:"Plus tard",
    nightReassure:"Je veille. Tu peux lâcher.", nightBreath:"Respiration", nightShuffle:"Défilement",
    nightSound:"Son", nightSoft:"Plus doux", nightOff:"Extinction", nightShuffleHint:"Imagine ce mot, sans effort.",
    nightGoodnight:"Bonne nuit", nInhale:"Inspire", nHold:"Retiens", nExhale:"Expire",
    nightMedit:"Méditation", medHint:"Laisse les phrases te guider. Sans effort.", setTheme:"Thème", setAppearance:"Apparence",
    medSteps:["Installe-toi. Laisse le poids de ton corps s'enfoncer dans le lit.","Respire doucement. L'expiration, un peu plus longue que l'inspiration.","Relâche ton visage. Le front, les mâchoires, autour des yeux.","Laisse tes épaules descendre. Tes bras deviennent lourds.","Sens ta poitrine et ton ventre se soulever, sans rien forcer.","Relâche tes jambes. Tes pieds. Tout le bas du corps se pose.","Il n'y a rien à faire maintenant. Juste être là, au chaud.","Laisse chaque expiration t'emmener un peu plus loin vers le sommeil."],
    gardenTitle:"Ton jardin", gardenSub:"Chaque épisode traversé fait pousser quelque chose. C'est ta récupération, rendue visible.",
    gardenEmpty:"Ton jardin est encore nu. Termine une session pour y planter ta première lueur.",
    memTitle:"Mémoires", memSub:"Ce que tu as déjà surmonté. À relire quand c'est dur.",
    memAdd:"Ajouter une victoire ou une note encourageante", save:"Enregistrer",
    dashTitle:"Ton suivi", dashSub:"Des faits, pas un jugement. Les crises ont une durée. Elles finissent toujours.",
    dEpisodes:"Épisodes", dAvg:"Durée moyenne", dLast:"Dernier", dResil:"Résilience",
    dMilestones:"Jalons", dHistory:"Historique",
    contactsTitle:"Contacts sûrs", contactsSub:"Une personne, un appui. Touche pour appeler.",
    cName:"Nom", cNum:"Numéro", cAdd:"Ajouter",
    contactsNote:"Anchor n'est pas un service d'urgence. En cas de danger immédiat, appelle le 112 (UE) ou le 15 (FR).",
    setTitle:"Réglages", setCompanion:"Ton compagnon", setCname:"Son nom",
    setBreath:"Respiration", setPrefs:"Préférences",
    setVoice:"Voix guide", setHaptic:"Vibrations", setMotion:"Réduire les animations",
    setVoicePick:"Choisir la voix", setVoiceRate:"Rythme", setVoiceTest:"Tester la voix",
    voiceSample:"Tu es en sécurité. Respire avec moi, doucement.",
    rates:["Posé","Lent","Très lent"],
    setReset:"Réinitialiser les données",
    setPrivacy:"Toutes tes données restent sur cet appareil. Rien n'est envoyé. Aucun compte. Aucune pub.",
    pmExit:"Je vais mieux", pmStart:"Respirons ensemble", pmFollow:"Suis le cercle. Rien d'autre à faire.",
    pmGround:"Passer à l'ancrage", pmDone:"C'est fait", pmReturn:"Revenir au calme",
    inhale:"Inspire", hold:"Retiens", exhale:"Expire", pause:"Pause",
    realityTitles:["Tu es en sécurité.","Ceci va passer.","C'est une réaction de panique, pas un danger.","Ton corps fait du bruit. Tu n'es pas en danger."],
    realityLines:["Ton corps réagit fort, mais il n'y a pas de menace réelle ici.","Une crise dure quelques minutes. Pas plus. Elle redescend toujours.","Tu as déjà traversé ça. Tu peux le refaire, là, maintenant.","Pose tes pieds au sol. Sens le contact. Tu es ici."],
    senses:[
      {n:5,w:"choses que tu vois",h:"Regarde autour. Nomme-les, tout bas ou dans ta tête."},
      {n:4,w:"choses que tu peux toucher",h:"Touche-les vraiment. La texture, la température."},
      {n:3,w:"sons que tu entends",h:"Même les plus discrets. Écoute."},
      {n:2,w:"choses que tu sens (odorat)",h:"Inspire doucement par le nez."},
      {n:1,w:"chose que tu goûtes",h:"Ou imagine un goût familier et rassurant."}
    ],
    recapLines:["Durée : {d}. C'était une crise, pas un danger. Et c'est fini.","{n}e épisode traversé. Chaque fois, tu prouves que tu peux.","Tu es revenu(e) au calme. Note-le. Ton corps l'apprend."],
    cmsgEnergyLow:["Je t'attends, tranquillement. Quand tu veux.","Pas de pression. Je suis là quand tu reviens."],
    cmsgNormal:["Content de te voir. On respire un peu ?","Je suis fier de l'effort que tu fais.","Tu prends soin de toi. Ça compte."],
    cmsgAfter:["On l'a fait ensemble. Bien joué.","Tu vois ? Tu sais faire ça maintenant."],
    sleepy:"Je somnolais. Heureux que tu sois là.",
    stageNames:["Œuf","Éveil","Croissance","Épanoui","Lumineux"],
    milestones:[
      {n:1,ic:"🌱",t:"Première session terminée"},
      {n:3,ic:"🌿",t:"3 épisodes traversés"},
      {n:7,ic:"🌳",t:"7 fois, tu t'es ancré(e)"},
      {n:15,ic:"✨",t:"15 récupérations"},
      {n:30,ic:"🏔️",t:"30 crises surmontées"}
    ],
    proud:"Je suis fier de l'effort que tu as fait aujourd'hui.",
    memBefore:"Tu as déjà traversé ça. {n} fois.",
    navMood:"Humeur", moodTitle:"Ton humeur",
    moodSub:"Note ta journée d'un toucher. Une couleur, c'est tout. Touche un jour passé pour le corriger.",
    moodTodayQ:"Comment te sens-tu aujourd'hui ?",
    moodStatsT:"Aperçu", mood7:"7 derniers jours", moodLogged:"Jours notés",
    moodToday:"Aujourd'hui : ",
    moodNames:["Mauvais jour","Difficile","Moyen","Bien","Très bien"],
    tutSkip:"Passer", tutNext:"Suivant", tutStart:"Commencer", tutReplay:"Revoir le tutoriel",
    setReroll:"Tirer un nouveau compagnon", tapHint:"(touche-moi)",
    cvActs:"Activités", cvClose:"Fermer", miniClose:"Terminer",
    act_breathe:"Souffle libre", act_breathe_d:"Respire à ton rythme, sans crise.",
    act_bubbles:"Bulles anti-stress", act_bubbles_d:"Fais éclater les bulles, tranquillement.",
    act_stars:"Ciel d'étoiles", act_stars_d:"Pose des étoiles. Aucun but, juste le calme.",
    act_move:"Mouvement doux", act_move_d:"Étirements et mobilité pour relâcher les tensions.",
    act_woodoku:"Blocs zen", act_woodoku_d:"Glisse les blocs, nettoie les lignes. Vide-toi la tête.",
    wdLevel:"Niveau", wdRestart:"Recommencer", wdLevelUp:"Niveau {n}", wdBlocked:"Plus de place. Pas grave, on recommence.",
    actNeed:"pts", fbSub:"Suis le cercle, à ton rythme.",
    bubHint:"Touche les bulles pour les faire éclater.",
    starHint:"Touche le ciel pour allumer des étoiles.",
    setNotif:"Boost quotidien", setNotifNote:"Un rappel au bon moment quand l'app est ouverte. Pour les recevoir écran verrouillé, installe l'app sur l'écran d'accueil et autorise les notifications.", notifTest:"Tester la notification", notifTestBody:"Les notifications fonctionnent.",
    careTitle:"Prends soin de lui", bondLabel:"Lien",
    carePet:"Caresser", careFeed:"Nourrir", carePlay:"Jouer",
    careMsgPet:"Il ronronne de bonheur.", careMsgFeed:"Miam. Merci !", careMsgPlay:"Il adore jouer avec toi.",
    remTitle:"Rappels", remOn:"Activer les rappels", remMood:"Noter mon humeur", remRelax:"Faire une relaxation", remJournal:"Écrire dans le journal", remTime:"Heure préférée",
    remNote:"Rappels doux, à l'ouverture de l'app. Notif OS best-effort (sans serveur push, pas de notif app fermée).",
    nudgeMood:"Tu n'as pas encore noté ton humeur aujourd'hui.", nudgeMoodBtn:"Noter",
    nudgeRelax:"Et si tu prenais un moment pour te détendre ?", nudgeRelaxBtn:"Se détendre",
    nudgeJournal:"Envie de vider ta tête dans le journal ?", nudgeJournalBtn:"Écrire",
    nudgeDismiss:"Plus tard",
    jrnTitle:"Journal", jrnSub:"Vide ta tête. Une note par jour, ou autant que tu veux.",
    jrnPlaceholder:"Qu'est-ce qui te traverse aujourd'hui ?", jrnEmpty:"Aucune note pour l'instant.",
    grTitle:"Gratitude", grSub:"Trois choses pour lesquelles tu es reconnaissant(e) aujourd'hui. Ça donne des points à ton compagnon.",
    grPh1:"1. ...", grPh2:"2. ...", grPh3:"3. ...", grDone:"Noté pour aujourd'hui. Merci.", grEmpty:"Aucune gratitude notée.",
    boosts:["Tu es plus fort(e) que tu ne le penses.","Tu vas y arriver.","Une respiration à la fois.","Ce que tu ressens va passer.","Tu as déjà survécu à tous tes pires jours.","Sois doux(ce) avec toi aujourd'hui.","Ton calme est plus proche que tu ne crois.","Tu n'es pas tes pensées.","Chaque petit pas compte.","Tu mérites du repos.","Le courage, c'est avancer avec la peur.","Tu fais de ton mieux, et c'est assez.","Respire. Tu es là. Ça suffit.","Demain n'a pas besoin d'être réglé maintenant."],
    tutTitles:["Bienvenue dans Anchor","Le bouton","Ton compagnon","Tu le nourris","Note ta journée","Ton jardin","Prêt(e) ?"],
    tutBodies:[
      "Ton ancre quand l'anxiété monte. Tout est simple, ici. Une seule action à la fois.",
      "Une crise commence ? Touche le grand bouton rouge. Je te guide pas à pas : respiration, ancrage, retour au calme. En 2 à 10 minutes.",
      "Une petite créature vit avec toi. Elle grandit quand tu prends soin de toi, pas quand tu te connectes. Ta résilience la fait évoluer.",
      "Respirer, t'ancrer, noter ton humeur : chaque geste sain lui donne de l'énergie. Si tu t'absentes, elle ne meurt jamais. Elle somnole et t'attend. Aucune punition.",
      "Une couleur par jour, d'un simple toucher. Le calendrier révèle tes tendances, sans jugement.",
      "Chaque crise traversée plante quelque chose. Avec le temps, tu construis un sanctuaire. La preuve visible que tu avances.",
      "Tout se fait en moins de deux touchers. Je reste avec toi. On y va."
    ]
  },
  en:{
    homeHint:"Feeling a wave coming? Tap. I'll stay with you.",
    panicNow:"I'M PANICKING", panicSub:"Tap for help",
    energy:"Energy", stage:"Growth",
    navHome:"Home",navGarden:"Garden",navDash:"Track",navContacts:"Contacts",navSettings:"Settings",
    nightOpen:"Night mode", nightBanner:"It's getting late. Try Night mode?", nightLater:"Later",
    nightReassure:"I'm here. You can let go.", nightBreath:"Breathing", nightShuffle:"Word drift",
    nightSound:"Sound", nightSoft:"Gentler", nightOff:"Auto-off", nightShuffleHint:"Picture this word, no effort.",
    nightGoodnight:"Good night", nInhale:"Breathe in", nHold:"Hold", nExhale:"Breathe out",
    nightMedit:"Meditation", medHint:"Let the phrases guide you. No effort.", setTheme:"Theme", setAppearance:"Appearance",
    medSteps:["Settle in. Let the weight of your body sink into the bed.","Breathe gently. Make the out-breath a little longer than the in-breath.","Soften your face. Forehead, jaw, around the eyes.","Let your shoulders drop. Your arms grow heavy.","Feel your chest and belly rise, without forcing anything.","Release your legs. Your feet. The whole lower body settles.","There is nothing to do now. Just being here, warm.","Let each out-breath carry you a little further toward sleep."],
    gardenTitle:"Your garden", gardenSub:"Every episode you get through grows something. Your recovery, made visible.",
    gardenEmpty:"Your garden is still bare. Finish a session to plant your first glow.",
    memTitle:"Memories", memSub:"What you've already overcome. Reread it when it's hard.",
    memAdd:"Add a win or an encouraging note", save:"Save",
    dashTitle:"Your tracking", dashSub:"Facts, not judgement. Panic has a duration. It always ends.",
    dEpisodes:"Episodes", dAvg:"Avg duration", dLast:"Last", dResil:"Resilience",
    dMilestones:"Milestones", dHistory:"History",
    contactsTitle:"Safe contacts", contactsSub:"One person, one anchor. Tap to call.",
    cName:"Name", cNum:"Number", cAdd:"Add",
    contactsNote:"Anchor is not an emergency service. In immediate danger, call 112 (EU) or 911 (US).",
    setTitle:"Settings", setCompanion:"Your companion", setCname:"Its name",
    setBreath:"Breathing", setPrefs:"Preferences",
    setVoice:"Guide voice", setHaptic:"Haptics", setMotion:"Reduce motion",
    setVoicePick:"Choose voice", setVoiceRate:"Pace", setVoiceTest:"Test voice",
    voiceSample:"You are safe. Breathe with me, slowly.",
    rates:["Steady","Slow","Very slow"],
    setReset:"Reset data",
    setPrivacy:"All your data stays on this device. Nothing is sent. No account. No ads.",
    pmExit:"I feel better", pmStart:"Let's breathe together", pmFollow:"Follow the circle. Nothing else to do.",
    pmGround:"Move to grounding", pmDone:"Done", pmReturn:"Back to calm",
    inhale:"Breathe in", hold:"Hold", exhale:"Breathe out", pause:"Pause",
    realityTitles:["You are safe.","This will pass.","It's a panic response, not danger.","Your body is making noise. You are not in danger."],
    realityLines:["Your body is reacting hard, but there's no real threat here.","A panic attack lasts a few minutes. No more. It always comes down.","You've been through this before. You can do it again, right now.","Place your feet on the ground. Feel the contact. You are here."],
    senses:[
      {n:5,w:"things you can see",h:"Look around. Name them, quietly or in your head."},
      {n:4,w:"things you can touch",h:"Touch them for real. The texture, the temperature."},
      {n:3,w:"sounds you can hear",h:"Even the faint ones. Listen."},
      {n:2,w:"things you can smell",h:"Breathe in gently through your nose."},
      {n:1,w:"thing you can taste",h:"Or imagine a familiar, reassuring taste."}
    ],
    recapLines:["Duration: {d}. It was panic, not danger. And it's over.","Episode {n} done. Each time, you prove you can.","You came back to calm. Note it. Your body is learning."],
    cmsgEnergyLow:["I'm waiting, calmly. Whenever you want.","No pressure. I'm here when you come back."],
    cmsgNormal:["Good to see you. Shall we breathe a little?","I'm proud of the effort you make.","You're taking care of yourself. That counts."],
    cmsgAfter:["We did it together. Well done.","See? You know how to do this now."],
    sleepy:"I was dozing. Glad you're here.",
    stageNames:["Egg","Awakening","Growing","Blooming","Radiant"],
    milestones:[
      {n:1,ic:"🌱",t:"First session completed"},
      {n:3,ic:"🌿",t:"3 episodes overcome"},
      {n:7,ic:"🌳",t:"Grounded yourself 7 times"},
      {n:15,ic:"✨",t:"15 recoveries"},
      {n:30,ic:"🏔️",t:"30 attacks overcome"}
    ],
    proud:"I'm proud of the effort you made today.",
    memBefore:"You've gotten through this before. {n} times.",
    navMood:"Mood", moodTitle:"Your mood",
    moodSub:"Log your day with one tap. Just a color. Tap a past day to fix it.",
    moodTodayQ:"How are you feeling today?",
    moodStatsT:"Overview", mood7:"Last 7 days", moodLogged:"Days logged",
    moodToday:"Today: ",
    moodNames:["Rough day","Hard","Okay","Good","Great"],
    tutSkip:"Skip", tutNext:"Next", tutStart:"Start", tutReplay:"Replay tutorial",
    setReroll:"Draw a new companion", tapHint:"(tap me)",
    cvActs:"Activities", cvClose:"Close", miniClose:"Done",
    act_breathe:"Free breathing", act_breathe_d:"Breathe at your pace, no crisis needed.",
    act_bubbles:"Stress bubbles", act_bubbles_d:"Pop the bubbles, gently.",
    act_stars:"Star sky", act_stars_d:"Place stars. No goal, just calm.",
    act_move:"Gentle movement", act_move_d:"Stretches and mobility to release tension.",
    act_woodoku:"Zen blocks", act_woodoku_d:"Drag blocks, clear lines. Empty your head.",
    wdLevel:"Level", wdRestart:"Restart", wdLevelUp:"Level {n}", wdBlocked:"No more room. That is okay, let us restart.",
    actNeed:"pts", fbSub:"Follow the circle, at your pace.",
    bubHint:"Tap the bubbles to pop them.",
    starHint:"Tap the sky to light up stars.",
    setNotif:"Daily boost", setNotifNote:"A reminder at the right time while the app is open. To get them with the screen locked, install the app to your home screen and allow notifications.", notifTest:"Test notification", notifTestBody:"Notifications are working.",
    careTitle:"Take care of it", bondLabel:"Bond",
    carePet:"Pet", careFeed:"Feed", carePlay:"Play",
    careMsgPet:"It purrs with joy.", careMsgFeed:"Yum. Thank you!", careMsgPlay:"It loves playing with you.",
    remTitle:"Reminders", remOn:"Enable reminders", remMood:"Log my mood", remRelax:"Do a relaxation", remJournal:"Write in the journal", remTime:"Preferred time",
    remNote:"Gentle reminders when you open the app. OS notification is best-effort (no push server, no notification when closed).",
    nudgeMood:"You haven't logged your mood today.", nudgeMoodBtn:"Log",
    nudgeRelax:"How about a moment to relax?", nudgeRelaxBtn:"Relax",
    nudgeJournal:"Want to empty your head in the journal?", nudgeJournalBtn:"Write",
    nudgeDismiss:"Later",
    jrnTitle:"Journal", jrnSub:"Empty your head. One note a day, or as many as you like.",
    jrnPlaceholder:"What's on your mind today?", jrnEmpty:"No notes yet.",
    grTitle:"Gratitude", grSub:"Three things you're grateful for today. It gives points to your companion.",
    grPh1:"1. ...", grPh2:"2. ...", grPh3:"3. ...", grDone:"Saved for today. Thank you.", grEmpty:"No gratitude noted yet.",
    boosts:["You are stronger than you think.","You will get through this.","One breath at a time.","What you feel will pass.","You have survived all your worst days.","Be gentle with yourself today.","Your calm is closer than you think.","You are not your thoughts.","Every small step counts.","You deserve rest.","Courage is moving with the fear.","You are doing your best, and that is enough.","Breathe. You are here. That is enough.","Tomorrow doesn't need fixing right now."],
    tutTitles:["Welcome to Anchor","The button","Your companion","You feed it","Log your day","Your garden","Ready?"],
    tutBodies:[
      "Your anchor when anxiety rises. Everything here is simple. One action at a time.",
      "Feeling a wave coming? Tap the big red button. I guide you step by step: breathing, grounding, back to calm. In 2 to 10 minutes.",
      "A small creature lives with you. It grows when you take care of yourself, not when you log in. Your resilience makes it evolve.",
      "Breathing, grounding, logging your mood: every healthy act gives it energy. If you are away, it never dies. It dozes and waits. No punishment, ever.",
      "One color a day, with a single tap. The calendar reveals your trends, no judgement.",
      "Every attack you get through plants something. Over time you build a sanctuary. Visible proof you are moving forward.",
      "Everything takes less than two taps. I will stay with you. Let's go."
    ]
  },
  es:{
    homeHint:"¿Empieza una crisis? Toca. Me quedo contigo.",
    panicNow:"TENGO PÁNICO", panicSub:"Toca para recibir ayuda",
    energy:"Energía", stage:"Evolución",
    navHome:"Inicio",navGarden:"Jardín",navDash:"Seguimiento",navContacts:"Contactos",navSettings:"Ajustes",
    nightOpen:"Modo Noche", nightBanner:"Se hace tarde. ¿Probamos el Modo Noche?", nightLater:"Más tarde",
    nightReassure:"Estoy aquí. Puedes soltar.", nightBreath:"Respiración", nightShuffle:"Palabras",
    nightSound:"Sonido", nightSoft:"Más suave", nightOff:"Apagado", nightShuffleHint:"Imagina esta palabra, sin esfuerzo.",
    nightGoodnight:"Buenas noches", nInhale:"Inspira", nHold:"Retén", nExhale:"Espira",
    nightMedit:"Meditación", medHint:"Deja que las frases te guíen. Sin esfuerzo.", setTheme:"Tema", setAppearance:"Apariencia",
    medSteps:["Acomódate. Deja que el peso de tu cuerpo se hunda en la cama.","Respira despacio. Que la espiración dure un poco más que la inspiración.","Afloja la cara. La frente, la mandíbula, alrededor de los ojos.","Deja caer los hombros. Tus brazos se vuelven pesados.","Siente cómo suben el pecho y el vientre, sin forzar nada.","Suelta las piernas. Los pies. Toda la parte baja se posa.","No hay nada que hacer ahora. Solo estar aquí, en calor.","Deja que cada espiración te lleve un poco más hacia el sueño."],
    gardenTitle:"Tu jardín", gardenSub:"Cada episodio que superas hace crecer algo. Tu recuperación, hecha visible.",
    gardenEmpty:"Tu jardín aún está vacío. Termina una sesión para plantar tu primera luz.",
    memTitle:"Recuerdos", memSub:"Lo que ya has superado. Reléelo cuando sea difícil.",
    memAdd:"Añade un logro o una nota de ánimo", save:"Guardar",
    dashTitle:"Tu seguimiento", dashSub:"Hechos, no juicios. El pánico tiene una duración. Siempre termina.",
    dEpisodes:"Episodios", dAvg:"Duración media", dLast:"Último", dResil:"Resiliencia",
    dMilestones:"Hitos", dHistory:"Historial",
    contactsTitle:"Contactos seguros", contactsSub:"Una persona, un apoyo. Toca para llamar.",
    cName:"Nombre", cNum:"Número", cAdd:"Añadir",
    contactsNote:"Anchor no es un servicio de emergencia. Si hay peligro inmediato, llama al 112 (UE) o al 911.",
    setTitle:"Ajustes", setCompanion:"Tu compañero", setCname:"Su nombre",
    setBreath:"Respiración", setPrefs:"Preferencias",
    setVoice:"Voz guía", setHaptic:"Vibración", setMotion:"Reducir animaciones",
    setVoicePick:"Elegir la voz", setVoiceRate:"Ritmo", setVoiceTest:"Probar la voz",
    voiceSample:"Estás a salvo. Respira conmigo, despacio.",
    rates:["Calmado","Lento","Muy lento"],
    setReset:"Restablecer los datos",
    setPrivacy:"Todos tus datos se quedan en este dispositivo. No se envía nada. Sin cuenta. Sin anuncios.",
    pmExit:"Estoy mejor", pmStart:"Respiremos juntos", pmFollow:"Sigue el círculo. Nada más que hacer.",
    pmGround:"Pasar al anclaje", pmDone:"Hecho", pmReturn:"Volver a la calma",
    inhale:"Inspira", hold:"Retén", exhale:"Espira", pause:"Pausa",
    realityTitles:["Estás a salvo.","Esto va a pasar.","Es una reacción de pánico, no un peligro.","Tu cuerpo hace ruido. No estás en peligro."],
    realityLines:["Tu cuerpo reacciona con fuerza, pero aquí no hay una amenaza real.","Una crisis dura unos minutos. No más. Siempre baja.","Ya has pasado por esto. Puedes hacerlo otra vez, ahora.","Apoya los pies en el suelo. Siente el contacto. Estás aquí."],
    senses:[
      {n:5,w:"cosas que ves",h:"Mira alrededor. Nómbralas, en voz baja o en tu mente."},
      {n:4,w:"cosas que puedes tocar",h:"Tócalas de verdad. La textura, la temperatura."},
      {n:3,w:"sonidos que oyes",h:"Incluso los más leves. Escucha."},
      {n:2,w:"cosas que hueles",h:"Inspira despacio por la nariz."},
      {n:1,w:"cosa que saboreas",h:"O imagina un sabor familiar y reconfortante."}
    ],
    recapLines:["Duración: {d}. Fue pánico, no peligro. Y ya terminó.","Episodio {n} superado. Cada vez, demuestras que puedes.","Has vuelto a la calma. Anótalo. Tu cuerpo lo aprende."],
    cmsgEnergyLow:["Te espero, con calma. Cuando quieras.","Sin presión. Aquí estoy cuando vuelvas."],
    cmsgNormal:["Me alegra verte. ¿Respiramos un poco?","Estoy orgulloso del esfuerzo que haces.","Te estás cuidando. Eso cuenta."],
    cmsgAfter:["Lo hicimos juntos. Bien hecho.","¿Ves? Ahora sabes hacerlo."],
    sleepy:"Estaba dormitando. Me alegra que estés aquí.",
    stageNames:["Huevo","Despertar","Crecimiento","Pleno","Radiante"],
    milestones:[
      {n:1,ic:"🌱",t:"Primera sesión completada"},
      {n:3,ic:"🌿",t:"3 episodios superados"},
      {n:7,ic:"🌳",t:"Te anclaste 7 veces"},
      {n:15,ic:"✨",t:"15 recuperaciones"},
      {n:30,ic:"🏔️",t:"30 crisis superadas"}
    ],
    proud:"Estoy orgulloso del esfuerzo que has hecho hoy.",
    memBefore:"Ya has pasado por esto. {n} veces.",
    navMood:"Ánimo", moodTitle:"Tu ánimo",
    moodSub:"Registra tu día con un toque. Solo un color. Toca un día pasado para corregirlo.",
    moodTodayQ:"¿Cómo te sientes hoy?",
    moodStatsT:"Resumen", mood7:"Últimos 7 días", moodLogged:"Días registrados",
    moodToday:"Hoy: ",
    moodNames:["Día malo","Difícil","Regular","Bien","Muy bien"],
    tutSkip:"Saltar", tutNext:"Siguiente", tutStart:"Empezar", tutReplay:"Ver el tutorial",
    setReroll:"Sortear un nuevo compañero", tapHint:"(tócame)",
    cvActs:"Actividades", cvClose:"Cerrar", miniClose:"Terminar",
    act_breathe:"Respiración libre", act_breathe_d:"Respira a tu ritmo, sin crisis.",
    act_bubbles:"Burbujas antiestrés", act_bubbles_d:"Revienta las burbujas, con calma.",
    act_stars:"Cielo de estrellas", act_stars_d:"Coloca estrellas. Sin meta, solo calma.",
    act_move:"Movimiento suave", act_move_d:"Estiramientos y movilidad para soltar la tensión.",
    act_woodoku:"Bloques zen", act_woodoku_d:"Desliza bloques, limpia líneas. Vacía la mente.",
    wdLevel:"Nivel", wdRestart:"Reiniciar", wdLevelUp:"Nivel {n}", wdBlocked:"No queda sitio. No pasa nada, reiniciamos.",
    actNeed:"pts", fbSub:"Sigue el círculo, a tu ritmo.",
    bubHint:"Toca las burbujas para reventarlas.",
    starHint:"Toca el cielo para encender estrellas.",
    setNotif:"Impulso diario", setNotifNote:"Un recordatorio en el momento justo con la app abierta. Para recibirlos con la pantalla bloqueada, instala la app en tu pantalla de inicio y permite las notificaciones.", notifTest:"Probar la notificación", notifTestBody:"Las notificaciones funcionan.",
    careTitle:"Cuídalo", bondLabel:"Vínculo",
    carePet:"Acariciar", careFeed:"Alimentar", carePlay:"Jugar",
    careMsgPet:"Ronronea de felicidad.", careMsgFeed:"Ñam. ¡Gracias!", careMsgPlay:"Le encanta jugar contigo.",
    remTitle:"Recordatorios", remOn:"Activar recordatorios", remMood:"Registrar mi ánimo", remRelax:"Hacer una relajación", remJournal:"Escribir en el diario", remTime:"Hora preferida",
    remNote:"Recordatorios suaves al abrir la app. Notificación del sistema según disponibilidad (sin servidor push, sin aviso con la app cerrada).",
    nudgeMood:"Aún no has registrado tu ánimo hoy.", nudgeMoodBtn:"Registrar",
    nudgeRelax:"¿Y si te tomas un momento para relajarte?", nudgeRelaxBtn:"Relajarse",
    nudgeJournal:"¿Quieres vaciar la mente en el diario?", nudgeJournalBtn:"Escribir",
    nudgeDismiss:"Más tarde",
    jrnTitle:"Diario", jrnSub:"Vacía la mente. Una nota al día, o las que quieras.",
    jrnPlaceholder:"¿Qué te ronda hoy?", jrnEmpty:"Aún no hay notas.",
    grTitle:"Gratitud", grSub:"Tres cosas por las que estás agradecido(a) hoy. Da puntos a tu compañero.",
    grPh1:"1. ...", grPh2:"2. ...", grPh3:"3. ...", grDone:"Anotado por hoy. Gracias.", grEmpty:"Aún no hay gratitud anotada.",
    boosts:["Eres más fuerte de lo que crees.","Vas a superar esto.","Una respiración cada vez.","Lo que sientes va a pasar.","Has sobrevivido a todos tus peores días.","Sé amable contigo hoy.","Tu calma está más cerca de lo que crees.","No eres tus pensamientos.","Cada pequeño paso cuenta.","Mereces descansar.","El valor es avanzar con el miedo.","Lo haces lo mejor que puedes, y es suficiente.","Respira. Estás aquí. Es suficiente.","Mañana no hace falta resolverlo ahora."],
    tutTitles:["Bienvenido(a) a Anchor","El botón","Tu compañero","Tú lo alimentas","Registra tu día","Tu jardín","¿Listo(a)?"],
    tutBodies:[
      "Tu ancla cuando sube la ansiedad. Aquí todo es simple. Una acción cada vez.",
      "¿Empieza una crisis? Toca el botón rojo grande. Te guío paso a paso: respiración, anclaje, vuelta a la calma. En 2 a 10 minutos.",
      "Una pequeña criatura vive contigo. Crece cuando te cuidas, no cuando te conectas. Tu resiliencia la hace evolucionar.",
      "Respirar, anclarte, registrar tu ánimo: cada acto sano le da energía. Si te ausentas, nunca muere. Dormita y te espera. Sin castigos.",
      "Un color al día, con un solo toque. El calendario revela tus tendencias, sin juicios.",
      "Cada crisis superada planta algo. Con el tiempo, construyes un santuario. La prueba visible de que avanzas.",
      "Todo se hace en menos de dos toques. Me quedo contigo. Vamos."
    ]
  }
};
const COMPANIONS = {
  spirit:{name:{fr:"Lueur",en:"Glow",es:"Destello"}, stages:["🥚","🔅","✨","🌟","💫"]},
  fox:{name:{fr:"Renart",en:"Foxy",es:"Zorro"}, stages:["🥚","🦊","🦊","🦊","🦊"]},
  cat:{name:{fr:"Minou",en:"Whiskers",es:"Michi"}, stages:["🥚","🐱","🐈","🐈","🐈‍⬛"]},
  dragon:{name:{fr:"Braise",en:"Ember",es:"Brasa"}, stages:["🥚","🐉","🐉","🐲","🐲"]},
  forest:{name:{fr:"Sylve",en:"Sylph",es:"Silvano"}, stages:["🥚","🌱","🌿","🪴","🌳"]},
  robot:{name:{fr:"Bolt",en:"Bolt",es:"Bolt"}, stages:["🥚","🤖","🤖","🤖","🛸"]}
};
const COMPANION_LABELS={spirit:"Orbe",fox:"Renard",cat:"Chat",dragon:"Dragon",forest:"Forêt",robot:"Robot"};
const PLANTS=["🌷","🌸","🌼","🌻","🪻","🌹","🪷","🌲","🪔","💎","🍄","🌾"];
const BREATHING={
  box:{label:{fr:"Carrée 4-4-4-4",en:"Box 4-4-4-4"}, seq:[["inhale",4],["hold",4],["exhale",4],["hold",4]]},
  relax:{label:{fr:"4-7-8 relax",en:"4-7-8 relax"}, seq:[["inhale",4],["hold",7],["exhale",8]]},
  calm:{label:{fr:"Apaisée 4-6",en:"Calm 4-6"}, seq:[["inhale",4],["exhale",6]]}
};
const KEY="anchor.v1";
const DEFAULT={
  lang:"fr", companion:"spirit", cname:null, energy:60, sessions:0,
  history:[], garden:[], memories:[], contacts:[], moods:{}, moodEnergyDay:null, onboarded:false, companionRandomized:false, actEnergyDay:null,
  xp:0, xpInit:false, xpAward:{}, journal:[], lastNotifDay:null, woodLevel:1,
  bond:0, careAward:{}, nudgeDay:null, nightPromptDay:null, theme:"aurore", appearance:"auto", gratitude:[], notifSent:{}, reminders:{on:false,mood:true,relax:true,journal:false,hour:20},
  settings:{breath:"box", voice:true, haptic:true, motion:false, notif:false, voiceName:null, voiceRate:0.75, night:{sound:false,prompt:true,hour:22,timer:15,soft:false}},
  lastVisit:Date.now()
};
let S=load();
function load(){
  try{const r=localStorage.getItem(KEY);if(r){return Object.assign(JSON.parse(JSON.stringify(DEFAULT)),JSON.parse(r));}}catch(e){}
  return JSON.parse(JSON.stringify(DEFAULT));
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
function t(k){return (I18N[S.lang]&&I18N[S.lang][k])!=null?I18N[S.lang][k]:(I18N.fr[k]||k);}
function $(id){return document.getElementById(id);}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}
(function soften(){
  const days=(Date.now()-(S.lastVisit||Date.now()))/86400000;
  if(days>=1){ S.energy=Math.max(20, Math.round(S.energy - Math.min(25, days*6))); }
  S.lastVisit=Date.now(); save();
})();
/* random companion at birth */
(function birth(){
  if(!S.companionRandomized){
    const keys=Object.keys(COMPANIONS);
    S.companion=keys[Math.floor(Math.random()*keys.length)];
    S.companionRandomized=true; save();
  }
  if(!S.xpInit){ S.xp=Math.max(S.xp||0,(S.sessions||0)*20); S.xpInit=true; save(); }
})();
const XP_THRESH=[0,15,60,150,320];
function awardXp(src,amount,daily){
  if(daily){ S.xpAward=S.xpAward||{}; const k=dayKey(); if(S.xpAward[src]===k)return false; S.xpAward[src]=k; }
  S.xp=(S.xp||0)+amount; save(); return true;
}
function stageIndex(){
  const x=S.xp||0;
  for(let i=XP_THRESH.length-1;i>=0;i--){ if(x>=XP_THRESH[i]) return i; }
  return 0;
}
function stageProgress(){
  const i=stageIndex(); if(i>=4)return 100;
  const lo=XP_THRESH[i], hi=XP_THRESH[i+1];
  return Math.min(100, Math.round(((S.xp||0)-lo)/(hi-lo)*100));
}
function creatureGlyph(){return COMPANIONS[S.companion].stages[stageIndex()];}
function companionName(){return S.cname||COMPANIONS[S.companion].name[S.lang];}
function renderHome(){
  $("home-creature").textContent=creatureGlyph();
  $("pm-creature").textContent=creatureGlyph();
  $("home-cname").textContent=companionName();
  const c=$("home-companion");
  const sleepy=S.energy<35;
  c.classList.toggle("sleepy",sleepy);
  let msg;
  if(sleepy) msg=pick(t("cmsgEnergyLow"));
  else msg=pick(t("cmsgNormal"));
  $("home-cmsg").textContent=msg;
  $("m-energy").textContent=Math.round(S.energy);
  $("energy-bar").style.width=S.energy+"%";
  $("m-stage").textContent=t("stageNames")[stageIndex()];
  $("stage-bar").style.width=stageProgress()+"%";
}
function renderGarden(){
  const p=$("plants"); p.innerHTML="";
  $("garden-empty").style.display=S.garden.length?"none":"flex";
  S.garden.slice(-40).forEach((g,i)=>{
    const s=document.createElement("span");
    s.className="plant"; s.textContent=g.type;
    s.style.animationDelay=(i*0.2)+"s";
    s.style.fontSize=(24+Math.random()*14)+"px";
    p.appendChild(s);
  });
  const m=$("memories"); m.innerHTML="";
  if(!S.memories.length){
    const d=document.createElement("div"); d.className="sub"; d.style.opacity=".7";
    d.textContent=S.lang==="fr"?"Aucune mémoire pour l'instant.":"No memories yet.";
    m.appendChild(d);
  }
  S.memories.slice().reverse().forEach(txt=>{
    const d=document.createElement("div"); d.className="memory-item"; d.textContent="“"+txt+"”";
    m.appendChild(d);
  });
}
function fmtDur(s){const m=Math.floor(s/60),ss=s%60;return m+"m"+(ss<10?"0":"")+ss+"s";}
function renderDash(){
  $("d-count").textContent=S.history.length;
  $("d-resil").textContent=S.sessions;
  if(S.history.length){
    const avg=Math.round(S.history.reduce((a,h)=>a+h.dur,0)/S.history.length);
    $("d-avg").textContent=fmtDur(avg);
    $("d-last").textContent=fmtDur(S.history[S.history.length-1].dur);
  }else{$("d-avg").textContent="—";$("d-last").textContent="—";}
  const ms=$("milestones"); ms.innerHTML="";
  t("milestones").forEach(m=>{
    const row=document.createElement("div");
    row.className="milestone"+(S.sessions>=m.n?"":" locked");
    row.innerHTML='<span class="m-ic">'+m.ic+'</span><span>'+m.t+'</span>';
    ms.appendChild(row);
  });
  const h=$("history"); h.innerHTML="";
  if(!S.history.length){h.innerHTML='<div class="sub" style="opacity:.7">'+(S.lang==="fr"?"Rien encore. C'est très bien.":"Nothing yet. That's just fine.")+'</div>';}
  S.history.slice().reverse().slice(0,20).forEach(ep=>{
    const d=new Date(ep.ts);
    const row=document.createElement("div"); row.className="row";
    const date=d.toLocaleDateString(S.lang,{day:"2-digit",month:"short"})+" "+d.toLocaleTimeString(S.lang,{hour:"2-digit",minute:"2-digit"});
    row.innerHTML='<div><div class="r-main">'+fmtDur(ep.dur)+'</div><div class="r-sub">'+date+'</div></div>'+
      (ep.trigger?'<span class="tag">'+ep.trigger+'</span>':'');
    h.appendChild(row);
  });
}
function renderContacts(){
  const l=$("contacts-list"); l.innerHTML="";
  const sos=document.createElement("div");
  sos.className="contact sos";
  sos.innerHTML='<div class="av">🚨</div><div class="info"><b>'+(S.lang==="fr"?"Urgences":"Emergency")+'</b><div>112</div></div><a href="tel:112">📞</a>';
  l.appendChild(sos);
  S.contacts.forEach((c,i)=>{
    const d=document.createElement("div"); d.className="contact";
    d.innerHTML='<div class="av">🤍</div><div class="info"><b>'+c.name+'</b><div>'+c.num+'</div></div>'+
      '<a href="tel:'+c.num+'">📞</a>';
    const del=document.createElement("button");
    del.textContent="✕"; del.style.cssText="color:var(--muted);font-size:16px;padding:8px";
    del.onclick=()=>{S.contacts.splice(i,1);save();renderContacts();};
    d.appendChild(del);
    l.appendChild(d);
  });
}
function renderSettings(){
  renderCompanionCard($("companion-card"));
  $("set-cname").value=companionName();
  renderThemePicker();
  renderAppearance();
  const bp=$("breath-picker"); bp.innerHTML="";
  Object.keys(BREATHING).forEach(k=>{
    const b=document.createElement("button");
    b.className="chip"+(S.settings.breath===k?" on":"");
    b.textContent=BREATHING[k].label[S.lang];
    b.onclick=()=>{S.settings.breath=k;save();renderSettings();};
    bp.appendChild(b);
  });
  setSw("sw-voice",S.settings.voice);
  setSw("sw-haptic",S.settings.haptic);
  setSw("sw-motion",S.settings.motion);
  setSw("sw-notif",S.settings.notif);
  if(S.reminders){
    setSw("sw-rem",S.reminders.on); setSw("sw-rem-mood",S.reminders.mood);
    setSw("sw-rem-relax",S.reminders.relax); setSw("sw-rem-journal",S.reminders.journal);
    const ti=$("rem-time"); if(ti)ti.value=String(S.reminders.hour||20).padStart(2,"0")+":00";
  }
  renderVoiceUI();
  document.body.classList.toggle("reduce-motion",S.settings.motion);
}
function setSw(id,on){$(id).classList.toggle("on",!!on);}
function applyLang(){
  document.documentElement.lang=S.lang;
  applyTheme(S.theme||"aurore");
  applyAppearance();
  document.querySelectorAll("[data-t]").forEach(el=>{
    const k=el.getAttribute("data-t"); const v=t(k);
    if(typeof v==="string") el.textContent=v;
  });
  document.querySelectorAll("[data-tph]").forEach(el=>{ const v=t(el.getAttribute("data-tph")); if(typeof v==="string")el.placeholder=v; });
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===S.lang));
  renderAll();
  if($("tutorial").classList.contains("active"))renderTut();
}
function renderAll(){renderHome();renderHomeMood();renderMood();renderGarden();renderDash();renderContacts();renderSettings();renderBoost();renderJournal();renderGratitude();renderNudge();renderNightPrompt();}
let lastTab="home";
function go(name){
  if(name!=="settings")lastTab=name;
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $("screen-"+name).classList.add("active");
  document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("on",b.dataset.go===name));
  const nv=document.querySelector(".nav"); if(nv)nv.classList.remove("is-hidden");
  window.scrollTo(0,0);
}
document.querySelectorAll(".nav button").forEach(b=>b.onclick=()=>go(b.dataset.go));
$("open-settings").onclick=()=>go("settings");
$("settings-back").onclick=()=>go(lastTab||"home");
$("mood-prev").onclick=moodPrev;
$("mood-next").onclick=moodNext;
$("tut-next").onclick=tutNext;
$("tut-skip").onclick=closeTut;
$("tut-replay").onclick=openTut;
$("home-companion").onclick=openCompanion;
$("cv-close").onclick=closeCompanion;
$("mini-close").onclick=closeMini;
$("reroll").onclick=()=>{const keys=Object.keys(COMPANIONS).filter(k=>k!==S.companion);S.companion=keys[Math.floor(Math.random()*keys.length)];S.cname=null;save();buzz(30);renderSettings();renderHome();};
$("jrn-save").onclick=()=>{
  const v=$("jrn-input").value.trim();
  if(!v)return;
  S.journal=S.journal||[]; S.journal.push({ts:Date.now(),text:v});
  awardXp("journal",5,true); save(); $("jrn-input").value="";
  buzz(20); renderJournal(); renderHome();
};
$("gr-save").onclick=()=>{
  const items=[$("gr1").value.trim(),$("gr2").value.trim(),$("gr3").value.trim()].filter(Boolean);
  if(!items.length)return;
  S.gratitude=S.gratitude||[]; S.gratitude.push({ts:Date.now(),items:items});
  const got=awardXp("gratitude",6,true);
  if(got)S.bond=Math.min(100,(S.bond||0)+3);
  save(); $("gr1").value="";$("gr2").value="";$("gr3").value="";
  buzz(24); renderGratitude(); renderHome();
};
$("sw-notif").onclick=()=>{
  if(!S.settings.notif){
    if("Notification"in window){
      Notification.requestPermission().then(p=>{ S.settings.notif=(p==="granted"); save(); renderSettings(); if(S.settings.notif){notify("Anchor",t("notifTestBody"));notifTick();} });
    } else { alert(S.lang==="fr"?"Notifications non supportées par ce navigateur.":"Notifications not supported by this browser."); }
  } else { S.settings.notif=false; save(); renderSettings(); }
};
$("notif-test").onclick=()=>{
  if(!("Notification"in window)){alert(S.lang==="fr"?"Notifications non supportées.":S.lang==="es"?"Notificaciones no compatibles.":"Notifications not supported.");return;}
  if(Notification.permission==="granted"){ notify("Anchor",t("notifTestBody")); }
  else { Notification.requestPermission().then(p=>{ if(p==="granted"){S.settings.notif=true;save();renderSettings();notify("Anchor",t("notifTestBody"));} }); }
};
$("sw-rem").onclick=()=>{ S.reminders.on=!S.reminders.on; if(S.reminders.on&&"Notification"in window&&Notification.permission==="default"){Notification.requestPermission();} save(); renderSettings(); renderNudge(); };
$("sw-rem-mood").onclick=()=>{ S.reminders.mood=!S.reminders.mood; save(); renderSettings(); renderNudge(); };
$("sw-rem-relax").onclick=()=>{ S.reminders.relax=!S.reminders.relax; save(); renderSettings(); renderNudge(); };
$("sw-rem-journal").onclick=()=>{ S.reminders.journal=!S.reminders.journal; save(); renderSettings(); renderNudge(); };
$("rem-time").onchange=(e)=>{ const h=parseInt((e.target.value||"20:00").split(":")[0]); S.reminders.hour=isNaN(h)?20:h; save(); };
$("voice-select").onchange=(e)=>{ S.settings.voiceName=e.target.value; _voiceCache=null; save(); speak(t("voiceSample")); };
$("voice-test").onclick=()=>{ if(!S.settings.voice){S.settings.voice=true;save();renderSettings();} speak(t("voiceSample")); };
const FEMALE_VOICES={
  fr:["amélie","amelie","audrey","aurélie","aurelie","marie","virginie","julie","céline","celine","chantal","caroline","léa","lea","hortense","sandy","flo"],
  en:["samantha","karen","victoria","tessa","moira","fiona","allison","ava","susan","serena","catherine","zira","jenny","aria","sonia","libby","emma","google uk english female","google us english"]
};
let _voiceCache=null,_voiceLang=null;
function pickVoice(){
  if(!("speechSynthesis"in window))return null;
  if(_voiceCache&&_voiceLang===S.lang)return _voiceCache;
  const voices=speechSynthesis.getVoices()||[];
  const lang=S.lang;
  const langVoices=voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith(lang));
  const prefs=FEMALE_VOICES[lang]||[];
  let chosen=null;
  for(const name of prefs){
    const hit=langVoices.find(v=>v.name.toLowerCase().includes(name));
    if(hit){chosen=hit;break;}
  }
  if(!chosen){
    // any voice whose name hints "female" within the language
    chosen=langVoices.find(v=>/female|femme|woman/i.test(v.name))||langVoices[0]||null;
  }
  _voiceCache=chosen;_voiceLang=lang;
  return chosen;
}
function speak(txt){
  if(!S.settings.voice||!("speechSynthesis"in window))return;
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(txt);
    u.lang=S.lang==="fr"?"fr-FR":"en-US";
    u.rate=S.settings.voiceRate||0.75; u.pitch=1.08; u.volume=0.92;
    let v=null;
    if(S.settings.voiceName){ v=(speechSynthesis.getVoices()||[]).find(x=>x.name===S.settings.voiceName)||null; }
    if(!v)v=pickVoice();
    if(v)u.voice=v;
    speechSynthesis.speak(u);
  }catch(e){}
}
function buzz(ms){if(S.settings.haptic&&navigator.vibrate)try{navigator.vibrate(ms);}catch(e){}}
/* ---------- mood tracker ---------- */
const MOODS=[
  {lvl:1,color:"#df766f"},
  {lvl:2,color:"#f0a878"},
  {lvl:3,color:"#f1cf7a"},
  {lvl:4,color:"#a8cf9a"},
  {lvl:5,color:"#5fb98a"}
];
let moodView=new Date(); moodView.setDate(1);
function dayKey(d){d=d||new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function moodLabel(lvl){return (t("moodNames")||[])[lvl-1]||"";}
function buildScale(cont,selected){
  cont.innerHTML="";
  MOODS.forEach(m=>{
    const b=document.createElement("button");
    b.className="mood-dot"+(selected===m.lvl?" on":"");
    b.style.background=m.color; b.setAttribute("aria-label",moodLabel(m.lvl));
    b.onclick=()=>logMood(m.lvl);
    cont.appendChild(b);
  });
}
function logMood(lvl){
  const k=dayKey();
  S.moods[k]=lvl;
  if(S.moodEnergyDay!==k){S.moodEnergyDay=k;S.energy=Math.min(100,S.energy+8);}
  awardXp("mood",5,true);
  buzz(25); save();
  renderHomeMood(); renderMood(); renderHome();
}
function renderHomeMood(){
  buildScale($("home-mood-scale"), S.moods[dayKey()]||null);
}
function renderMood(){
  buildScale($("mood-scale"), S.moods[dayKey()]||null);
  const today=S.moods[dayKey()];
  $("mood-chosen").textContent = today ? t("moodToday")+moodLabel(today) : "";
  // month label
  $("mood-month").textContent = moodView.toLocaleDateString(S.lang,{month:"long",year:"numeric"});
  // next disabled if at/after current month
  const now=new Date();
  $("mood-next").disabled = (moodView.getFullYear()>now.getFullYear() || (moodView.getFullYear()===now.getFullYear() && moodView.getMonth()>=now.getMonth()));
  renderCalendar();
  renderLegend();
  renderMoodStats();
}
function renderCalendar(){
  const cal=$("mood-cal"); cal.innerHTML="";
  const wd = S.lang==="fr"?["L","M","M","J","V","S","D"]:["M","T","W","T","F","S","S"];
  wd.forEach(d=>{const h=document.createElement("div");h.className="cal-h";h.textContent=d;cal.appendChild(h);});
  const y=moodView.getFullYear(), mo=moodView.getMonth();
  let startDow=(new Date(y,mo,1).getDay()+6)%7; // Monday-first
  const days=new Date(y,mo+1,0).getDate();
  for(let i=0;i<startDow;i++){const e=document.createElement("div");e.className="cal-cell empty";cal.appendChild(e);}
  const todayK=dayKey(); const today=new Date(); today.setHours(0,0,0,0);
  for(let d=1;d<=days;d++){
    const k=y+"-"+String(mo+1).padStart(2,"0")+"-"+String(d).padStart(2,"0");
    const cell=document.createElement("div"); cell.className="cal-cell"; cell.textContent=d;
    const cd=new Date(y,mo,d);
    const lvl=S.moods[k];
    if(lvl){const m=MOODS.find(x=>x.lvl===lvl);cell.style.background=m.color;cell.classList.add("filled");}
    if(k===todayK)cell.classList.add("today");
    if(cd>today){cell.classList.add("future");}
    else{
      cell.onclick=()=>{
        const cur=S.moods[k]||0; const next=cur>=5?0:cur+1;
        if(next===0)delete S.moods[k]; else S.moods[k]=next;
        save(); renderCalendar(); renderMoodStats(); renderHomeMood();
        if(k===todayK){buildScale($("mood-scale"),S.moods[k]||null);$("mood-chosen").textContent=S.moods[k]?t("moodToday")+moodLabel(S.moods[k]):"";}
      };
    }
    cal.appendChild(cell);
  }
}
function renderLegend(){
  const l=$("mood-legend"); l.innerHTML="";
  MOODS.forEach(m=>{
    const s2=document.createElement("span"); s2.className="leg";
    s2.innerHTML='<i style="background:'+m.color+'"></i>'+moodLabel(m.lvl);
    l.appendChild(s2);
  });
}
function renderMoodStats(){
  $("mood-logged").textContent=Object.keys(S.moods).length;
  let sum=0,c=0;
  for(let i=0;i<7;i++){const d=new Date();d.setDate(d.getDate()-i);const k=dayKey(d);if(S.moods[k]){sum+=S.moods[k];c++;}}
  $("mood-7avg").textContent = c ? (sum/c).toFixed(1)+"/5" : "—";
}
function moodPrev(){moodView.setMonth(moodView.getMonth()-1);renderMood();}
function moodNext(){const now=new Date();if(moodView.getFullYear()<now.getFullYear()||(moodView.getFullYear()===now.getFullYear()&&moodView.getMonth()<now.getMonth())){moodView.setMonth(moodView.getMonth()+1);renderMood();}}

/* ---------- tutorial ---------- */
let tutIdx=0;
const TUT_ICONS=["⚓","🛟","__COMP__","⚡","🌈","🌿","💗"];
function openTut(){tutIdx=0;$("tutorial").classList.add("active");renderTut();}
function closeTut(){$("tutorial").classList.remove("active");S.onboarded=true;save();}
function renderTut(){
  const titles=t("tutTitles"), bodies=t("tutBodies"), n=titles.length;
  let ic=TUT_ICONS[tutIdx];
  if(ic==="__COMP__")ic=COMPANIONS[S.companion].stages[Math.max(1,stageIndex())];
  $("tut-icon").textContent=ic;
  $("tut-title").textContent=titles[tutIdx];
  $("tut-body").textContent=bodies[tutIdx];
  const dots=$("tut-dots"); dots.innerHTML="";
  for(let i=0;i<n;i++){const d=document.createElement("i");if(i===tutIdx)d.classList.add("on");dots.appendChild(d);}
  $("tut-next").textContent = tutIdx===n-1 ? t("tutStart") : t("tutNext");
  $("tut-skip").style.visibility = tutIdx===n-1 ? "hidden" : "visible";
}
function tutNext(){const n=t("tutTitles").length; if(tutIdx<n-1){tutIdx++;renderTut();} else {closeTut();}}

/* ---------- companion view + activities + mini games ---------- */
const ACTIVITIES=[
  {id:"breathe",stage:0,icon:"🫧"},
  {id:"move",stage:0,icon:"🤸"},
  {id:"bubbles",stage:1,icon:"🎈"},
  {id:"stars",stage:2,icon:"✨"},
  {id:"woodoku",stage:1,icon:"🪵"}
];
const ROUTINES=[
  {id:"calm",icon:"🧘",name:{fr:"Relâcher les tensions",en:"Release tension"},steps:[
    {t:{fr:"Roule les épaules",en:"Roll your shoulders"},d:{fr:"Lentement, vers l'arrière. Respire.",en:"Slowly, backwards. Breathe."},sec:25},
    {t:{fr:"Étire ton cou",en:"Stretch your neck"},d:{fr:"Oreille vers l'épaule, doucement, chaque côté.",en:"Ear toward shoulder, gently, each side."},sec:30},
    {t:{fr:"Serre puis relâche les poings",en:"Clench then release fists"},d:{fr:"Serre 5 secondes, puis lâche tout.",en:"Squeeze 5 seconds, then let go."},sec:25},
    {t:{fr:"Bras vers le ciel",en:"Reach to the sky"},d:{fr:"Grandis-toi, inspire. Redescends, expire.",en:"Grow tall, inhale. Lower, exhale."},sec:25},
    {t:{fr:"Flexion avant douce",en:"Gentle forward fold"},d:{fr:"Laisse tomber la tête et les bras. Sans forcer.",en:"Let head and arms hang. No strain."},sec:30},
    {t:{fr:"Relâche la mâchoire",en:"Release your jaw"},d:{fr:"Desserre les dents. Épaules basses.",en:"Unclench teeth. Drop the shoulders."},sec:20},
    {t:{fr:"Respire et observe",en:"Breathe and notice"},d:{fr:"Sens ton corps plus léger.",en:"Feel your body lighter."},sec:20}
  ]},
  {id:"wake",icon:"🌅",name:{fr:"Réveil doux",en:"Gentle wake-up"},steps:[
    {t:{fr:"Marche sur place",en:"March in place"},d:{fr:"Doucement, à ton rythme.",en:"Gently, at your pace."},sec:35},
    {t:{fr:"Cercles de bras",en:"Arm circles"},d:{fr:"Petits cercles, puis plus grands.",en:"Small circles, then larger."},sec:30},
    {t:{fr:"Étire les côtés",en:"Side stretch"},d:{fr:"Penche-toi à droite, puis à gauche.",en:"Lean right, then left."},sec:30},
    {t:{fr:"Montées sur la pointe des pieds",en:"Rise on your toes"},d:{fr:"Monte, descends. Trouve ton équilibre.",en:"Up, down. Find your balance."},sec:25},
    {t:{fr:"Rotation des hanches",en:"Hip circles"},d:{fr:"Cercles lents, dans chaque sens.",en:"Slow circles, each direction."},sec:30},
    {t:{fr:"Secoue tout le corps",en:"Shake it out"},d:{fr:"Relâche bras et jambes en secouant.",en:"Loosen arms and legs by shaking."},sec:25},
    {t:{fr:"Pose et respire",en:"Settle and breathe"},d:{fr:"Immobile. Sens ton énergie.",en:"Still. Feel your energy."},sec:20}
  ]}
];
const EVO_NEED=XP_THRESH;
function renderEvoPath(cont){
  cont.innerHTML="";
  const stages=COMPANIONS[S.companion].stages, idx=stageIndex(), names=t("stageNames");
  stages.forEach((g,i)=>{
    const cell=document.createElement("div");
    cell.className="evo"+(i===idx?" cur":"")+(i>idx?" lock":"");
    const glyph=i<=idx?g:"❔";
    cell.innerHTML='<div class="evo-g">'+glyph+'</div><div class="evo-n">'+names[i]+'</div>'+
      (i>idx?'<div class="evo-need">'+EVO_NEED[i]+' '+t("actNeed")+'</div>':'');
    cont.appendChild(cell);
  });
}
function renderCompanionCard(cont){
  const idx=stageIndex();
  cont.innerHTML='<div class="comp-hero"><div class="companion" style="width:120px;height:120px"><div class="aura"></div>'+
    '<div class="creature" style="font-size:58px">'+creatureGlyph()+'</div></div>'+
    '<div class="comp-name">'+companionName()+'</div><div class="comp-stage">'+t("stageNames")[idx]+'</div></div>'+
    '<div class="evo-path" id="__evo"></div>';
  renderEvoPath(cont.querySelector("#__evo"));
}
function openCompanion(){$("companion-view").classList.add("active");renderCompanionView();}
function closeCompanion(){$("companion-view").classList.remove("active");}
function renderCompanionView(){
  renderCompanionCard($("cv-card"));
  renderCareRow($("cv-care"));
  const list=$("cv-acts"); list.innerHTML=""; const idx=stageIndex();
  ACTIVITIES.forEach(a=>{
    const unlocked=idx>=a.stage;
    const row=document.createElement("button");
    row.className="act"+(unlocked?"":" locked");
    row.innerHTML='<span class="act-ic">'+a.icon+'</span><span class="act-txt"><b>'+t("act_"+a.id)+'</b><i>'+t("act_"+a.id+"_d")+'</i></span>'+
      (unlocked?'<span class="act-go">›</span>':'<span class="act-lock">🔒 '+t("stageNames")[a.stage]+'</span>');
    if(unlocked)row.onclick=()=>startActivity(a.id);
    list.appendChild(row);
  });
}
function grantActivityEnergy(){
  const k=dayKey();
  if(S.actEnergyDay!==k){S.actEnergyDay=k;S.energy=Math.min(100,S.energy+6);save();renderHome();}
}
function startActivity(id){
  if(id==="breathe")startFreeBreath();
  else if(id==="bubbles")startBubbles();
  else if(id==="stars")startStars();
  else if(id==="move"){startMove();return;}
  else if(id==="woodoku"){startWoodoku();return;}
  grantActivityEnergy();
  awardXp("game_"+id,4,true);
  renderHome();
}
/* ---------- Woodoku (Blocs zen) ---------- */
const WD_PAL=["#e8918a","#f0a878","#f1cf7a","#a8cf9a","#bfa8e6","#a8c7ff","#5fb98a"];
const WD_SHAPES=[
 {t:1,c:[[0,0]]},
 {t:1,c:[[0,0],[0,1]]},
 {t:1,c:[[0,0],[1,0]]},
 {t:2,c:[[0,0],[0,1],[0,2]]},
 {t:2,c:[[0,0],[1,0],[2,0]]},
 {t:2,c:[[0,0],[1,0],[1,1]]},
 {t:2,c:[[0,1],[1,0],[1,1]]},
 {t:2,c:[[0,0],[0,1],[1,0]]},
 {t:2,c:[[0,0],[0,1],[1,1]]},
 {t:2,c:[[0,0],[0,1],[1,0],[1,1]]},
 {t:3,c:[[0,0],[0,1],[0,2],[0,3]]},
 {t:3,c:[[0,0],[1,0],[2,0],[3,0]]},
 {t:3,c:[[0,0],[1,0],[2,0],[2,1]]},
 {t:3,c:[[0,1],[1,1],[2,0],[2,1]]},
 {t:3,c:[[0,0],[0,1],[0,2],[1,1]]},
 {t:3,c:[[0,1],[1,0],[1,1],[1,2]]},
 {t:3,c:[[0,0],[0,1],[1,1],[1,2]]},
 {t:3,c:[[0,1],[0,2],[1,0],[1,1]]},
 {t:3,c:[[0,0],[0,1],[0,2],[0,3],[0,4]]},
 {t:3,c:[[0,0],[1,0],[2,0],[3,0],[4,0]]},
 {t:4,c:[[0,1],[1,0],[1,1],[1,2],[2,1]]},
 {t:4,c:[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]},
 {t:4,c:[[0,0],[1,0],[2,0],[2,1],[2,2]]},
 {t:4,c:[[0,0],[0,1],[0,2],[1,0],[2,0]]}
];
let WD=null;
function wdTier(l){return l<=2?1:l<=5?2:l<=9?3:4;}
function wdTarget(l){return Math.min(8,2+Math.floor(l/2));}
function wdObstacles(l){return l<=4?0:Math.min(14,(l-4)*2);}
function wdAllowed(l){const tt=wdTier(l);return WD_SHAPES.filter(s=>s.t<=tt);}
function wdCanPlace(board,cells,r0,c0){for(const cc of cells){const r=r0+cc[0],c=c0+cc[1];if(r<0||r>8||c<0||c>8)return false;if(board[r*9+c])return false;}return true;}
function wdAnyPlacement(board,cells){for(let r=0;r<9;r++)for(let c=0;c<9;c++)if(wdCanPlace(board,cells,r,c))return true;return false;}
function wdBounds(cells){let mr=0,mc=0;for(const cc of cells){if(cc[0]>mr)mr=cc[0];if(cc[1]>mc)mc=cc[1];}return[mr+1,mc+1];}
function wdNewPiece(allowed){const s=allowed[Math.floor(Math.random()*allowed.length)];return{c:s.c.map(x=>x.slice()),color:WD_PAL[Math.floor(Math.random()*WD_PAL.length)],used:false};}
function wdNewTray(){
  const allowed=wdAllowed(WD.level);let tray=null;
  for(let tries=0;tries<24;tries++){
    tray=[wdNewPiece(allowed),wdNewPiece(allowed),wdNewPiece(allowed)];
    if(tray.some(p=>wdAnyPlacement(WD.board,p.c)))break;
  }
  WD.tray=tray;
}
function wdAddObstacles(n){let placed=0,guard=0;while(placed<n&&guard++<500){const i=Math.floor(Math.random()*81);if(!WD.board[i]){WD.board[i]="#c7a98d";placed++;}}}
function wdInitLevel(){WD.board=new Array(81).fill(0);WD.cleared=0;WD.target=wdTarget(WD.level);wdAddObstacles(wdObstacles(WD.level));wdNewTray();}
function wdClearLines(){
  const full=new Set();let groups=0;
  for(let r=0;r<9;r++){let f=true;for(let c=0;c<9;c++)if(!WD.board[r*9+c]){f=false;break;}if(f){groups++;for(let c=0;c<9;c++)full.add(r*9+c);}}
  for(let c=0;c<9;c++){let f=true;for(let r=0;r<9;r++)if(!WD.board[r*9+c]){f=false;break;}if(f){groups++;for(let r=0;r<9;r++)full.add(r*9+c);}}
  for(let br=0;br<3;br++)for(let bc=0;bc<3;bc++){let f=true;const cs=[];for(let r=0;r<3;r++)for(let c=0;c<3;c++){const idx=(br*3+r)*9+(bc*3+c);cs.push(idx);if(!WD.board[idx])f=false;}if(f){groups++;cs.forEach(i=>full.add(i));}}
  if(full.size)full.forEach(i=>WD.board[i]=0);
  return groups;
}
function wdFindClears(board){
  const full=new Set();let groups=0;
  for(let r=0;r<9;r++){let f=true;for(let c=0;c<9;c++)if(!board[r*9+c]){f=false;break;}if(f){groups++;for(let c=0;c<9;c++)full.add(r*9+c);}}
  for(let c=0;c<9;c++){let f=true;for(let r=0;r<9;r++)if(!board[r*9+c]){f=false;break;}if(f){groups++;for(let r=0;r<9;r++)full.add(r*9+c);}}
  for(let br=0;br<3;br++)for(let bc=0;bc<3;bc++){let f=true;const cs=[];for(let r=0;r<3;r++)for(let c=0;c<3;c++){const idx=(br*3+r)*9+(bc*3+c);cs.push(idx);if(!board[idx])f=false;}if(f){groups++;cs.forEach(i=>full.add(i));}}
  return{set:full,groups:groups};
}
function wdAfterPlace(){
  if(WD.tray.every(p=>p.used))wdNewTray();
  if(WD.cleared>=WD.target){wdLevelUp();return;}
  wdRender();
  if(!WD.tray.some(p=>!p.used&&wdAnyPlacement(WD.board,p.c)))wdGameOver();
}
function wdPlace(piece,r0,c0){
  for(const cc of piece.c)WD.board[(r0+cc[0])*9+(c0+cc[1])]=piece.color;
  piece.used=true;
  awardXp("game_woodoku",4,true);grantActivityEnergy();renderHome();
  wdRender();
  const res=wdFindClears(WD.board);
  if(res.set.size){
    buzz([30,40,30]);
    const board=$("wd-board");
    res.set.forEach(i=>{const el=board.children[i];if(el)el.classList.add("clearing");});
    WD._busy=true;
    miniTimers.push(setTimeout(()=>{
      res.set.forEach(i=>WD.board[i]=0);
      WD.cleared+=res.groups; WD._busy=false; wdAfterPlace();
    },300));
  } else { buzz(18); wdAfterPlace(); }
}
function wdLevelUp(){
  WD.level++; if(WD.level>(S.woodLevel||1)){S.woodLevel=WD.level;save();}
  wdInitLevel(); wdRender(); wdToast(t("wdLevelUp").replace("{n}",WD.level)); buzz([40,60,40]);
}
function wdToast(msg){const wrap=$("mini-content").querySelector(".wd-wrap");if(!wrap)return;const e=document.createElement("div");e.className="wd-toast";e.textContent=msg;wrap.appendChild(e);setTimeout(()=>{if(e.parentNode)e.remove();},1600);}
function wdGameOver(){
  const wrap=$("mini-content").querySelector(".wd-wrap");if(!wrap)return;
  const over=document.createElement("div");over.className="wd-over";
  over.innerHTML='<div class="rt-step" style="color:#fff;font-size:22px">'+t("wdBlocked")+'</div><button class="btn" style="max-width:240px" id="wd-restart">'+t("wdRestart")+'</button>';
  wrap.appendChild(over);
  over.querySelector("#wd-restart").onclick=()=>{over.remove();wdInitLevel();wdRender();};
}
function startWoodoku(){
  openMini(t("act_woodoku"));
  WD={board:new Array(81).fill(0),tray:[],level:Math.max(1,S.woodLevel||1),cleared:0,target:0,cell:24,drag:null};
  wdInitLevel();
  $("mini-content").innerHTML=
    '<div class="wd-wrap">'+
      '<div class="wd-hud"><span class="lvl"></span><span class="wd-prog"><i></i></span><span class="wd-tgt"></span></div>'+
      '<div class="wd-board" id="wd-board"></div>'+
      '<div class="wd-tray" id="wd-tray"></div>'+
      '<div class="wd-msg">'+t("act_woodoku_d")+'</div>'+
    '</div>';
  wdRender();
}
function wdFillPieceGrid(el,piece,sz){
  const b=wdBounds(piece.c),rows=b[0],cols=b[1];
  el.style.gridTemplateColumns="repeat("+cols+","+sz+"px)";
  const set={};piece.c.forEach(x=>set[x[0]+"_"+x[1]]=1);
  el.innerHTML="";
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
    const d=document.createElement("div");d.className="wd-pcell";d.style.width=d.style.height=sz+"px";
    if(set[r+"_"+c]){d.classList.add("on");d.style.background=piece.color;}else{d.style.visibility="hidden";}
    el.appendChild(d);
  }
}
function wdRender(){
  const wrap=$("mini-content").querySelector(".wd-wrap");if(!wrap)return;
  wrap.querySelector(".lvl").textContent=t("wdLevel")+" "+WD.level;
  wrap.querySelector(".wd-tgt").textContent=WD.cleared+"/"+WD.target;
  wrap.querySelector(".wd-prog i").style.width=Math.min(100,Math.round(WD.cleared/WD.target*100))+"%";
  const b=$("wd-board");b.innerHTML="";
  for(let r=0;r<9;r++)for(let c=0;c<9;c++){
    const cell=document.createElement("div");
    const box=(Math.floor(r/3)+Math.floor(c/3))%2;
    cell.className="wd-cell "+(box?"b2":"b1");cell.dataset.r=r;cell.dataset.c=c;
    const v=WD.board[r*9+c];
    if(v){cell.classList.add("fill");cell.style.background=v;}
    b.appendChild(cell);
  }
  const fc=b.firstChild;if(fc){const w=fc.getBoundingClientRect().width;if(w>0)WD.cell=w;}
  const tr=$("wd-tray");tr.innerHTML="";
  WD.tray.forEach((p,i)=>{
    const dead=!p.used&&!wdAnyPlacement(WD.board,p.c);
    const pe=document.createElement("div");pe.className="wd-piece"+(p.used?" empty":"")+(dead?" dead":"");pe.dataset.i=i;
    if(!p.used)wdFillPieceGrid(pe,p,16);
    tr.appendChild(pe);
  });
  wdBindDrag();
}
function wdBindDrag(){
  $("wd-tray").querySelectorAll(".wd-piece").forEach(pe=>{
    if(pe.classList.contains("empty"))return;
    pe.addEventListener("pointerdown",e=>wdDragStart(e,parseInt(pe.dataset.i)));
  });
}
function wdClearPreview(){const b=$("wd-board");if(!b)return;b.querySelectorAll(".prev-ok,.prev-bad,.prev-clear").forEach(x=>x.classList.remove("prev-ok","prev-bad","prev-clear"));}
function wdDragStart(e,i){
  if(WD._busy)return;
  const piece=WD.tray[i];if(!piece||piece.used)return;
  e.preventDefault();
  const cell=WD.cell||24;
  const ghost=document.createElement("div");ghost.className="wd-ghost";
  wdFillPieceGrid(ghost,piece,cell);
  document.body.appendChild(ghost);
  WD.drag={i:i,piece:piece,ghost:ghost,cell:cell,origin:null};
  const move=ev=>wdDragMove(ev);
  const up=ev=>{wdDragEnd(ev);document.removeEventListener("pointermove",move);document.removeEventListener("pointerup",up);};
  document.addEventListener("pointermove",move,{passive:false});
  document.addEventListener("pointerup",up);
  wdDragMove(e);
}
function wdDragMove(e){
  const d=WD.drag;if(!d)return;
  if(e.preventDefault)e.preventDefault();
  const b=wdBounds(d.piece.c),cols=b[1];
  const w=cols*d.cell;
  const gx=e.clientX-w/2, gy=e.clientY-d.cell*b[0]-18;
  d.ghost.style.left=gx+"px";d.ghost.style.top=gy+"px";
  const px=gx+d.cell/2, py=gy+d.cell/2;
  wdClearPreview();
  const el=document.elementFromPoint(px,py);
  if(el&&el.classList&&el.classList.contains("wd-cell")){
    const r0=parseInt(el.dataset.r),c0=parseInt(el.dataset.c);
    const ok=wdCanPlace(WD.board,d.piece.c,r0,c0);
    d.origin={r:r0,c:c0,ok:ok};
    const board=$("wd-board");
    d.piece.c.forEach(cc=>{const rr=r0+cc[0],ccc=c0+cc[1];if(rr>=0&&rr<9&&ccc>=0&&ccc<9){const tgt=board.children[rr*9+ccc];if(tgt)tgt.classList.add(ok?"prev-ok":"prev-bad");}});
    if(ok){
      const tmp=WD.board.slice();
      d.piece.c.forEach(cc=>{tmp[(r0+cc[0])*9+(c0+cc[1])]=d.piece.color;});
      wdFindClears(tmp).set.forEach(i=>{const tg=board.children[i];if(tg)tg.classList.add("prev-clear");});
    }
  }else d.origin=null;
}
function wdDragEnd(e){
  const d=WD.drag;if(!d)return;
  wdClearPreview();
  if(d.ghost&&d.ghost.parentNode)d.ghost.remove();
  const o=d.origin;WD.drag=null;
  if(o&&o.ok)wdPlace(d.piece,o.r,o.c);
}

function startMove(){
  openMini(t("act_move"));
  const c=$("mini-content");
  c.innerHTML='<div class="rt-pick" id="rtpick"></div>';
  ROUTINES.forEach(r=>{
    const b=document.createElement("button"); b.className="rt-card";
    const mins=Math.max(1,Math.round(r.steps.reduce((a,st)=>a+st.sec,0)/60));
    b.innerHTML='<span class="rt-ic">'+r.icon+'</span><span class="rt-meta"><b>'+r.name[S.lang]+'</b><i>~'+mins+' min</i></span><span class="act-go">›</span>';
    b.onclick=()=>runRoutine(r);
    $("rtpick").appendChild(b);
  });
}
function runRoutine(r){
  $("mini-title").textContent=r.name[S.lang];
  const c=$("mini-content");
  c.innerHTML='<div class="rt-run"><div class="rt-step" id="rtstep"></div><div class="rt-instr" id="rtinstr"></div><div class="rt-count" id="rtcount"></div><div class="dots" id="rtdots"></div></div><div class="pm-actions" style="max-width:340px"><button class="btn ghost" id="rtskip">'+(S.lang==="fr"?"Passer":"Skip")+'</button></div>';
  let i=0,cd=null,to=null;
  function clearStep(){ if(cd)clearInterval(cd); if(to)clearTimeout(to); }
  function dots(){ const d=$("rtdots"); if(!d)return; d.innerHTML=""; r.steps.forEach((_,k)=>{const x=document.createElement("i"); if(k<=i)x.classList.add("on"); d.appendChild(x);}); }
  function step(){
    clearStep();
    if(i>=r.steps.length){ finishRoutine(); return; }
    const st=r.steps[i];
    $("rtstep").textContent=st.t[S.lang];
    $("rtinstr").textContent=st.d[S.lang];
    dots();
    speak(st.t[S.lang]+". "+st.d[S.lang]);
    buzz(40);
    let left=st.sec; $("rtcount").textContent=left+"s";
    cd=setInterval(()=>{left--; if(left>=0)$("rtcount").textContent=Math.max(0,left)+"s"; if(left<=0)clearInterval(cd);},1000);
    to=setTimeout(()=>{ i++; step(); }, st.sec*1000);
    miniTimers.push(cd); miniTimers.push(to);
  }
  const sk=$("rtskip"); if(sk)sk.onclick=()=>{ i++; step(); };
  step();
}
function finishRoutine(){
  $("mini-content").innerHTML='<div class="rt-done"><div class="rt-done-ic">🌿</div><div class="rt-step" style="color:#fff">'+(S.lang==="fr"?"Bien joué.":"Well done.")+'</div><div class="rt-instr">'+(S.lang==="fr"?"Ton corps est plus détendu.":"Your body feels more relaxed.")+'</div></div>';
  awardXp("game_move",4,true); grantActivityEnergy(); renderHome(); buzz([40,60,40]);
}
let miniTimers=[];
function miniClear(){miniTimers.forEach(i=>{clearTimeout(i);clearInterval(i);});miniTimers=[];document.querySelectorAll(".wd-ghost").forEach(g=>g.remove());if(typeof WD!=="undefined"&&WD)WD.drag=null;$("mini-content").innerHTML="";try{speechSynthesis.cancel();}catch(e){}}
function openMini(title){miniClear();$("mini-title").textContent=title;$("mini").classList.add("active");}
function closeMini(){miniClear();$("mini").classList.remove("active");}
function startFreeBreath(){
  openMini(t("act_breathe"));
  $("mini-content").innerHTML='<div class="fb-circle" id="fb"><span id="fb-word"></span></div><div class="fb-sub">'+t("fbSub")+'</div>';
  const fb=$("fb"), w=$("fb-word"), seq=[["inhale",4],["hold",2],["exhale",6]]; let i=0;
  (function step(){
    const ph=seq[i%seq.length][0], dur=seq[i%seq.length][1];
    w.textContent=t(ph); fb.style.transitionDuration=dur+"s";
    if(ph==="inhale")fb.style.transform="scale(1.3)"; else if(ph==="exhale")fb.style.transform="scale(0.85)";
    speak(t(ph)); buzz(ph==="inhale"?50:25); i++;
    miniTimers.push(setTimeout(step,dur*1000));
  })();
}
function startBubbles(){
  openMini(t("act_bubbles"));
  $("mini-content").innerHTML='<div class="bubbles-area" id="barea"></div><div class="mini-hint">'+t("bubHint")+'</div>';
  const area=$("barea"), colors=["#e8918a","#f0a878","#f1cf7a","#a8cf9a","#5fb98a","#bfa8e6","#a8c7ff"];
  miniTimers.push(setInterval(()=>{
    const b=document.createElement("div"); b.className="bubble";
    const size=34+Math.random()*42; b.style.width=b.style.height=size+"px";
    b.style.left=(Math.random()*82)+"%"; b.style.background=colors[Math.floor(Math.random()*colors.length)];
    b.style.animationDuration=(6+Math.random()*4)+"s";
    b.onclick=()=>{b.classList.add("pop");buzz(18);setTimeout(()=>b.remove(),200);};
    area.appendChild(b);
    miniTimers.push(setTimeout(()=>{if(b.parentNode&&!b.classList.contains("pop"))b.remove();},11000));
  },720));
}
function startStars(){
  openMini(t("act_stars"));
  $("mini-content").innerHTML='<div class="sky" id="sky"></div><div class="mini-hint">'+t("starHint")+'</div>';
  const sky=$("sky");
  sky.onclick=(e)=>{
    const r=sky.getBoundingClientRect();
    const st=document.createElement("div"); st.className="star"; st.textContent="✦";
    st.style.left=(e.clientX-r.left)+"px"; st.style.top=(e.clientY-r.top)+"px";
    st.style.animationDelay=(Math.random()*1.5)+"s"; buzz(12); sky.appendChild(st);
  };
}

/* ---------- daily boost + journal + notifications ---------- */
function todaysBoost(){
  const pool=t("boosts")||[]; if(!pool.length)return "";
  return pool[Math.floor(Date.now()/86400000)%pool.length];
}
/* ---------- companion care ---------- */
function renderCareRow(cont){
  if(!cont)return;
  const bond=S.bond||0;
  cont.innerHTML=
    '<div class="care-bond"><span>'+t("bondLabel")+'</span><div class="bar"><i style="width:'+bond+'%"></i></div><b>'+bond+'%</b></div>'+
    '<div class="care-row">'+
      '<button class="care-btn" data-k="pet"><span class="care-ic">🤍</span><span>'+t("carePet")+'</span></button>'+
      '<button class="care-btn" data-k="feed"><span class="care-ic">🫐</span><span>'+t("careFeed")+'</span></button>'+
      '<button class="care-btn" data-k="play"><span class="care-ic">🪀</span><span>'+t("carePlay")+'</span></button>'+
    '</div>';
  cont.querySelectorAll(".care-btn").forEach(b=>b.onclick=()=>careAction(b.dataset.k));
}
function careReact(kind){
  const host=$("cv-card"); if(!host)return;
  const hero=host.querySelector(".comp-hero"); if(!hero)return;
  const emo={pet:"💗",feed:"✨",play:"⭐"}[kind]||"💗";
  for(let i=0;i<6;i++){
    const sp=document.createElement("span"); sp.className="care-burst"; sp.textContent=emo;
    sp.style.left=(36+Math.random()*42)+"%"; sp.style.animationDelay=(i*0.05)+"s";
    hero.appendChild(sp); setTimeout(()=>{if(sp.parentNode)sp.remove();},1150);
  }
  const cr=hero.querySelector(".creature");
  if(cr){ cr.style.animation="none"; void cr.offsetWidth; cr.style.animation="care-bounce .5s var(--ease-emph,ease)"; }
}
function careAction(kind){
  const k=dayKey(); S.careAward=S.careAward||{};
  if(S.careAward[kind]!==k){ S.careAward[kind]=k; S.bond=Math.min(100,(S.bond||0)+4); S.energy=Math.min(100,S.energy+(kind==="feed"?4:3)); }
  save(); buzz(kind==="play"?30:16);
  careReact(kind);
  renderCareRow($("cv-care")); renderHome();
}
/* ---------- reminders / gentle nudges ---------- */
function computePending(){
  const k=dayKey(); const r=S.reminders||{}; const out=[];
  const moodDone=!!(S.moods&&S.moods[k]);
  const journalDone=(S.journal||[]).some(e=>dayKey(new Date(e.ts))===k);
  const relaxDone=(S.actEnergyDay===k)||Object.keys(S.xpAward||{}).some(key=>key.indexOf("game_")===0&&S.xpAward[key]===k);
  if(r.mood&&!moodDone)out.push({text:t("nudgeMood"),btn:t("nudgeMoodBtn"),act:()=>go("mood")});
  if(r.relax&&!relaxDone)out.push({text:t("nudgeRelax"),btn:t("nudgeRelaxBtn"),act:()=>openCompanion()});
  if(r.journal&&!journalDone)out.push({text:t("nudgeJournal"),btn:t("nudgeJournalBtn"),act:()=>go("mood")});
  return out;
}
function renderNudge(){
  const host=$("nudge"); if(!host)return; host.innerHTML="";
  if(!S.reminders||!S.reminders.on)return;
  if(S.nudgeDay===dayKey())return;
  const pend=computePending(); if(!pend.length)return;
  const it=pend[0];
  const el=document.createElement("div"); el.className="nudge";
  const ic=document.createElement("span"); ic.className="boost-ic"; ic.textContent="🔔";
  const tx=document.createElement("span"); tx.className="nudge-txt"; tx.textContent=it.text;
  const act=document.createElement("button"); act.className="nudge-act"; act.textContent=it.btn; act.onclick=it.act;
  const x=document.createElement("button"); x.className="nudge-x"; x.textContent=t("nudgeDismiss"); x.onclick=()=>{S.nudgeDay=dayKey();save();renderNudge();};
  el.appendChild(ic); el.appendChild(tx); el.appendChild(act); el.appendChild(x); host.appendChild(el);
}

function renderGratitude(){
  const box=$("gr-list"); if(!box)return;
  const today=(S.gratitude||[]).some(e=>dayKey(new Date(e.ts))===dayKey());
  const td=$("gr-today"); if(td)td.textContent=today?t("grDone"):"";
  box.innerHTML="";
  if(!S.gratitude||!S.gratitude.length){const d=document.createElement("div");d.className="sub";d.style.opacity=".7";d.textContent=t("grEmpty");box.appendChild(d);return;}
  S.gratitude.slice().reverse().slice(0,20).forEach(e=>{
    const d=document.createElement("div");d.className="jrn-item";
    const dt=new Date(e.ts);const ds=dt.toLocaleDateString(S.lang,{day:"2-digit",month:"short"});
    const items=(e.items||[]).map(x=>"\u2022 "+x).join("\n");
    const head=document.createElement("div");head.className="jrn-d";head.textContent=ds;
    const body=document.createElement("div");body.className="jrn-t";body.textContent=items;
    d.appendChild(head);d.appendChild(body);box.appendChild(d);
  });
}
const NIGHT={on:false,mode:"breath",t:[],sleep:null,ac:null,noise:null,gain:null,soft:false};
const NIGHT_WORDS=["rivière","coussin","pomme","lampe","feuille","sable","tasse","nuage","laine","galet","miel","fenêtre","jardin","plume","bougie","vague","mousse","pain","horloge","châle","sentier","mésange","noisette","brume","ruisseau","velours","abricot","lanterne","cabane","prairie","flocon","écorce","lavande","biscuit","oreiller","fougère","étang","mandarine","tricot","colline","barque","théière","marron","pivoine","sablier","hamac","mûre","brindille","édredon"];
function nightCfg(){S.settings.night=S.settings.night||{sound:false,prompt:true,hour:22,timer:15,soft:false};return S.settings.night;}
function renderNightPrompt(){
  const b=$("night-banner"); if(!b)return;
  const cfg=nightCfg();
  const h=new Date().getHours();
  const show=cfg.prompt&&h>=cfg.hour&&S.nightPromptDay!==dayKey()&&!NIGHT.on;
  if(!show){b.style.display="none";return;}
  b.style.display="block";
  b.innerHTML='<span>'+t("nightBanner")+'</span><div class="nb-actions"><button id="nb-go">'+t("nightOpen")+'</button><button id="nb-x" class="nb-dismiss">'+t("nightLater")+'</button></div>';
  $("nb-go").onclick=openNight;
  $("nb-x").onclick=()=>{S.nightPromptDay=dayKey();save();renderNightPrompt();};
}
function buildNightUI(){
  nightCfg();
  $("night").innerHTML=
    '<button class="night-x" id="nightX" aria-label="Fermer">✕</button>'
   +'<div class="night-top"><div class="night-moon">🌙</div><div class="night-reassure">'+t("nightReassure")+'</div></div>'
   +'<div class="night-stage" id="nightStage"></div>'
   +'<div class="night-modes"><button data-md="breath" class="on">'+t("nightBreath")+'</button><button data-md="medit">'+t("nightMedit")+'</button><button data-md="shuffle">'+t("nightShuffle")+'</button></div>'
   +'<div class="night-opts"><button id="nightSound" class="nopt">'+t("nightSound")+'</button><button id="nightSoft" class="nopt">'+t("nightSoft")+'</button></div>'
   +'<div class="night-timer"><span>'+t("nightOff")+'</span><button data-min="10">10</button><button data-min="15">15</button><button data-min="20">20</button><button data-min="0">∞</button></div>'
   +'<div class="night-dim-msg" id="nightDimMsg">'+t("nightGoodnight")+' 🌙</div>';
  $("nightX").onclick=closeNight;
  $("nightDimMsg").onclick=closeNight;
  document.querySelectorAll(".night-modes button").forEach(b=>b.onclick=()=>setNightMode(b.dataset.md));
  $("nightSound").onclick=()=>toggleNoise();
  $("nightSoft").onclick=()=>{const c=nightCfg();c.soft=!c.soft;NIGHT.soft=c.soft;save();$("nightSoft").classList.toggle("on",c.soft);if(NIGHT.mode==="breath")setNightMode("breath");};
  document.querySelectorAll(".night-timer button").forEach(b=>b.onclick=()=>{nightCfg().timer=parseInt(b.dataset.min,10);save();document.querySelectorAll(".night-timer button").forEach(x=>x.classList.toggle("on",x===b));armSleepTimer();});
  const cfg=nightCfg();
  NIGHT.soft=!!cfg.soft;
  $("nightSoft").classList.toggle("on",NIGHT.soft);
  $("nightSound").classList.toggle("on",!!NIGHT.noise);
  document.querySelectorAll(".night-timer button").forEach(x=>x.classList.toggle("on",parseInt(x.dataset.min,10)===(cfg.timer||0)));
  setNightMode("breath");
}
function setNightMode(md){
  NIGHT.mode=md;
  document.querySelectorAll(".night-modes button").forEach(b=>b.classList.toggle("on",b.dataset.md===md));
  const st=$("nightStage"); if(!st)return;
  NIGHT.t.forEach(clearTimeout); NIGHT.t=[];
  try{speechSynthesis.cancel();}catch(e){}
  if(md==="breath"){st.innerHTML='<div class="pacer" id="pacer"><span id="pacerTxt"></span></div>';pacerLoop();}
  else if(md==="medit"){st.innerHTML='<div class="medit"><div class="pacer pacer-med" id="pacer"><span></span></div><div class="med-line" id="medLine"></div></div>';meditLoop();}
  else{st.innerHTML='<div class="shuf"><div class="shuf-word" id="shufWord"></div><div class="shuf-hint">'+t("nightShuffleHint")+'</div></div>';shuffleLoop();}
}
function pacerLoop(){
  if(!NIGHT.on||NIGHT.mode!=="breath")return;
  const seq=NIGHT.soft?[["nInhale",4000,1.16],["nExhale",6000,0.84]]:[["nInhale",4000,1.16],["nHold",7000,1.16],["nExhale",8000,0.84]];
  let i=0;
  function step(){
    if(!NIGHT.on||NIGHT.mode!=="breath")return;
    const ph=seq[i%seq.length];
    const c=$("pacer"); if(c){c.style.transition="transform "+(ph[1]/1000)+"s ease-in-out";c.style.transform="scale("+ph[2]+")";}
    const tx=$("pacerTxt"); if(tx)tx.textContent=t(ph[0]);
    i++; NIGHT.t.push(setTimeout(step,ph[1]));
  }
  step();
}
function shuffleLoop(){
  if(!NIGHT.on||NIGHT.mode!=="shuffle")return;
  const el=$("shufWord");
  if(el){const w=NIGHT_WORDS[Math.floor(Math.random()*NIGHT_WORDS.length)];el.textContent=w;el.classList.remove("show");void el.offsetWidth;el.classList.add("show");}
  NIGHT.t.push(setTimeout(shuffleLoop,6000));
}
function meditLoop(){
  if(!NIGHT.on||NIGHT.mode!=="medit")return;
  const steps=t("medSteps")||[]; let i=0;
  (function breathe(){
    if(!NIGHT.on||NIGHT.mode!=="medit")return;
    const c=$("pacer"); if(c){NIGHT._mu=!NIGHT._mu;c.style.transition="transform 5.5s ease-in-out";c.style.transform="scale("+(NIGHT._mu?1.12:0.86)+")";}
    NIGHT.t.push(setTimeout(breathe,5500));
  })();
  (function line(){
    if(!NIGHT.on||NIGHT.mode!=="medit")return;
    const el=$("medLine");
    if(el){const tx=steps[i%steps.length];el.textContent=tx;el.classList.remove("show");void el.offsetWidth;el.classList.add("show");if(S.settings.voice){try{speak(tx);}catch(e){}}}
    i++; NIGHT.t.push(setTimeout(line,13000));
  })();
}
function startNoise(){
  try{
    NIGHT.ac=new (window.AudioContext||window.webkitAudioContext)();
    const n=2*NIGHT.ac.sampleRate, buf=NIGHT.ac.createBuffer(1,n,NIGHT.ac.sampleRate), out=buf.getChannelData(0);
    let last=0;
    for(let i=0;i<n;i++){const white=Math.random()*2-1;out[i]=(last+0.02*white)/1.02;last=out[i];out[i]*=3.5;}
    const src=NIGHT.ac.createBufferSource();src.buffer=buf;src.loop=true;
    const g=NIGHT.ac.createGain();g.gain.value=0.06;
    src.connect(g);g.connect(NIGHT.ac.destination);src.start();
    NIGHT.noise=src;NIGHT.gain=g;
  }catch(e){NIGHT.noise=null;}
}
function stopNoise(){try{if(NIGHT.noise)NIGHT.noise.stop();}catch(e){}try{if(NIGHT.ac)NIGHT.ac.close();}catch(e){}NIGHT.noise=null;NIGHT.ac=null;}
function toggleNoise(force){
  const want=(typeof force==="boolean")?force:!NIGHT.noise;
  if(want){if(!NIGHT.noise)startNoise();nightCfg().sound=true;}
  else{stopNoise();nightCfg().sound=false;}
  save();
  const b=$("nightSound"); if(b)b.classList.toggle("on",!!NIGHT.noise);
}
function armSleepTimer(){
  clearTimeout(NIGHT.sleep);
  const m=nightCfg().timer;
  if(!m)return;
  NIGHT.sleep=setTimeout(nightDim,m*60000);
}
function nightDim(){
  NIGHT.mode="off"; NIGHT.t.forEach(clearTimeout); NIGHT.t=[];
  try{speechSynthesis.cancel();}catch(e){}
  stopNoise();
  const n=$("night"); if(n)n.classList.add("dimmed");
}
function openNight(){
  if(NIGHT.on)return;
  nightCfg(); NIGHT.on=true; NIGHT.t=[];
  buildNightUI();
  const n=$("night"); n.classList.remove("dimmed"); n.classList.add("show");
  document.querySelector(".nav").classList.add("is-hidden");
  armSleepTimer();
  if(nightCfg().sound)toggleNoise(true);
  S.nightPromptDay=dayKey(); save(); renderNightPrompt();
  buzz(12);
}
function closeNight(){
  NIGHT.on=false; NIGHT.mode="off";
  NIGHT.t.forEach(clearTimeout); NIGHT.t=[]; clearTimeout(NIGHT.sleep);
  try{speechSynthesis.cancel();}catch(e){}
  stopNoise();
  const n=$("night"); if(n)n.classList.remove("show","dimmed");
  document.querySelector(".nav").classList.remove("is-hidden");
}
const PALETTES={
  aurore:{bg:"#fff8f6",bg2:"#fceae6",surface:"#faece8",surface2:"#f5e3de",line:"#e9d6d1",text:"#3f2d2a",muted:"#8c7570",accent:"#c25b4e",accent2:"#6b5d97",warm:"#f1c19a",glow:"#ffdad4",ink:"#44140f",blob1:"#fde7ec",blob2:"#efe6fb",blob3:"#fdeede",sc2:"#efddee",tc:"#fdf5f2"},
  ocean:{bg:"#f5fafc",bg2:"#e6f1f6",surface:"#eaf3f7",surface2:"#dcebf1",line:"#cfe0e8",text:"#23323b",muted:"#5f7682",accent:"#2f7d99",accent2:"#3f8f86",warm:"#bfe3df",glow:"#cfeaf3",ink:"#06222c",blob1:"#dcf0f7",blob2:"#e0eefb",blob3:"#dff2ee",sc2:"#d8ebe8",tc:"#f1f8fb"},
  foret:{bg:"#f6faf4",bg2:"#e8f2e6",surface:"#ecf4e9",surface2:"#dfeeda",line:"#d2e3cc",text:"#283326",muted:"#647562",accent:"#4f8a55",accent2:"#7c8a3f",warm:"#d8e6b0",glow:"#d6eccf",ink:"#0e2410",blob1:"#e2f3da",blob2:"#eaf3df",blob3:"#e0f0e6",sc2:"#dfead2",tc:"#f3f8f1"},
  lavande:{bg:"#faf7fc",bg2:"#efe8f6",surface:"#f1eaf8",surface2:"#e6dcf1",line:"#ddd0ea",text:"#2f2838",muted:"#6f6580",accent:"#7a59b0",accent2:"#9a5ba8",warm:"#e3cdee",glow:"#e7daf6",ink:"#220a36",blob1:"#ece0f8",blob2:"#f0e2f3",blob3:"#e6e0fb",sc2:"#e6dcf1",tc:"#f6f1fb"},
  sable:{bg:"#fbf8f3",bg2:"#f2eadd",surface:"#f4ecdf",surface2:"#ebe0cf",line:"#e0d3bd",text:"#3a3127",muted:"#857862",accent:"#b07d33",accent2:"#9c7b4a",warm:"#f0d9a8",glow:"#f6e6c4",ink:"#3a2606",blob1:"#f6ecd6",blob2:"#f1ead9",blob3:"#f7eed9",sc2:"#ece0cc",tc:"#f8f3ea"},
  rose:{bg:"#fdf6fa",bg2:"#f8e7f1",surface:"#f9eaf3",surface2:"#f1dbe9",line:"#ebccdd",text:"#3a2632",muted:"#856475",accent:"#c2548a",accent2:"#a05bb0",warm:"#f3c9de",glow:"#fbd9ec",ink:"#3a0a26",blob1:"#fce0ef",blob2:"#f5e0f3",blob3:"#fce0e8",sc2:"#f1dbe9",tc:"#fbf2f7"}
};
function applyTheme(id){
  const P=PALETTES[id]||PALETTES.aurore; const r=document.documentElement.style; const set=(k,v)=>r.setProperty(k,v);
  set("--bg",P.bg);set("--bg-2",P.bg2);set("--surface",P.surface);set("--surface-2",P.surface2);
  set("--line",P.line);set("--text",P.text);set("--muted",P.muted);
  set("--accent",P.accent);set("--accent-2",P.accent2);set("--warm",P.warm);set("--glow",P.glow);set("--ink",P.ink);
  set("--bgblob1",P.blob1);set("--bgblob2",P.blob2);set("--bgblob3",P.blob3);
  set("--m3-primary",P.accent);set("--m3-primary-container",P.glow);set("--m3-on-primary-container",P.ink);
  set("--m3-secondary-container",P.sc2);set("--m3-tertiary-container",P.warm);
  set("--m3-surface-container",P.surface);set("--m3-surface-container-high",P.surface2);set("--m3-surface-container-highest",P.surface2);
  set("--m3-outline",P.muted);set("--m3-outline-variant",P.line);
  const meta=document.querySelector('meta[name="theme-color"]'); if(meta)meta.setAttribute("content",P.tc);
}
function renderThemePicker(){
  const box=$("theme-picker"); if(!box)return; box.innerHTML="";
  Object.keys(PALETTES).forEach(id=>{
    const P=PALETTES[id];
    const b=document.createElement("button");
    b.className="swatch"+(((S.theme||"aurore")===id)?" on":"");
    b.style.background="linear-gradient(135deg,"+P.accent+" 0 50%,"+P.surface+" 50% 100%)";
    b.setAttribute("aria-label",id);
    b.onclick=()=>{S.theme=id;save();applyTheme(id);renderThemePicker();};
    box.appendChild(b);
  });
}
function renderBoost(){ var el=$("boost-text"); if(el)el.textContent=todaysBoost(); }
function renderJournal(){
  const box=$("jrn-list"); if(!box)return; box.innerHTML="";
  if(!S.journal||!S.journal.length){
    const d=document.createElement("div"); d.className="sub"; d.style.opacity=".7"; d.textContent=t("jrnEmpty");
    box.appendChild(d); return;
  }
  S.journal.slice().reverse().forEach((e,ri)=>{
    const real=S.journal.length-1-ri;
    const d=document.createElement("div"); d.className="jrn-item";
    const dt=new Date(e.ts);
    const ds=dt.toLocaleDateString(S.lang,{day:"2-digit",month:"short"})+" "+dt.toLocaleTimeString(S.lang,{hour:"2-digit",minute:"2-digit"});
    const del=document.createElement("button"); del.className="jrn-del"; del.textContent="✕";
    del.onclick=()=>{ S.journal.splice(real,1); save(); renderJournal(); };
    const head=document.createElement("div"); head.className="jrn-d"; head.textContent=ds; head.appendChild(del);
    const body=document.createElement("div"); body.className="jrn-t"; body.textContent=e.text;
    d.appendChild(head); d.appendChild(body); box.appendChild(d);
  });
}
async function notify(title,body){
  if(!("Notification"in window)||Notification.permission!=="granted")return false;
  const opts={body:body,icon:"./icon-192.png",badge:"./icon-192.png",tag:"anchor",renotify:true,
    vibrate:[40,30,40],data:{ts:Date.now()}};
  try{
    let reg=null;
    if("serviceWorker"in navigator){ try{reg=await navigator.serviceWorker.getRegistration();}catch(e){} }
    if(reg&&reg.showNotification){ await reg.showNotification(title,opts); }
    else { new Notification(title,opts); }
    return true;
  }catch(e){ try{new Notification(title,opts);return true;}catch(_){} return false; }
}
function notifTick(){
  if(!("Notification"in window)||Notification.permission!=="granted")return;
  const k=dayKey(); S.notifSent=S.notifSent||{};
  // prune old days
  let changed=false;
  Object.keys(S.notifSent).forEach(kk=>{ if(!kk.endsWith(k)){ delete S.notifSent[kk]; changed=true; } });
  const now=new Date(); const curM=now.getHours()*60+now.getMinutes();
  // daily boost (once per day, fires on first tick of the day while open)
  if(S.settings.notif && S.notifSent["boost::"+k]!==1){
    S.notifSent["boost::"+k]=1; changed=true; notify("Anchor", todaysBoost());
  }
  // reminders at the preferred hour (fires once within that hour while open)
  if(S.reminders && S.reminders.on){
    const target=(S.reminders.hour||20)*60;
    if(curM>=target && curM<target+59 && S.notifSent["rem::"+k]!==1){
      const p=computePending();
      if(p.length){ S.notifSent["rem::"+k]=1; changed=true; notify("Anchor", p[0].text); }
    }
  }
  if(changed)save();
}
function maybeNotify(){ notifTick(); }
setInterval(notifTick, 30000);

/* ---------- voice selector ---------- */
const RATE_VALUES=[0.85,0.75,0.6];
function renderVoiceUI(){
  const sel=$("voice-select"); if(!sel)return;
  const voices=("speechSynthesis"in window)?(speechSynthesis.getVoices()||[]):[];
  const lang=S.lang;
  let langV=voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith(lang));
  if(!langV.length)langV=voices.slice();
  const prefs=FEMALE_VOICES[lang]||[];
  function score(v){let sc=0;const n=v.name.toLowerCase();
    if(prefs.some(p=>n.includes(p)))sc-=10;
    if(/enhanced|premium|natural|neural|siri/i.test(v.name))sc-=3;
    return sc;}
  langV.sort((a,b)=>score(a)-score(b));
  sel.innerHTML="";
  if(!langV.length){const o=document.createElement("option");o.textContent=(S.lang==="fr"?"Aucune voix disponible":"No voice available");sel.appendChild(o);sel.disabled=true;}
  else{ sel.disabled=false; langV.forEach(v=>{const o=document.createElement("option");o.value=v.name;o.textContent=v.name.replace(/\s*\(.*?\)/g,"").trim()||v.name;sel.appendChild(o);}); }
  if(S.settings.voiceName)sel.value=S.settings.voiceName;
  const rc=$("voice-rate"); rc.innerHTML="";
  const labels=t("rates")||["A","B","C"];
  RATE_VALUES.forEach((rt,i)=>{
    const b=document.createElement("button");
    b.className="chip"+(((S.settings.voiceRate||0.75)===rt)?" on":"");
    b.textContent=labels[i];
    b.onclick=()=>{S.settings.voiceRate=rt;save();renderVoiceUI();speak(t("voiceSample"));};
    rc.appendChild(b);
  });
}

/* ---------- M3 ripple ---------- */
(function(){
  const SEL=".btn,.act,.chip,.pick,.mc-nav,.pm-exit,.mood-dot,.evo,.contact a,.tut-skip,.lang button";
  document.addEventListener("pointerdown",function(e){
    if(S.settings&&S.settings.motion)return;
    const el=e.target.closest(SEL); if(!el)return;
    const r=el.getBoundingClientRect(); const d=Math.max(r.width,r.height);
    const ink=document.createElement("span"); ink.className="rp-ink";
    ink.style.width=ink.style.height=d+"px";
    ink.style.left=(e.clientX-r.left-d/2)+"px";
    ink.style.top=(e.clientY-r.top-d/2)+"px";
    const cs=getComputedStyle(el); if(cs.position==="static")el.style.position="relative";
    const prevOv=el.style.overflow; el.style.overflow="hidden";
    el.appendChild(ink);
    setTimeout(()=>{ if(ink.parentNode)ink.remove(); el.style.overflow=prevOv; },620);
  },{passive:true});
})();

let pm={open:false,start:0,timer:null,breathTO:null,senseIdx:0,senseCount:0};
function openPanic(){
  pm.open=true; pm.start=Date.now(); pm.senseIdx=0; pm.senseCount=0;
  $("panic-mode").classList.add("active");
  $("storm").style.opacity="1";
  showStep("reality");
  $("reality-title").textContent=pick(t("realityTitles"));
  $("reality-line").textContent=pick(t("realityLines"));
  if(S.history.length){
    $("reality-line").textContent += "  "+t("memBefore").replace("{n}",S.history.length);
  }
  speak($("reality-title").textContent);
  buzz(40);
  pm.timer=setInterval(()=>{
    const s=Math.floor((Date.now()-pm.start)/1000);
    const m=Math.floor(s/60), ss=s%60;
    $("pm-timer").textContent=(m<10?"0":"")+m+":"+(ss<10?"0":"")+ss;
  },1000);
  document.querySelector(".nav").classList.add("is-hidden");
}
function clearStorm(frac){
  $("storm").style.opacity=String(Math.max(0, 1-frac));
}
function showStep(id){
  document.querySelectorAll(".pm-step").forEach(s=>s.classList.remove("active"));
  $("step-"+id).classList.add("active");
}
function startBreath(){
  showStep("breath"); clearStorm(0.34);
  runBreath(0);
}
function runBreath(i){
  const seq=BREATHING[S.settings.breath].seq;
  const [phase,dur]=seq[i%seq.length];
  const circle=$("breath-circle");
  const word=$("breath-word");
  word.textContent=t(phase);
  $("breath-count").textContent="";
  circle.style.transitionDuration=dur+"s";
  if(phase==="inhale")circle.style.transform="scale(1.35)";
  else if(phase==="exhale")circle.style.transform="scale(0.8)";
  speak(t(phase));
  buzz(phase==="inhale"?60:30);
  let left=dur;
  $("breath-count").textContent=left;
  const cd=setInterval(()=>{left--; if(left>0)$("breath-count").textContent=left; else clearInterval(cd);},1000);
  pm.breathTO=setTimeout(()=>{clearInterval(cd); if(pm.open && $("step-breath").classList.contains("active")) runBreath(i+1);},dur*1000);
}
function stopBreath(){clearTimeout(pm.breathTO);}
function renderSense(){
  const s=t("senses")[pm.senseIdx];
  $("sense-num").textContent=s.n;
  $("sense-what").textContent=s.w;
  $("sense-hint").textContent=s.h;
  const dots=$("sense-dots"); dots.innerHTML="";
  for(let k=0;k<t("senses").length;k++){
    const i=document.createElement("i"); if(k<=pm.senseIdx)i.classList.add("on"); dots.appendChild(i);
  }
  speak(s.n+" "+s.w);
  clearStorm(0.34 + (0.5*((pm.senseIdx+1)/t("senses").length)));
}
function startGround(){ stopBreath(); showStep("ground"); pm.senseIdx=0; renderSense(); }
function finishPanic(completed){
  const dur=Math.max(1,Math.floor((Date.now()-pm.start)/1000));
  if(completed){
    clearStorm(1);
    S.history.push({ts:Date.now(),dur:dur,trigger:null});
    S.sessions+=1;
    S.xp=(S.xp||0)+20;
    S.energy=Math.min(100,S.energy+18);
    const plant=pick(PLANTS);
    S.garden.push({type:plant,ts:Date.now()});
    save();
    showStep("recap");
    $("recap-reward").textContent=plant;
    let line=pick(t("recapLines")).replace("{d}",fmtDur(dur)).replace("{n}",S.history.length);
    $("recap-line").textContent=line;
    speak($("recap-title").textContent+" "+line);
    buzz([40,60,40]);
  }else{
    closePanic();
  }
}
function closePanic(){
  pm.open=false;
  clearInterval(pm.timer); stopBreath();
  try{speechSynthesis.cancel();}catch(e){}
  $("panic-mode").classList.remove("active");
  document.querySelector(".nav").classList.remove("is-hidden");
  $("pm-timer").textContent="00:00";
  renderAll(); go("home");
}
$("panic-open").onclick=openPanic;
$("open-night").onclick=openNight;
$("reality-next").onclick=startBreath;
$("breath-done").onclick=startGround;
$("sense-next").onclick=()=>{
  buzz(30);
  if(pm.senseIdx<t("senses").length-1){pm.senseIdx++;renderSense();}
  else{finishPanic(true);}
};
$("recap-close").onclick=closePanic;
$("pm-exit").onclick=()=>{
  const dur=Math.max(1,Math.floor((Date.now()-pm.start)/1000));
  S.history.push({ts:Date.now(),dur:dur,trigger:null});
  S.sessions+=1; S.xp=(S.xp||0)+10; S.energy=Math.min(100,S.energy+10);
  S.garden.push({type:pick(PLANTS),ts:Date.now()}); save();
  closePanic();
};
document.querySelectorAll(".lang button").forEach(b=>{
  b.onclick=()=>{S.lang=b.dataset.lang;_voiceCache=null;save();applyLang();};
});
$("mem-save").onclick=()=>{
  const v=$("mem-input").value.trim();
  if(v){S.memories.push(v);save();$("mem-input").value="";renderGarden();}
};
$("c-add").onclick=()=>{
  const n=$("c-name").value.trim(), num=$("c-num").value.trim();
  if(n&&num){S.contacts.push({name:n,num:num});save();$("c-name").value="";$("c-num").value="";renderContacts();}
};
$("set-cname").onchange=e=>{S.cname=e.target.value.trim()||null;save();renderHome();};
$("sw-voice").onclick=()=>{S.settings.voice=!S.settings.voice;save();renderSettings();};
$("sw-haptic").onclick=()=>{S.settings.haptic=!S.settings.haptic;save();renderSettings();};
$("sw-motion").onclick=()=>{S.settings.motion=!S.settings.motion;save();renderSettings();};
$("reset").onclick=()=>{
  const msg=S.lang==="fr"?"Tout effacer ? Action irréversible.":S.lang==="es"?"¿Borrar todo? Esta acción es irreversible.":"Erase everything? This cannot be undone.";
  if(confirm(msg)){localStorage.removeItem(KEY);S=load();applyLang();go("home");}
};
if("speechSynthesis"in window){speechSynthesis.onvoiceschanged=()=>{_voiceCache=null; if(document.getElementById("voice-select"))renderVoiceUI();};speechSynthesis.getVoices();}
document.body.classList.toggle("reduce-motion",S.settings.motion);
applyLang();
go("home");
if(!S.onboarded)openTut();
maybeNotify();


/* ---------- Appearance : Light / Dark / Auto (V3) ---------- */
function appearanceIsDark(){
  const ap=S.appearance||"auto";
  if(ap==="dark")return true; if(ap==="light")return false;
  return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
}
function applyAppearance(){
  const dark=appearanceIsDark();
  document.documentElement.setAttribute("data-appearance", dark?"dark":"light");
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta){
    const P=(typeof PALETTES!=="undefined"&&PALETTES[S.theme])?PALETTES[S.theme]:null;
    meta.setAttribute("content", dark?"#0b0b10":(P?P.tc:"#fdf5f2"));
  }
}
function renderAppearance(){
  const seg=$("appearance-seg"); if(!seg)return;
  const L=({fr:{auto:"Auto",light:"Clair",dark:"Sombre"},en:{auto:"Auto",light:"Light",dark:"Dark"},es:{auto:"Auto",light:"Claro",dark:"Oscuro"}})[S.lang]||{auto:"Auto",light:"Light",dark:"Dark"};
  const ap=S.appearance||"auto";
  seg.querySelectorAll("button").forEach(b=>{
    b.textContent=L[b.dataset.ap];
    b.classList.toggle("on",b.dataset.ap===ap);
    b.onclick=()=>{ S.appearance=b.dataset.ap; save(); applyAppearance(); renderAppearance(); };
  });
}
if(window.matchMedia){ try{ window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{ if((S.appearance||"auto")==="auto")applyAppearance(); }); }catch(e){} }
