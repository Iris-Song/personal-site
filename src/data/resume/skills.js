const skills = [
  {
    title: 'Go',
    competency: 3,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'Ruby',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Object Oriented Programming', 'Languages', 'Backend', 'Game Development'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Languages', 'Object Oriented Programming', 'Backend', 'Game Development'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Frontend'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Frontend'],
  },
  {
    title: 'Java',
    competency: 2,
    category: ['Object Oriented Programming', 'Languages', 'Java'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Frontend', 'Framework'],
  },
  {
    title: 'Vue',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Frontend', 'Framework'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Springboot',
    competency: 2,
    category: ['Web Development', 'Java', 'Backend', 'Framework'],
  },
  {
    title: 'HTML + CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Engineering', 'Javascript'],
  },
  {
    title: 'Django',
    competency: 2,
    category: ['Web Development', 'Python', 'Framework', 'Backend'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'MATLAB',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Spark',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Hadhoop',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Power Automate',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Microsoft Office',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['Tools', 'Cloud', 'Platform', 'Web Development'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Tools', 'Cloud', 'Platform', 'Web Development'],
  },
  {
    title: 'OpenGL',
    competency: 2,
    category: ['Tools', 'Game Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
