/* =============================================
   BCANotes — admin.js
   ============================================= */

// ── Config ────────────────────────────────────
const SUPABASE_URL    = 'https://yiucvqmtumyslcblowop.supabase.co';
const SUPABASE_KEY    = 'sb_publishable_Oc2bWjEsfLDWCLU7dVuFAQ_Ofj5nrNq';
const ADMIN_PASSWORD  = 'admin@bca2026';

let _sb      = null;
let allLeads = [];

// ── Helpers ───────────────────────────────────
const $   = sel => document.querySelector(sel);
const $$  = sel => [...document.querySelectorAll(sel)];
const qs  = $;

function toast(msg) {

  let el = $('.toast');

  if (!el) {

    el = document.createElement('div');

    el.className = 'toast';

    document.body.appendChild(el);

  }

  el.textContent = msg;

  el.classList.add('show');

  clearTimeout(el._t);

  el._t = setTimeout(() => {
    el.classList.remove('show');
  }, 2800);

}

function formatDate(str) {

  if (!str) return '—';

  const d = new Date(str);

  return d.toLocaleDateString('en-IN', {
    day:'2-digit',
    month:'short',
    year:'numeric'
  }) + ' ' +

  d.toLocaleTimeString('en-IN', {
    hour:'2-digit',
    minute:'2-digit'
  });

}

// ── Supabase ──────────────────────────────────
function initSupabase() {

  try {

    if (
      window.supabase &&
      SUPABASE_URL !== 'YOUR_SUPABASE_URL'
    ) {

      _sb = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
      );

    }

  } catch(e) {}

}

// ── Authentication ────────────────────────────
function isLoggedIn() {

  return (
    sessionStorage.getItem('admin_auth') === 'true'
  );

}

function showLogin() {

  $('#admin-login').style.display = 'flex';

  $('#admin-app').style.display = 'none';

}

function showApp() {

  $('#admin-login').style.display = 'none';

  $('#admin-app').style.display = 'grid';

  loadDashboard();

}

function checkAuth() {

  isLoggedIn()
    ? showApp()
    : showLogin();

}

function handleLogin() {

  const pass =
    ($('#admin-pass').value || '').trim();

  if (pass === ADMIN_PASSWORD) {

    sessionStorage.setItem(
      'admin_auth',
      'true'
    );

    $('#login-error').style.display =
      'none';

    showApp();

  } else {

    $('#login-error').style.display =
      'block';

    $('#login-error').textContent =
      'Incorrect password. Try again.';

  }

}

function handleLogout() {

  sessionStorage.removeItem('admin_auth');

  showLogin();

}

// ── BCA SUBJECTS ──────────────────────────────

const SEMESTER_SUBJECTS = {

  1: [
    'Fundamentals Of Computers',
    'Mathematics For Computing',
    'Programming With C',
    'Digital Logic',
    'C Programming Laboratory',
    'Office Tools Laboratory',
    'General English',
    'Programming Fundamentals'
  ],

  2: [
    'Multimedia Tools',
    'Object Oriented Programming with C++',
    'Data Structure And Algorithms',
    'System Analysis and Design',
    'C++ Laboratory',
    'DSA Laboratory',
    'General Hindi',
    'Hardware and Networking'
  ],

  3: [
    'Database Management System',
    'Computer Networks',
    'Introduction to JAVA Programming',
    'Computer Graphics',
    'DBMS Laboratory',
    'Java Laboratory'
  ],

  4: [
    'Introduction to Internet Technology',
    'Operating System',
    'Introduction to Python Programming',
    'Client Server Computing',
    'Python Programming Laboratory',
    'Internet Technology Laboratory'
  ],

  5: [
    'Artificial Intelligence and Machine Learning',
    'Design and Analysis of Algorithms',
    'Computer System Architecture',
    'Compiler Design',
    'Software Engineering',
    'Linux Operating System',
    'Mobile Application Development',
    'R Programming',
    'Mobile App Development Laboratory',
    'R Programming Laboratory',
    'Seminar'
  ],

  6: [
    'Data Science',
    'Computer Oriented Statistical Techniques',
    'Web Programming Using C#',
    'VB.NET',
    'Cyber Security',
    'Principles of Management',
    'Cloud Computing',
    'Introduction to IoT',
    'Web Programming Laboratory',
    'VB.NET Laboratory',
    'Minor Project'
  ]

};

const SEM_LABELS = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI'
];

// ── Sidebar ───────────────────────────────────
function initSidebar() {

  $$('.sidebar-item[data-tab]').forEach(item => {

    item.addEventListener('click', () => {

      const tab = item.dataset.tab;

      $$('.sidebar-item').forEach(i => {
        i.classList.remove('active');
      });

      $$('.admin-content').forEach(c => {
        c.classList.remove('active');
      });

      item.classList.add('active');

      const panel = $(`#panel-${tab}`);

      if (panel) {
        panel.classList.add('active');
      }

      const title = $('.topbar-title');

      if (title) {

        title.textContent =
          item.querySelector('span:last-child')
          ?.textContent || tab;

      }

      $('.admin-sidebar')
        ?.classList.remove('open');

      $('.sidebar-overlay')
        ?.classList.remove('show');

    });

  });

  $('#sidebar-toggle')
    ?.addEventListener('click', () => {

      $('.admin-sidebar')
        ?.classList.toggle('open');

      $('.sidebar-overlay')
        ?.classList.toggle('show');

    });

  $('.sidebar-overlay')
    ?.addEventListener('click', () => {

      $('.admin-sidebar')
        ?.classList.remove('open');

      $('.sidebar-overlay')
        ?.classList.remove('show');

    });

}

// ── Dashboard ─────────────────────────────────
async function loadDashboard() {

  await loadLeads();

  updateStats();

}

function updateStats() {

  const total = allLeads.length;

  const today = allLeads.filter(l => {

    if (!l.created_at) return false;

    return (
      new Date(l.created_at).toDateString() ===
      new Date().toDateString()
    );

  }).length;

  const sems = new Set(
    allLeads.map(l => l.semester)
  ).size;

  const subs = new Set(
    allLeads.map(l => l.subject)
  ).size;

  const set = (id, val) => {

    const el = $(id);

    if (el) el.textContent = val;

  };

  set('#stat-total', total);

  set('#stat-today', today);

  set('#stat-sems', sems || 6);

  set('#stat-subjects', subs || 50);

}

// ── Leads ─────────────────────────────────────
async function loadLeads() {

  const tbody = $('#leads-tbody');

  if (!tbody) return;

  if (!_sb) {

    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="table-loading">
          ⚠️ Supabase not configured
        </td>
      </tr>
    `;

    return;

  }

  tbody.innerHTML = `
    <tr>
      <td colspan="8" class="table-loading">
        Loading…
      </td>
    </tr>
  `;

  try {

    const { data, error } = await _sb
      .from('leads')
      .select('*')
      .order('created_at', {
        ascending: false
      });

    if (error) throw error;

    allLeads = data || [];

    renderLeads(allLeads);

    updateStats();

  } catch(e) {

    tbody.innerHTML = `
      <tr>
        <td colspan="8"
            class="table-loading"
            style="color:#ef4444">

          Error: ${e.message}

        </td>
      </tr>
    `;

  }

}

function renderLeads(leads) {

  const tbody = $('#leads-tbody');

  if (!tbody) return;

  if (!leads.length) {

    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="table-loading">
          No leads yet.
        </td>
      </tr>
    `;

    return;

  }

  tbody.innerHTML = leads.map((l, i) => `

    <tr>

      <td style="
        color:var(--gray-400);
        font-size:12px
      ">
        ${i + 1}
      </td>

      <td>
        <strong>${l.name || '—'}</strong>
      </td>

      <td style="
        font-family:monospace;
        font-size:12.5px
      ">
        ${l.mobile || '—'}
      </td>

      <td>
        <span class="badge badge-blue">
          Sem ${l.semester || '?'}
        </span>
      </td>

      <td>
        <span class="badge badge-purple">
          ${l.subject || '—'}
        </span>
      </td>

      <td style="
        font-size:12px;
        color:var(--gray-500);
        max-width:140px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
      ">
        ${l.note_title || '—'}
      </td>

      <td style="
        font-size:11.5px;
        color:var(--gray-400);
        white-space:nowrap
      ">
        ${formatDate(l.created_at)}
      </td>

      <td>
        <button
          class="delete-btn"
          onclick="deleteLead('${l.id}',this)">
          ✕
        </button>
      </td>

    </tr>

  `).join('');

}

// ── Delete Lead ───────────────────────────────
async function deleteLead(id, btn) {

  if (!confirm('Delete this lead?')) return;

  if (!_sb) {

    toast('Supabase not configured');

    return;

  }

  btn.disabled = true;

  try {

    const { error } = await _sb
      .from('leads')
      .delete()
      .eq('id', id);

    if (error) throw error;

    allLeads =
      allLeads.filter(
        l => String(l.id) !== String(id)
      );

    renderLeads(allLeads);

    updateStats();

    toast('Lead deleted');

  } catch(e) {

    toast('Error: ' + e.message);

    btn.disabled = false;

  }

}

// ── Export CSV ────────────────────────────────
function exportCSV() {

  if (!allLeads.length) {

    toast('No leads to export');

    return;

  }

  const headers = [
    'Name',
    'Mobile',
    'Semester',
    'Subject',
    'Note',
    'Date'
  ];

  const rows = allLeads.map(l => [

    l.name,
    l.mobile,
    l.semester,
    l.subject,
    l.note_title,
    formatDate(l.created_at)

  ].map(v => `"${(v || '')
    .toString()
    .replace(/"/g,'""')}"`));

  const csv =
    [headers, ...rows]
    .map(r => r.join(','))
    .join('\n');

  const blob = new Blob(
    [csv],
    { type:'text/csv' }
  );

  const a = document.createElement('a');

  a.href = URL.createObjectURL(blob);

  a.download =
    `bca-leads-${Date.now()}.csv`;

  a.click();

  toast('CSV exported!');

}

// ── Populate Selects ──────────────────────────
function initSelects() {

  $$('.sem-select').forEach(sel => {

    sel.innerHTML = SEM_LABELS.map((l, i) => `

      <option value="${i + 1}">
        Semester ${l}
      </option>

    `).join('');

  });

  $$('.sub-select').forEach(sel => {

    const hasAll =
      sel.dataset.all === 'true';

    let html = '';

    if (hasAll) {

      html += `
        <option value="all">
          All Subjects
        </option>
      `;

    }

    Object.values(SEMESTER_SUBJECTS)
      .flat()
      .forEach(sub => {

        html += `
          <option value="${sub}">
            ${sub}
          </option>
        `;

      });

    sel.innerHTML = html;

  });

  $$('.unit-select').forEach(sel => {

    sel.innerHTML =
      [1,2,3,4,5]
      .map(u => `
        <option value="${u}">
          Unit ${u}
        </option>
      `).join('');

  });

}

// ── Mobile Sidebar ────────────────────────────
function checkMobile() {

  const btn = $('#sidebar-toggle');

  if (btn) {

    btn.style.display =
      window.innerWidth <= 900
        ? 'flex'
        : 'none';

  }

}

// ── Background ────────────────────────────────
function initBg() {

  if (!$('.bg-mesh')) {

    const bg = document.createElement('div');

    bg.className = 'bg-mesh';

    document.body.prepend(bg);

  }

}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  initBg();

  initSupabase();

  checkAuth();

  // LOGIN

  $('#login-btn')
    ?.addEventListener('click', handleLogin);

  $('#admin-pass')
    ?.addEventListener('keydown', e => {

      if (e.key === 'Enter') {
        handleLogin();
      }

    });

  // LOGOUT

  $('#logout-btn')
    ?.addEventListener('click', handleLogout);

  // INIT

  initSidebar();

  initSelects();

  // EXPORT BUTTONS

  $$('#export-csv, #export-csv2, #export-csv3')
    .forEach(btn => {

      btn?.addEventListener(
        'click',
        exportCSV
      );

    });

  // REFRESH BUTTONS

  $$('#refresh-leads, #refresh-leads2')
    .forEach(btn => {

      btn?.addEventListener(
        'click',
        loadLeads
      );

    });

  // MOBILE

  checkMobile();

  window.addEventListener(
    'resize',
    checkMobile
  );

});
