function nums(count) {
   if (count === 6) return
   
   console.log(count);
   count++
   nums(count)
}

nums(1)