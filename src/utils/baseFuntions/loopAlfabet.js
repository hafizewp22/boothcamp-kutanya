export const LoopAlphabet = (character = 'a', index) => {
    return String.fromCharCode(character.charCodeAt(0) + index);
}