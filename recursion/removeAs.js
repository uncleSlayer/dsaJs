const text = 'Hellaaaaao'

function rma(index, ans) {

    if (index === text.length - 1) {
        console.log(ans);
        return 
    }

    if (!text[index] === 'a') {
        ans += text[index]
        rma(index + 1, ans)
    } else {
        rma(index + 1, ans)
    }
}

rma(0, text)