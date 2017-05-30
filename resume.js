/* Your name
Your career/field
A short description of yourself
A list of your interests
A list of your past positions that includes company/place name, title, short description of what you did
A list of your skills
*/


var name = ('Josh Porter');
var career = ('Climbing Wall Instructor');
var description = ('Twenty-two years old, preparing to start my career as a developer');


console.log('Name: ' + name);
console.log('Career: ' + career);
console.log('Description: ' + description);

function interests(activity) {
        console.log(activity);
}

console.log(' ');

console.log('My Interests:');
interests('Rock climbing');
interests('Coding');
interests('Watching films');
interests('Nature');

console.log(' ');

function displayPosition(title, company, description) {
   
        console.log(title + 'at ' + company + '-- ' + description);
 }

console.log();

console.log('My Previous Employers:');
displayPosition('AutoCad intern ', 'Bailey Bridges ', 
'I worked along with the detailers as they designed the bridges in AutoCad.');
displayPosition('Truck dispatcher ', 'Cleared Direct Transport ', 
'I would find shipments for the trucks to deliver.');
displayPosition('Fitness instructor ', 'Wills Valley Recreational Center ', 
'I worked in the weight-lifting room spotting members and maintaining safety.');




