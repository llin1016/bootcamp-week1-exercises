/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

const noun1 = "my sister"
const noun2 = "monkey"
const noun3 = "fire hydrant"

const adj1 = "silly"
const adj2 = "red"
const adj3 = "ginormous"
const adj4 = "grey"

const verb1 = "rain"
const verb2 = "pour"

const story = `
Yesterday, ${noun1} and I went to the park. On our way to the park, we saw a ${adj1} ${noun2} on a bike. We also saw big ${adj2} balloons tied to a ${noun3}. Once we got to the ${adj3} park, the sky turned ${adj4}. It started to ${verb1} and ${verb2}.
`

console.log(story)
