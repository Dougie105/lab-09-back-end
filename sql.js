let name = ['Terrell', 'Douglas'];

let SQL = `
insert into people (first_name, last_name)
values($1, $2)
`;

client.query(SQL, name);