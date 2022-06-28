module.exports = function toReadable(number) {
    const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const c = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const d = ['hundred'];
    const f = Array.from(String(number), Number);
    let g = [];

    if (f.length === 1) {
        g.push(a[f[0]]);
    } else {
        if (f.length === 2) {
            if (f[0] === 1) {
                g.push(b[f[1]]);
            } else {
                if (f[1] === 0) {
                    g.push(c[f[0]]);
                } else {
                    g.push(c[f[0]] + ' ' + a[f[1]]);
                }
            }
        }
        if (f.length === 3) {
            if (f[1] === 0 && f[2] === 0) {
                g.push(a[f[0]] + ' ' + d[0]);
            } else {
                if (f[1] === 0 && f[2] != 0) {
                    g.push(a[f[0]] + ' ' + d[0] + ' ' + a[f[2]]);
                } else {
                    if (f[1] === 1) {
                        g.push(a[f[0]] + ' ' + d[0] + ' ' + b[f[2]]);
                    } else {
                        if (f[2] === 0) {
                            g.push(a[f[0]] + ' ' + d[0] + ' ' + c[f[1]]);
                        } else {
                            g.push(a[f[0]] + ' ' + d[0] + ' ' + c[f[1]] + ' ' + a[f[2]]);
                        }
                    }
                }
            }
        }
    }
    return g.join('');
}
