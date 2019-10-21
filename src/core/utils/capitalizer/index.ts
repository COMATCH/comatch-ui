function capitalizeFirstLetter(string: string): string {
    if (string && string.length > 0) {
        return string[0].toUpperCase() + string.slice(1).toLocaleLowerCase();
    }

    return string;
}

function capitalizeAll(string: string): string {
    if (string && string.length > 0) {
        return string.toUpperCase();
    }
    return string;
}

export { capitalizeFirstLetter, capitalizeAll };
