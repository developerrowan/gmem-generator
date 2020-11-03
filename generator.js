const fs = require('fs');


let generator = function() {

    this.gmemify = function() {
        let g = "",e = "",m1 = "",m2 = "";

        let rand = Math.floor(Math.random() * Math.floor(3));
        switch(rand) {
            case 0:
                g = "adjectives", m1 = "nouns", e = "verbs", m2 = "nouns"
            break;
            case 1:
                g = "nouns", m1 = "verbs", e = "adjectives", m2 = "nouns"
            break;
            case 2:
                g = "verbs", m1 = "nouns", e = "adjectives", m2 = "adjectives"
            break;
            case 3:
                g = "adjectives", m1 = "nouns", e = "adjectives", m2 = "adjectives"
            break;
        }

        let load_g = fs.readFileSync("text/" + g + "_g.txt").toString().split(/\r?\n/);
        let load_m1 = fs.readFileSync("text/" + m1 + "_m.txt").toString().split(/\r?\n/);
        let load_e = fs.readFileSync("text/" + e + "_e.txt").toString().split(/\r?\n/);
        let load_m2 = fs.readFileSync("text/" + m2 + "_m.txt").toString().split(/\r?\n/);

        const gFinal = load_g[Math.floor(Math.random() * Math.floor(load_g.length))];
        const m1Final = load_m1[Math.floor(Math.random() * Math.floor(load_m1.length))];
        const eFinal = load_e[Math.floor(Math.random() * Math.floor(load_e.length))];
        const m2Final = load_m2[Math.floor(Math.random() * Math.floor(load_m2.length))];

        return gFinal + " " + m1Final + " " + eFinal + " " + m2Final;
    }
}

module.exports = generator;