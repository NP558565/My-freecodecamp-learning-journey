/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/

function convertHTML(str) {
  
  let characters = [/&/g, /</g, />/g, /\"/g, /\'/g];
  let entities = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  
  for(let i = 0; i < characters.length; i++) {
    str = str.replace(characters[i], entities[i]);
  }
  
  return str;
}