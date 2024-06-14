export const titleBrandingGuard = (to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
}