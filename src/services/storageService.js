// DSVV Saarthi - Zero-cost local storage persistence layer with RBAC Audit Logging
import { 
  SEED_MESS_MENUS, 
  SEED_PROCEDURES, 
  SEED_CAMPUS_LOCATIONS, 
  SEED_EVENTS, 
  SEED_USERS,
  SEED_NOTICES 
} from '../data/seedData';

const STORAGE_KEYS = {
  MESS: 'dsvv_saarthi_mess_v3',
  PROCEDURES: 'dsvv_saarthi_procedures_v3',
  LOCATIONS: 'dsvv_saarthi_locations_v3',
  EVENTS: 'dsvv_saarthi_events_v3',
  NOTICES: 'dsvv_saarthi_notices_v3',
  REPORTS: 'dsvv_saarthi_reports_v3',
  AUDIT_LOGS: 'dsvv_saarthi_audit_logs_v3',
  CURRENT_USER: 'dsvv_saarthi_auth_user',
  ALL_USERS: 'dsvv_saarthi_users'
};

// Helper to safely read JSON
const readStorage = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${key}:`, err);
    return fallback;
  }
};

// Helper to safely write JSON
const writeStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Error writing ${key}:`, err);
  }
};

export const StorageService = {
  // Initialize storage if blank
  init() {
    readStorage(STORAGE_KEYS.MESS, SEED_MESS_MENUS);
    readStorage(STORAGE_KEYS.PROCEDURES, SEED_PROCEDURES);
    readStorage(STORAGE_KEYS.LOCATIONS, SEED_CAMPUS_LOCATIONS);
    readStorage(STORAGE_KEYS.EVENTS, SEED_EVENTS);
    readStorage(STORAGE_KEYS.NOTICES, SEED_NOTICES);
    readStorage(STORAGE_KEYS.ALL_USERS, SEED_USERS);
    readStorage(STORAGE_KEYS.REPORTS, []);
    readStorage(STORAGE_KEYS.AUDIT_LOGS, [
      {
        id: "log_init",
        userId: "system",
        userName: "System Setup",
        action: "INITIALIZE",
        entityType: "DATABASE",
        entityTitle: "DSVV Saarthi Platform Database",
        timestamp: new Date().toISOString(),
        details: "Loaded initial verified campus datasets and demo administrator credentials."
      }
    ]);
  },

  // Audit Log recording
  recordAuditLog(action, entityType, entityTitle, details = "") {
    const user = this.getCurrentUser();
    const logs = readStorage(STORAGE_KEYS.AUDIT_LOGS, []);
    const newLog = {
      id: "log_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
      userId: user ? user.id : "anonymous",
      userName: user ? user.fullName : "System / Guest",
      userRole: user ? user.role : "none",
      action,
      entityType,
      entityTitle,
      timestamp: new Date().toISOString(),
      details
    };
    logs.unshift(newLog);
    // Keep last 150 audit entries
    writeStorage(STORAGE_KEYS.AUDIT_LOGS, logs.slice(0, 150));
    return newLog;
  },

  getAuditLogs() {
    return readStorage(STORAGE_KEYS.AUDIT_LOGS, []);
  },

  // Auth & Session
  getCurrentUser() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  login(email, password) {
    const users = readStorage(STORAGE_KEYS.ALL_USERS, SEED_USERS);
    const matched = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase() && u.passwordHash === password);
    if (matched) {
      const sessionUser = {
        id: matched.id,
        email: matched.email,
        fullName: matched.fullName,
        role: matched.role,
        department: matched.department,
        canEditAll: matched.canEditAll,
        allowedModules: matched.allowedModules || []
      };
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(sessionUser));
      this.recordAuditLog("LOGIN", "USER", matched.fullName, `Logged in with role: ${matched.role}`);
      return { success: true, user: sessionUser };
    }
    return { success: false, error: "Invalid university credentials. Check email or password." };
  },

  logout() {
    const user = this.getCurrentUser();
    if (user) {
      this.recordAuditLog("LOGOUT", "USER", user.fullName, "Session closed");
    }
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  },

  // Mess Menu CRUD
  getMessMenus() {
    return readStorage(STORAGE_KEYS.MESS, SEED_MESS_MENUS);
  },

  getMenuByDate(dateStr) {
    const menus = this.getMessMenus();
    return menus.find(m => m.date === dateStr) || null;
  },

  saveMessMenu(menuData) {
    const menus = this.getMessMenus();
    const idx = menus.findIndex(m => m.date === menuData.date);
    const user = this.getCurrentUser();

    const record = {
      ...menuData,
      id: menuData.id || "mess_" + Date.now(),
      verificationStatus: "verified",
      verifiedBy: user ? user.fullName : "Student Mess Editor",
      lastUpdated: new Date().toLocaleDateString("en-IN")
    };

    if (idx >= 0) {
      menus[idx] = record;
      this.recordAuditLog("UPDATE", "MESS_MENU", `Menu for ${record.date}`, "Updated meals & items");
    } else {
      menus.push(record);
      this.recordAuditLog("CREATE", "MESS_MENU", `Menu for ${record.date}`, "Added new day dining schedule");
    }
    writeStorage(STORAGE_KEYS.MESS, menus);
    return record;
  },

  // Procedures CRUD
  getProcedures() {
    return readStorage(STORAGE_KEYS.PROCEDURES, SEED_PROCEDURES);
  },

  getProcedureById(idOrSlug) {
    const procs = this.getProcedures();
    return procs.find(p => p.id === idOrSlug || p.slug === idOrSlug) || null;
  },

  saveProcedure(procData) {
    const procs = this.getProcedures();
    const idx = procs.findIndex(p => p.id === procData.id);
    const user = this.getCurrentUser();

    const record = {
      ...procData,
      lastVerifiedDate: new Date().toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' }),
      verificationStatus: procData.verificationStatus || (user?.role === 'main_admin' ? 'verified' : 'unverified')
    };

    if (idx >= 0) {
      procs[idx] = record;
      this.recordAuditLog("UPDATE", "PROCEDURE", record.title, `Category: ${record.category}`);
    } else {
      record.id = "proc_" + Date.now();
      procs.unshift(record);
      this.recordAuditLog("CREATE", "PROCEDURE", record.title, `New procedure registered`);
    }
    writeStorage(STORAGE_KEYS.PROCEDURES, procs);
    return record;
  },

  deleteProcedure(id) {
    const procs = this.getProcedures();
    const target = procs.find(p => p.id === id);
    if (!target) return false;
    const filtered = procs.filter(p => p.id !== id);
    writeStorage(STORAGE_KEYS.PROCEDURES, filtered);
    this.recordAuditLog("DELETE", "PROCEDURE", target.title, "Removed procedure document");
    return true;
  },

  // Locations / Directory CRUD
  getLocations() {
    return readStorage(STORAGE_KEYS.LOCATIONS, SEED_CAMPUS_LOCATIONS);
  },

  saveLocation(locData) {
    const locs = this.getLocations();
    const idx = locs.findIndex(l => l.id === locData.id);
    if (idx >= 0) {
      locs[idx] = locData;
      this.recordAuditLog("UPDATE", "CAMPUS_LOCATION", locData.nameEn, `Building: ${locData.building}`);
    } else {
      locData.id = "loc_" + Date.now();
      locs.push(locData);
      this.recordAuditLog("CREATE", "CAMPUS_LOCATION", locData.nameEn, "Added new campus facility record");
    }
    writeStorage(STORAGE_KEYS.LOCATIONS, locs);
    return locData;
  },

  deleteLocation(id) {
    const locs = this.getLocations();
    const target = locs.find(l => l.id === id);
    if (!target) return false;
    writeStorage(STORAGE_KEYS.LOCATIONS, locs.filter(l => l.id !== id));
    this.recordAuditLog("DELETE", "CAMPUS_LOCATION", target.nameEn, "Deleted campus facility record");
    return true;
  },

  // Events CRUD
  getEvents() {
    return readStorage(STORAGE_KEYS.EVENTS, SEED_EVENTS);
  },

  saveEvent(evData) {
    const events = this.getEvents();
    const idx = events.findIndex(e => e.id === evData.id);
    const user = this.getCurrentUser();
    const record = {
      ...evData,
      lastUpdated: new Date().toLocaleDateString("en-IN"),
      verified: true
    };
    if (idx >= 0) {
      events[idx] = record;
      this.recordAuditLog("UPDATE", "EVENT", record.title, `Venue: ${record.venue}`);
    } else {
      record.id = "ev_" + Date.now();
      events.unshift(record);
      this.recordAuditLog("CREATE", "EVENT", record.title, `Organizer: ${record.organizer}`);
    }
    writeStorage(STORAGE_KEYS.EVENTS, events);
    return record;
  },

  deleteEvent(id) {
    const events = this.getEvents();
    const target = events.find(e => e.id === id);
    if (!target) return false;
    writeStorage(STORAGE_KEYS.EVENTS, events.filter(e => e.id !== id));
    this.recordAuditLog("DELETE", "EVENT", target.title, "Removed university event listing");
    return true;
  },

  // Notices
  getNotices() {
    return readStorage(STORAGE_KEYS.NOTICES, SEED_NOTICES);
  },

  // User Reports (Discrepancy Reporting)
  getReports() {
    return readStorage(STORAGE_KEYS.REPORTS, []);
  },

  submitReport(reportData) {
    const reports = this.getReports();
    const newReport = {
      id: "rep_" + Date.now(),
      targetType: reportData.targetType,
      targetTitle: reportData.targetTitle,
      targetId: reportData.targetId,
      discrepancyType: reportData.discrepancyType || "Outdated Information",
      description: reportData.description,
      studentContact: reportData.studentContact || "Anonymous Student",
      status: "pending", // pending | reviewed | resolved
      submittedAt: new Date().toISOString()
    };
    reports.unshift(newReport);
    writeStorage(STORAGE_KEYS.REPORTS, reports);
    this.recordAuditLog("REPORT_SUBMITTED", "USER_REPORT", reportData.targetTitle, "Student reported information discrepancy");
    return newReport;
  },

  updateReportStatus(reportId, newStatus) {
    const reports = this.getReports();
    const target = reports.find(r => r.id === reportId);
    if (!target) return false;
    target.status = newStatus;
    writeStorage(STORAGE_KEYS.REPORTS, reports);
    this.recordAuditLog("REPORT_STATUS_CHANGE", "USER_REPORT", target.targetTitle, `Status updated to ${newStatus}`);
    return true;
  },

  // Reset to initial seed
  resetToDefaults() {
    localStorage.clear();
    this.init();
    return true;
  }
};

// Initialize immediately upon module load
StorageService.init();
