module.expots = {
    seleccionarSkills : (seleccionadas = [], opciones) => {
        const skills = ['KTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'JQuery', 'Node', 'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'RPGLE', 'RPG Full Free', 'SQL', 'GraphQL', 'TypeScript', 'C#', 'PHP', 'Laravel', 'Symphony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'MVC', 'SASS', 'WordPress']; 

        let html = '';
        skills.forEach(skill => {
            html += `
                <li>${skill}</li>`
        });

        return html;
    }
}