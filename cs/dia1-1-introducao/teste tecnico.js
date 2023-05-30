const input = [-1, 1, 3, 3, 3, 2, 3, 2, 1, 0];

function particleVelocity(particles) {
  let output = 0;
  let count = 0;
  for (let n = 0; n <= input.length; n += 1) {
    if ((input[n + 1] - input[n]) === (input[n + 2] - input[n + 1])) {
      count += 1;
      output += count;
    } else {
      count = 0
    }
  }

  return output < 10000000000 ? output : -1
}

console.log(particleVelocity(input))
