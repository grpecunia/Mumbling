function accum(s) {
let input = s.toUpperCase().split('')
  for (let i = 0; i < s.length; i++) {
  input[i] = input[i] + input[i].repeat(i).toLowerCase()
  }
  return input.join('-')
}