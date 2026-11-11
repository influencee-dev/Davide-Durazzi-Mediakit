/**
 * TUTTI i contenuti e i numeri del media kit stanno in questo file.
 * Per aggiornare una statistica: cambia `value`, `period` e `updatedAt` qui sotto. Nient'altro.
 *
 * Regole (concordate con Davide):
 *  - nessun numero inventato o stimato: dato mancante = non lo si scrive;
 *  - Twitch: nessuna statistica (canale nuovo, ancora piccolo; i dati del vecchio account sono storici);
 *  - le metriche di piattaforme diverse NON si sommano;
 *  - affiliazioni e collaborazioni dirette sono sempre distinte.
 */

export type PlatformId = 'tiktok' | 'youtube' | 'instagram' | 'twitch' | 'linkedin' | 'facebook';

export interface Stat {
  /** Valore reale letto dalla fonte. */
  value: number;
  /** Cosa misura, es. "visualizzazioni". */
  label: string;
  /** Periodo di riferimento, scritto per esteso. */
  period: string;
  /** Da dove arriva il dato. */
  source: string;
  /** true = la piattaforma lo mostra già arrotondato. */
  approximate?: boolean;
}

export interface Bar {
  label: string;
  value: number; // percentuale
}

export const creator = {
  name: 'Davide Durazzi',
  email: 'info@davidedurazzi.it',
  emailSubject: 'Collaborazione',
  website: 'https://www.davidedurazzi.it',
  /** Crediti nel footer: obbligatori in ogni media kit Influencee. */
  builder: { name: 'Influencee', url: 'https://www.influencee.it' },
  /** Data (ISO) dell'ultimo aggiornamento dei numeri. */
  updatedAt: '2026-11-10',

  seo: {
    title: 'Davide Durazzi — Media kit 2026 | Tecnologia, AI, gaming e motori',
    description:
      'Media kit di Davide Durazzi, content creator italiano di tecnologia, intelligenza artificiale, gaming e motori. Numeri verificati, formati di collaborazione e contatti per brand e agenzie.',
  },

  socials: [
    { id: 'tiktok', label: 'TikTok', handle: '@davidedurazzi', url: 'https://www.tiktok.com/@davidedurazzi' },
    { id: 'youtube', label: 'YouTube', handle: 'Davide Durazzi', url: 'https://www.youtube.com/@davidedurazzioff' },
    { id: 'instagram', label: 'Instagram', handle: 'davidedurazzi.it', url: 'https://www.instagram.com/davidedurazzi.it/' },
    { id: 'twitch', label: 'Twitch', handle: 'DavideDurazzi · martedì 21:30', url: 'https://www.twitch.tv/DavideDurazzi' },
  ] as { id: PlatformId; label: string; handle: string; url: string }[],

  hero: {
    eyebrow: 'Media kit 2026',
    headline: ['La tecnologia,', 'provata davvero.'],
    intro:
      'Creator italiano di tecnologia, intelligenza artificiale, gaming e motori. Provo, costruisco e racconto in prima persona, e rispondo a chi mi guarda.',
    topics: ['Tecnologia', 'Intelligenza artificiale', 'Gaming', 'Motori e automotive'],
  },

  /** Numeri in evidenza (ognuno di una sola piattaforma, mai sommati). */
  kpis: [
    {
      id: 'tiktok',
      platform: 'tiktok',
      stat: {
        value: 403000,
        label: 'visualizzazioni dei post',
        period: '10 set – 8 nov 2026 (60 giorni)',
        source: 'TikTok Studio, Panoramica',
        approximate: true,
      } as Stat,
      secondary: [
        { value: 9955, label: 'follower', note: 'Documento di Davide, 10 nov 2026' },
        { value: 325800, label: 'spettatori totali', note: 'TikTok Studio, 60 giorni al 8 nov 2026', short: true },
        { value: 4500, label: 'mi piace', note: 'TikTok Studio, 60 giorni al 8 nov 2026', short: true },
        { value: 399, label: 'commenti', note: 'TikTok Studio, 60 giorni al 8 nov 2026' },
        { value: 199, label: 'condivisioni', note: 'TikTok Studio, 60 giorni al 8 nov 2026' },
      ],
    },
    {
      id: 'youtube',
      platform: 'youtube',
      stat: {
        value: 75075,
        label: 'visualizzazioni',
        period: '11 ago – 8 nov 2026 (90 giorni)',
        source: 'YouTube Studio',
      } as Stat,
      secondary: [
        { value: 814, label: 'iscritti', note: 'Documento di Davide, 10 nov 2026' },
        { value: 7556, label: 'pubblico mensile', note: 'YouTube Studio, ultimi 28 giorni al 8 nov 2026' },
        { value: 1124, label: 'mi piace · 90 giorni', note: 'YouTube Studio' },
        { value: 17, label: 'commenti · 90 giorni', note: 'YouTube Studio' },
        { value: 28, label: 'condivisioni · 90 giorni', note: 'YouTube Studio' },
      ],
    },
    {
      id: 'instagram',
      platform: 'instagram',
      stat: {
        value: 37315,
        label: 'visualizzazioni',
        period: '11 ago – 8 nov 2026 (90 giorni)',
        source: 'Instagram Insights',
      } as Stat,
      secondary: [
        { value: 698, label: 'follower', note: 'Instagram Insights, 10 nov 2026' },
        { value: 32, label: 'reel pubblicati · 30 giorni', note: 'Instagram Insights, 11 ott – 10 nov 2026' },
        { value: 9629, label: 'account che hanno visto i reel · 30 giorni', note: 'Instagram Insights, 11 ott – 10 nov 2026' },
        { value: 652, label: 'interazioni · 30 giorni', note: 'Instagram Insights, 11 ott – 10 nov 2026' },
      ],
      facts: [
        'Interazioni (11 ott – 10 nov): 539 mi piace, 44 commenti, 43 condivisioni, 19 salvataggi, 7 repost.',
        'Follower più attivi: domenica 21–24, lunedì e sabato 18–21 (CET).',
      ],
    },
    {
      id: 'site',
      platform: null,
      stat: {
        value: 636,
        label: 'visitatori unici su davidedurazzi.it',
        period: '11 ott – 9 nov 2026 (30 giorni)',
        source: 'Vercel Analytics',
      } as Stat,
      secondary: [{ value: 1006, label: 'pagine viste', note: 'Vercel Analytics, stesso periodo' }],
    },
  ],

  audience: {
    note: 'Dati demografici letti dagli strumenti ufficiali di ogni piattaforma.',
    instagram: {
      period: 'Follower Instagram (698), Instagram Insights, 11 ott – 10 nov 2026',
      gender: [
        { label: 'Uomini', value: 77.7 },
        { label: 'Donne', value: 22.3 },
      ] as Bar[],
      ages: [
        { label: '13–17', value: 1.7 },
        { label: '18–24', value: 12.2 },
        { label: '25–34', value: 31.5 },
        { label: '35–44', value: 29.4 },
        { label: '45–54', value: 17.5 },
        { label: '55–64', value: 6.3 },
        { label: '65+', value: 1.4 },
      ] as Bar[],
      countries: [
        { label: 'Italia', value: 91.2 },
        { label: 'Brasile', value: 1.1 },
        { label: 'Germania', value: 0.9 },
        { label: 'Indonesia', value: 0.8 },
        { label: 'Nigeria', value: 0.8 },
      ] as Bar[],
      cities: [
        { label: 'Roma', value: 57.7 },
        { label: 'Fonte Nuova', value: 5.7 },
        { label: 'Milano', value: 2.0 },
        { label: 'Napoli', value: 2.0 },
        { label: 'Tivoli', value: 1.4 },
      ] as Bar[],
    },
    tiktok: {
      period: 'TikTok Studio, spettatori 60 giorni al 8 nov 2026',
      gender: [
        { label: 'Uomini', value: 70 },
        { label: 'Donne', value: 29 },
        { label: 'Altro', value: 1 },
      ] as Bar[],
    },
    /** Dati chiave letti (non calcolati altrove). 25–54 anni = 28,7 + 33,5 + 20,8 = 83,0 */
    insights: [
      { value: '91%', label: 'dei follower Instagram è in Italia' },
      { value: '78%', label: 'dei follower Instagram ha tra i 25 e i 54 anni' },
      { value: '70%', label: 'del pubblico TikTok è maschile' },
    ],
  },

  /** Contenuti con le performance misurate dalle piattaforme. */
  topContent: [
    { platform: 'tiktok', title: '«Arrotondamento sempre a favore loro»', views: 302000, note: 'TikTok, ultimi 60 giorni al 8 nov 2026', url: 'https://vm.tiktok.com/ZN8PH6m43/' },
    { platform: 'tiktok', title: 'Fari Matrix LED Audi A3', views: 46000, note: 'TikTok, ultimi 60 giorni al 8 nov 2026', url: 'https://vm.tiktok.com/ZN8PH8FYt/' },
    { platform: 'youtube', title: 'Audi TT RS', views: 19995, note: 'YouTube Short', url: 'https://youtube.com/shorts/T5V2HeMbvQo' },
    { platform: 'youtube', title: 'Lamborghini Huracán sullo sterrato', views: 12972, note: 'YouTube Short', url: 'https://youtube.com/shorts/RzIU3BO9_xI' },
    { platform: 'youtube', title: 'Audi RS, quale ho scelto?', views: 12965, note: 'YouTube Short', url: 'https://youtube.com/shorts/3V0tH8tnqFU' },
    { platform: 'youtube', title: 'Lamborghini a Vallelunga', views: 12499, note: 'YouTube Short', url: 'https://youtube.com/shorts/9AxBr0PukaY' },
  ] as { platform: PlatformId; title: string; views: number; note: string; url: string }[],

  world: {
    center: { title: 'Tecnologia', text: 'Il filo conduttore: capire come funzionano le cose, provarle e dirlo senza filtri.' },
    nodes: [
      {
        id: 'ai',
        title: 'Intelligenza artificiale',
        text: 'Agenti, automazione e sperimentazione concreta. L’AI è uno strumento: scelte editoriali e creative restano mie.',
        proof: 'Samaritan, agente di automazione sviluppato da Davide',
      },
      {
        id: 'gaming',
        title: 'Gaming',
        text: 'Novità, prove e dirette con un approccio da conversazione, non da catalogo.',
        proof: 'Diretta su Twitch ogni martedì alle 21:30',
      },
      {
        id: 'motori',
        title: 'Motori e automotive',
        text: 'Auto, tecnologia di bordo e prove: dai fari Matrix LED alle supercar in pista.',
        proof: 'Fari Matrix LED Audi A3: 46K visualizzazioni su TikTok',
      },
    ],
    series: [
      { title: 'Sfida plug-in', text: 'Serie di video in auto con consumi e numeri reali. Puntata 1 uscita il 9 novembre 2026.', cover: 'images/cover-sfida.webp', url: 'https://www.youtube.com/shorts/Lhs9tdy_8qk', label: 'Guarda la puntata 1' },
      { title: 'Motori in 60 secondi', text: 'Notizie di motori in un minuto, con voce e grafica.', cover: 'images/cover-m60.webp', url: 'https://www.youtube.com/@Motoriin60secondi', label: 'Vai al canale' },
      { title: 'Supra Fast & Furious', text: 'La Supra DeAgostini costruita pezzo per pezzo: il tipo di contenuto che rappresenta meglio il mio stile.', cover: 'images/cover-supra.webp', url: 'https://youtube.com/shorts/Q6yF8Dx-tFA', label: 'Guarda il video' },
    ],
  },

    /** Vantaggio competitivo (prove) + versatilità editoriale: la "scalabilità" di Davide è comunicativa, non una promessa di audience o risultati. */
  advantage: {
    intro:
      'Davide fa ciò di cui parla e sa cambiare linguaggio a seconda di chi ha davanti: tecnologia, AI, gaming e motori, senza essere legato a una sola nicchia. «Sono scalabile», dice lui.',
    points: [
      {
        title: 'Prova e costruisce',
        stat: { value: 3, format: 'int' as const, label: 'progetti propri realizzati' },
        text: 'App Android, videogioco e agente AI: parla di tecnologia da chi la usa.',
        proof: 'Documento di Davide e call, 10 nov 2026',
      },
      {
        title: 'Arriva a persone nuove',
        stat: { value: 322300, format: 'short' as const, label: 'nuovi spettatori su 325,8K · TikTok' },
        text: 'Il 97,7% delle visualizzazioni arriva da «Per te»: i contenuti viaggiano oltre i follower.',
        proof: 'TikTok Studio, 60 giorni al 8 nov 2026',
      },
      {
        title: 'Pubblico adulto e italiano',
        stat: { value: 91.2, format: 'pct' as const, label: 'dei follower Instagram è in Italia' },
        text: 'Il 78,4% ha tra i 25 e i 54 anni, il 77,7% è maschile; il 57,7% è di Roma.',
        proof: 'Instagram Insights, 11 ott – 10 nov 2026',
      },
      {
        title: 'Voce propria, brief condiviso',
        checks: ['Brief concordato', 'Contenuto sviluppato da Davide', 'Sponsorizzato sempre dichiarato'],
        text: 'L’AI supporta il lavoro: le scelte editoriali restano sue.',
      },
    ],
    chips: ['Target diversi', 'Settori complementari', 'Formati diversi', 'Storytelling su misura'],
    tagline: 'Un creator, più linguaggi, pubblici differenti.',
    note: 'È versatilità editoriale e comunicativa: i pubblici dei settori non coincidono, e ogni collaborazione si costruisce sul pubblico giusto per il tuo progetto.',
  },

  versatility: {
    sectors: [
      {
        id: 'tecnologia',
        label: 'Tecnologia',
        short: 'Tecnologia',
        language: 'Pratico e concreto: dagli strumenti digitali alle applicazioni reali.',
        format: 'Approfondimento tecnico',
        example: 'Ricordati, l’app Android realizzata da Davide.',
        collab: 'Presentazione pratica di un prodotto o di un servizio.',
      },
      {
        id: 'ai',
        label: 'Intelligenza artificiale',
        short: 'AI',
        language: 'Tecnico e sperimentale: prova gli strumenti e li usa per costruire.',
        format: 'Approfondimento e progetti dimostrativi',
        example: 'Samaritan, l’agente AI per l’automazione editoriale.',
        collab: 'Prova e racconto di uno strumento, con casi d’uso veri.',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        short: 'Gaming',
        language: 'Intrattenimento e conversazione: novità, prove e chiacchiere con la community.',
        format: 'Conversazione in diretta',
        example: 'La diretta su Twitch ogni martedì alle 21:30.',
        collab: 'Prova in diretta, con le domande della chat.',
      },
      {
        id: 'motori',
        label: 'Motori e automotive',
        short: 'Motori',
        language: 'Dimostrativo e appassionato: auto, prove e tecnologia a bordo.',
        format: 'Video dimostrativo',
        example: 'Fari Matrix LED Audi A3: 46K visualizzazioni su TikTok (60 giorni al 8 nov 2026).',
        collab: 'Video su brief concordato, con linguaggio sviluppato da Davide.',
      },
    ],
  },

  /** Canali attivi, solo con dati presenti nella cartella Drive. */
  ecosystem: {
    steps: [
      { title: 'TikTok', text: 'Video brevi su motori, tecnologia e gaming.', stat: '403K visualizzazioni · 60 giorni' },
      { title: 'YouTube', text: 'Shorts e serie: Sfida plug-in e Motori in 60 secondi.', stat: '75.075 visualizzazioni · 90 giorni' },
      { title: 'Instagram', text: 'Contenuti per un pubblico italiano e adulto.', stat: '37.315 visualizzazioni · 90 giorni' },
      { title: 'davidedurazzi.it', text: 'Il sito: articoli, progetti e media kit.', stat: '636 visitatori · 30 giorni' },
      { title: 'Twitch', text: 'Diretta ogni martedì alle 21:30.', stat: '' },
    ],
    note: 'Davide non è presente in un solo posto: video brevi, serie, dirette e sito permettono a un brand di entrare in momenti diversi, non in un post isolato.',
  },

  offers: [
    {
      goal: 'Awareness',
      title: 'Il Contraddittorio presentato da…',
      text: 'Il brand presenta Il Contraddittorio, un formato di Davide, con una presenza concordata nei canali coinvolti.',
      channels: [] as string[],
    },
    {
      goal: 'Product discovery',
      title: 'Prova in diretta',
      text: 'Un prodotto tech o gaming provato dal vivo durante la diretta, con la voce e l’opinione di Davide.',
      channels: ['Twitch'],
    },
    {
      goal: 'Presenza in diretta',
      title: 'Spazio in diretta',
      text: 'Uno spazio per il brand durante la diretta del martedì alle 21:30.',
      channels: ['Twitch'],
    },
    {
      goal: 'Newsletter',
      title: 'Spazio in newsletter',
      text: 'Uno spazio dedicato al brand in newsletter, dichiarato come contenuto sponsorizzato.',
      channels: ['Newsletter'],
    },
    {
      goal: 'Contenuto video',
      title: 'Video su brief concordato',
      text: 'Un contenuto video costruito su un brief condiviso, con linguaggio e sviluppo curati da Davide. Già realizzato per WhoKeys.',
      channels: ['Video'],
    },
    {
      goal: 'Progetto integrato',
      title: 'Pacchetto settimana',
      text: 'I formati combinati in un progetto di una settimana, costruito sugli obiettivi del brand.',
      channels: [] as string[],
    },
  ],
  offersNote: 'Nessun listino fisso: il prezzo dipende da durata e canali. Raccontami brand, prodotto, periodo e budget indicativo.',

  experience: {
    collab: {
      brand: 'WhoKeys',
      url: 'https://www.instagram.com/reel/DYlcDuPIOGJ/',
      kind: 'Collaborazione retribuita · una tantum',
      text: 'Video promozionale realizzato su richiesta del brand, seguendo il brief e il processo di produzione concordati.',
    },
    affiliates: {
      note: 'Programmi di affiliazione attivi: non sono collaborazioni dirette né campagne retribuite.',
      names: ['NordVPN', 'Razer', 'Amazon', 'Adtraction (pneumatici)'],
    },
    projects: [
      {
        title: 'Ricordati',
        text: 'App Android: scrivi un promemoria come lo diresti a voce e imposta da sola data, ora e sveglia. Senza pubblicità.',
        label: 'Su Google Play',
        url: 'https://play.google.com/store/apps/details?id=it.durazzi.ricordati',
      },
      {
        title: 'Il Sistema',
        text: 'Satira politica italiana in forma di videogioco: dal Municipio al Quirinale, ogni scelta ha un prezzo.',
        label: 'Gioca su itch.io',
        url: 'https://durazzidev.itch.io/il-sistema',
      },
      {
        title: 'Samaritan',
        text: 'Agente basato su AI per sperimentare l’automazione editoriale. La tecnologia supporta il lavoro: il ruolo creativo e le decisioni restano di Davide.',
        label: null,
        url: null,
      },
    ],
  },

  principles: [
    { title: 'Brief concordato', text: 'Partiamo da obiettivi e vincoli chiari. Poi il contenuto lo sviluppo io, con il mio linguaggio, perché è così che funziona con il mio pubblico.' },
    { title: 'Sempre dichiarato', text: 'Ogni contenuto sponsorizzato è etichettato come tale.' },
    { title: 'Opinione indipendente', text: 'Chi sponsorizza non decide quali notizie, quali fonti e quali opinioni pubblico.' },
    { title: 'Solo ciò che consiglierei', text: 'Promuovo solo prodotti che consiglierei anche senza sponsor.' },
  ],

  contact: {
    pitch: 'Raccontami brand, prodotto, periodo e budget indicativo: ti rispondo con una proposta.',
  },
} as const;

export type Creator = typeof creator;
