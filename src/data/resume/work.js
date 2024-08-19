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
    name: 'TikTok',
    position: 'Software Engineer Intern',
    url: 'https://www.tiktok.com/',
    startDate: '2024-05-20',
    endDate: '2024-08-09',
    summary: 'Montenization - Lead Ads',
    highlights: [
      'Implemented CRM form pagination in database, backend and frontend, increasing search speed by 230%.',
      'Designed architecture and implemented Klaviyo direct integration in TikTok Ads Manager using Go, Kitex, and React.',
      'Collaborated with TikTok Business Plugin team implemented TikTok CRM integration in Salesforce Market Cloud.',
    ],
    category: 'Internship Experience',
  },
  {
    name: 'One Community Global',
    position: 'Software Engineer',
    url: 'https://www.onecommunityglobal.org/',
    startDate: '2023-09-20',
    endDate: '2024-01-03',
    summary: '',
    highlights: [
      'Developed a Labor tracking website using MERN stack (MongoDB, Express.js, React, Node.js).',
      'Built CI/CD using Github Actions to automate deployment, using GitHub ecosystem for project management, issue tracking and code review.',
    ],
    category: 'Part-time Experience',
  },
  {
    name: 'NIO',
    position: 'Machine Learning Engineer Intern',
    url: 'https://www.nio.com',
    startDate: '2023-01-03',
    endDate: '2023-06-30',
    summary: 'Map Localization - Autonomous Driving',
    highlights: [
      'Designed and implemented big data calculations for traffic light timing at intersections using statistical models and LSTM, achieving 78% accuracy on test intersections.',
      'Parsed protobuf files, processed, and analyzed NIO vehicle data on Cloud Platform using Hadoop, and C++.',
      'Improved Autonomous Driving basemap using a left-turn trajectory fitting algorithm based on historical vehicle data, reducing error cases by 13.58%.',
      'Calculated score of each link in basemap using HiveSQL, Spark to determine whether function of Autonomous Driving can be activated, deployed using Kubernetes, reducing the error cases by 13.58%.',
    ],
    category: 'Internship Experience',
  },
  {
    name: 'Microsoft',
    position: 'Cloud Solution Architect Intern',
    url: 'https://www.microsoft.com',
    startDate: '2022-07-04',
    endDate: '2022-12-01',
    summary: 'MCAPS - CSU - Modern Work',
    highlights: [
      'Developed scripts using Python and Power Automate to scrape Q&A of Microsoft Cloud Product in websites and documents. Created Cloud Product Q&A Knowledge Base using Python, SQL and Excel.',
      'Built a chat bot using Azure Cognition Service to automatically answer product questions. Integrated the bot into Microsoft Teams, increasing product usage by 4.75%.',
      'Assisted in Microsoft CSU internal SharePoint Site design and development.',
    ],
    category: 'Internship Experience',
  },
  {
    name: 'ADMIS Lab, Tongji University',
    position: 'Research Assistant',
    url: 'https://it2.fiu.edu/IT2_RET.php',
    startDate: '2021-07',
    endDate: '2022-06',
    // summary: ' · HTML · CSS · React.js · JavaScript · Node.js · Python',
    highlights: [
      'Designed and developed frontend of New Energy Vehicle Knowledge Map System funded by Volkswagen to virtualize data retrieved from Neo4j using Vue, deployed it on AWS, built CI/CD using CodePipeline.',
      'Designed algorithm in extracting data from vehicle companies’ financial reports using OCR and NLP (Albert, biLSTM).',
    ],
    category: 'Research Experience',
  },
];

export default work;
