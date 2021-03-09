const sentence = "hello there from lighthouse labs";

let delay = 0;
const typeWrite = (string) => {

  // loop over the sentence
  for (const char of string) {
    // print out each character on the same line after a delay
    setTimeout(() => {
      process.stdout.write(char);

    }, delay);
    delay += 50;
  }
  console.log(delay);
  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
};



/*
from W3School:

let i = 0;
let txt = 'Lorem ipsum dummy text blabla.';
const speed = 50;

const typeWriter = () => {
  if (i < txt.length) {
    process.stdout.write(txt[i]);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    process.stdout.write('\n');
  }
}; */

typeWrite(sentence);
// typeWriter();