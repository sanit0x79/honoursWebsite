function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
    updateProgressBar();
}

function updateProgressBar() {
    const sections = document.querySelectorAll('.space-y-6 > div > div');
    const revealedSections = document.querySelectorAll('.space-y-6 > div > div:not(.hidden)');
    const progress = (revealedSections.length / sections.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
}

function showContent(contentId) {
    document.querySelectorAll('.content-box').forEach(box => box.classList.remove('active'));
    document.getElementById(contentId).classList.add('active');
}

function hideContent(contentId) {
    document.getElementById(contentId).classList.remove('active');
}

function showEmailPopup(event) {
    event.preventDefault();
    document.getElementById('email-popup').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
}

function hideEmailPopup() {
    document.getElementById('email-popup').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
}
