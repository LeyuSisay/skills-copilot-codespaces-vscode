function skillsMember() {
  return {
    name: 'John Doe',
    age: 30,
    skills: ['Javascript', 'HTML', 'CSS'],
    showSkills: function() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}