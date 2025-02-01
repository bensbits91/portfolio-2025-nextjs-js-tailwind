export const camelToTitle = (str) =>
    // todo: don't capitalize if "and" or "or"...
    // todo: Ui Ux -> UI/UX
    str.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

export const makeKey = (str) => str.replace(/ /g, '-').toLowerCase();
