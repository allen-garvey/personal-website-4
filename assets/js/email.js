/*
 * Add email address to page
 * (Do it this way instead of directly in html to avoid spambots)
 */
export function initEmail(){
    const dot = '.';
    const at = '@';
    const sixth = 'com';
    const second = 'garvey';
    const first = 'allen';
    const fourth = 'gmail';
    const link = first + dot + second + at + fourth + dot + sixth;
    const emailLink = document.getElementById('email_link');
    emailLink.href = 'mailto:' + link;
    emailLink.innerText = 'Email';
}