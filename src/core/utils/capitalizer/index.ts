function capitalizeFirstLetter(string: string): string {
    return string && string.length ? string[0].toUpperCase() + string.slice(1).toLocaleLowerCase() : string;
}

function capitalizeAll(string: string): string {
    return string && string.length ? string.toUpperCase() : string;
}

export { capitalizeFirstLetter, capitalizeAll };
