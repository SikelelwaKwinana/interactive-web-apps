// From typo + curly brackets

import { company } from './configuration.js' 
import { year } from './configuration.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message

//console.log(message)