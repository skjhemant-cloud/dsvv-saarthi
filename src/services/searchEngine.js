// DSVV Saarthi - Zero-Cost Multilingual & Hinglish Search Engine
import { StorageService } from './storageService';

// Multilingual & Hinglish synonym mapping
const SYNONYMS = {
  // Mess & Food
  mess: ['mess', 'food', 'khana', 'bhojan', 'dining', 'anandamayi', 'anandmayi', 'maa anandmayi', 'maa anandamayi', 'annapurna', 'rasoi', 'meal', 'diet'],
  breakfast: ['breakfast', 'nashta', 'subah ka khana', 'morning', 'nasta'],
  lunch: ['lunch', 'dopahar ka khana', 'bhojan', 'afternoon'],
  dinner: ['dinner', 'raat ka khana', 'sandhya bhojan', 'night', 'evening'],
  sattvik: ['sattvik', 'satvik', 'shuddh', 'pure', 'veg', 'shakahari', 'vegetarian'],

  // Admission & Prospectus
  admission: ['admission', 'pravesh', 'entrance', 'interview', 'prospectus', 'how to get into', 'get into', 'join', 'dakhila', 'form', 'eligibility', 'youtube', 'dsvvtv', 'cut off', 'merit', 'selection', 'exam'],

  // Dates
  today: ['today', 'aaj', 'current', 'aajka', 'ab'],
  tomorrow: ['tomorrow', 'kal', 'agle din', 'next day'],

  // Academic & Leave
  leave: ['leave', 'chhutti', 'chutti', 'chuti', 'avash', 'avakash', 'outpass', 'gatepass', 'gate pass'],
  medical: ['medical', 'ill', 'sick', 'bimari', 'bimar', 'fever', 'doctor', 'dawa', 'swasthya', 'hospital', 'chikitsa', 'dispensary'],
  attendance: ['attendance', 'presence', 'upasthiti', 'shortage', 'percentage', '75%', '75 percent', 'kam attendance'],
  certificate: ['certificate', 'bonafide', 'character', 'charitra', 'praman patra', 'document', 'transcript', 'fee receipt'],
  scholarship: ['scholarship', 'shriram sharma acharya scholarship', 'chhatravritti', 'chatravriti', 'fee waiver', 'concession', 'financial assistance', 'financial aid', 'samaj kalyan', 'nsp'],
  idcard: ['id card', 'idcard', 'smart card', 'pehechan patra', 'kho gaya', 'lost', 'duplicate', 'rfid', 'parisampatti'],

  // Locations & Bhawans
  library: ['library', 'pustakalaya', 'books', 'kitab', 'reading room', 'patel bhawan', 'sardar vallabhbhai', 'study'],
  mandir: ['mandir', 'temple', 'mahakal', 'akhand deep', 'jyoti', 'aarti', 'puja', 'yagya', 'prarthana'],
  admin: ['admin', 'office', 'karyalaya', 'registrar', 'dean', 'incharge', 'prashasan', 'enquiry', 'helpdesk', 'vice chancellor', 'vc', 'pro vice chancellor', 'provc', 'pro vc', 'chinmay pandya', 'controller of examination', 'coe', 'pariksha niyantrak', 'accounts', 'finance'],
  vc: ['vice chancellor', 'vc office', 'vc chamber', 'kulpati', 'kulpati karyalaya'],
  provc: ['pro vice chancellor', 'provc', 'pro vc office', 'prati kulpati', 'chinmay pandya', 'chinmay bhaiya'],
  registrar: ['registrar', 'registrar office', 'kul sachiv', 'kulsachiv', 'bonafide', 'endorsement'],
  coe: ['coe', 'controller of examination', 'pariksha niyantrak', 'admit card', 'marksheet', 'grade card', 'result'],
  hostel: ['hostel', 'aawas', 'residence', 'room', 'gomti', 'kaveri', 'bhagirathi', 'warden'],
  bhawan: ['shriram bhawan', 'chaitanya bhawan', 'patel bhawan', 'sanskriti vibhag', 'mrityunjay', 'sabhagar'],
  lab: ['lab', 'animation', 'vfx', '3d', 'character design', 'shriram bhawan', 'computer', 'chaitanya bhawan', 'graphics', 'studio'],
  health: ['dispensary', 'hospital', 'clinic', 'arogya', 'brahmavarchas', 'first aid', 'emergency', 'doctor'],

  // Events & Activities
  events: ['event', 'activity', 'competition', 'pratiyogita', 'karyakram', 'fest', 'hackathon', 'poster', 'workshop', 'yoga', 'walk', 'debate'],
  sports: ['sports', 'khel', 'khelkood', 'cricket', 'volleyball', 'athletics', 'running', 'badminton', 'gym', 'gymnasium', 'ground', 'tournament', 'match', 'trials', 'khel mahotsav'],
  dignitary: ['mrityunjay', 'sabhagar', 'auditorium', 'convocation', 'dikshant', 'president', 'draupadi murmu', 'droupadi murmu', 'governor', 'cm', 'chief minister', 'vip', 'dignitary'],
  volunteer: ['volunteer', 'volunteering', 'swayamsevak', 'vip protocol', 'reception', 'seating', 'media team', 'volunteer tasks', 'sanskriti vibhag', 'culture department', 'hod'],
  departments: ['it department', 'computer science', 'animation department', 'vfx department', 'english department', 'sports department', 'departmental', 'bca', 'mca', 'journalism', 'tourism'],
  faculty: ['faculty', 'teacher', 'professor', 'hod', 'dr abhay saxena', 'shikshak', 'dean', 'mentors'],

  // Question Intelligences
  where: ['where', 'kahan', 'kidhar', 'kaha', 'rasta', 'direction', 'location', 'reach'],
  how: ['how', 'kaise', 'tarika', 'vidhi', 'process', 'procedure', 'kya kare', 'rules']
};

// Normalizer: strips punctuation, extra spaces, accents
const normalizeText = (text = '') => {
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

export const SearchEngine = {
  // Main search function returning structured answers with confidence
  search(queryStr) {
    const raw = normalizeText(queryStr);
    if (!raw || raw.length < 2) {
      return {
        query: queryStr,
        results: [],
        confidence: 'none',
        message: 'Please enter a search question or campus keyword.'
      };
    }

    const tokens = raw.split(' ');
    const results = [];

    // Check for Mess Menu Direct Intent (e.g. "aaj lunch me kya hai", "today breakfast")
    const messMatch = this.detectMessIntent(raw, tokens);
    if (messMatch) {
      results.push(messMatch);
    }

    // Search Procedures
    const procedures = StorageService.getProcedures();
    for (const proc of procedures) {
      const score = this.calculateRelevance(raw, tokens, [
        proc.title,
        proc.titleHi,
        proc.summary,
        proc.category,
        proc.responsibleOffice,
        proc.location,
        ...(proc.requiredDocuments || []),
        ...(proc.steps || []).map(s => `${s.title} ${s.description}`)
      ]);

      if (score > 12) {
        results.push({
          type: 'procedure',
          id: proc.id,
          title: proc.title,
          titleHi: proc.titleHi,
          category: proc.categoryLabel || proc.category,
          score,
          answer: proc.summary,
          details: {
            responsibleOffice: proc.responsibleOffice,
            location: proc.location,
            lastVerifiedDate: proc.lastVerifiedDate,
            verificationStatus: proc.verificationStatus,
            stepsCount: proc.steps?.length || 0,
            requiredDocs: proc.requiredDocuments || []
          },
          link: `/procedures/${proc.slug || proc.id}`
        });
      }
    }

    // Search Campus Directory / Locations
    const locations = StorageService.getLocations();
    for (const loc of locations) {
      const score = this.calculateRelevance(raw, tokens, [
        loc.nameEn,
        loc.nameHi,
        loc.building,
        loc.description,
        loc.category,
        loc.directions,
        ...(loc.facilities || [])
      ]);

      if (score > 12) {
        results.push({
          type: 'location',
          id: loc.id,
          title: loc.nameEn,
          titleHi: loc.nameHi,
          category: loc.categoryLabel || loc.category,
          score,
          answer: loc.description,
          details: {
            building: loc.building,
            timings: loc.timings,
            directions: loc.directions,
            facilities: loc.facilities,
            verificationStatus: loc.isVerified ? 'verified' : 'sample'
          },
          link: `/directory#${loc.id}`
        });
      }
    }

    // Search Events & Activities
    const events = StorageService.getEvents();
    for (const ev of events) {
      const score = this.calculateRelevance(raw, tokens, [
        ev.title,
        ev.titleHi,
        ev.description,
        ev.venue,
        ev.category,
        ev.organizer
      ]);

      if (score > 12) {
        results.push({
          type: 'event',
          id: ev.id,
          title: ev.title,
          titleHi: ev.titleHi,
          category: ev.categoryLabel || ev.category,
          score,
          answer: `${ev.description} — Venue: ${ev.venue}. Date: ${ev.eventDate}`,
          details: {
            organizer: ev.organizer,
            eventDate: ev.eventDate,
            deadline: ev.registrationDeadline,
            venue: ev.venue,
            status: ev.status,
            verificationStatus: ev.verified ? 'verified' : 'sample'
          },
          link: `/events#${ev.id}`
        });
      }
    }

    // Sort results by score descending
    results.sort((a, b) => b.score - a.score);

    // Filter duplicates by title
    const unique = [];
    const seen = new Set();
    for (const r of results) {
      if (!seen.has(r.title)) {
        seen.add(r.title);
        unique.push(r);
      }
    }

    const confidence = unique.length > 0 && unique[0].score >= 30 ? 'high' : unique.length > 0 ? 'moderate' : 'none';

    return {
      query: queryStr,
      results: unique.slice(0, 8),
      confidence,
      message: unique.length === 0 
        ? "I couldn't find a reliable answer matching your exact terms. Try keywords like 'medical leave', 'library', 'aaj ka mess', or explore the categories below."
        : `Found ${unique.length} verified result${unique.length > 1 ? 's' : ''}.`
    };
  },

  // Specialized Mess Intent Matcher
  detectMessIntent(raw, tokens) {
    const isMessQuery = tokens.some(t => this.hasSynonym(t, 'mess') || this.hasSynonym(t, 'breakfast') || this.hasSynonym(t, 'lunch') || this.hasSynonym(t, 'dinner'));
    if (!isMessQuery) return null;

    const isTomorrow = tokens.some(t => this.hasSynonym(t, 'tomorrow'));
    const targetDate = new Date();
    if (isTomorrow) targetDate.setDate(targetDate.getDate() + 1);
    const dateStr = targetDate.toISOString().split('T')[0];

    const menu = StorageService.getMenuByDate(dateStr) || StorageService.getMessMenus()[0];
    if (!menu) return null;

    let mealKey = 'lunch'; // default
    let mealLabel = 'Lunch (दोपहर का भोजन)';
    if (tokens.some(t => this.hasSynonym(t, 'breakfast'))) {
      mealKey = 'breakfast';
      mealLabel = 'Breakfast (नाश्ता)';
    } else if (tokens.some(t => this.hasSynonym(t, 'dinner'))) {
      mealKey = 'dinner';
      mealLabel = 'Dinner (संध्या भोजन)';
    }

    const mealData = menu.meals ? menu.meals[mealKey] : null;
    if (!mealData) return null;

    return {
      type: 'mess',
      id: `mess_${menu.date}_${mealKey}`,
      title: `${isTomorrow ? "Tomorrow's" : "Today's"} ${mealLabel} — DSVV Maa Anandamayi Bhojanalaya`,
      titleHi: `${isTomorrow ? 'कल का' : 'आज का'} ${mealData.titleHi || mealLabel} — माँ आनंदमयी भोजनालय`,
      category: 'Mess & Dining',
      score: 110, // Top priority match
      answer: `Serving: ${mealData.title} (${mealData.items.join(', ')}). Timing: ${mealData.timing}. Pure 100% Sattvik vegetarian preparation.`,
      details: {
        date: menu.date,
        timing: mealData.timing,
        items: mealData.items,
        special: mealData.special,
        isSattvik: mealData.isSattvik,
        verificationStatus: menu.verificationStatus,
        lastUpdated: menu.lastUpdated
      },
      link: `/mess?date=${menu.date}&meal=${mealKey}`
    };
  },

  // Keyword relevance scoring
  calculateRelevance(rawQuery, queryTokens, textFields) {
    let score = 0;
    const combinedContent = normalizeText(textFields.filter(Boolean).join(' '));

    // Direct substring query match
    if (combinedContent.includes(rawQuery)) {
      score += 45;
    }

    // Token & Synonym matching
    for (const token of queryTokens) {
      if (token.length <= 1) continue;

      if (combinedContent.includes(token)) {
        score += 15;
      }

      // Check synonyms across all dictionaries
      for (const [key, aliases] of Object.entries(SYNONYMS)) {
        if (aliases.includes(token)) {
          // If query token matches this concept, check if the content contains any word in this concept
          for (const alias of aliases) {
            if (combinedContent.includes(alias)) {
              score += 10;
              break;
            }
          }
        }
      }
    }

    return score;
  },

  hasSynonym(token, conceptKey) {
    const list = SYNONYMS[conceptKey];
    return list ? list.includes(token) : false;
  }
};
