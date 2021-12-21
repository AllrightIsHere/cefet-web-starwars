export function decimalToRoman(episode) {
    const convert = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI'
    }

    return convert[episode];
}