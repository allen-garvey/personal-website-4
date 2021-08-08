/*
 * Add email address to page
 * (Do it this way instead of directly in html to avoid spambots)
 */
export function initEmail(){
    const last = 'garvey';
    const first = 'allen';
    const host = 'gmail';
    const emailLink = document.getElementById('email_link');
    emailLink.href = `mailto:${first}.${last}@${host}.com`;
    emailLink.innerText = 'Email';
}