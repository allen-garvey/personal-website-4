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
    document.getElementById('email_link').href = 'mailto:' + link;
    document.getElementById('email_text').innerHTML = link;
}