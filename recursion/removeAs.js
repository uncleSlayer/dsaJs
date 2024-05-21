const text = 'Hellaaaaao'

function rma(index, ans) {

    if (index >= text.length) {
        console.log(ans);
        return 
    } else {
        if (text[index] === 'a') {
            rma(index + 1, ans)
        } else {
            ans+=text[index]
            rma(index + 1, ans)
        }
    }
    
}

rma(0, '')