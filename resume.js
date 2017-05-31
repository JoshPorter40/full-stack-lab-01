
var name = ('Josh Porter');
var career = ('Climbing Wall Instructor');
var description = ('Twenty-two years old, preparing to start my career as a developer');


console.log('Name: ' + name.toUpperCase());
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

console.log('');

function displaySkill(skill, cool) {
        if(skill === cool) {
        console.log('Bam: ' + skill);
 } else {
        console.log(skill);
 }
}
 console.log('My Skills:');
displaySkill('Critical thinking');
displaySkill('Problem solving', 'Problem solving');
displaySkill('Driving a manual transmission');
displaySkill('Javascript', 'Javascript');






