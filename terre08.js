#! node

const arg = process.argv
const arg2 = process.argv[2]
const num = arg2 - 1

if (arg.length !== 3) {
  console.log("Veuillez indiquer au script, qu'un seul argument")
} else if (!isNaN(num)){
  console.log("Veuillez indiquer au script, un string en argument. Ex : node terre08.js \"Le ciel est bleu\"")
} else {
  console.log(arg2.length)
}
