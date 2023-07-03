/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Seminole High School',
    position: 'AP Calculus Instructor',
    url: 'https://seminolehs.scps.k12.fl.us/',
    startDate: '2022-08-01',
    summary: 'Seminole High School is a Florida public high school '
    + 'within Seminole County Public Schools. The school offers the International Baccalaureate Diploma Programme. '
    + ' With over 4000 students, it is the largest school in the district.',
    highlights: [
      'Taught three classes of AP Calculus AB and three classes of Algebra II honors.',
      'Mentored the Technology Student Association.',
      'Counseled five IB students on their International Baccalaureate computer science extended essays.',
    ],
    category: 'Teaching Experience',
  },
  {
    name: 'Coral Gables Senior High',
    position: 'AP and IB Computer Science Instructor',
    url: 'https://www.coralgablescavaliers.org/',
    startDate: '2017-08-01',
    endDate: '2022-07-01',
    summary: 'Coral Gables High School is a Florida public high school '
    + 'within Miami Dade Public Schools. The school offers the International Baccalaureate Diploma Programme. '
    + ' The school typically has over 3000 students, with more than 80% of Hispanic descent.',
    highlights: [
      'Led AP Computer Science classes to have pass rates that were over 20% greater than district average.',
      'Prepared students in HTML/CSS, Python, JavaScript, and Java, with students earning over 100 certifications, a record within Miami-Dade Public Schools.',
      'Taught over 150 students a year in different subjects, including AP Computer Science Principles, AP Computer Science A, IB computer science, IB mathematics, Algebra II, and Legal Studies.',
    ],
    category: 'Teaching Experience',
  },
  {
    name: 'Florida International University',
    position: 'National Science Foundation Research Experience for Teachers Fellow',
    url: 'https://it2.fiu.edu/IT2_RET.php',
    startDate: '2019-06-24',
    endDate: '2022-08-01',
    summary: 'The Research Experiences for Teachers (RET) fellowship '
    + 'is a selective opportunities for science, math, and technology teachers from South Florida to collaborate '
    + 'with faculty at Florida International University\'s School of Computing and Information Sciences. ',
    highlights: [
      'Analyzed activation functions for adversarial machine learning algorithms',
      'Researched Erdős–Rényi graphs and algorithms for network defense across various topologies',
      'Implemented a machine learning model for sentiment analysis with Python\'s TextFooler module',
      'Earned repeated acceptance to the fellowship, an honor awarded to less than ten percent of fellows during these three years.',
    ],
    category: 'Teaching Experience',
  },
  {
    name: 'Magen David Academy',
    position: 'Math Department Chairperson, Teacher, and Consultant',
    url: 'https://www.mdacademy.us/',
    startDate: '2015-08-01',
    endDate: '2017-07-01',
    summary: ' ',
    highlights: [
      'Oversaw math department vertical alignment and teachers, from elementary school through high school.',
      'Taught courses in AP Calculus (AB and BC), AP Statistics, Algebra II, Algebra I, and Personal Finance.',
    ],
    category: 'Teaching Experience',
  },
  {
    name: 'Yeda Plus',
    position: 'Teacher, Consultant, and Editor',
    url: 'https://yedaplus.com/',
    startDate: '2014-01-01',
    endDate: '2017-12-31',
    summary: ' ',
    highlights: [
      'Taught quantitative and logical reasoning classes for tests such as the GRE, SAT, and LSAT.',
      'Advised students during their application processes to undergraduate and graduate programs.',
    ],
    category: 'Teaching Experience',
  },
  {
    name: 'DeJusticia',
    position: 'Legal Researcher in Department of Transitional Justice',
    url: 'https://www.dejusticia.org/',
    startDate: '2013-06-01',
    endDate: '2013-12-01',
    summary: ' ',
    highlights: [
      'Researched amnesty agreement guidelines for Colombia\'s peace negotiations.',
      'Studied the concept of joint criminal enterprise and how it applies to the conflict in Colombia.',
    ],
    category: 'Legal Experience',
  },
  {
    name: 'Bronx Defenders',
    position: 'Legal Intern',
    url: 'https://www.bronxdefenders.org/',
    startDate: '2013-01-01',
    endDate: '2013-05-01',
    summary: ' ',
    highlights: [
      'Drafted affidavits and motions to help clients enforce their procedural rights.',
      'Updated the criminal law department on developments in New York criminal law.',
    ],
    category: 'Legal Experience',
  },
  {
    name: 'The Office of the Georgia Attorney General',
    position: 'Extern',
    url: 'https://law.georgia.gov/',
    startDate: '2012-09-01',
    endDate: '2012-12-01',
    summary: ' ',
    highlights: [
      'Investigated the scope of Georgia\'s sovereign immunity for defenses in tort claims against the State.',
      'Wrote and researched motions of dismissal for failure to comply with the Georgia Tort Claims Act.',
    ],
    category: 'Legal Experience',
  },
  {
    name: 'Transitional Justice Institute, University of Ulster',
    position: 'Legal Intern for Conflict Resolution Research',
    url: 'https://www.ulster.ac.uk/faculties/arts-humanities-and-social-sciences/transitional-justice-institute',
    startDate: '2012-06-01',
    endDate: '2012-08-01',
    summary: ' ',
    highlights: [
      'Undertook a study of the duty to prosecute for the Institute\'s amnesty guidelines and commentary.',
      'Cataloged the perception of constitutionalism in post-conflict regimes from around the globe.',
    ],
    category: 'Legal Experience',
  },
  {
    name: 'The Resettlement Legal Aid Project',
    position: 'Legal Intern',
    url: '',
    startDate: '2011-06-01',
    endDate: '2011-08-01',
    summary: ' ',
    highlights: [
      'Interviewed Sudanese and Iraqi refugees to learn the facts that caused their flight from their homelands.',
      'Prepared memoranda advocating the refugees\' asylum claims before the United Nations.',
    ],
    category: 'Legal Experience',
  },
  {
    name: 'Supreme Court of Israel',
    position: 'Foreign Law Clerk, Justice Hanan Melcer',
    url: '',
    startDate: '2010-06-01',
    endDate: '2010-08-01',
    summary: ' ',
    highlights: [
      'Drafted memoranda analyzing administrative, constitutional, immigration, and human rights issues.',
      'Researched American, British, and Canadian law to provide a comparative analysis vis-à-vis Israeli law.',
    ],
    category: 'Legal Experience',
  },
  {
    name: 'The Australia/Israel & Jewish Affairs Council (AIJAC)',
    position: 'Goldman Fellow',
    url: '',
    startDate: '2009-06-01',
    endDate: '2009-08-01',
    summary: ' ',
    highlights: [
      'Monitored the Arabic-language media of Australia.',
      'Provided sources for a parliamentary submission on the classification of Hezbollah as a terrorist group.',
    ],
    category: 'Middle East Experience',
  },
  {
    name: 'The Israel Project',
    position: 'Media Fellow',
    url: '',
    startDate: '2008-01-01',
    endDate: '2008-12-31',
    summary: ' ',
    highlights: [
      'Researched and wrote historical papers and press releases for international journalists.',
      'Translated Arabic, Hebrew, and English documents for research, media review, and publications.',
    ],
    category: 'Middle East Experience',
  },
  {
    name: 'Israel Defense Forces',
    position: 'Paratrooper',
    url: '',
    startDate: '2005-01-01',
    endDate: '2007-12-31',
    summary: ' ',
    highlights: [
      'Trained extensively in leadership and field combat to command teams of up to thirty soldiers.',
      'Translated between the Arabic speaking populations and the Israeli soldiers during missions.',
    ],
    category: 'Middle East Experience',
  },
];

export default work;
