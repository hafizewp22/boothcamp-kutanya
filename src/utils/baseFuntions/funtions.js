export const NilaiPoint = (point) => {
    let hasil;
    if (point >= 0 && point <= 39) {
        hasil = 'Failed! π'
    } else if (point >= 40 && point <= 59) {
        hasil = 'Insufficient! π£'
    } else if (point >= 60 && point <= 74) {
        hasil = 'Acceptable! βΊοΈ'
    } else if (point >= 75 && point <= 89) {
        hasil = 'Very Good! π€©'
    } else if (point >= 90 && point <= 100) {
        hasil = 'Outstanding! π₯³'
    }
    return hasil
}