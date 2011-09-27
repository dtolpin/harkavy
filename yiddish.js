/** Yiddish normalization routines */

/* expand ligatures and remove diacritics */
normal = function (word) {
    return word.
        replace(/װ/g, 'וו').
        replace(/ױ/g, 'וי').
        replace(/ײ/g, 'יי').
        replace(/[ִַָּֿ]/g, '')
}

/* replace archaic prefixes and suffixes */
variant = function (word) {
    return word.
        replace(/^הערו/, "ארו").
        replace(/^ער/, "דער").
        replace(/^פער/, "פאר").
        replace(/^צו/, "צע").
        replace(/ליך$/, "לעך").
        replace(/ען$/, "ן")
}

/* generate a list of guesses from a list of words */
guesses = function(words) {
    var verter = []
    words.each(function (word) {
        word = normal(word)
        verter.push(word)
        var vort = variant(word)
        if(vort!=word) {
            verter.push(vort)
        }
    })
    return verter
}
