import { ContentData } from './ContentData';

const data: ContentData = {
  general: {
    email: 'eldeniyenden@gmail.com',
    github: 'https://github.com/eldeni/',
    introduction: {
      p1: 'I write code, and think over observations. Learning is what drives me the most. Other than doing some projects on the side as a pastime, I listen to music and dj.',
    },
    linkedIn: 'https://www.linkedin.com/in/eldenpark/',
    name: 'Elden Park',
    photoUrl: '/g/assets/elden-2-reduced.jpg',
  },
  groups: {
    aboutDesc: {
      id: 'about_desc',
      items: [
        {
          children: [
            {
              label: '<small>* If you\'d like to see my professional resume, please contact me.</small>',
              type: 'text',
            },
          ],
        },
      ],
      label: '',
      type: 'message',
    },
    activities: {
      id: 'extracurricular_activities',
      items: [
        {
          children: [
            {
              label: 'Worked on a number of Android application projects, self-taught.',
              type: 'text',
            },
          ],
          title1: 'Mashup (Product development group), Seoul, South Korea',
          title2: '01/2018 - 12/2018',
        },
        {
          children: [
            {
              label: 'Studied Apache Hadoop and the ecosystem',
              type: 'text',
            },
          ],
          title1: 'Designing and Building Big Data Applications workshop, Cloudera, San Jose, CA',
          title2: '06/2016',
        },
        {
          children: [
            {
              label: 'Student representative of an overseas workshop program, organized by Korea University',
              type: 'text',
            },
          ],
          title1: 'Silicon Valley technology and entrepreneurship workshop, San Jose, CA',
          title2: '06/2016',
        },
        {
          children: [
            {
              label: 'Chaired an international youth forum on histrical reconciliation in East Asia',
              type: 'text',
            },
          ],
          title1: 'UNESCO International Youth Forum (2013), Seoul, South Korea',
          title2: '07/2013',
        },
        {
          children: [
            {
              label: 'Supported a local community project',
              type: 'text',
            },
          ],
          title1: 'International Workcamp, Kathmandu, Nepal',
          title2: '07/2012',
        },
        {
          children: [
            {
              label: 'Military service',
              type: 'text',
            },
          ],
          title1: '705th Special Assault Regiment, Republic of Korea Army',
          title2: '12/2009 - 10/2011',
        },
        {
          children: [
            {
              label: 'Studied old East Asian languages',
              type: 'text',
            },
          ],
          title1: 'Research Institute of Korean Studies, Korea University',
          title2: '07/2009 - 03/2012',
        },
        {
          children: [
            {
              label: 'Studied at a French language institution',
              type: 'text',
            },
          ],
          title1: 'Lyon Bleu, Lyon, France',
          title2: '01/2009 - 05/2009',
        },
      ],
      label: 'EXTRACURRICULAR ACTIVITIES',
      type: 'category',
    },
    awards: {
      id: 'honors_and_actiities',
      items: [
        {
          title1: 'Best lightning talk, KOCSEA Tech Symposium 2019, Korean Computer Scientists and Engineers Association of America',
          title2: '2019',
        },
        {
          title1: 'Cosmos 3rd prize, Defi Hackathon, San Francisco Blockchain Week 2019',
          title2: '2019',
        },
        {
          title1: '3rd place, Viterbi Graduate Hackathon 2019, University of Southern California',
          title2: '2019',
        },
        {
          title1: '3rd prize, Blockathon, University of Southern California',
          title2: '2019',
        },
        {
          title1: 'Finalist, Collegiate open source competition, D2 Campus Fest 2016',
          title2: '2017',
        },
        {
          title1: 'Informatics department scholar, Korea University',
          title2: '2017',
        },
        {
          title1: 'Undergraduate research grant, Creative Challenger Program, Korea University',
          title2: '2016',
        },
        {
          title1: 'Bronze award, LG CNS Hackathon 2015',
          title2: '2015',
        },
        {
          title1: 'Academic scholar, Kookmin University',
          title2: '2014',
        },
      ],
      label: 'HONORS AND AWARDS',
      type: 'category',
    },
    education: {
      id: 'education',
      items: [
        {
          children: [
            {
              label: 'Board member of Dev Nights / Board member of Korean American Scientists and Engineers Association (KSEA), USC',
              type: 'text',
            },
          ],
          title1: '<b>M.S., in Computer Science</b>, University of Southern California, Los Angeles, CA',
          title2: '2019 - Present',
        },
        {
          children: [
            {
              label: 'Student representative of Software Technology and Entrepreneurship Program (STEP, Interdisciplinary program) / Founder of Gokathon',
              type: 'text',
            },
          ],
          title1: '<b>B.S., in Computer Science</b>, Korea University, Seoul, South Korea',
          title2: '2015 - 2017',
        },
        {
          children: [
            {
              label: 'Exchange Program',
              type: 'text',
            },
          ],
          title1: 'University of Utah, Salt Lake City, UT',
          title2: 'Spring 2014',
        },
        {
          title1: 'Kookmin University, Seoul, South Korea',
          title2: '2013 - 2014',
        },
        {
          title1: 'Yeongdong High School, Seoul, South Korea',
          title2: '2005 - 2008',
        },
      ],
      label: 'EDUCATION',
      type: 'category',
    },
    employment: {
      id: 'employment',
      items: [
        {
          children: [
            {
              label: 'Leader of a team of 6 engineers in a startup (Y-Combinator alumni). Worked on projects including e-commerce and data-analytics tool in an Agile work environment',
              type: 'text',
            },
          ],
          title1: '<b>Software Engineer</b> | Memebox',
          title2: 'Seongnam, South Korea',
          title3: '01/2018 - 01/2019',
        },
        {
          children: [
            {
              label: 'Worked on a number of projects including comment system, and digital contents store platform. Primarily focused on handling a massive volume of user traffic',
              type: 'text',
            },
          ],
          title1: '<b>Software Engineer</b> | Naver',
          title2: 'Seongnam, South Korea',
          title3: '01/2017 - 01/2018',
        },
        {
          children: [
            {
              label: 'Worked on a web messenger software that connects business with customers on their websites',
              type: 'text',
            },
          ],
          title1: '<b>Software Engineer Intern</b> | Zoyi',
          title2: 'Seoul, South Korea',
          title3: '07/2016 - 12/2016',
        },
        {
          children: [
            {
              label: 'Software Architecture Team, CTO Division',
              type: 'text',
            },
          ],
          title1: '<b>Software Engineer Intern</b> | LG CNS',
          title2: 'Seoul, South Korea',
          title3: '01/2016 - 02/2016',
        },
      ],
      label: 'EMPLOYMENT',
      type: 'category',
    },
    interests: {
      id: 'interests',
      items: [
        {
          title1: '',
          title2: 'I\'m interested in a wide range of topics in terms of research/engineering. That includes, but not limited to, autonomous network, distributed computing, and their applications to make a next generation web',
        },
      ],
      label: 'INTERESTS',
      type: 'category',
    },
    musicDesc: {
      id: '',
      items: [
        {
          children: [
            {
              label: 'Music has been an integral part of my life. While growing up, I have played a number of different instruments. Now, my interest has been extended over to mixing and possibly producing the sound.',
              type: 'text',
            },
            {
              label: '<p>I\'m a huge fan of trance music but when it comes to the type of songs I listen to, I\'m more of an omnivore. And, as a courtesy of those songs that have impacted me the most in various ways, I decided to keep the record of them. Someday I hope I can post my own releases as well.</p>',
              type: 'text',
            },
            {
              label: '<img src="/g/assets/music-1.jpg" />',
              type: 'multimedia',
            },
          ],
        },
      ],
      label: '',
      type: 'message',
    },
    projectsAbbrev: {
      id: 'projects',
      items: [
        {
          title1: '',
          title2: 'Projects are listed <a href="/projects.html">here</a>',
        },
      ],
      label: 'PROJECTS',
      type: 'category',
    },
    projectsDesc: {
      id: 'projects_desc',
      items: [
        {
          children: [
            {
              label: 'I craft things for fun, or for different purposes. Some I build solely for myself to use, others to present as proof of concept. If you are curious to know about the projects, or would like to suggest a new thing to work on, feel free to hit me up.',
              type: 'text',
            },
          ],
        },
      ],
      label: '',
      type: 'message',
    },
    projectsGeneral: {
      id: 'projects_general',
      items: [
        {
          title1: '<a href="https://eldeni.github.io/moodsic/">Moodsic: Mood classification using spectrograms of sound</a>',
          title2: '2020',
          title3: 'Moodsic classifies songs of your choice according to their mood. It uses GCP\'s AutoML to train the model, JavaScript as mode-app interface, and Python to create spectrograms',
        },
        {
          title1: 'Form: Decentrralized knowledge base',
          title2: '2019',
          title3: 'Knowledge and its revision history served on the peer to peer network',
        },
        {
          title1: '<a href="https://github.com/gradhax/booktrax-streamer">Booktrax: Audiobook generator</a>',
          title2: '2019',
          title3: 'Booktrax generates audiobook based on the raw text you give. Using AWS\'s Polly and GCP\'s Natural Language, it adds synthetic human voice and images pertaining to the phrases',
        },
        {
          title1: '<a href="https://github.com/eldeni/sdpp-media-server">Streaming Data Payment Protocol V2</a>',
          title2: '2019',
          title3: '(Draft) An application-layer client-server protocol that enables purchase of data streams (such as IoT sensor data) through cryptocurrency, with invoice and receipts stored in an immutable distributed ledger',
        },
        {
          title1: '<a href="https://github.com/usc-walkin/operator">Revcoin: Recycling vending machine</a>',
          title2: '2019',
          title3: 'Revcoin gives cryptocurrency (IOTA) to whoever returns the recyclables',
        },
        {
          title1: '<a href="https://github.com/chatty-app/chatty-android">Chatty</a>, "Write diaries with a chatbot"',
          title2: '2018',
          title3: 'Android application. Implemented state propagation in Java, inspired by Redux.js',
        },
        {
          title1: '<a href="https://github.com/eldeni/eldeni.github.io">Personal website</a>',
          title2: '2017',
          title3: 'Personal website. Implemented a static website generator engine first with native JavaScript, later migrated using React.js',
        },
        {
          title1: '<a href="https://gimci.github.io/">Gimci: Korean natural language processor</a>',
          title2: '2016',
          title3: 'Language processor with a noble Romanization scheme. Implemeneted a search engine inspired by Faroo\'s method',
        },
      ],
      label: 'GENERAL',
      type: 'category',
    },
    projectsLibraries: {
      id: 'projects_libraries',
      items: [
        {
          title1: '<a href="https://github.com/eldeni/jege">jege</a>',
          title2: '2019',
          title3: 'Logger written in TypeScript',
        },
        {
          title1: '<a href="https://github.com/eldeni/xongkoro">xongkoro</a>',
          title2: '2019',
          title3: 'Asynchronous data fetcher for server side rendering of React.js (prior to 16.x), inspired by Apollo.js',
        },
        {
          title1: '<a href="https://github.com/eldeni/process-launch">process-launch</a>',
          title2: '2019',
          title3: 'Handy tool to define and run child processes, and process groups',
        },
        {
          title1: '<a href="https://github.com/eldeni/knex-object">knex-object</a>',
          title2: '2019',
          title3: 'Object model definer for Knex.js. Used JavaScript\'s decorator (ECMAScript 2018, Stage2), inspired by Hibernate and other ORMs',
        },
        {
          title1: '<a href="https://github.com/dechartjs/dechart">dechart</a>',
          title2: '2018',
          title3: 'D3 meets React. Pseudo two-way data binding to control DOM manipulation',
        },
        {
          title1: '<a href="https://github.com/eldeni/express-isomorphic">express-isomorphic</a>',
          title2: '2018',
          title3: 'Express.js extended to serve isomorphic application (app running in both client and server sides). Constantly refreshing codes on both sides while developing. This website you\'re now at is built and developed using this library',
        },
      ],
      label: 'LIBRARIES',
      type: 'category',
    },
    talks: {
      id: 'talks',
      items: [
        {
          title1: '<a href="https://2018.feconf.kr/">FEConf 2018</a>, Seoul, South Korea',
          title2: '11/2018',
          title3: '<a href="https://www.slideshare.net/enginehenryed/react-with-d3-dom-manipulation-orchestration-132381218">React with D3: DOM Manipulation Orchestration</a> <a href="https://www.youtube.com/watch?v=_z_6H4x2XDg&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE&index=11">[video]</a>',
        },
      ],
      label: 'TALKS',
      type: 'category',
    },
  },
  views: {
    items: [
      {
        children: [
          {
            type: 'introduction',
            value: 'introduction',
          },
          {
            type: 'menu',
            value: 'menu',
          },
          {
            type: 'group',
            value: 'aboutDesc',
          },
          {
            type: 'group',
            value: 'interests',
          },
          {
            type: 'group',
            value: 'education',
          },
          {
            type: 'group',
            value: 'employment',
          },
          {
            type: 'group',
            value: 'projectsAbbrev',
          },
          {
            type: 'group',
            value: 'activities',
          },
          {
            type: 'group',
            value: 'awards',
          },
          {
            type: 'group',
            value: 'talks',
          },
        ],
        exact: 'true',
        label: 'About',
        url: '/',
        visibleOnMenu: 'true',
      },
      {
        children: [
          {
            type: 'introduction',
            value: 'introduction',
          },
          {
            type: 'menu',
            value: 'menu',
          },
          {
            type: 'group',
            value: 'projectsDesc',
          },
          {
            type: 'group',
            value: 'projectsGeneral',
          },
          {
            type: 'group',
            value: 'projectsLibraries',
          },
        ],
        label: 'Projects',
        url: '/g/projects.html',
        visibleOnMenu: 'true',
      },
      {
        children: [
          {
            type: 'introduction',
            value: 'introduction',
          },
          {
            type: 'menu',
            value: 'menu',
          },
          {
            type: 'group',
            value: 'musicDesc',
          },
          {
            type: 'blog',
            value: 'music',
          },
        ],
        label: 'Music',
        url: '/g/music.html',
        visibleOnMenu: 'true',
      },
      {
        children: [
          {
            type: 'menu',
            value: 'menu',
          },
          {
            type: 'blogDetail',
            value: 'music',
          },
        ],
        label: 'Music Detail',
        url: '/g/music/:blogId',
        visibleOnMenu: 'false',
      },
    ],
  },
};

export default data;
