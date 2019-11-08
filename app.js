'use strict'

const peopleTemplate = Handlebars.compile( $('#person-template').html());
const container = $("people");

function renderPerson(person){
  let html = peopleTemplate(person);
  container.append(html);
}

$.get('http://localhost:3000/people')
  .then(people =>{
    people.forEach(person =>{
      renderPerson(person);
    })
  });
  