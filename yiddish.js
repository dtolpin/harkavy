/** Yiddish normalization routines */

/* expand ligatures and remove diacritics and in-word punctuation */
normal = function (word) {
    return word.
        toLowerCase().
        replace(/װ/g, 'וו').
        replace(/ױ/g, 'וי').
        replace(/ײ/g, 'יי').
        replace(/[ִַָּֿׂ־׳״.]/g, '')
}

/* harkavize prefixes and suffixes */
variant = function (word) {
    return word.
	replace(/^אפ/, "אב").
        replace(/^ארו/, "הערו").
        replace(/^בא/, "בע").
        replace(/^דער/, "ער").
        replace(/^פאר/, "פער").
        replace(/^צע/, "צו").
        replace(/לעך$/, "ליך")
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
