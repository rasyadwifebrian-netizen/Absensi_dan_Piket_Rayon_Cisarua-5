const weekdays = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
const defaultMembers = [
    { name: "Ahmad Fauzi", initials: "AF", nis: "12345601", rombel: "PPLG XI-1", dutyGroup: "Kelompok 1" },
    { name: "Citra Lestari", initials: "CL", nis: "12345604", rombel: "PPLG XI-1", dutyGroup: "Kelompok 4" },
    { name: "Farhan Maulana", initials: "FM", nis: "12345607", rombel: "PPLG XI-1", dutyGroup: "Kelompok 2" },
    { name: "Alya Putri", initials: "AP", nis: "12345602", rombel: "PPLG XI-2", dutyGroup: "Kelompok 2" },
    { name: "Dimas Saputra", initials: "DS", nis: "12345605", rombel: "PPLG XI-2", dutyGroup: "Kelompok 5" },
    { name: "Gita Rahma", initials: "GR", nis: "12345608", rombel: "PPLG XI-2", dutyGroup: "Kelompok 3" },
    { name: "Bagas Pratama", initials: "BP", nis: "12345603", rombel: "PPLG XI-3", dutyGroup: "Kelompok 3" },
    { name: "Eka Nuraini", initials: "EN", nis: "12345606", rombel: "PPLG XI-3", dutyGroup: "Kelompok 1" }
];
const attendanceOrder = ["Ahmad Fauzi", "Alya Putri", "Bagas Pratama", "Citra Lestari", "Dimas Saputra", "Eka Nuraini", "Farhan Maulana", "Gita Rahma"];
const attendanceStatuses = ["Hadir", "Izin", "Sakit", "Alpha"];
const defaultAttendance = {
    "Ahmad Fauzi": "Hadir",
    "Alya Putri": "Hadir",
    "Bagas Pratama": "Izin",
    "Citra Lestari": "Hadir",
    "Dimas Saputra": "Sakit",
    "Eka Nuraini": "Hadir",
    "Farhan Maulana": "Alpha",
    "Gita Rahma": "Hadir"
};
const sampleMonthlyAttendance = {
    "Ahmad Fauzi": { Hadir: 20, Izin: 1, Sakit: 0, Alpha: 0 },
    "Alya Putri": { Hadir: 19, Izin: 1, Sakit: 1, Alpha: 0 },
    "Bagas Pratama": { Hadir: 18, Izin: 2, Sakit: 1, Alpha: 0 },
    "Citra Lestari": { Hadir: 21, Izin: 0, Sakit: 0, Alpha: 0 },
    "Dimas Saputra": { Hadir: 17, Izin: 1, Sakit: 2, Alpha: 1 },
    "Eka Nuraini": { Hadir: 20, Izin: 0, Sakit: 1, Alpha: 0 },
    "Farhan Maulana": { Hadir: 16, Izin: 2, Sakit: 1, Alpha: 2 },
    "Gita Rahma": { Hadir: 21, Izin: 0, Sakit: 0, Alpha: 0 }
};
const defaultSchedule = [
    { day: "Senin", member: "Ahmad Fauzi", duty: "Rayon", time: "15.00" },
    { day: "Senin", member: "Alya Putri", duty: "Toilet", time: "15.00" },
    { day: "Senin", member: "Bagas Pratama", duty: "Rayon", time: "15.00" },
    { day: "Selasa", member: "Citra Lestari", duty: "Rayon", time: "15.00" },
    { day: "Selasa", member: "Dimas Saputra", duty: "Toilet", time: "15.00" },
    { day: "Selasa", member: "Eka Nuraini", duty: "Rayon", time: "15.00" },
    { day: "Rabu", member: "Farhan Maulana", duty: "Rayon", time: "15.00" },
    { day: "Rabu", member: "Gita Rahma", duty: "Toilet", time: "15.00" },
    { day: "Rabu", member: "Ahmad Fauzi", duty: "Rayon", time: "15.00" },
    { day: "Kamis", member: "Alya Putri", duty: "Rayon", time: "15.00" },
    { day: "Kamis", member: "Bagas Pratama", duty: "Toilet", time: "15.00" },
    { day: "Kamis", member: "Citra Lestari", duty: "Rayon", time: "15.00" },
    { day: "Jumat", member: "Dimas Saputra", duty: "Rayon", time: "15.00" },
    { day: "Jumat", member: "Eka Nuraini", duty: "Toilet", time: "15.00" },
    { day: "Jumat", member: "Farhan Maulana", duty: "Rayon", time: "15.00" }
];
const todayAttendance = [
    { label: "Hadir Hari Ini", count: 28, status: "present" },
    { label: "Izin Hari Ini", count: 2, status: "leave" },
    { label: "Sakit Hari Ini", count: 1, status: "sick" },
    { label: "Alpha Hari Ini", count: 1, status: "absent" }
];
const weeklyAttendance = [
    { day: "Sen", percentage: 92 },
    { day: "Sel", percentage: 88 },
    { day: "Rab", percentage: 95 },
    { day: "Kam", percentage: 85 },
    { day: "Jum", percentage: 90 }
];
const navItems = [
    { id: "dashboard", label: "Dashboard", icon: '<rect x="3" y="3" width="18" height="18" rx="5"></rect>' },
    { id: "attendance", label: "Absensi", icon: '<rect x="3" y="3" width="18" height="18" rx="5"></rect>' },
    { id: "schedule", label: "Jadwal Piket", icon: '<rect x="3" y="3" width="18" height="18" rx="5"></rect>' },
    { id: "report", label: "Rekap Absensi", icon: '<rect x="3" y="3" width="18" height="18" rx="5"></rect>' },
    { id: "members", label: "Data Anggota", icon: '<rect x="3" y="3" width="18" height="18" rx="5"></rect>' }
];
const titles = {
    dashboard: ["Dashboard", "Ringkasan absensi dan piket hari ini"],
    attendance: ["Absensi Rayon", "Pilih status kehadiran setiap anggota"],
    schedule: ["Jadwal Piket Rayon", "Pembagian piket per hari"],
    report: ["Rekap Absensi", "Rekap kehadiran anggota rayon per bulan"],
    members: ["Data Anggota", "Kelola anggota rayon"]
};

let members = loadMembers();
let schedule = loadSchedule();
let attendance = loadAttendance();
let activePage = "dashboard";
let reportMonth = attendanceDateKey().slice(0, 7);
let editingMemberNis = null;
let editingScheduleIndex = null;
let selectedScheduleDay = new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(new Date());
if (!weekdays.includes(selectedScheduleDay)) selectedScheduleDay = weekdays[0];
let selectedScheduleWeekOffset = 0;
let toastTimer;

function loadMembers() {
    try {
        const saved = localStorage.getItem("rayon-hub-members");
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.every(person =>
                person && typeof person.name === "string" &&
                typeof person.nis === "string" &&
                typeof person.rombel === "string" &&
                typeof person.dutyGroup === "string"
            )) return parsed;
        }
    } catch (error) {
        console.error("Data anggota tersimpan tidak dapat dibaca.", error);
    }
    return defaultMembers.map(person => ({ ...person }));
}

function saveMembers() {
    try {
        localStorage.setItem("rayon-hub-members", JSON.stringify(members));
        return true;
    } catch (error) {
        console.error("Data anggota tidak dapat disimpan.", error);
        return false;
    }
}

function orderedMembers() {
    return [...members].sort((first, second) => first.nis.localeCompare(second.nis, "id", { numeric: true }));
}

function loadSchedule() {
    try {
        const saved = localStorage.getItem("rayon-hub-schedule");
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch (error) {
        console.error("Jadwal tersimpan tidak dapat dibaca.", error);
    }
    return defaultSchedule.map(item => ({ ...item }));
}

function saveSchedule() {
    try {
        localStorage.setItem("rayon-hub-schedule", JSON.stringify(schedule));
    } catch (error) {
        console.error("Jadwal tidak dapat disimpan.", error);
        return false;
    }
    return true;
}

function attendanceDateKey() {
    return dateKeyFor(new Date());
}

function dateKeyFor(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function savedAttendanceForDate(dateKey) {
    const saved = localStorage.getItem(`rayon-hub-attendance-${dateKey}`);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new Error(`Format absensi untuk ${dateKey} tidak valid.`);
    }
    return Object.fromEntries(orderedMembers().map(({ name }) => [
        name,
        attendanceStatuses.includes(parsed[name]) ? parsed[name] : null
    ]));
}

function readCompletedDuties(dateKey) {
    const saved = localStorage.getItem(`rayon-hub-completed-duties-${dateKey}`);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || parsed.some(index => !Number.isInteger(index))) {
        throw new Error(`Format status piket untuk ${dateKey} tidak valid.`);
    }
    return parsed;
}

function saveCompletedDuties(dateKey, completed) {
    try {
        localStorage.setItem(`rayon-hub-completed-duties-${dateKey}`, JSON.stringify(completed));
        return true;
    } catch (error) {
        console.error("Status piket tidak dapat disimpan.", error);
        return false;
    }
}

function removeCompletedDutyIndex(index) {
    const prefix = "rayon-hub-completed-duties-";
    const keys = Array.from({ length: localStorage.length }, (_, item) => localStorage.key(item))
        .filter(key => key && key.startsWith(prefix));
    const updates = keys.map(key => {
        const value = localStorage.getItem(key);
        if (!value) return null;
        const parsed = JSON.parse(value);
        if (!Array.isArray(parsed) || parsed.some(item => !Number.isInteger(item))) {
            throw new Error("Data status piket tersimpan memiliki format yang tidak valid.");
        }
        return {
            key,
            value,
            next: parsed.filter(item => item !== index).map(item => item > index ? item - 1 : item)
        };
    }).filter(Boolean);
    updates.forEach(item => localStorage.setItem(item.key, JSON.stringify(item.next)));
}

function dashboardAttendanceStats() {
    const saved = savedAttendanceForDate(attendanceDateKey());
    if (!saved) return todayAttendance;
    const counts = { Hadir: 0, Izin: 0, Sakit: 0, Alpha: 0 };
    for (const status of Object.values(saved)) {
        if (attendanceStatuses.includes(status)) counts[status] += 1;
    }
    return [
        { label: "Hadir Hari Ini", count: counts.Hadir, status: "present" },
        { label: "Izin Hari Ini", count: counts.Izin, status: "leave" },
        { label: "Sakit Hari Ini", count: counts.Sakit, status: "sick" },
        { label: "Alpha Hari Ini", count: counts.Alpha, status: "absent" }
    ];
}

function dashboardWeeklyAttendance() {
    const today = new Date();
    const currentDay = today.getDay();
    const mondayOffset = (currentDay + 6) % 7;
    const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - mondayOffset);
    return weeklyAttendance.map((sample, index) => {
        const date = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + index);
        const saved = savedAttendanceForDate(dateKeyFor(date));
        if (!saved) return { ...sample, current: currentDay === index + 1 };
        const statuses = Object.values(saved).filter(status => attendanceStatuses.includes(status));
        const present = statuses.filter(status => status === "Hadir").length;
        return {
            day: sample.day,
            percentage: statuses.length ? Math.round((present / statuses.length) * 100) : 0,
            current: currentDay === index + 1
        };
    });
}

function dashboardDuties() {
    const dayName = new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(new Date());
    const assignments = schedule.map((item, index) => ({ ...item, index })).filter(item => item.day === dayName);
    const completed = readCompletedDuties(attendanceDateKey());
    return assignments.map(item => ({ ...item, complete: completed.includes(item.index) }));
}

function loadAttendance() {
    try {
        const saved = localStorage.getItem(`rayon-hub-attendance-${attendanceDateKey()}`);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
                return Object.fromEntries(orderedMembers().map(({ name }) => [
                    name,
                    attendanceStatuses.includes(parsed[name]) ? parsed[name] : defaultAttendance[name] || "Hadir"
                ]));
            }
        }
    } catch (error) {
        console.error("Absensi tersimpan tidak dapat dibaca.", error);
    }
    return Object.fromEntries(orderedMembers().map(({ name }) => [name, defaultAttendance[name] || "Hadir"]));
}

function saveAttendance() {
    try {
        localStorage.setItem(`rayon-hub-attendance-${attendanceDateKey()}`, JSON.stringify(attendance));
        return true;
    } catch (error) {
        console.error("Absensi tidak dapat disimpan.", error);
        return false;
    }
}

function getMonthlyAttendance(month) {
    const summary = Object.fromEntries(orderedMembers().map(({ name }) => [name, {
        Hadir: 0, Izin: 0, Sakit: 0, Alpha: 0
    }]));
    let hasSavedAttendance = false;
    try {
        for (let day = 1; day <= 31; day += 1) {
            const date = `${month}-${String(day).padStart(2, "0")}`;
            const saved = localStorage.getItem(`rayon-hub-attendance-${date}`);
            if (!saved) continue;
            const parsed = JSON.parse(saved);
            if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) continue;
            hasSavedAttendance = true;
            for (const { name } of orderedMembers()) {
                const status = parsed[name];
                if (attendanceStatuses.includes(status)) summary[name][status] += 1;
            }
        }
    } catch (error) {
        console.error("Rekap absensi tidak dapat dibaca.", error);
        throw new Error("Data absensi bulanan tidak dapat dibaca dari penyimpanan lokal.");
    }
    if (!hasSavedAttendance && month === "2026-09") return sampleMonthlyAttendance;
    return summary;
}

function createMonthlyReport(month) {
    const monthlyAttendance = getMonthlyAttendance(month);
    return orderedMembers().map(({ name }) => {
        const counts = monthlyAttendance[name] || { Hadir: 0, Izin: 0, Sakit: 0, Alpha: 0 };
        const totalDays = attendanceStatuses.reduce((total, status) => total + counts[status], 0);
        const percentage = totalDays ? Math.round((counts.Hadir / totalDays) * 100) : 0;
        return { name, ...counts, percentage };
    });
}

function escapeXml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"
    })[char]);
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("hidden");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.add("hidden"), 3200);
}

function showApp(userId) {
    const displayName = userId.includes("@") ? userId.split("@")[0] : "Nama Pengguna";
    document.getElementById("userName").textContent = displayName;
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");
    renderNavigation();
    renderPage("dashboard");
}

function renderNavigation() {
    document.getElementById("navigation").innerHTML = navItems.map(item => `
        <button class="nav-link ${activePage === item.id ? "active" : ""}" type="button" data-page="${item.id}">
            <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true">${item.icon}</svg>${item.label}
        </button>`).join("");
}

function renderPage(page) {
    activePage = page;
    const [title, subtitle] = titles[page];
    document.getElementById("pageTitle").textContent = title;
    document.getElementById("pageSubtitle").textContent = subtitle;
    renderNavigation();
    const content = document.getElementById("pageContent");
    if (page === "schedule") content.innerHTML = renderSchedule();
    if (page === "dashboard") {
        try {
            content.innerHTML = renderDashboard();
        } catch (error) {
            console.error("Dashboard gagal dimuat.", error);
            content.innerHTML = '<p class="content-card data-error">Ringkasan tidak dapat dimuat. Periksa data tersimpan di perangkat ini.</p>';
            showToast(error.message);
        }
    }
    if (page === "attendance") content.innerHTML = renderAttendance();
    if (page === "report") {
        try {
            content.innerHTML = renderReport();
        } catch (error) {
            console.error("Rekap absensi gagal ditampilkan.", error);
            content.innerHTML = "";
            showToast(error.message);
        }
    }
    if (page === "members") content.innerHTML = renderMembers();
    content.classList.remove("page-enter");
    void content.offsetWidth;
    content.classList.add("page-enter");
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("mobileOverlay").classList.remove("visible");
}

function initialsFor(name) {
    const member = members.find(person => person.name === name);
    return member ? member.initials : name.trim().split(/\s+/).slice(0, 2).map(word => word[0]).join("").toUpperCase();
}

function avatar(name, extraClass = "") {
    return `<div class="avatar ${extraClass}" aria-hidden="true">${escapeHtml(initialsFor(name))}</div>`;
}

function scheduleDateFor(day) {
    const today = new Date();
    const mondayOffset = (today.getDay() + 6) % 7;
    const dayOffset = weekdays.indexOf(day);
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() - mondayOffset + dayOffset + selectedScheduleWeekOffset * 7);
}

function scheduleWeekLabel() {
    const start = scheduleDateFor(weekdays[0]);
    const end = scheduleDateFor(weekdays[4]);
    const monthYear = new Intl.DateTimeFormat("id-ID", { month: "long", year: "numeric" });
    const dayMonth = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short" });
    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
        return `${start.getDate()}–${end.getDate()} ${monthYear.format(start)}`;
    }
    return `${dayMonth.format(start)} – ${dayMonth.format(end)} ${end.getFullYear()}`;
}

function scheduleCards(day) {
    const assignments = schedule.map((item, index) => ({ ...item, index }))
        .filter(item => item.day === day)
        .sort((first, second) => first.time.localeCompare(second.time));
    if (!assignments.length) return `<div class="empty-day">
        <span>Belum ada jadwal piket</span>
        <button class="text-action" type="button" data-action="add-schedule" data-schedule-day="${day}">＋ Tambah petugas</button>
    </div>`;
    return assignments.map(item => `
        <button class="assignment-card" type="button" data-action="edit-schedule" data-schedule-index="${item.index}" aria-label="Edit piket ${escapeHtml(item.member)}, ${escapeHtml(item.duty)}, pukul ${escapeHtml(item.time)}">
            ${avatar(item.member)}
            <span class="assignment-copy"><strong>${escapeHtml(item.member)}</strong><span>${escapeHtml(item.duty)} · ${escapeHtml(item.time)}</span></span>
            <span class="assignment-edit-hint" aria-hidden="true">›</span>
        </button>`).join("");
}

function renderSchedule() {
    return `<div class="schedule-toolbar">
        <div class="week-navigation" aria-label="Pilih minggu jadwal">
            <button class="week-arrow" type="button" data-action="previous-week" aria-label="Minggu sebelumnya">‹</button>
            <button class="week-select" type="button" data-action="current-week" aria-label="Kembali ke minggu ini">
                <span class="week-select-caption">${selectedScheduleWeekOffset === 0 ? "Jadwal pekan ini" : "Jadwal piket"}</span>
                <strong>${scheduleWeekLabel()}</strong>
            </button>
            <button class="week-arrow" type="button" data-action="next-week" aria-label="Minggu berikutnya">›</button>
        </div>
        <button class="primary-button add-button" type="button" data-action="add-schedule">＋ Tambah Jadwal</button>
    </div>
    <section class="schedule-grid" aria-label="Jadwal piket mingguan">
        ${weekdays.map(day => `<div class="day-column ${selectedScheduleDay === day ? "selected" : ""}">
            <button class="day-heading" type="button" data-schedule-day="${day}" aria-pressed="${selectedScheduleDay === day}">
                <span>${day}</span><span class="schedule-day-date">${new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short" }).format(scheduleDateFor(day))}</span>
            </button><div class="assignment-list">${scheduleCards(day)}</div>
        </div>`).join("")}
    </section>`;
}

function renderDashboard() {
    const stats = dashboardAttendanceStats();
    const weekly = dashboardWeeklyAttendance();
    const duties = dashboardDuties();
    const currentWeekday = new Date().getDay();
    return `<section class="dashboard-stats" aria-label="Ringkasan absensi hari ini">
        ${stats.map(item => `<article class="dashboard-stat ${item.status}">
            <span>${item.label}</span><strong>${item.count}</strong>
        </article>`).join("")}
    </section>
    <div class="dashboard-actions" aria-label="Aksi cepat">
        <button class="dashboard-quick-action" type="button" data-page="attendance"><span aria-hidden="true">＋</span> Catat Absensi</button>
        <button class="dashboard-quick-action" type="button" data-page="schedule"><span aria-hidden="true">▦</span> Lihat Jadwal Piket</button>
    </div>
    <div class="dashboard-panels">
        <section class="dashboard-panel attendance-panel" aria-labelledby="weeklyAttendanceTitle">
            <h2 id="weeklyAttendanceTitle">Persentase Kehadiran Minggu Ini</h2>
            <div class="attendance-chart" role="img" aria-label="Persentase kehadiran: ${weekly.map(item => `${item.day} ${item.percentage}%`).join(", ")}">
                ${weekly.map(item => `<div class="attendance-day ${item.current ? "current" : ""}">
                    <span class="attendance-value">${item.percentage}%</span>
                    <div class="attendance-bar" style="--attendance-height: ${Math.max(4, Math.round(item.percentage * 2.75))}px"></div>
                    <span class="attendance-label">${item.day}</span>
                </div>`).join("")}
            </div>
        </section>
        <section class="dashboard-panel duties-panel" aria-labelledby="todayDutiesTitle">
            <h2 id="todayDutiesTitle">Piket Hari Ini</h2>
            <div class="today-duty-list">
                ${duties.length ? duties.map(item => `<article class="today-duty">
                    ${avatar(item.member)}
                    <div class="today-duty-copy"><strong>${escapeHtml(item.member)}</strong><span>${escapeHtml(item.duty)} · ${escapeHtml(item.time)}</span></div>
                    <button class="duty-status ${item.complete ? "complete" : "pending"}" type="button" data-action="toggle-duty" data-duty-index="${item.index}" aria-pressed="${item.complete}">${item.complete ? "Selesai" : "Tandai selesai"}</button>
                </article>`).join("") : `<div class="empty-duties">
                    <p>${currentWeekday === 0 || currentWeekday === 6 ? "Tidak ada jadwal piket hari ini." : "Belum ada petugas piket untuk hari ini."}</p>
                    <button class="text-action" type="button" data-page="schedule">Atur jadwal piket</button>
                </div>`}
            </div>
        </section>
    </div>`;
}

function renderAttendance() {
    const today = new Intl.DateTimeFormat("id-ID", {
        weekday: "long", day: "numeric", month: "long", year: "numeric"
    }).format(new Date());
    const ordered = orderedMembers();
    return `<div class="attendance-toolbar">
        <time class="attendance-date" datetime="${attendanceDateKey()}">${today}</time>
        <div class="attendance-actions">
            <button class="secondary-button mark-all-present" type="button" data-action="mark-all-present">Tandai Semua Hadir</button>
            <button class="primary-button attendance-save" type="button" data-action="save-attendance">Simpan Absensi</button>
        </div>
    </div>
    <section class="content-card attendance-table-wrap">
        <table class="attendance-table">
            <thead><tr><th scope="col">Nama</th><th scope="col">NIS</th><th scope="col">Status Kehadiran</th></tr></thead>
            <tbody>${ordered.map(person => `<tr>
                <td>${escapeHtml(person.name)}</td>
                <td>${person.nis}</td>
                <td><div class="attendance-options" role="group" aria-label="Status kehadiran ${escapeHtml(person.name)}">
                    ${attendanceStatuses.map(status => `<button class="attendance-option ${attendance[person.name] === status ? `selected ${status.toLowerCase()}` : ""}" type="button" data-attendance-member="${escapeHtml(person.name)}" data-attendance-status="${status}" aria-pressed="${attendance[person.name] === status}">${status}</button>`).join("")}
                </div></td>
            </tr>`).join("")}</tbody>
        </table>
    </section>`;
}

function renderReport() {
    const rows = createMonthlyReport(reportMonth);
    return `<div class="report-toolbar">
        <label class="report-month-label" for="reportMonth">
            <span class="visually-hidden">Pilih bulan rekap</span>
            <input id="reportMonth" class="report-month" type="month" value="${reportMonth}">
        </label>
        <button class="primary-button export-button" type="button" data-action="export-report">Export Excel</button>
    </div>
    <section class="content-card report-table-wrap">
        <table class="report-table">
            <thead><tr>
                <th scope="col">Nama</th><th scope="col">Hadir</th><th scope="col">Izin</th>
                <th scope="col">Sakit</th><th scope="col">Alpha</th><th scope="col">Persentase</th>
            </tr></thead>
            <tbody>${rows.map(row => `<tr>
                <td>${escapeHtml(row.name)}</td><td>${row.Hadir}</td><td>${row.Izin}</td>
                <td>${row.Sakit}</td><td>${row.Alpha}</td>
                <td><strong class="report-percentage ${row.percentage >= 90 ? "good" : row.percentage >= 80 ? "warning" : "low"}">${row.percentage}%</strong></td>
            </tr>`).join("")}</tbody>
        </table>
    </section>`;
}

function exportMonthlyReport() {
    const rows = createMonthlyReport(reportMonth);
    const headers = ["Nama", "Hadir", "Izin", "Sakit", "Alpha", "Persentase"];
    const worksheetRows = [headers, ...rows.map(row => [
        row.name, row.Hadir, row.Izin, row.Sakit, row.Alpha, `${row.percentage}%`
    ])];
    const xmlRows = worksheetRows.map((row, rowIndex) => `<Row>${row.map((value, index) => {
        const type = rowIndex > 0 && index > 0 && index < 5 ? "Number" : "String";
        return `<Cell><Data ss:Type="${type}">${escapeXml(value)}</Data></Cell>`;
    }).join("")}</Row>`).join("");
    const workbook = `<?xml version="1.0" encoding="UTF-8"?>
        <?mso-application progid="Excel.Sheet"?>
        <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
            xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
            <Worksheet ss:Name="Rekap Absensi"><Table>${xmlRows}</Table></Worksheet>
        </Workbook>`;
    const blob = new Blob([`\uFEFF${workbook}`], { type: "application/vnd.ms-excel;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `rekap-absensi-${reportMonth}.xls`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 0);
}

function renderMembers() {
    const rows = orderedMembers().map(person => `<tr data-member-row>
        <td>${escapeHtml(person.name)}</td><td>${escapeHtml(person.nis)}</td>
        <td>${escapeHtml(person.rombel)}</td><td>${escapeHtml(person.dutyGroup)}</td>
        <td><div class="member-actions">
            <button class="member-action edit" type="button" data-member-action="edit" data-member-nis="${escapeHtml(person.nis)}">Edit</button>
            <button class="member-action delete" type="button" data-member-action="delete" data-member-nis="${escapeHtml(person.nis)}">Hapus</button>
        </div></td>
    </tr>`).join("");
    return `<div class="members-toolbar">
        <label class="member-search-label">
            <span class="visually-hidden">Cari nama atau NIS</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg>
            <input id="memberSearch" type="search" placeholder="Cari nama atau NIS..." autocomplete="off">
        </label>
        <button class="primary-button add-button" type="button" data-member-action="add">＋ Tambah Anggota</button>
    </div>
    <section class="content-card member-table-wrap">
        <table class="member-table">
            <thead><tr><th scope="col">Nama</th><th scope="col">NIS</th><th scope="col">Rombel</th><th scope="col">Kelompok Piket</th><th scope="col">Aksi</th></tr></thead>
            <tbody>${rows}<tr class="member-empty hidden"><td colspan="5">Anggota tidak ditemukan.</td></tr></tbody>
        </table>
    </section>`;
}

function openMemberModal(nis = null) {
    const person = nis ? members.find(member => member.nis === nis) : null;
    editingMemberNis = person ? person.nis : null;
    document.getElementById("memberModalTitle").textContent = person ? "Edit Anggota" : "Tambah Anggota";
    document.getElementById("memberNameInput").value = person ? person.name : "";
    document.getElementById("memberNisInput").value = person ? person.nis : "";
    document.getElementById("memberRombelInput").value = person ? person.rombel : "";
    document.getElementById("memberGroupInput").value = person ? person.dutyGroup : "Kelompok 1";
    document.getElementById("memberModal").classList.remove("hidden");
    document.getElementById("memberNameInput").focus();
}

function closeMemberModal() {
    document.getElementById("memberModal").classList.add("hidden");
    editingMemberNis = null;
}

function renameMemberRecords(oldName, newName) {
    const attendancePrefix = "rayon-hub-attendance-";
    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (!key || !key.startsWith(attendancePrefix)) continue;
        const saved = localStorage.getItem(key);
        if (!saved) continue;
        const record = JSON.parse(saved);
        if (!record || typeof record !== "object" || Array.isArray(record) || !Object.hasOwn(record, oldName)) continue;
        record[newName] = record[oldName];
        delete record[oldName];
        localStorage.setItem(key, JSON.stringify(record));
    }
    if (Object.hasOwn(attendance, oldName)) {
        attendance[newName] = attendance[oldName];
        delete attendance[oldName];
    }
    const previousSchedule = schedule;
    schedule = schedule.map(item => item.member === oldName ? { ...item, member: newName } : item);
    if (!saveSchedule()) {
        schedule = previousSchedule;
        throw new Error("Jadwal piket anggota tidak dapat diperbarui di penyimpanan lokal.");
    }
}

function removeMemberRecords(name) {
    const attendancePrefix = "rayon-hub-attendance-";
    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (!key || !key.startsWith(attendancePrefix)) continue;
        const saved = localStorage.getItem(key);
        if (!saved) continue;
        const record = JSON.parse(saved);
        if (!record || typeof record !== "object" || Array.isArray(record) || !Object.hasOwn(record, name)) continue;
        delete record[name];
        localStorage.setItem(key, JSON.stringify(record));
    }
    const previousSchedule = schedule;
    schedule = schedule.filter(item => item.member !== name);
    if (!saveSchedule()) {
        schedule = previousSchedule;
        throw new Error("Jadwal piket anggota tidak dapat diperbarui di penyimpanan lokal.");
    }
    delete attendance[name];
    const dutyPrefix = "rayon-hub-completed-duties-";
    const dutyKeys = Array.from({ length: localStorage.length }, (_, index) => localStorage.key(index))
        .filter(key => key && key.startsWith(dutyPrefix));
    dutyKeys.forEach(key => localStorage.removeItem(key));
}
function openScheduleModal(day = selectedScheduleDay, index = null) {
    const memberSelect = document.getElementById("memberSelect");
    const daySelect = document.getElementById("daySelect");
    const assignment = index === null ? null : schedule[index];
    editingScheduleIndex = assignment ? index : null;
    memberSelect.innerHTML = orderedMembers().map(person => `<option value="${escapeHtml(person.name)}">${escapeHtml(person.name)}</option>`).join("");
    daySelect.innerHTML = weekdays.map(weekday => `<option value="${weekday}" ${weekday === (assignment ? assignment.day : day) ? "selected" : ""}>${weekday}</option>`).join("");
    document.getElementById("scheduleModalTitle").textContent = assignment ? "Edit Jadwal Piket" : "Tambah Jadwal Piket";
    document.getElementById("scheduleModalDescription").textContent = assignment ? "Perbarui petugas, hari, atau waktu piket." : "Atur petugas piket rayon.";
    document.getElementById("dutySelect").value = assignment ? assignment.duty : "Rayon";
    document.getElementById("timeInput").value = assignment ? assignment.time.replace(".", ":") : "15:00";
    if (assignment) memberSelect.value = assignment.member;
    document.getElementById("deleteScheduleButton").classList.toggle("hidden", !assignment);
    document.getElementById("scheduleModal").classList.remove("hidden");
    memberSelect.focus();
}

function closeScheduleModal() {
    document.getElementById("scheduleModal").classList.add("hidden");
    editingScheduleIndex = null;
}

document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    showApp(document.getElementById("loginId").value.trim());
});

document.getElementById("passwordToggle").addEventListener("click", event => {
    const button = event.currentTarget;
    const password = document.getElementById("password");
    const visible = password.type === "password";
    password.type = visible ? "text" : "password";
    button.setAttribute("aria-pressed", String(visible));
    button.setAttribute("aria-label", visible ? "Sembunyikan password" : "Tampilkan password");
});

document.getElementById("navigation").addEventListener("click", event => {
    const button = event.target.closest("[data-page]");
    if (button) renderPage(button.dataset.page);
});

document.getElementById("pageContent").addEventListener("click", event => {
    const button = event.target.closest("[data-action], [data-page], [data-attendance-member], [data-member-action], [data-schedule-day]");
    if (!button) return;
    if (button.dataset.scheduleDay && button.dataset.action !== "add-schedule") {
        selectedScheduleDay = button.dataset.scheduleDay;
        renderPage("schedule");
        return;
    }
    if (button.dataset.action === "previous-week" || button.dataset.action === "next-week") {
        selectedScheduleWeekOffset += button.dataset.action === "next-week" ? 1 : -1;
        renderPage("schedule");
        return;
    }
    if (button.dataset.action === "current-week") {
        selectedScheduleWeekOffset = 0;
        selectedScheduleDay = new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(new Date());
        if (!weekdays.includes(selectedScheduleDay)) selectedScheduleDay = weekdays[0];
        renderPage("schedule");
        return;
    }
    if (button.dataset.action === "edit-schedule") {
        const index = Number(button.dataset.scheduleIndex);
        if (!Number.isInteger(index) || !schedule[index]) {
            showToast("Jadwal piket tidak ditemukan.");
            return;
        }
        openScheduleModal(schedule[index].day, index);
        return;
    }
    if (button.dataset.memberAction === "add") openMemberModal();
    if (button.dataset.memberAction === "edit") openMemberModal(button.dataset.memberNis);
    if (button.dataset.memberAction === "delete") {
        const person = members.find(member => member.nis === button.dataset.memberNis);
        if (!person || !window.confirm(`Hapus data ${person.name}?`)) return;
        const previousMembers = members;
        members = members.filter(member => member.nis !== person.nis);
        if (!saveMembers()) {
            members = previousMembers;
            showToast("Data anggota tidak dapat dihapus karena gagal disimpan.");
            return;
        }
        try {
            removeMemberRecords(person.name);
        } catch (error) {
            console.error("Riwayat anggota tidak dapat dihapus.", error);
            renderPage("members");
            showToast("Anggota terhapus, tetapi riwayat absensi atau jadwal gagal diperbarui.");
            return;
        }
        renderPage("members");
        showToast("Data anggota berhasil dihapus.");
    }
    if (button.dataset.action === "add-schedule") openScheduleModal(button.dataset.scheduleDay || selectedScheduleDay);
    if (button.dataset.action === "mark-all-present") {
        attendance = Object.fromEntries(orderedMembers().map(({ name }) => [name, "Hadir"]));
        renderPage("attendance");
        showToast("Semua anggota ditandai hadir. Simpan untuk menyimpan absensi.");
    }
    if (button.dataset.action === "save-attendance") {
        showToast(saveAttendance() ? "Absensi berhasil disimpan." : "Absensi tidak dapat disimpan di perangkat ini.");
    }
    if (button.dataset.action === "toggle-duty") {
        const index = Number(button.dataset.dutyIndex);
        if (!Number.isInteger(index) || !schedule[index]) {
            showToast("Jadwal piket tidak ditemukan.");
            return;
        }
        try {
            const completed = readCompletedDuties(attendanceDateKey());
            const next = completed.includes(index)
                ? completed.filter(item => item !== index)
                : [...completed, index];
            if (!saveCompletedDuties(attendanceDateKey(), next)) {
                showToast("Status piket tidak dapat disimpan di perangkat ini.");
                return;
            }
            renderPage("dashboard");
        } catch (error) {
            console.error("Status piket gagal diperbarui.", error);
            showToast(error.message);
        }
    }
    if (button.dataset.action === "export-report") {
        try {
            exportMonthlyReport();
            showToast("Rekap absensi berhasil diekspor.");
        } catch (error) {
            console.error("Rekap absensi gagal diekspor.", error);
            showToast(error.message);
        }
    }
    if (button.dataset.attendanceMember && attendanceStatuses.includes(button.dataset.attendanceStatus)) {
        attendance[button.dataset.attendanceMember] = button.dataset.attendanceStatus;
        renderPage("attendance");
    }
    if (button.dataset.page) renderPage(button.dataset.page);
});

document.getElementById("pageContent").addEventListener("change", event => {
    if (event.target.id !== "reportMonth") return;
    reportMonth = event.target.value || attendanceDateKey().slice(0, 7);
    renderPage("report");
});

document.getElementById("pageContent").addEventListener("input", event => {
    if (event.target.id !== "memberSearch") return;
    const query = event.target.value.trim().toLocaleLowerCase("id");
    let visibleCount = 0;
    document.querySelectorAll("[data-member-row]").forEach(row => {
        const matches = row.textContent.toLocaleLowerCase("id").includes(query);
        row.classList.toggle("hidden", !matches);
        if (matches) visibleCount += 1;
    });
    document.querySelector(".member-empty")?.classList.toggle("hidden", visibleCount > 0);
});

document.getElementById("memberForm").addEventListener("submit", event => {
    event.preventDefault();
    const isEditing = editingMemberNis !== null;
    let historyWarning = false;
    const name = document.getElementById("memberNameInput").value.trim();
    const nis = document.getElementById("memberNisInput").value.trim();
    const rombel = document.getElementById("memberRombelInput").value.trim();
    const dutyGroup = document.getElementById("memberGroupInput").value;
    const duplicate = members.some(person =>
        person.nis === nis && person.nis !== editingMemberNis ||
        person.name.toLocaleLowerCase("id") === name.toLocaleLowerCase("id") && person.nis !== editingMemberNis
    );
    if (duplicate) {
        showToast("Nama atau NIS tersebut sudah digunakan anggota lain.");
        return;
    }
    const initials = name.split(/\s+/).slice(0, 2).map(word => word[0]).join("").toUpperCase();
    if (editingMemberNis) {
        const person = members.find(member => member.nis === editingMemberNis);
        if (!person) {
            showToast("Data anggota yang akan diedit tidak ditemukan.");
            closeMemberModal();
            renderPage("members");
            return;
        }
        const oldName = person.name;
        const updatedMember = { ...person, name, initials, nis, rombel, dutyGroup };
        members = members.map(member => member.nis === editingMemberNis ? updatedMember : member);
        if (!saveMembers()) {
            members = members.map(member => member.nis === editingMemberNis ? person : member);
            showToast("Perubahan anggota tidak dapat disimpan.");
            return;
        }
        if (oldName !== name) {
            try {
                renameMemberRecords(oldName, name);
            } catch (error) {
                console.error("Riwayat anggota tidak dapat diperbarui.", error);
                historyWarning = true;
            }
        }
    } else {
        const newMember = { name, initials, nis, rombel, dutyGroup };
        members.push(newMember);
        if (!saveMembers()) {
            members.pop();
            showToast("Anggota baru tidak dapat disimpan.");
            return;
        }
        attendance[name] = "Hadir";
    }
    closeMemberModal();
    renderPage("members");
    showToast(historyWarning
        ? "Profil tersimpan, tetapi jadwal atau riwayat absensi anggota gagal diperbarui."
        : isEditing ? "Data anggota berhasil diperbarui." : "Anggota berhasil ditambahkan.");
});

document.getElementById("scheduleForm").addEventListener("submit", event => {
    event.preventDefault();
    const isEditing = editingScheduleIndex !== null;
    const member = document.getElementById("memberSelect").value;
    const day = document.getElementById("daySelect").value;
    const duty = document.getElementById("dutySelect").value;
    const time = document.getElementById("timeInput").value;
    if (!member || !day || !time) return;
    const nextScheduleItem = { member, day, duty, time: time.replace(":", ".") };
    const previousSchedule = schedule;
    if (editingScheduleIndex === null) {
        schedule = [...schedule, nextScheduleItem];
    } else {
        schedule = schedule.map((item, index) => index === editingScheduleIndex ? nextScheduleItem : item);
    }
    const saved = saveSchedule();
    if (!saved) {
        schedule = previousSchedule;
        showToast("Jadwal tidak dapat disimpan di perangkat ini. Perubahan dibatalkan.");
        return;
    }
    selectedScheduleDay = day;
    closeScheduleModal();
    if (activePage === "schedule" || activePage === "dashboard") renderPage(activePage);
    showToast(isEditing ? "Jadwal piket berhasil diperbarui." : "Jadwal piket berhasil ditambahkan.");
});

document.getElementById("forgotPassword").addEventListener("click", event => {
    event.preventDefault();
    showToast("Silakan hubungi pembimbing rayon untuk bantuan reset password.");
});
document.getElementById("closeModal").addEventListener("click", closeScheduleModal);
document.getElementById("cancelModal").addEventListener("click", closeScheduleModal);
document.getElementById("deleteScheduleButton").addEventListener("click", () => {
    if (editingScheduleIndex === null) return;
    const index = editingScheduleIndex;
    const assignment = schedule[index];
    if (!assignment || !window.confirm(`Hapus jadwal piket ${assignment.member} pada hari ${assignment.day}?`)) return;
    const previousSchedule = schedule;
    const previousDutyRecords = Array.from({ length: localStorage.length }, (_, item) => localStorage.key(item))
        .filter(key => key && key.startsWith("rayon-hub-completed-duties-"))
        .map(key => [key, localStorage.getItem(key)]);
    schedule = schedule.filter((_, itemIndex) => itemIndex !== index);
    if (!saveSchedule()) {
        schedule = previousSchedule;
        showToast("Jadwal tidak dapat dihapus karena perubahan gagal disimpan.");
        return;
    }
    try {
        removeCompletedDutyIndex(index);
    } catch (error) {
        console.error("Status penyelesaian piket tidak dapat diperbarui.", error);
        schedule = previousSchedule;
        saveSchedule();
        previousDutyRecords.forEach(([key, value]) => {
            if (value === null) localStorage.removeItem(key);
            else localStorage.setItem(key, value);
        });
        showToast("Jadwal tidak dihapus karena status piket gagal diperbarui.");
        return;
    }
    selectedScheduleDay = assignment.day;
    closeScheduleModal();
    renderPage("schedule");
    showToast("Jadwal piket berhasil dihapus.");
});
document.getElementById("closeMemberModal").addEventListener("click", closeMemberModal);
document.getElementById("cancelMemberModal").addEventListener("click", closeMemberModal);
document.getElementById("scheduleModal").addEventListener("click", event => {
    if (event.target.id === "scheduleModal") closeScheduleModal();
});
document.getElementById("memberModal").addEventListener("click", event => {
    if (event.target.id === "memberModal") closeMemberModal();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeScheduleModal();
        closeMemberModal();
        document.getElementById("sidebar").classList.remove("open");
        document.getElementById("mobileOverlay").classList.remove("visible");
    }
});

document.getElementById("logoutButton").addEventListener("click", () => {
    document.getElementById("appPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("loginForm").reset();
    activePage = "dashboard";
});
document.getElementById("menuButton").addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("mobileOverlay").classList.add("visible");
});
document.getElementById("mobileOverlay").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("mobileOverlay").classList.remove("visible");
});
