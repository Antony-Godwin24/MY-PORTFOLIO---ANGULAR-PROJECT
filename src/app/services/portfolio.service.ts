import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PortfolioData } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly data: PortfolioData = {
    profile: {
      name: 'ANTONY GODWIN S',
      tagline: 'Final-year CSE Student | Full Stack Developer',
      objective:
        'Final-year Computer Science and Engineering student with hands-on software development experience through internships, projects, and hackathons. Experienced in Java, JavaScript, React.js, Node.js, Express.js, Spring Boot, REST APIs, and MySQL.',
      image: 'assets/PROFILE PHOTO/ANTONY_GODWIN_S_PHOTO.png',
      resumeUrl: 'assets/Resume/ANTONY_GODWIN_S_RESUME.pdf',
      email: 'antonygodwin08@gmail.com',
      phone: '+91 99949 82519',
      location: 'Tiruchirappalli, Tamil Nadu, India',
      links: {
        github: 'https://github.com/Antony-Godwin24',
        linkedin: 'https://www.linkedin.com/in/antony-godwin-s-7143ab2a4/',
        leetcode: 'https://leetcode.com/u/Antony_Godwin/',
        email: 'mailto:antonygodwin08@gmail.com',
      },
    },
    education: [
      {
        id: 'be',
        degree: 'B.E. Computer Science & Engineering',
        institution: 'K. Ramakrishnan College of Engineering (KRCE)',
        board: 'Anna University, Chennai',
        duration: '2023 – 2027',
        location: 'Tiruchirappalli, Tamil Nadu',
        score: '8.35 CGPA',
        scoreLabel: 'CGPA',
        type: 'Full-time',
        current: true,
        color: '#e84c2b',
        dotColor: '#e84c2b',
      },
      {
        id: 'hsc',
        degree: 'Higher Secondary (12th Grade)',
        institution: 'SRV Matric Hr Sec School, Samayapuram',
        board: 'Tamil Nadu State Board',
        duration: 'Passed 2023',
        location: 'Tiruchirappalli, Tamil Nadu',
        score: '90.5%',
        scoreLabel: 'Score',
        type: 'Full-time',
        current: false,
        color: '#2563eb',
        dotColor: '#2563eb',
      },
      {
        id: 'sslc',
        degree: 'SSLC (10th Grade)',
        institution: 'SRV Matric Hr Sec School, Samayapuram',
        board: 'Tamil Nadu State Board',
        duration: 'Passed 2021',
        location: 'Tiruchirappalli, Tamil Nadu',
        score: '100%',
        scoreLabel: 'Score',
        type: 'Full-time',
        current: false,
        color: '#00a86b',
        dotColor: '#00a86b',
      },
    ],
    strongSubjects: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
    ],
    skills: [
      {
        title: 'Languages',
        color: '#e84c2b',
        bgColor: '#fef0ed',
        items: ['Java', 'JavaScript'],
      },
      {
        title: 'Frontend',
        color: '#2563eb',
        bgColor: '#eff6ff',
        items: ['HTML5', 'CSS3', 'React.js'],
      },
      {
        title: 'Backend',
        color: '#00a86b',
        bgColor: '#f0fdf4',
        items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
      },
      {
        title: 'Database',
        color: '#f5a623',
        bgColor: '#fffbeb',
        items: ['MySQL'],
      },
      {
        title: 'Tools',
        color: '#7c3aed',
        bgColor: '#f5f3ff',
        items: ['Git', 'GitHub'],
      },
    ],
    internships: [
      {
        slug: 'zoho',
        company: 'Zoho Corporation',
        role: 'Zoho Marketplace / Extension Developer Intern',
        duration: 'Jul 2025 – Aug 2025',
        team: 'Marketplace',
        work: 'Worked on building a Zoho CRM extension focused on detecting duplicate leads across multiple modules.',
        highlights: [
          'Developed a Duplicate Detection Extension using Zoho Sigma and Deluge',
          'Implemented phone and email-based validation logic within the Leads module',
          'Customized workflows and automation for data consistency',
        ],
        tech: ['Zoho CRM', 'Zoho Sigma', 'Deluge'],
        learning: 'Gained experience in CRM systems, business workflow automation, and real-world enterprise application development.',
        summary: 'Worked on building a Zoho CRM extension focused on detecting duplicate leads across multiple modules.',
        images: ['assets/INTERN/ZOHO/WhatsApp Image 2025-08-19 at 19.59.56_04f75ada.jpg'],
        documents: [{ label: 'Completion Certificate', url: 'assets/INTERN/ZOHO/Antony Godwin.pdf' }],
      },
      {
        slug: 'amizhth-techno-solutions',
        company: 'Amizhth Techno Solutions',
        role: 'React.js Developer Intern',
        duration: 'Sep 2025 – Dec 2025',
        work: 'Focused on frontend development and building reusable UI components for web applications.',
        highlights: [
          'Developed reusable React.js components using Material-UI',
          'Integrated frontend with backend APIs using Axios',
          'Optimized client-side state handling for better performance',
        ],
        tech: ['React.js', 'Material-UI', 'Axios'],
        learning: 'Improved skills in frontend architecture, component design, and API integration.',
        summary: 'Focused on frontend development and building reusable UI components for web applications.',
        images: [],
        documents: [],
      },
      {
        slug: 'techpuram',
        company: 'Techpuram',
        role: 'Software Developer Intern',
        duration: 'Apr 2026 – Present',
        work: 'Working on a multi-tenant SaaS AI platform focused on personalized education and adaptive learning systems.',
        highlights: [
          'Contributing to development of scalable modules for student learning and assessment',
          'Implementing adaptive workflows for curriculum-based learning',
          'Supporting real-time performance tracking and system features',
        ],
        tech: ['React.js', 'Node.js', 'PostgreSQL'],
        learning: 'Gaining hands-on experience in SaaS architecture, multi-tenant systems, and production-level application development.',
        summary: 'Working on a multi-tenant SaaS AI platform focused on personalized education and adaptive learning systems.',
        images: [],
        documents: [{ label: 'Offer Letter', url: 'assets/INTERN/TECHPURAM/ANTONYGODWINS_offer_letter_techpuram.pdf' }],
      },
    ],
    projects: [
      {
        slug: 'claridux',
        title: 'Claridux — Strategic OS for Academic & Career Mastery',
        dateRange: 'Sep 2025 – Apr 2026',
        github: 'https://github.com/Antony-Godwin24/Claridux/',
        live: 'https://claridux.vercel.app/',
        problem:
          'Students often struggle to understand concepts clearly and lack visibility into their job readiness. Learning is fragmented, and there is no system to identify what to improve or what to focus on next.',
        solution:
          'Developed Claridux, a full-stack AI-driven system that transforms academic content into structured, actionable learning paths using a closed-loop model.',
        summary:
          'Developed Claridux, a full-stack AI-driven system that transforms academic content into structured, actionable learning paths using a closed-loop model.',
        tech: ['React.js (Vite)', 'Node.js', 'Express.js', 'PostgreSQL (Neon)', 'Gemini AI', 'Cohere AI', 'JWT', 'Firebase Admin'],
        keyFeatures: [
          'PRS (Productivity Readiness Score) to measure real-time job readiness',
          'Skill gap detection based on user learning data',
          'Mission-based learning system for structured execution',
          'Multi-mode AI learning (Deep, Story, Exam, Interview)',
          'Mock interview system with AI-based feedback',
          'Resume analysis with gap identification',
        ],
        featured: true,
        images: [
          'assets/PROJECTS/CLARIDUX/Screenshot 2026-04-07 215233.png',
          'assets/PROJECTS/CLARIDUX/Screenshot 2026-04-07 215317.png',
          'assets/PROJECTS/CLARIDUX/Screenshot 2026-04-07 215457.png',
        ],
      },
      {
        slug: 'internship-recommendation-engine',
        title: 'AI-Based Internship Recommendation Engine (SIH 2025)',
        dateRange: 'Sep 2025 – Nov 2025',
        github: 'https://github.com/Antony-Godwin24/Al-Based-Internship-Recommendation-Engine-for-PM-Internship-Scheme',
        live: '',
        problem:
          'Students struggle to find relevant internships due to lack of personalized guidance and overwhelming options, leading to inefficient and random applications.',
        solution:
          'Developed an AI-based recommendation system that analyzes student profiles and matches them with suitable internships using similarity-based algorithms.',
        summary:
          'Developed an AI-based recommendation system that analyzes student profiles and matches them with suitable internships using similarity-based algorithms.',
        tech: ['Python', 'TF-IDF', 'Cosine Similarity', 'Node.js', 'WhatsApp API'],
        keyFeatures: [
          'Personalized internship recommendations based on user profile',
          'Similarity matching using TF-IDF and cosine similarity',
          'Automated notification system via WhatsApp',
          'Efficient filtering of relevant opportunities',
          'SMS and IVR-based accessibility for non-smartphone users',
        ],
        featured: false,
        images: [],
      },
      {
        slug: 'smart-water-can',
        title: 'Smart QR Water Can Monitoring System (Proposed Concept)',
        dateRange: 'Jul 2024 – Dec 2024',
        github: '',
        live: '',
        patentApplied: true,
        isConcept: true,
        problem:
          'Lack of transparent tracking in public water can supplies leads to re-use of expired plastic cans, irregular refills, and unmonitored water quality.',
        solution:
          'Proposed a QR-based water-can lifecycle monitoring architecture for tracking usage cycles, refill limits, and quality verification. Formulated into a patent application filed in Nov 2024.',
        summary:
          'Proposed a QR-based water-can lifecycle monitoring architecture for tracking usage cycles, refill limits, and quality verification. Formulated into a patent application filed in Nov 2024.',
        tech: ['QR Code Architecture', 'IoT Concepts', 'System Design', 'Patent Drafting'],
        keyFeatures: [
          'QR-code based unique container identification and tracking',
          'Refill count and plastic degradation cycle analysis',
          'Consumer scan verification for water safety and certification',
          'Automated vendor compliance monitoring',
        ],
        featured: false,
        images: [],
      },
    ],
    certificates: [
      {
        slug: 'java-full-stack',
        title: 'Java Full Stack Development',
        issuedBy: 'STEPFORCODE',
        date: 'Oct 2025 – Nov 2025',
        summary:
          'Completed an intensive Java Full Stack Development program covering core Java, Spring Boot, REST API development, React.js front-end, and MySQL database integration.',
        media: [
          {
            type: 'image',
            url: 'assets/CERTIFICATES/JAVA FULL STACK/JAVA FULL STACK COURSE.jpeg',
            label: 'View Certificate',
          },
        ],
      },
      {
        slug: 'aws-cloud-practitioner',
        title: 'AWS Certified Cloud Practitioner',
        issuedBy: 'Amazon Web Services (AWS)',
        date: 'March 2026',
        summary:
          'Completed AWS Cloud Practitioner certification covering core cloud concepts, AWS services, security, and pricing models.',
        keyLearnings: [
          'Cloud computing fundamentals (IaaS, PaaS, SaaS)',
          'AWS core services (EC2, S3, IAM, VPC)',
          'Security and identity management using IAM',
          'Basic architecture principles for scalable and reliable systems',
        ],
        media: [
          {
            type: 'pdf',
            url: 'assets/CERTIFICATES/AWS CERTIFICATE/AWS Certified Cloud Practitioner certificate.pdf',
            label: 'View Certificate',
          },
        ],
      },
    ],
    hackathons: [
      {
        slug: 'aura-24',
        event: "AURA'24",
        level: 'Technical Hackathon',
        organizedBy: 'Bannari Amman Institute of Technology',
        date: '27 Aug 2024',
        achievement: 'Third Prize',
        project: 'Smart QR Water Can Monitoring System',
        summary:
          'Secured Third Prize for proposing a QR-based water-can lifecycle monitoring system for usage and quality tracking.',
        media: [{ type: 'image', url: "assets/HACKATHONS/AURA'26/BIT 3RD PRIZE.jpg" }],
      },
      {
        slug: 'techelite-26',
        event: "TECHELITE'26",
        level: 'National Level Technical Hackathon',
        organizedBy: 'Sri Bharathi Engineering College for Women',
        date: 'March 2026',
        achievement: 'First Prize 🏆',
        project: 'Claridux — Strategic OS for Academic & Career Mastery',
        summary:
          'Presented an AI-driven system that identifies skill gaps, generates missions, and tracks job readiness using PRS.',
        media: [
          { type: 'image', url: 'assets/HACKATHONS/TECHELITE\'26/WhatsApp Image 2026-04-09 at 21.48.37.jpeg' },
          { type: 'image', url: 'assets/HACKATHONS/TECHELITE\'26/ANTONY GODWIN  S (BHARATHI COLLEGE Hackathon FIRST PRIZE).jpg.jpeg' },
        ],
      },
      {
        slug: 'zyron-26',
        event: "ZYRON'26",
        level: 'National Level Symposium',
        organizedBy: 'Department of ECE, Government College of Engineering, Sengipatti',
        date: 'April 2026',
        achievement: 'First Prize 🏆',
        project: 'Rapid Full-Stack Problem Solving',
        summary:
          'Participated under time constraints and built a functional web solution from scratch, focusing on clean UI and structured implementation.',
        media: [
          { type: 'image', url: 'assets/HACKATHONS/ZYRON\'26/WhatsApp Image 2026-04-09 at 21.20.26.jpeg' },
          { type: 'image', url: 'assets/HACKATHONS/ZYRON\'26/WhatsApp Image 2026-04-09 at 21.23.47.jpeg' },
        ],
      },
    ],
  };

  getData(): Observable<PortfolioData> {
    // Mimic the React app's brief loading duration for the gif
    return of(this.data).pipe(delay(600));
  }
}
