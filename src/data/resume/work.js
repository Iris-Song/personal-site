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
    name: 'NIO',
    position: 'Software Engineer Intern',
    // url: 'https://seminolehs.scps.k12.fl.us/',
    startDate: '2023-01-03',
    endDate: '2023-06-30',
    summary: ' · Machine Learning · Python (Programming Language) · SQL · C++ · Hadoopt',
    highlights: [
      'Designed and implemented Big-data calculation of traffic light timing at intersections using statistical methods and Machine Learning model.',
      'Parsed protobuf file, processed and analyzed NIO vehicle data on Tencent Cloud Platform using Hive SQL, Python (pandas, numpy, matplotlib, pyspark), C++',
      'Collaborated with team members and utilized left turn trajectory fitting based on history NIO vehicle data to refine basemap to improve Autonomous Driving.',
      'Calculated score of each link in basemap using Hive SQL, Python in order to determine whether function of Autonomous Driving can be activated.',
    ],
    category: 'Internship Experience',
  },
  {
    name: 'Microsoft',
    position: 'Customer Engineer Intern',
    url: 'https://www.coralgablescavaliers.org/',
    startDate: '2022-07-04',
    endDate: '2022-12-01',
    summary: ' · Microsoft Azure · Microsoft Power Automate · Microsoft Office · Communication · Python',
    highlights: [
      'Developed scripts using Python and Power Automate to scrape Q&A of Microsoft Cloud Product in websites and documents. Created Microsoft Cloud Product Knowledge Base of Q&A using SQL and Excel.',
      'Utilized a chat bot using Microsoft Azure service to automatically answer questions of Microsoft products. Integrated the bot into Microsoft Teams, increasing product usage.',
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
    summary: ' · HTML · CSS · React.js · JavaScript · Node.js · Python',
    highlights: [
      'Designed and developed whole front end of New Energy Vehicle Knowledge Map System funded by Volkswagen using Git, React, reducing the time their staff spent on analyzing supply chain relationships.',
      'Assisted in information extraction from financial reports of listed vehicle companies using OCR, NLP',
    ],
    category: 'Research Experience',
  },
];

export default work;
