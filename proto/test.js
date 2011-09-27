init = function () {
    $('words').value="עטלעכע װערטער"
    $$('form')[0].onsubmit = showguesses
}

// expand ligatures and remove diactritics,
normal = function (word) {
    return word.
        replace(/װ/g, 'וו').
        replace(/ױ/g, 'וי').
        replace(/ײ/g, 'יי').
        replace(/[ִַָּֿ]/g, '')
}

// replace archaic prefixes and suffixes
variant = function (word) {
    return word.
        replace(/^הערו/, "ארו").
        replace(/^ער/, "דער").
        replace(/^פער/, "פאר").
        replace(/^צו/, "צע").
        replace(/ליך$/, "לעך").
        replace(/ען$/, "ן")
}

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

removeAllChildren = function (node) {
    while(node.hasChildNodes())
        node.removeChild(node.firstChild)
}

showguesses = function() {
    removeAllChildren($('guesses'))

    guesses($F('words').split(/\s+/)).each(function (word) {
        var link = document.createElement('a')
        link.appendChild(document.createTextNode(word))
        link.setAttribute('href', '')
        $('guesses').appendChild(link)
        $('guesses').appendChild(document.createTextNode(" "))
    })
    return false
}






