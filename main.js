const image = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const supportedLanguages = ["fr", "en", "es", "it", "pt", "de"];
const languageNames = {
  fr: "Français",
  en: "English",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  de: "Deutsch"
};
const messages = {
  "meta.title": ["EOEX Agency — L’élégance de l’excellence", "EOEX Agency — The Elegance of Excellence", "EOEX Agency — La elegancia de la excelencia", "EOEX Agency — L’eleganza dell’eccellenza", "EOEX Agency — A elegância da excelência", "EOEX Agency — Die Eleganz der Exzellenz"],
  "meta.description": ["EOEX Agency — une représentation exigeante, des talents éditoriaux et des partenariats créatifs.", "EOEX Agency — considered representation, editorial talent and creative partnerships.", "EOEX Agency — representación cuidada, talento editorial y colaboraciones creativas.", "EOEX Agency — rappresentanza d’eccellenza, talenti editoriali e collaborazioni creative.", "EOEX Agency — representação criteriosa, talentos editoriais e parcerias criativas.", "EOEX Agency — ausgewählte Talente, Editorials und kreative Partnerschaften."],
  "language.label": ["Langue", "Language", "Idioma", "Lingua", "Idioma", "Sprache"],
  "aria.home": ["Accueil EOEX Agency", "EOEX Agency home", "Inicio de EOEX Agency", "Home EOEX Agency", "Início da EOEX Agency", "EOEX Agency – Startseite"],
  "aria.mainNavigation": ["Navigation principale", "Main navigation", "Navegación principal", "Navigazione principale", "Navegação principal", "Hauptnavigation"],
  "aria.openMenu": ["Ouvrir la navigation", "Open navigation", "Abrir navegación", "Apri la navigazione", "Abrir navegação", "Navigation öffnen"],
  "aria.closeMenu": ["Fermer la navigation", "Close navigation", "Cerrar navegación", "Chiudi la navigazione", "Fechar navegação", "Navigation schließen"],
  "aria.scroll": ["Défiler pour découvrir", "Scroll to explore", "Desplázate para descubrir", "Scorri per esplorare", "Deslize para explorar", "Zum Entdecken scrollen"],
  "aria.previous": ["Opportunités précédentes", "Previous opportunities", "Oportunidades anteriores", "Opportunità precedenti", "Oportunidades anteriores", "Vorherige Möglichkeiten"],
  "aria.next": ["Opportunités suivantes", "Next opportunities", "Próximas oportunidades", "Prossime opportunità", "Próximas oportunidades", "Nächste Möglichkeiten"],
  "hero.videoControls": ["Contrôles de la vidéo d’accueil", "Home video controls", "Controles del vídeo de inicio", "Controlli del video iniziale", "Controlos do vídeo inicial", "Steuerung des Startvideos"],
  "hero.videoPause": ["Mettre la vidéo en pause", "Pause the video", "Pausar el vídeo", "Metti in pausa il video", "Pausar o vídeo", "Video pausieren"],
  "hero.videoPlay": ["Lire la vidéo", "Play the video", "Reproducir el vídeo", "Riproduci il video", "Reproduzir o vídeo", "Video abspielen"],
  "hero.videoPrevious": ["Vidéo précédente", "Previous video", "Vídeo anterior", "Video precedente", "Vídeo anterior", "Vorheriges Video"],
  "hero.videoNext": ["Vidéo suivante", "Next video", "Siguiente vídeo", "Video successivo", "Vídeo seguinte", "Nächstes Video"],
  "aria.opportunityCards": ["Cartes d’opportunités", "Opportunity cards", "Tarjetas de oportunidades", "Schede delle opportunità", "Cartões de oportunidades", "Karten mit Möglichkeiten"],
  "aria.closeGallery": ["Fermer la galerie", "Close gallery", "Cerrar galería", "Chiudi la galleria", "Fechar galeria", "Galerie schließen"],
  "nav.models": ["Mannequins", "Models", "Modelos", "Modelle", "Modelos", "Models"],
  "nav.portfolio": ["Portfolio", "Portfolio", "Portfolio", "Portfolio", "Portfólio", "Portfolio"],
  "nav.opportunities": ["Opportunités", "Opportunities", "Oportunidades", "Opportunità", "Oportunidades", "Möglichkeiten"],
  "nav.join": ["Nous rejoindre", "Join us", "Únete", "Unisciti a noi", "Junte-se a nós", "Werde Teil von uns"],
  "brand.agency": ["AGENCE", "AGENCY", "AGENCIA", "AGENZIA", "AGÊNCIA", "AGENTUR"],
  "hero.eyebrow": ["L’élégance de l’excellence", "The elegance of excellence", "La elegancia de la excelencia", "L’eleganza dell’eccellenza", "A elegância da excelência", "Die Eleganz der Exzellenz"],
  "hero.title": ["Une présence.<br><em>Un sens.</em>", "Presence.<br><em>With purpose.</em>", "Presencia.<br><em>Con propósito.</em>", "Presenza.<br><em>Con visione.</em>", "Presença.<br><em>Com propósito.</em>", "Präsenz.<br><em>Mit Haltung.</em>"],
  "hero.copy": ["Une agence exigeante pour les talents, l’image et les idées qui ont un point de vue.", "A considered agency for talent, image and ideas with a point of view.", "Una agencia selecta para el talento, la imagen y las ideas con personalidad.", "Un’agenzia attenta ai talenti, all’immagine e alle idee con una visione.", "Uma agência criteriosa para talentos, imagem e ideias com identidade.", "Eine Agentur für Talente, Bilder und Ideen mit Haltung."],
  "hero.cta": ["Découvrir nos talents", "Discover our models", "Descubre nuestros modelos", "Scopri i nostri modelli", "Conheça os nossos modelos", "Unsere Models entdecken"],
  "hero.scroll": ["Défiler pour découvrir", "Scroll to explore", "Desplázate para descubrir", "Scorri per esplorare", "Deslize para explorar", "Zum Entdecken scrollen"],
  "intro.eyebrow": ["Une autre vision de l’agence", "A different kind of agency", "Una agencia diferente", "Un altro modo di essere agenzia", "Uma agência diferente", "Eine Agentur mit einer anderen Perspektive"],
  "intro.title": ["Là où le talent<br>rencontre <em>le sens.</em>", "Where talent<br>meets <em>intention.</em>", "Donde el talento<br>encuentra <em>propósito.</em>", "Dove il talento<br>incontra <em>il senso.</em>", "Onde o talento<br>encontra <em>propósito.</em>", "Wo Talent auf<br><em>Sinn trifft.</em>"],
  "intro.copy": ["EOEX réunit avec soin les personnes, l’image et les opportunités. Nous valorisons les singularités, créons des partenariats porteurs de sens et donnons aux talents l’espace nécessaire pour s’épanouir.", "EOEX brings people, image and opportunity together with care. We represent individuality, build meaningful creative partnerships and make room for talent to grow.", "EOEX reúne con cuidado a personas, imagen y oportunidades. Celebramos la individualidad, creamos colaboraciones creativas con sentido y damos espacio al talento para crecer.", "EOEX unisce con cura persone, immagini e opportunità. Valorizziamo l’individualità, creiamo collaborazioni creative significative e diamo ai talenti spazio per crescere.", "A EOEX aproxima pessoas, imagem e oportunidades com cuidado. Valorizamos a individualidade, criamos parcerias criativas com propósito e damos espaço para o talento crescer.", "EOEX bringt Menschen, Bilder und Chancen mit Sorgfalt zusammen. Wir fördern Individualität, schaffen sinnvolle kreative Partnerschaften und geben Talenten Raum zur Entfaltung."],
  "intro.cta": ["Engager la conversation", "Begin a conversation", "Empecemos a conversar", "Iniziamo a parlarne", "Vamos conversar", "Ein Gespräch beginnen"],
  "intro.rule": ["Une représentation exigeante", "Considered representation", "Representación cuidada", "Rappresentanza d’eccellenza", "Representação criteriosa", "Ausgewählte Repräsentation"],
  "models.eyebrow": ["Singuliers par nature", "Distinctive by nature", "Únicos por naturaleza", "Unici per natura", "Singulares por natureza", "Von Natur aus einzigartig"],
  "models.title": ["Nos <em>talents</em>", "Our <em>models</em>", "Nuestros <em>modelos</em>", "I nostri <em>modelli</em>", "Os nossos <em>modelos</em>", "Unsere <em>Models</em>"],
  "models.aside": ["Rencontrez celles et ceux qui apportent un regard neuf à chaque image, essayage et défilé.", "Meet the people bringing a fresh perspective to every frame, fitting and runway.", "Conoce a quienes aportan una mirada nueva a cada imagen, prueba y pasarela.", "Incontra chi porta una prospettiva nuova a ogni scatto, fitting e passerella.", "Conheça quem traz uma nova perspetiva a cada imagem, prova e desfile.", "Lerne die Menschen kennen, die jedem Bild, Fitting und Laufsteg eine neue Perspektive geben."],
  "models.note": ["Les photos et films fournis sont associés à leur profil EOEX. Ouvrez une carte pour consulter les books et galeries disponibles.", "Supplied photos and films are matched to their EOEX profiles. Open a card to view available comp cards and galleries.", "Las fotos y vídeos se asocian a sus perfiles EOEX. Abre una tarjeta para ver los composites y galerías disponibles.", "Foto e video forniti sono associati ai profili EOEX. Apri una scheda per vedere i composit e le gallerie disponibili.", "As fotos e filmes fornecidos estão associados aos perfis EOEX. Abra um cartão para ver os composites e galerias disponíveis.", "Die bereitgestellten Fotos und Filme sind den EOEX-Profilen zugeordnet. Öffne eine Karte für Sedcards und Galerien."],
  "models.rosterOne": ["01 — Le roster", "01 — The roster", "01 — El elenco", "01 — I talenti", "01 — O elenco", "01 — Das Roster"],
  "models.rosterTwo": ["02 — Le roster", "02 — The roster", "02 — El elenco", "02 — I talenti", "02 — O elenco", "02 — Das Roster"],
  "models.sixProfiles": ["Six profils", "Six profiles", "Seis perfiles", "Sei profili", "Seis perfis", "Sechs Profile"],
  "models.eightProfiles": ["Huit profils", "Eight profiles", "Ocho perfiles", "Otto profili", "Oito perfis", "Acht Profile"],
  "portfolio.eyebrow": ["Collaborations choisies", "Selected collaborations", "Colaboraciones seleccionadas", "Collaborazioni selezionate", "Colaborações selecionadas", "Ausgewählte Kooperationen"],
  "portfolio.title": ["À la <em>une</em>", "In <em>focus</em>", "En el <em>foco</em>", "In <em>primo piano</em>", "Em <em>destaque</em>", "Im <em>Fokus</em>"],
  "portfolio.aside": ["Un aperçu des histoires, campagnes et univers créatifs que nous faisons naître ensemble.", "A glimpse into the stories, campaigns and creative worlds we build together.", "Un vistazo a las historias, campañas y mundos creativos que construimos juntos.", "Uno sguardo alle storie, campagne e visioni creative che realizziamo insieme.", "Um olhar sobre as histórias, campanhas e universos criativos que criamos em conjunto.", "Ein Einblick in Geschichten, Kampagnen und kreative Welten, die wir gemeinsam gestalten."],
  "opportunities.eyebrow": ["Des portes ouvertes, des projets qui comptent", "Open doors, meaningful work", "Puertas abiertas, proyectos con sentido", "Nuove porte, progetti che contano", "Portas abertas, projetos com propósito", "Offene Türen, sinnvolle Projekte"],
  "opportunities.title": ["La suite s’écrit<br><em>ensemble.</em>", "The next chapter<br>starts <em>together.</em>", "El próximo capítulo<br>empieza <em>juntos.</em>", "Il prossimo capitolo<br>inizia <em>insieme.</em>", "O próximo capítulo<br>começa <em>em conjunto.</em>", "Das nächste Kapitel<br>beginnt <em>gemeinsam.</em>"],
  "opportunities.copy": ["Découvrez les castings, projets créatifs et partenariats proposés par notre réseau.", "Explore a selection of casting, creative and partnership opportunities across our network.", "Descubre castings, proyectos creativos y colaboraciones de nuestra red.", "Scopri casting, progetti creativi e partnership della nostra rete.", "Explore castings, projetos criativos e parcerias da nossa rede.", "Entdecke Castings, kreative Projekte und Partnerschaften aus unserem Netzwerk."],
  "opportunities.hint": ["Sélectionnez une carte pour en découvrir davantage", "Select a card to discover more", "Selecciona una tarjeta para descubrir más", "Seleziona una scheda per saperne di più", "Selecione um cartão para saber mais", "Wähle eine Karte, um mehr zu erfahren"],
  "carousel.count": ["{current} sur {total}", "{current} of {total}", "{current} de {total}", "{current} di {total}", "{current} de {total}", "{current} von {total}"],
  "footer.eyebrow": ["Le début d’une belle histoire", "A good beginning", "Un buen comienzo", "Un buon inizio", "Um bom começo", "Ein guter Anfang"],
  "footer.title": ["Donnons vie à quelque chose<br><em>qui compte.</em>", "Let’s make something<br><em>matter.</em>", "Hagamos algo<br><em>que importe.</em>", "Diamo vita a qualcosa<br><em>che conta.</em>", "Vamos criar algo<br><em>que importa.</em>", "Lass uns etwas schaffen,<br><em>das Bedeutung hat.</em>"],
  "footer.cta": ["Rejoindre notre univers", "Join our world", "Únete a nuestro mundo", "Entra nel nostro mondo", "Junte-se ao nosso universo", "Werde Teil unserer Welt"],
  "footer.explore": ["Explorer", "Explore", "Explorar", "Esplora", "Explorar", "Entdecken"],
  "footer.world": ["L’univers EOEX", "The EOEX world", "El universo EOEX", "Il mondo EOEX", "O universo EOEX", "Die EOEX-Welt"],
  "footer.publishing": ["EOEX Édition", "EOEX Publishing", "EOEX Publicaciones", "EOEX Publishing", "EOEX Publicações", "EOEX Verlag"],
  "footer.connect": ["Contact", "Connect", "Contacto", "Contatti", "Contacto", "Kontakt"],
  "footer.enquiry": ["Nous contacter", "Start an enquiry", "Enviar una consulta", "Invia una richiesta", "Fazer um pedido", "Anfrage stellen"],
  "footer.signature": ["Créé avec intention.", "Made with intention.", "Creado con intención.", "Creato con intenzione.", "Criado com propósito.", "Mit Haltung gestaltet."],
  "footer.backToTop": ["Retour en haut ↑", "Back to top ↑", "Volver arriba ↑", "Torna su ↑", "Voltar ao topo ↑", "Nach oben ↑"],
  "join.return": ["Retour à l’agence", "Return to agency", "Volver a la agencia", "Torna all’agenzia", "Voltar à agência", "Zurück zur Agentur"],
  "join.eyebrow": ["Votre prochain chapitre", "Your next step", "Tu próximo paso", "Il tuo prossimo passo", "O seu próximo passo", "Dein nächster Schritt"],
  "join.title": ["Il y a une place<br><em>pour vous.</em>", "There’s room<br>for <em>you.</em>", "Hay un lugar<br><em>para ti.</em>", "C’è spazio<br><em>per te.</em>", "Há espaço<br><em>para si.</em>", "Hier ist Platz<br><em>für dich.</em>"],
  "join.copy": ["Dites-nous ce qui vous amène. Talent, partenaire créatif ou simplement curieux de l’univers EOEX : nous serions ravis d’en savoir plus.", "Tell us what brings you here. Whether you are talent, a creative partner or simply curious about the EOEX world, we would love to learn more.", "Cuéntanos qué te trae. Si eres talento, colaborador creativo o simplemente sientes curiosidad por EOEX, nos encantará conocerte.", "Raccontaci cosa ti porta qui. Che tu sia un talento, un partner creativo o semplicemente curioso del mondo EOEX, ci farà piacere saperne di più.", "Conte-nos o que o traz até aqui. Seja talento, parceiro criativo ou apenas curioso sobre o universo EOEX, gostaríamos de saber mais.", "Erzähl uns, was dich zu uns führt. Ob Talent, Kreativpartner oder einfach neugierig auf EOEX – wir freuen uns, mehr zu erfahren."],
  "join.signoff": ["À bientôt", "Let’s begin", "Empecemos", "Iniziamo", "Vamos começar", "Lass uns beginnen"],
  "join.academyLink": ["Découvrir EOEX Academy", "Discover EOEX Academy", "Descubre EOEX Academy", "Scopri EOEX Academy", "Conheça a EOEX Academy", "EOEX Academy entdecken"],
  "form.eyebrow": ["Un mot pour EOEX", "A note to EOEX", "Un mensaje para EOEX", "Un messaggio per EOEX", "Uma mensagem para a EOEX", "Eine Nachricht an EOEX"],
  "form.title": ["Engager la conversation", "Start a conversation", "Empecemos a conversar", "Iniziamo a parlarne", "Vamos conversar", "Ein Gespräch beginnen"],
  "form.name": ["Votre nom", "Your name", "Tu nombre", "Il tuo nome", "O seu nome", "Dein Name"],
  "form.namePlaceholder": ["Nom", "Name", "Nombre", "Nome", "Nome", "Name"],
  "form.email": ["Adresse e-mail", "Email address", "Correo electrónico", "Indirizzo email", "Endereço de e-mail", "E-Mail-Adresse"],
  "form.emailPlaceholder": ["vous@exemple.com", "you@example.com", "tu@ejemplo.com", "tu@esempio.com", "voce@exemplo.com", "du@beispiel.de"],
  "form.fileTitle": ["EOEX AGENCY — DEMANDE", "EOEX AGENCY — ENQUIRY", "EOEX AGENCY — SOLICITUD", "EOEX AGENCY — RICHIESTA", "EOEX AGENCY — PEDIDO", "EOEX AGENCY — ANFRAGE"],
  "form.fieldName": ["Nom", "Name", "Nombre", "Nome", "Nome", "Name"],
  "form.fieldEmail": ["E-mail", "Email", "Correo electrónico", "Email", "E-mail", "E-Mail"],
  "form.location": ["Pays / ville", "Country / city", "País / ciudad", "Paese / città", "País / cidade", "Land / Stadt"],
  "form.locationPlaceholder": ["Où êtes-vous basé·e ?", "Where are you based?", "¿Dónde resides?", "Dove ti trovi?", "Onde vive?", "Wo bist du ansässig?"],
  "form.phonePlaceholder": ["Ex. +33", "e.g. +33", "p. ej., +34", "es. +39", "ex.: +351", "z. B. +49"],
  "form.phone": ["Téléphone", "Phone", "Teléfono", "Telefono", "Telefone", "Telefon"],
  "form.optional": ["Facultatif", "Optional", "Opcional", "Facoltativo", "Opcional", "Optional"],
  "form.interest": ["Je souhaite", "I’m interested in", "Me interesa", "Sono interessato/a a", "Tenho interesse em", "Ich interessiere mich für"],
  "form.choose": ["Choisir un sujet", "Choose an enquiry", "Elige un tema", "Scegli un argomento", "Escolha um assunto", "Thema auswählen"],
  "form.message": ["Dites-nous en plus", "Tell us a little more", "Cuéntanos un poco más", "Raccontaci qualcosa in più", "Conte-nos um pouco mais", "Erzähl uns mehr"],
  "form.messagePlaceholder": ["Parlez-nous de votre projet.", "Share a few details about what you have in mind.", "Cuéntanos un poco sobre tu proyecto.", "Raccontaci brevemente la tua idea.", "Partilhe alguns detalhes da sua ideia.", "Erzähl uns, was du vorhast."],
  "form.consent": ["Je comprends que cette version prépare un fichier local et n’envoie pas mes informations à EOEX.", "I understand this preview prepares a local enquiry file and does not send my details to EOEX.", "Entiendo que esta versión prepara un archivo local y no envía mis datos a EOEX.", "Capisco che questa anteprima prepara un file locale e non invia i miei dati a EOEX.", "Compreendo que esta versão prepara um ficheiro local e não envia os meus dados à EOEX.", "Ich verstehe, dass diese Vorschau eine lokale Anfrage erstellt und meine Daten nicht an EOEX sendet."],
  "form.note": ["Vos informations ne sont ni envoyées ni enregistrées par cette page. Préparez une copie locale, puis choisissez de la télécharger.", "Your information is not uploaded or stored by this page. Prepare a local copy, then choose whether to download it.", "Esta página no carga ni guarda tus datos. Prepara una copia local y decide si quieres descargarla.", "Questa pagina non carica né salva i tuoi dati. Prepara una copia locale e scegli se scaricarla.", "Esta página não envia nem guarda os seus dados. Prepare uma cópia local e escolha se a quer transferir.", "Deine Angaben werden auf dieser Seite weder übertragen noch gespeichert. Erstelle eine lokale Kopie und entscheide, ob du sie herunterladen möchtest."],
  "form.submit": ["Préparer ma demande", "Prepare my enquiry", "Preparar mi solicitud", "Prepara la richiesta", "Preparar o meu pedido", "Anfrage vorbereiten"],
  "form.ready": ["Votre demande est prête. Cette page n’a ni envoyé ni enregistré vos informations.", "Your enquiry is ready. This page has not sent or stored your details.", "Tu solicitud está lista. Esta página no ha enviado ni guardado tus datos.", "La tua richiesta è pronta. Questa pagina non ha inviato né salvato i tuoi dati.", "O seu pedido está pronto. Esta página não enviou nem guardou os seus dados.", "Deine Anfrage ist bereit. Diese Seite hat deine Angaben weder gesendet noch gespeichert."],
  "form.download": ["Télécharger votre demande ↗", "Download your enquiry ↗", "Descargar tu solicitud ↗", "Scarica la richiesta ↗", "Transferir o seu pedido ↗", "Anfrage herunterladen ↗"],
  "form.notProvided": ["Non renseigné", "Not provided", "No indicado", "Non indicato", "Não indicado", "Nicht angegeben"],
  "form.noMessage": ["Aucun message.", "No message provided.", "Sin mensaje.", "Nessun messaggio.", "Sem mensagem.", "Keine Nachricht."],
  "interest.model": ["Devenir mannequin EOEX", "Become an EOEX model", "Convertirme en modelo EOEX", "Diventare modello/a EOEX", "Tornar-me modelo EOEX", "EOEX-Model werden"],
  "interest.academy": ["M’inscrire à EOEX Academy", "Enroll at EOEX Academy", "Inscribirme en EOEX Academy", "Iscrivermi a EOEX Academy", "Inscrever-me na EOEX Academy", "Bei EOEX Academy anmelden"],
  "interest.cartesienes": ["M’abonner à CARTESIENES", "Subscribe to CARTESIENES", "Suscribirme a CARTESIENES", "Abbonarmi a CARTESIENES", "Subscrever a CARTESIENES", "CARTESIENES abonnieren"],
  "interest.publishing": ["Découvrir EOEX Édition", "Explore EOEX Publishing", "Descubrir EOEX Publicaciones", "Scoprire EOEX Publishing", "Conhecer a EOEX Publicações", "EOEX Verlag entdecken"],
  "interest.sponsor": ["Devenir sponsor EOEX", "Become an EOEX sponsor", "Convertirme en patrocinador/a de EOEX", "Diventare sponsor EOEX", "Tornar-me patrocinador/a da EOEX", "EOEX-Sponsor werden"],
  "interest.partner": ["Devenir partenaire EOEX", "Become an EOEX partner", "Convertirme en socio/a de EOEX", "Diventare partner EOEX", "Tornar-me parceiro/a da EOEX", "EOEX-Partner werden"],
  "interest.collaborator": ["Devenir collaborateur EOEX", "Become an EOEX collaborator", "Colaborar con EOEX", "Collaborare con EOEX", "Colaborar com a EOEX", "Mit EOEX zusammenarbeiten"],
  "model.kind": ["Mannequin", "Model", "Modelo", "Modello", "Modelo", "Model"],
  "model.cardAria": ["Retourner la fiche de {name}", "Turn {name}’s profile card", "Girar la ficha de {name}", "Gira la scheda di {name}", "Virar o cartão de {name}", "{name}s Profilkarte umdrehen"],
  "model.approvedAlt": ["Portrait EOEX approuvé de {name}", "Approved EOEX portrait of {name}", "Retrato EOEX aprobado de {name}", "Ritratto EOEX approvato di {name}", "Retrato EOEX aprovado de {name}", "Freigegebenes EOEX-Porträt von {name}"],
  "model.placeholderAlt": ["Portrait éditorial d’illustration pour {name} ; à remplacer par une photo approuvée", "Editorial portrait placeholder for {name}; replace with approved model photography", "Retrato editorial provisional de {name}; sustituir por una foto aprobada", "Ritratto editoriale provvisorio di {name}; sostituire con una foto approvata", "Retrato editorial provisório de {name}; substituir por uma fotografia aprovada", "Editoriales Platzhalterporträt für {name}; durch freigegebenes Model-Foto ersetzen"],
  "model.profile": ["Profil", "Profile", "Perfil", "Profilo", "Perfil", "Profil"],
  "model.compCardIntro": ["Découvrez le book EOEX approuvé de ce profil.", "Discover the approved EOEX comp card for this profile.", "Descubre el composite EOEX aprobado de este perfil.", "Scopri il composit EOEX approvato di questo profilo.", "Consulte o composite EOEX aprovado deste perfil.", "Entdecke die freigegebene EOEX-Sedcard dieses Profils."],
  "model.pending": ["Book à venir", "Comp card pending", "Composite pendiente", "Composit in arrivo", "Composite pendente", "Sedcard folgt"],
  "model.pendingCopy": ["Les détails du profil et son book approuvé seront ajoutés ici.", "Profile details and approved comp card will be added here.", "Aquí añadiremos los datos del perfil y su composite aprobado.", "Qui aggiungeremo i dettagli del profilo e il composit approvato.", "Os detalhes do perfil e o composite aprovado serão adicionados aqui.", "Profildetails und freigegebene Sedcard folgen hier."],
  "model.openCard": ["Ouvrir le book", "Open comp card", "Abrir composite", "Apri composit", "Abrir composite", "Sedcard öffnen"],
  "model.viewGallery": ["Voir les photos & films", "View photos & films", "Ver fotos y vídeos", "Vedi foto e video", "Ver fotos e vídeos", "Fotos & Filme ansehen"],
  "model.galleryIntro": ["Photographies et films du book EOEX.", "Photography and films from the EOEX model book.", "Fotografías y vídeos del book de EOEX.", "Fotografie e video dal book EOEX.", "Fotografias e filmes do book EOEX.", "Fotos und Filme aus dem EOEX-Modelbook."],
  "model.enquire": ["Nous contacter", "Enquire", "Consultar", "Contattaci", "Contactar", "Anfragen"],
  "model.back": ["Retour au portrait ↑", "Back to portrait ↑", "Volver al retrato ↑", "Torna al ritratto ↑", "Voltar ao retrato ↑", "Zurück zum Porträt ↑"],
  "model.returnAria": ["Revenir au portrait de {name}", "Return to {name}’s portrait", "Volver al retrato de {name}", "Torna al ritratto di {name}", "Voltar ao retrato de {name}", "Zurück zu {name}s Porträt"],
  "portfolio.runways": ["Défilés", "Runways", "Pasarelas", "Sfilate", "Desfiles", "Laufstege"],
  "portfolio.editorial": ["Éditorial", "Editorial", "Editorial", "Editoriale", "Editorial", "Editorial"],
  "portfolio.commercial": ["Campagnes", "Commercial", "Campañas", "Commerciale", "Comercial", "Kampagnen"],
  "portfolio.beauty": ["Beauté & cosmétiques", "Cosmetics & Beauty", "Cosmética y belleza", "Cosmesi e bellezza", "Cosmética e beleza", "Kosmetik & Beauty"],
  "portfolio.labelMovement": ["01 / Mouvement", "01 / Movement", "01 / Movimiento", "01 / Movimento", "01 / Movimento", "01 / Bewegung"],
  "portfolio.labelImage": ["02 / Image", "02 / Image", "02 / Imagen", "02 / Immagine", "02 / Imagem", "02 / Bild"],
  "portfolio.labelCampaign": ["03 / Campagne", "03 / Campaign", "03 / Campaña", "03 / Campagna", "03 / Campanha", "03 / Kampagne"],
  "portfolio.labelBeauty": ["04 / Beauté", "04 / Beauty", "04 / Belleza", "04 / Bellezza", "04 / Beleza", "04 / Beauty"],
  "portfolio.runwaysCopy": ["Une silhouette affirmée, du premier essayage au dernier pas.", "A striking point of view, from first fitting to final walk.", "Una mirada inconfundible, de la primera prueba al último paso.", "Una visione decisa, dal primo fitting all’ultimo passo.", "Uma presença marcante, da primeira prova ao último passo.", "Ein starker Auftritt – vom ersten Fitting bis zum letzten Walk."],
  "portfolio.editorialCopy": ["Des histoires incarnées qui laissent une empreinte.", "Character-led stories made to stay with you.", "Historias llenas de personalidad que dejan huella.", "Storie di carattere che lasciano il segno.", "Histórias com personalidade que ficam na memória.", "Charakterstarke Geschichten, die in Erinnerung bleiben."],
  "portfolio.commercialCopy": ["Des campagnes vivantes et mémorables pour les marques qui ont une histoire.", "Human, memorable campaigns for brands with a story.", "Campañas auténticas y memorables para marcas con una historia.", "Campagne autentiche e memorabili per brand con una storia da raccontare.", "Campanhas autênticas e memoráveis para marcas com uma história.", "Authentische, einprägsame Kampagnen für Marken mit einer Geschichte."],
  "portfolio.beautyCopy": ["Des images beauté qui célèbrent l’individualité et le savoir-faire.", "Beauty imagery that celebrates individuality and craft.", "Imágenes de belleza que celebran la individualidad y el oficio.", "Immagini beauty che celebrano individualità e maestria.", "Imagens de beleza que celebram a individualidade e o saber-fazer.", "Beauty-Bilder, die Individualität und Handwerk feiern."],
  "portfolio.exploreGallery": ["Explorer la galerie", "Explore the gallery", "Explorar la galería", "Esplora la galleria", "Explorar a galeria", "Galerie ansehen"],
  "portfolio.turnAria": ["Retourner la carte Portfolio : {title}", "Turn {title} portfolio card", "Girar la tarjeta de portfolio: {title}", "Gira la scheda portfolio: {title}", "Virar o cartão de portfólio: {title}", "Portfolio-Karte „{title}“ umdrehen"],
  "gallery.eyebrow": ["EOEX / Portfolio", "EOEX / Portfolio", "EOEX / Portfolio", "EOEX / Portfolio", "EOEX / Portfólio", "EOEX / Portfolio"],
  "gallery.note": ["Chaque galerie présente uniquement les médias de sa catégorie.", "Each gallery shows media from its own category only.", "Cada galería muestra únicamente contenido de su categoría.", "Ogni galleria mostra solo i contenuti della propria categoria.", "Cada galeria mostra apenas conteúdos da respetiva categoria.", "Jede Galerie zeigt ausschließlich Medien ihrer Kategorie."],
  "gallery.filmUnsupported": ["Votre navigateur ne prend pas en charge la vidéo intégrée.", "Your browser does not support embedded video.", "Tu navegador no admite vídeo integrado.", "Il browser non supporta i video incorporati.", "O seu navegador não suporta vídeo incorporado.", "Dein Browser unterstützt keine eingebetteten Videos."],
  "opportunity.network": ["EOEX / Réseau", "EOEX / Network", "EOEX / Red", "EOEX / Rete", "EOEX / Rede", "EOEX / Netzwerk"],
  "opportunity.open": ["Opportunité ouverte", "Open opportunity", "Oportunidad abierta", "Opportunità aperta", "Oportunidade aberta", "Offene Möglichkeit"],
  "opportunity.discoverAria": ["Découvrir : {title}", "Discover {title}", "Descubrir: {title}", "Scopri: {title}", "Descobrir: {title}", "{title} entdecken"],
  "opportunity.enquire": ["Nous contacter ↗", "Start an enquiry ↗", "Enviar consulta ↗", "Invia una richiesta ↗", "Fazer um pedido ↗", "Anfrage stellen ↗"],
  "opportunity.casting": ["Castings ouverts", "Open Castings", "Castings abiertos", "Casting aperti", "Castings abertos", "Offene Castings"],
  "opportunity.partner": ["Agences partenaires", "Partner Agencies", "Agencias asociadas", "Agenzie partner", "Agências parceiras", "Partneragenturen"],
  "opportunity.designers": ["Créateurs de mode", "Fashion Designers", "Diseñadores de moda", "Stilisti", "Designers de moda", "Modedesigner"],
  "opportunity.events": ["Organisateurs d’événements", "Event Organisers", "Organizadores de eventos", "Organizzatori di eventi", "Organizadores de eventos", "Veranstalter"],
  "opportunity.studios": ["Studios photo", "Photography Studios", "Estudios de fotografía", "Studi fotografici", "Estúdios de fotografia", "Fotostudios"],
  "opportunity.castingCopy": ["Découvrez les prochains castings et rencontrez notre équipe.", "Discover upcoming casting calls and meet our team in person.", "Descubre los próximos castings y conoce a nuestro equipo.", "Scopri i prossimi casting e incontra il nostro team.", "Conheça os próximos castings e a nossa equipa.", "Entdecke kommende Castings und lerne unser Team kennen."],
  "opportunity.partnerCopy": ["Nous créons des relations entre agences fondées sur la confiance et une ambition commune.", "We welcome thoughtful agency relationships built on trust and shared ambition.", "Creamos relaciones entre agencias basadas en la confianza y la ambición compartida.", "Accogliamo relazioni tra agenzie fondate sulla fiducia e su ambizioni condivise.", "Valorizamos relações entre agências baseadas na confiança e em objetivos comuns.", "Wir setzen auf vertrauensvolle Agenturpartnerschaften mit gemeinsamen Zielen."],
  "opportunity.designersCopy": ["Rencontrez des créateurs en quête de talents, de regards singuliers et d’énergie créative.", "Meet designers looking for talent, perspective and new creative energy.", "Conoce a diseñadores que buscan talento, nuevas perspectivas y energía creativa.", "Incontra designer alla ricerca di talenti, nuove prospettive ed energia creativa.", "Conheça designers à procura de talento, novas perspetivas e energia criativa.", "Lerne Designer kennen, die Talente, neue Perspektiven und kreative Energie suchen."],
  "opportunity.eventsCopy": ["Imaginez des expériences live mémorables avec notre réseau événementiel et de production.", "Create memorable live experiences with our event and production network.", "Crea experiencias en vivo memorables con nuestra red de eventos y producción.", "Crea esperienze dal vivo memorabili con la nostra rete di eventi e produzione.", "Crie experiências ao vivo memoráveis com a nossa rede de eventos e produção.", "Gestalte mit unserem Event- und Produktionsnetzwerk unvergessliche Live-Erlebnisse."],
  "opportunity.studiosCopy": ["Rencontrez les créatifs et les studios qui façonnent les images de demain.", "Connect with image-makers and studios shaping the next visual story.", "Conecta con creadores de imagen y estudios que dan forma a nuevas historias visuales.", "Entra in contatto con creativi e studi che danno forma a nuove storie visive.", "Conheça criadores de imagem e estúdios que dão forma às próximas histórias visuais.", "Vernetze dich mit Bildschaffenden und Studios, die neue visuelle Geschichten gestalten."],
  "gallery.runway": ["Défilé", "Runway", "Pasarela", "Sfilata", "Desfile", "Laufsteg"],
  "gallery.silhouette": ["Silhouette", "Silhouette", "Silueta", "Silhouette", "Silhueta", "Silhouette"],
  "gallery.backstage": ["En coulisses", "Backstage", "Entre bastidores", "Dietro le quinte", "Bastidores", "Hinter den Kulissen"],
  "gallery.movement": ["Mouvement", "Movement", "Movimiento", "Movimento", "Movimento", "Bewegung"],
  "gallery.detail": ["Détail", "Detail", "Detalle", "Dettaglio", "Detalhe", "Detail"],
  "gallery.collection": ["Collection", "Collection", "Colección", "Collezione", "Coleção", "Kollektion"],
  "gallery.finale": ["Final", "Finale", "Final", "Finale", "Final", "Finale"],
  "gallery.editorial": ["Éditorial", "Editorial", "Editorial", "Editoriale", "Editorial", "Editorial"],
  "gallery.portrait": ["Portrait", "Portrait", "Retrato", "Ritratto", "Retrato", "Porträt"],
  "gallery.form": ["Forme", "Form", "Forma", "Forma", "Forma", "Form"],
  "gallery.closeup": ["Gros plan", "Close-up", "Primer plano", "Primo piano", "Plano aproximado", "Nahaufnahme"],
  "gallery.styling": ["Style", "Styling", "Estilismo", "Styling", "Styling", "Styling"],
  "gallery.colour": ["Couleur", "Colour", "Color", "Colore", "Cor", "Farbe"],
  "gallery.campaign": ["Campagne", "Campaign", "Campaña", "Campagna", "Campanha", "Kampagne"],
  "gallery.together": ["Ensemble", "Together", "Juntos", "Insieme", "Em conjunto", "Gemeinsam"],
  "gallery.expression": ["Expression", "Expression", "Expresión", "Espressione", "Expressão", "Ausdruck"],
  "gallery.wardrobe": ["Silhouette", "Wardrobe", "Vestuario", "Abbigliamento", "Guarda-roupa", "Kleidung"],
  "gallery.texture": ["Texture", "Texture", "Textura", "Texture", "Textura", "Textur"],
  "gallery.story": ["Histoire", "Story", "Historia", "Storia", "História", "Geschichte"],
  "gallery.beauty": ["Beauté", "Beauty", "Belleza", "Bellezza", "Beleza", "Beauty"],
  "gallery.skin": ["Peau", "Skin", "Piel", "Pelle", "Pele", "Haut"],
  "gallery.light": ["Lumière", "Light", "Luz", "Luce", "Luz", "Licht"],
  "gallery.florineFilm": ["Florine / film en tenue de soirée", "Florine / eveningwear film", "Florine / vídeo de noche", "Florine / film in abito da sera", "Florine / filme de vestido de noite", "Florine / Abendmode-Film"],
  "gallery.albinaFilm": ["Albina / film de cérémonie", "Albina / celebration film", "Albina / vídeo de celebración", "Albina / film celebrativo", "Albina / filme de celebração", "Albina / Festfilm"],
  "gallery.modelFilm": ["Film EOEX — {name}", "EOEX film — {name}", "Vídeo EOEX — {name}", "Video EOEX — {name}", "Filme EOEX — {name}", "EOEX-Film — {name}"],
  "gallery.modelPhoto": ["Book EOEX — {name}", "EOEX model book — {name}", "Book EOEX — {name}", "Book EOEX — {name}", "Book EOEX — {name}", "EOEX-Modelbook — {name}"],
  "gallery.modelTitle": ["Book de {name}", "{name} model book", "Book de {name}", "Book di {name}", "Book de {name}", "{name}s Modelbook"],
  "gallery.florineRunway": ["Florine / défilé RFW26", "Florine / RFW26 runway", "Florine / pasarela RFW26", "Florine / passerella RFW26", "Florine / desfile RFW26", "Florine / Laufsteg RFW26"],
  "city.paris": ["Paris", "Paris", "París", "Parigi", "Paris", "Paris"],
  "city.madrid": ["Madrid", "Madrid", "Madrid", "Madrid", "Madrid", "Madrid"],
  "city.barcelona": ["Barcelone", "Barcelona", "Barcelona", "Barcellona", "Barcelona", "Barcelona"],
  "city.berlin": ["Berlin", "Berlin", "Berlín", "Berlino", "Berlim", "Berlin"],
  "city.milan": ["Milan", "Milan", "Milán", "Milano", "Milão", "Mailand"],
  "city.london": ["Londres", "London", "Londres", "Londra", "Londres", "London"],
  "city.copenhagen": ["Copenhague", "Copenhagen", "Copenhague", "Copenaghen", "Copenhaga", "Kopenhagen"],
  "city.brussels": ["Bruxelles", "Brussels", "Bruselas", "Bruxelles", "Bruxelas", "Brüssel"],
  "city.geneva": ["Genève", "Geneva", "Ginebra", "Ginevra", "Genebra", "Genf"],
  "city.brusselsAgency": ["FB Agency — Bruxelles", "FB Agency — Brussels", "FB Agency — Bruselas", "FB Agency — Bruxelles", "FB Agency — Bruxelas", "FB Agency — Brüssel"],
  "city.milanAgency": ["JKC Agency — Milan", "JKC Agency — Milan", "JKC Agency — Milán", "JKC Agency — Milano", "JKC Agency — Milão", "JKC Agency — Mailand"],
  "model.compCardTitle": ["Book EOEX de {name}", "EOEX comp card for {name}", "Composite EOEX de {name}", "Composit EOEX di {name}", "Composite EOEX de {name}", "EOEX-Sedcard von {name}"]
};

function t(key, substitutions = {}) {
  const values = messages[key];
  if (!values) throw new Error(`Missing translation: ${key}`);
  const languageIndex = supportedLanguages.indexOf(currentLanguage);
  const template = values[languageIndex];
  return template.replace(/\{(\w+)\}/g, (_, name) => substitutions[name] ?? `{${name}}`);
}

let currentLanguage = "fr";

const photosFor = (slug, count) =>
  Array.from({ length: count }, (_, index) => `assets/site/models/${slug}-${index + 1}.jpg`);
const film = (slug) => `assets/site/films/${slug}.mp4`;
const modelMedia = {
  albina: {
    photos: photosFor("albina", 20),
    films: [film("albina-feature")],
    cover: "assets/site/models/albina-2.jpg"
  },
  alicia: { photos: photosFor("alicia", 8), films: [] },
  conan: { photos: [], films: [film("conan"), film("conan-2")], poster: "assets/site/models/conan-poster.jpg" },
  henri: { photos: ["assets/site/models/henri-card.jpg"], films: [] },
  antenor: { photos: ["assets/site/models/antenor-card.jpg"], films: [] },
  fernando: { photos: photosFor("fernando", 7), films: [film("fernando"), film("fernando-1")] },
  florine: {
    photos: ["assets/site/models/florine.jpg", ...photosFor("florine", 7)],
    films: [
      film("florine-minteh-1"), film("florine-robe-1"), film("florine-robe-2"),
      film("florine-mariage-2"), film("florine-eveningwear"), film("florine-rfw26"),
      film("florine"), ...Array.from({ length: 10 }, (_, index) => film(`florine-${index + 1}`))
    ]
  },
  jenna: { photos: photosFor("jenna", 7), films: [] },
  keira: { photos: photosFor("keira", 6), films: [film("keira"), film("keira-1")] },
  linda: { photos: photosFor("linda", 8), films: [film("linda")] },
  ornella: { photos: photosFor("orna", 8), films: [film("orna")] },
  patrycja: { photos: photosFor("patrycja", 2), films: [] },
  sosthene: {
    photos: photosFor("sosthene", 18),
    films: [film("sosthene"), film("sosthene-1"), film("sosthene-2"), film("sosthene-3"), film("sosthene-4")]
  },
  tristan: { photos: photosFor("tristan", 2), films: [] }
};

const models = [
  { name: "Albina", mediaKey: "albina", compCard: "assets/comp-cards/albina.pdf" },
  { name: "Tristan", mediaKey: "tristan" },
  { name: "Florine", mediaKey: "florine", compCard: "assets/comp-cards/florine.pdf" },
  { name: "Conan", mediaKey: "conan", compCard: "assets/comp-cards/EOEX-COMPCARD-Conan.pdf" },
  { name: "Jenna", mediaKey: "jenna" },
  { name: "Sosthene", mediaKey: "sosthene", compCard: "assets/comp-cards/EOEX-COMPCARD-SostheneG.pdf" },
  { name: "Fernando", mediaKey: "fernando", compCard: "assets/comp-cards/EOEX-COMPCARD-FernandoB.pdf" },
  { name: "Alicia", mediaKey: "alicia", compCard: "assets/comp-cards/EOEX-COMPCARD-AliciaV.pdf" },
  { name: "Henri", mediaKey: "henri", compCard: "assets/comp-cards/EOEX-COMPCARD-HenriD.pdf" },
  { name: "Keira", mediaKey: "keira", compCard: "assets/comp-cards/EOEX-COMPCARD-KeiraC.pdf" },
  { name: "Patrycja", mediaKey: "patrycja", compCard: "assets/comp-cards/EOEX-COMPCARD-Patrycja.pdf" },
  { name: "Ornella", mediaKey: "ornella", compCard: "assets/comp-cards/EOEX-COMPCARD-OrnellaB.pdf" },
  { name: "Linda", mediaKey: "linda", compCard: "assets/comp-cards/EOEX-COMPCARD-LindaC.pdf" },
  { name: "Antenor", mediaKey: "antenor", compCard: "assets/comp-cards/EOEX-COMPCARD-AntenorT.pdf" }
];

const portfolios = [
  {
    key: "runways",
    title: "Runways",
    labelKey: "portfolio.labelMovement",
    descriptionKey: "portfolio.runwaysCopy",
    imageSrc: "assets/site/covers/runway.jpg",
    gallery: [],
    films: [
      { src: "assets/site/runway/albina-mariage-1.mp4", poster: "assets/site/runway/posters/albina-mariage-1.jpg", captionKey: "gallery.runway" },
      { src: "assets/site/runway/albina-mariage-2.mp4", poster: "assets/site/runway/posters/albina-mariage-2.jpg", captionKey: "gallery.runway" },
      { src: "assets/site/runway/catia-robe-1.mp4", poster: "assets/site/runway/posters/catia-robe-1.jpg", captionKey: "gallery.runway" },
      { src: "assets/site/runway/catia-mariage-1.mp4", poster: "assets/site/runway/posters/catia-mariage-1.jpg", captionKey: "gallery.runway" },
      { src: "assets/site/runway/florine-mariage-1.mp4", poster: "assets/site/runway/posters/florine-mariage-1.jpg", captionKey: "gallery.florineRunway" },
      { src: "assets/site/runway/florine-mariage-2.mp4", poster: "assets/site/runway/posters/florine-mariage-2.jpg", captionKey: "gallery.florineRunway" },
      { src: "assets/site/runway/sosthene-minteh-1.mp4", poster: "assets/site/runway/posters/sosthene-minteh-1.jpg", captionKey: "gallery.runway" },
      { src: "assets/site/runway/sosthene-minteh-2.mp4", poster: "assets/site/runway/posters/sosthene-minteh-2.jpg", captionKey: "gallery.runway" }
    ]
  },
  {
    key: "editorial",
    title: "Editorial",
    labelKey: "portfolio.labelImage",
    descriptionKey: "portfolio.editorialCopy",
    imageSrc: "assets/site/editorial/editorial-1.jpg",
    gallery: [
      ["assets/site/editorial/editorial-1.jpg", "gallery.editorial", "gallery.portrait"],
      ["assets/site/editorial/editorial-2.jpg", "gallery.editorial", "gallery.form"],
      ["assets/site/editorial/editorial-3.jpg", "gallery.editorial", "gallery.closeup"],
      ["assets/site/editorial/editorial-4.jpg", "gallery.editorial", "gallery.styling"],
      ["assets/site/editorial/editorial-5.jpg", "gallery.editorial", "gallery.colour"],
      ["assets/site/editorial/editorial-6.jpg", "gallery.editorial", "gallery.detail"],
      ["assets/site/editorial/editorial-7.jpg", "gallery.editorial", "gallery.portrait"]
    ]
  },
  {
    key: "commercial",
    title: "Commercial",
    labelKey: "portfolio.labelCampaign",
    descriptionKey: "portfolio.commercialCopy",
    imageSrc: "assets/site/covers/commercial.jpg",
    films: [
      { src: "assets/site/commercial/perfume.mp4", poster: "assets/site/commercial/posters/perfume.jpg", captionKey: "gallery.campaign" },
      { src: "assets/site/commercial/sosthene-campaign.mp4", poster: "assets/site/commercial/posters/sosthene-campaign.jpg", captionKey: "gallery.campaign" }
    ],
    gallery: []
  },
  {
    key: "beauty",
    title: "Cosmetics & Beauty",
    labelKey: "portfolio.labelBeauty",
    descriptionKey: "portfolio.beautyCopy",
    imageSrc: "assets/site/covers/beauty.jpg",
    gallery: [
      ["assets/site/beauty/beauty-1.jpg", "gallery.beauty", "gallery.skin"],
      ["assets/site/beauty/beauty-2.jpg", "gallery.beauty", "gallery.portrait"],
      ["assets/site/beauty/beauty-3.jpg", "gallery.beauty", "gallery.colour"],
      ["assets/site/beauty/beauty-4.jpg", "gallery.beauty", "gallery.light"],
      ["assets/site/beauty/beauty-5.jpg", "gallery.beauty", "gallery.form"],
      ["assets/site/beauty/beauty-6.jpg", "gallery.beauty", "gallery.detail"]
    ]
  }
];

const opportunities = [
  {
    titleKey: "opportunity.casting",
    image: "photo-1539109136881-3be0616acf4b",
    descriptionKey: "opportunity.castingCopy",
    tags: ["city.paris", "city.madrid", "city.barcelona", "city.berlin", "city.milan", "city.london", "city.copenhagen", "city.brussels", "city.geneva"],
    interest: "model"
  },
  {
    titleKey: "opportunity.partner",
    image: "photo-1483985988355-763728e1935b",
    descriptionKey: "opportunity.partnerCopy",
    tags: ["city.brusselsAgency", "city.milanAgency"],
    interest: "partner"
  },
  {
    titleKey: "opportunity.designers",
    image: "photo-1509631179647-0177331693ae",
    descriptionKey: "opportunity.designersCopy",
    tags: ["La Maison Minteh", "Gilson V Couture", "Charles Edoh", "Linda Lither", "Isso", "Revolusum", "Kamila Ferreira"],
    interest: "collaborator"
  },
  {
    titleKey: "opportunity.events",
    image: "photo-1515886657613-9f3515b0c78f",
    descriptionKey: "opportunity.eventsCopy",
    tags: ["Biconic", "Infinity"],
    interest: "partner"
  },
  {
    titleKey: "opportunity.studios",
    image: "photo-1529139574466-a303027c1d8b",
    descriptionKey: "opportunity.studiosCopy",
    tags: ["Moov Prod", "Luca", "Andrea", "Paulas Morena", "Studio Marguerite"],
    interest: "collaborator"
  }
];

const esc = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

function renderModel(model, index) {
  const name = esc(model.name);
  const media = model.mediaKey ? modelMedia[model.mediaKey] : null;
  const photo = media?.photos[0];
  const imageSrc = media?.cover || photo || media?.poster || model.src || image(model.image, 760);
  const hasApprovedImage = Boolean(photo || media?.poster || model.src);
  const cardLink = model.compCard
    ? `<a class="pdf-link" href="${esc(model.compCard)}" target="_blank" rel="noreferrer">${t("model.openCard")} <span aria-hidden="true">↗</span></a>`
    : media && (media.photos.length || media.films.length)
      ? `<p class="model-code">${t("model.pending")}</p><a class="text-link" href="#join" data-interest="model">${t("model.enquire")} <span aria-hidden="true">↗</span></a>`
      : `<p class="model-code">${t("model.pending")}</p><p>${t("model.pendingCopy")}</p><a class="text-link" href="#join" data-interest="model">${t("model.enquire")} <span aria-hidden="true">↗</span></a>`;
  const galleryLink = media && (media.photos.length || media.films.length)
    ? `<button class="pdf-link model-gallery-open" type="button" data-model-gallery="${index}">${t("model.viewGallery")} <span aria-hidden="true">↗</span></button>`
    : "";
  return `
    <article class="model-card">
      <div class="model-card-inner">
        <div class="model-face model-front">
          <img src="${esc(imageSrc)}" alt="${hasApprovedImage ? t("model.approvedAlt", { name }) : t("model.placeholderAlt", { name })}" loading="lazy">
          <div class="model-caption"><div><p>EOEX / ${t("model.kind")}</p><h3>${name}</h3></div><span class="flip-cue" aria-hidden="true">↗</span></div>
          <button class="flip-trigger flip-cue" type="button" aria-label="${t("model.cardAria", { name })}" aria-expanded="false">↗</button>
        </div>
        <div class="model-face model-back${model.compCard ? " model-back--pdf" : ""}">
          ${model.compCard ? `<iframe class="comp-card-frame" title="${t("model.compCardTitle", { name })}" src="${esc(model.compCard)}#toolbar=0&navpanes=0&view=FitH" loading="lazy"></iframe>` : ""}
          <div class="model-back-content">
          <p class="back-brand">EOEX AGENCY</p>
          <p class="model-code">${t("model.profile")} ${String(index + 1).padStart(2, "0")}</p>
          <h3>${name}</h3>
          <p>${media && (media.photos.length || media.films.length) ? t("model.galleryIntro") : model.compCard ? t("model.compCardIntro") : t("model.pendingCopy")}</p>
          ${galleryLink}
          ${cardLink}
          <button class="flip-back" type="button" aria-label="${t("model.returnAria", { name })}" aria-expanded="true">${t("model.back")}</button>
          </div>
        </div>
      </div>
    </article>`;
}

function renderModels() {
  document.querySelector("#model-grid-one").innerHTML = models.slice(0, 6).map(renderModel).join("");
  document.querySelector("#model-grid-two").innerHTML = models.slice(6).map((model, index) => renderModel(model, index + 6)).join("");
  document.querySelectorAll(".model-card").forEach((card) => {
    card.addEventListener("pointerleave", () => card.classList.remove("is-force-front"));
  });
}

function renderPortfolios() {
  document.querySelector("#portfolio-grid").innerHTML = portfolios.map((portfolio, index) => `
    <article class="portfolio-card">
      <div class="portfolio-card-inner">
        <div class="portfolio-face portfolio-front">
          <img src="${esc(portfolio.imageSrc || image(portfolio.image, 1150))}" alt="" loading="lazy">
          <div class="portfolio-card-content">
            <p class="eyebrow">${t(portfolio.labelKey)}</p>
            <h3>${t(`portfolio.${portfolio.key}`)}</h3>
          </div>
          <button class="flip-trigger flip-cue" type="button" aria-label="${t("portfolio.turnAria", { title: t(`portfolio.${portfolio.key}`) })}" aria-expanded="false">↗</button>
        </div>
        <div class="portfolio-face portfolio-back">
          <p class="eyebrow">${t(portfolio.labelKey)}</p>
          <h3>${t(`portfolio.${portfolio.key}`)}</h3>
          <p>${t(portfolio.descriptionKey)}</p>
          <button type="button" data-gallery="${index}">${t("portfolio.exploreGallery")} <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </article>
  `).join("");
}

const opportunityTrack = document.querySelector("#opportunity-track");
function renderOpportunities() {
  opportunityTrack.innerHTML = opportunities.map((opportunity) => `
    <article class="opportunity-card">
      <div class="opportunity-inner">
        <div class="opportunity-face opportunity-front">
          <img src="${image(opportunity.image, 820)}" alt="" loading="lazy">
          <div class="opportunity-front-content"><p>${t("opportunity.network")}</p><h3>${t(opportunity.titleKey)}</h3></div>
          <button class="flip-trigger flip-cue" type="button" aria-label="${t("opportunity.discoverAria", { title: t(opportunity.titleKey) })}" aria-expanded="false">↗</button>
        </div>
        <div class="opportunity-face opportunity-back">
          <p class="eyebrow">${t("opportunity.open")}</p>
          <h3>${t(opportunity.titleKey)}</h3>
          <p>${t(opportunity.descriptionKey)}</p>
          <div class="opportunity-tags">${opportunity.tags.map((tag) => `<span>${esc(messages[tag] ? t(tag) : tag)}</span>`).join("")}</div>
          <button type="button" data-interest="${esc(opportunity.interest)}">${t("opportunity.enquire")}</button>
        </div>
      </div>
    </article>
  `).join("");
  updateCarousel();
}

function renderLocalizedContent() {
  document.documentElement.lang = currentLanguage;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]').content = t("meta.description");
  document.querySelector('meta[property="og:title"]').content = t("meta.title");
  document.querySelector('meta[property="og:description"]').content = t("meta.description");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll(".language-select").forEach((select) => {
    select.value = currentLanguage;
  });
  if (heroVideoToggle) updateHeroVideoControls();
  renderModels();
  renderPortfolios();
  renderOpportunities();
  if (activeModelGalleryIndex !== null && galleryDialog.open) renderModelGallery(models[activeModelGalleryIndex]);
  else if (activeGalleryIndex !== null && galleryDialog.open) renderGallery(portfolios[activeGalleryIndex]);
}

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
menuToggle.addEventListener("click", () => {
  const open = primaryNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", t(open ? "aria.closeMenu" : "aria.openMenu"));
});
primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", t("aria.openMenu"));
  }
});

document.addEventListener("click", (event) => {
  const turnButton = event.target.closest(".flip-trigger, .flip-back");
  if (turnButton) {
    const card = turnButton.closest(".model-card, .opportunity-card, .portfolio-card");
    const flipped = card.classList.toggle("is-flipped");
    if (turnButton.classList.contains("flip-back")) card.classList.add("is-force-front");
    else card.classList.remove("is-force-front");
    card.querySelectorAll(".flip-trigger, .flip-back").forEach((button) => {
      button.setAttribute("aria-expanded", String(flipped));
    });
  }
});
document.querySelectorAll(".model-card").forEach((card) => {
  card.addEventListener("pointerleave", () => card.classList.remove("is-force-front"));
});

const agencyPage = document.querySelector("#agency-page");
const joinPage = document.querySelector("#join-page");
function updateRoute() {
  const joining = window.location.hash === "#join";
  agencyPage.hidden = joining;
  joinPage.hidden = !joining;
  if (joining) window.scrollTo(0, 0);
}
window.addEventListener("hashchange", updateRoute);
updateRoute();

const heroVideo = document.querySelector("#hero-video");
const heroVideoToggle = document.querySelector("#hero-video-toggle");
const heroVideoCount = document.querySelector("#hero-video-count");
const heroVideos = [
  { src: "assets/site/hero-carousel/arrivee.mp4", poster: "assets/site/hero-carousel/posters/arrivee.jpg" },
  { src: "assets/site/hero-carousel/eoex-intro.mp4", poster: "assets/site/hero-carousel/posters/eoex-intro.jpg" },
  { src: "assets/site/hero-carousel/italian-showroom.mp4", poster: "assets/site/hero-carousel/posters/italian-showroom.jpg" },
  { src: "assets/site/hero-carousel/mfw26-backstage-reel.mp4", poster: "assets/site/hero-carousel/posters/mfw26-backstage-reel.jpg" }
];
const reducedMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
let heroVideoIndex = 0;
let heroVideoPlaying = !reducedMotionPreference.matches;
let heroVisible = !joinPage.hidden;
let heroRotationTimer = null;

function updateHeroVideoControls() {
  heroVideoCount.textContent = `${String(heroVideoIndex + 1).padStart(2, "0")} / ${String(heroVideos.length).padStart(2, "0")}`;
  heroVideoToggle.setAttribute("aria-label", t(heroVideoPlaying ? "hero.videoPause" : "hero.videoPlay"));
  heroVideoToggle.querySelector("span").textContent = heroVideoPlaying ? "Ⅱ" : "▶";
}

function syncHeroVideoPlayback() {
  window.clearInterval(heroRotationTimer);
  if (!heroVideoPlaying || !heroVisible || document.hidden) {
    heroVideo.pause();
    updateHeroVideoControls();
    return;
  }

  heroVideo.play().catch((error) => {
    if (error.name === "AbortError") return;
    console.error("The home-page video could not start playing.", error);
    window.clearInterval(heroRotationTimer);
    heroVideoPlaying = false;
    updateHeroVideoControls();
  });
  heroRotationTimer = window.setInterval(() => showHeroVideo(heroVideoIndex + 1), 12000);
  updateHeroVideoControls();
}

function showHeroVideo(index) {
  heroVideoIndex = (index + heroVideos.length) % heroVideos.length;
  const video = heroVideos[heroVideoIndex];
  heroVideo.pause();
  heroVideo.src = video.src;
  heroVideo.poster = video.poster;
  heroVideo.load();
  syncHeroVideoPlayback();
}

heroVideo.addEventListener("error", () => {
  console.error("The home-page video asset failed to load.", heroVideo.currentSrc);
});
heroVideoToggle.addEventListener("click", () => {
  heroVideoPlaying = !heroVideoPlaying;
  syncHeroVideoPlayback();
});
document.querySelector("#hero-video-prev").addEventListener("click", () => showHeroVideo(heroVideoIndex - 1));
document.querySelector("#hero-video-next").addEventListener("click", () => showHeroVideo(heroVideoIndex + 1));
document.addEventListener("visibilitychange", syncHeroVideoPlayback);
reducedMotionPreference.addEventListener("change", (event) => {
  if (event.matches) heroVideoPlaying = false;
  syncHeroVideoPlayback();
});
new IntersectionObserver(([entry]) => {
  heroVisible = entry.isIntersecting;
  syncHeroVideoPlayback();
}, { threshold: 0.15 }).observe(document.querySelector("#home"));
updateHeroVideoControls();
syncHeroVideoPlayback();

const opportunityViewport = document.querySelector("#opportunity-viewport");
const carouselCurrent = document.querySelector("#carousel-current");
const carouselTotal = document.querySelector("#carousel-total");
let opportunityIndex = 0;
carouselTotal.textContent = String(opportunities.length).padStart(2, "0");
const carouselCount = document.querySelector(".carousel-count");

function updateCarousel() {
  const card = opportunityTrack.querySelector(".opportunity-card");
  if (!card) return;
  const gap = Number.parseFloat(getComputedStyle(opportunityTrack).gap) || 0;
  const maxIndex = Math.max(0, opportunityTrack.children.length - Math.floor(opportunityViewport.clientWidth / (card.getBoundingClientRect().width + gap)));
  opportunityIndex = Math.min(opportunityIndex, maxIndex);
  opportunityTrack.style.transform = `translateX(-${opportunityIndex * (card.getBoundingClientRect().width + gap)}px)`;
  carouselCurrent.textContent = String(opportunityIndex + 1).padStart(2, "0");
  carouselCount.setAttribute("aria-label", t("carousel.count", {
    current: opportunityIndex + 1,
    total: opportunities.length
  }));
  document.querySelector('[data-carousel="prev"]').disabled = opportunityIndex === 0;
  document.querySelector('[data-carousel="next"]').disabled = opportunityIndex >= maxIndex;
}
document.querySelector('[data-carousel="prev"]').addEventListener("click", () => {
  opportunityIndex = Math.max(0, opportunityIndex - 1);
  updateCarousel();
});
document.querySelector('[data-carousel="next"]').addEventListener("click", () => {
  opportunityIndex += 1;
  updateCarousel();
});
window.addEventListener("resize", updateCarousel);
updateCarousel();

const galleryDialog = document.querySelector("#gallery-dialog");
const galleryGrid = document.querySelector("#gallery-grid");
const galleryTitle = document.querySelector("#gallery-title");
let activeGalleryIndex = null;
let activeModelGalleryIndex = null;
function renderGallery(portfolio) {
  galleryTitle.textContent = t(`portfolio.${portfolio.key}`);
  const stills = portfolio.gallery.map(([photo, category, detail]) => {
    const caption = `${t(category)} / ${t(detail)}`;
    return `
      <figure class="gallery-item">
        <img src="${esc(photo)}" alt="${esc(caption)} — ${esc(t("gallery.note"))}" loading="lazy">
        <figcaption>${esc(caption)}</figcaption>
      </figure>
    `;
  }).join("");
  const films = [...(portfolio.films || []), ...(portfolio.film ? [portfolio.film] : [])].map((film) => `
    <figure class="gallery-item gallery-video">
      <video controls preload="none" playsinline${film.poster ? ` poster="${esc(film.poster)}"` : ""}>
        <source src="${esc(film.src)}" type="video/mp4">
        ${t("gallery.filmUnsupported")}
      </video>
      <figcaption>${t(film.captionKey)}</figcaption>
    </figure>
  `).join("");
  galleryGrid.innerHTML = `${stills}${films}`;
}
function renderModelGallery(model) {
  const media = modelMedia[model.mediaKey];
  const name = esc(model.name);
  galleryTitle.textContent = t("gallery.modelTitle", { name });
  const stills = media.photos.map((photo) => `
    <figure class="gallery-item">
      <img src="${esc(photo)}" alt="${esc(t("model.approvedAlt", { name }))}" loading="lazy">
      <figcaption>${esc(t("gallery.modelPhoto", { name }))}</figcaption>
    </figure>
  `).join("");
  const films = media.films.map((source) => `
    <figure class="gallery-item gallery-video">
      <video controls preload="none" playsinline${media.photos[0] || media.poster ? ` poster="${esc(media.photos[0] || media.poster)}"` : ""} aria-label="${esc(t("gallery.modelFilm", { name }))}">
        <source src="${esc(source)}" type="video/mp4">
        ${t("gallery.filmUnsupported")}
      </video>
      <figcaption>${esc(t("gallery.modelFilm", { name }))}</figcaption>
    </figure>
  `).join("");
  galleryGrid.innerHTML = `${stills}${films}`;
}
document.querySelector("#portfolio-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-gallery]");
  if (!button) return;
  activeGalleryIndex = Number(button.dataset.gallery);
  activeModelGalleryIndex = null;
  renderGallery(portfolios[activeGalleryIndex]);
  galleryDialog.showModal();
});
document.querySelector(".models").addEventListener("click", (event) => {
  const button = event.target.closest("[data-model-gallery]");
  if (!button) return;
  activeModelGalleryIndex = Number(button.dataset.modelGallery);
  activeGalleryIndex = null;
  renderModelGallery(models[activeModelGalleryIndex]);
  galleryDialog.showModal();
});
document.querySelector(".dialog-close").addEventListener("click", () => galleryDialog.close());
galleryDialog.addEventListener("close", () => {
  activeGalleryIndex = null;
  activeModelGalleryIndex = null;
});
galleryDialog.addEventListener("click", (event) => {
  if (event.target === galleryDialog) galleryDialog.close();
});

function openJoin(interest) {
  window.location.hash = "join";
  if (interest) document.querySelector("#interest").value = interest;
}
document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-interest]");
  if (!link) return;
  event.preventDefault();
  openJoin(link.dataset.interest);
});

document.querySelector("#inquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const formResult = document.querySelector("#form-result");
  if (formResult.dataset.objectUrl) URL.revokeObjectURL(formResult.dataset.objectUrl);
  const values = new FormData(form);
  const text = [
    t("form.fileTitle"),
    "",
    `${t("form.fieldName")}: ${values.get("name")}`,
    `${t("form.fieldEmail")}: ${values.get("email")}`,
    `${t("form.location")}: ${values.get("location") || t("form.notProvided")}`,
    `${t("form.phone")}: ${values.get("phone") || t("form.notProvided")}`,
    `${t("form.interest")}: ${t(`interest.${values.get("interest")}`)}`,
    "",
    `${t("form.message")}:`,
    values.get("message") || t("form.noMessage")
  ].join("\n");
  const file = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const name = String(values.get("name")).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "enquiry";
  const download = document.createElement("a");
  download.className = "form-download";
  download.href = url;
  download.download = `eoex-enquiry-${name}.txt`;
  download.textContent = t("form.download");
  formResult.dataset.objectUrl = url;
  formResult.replaceChildren(
    document.createTextNode(t("form.ready")),
    document.createElement("br"),
    download
  );
});

window.addEventListener("pagehide", () => {
  const formResult = document.querySelector("#form-result");
  if (formResult.dataset.objectUrl) URL.revokeObjectURL(formResult.dataset.objectUrl);
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
document.querySelector("#join-year").textContent = String(new Date().getFullYear());

const languageSelects = document.querySelectorAll(".language-select");
currentLanguage = localStorage.getItem("eoex-agency-language") || "fr";
if (!supportedLanguages.includes(currentLanguage)) currentLanguage = "fr";
renderLocalizedContent();
languageSelects.forEach((select) => {
  select.addEventListener("change", () => {
    currentLanguage = select.value;
    localStorage.setItem("eoex-agency-language", currentLanguage);
    renderLocalizedContent();
  });
});
