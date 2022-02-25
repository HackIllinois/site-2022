// export type Category = { name: string, angle: number };
// export type Categories = [Category, Category, Category, Category];
// export type CategoryIndex = 0|1|2|3;
// export const categories: Categories = [
//   { name: 'Data Science', angle: 10 },
//   { name: 'Languages', angle: -10 },
//   { name: 'Systems', angle: 7 },
//   { name: 'Web Dev', angle: -4 },
// ];

// type Mentor = { imageURL: string, name: string, description: string };
// const mentors: Mentor[] = [
//   {
//     imageURL: '/assets/mentor_photos/pablo_aguiar.png',
//     name: 'Pablo Aguiar',
//     description: "Pablo is a computer scientist working as a lead software engineer at MindYourRights, where he's co-authoring a disruptive, common platform for global music rights management. He's passionate about computer programming, cycling, and coffee. He's been an active open source contributor for at least 15 years, writing mostly in Python, Go, and JavaScript. For the last few years, he found himself in love with Elixir and Rust. He's very excited to return to HackIllinois as a mentor for the 4th consecutive year!",
//   },
//   {
//     imageURL: '/assets/mentor_photos/gino_corrales.jpg',
//     name: 'Gino Corrales',
//     description: "Gino Corrales is a developer team lead for Caterpillar Inc. in the Cybersecurity Division. Gino was always passionate for mobile wearables, security and software development technologies. Prior to joining Caterpillar, Gino was a mobile developer for State Farm at the University of Illinois Research Park and was responsible for leading a group of interns for almost two years. Gino earned a Computer Science degree from Illinois State University and realized studies of Systems Engineering back at his hometown's university - Universidad Catolica de Santa Maria - in Arequipa, Peru.",
//   },
//   {
//     imageURL: '/assets/mentor_photos/vivek_bhookya.jpg',
//     name: 'Vivek Bhookya',
//     description: 'CS + Astro 2020 grad -> SDE1 Amzn with 2.6 GPA. I work on an adult-content blocker in my free time, PorNo!, and I am interested in using tech for social and environmental good.\nAsk me anything. GitHub / IG @mrvivacious.',
//   },
//   {
//     imageURL: '/assets/mentor_photos/patrick_gallagher.jpg',
//     name: 'Patrick Gallagher',
//     description: "I'm a graduating senior who will be starting with Target as a Software Engineer this summer. At U of I, I have been involved with CS 126 for seven semesters, where I helped design MPs, created instructional videos, lectured every now and then, and led too many code reviews to count.",
//   },
//   {
//     imageURL: '/assets/mentor_photos/default.png',
//     name: 'Stephen Getty',
//     description: 'Alumni of CS @ UIUC 2014.  I work in the defense industry focused on embedded software development. Avid hockey / Chicago Blackhawks fan.',
//   },
//   {
//     imageURL: '/assets/mentor_photos/josh_castor.jpg',
//     name: 'Joshua Castor',
//     description: "I'm an Advanced Software Engineer at Relativity. I graduated from UIC with a Bachelors in Computer Science on Fall 2018 and have been working at Relativity since 2019. Working on front-end code is my area of expertise and it is also where I tend to have the most fun programming on.",
//   },
//   {
//     imageURL: '/assets/mentor_photos/default.png',
//     name: 'Bori Oludemi',
//     description: 'Currently a manager/tech lead at Capital One. I love programming and also soccer. Feel free to reach out to me about any of these two topics',
//   },
//   {
//     imageURL: '/assets/mentor_photos/default.png',
//     name: 'Bhavani Vegesna',
//     description: 'Software engineering from Capital One',
//   },
//   {
//     imageURL: '/assets/mentor_photos/lijian.jpg',
//     name: 'Lijian Yu',
//     description: 'Senior Data Scientist, Abbvie',
//   },
//   {
//     imageURL: '/assets/mentor_photos/default.png',
//     name: 'Heather Huynh',
//     description: 'Heather is currently a Software Engineer at Facebook. Previously, she was a Masters student at UIUC with a focus in HCI.',
//   },
//   {
//     imageURL: '/assets/mentor_photos/default.png',
//     name: 'Zihao Zhang',
//     description: 'Backend Software in GTC center',
//   },
//   {
//     imageURL: '/assets/mentor_photos/noel_johny.jpeg',
//     name: 'Noel Johny',
//     description: 'I am a IT Analyst at Caterpillar.',
//   },
//   {
//     imageURL: '/assets/mentor_photos/default.png',
//     name: 'Ryan Cunningham',
//     description: 'A lecturer in CS with experience in digital forensics, security, and bioinformatics. Interested in ethics, law, and policy. A UC Bearcat, UCF Knight, and Fighting Illini.',
//   },
//   {
//     imageURL: '/assets/mentor_photos/default.png',
//     name: 'Gaurav Agerwala',
//     description: 'I am currently an IIoT Software Engineer at Schlumberger with experience in a variety of software technologies and a passion for problem solving. ',
//   },
//   {
//     imageURL: '/assets/mentor_photos/josh_sanchez.jpg',
//     name: 'Joshua Sanchez',
//     description: 'UIUC Computer Engineering Senior and CS126 Course Staff. Experienced with embedded systems design, mobile development, web development, and systems programming. Committed full-time to Chicago software startup Quicket Solutions :)',
//   },
// ];

// export default mentors;

type Mentor = { imageURL: string, name: string, description: string };
const mentors: Mentor[] = [
  {
    imageURL: '/assets/mentor_photos/brett_koonce.jpeg',
    name: 'Brett Koonce',
    description: 'Brett Koonce is the CTO/co-founder of Quarkworks, a mobile consulting agency. He has worked on dozens of apps and contributed code to many different open source projects. He enjoys building and scaling teams to solve interesting problems.',
  },
  {
    imageURL: '/assets/mentor_photos/sreekrishnan_ramachandran.png',
    name: 'Sreekrishnan Ramachandran',
    description: 'I am an information management engineer with Schlumberger. Working on Production Analytics Team to define, design, develop, monetize and commercialize an integrated state-of-the-art Big Data Analytics platform for Oil & Gas',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Jessica Zhang',
    description: 'I am currently a software engineer at Qualcomm working on display drivers for Linux. I recently graduated from University of Maryland with a degree in Computer Science. I play the saxophone  and love hiking. ',
  },
  {
    imageURL: '/assets/mentor_photos/jacqueline_osborn.jpg',
    name: 'Jacqueline Osborn',
    description: 'I graduated from UIUC CS in 2021, and am currently a Software Engineer at Stripe, working on Stripe Elements.  I am a big fan of going to parks (when I have the motivation to go outside) and playing random video games in my free time :)',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Robert Miroballi',
    description: 'Principal Architect at nvisia, providing consulting on architecture, design, DevSecOps, and new technologies. 25 years experience developing enterprise systems for insurance, medical, financial and other industries. Proficient in most mainstream languages. Experience with Blockchain, DevSecOps, Cloud Infrastructure (AWS, Azure, GCP), various Architectural approaches (Micoservices, Event Driven, etc), Project Management.',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Jianzhong Song',
    description: 'I am a full stack software engineer: embedded system, dotnet, cloud and web',
  },
  {
    imageURL: '/assets/mentor_photos/vanessa_simoes.jpg',
    name: 'Vanessa Simoes',
    description: 'Vanessa is an Applied Mathematician working as Senior Data Scientist in Schlumberger building ML models to extract information from subsurface data to unlock access to energy. Vanessa has interest in performing mathematical modeling, and in solving problems related to energy or environment.',
  },
  {
    imageURL: '/assets/mentor_photos/kyle_begovich.jpg',
    name: 'Kyle Begovich',
    description: 'Software Engineer at Google, Privacy and Data Protection. UIUC Math & CS class of 2020. I am a big fan of hackathons and the opportunity they provide for students to develop their ideas into real projects. Looking forward to helping throughout the event!',
  },
  {
    imageURL: '/assets/mentor_photos/ray_sun.jpeg',
    name: 'Ray Sun',
    description: 'Hi, I am Ray, I graduated UIUC in May 2020! I was in the combined BS-MS program for CS. Since then, I have been working at Facebook on the Messenger Privacy team, where we are developing end-to-end encrypted chats.',
  },
  {
    imageURL: '/assets/mentor_photos/hrishabh_sharma.jpeg',
    name: 'Hrishabh Sharma',
    description: 'I am a Software Engineer from India, working in financial domain at HSBC. From my college years, I am always excited to participate in hackathons and contribute in any possible way. I have participated, mentored and also organised several hackathons, and looking forward to continue that. ',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Alex Ackerman',
    description: 'Software Engineer at Grainger building REST API microservices (mostly dev, some ops). Previously spent time in server support and working on Grainger\'s Android app. U of I alum, 2019',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Praveen Kumar Meenakshi Sundaram Gandhi',
    description: 'I am cloud Software Engineer at Schlumberger working on seismic data visualization and processing on cloud.',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Heather Huynh',
    description: 'Hi! I\'m Heather, a software engineer at Meta. I love to hike in my free time and play video games. When I am not coding or hiking, food is my passion. I love trying new food whether through cooking it myself or going to a restaurant.',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Matt Mariutto',
    description: 'Software engineer with over 6 years of industry experience. Full stack with speciality in Java, React, and Angular',
  },
  {
    imageURL: '/assets/mentor_photos/gino_corrales.jpg',
    name: 'Gino Corrales',
    description: 'Gino Corrales is a developer IAM Team Lead for Caterpillar Inc. in the Cybersecurity Division for almost 10 years. Gino was always passionate for mobile wearables, security and software development technologies. Prior to joining Caterpillar, Gino was a mobile developer for State Farm at the University of Illinois Research Park and was responsible for leading a group of interns for almost two years. Gino earned a Computer Science degree from Illinois State University and realized studies of Systems Engineering back at his hometown\'s university - Universidad Catolica de Santa Maria - in Arequipa, Peru.',
  },
  {
    imageURL: '/assets/mentor_photos/ken_taylor.jpg',
    name: 'Ken Taylor',
    description: 'Ken Taylor currently serves as the Cloud Architect at the University of Illinois Urbana-Champaign. For the past twelve years he has focused on large-scale data analytics and data engineering using cloud technologies in a variety of industries including agriculture, Internet advertising and finance. He has been mentoring and lecturing on entrepreneurship topics for many years. He got his start in entrepreneurship by co-founding a computer consulting company where he helped secure venture capital funding for a fingerprint biometric device.',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Dipro Ray',
    description: 'Hello! I\'m a SWE at Meta working on Video Creation & Publishing Experiences. I graduated from UIUC last year and I\'m excited to be back as a mentor and support HackIllinois participants!',
  },
  {
    imageURL: '/assets/mentor_photos/adam_brunner.jpg',
    name: 'Adam Brunner',
    description: 'Hey! My name is Adam. I have been a Software Engineer at Deere for 12 years. I graduated from UIUC in 2011 with a BS in Computer Science. I grew up in Crystal Lake, Illinois. At Deere, most of my time has been spent developing custom software for our agronomic solutions. This involves creating containerized solutions to expose aggregated sensor information to our farmers to help them plan better for next season.',
  },
  {
    imageURL: '/assets/mentor_photos/dan_worlton.jpg',
    name: 'Dan Worlton',
    description: 'John Deere Sr Technical Coach with 14 years experience at Deere working in a variety of business units and technologies. Like to focus on DevOps/XP best practices and delve into how to improve developer experience and automate everything.',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Jiaqi Wu',
    description: 'Hi, I\'m Jiaqi! I\'m a software engineer at Meta working on understanding developer efficiency. Previously, I was a grad student at UIUC doing research in bioinformatics. In my spare time, I enjoy hiking, attending farmer\'s markets, and owning too many plants.',
  },
  {
    imageURL: '/assets/mentor_photos/jason_coombs.jpeg',
    name: 'Jason R. Coombs',
    description: 'Jason R. Coombs (jaraco) is an enthusiastic Pythonista and open-source advocate for over 20 years. He is a core contributor to Python and maintainer of many high-profile Python libraries including Setuptools and CherryPy. Jason currently works with Google in Site Reliability Engineering.',
  },
  {
    imageURL: '/assets/mentor_photos/pablo_aguiar.png',
    name: 'Pablo Aguiar',
    description: 'Pablo is a computer scientist working as software engineer at Shopify, where he\'s efusively helping make commerce better for everyone. He\'s passionate about computer programming, cycling, and coffee. He\'s been an active open source contributor for at least 15 years, writing mostly in Python, Go, and JavaScript. For the last few years, he found himself in love with Elixir and Rust.',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Walter Tan',
    description: '',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Mattox Beckman',
    description: 'Dr Mattox Beckman is a teaching assistant professor in the CS department at the University of Illinois at Urbana-Champaign (UIUC). Beckman received his PhD from UIUC in 2003, studying partial evaluation and programming languages. After graduating, Beckman taught at the Illinois Institute of Technology in Chicago from 2003 to 2015, where he taught data structures and programming languages.  In 2015 he returned to Champaign county to teach at UIUC, where he lives with his wife and nine year old daughter. His primary research focus in computer science education.',
  },
  {
    imageURL: '/assets/mentor_photos/scott_anderson.jpg',
    name: 'Scott Anderson',
    description: 'I am lead data scientist focusing on developing models with agronomic data at scale. I have experience with python, pyspark, and optimization',
  },
  {
    imageURL: '/assets/mentor_photos/amanda_goranson.jpg',
    name: 'Amanda Goranson',
    description: 'I am a software developer for John Deere. I work on embedded software which eventually goes on Skidsteers. I get excited making software have a phsyical output! (In my case, move a machine!) I have mentored and coached FIRST Tech Challenge Robotics. I am a mom of two daughters and I am excited to see the world they are growing up in. ',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Igor K',
    description: '8 years developer in C++ qt, move to USA, 3 years work SQA (postman, java), Currently working as C++ developer(qt) in John Deere.',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Harsh Patel',
    description: 'University of Iowa Grad! Did my masters/bachelors in computer engineering. I like to workout, watch anime and play league of legends',
  },
  {
    imageURL: '/assets/mentor_photos/default.png',
    name: 'Aishwarya Ravichandran',
    description: '10 years of experience in software design, development and maintenance across multiple domains like banking, airlines, telecom and manufacturing.',
  },
  {
    imageURL: '/assets/mentor_photos/andrea_fitzpatrick.jpg',
    name: 'Andrea Fitzpatrick',
    description: 'I have worked as a Software Engineer at Deere for the last 8 years specializing in engineering data management tools: completing data migrations, adding features, and providing support for those tools.',
  },
  {
    imageURL: '/assets/mentor_photos/samiksha_pal.jpg',
    name: 'Samiksha Pal',
    description: 'Samiksha is currently a Software Engineer at BaseTen (https://www.baseten.co/), a startup in the ML productionization space. She\'s a UIUC alum (Computer Science Class of 2021!), and super excited to return to campus and visit the Siebel center again :) Outside of working up and down the stack, Samiksha enjoys reading, subscribing to all sorts of entertainment, playing Avalon (amongst many other games), and rock climbing. Samiksha has previously worked in a software context at Confluent, MongoDB, The New York Times, and LinkedIn.',
  },
  {
    imageURL: '/assets/mentor_photos/nadeem_riaz.png',
    name: 'Nadeem Riaz',
    description: 'Creative individual and technology leader in the area of computer vision and machine learning, IoT and full stack systems. Designing technology solutions that would meet business needs to be a market leader in the area of precision agriculture and worksite management. Develop rugged hardware/software solutions that can survive extreme environments on Agriculture and Construction vehicles and agriculture sensors. Design scalable and reliable public and private cloud solutions to process data streams from worksite and build big data analytic solutions to deliver meaningful insights to the business',
  },
  {
    imageURL: '/assets/mentor_photos/davis_keene.jpg',
    name: 'Davis Keene',
    description: 'Hi! My name is Davis Keene, I\'m a Junior studying Statistics & Computer Science and I\'m also a former HackIllinois attendee! I\'m a seasoned developer with a full-time software engineering role at a Boston-based tech startup. In my free time, I enjoy yoyoing, writing, reading, rock climbing, playing tennis, running, and drinking matcha!',
  },
  {
    imageURL: '/assets/mentor_photos/laura_robles.jpg',
    name: 'Laura Robles',
    description: 'Hi! My name is Laura Robles. I graduated from the University of Arizona with a degree in Cyber Operations with a minor in Spanish. I am currently an IT Analyst at Caterpillar Inc. as part of the Digital & IT Development Program.',
  },
];

export default mentors;
