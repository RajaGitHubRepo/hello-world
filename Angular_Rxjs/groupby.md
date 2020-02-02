console.clear()
import { from, of, zip } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

const people = [
  { name: 'Sue', age: 25, location : "usa" },
  { name: 'Joe', age: 30,location : "India"  },
  { name: 'Frank', age: 25, location : "Kk"  },
  { name: 'Sarah', age: 35, location : "PP"  }
];

from(people).pipe(
  groupBy(person => person.age, p => { return { name : p.name, Location : p.location }}),
  mergeMap(group => zip(of(group.key), group.pipe(toArray())))
).subscribe(console.log);
