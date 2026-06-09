import { Question } from '../types';

const questions = [

  // ===== SECTION 1: ABOUT YOURSELF & CAREER =====
  {
    id: 'intro_1',
    topic: 'About Yourself & Career',
    difficulty: 'Easy',
    question: 'Tell me about yourself and your journey as a Business Analyst.',
    options: {
      A: 'Begin with your childhood, schooling, and family background, then slowly move toward your current job so the interviewer understands your full journey as a human being, not just a professional.',
      B: 'State your name, years of experience, current role, two key projects with impact numbers, core tools, and why you are targeting this specific role — all in under 90 seconds.',
      C: 'Say your name and company name, then offer to share more only if the interviewer asks follow-up questions, keeping it short so you do not waste their time.',
      D: 'Read your resume summary section word for word so the interviewer knows exactly what is on your document and can follow along.'
    },
    answer: 'B',
    explanation: 'A strong self-introduction follows a 5-point formula: Name → Years of Experience → Current Role & Company → Key Projects with measurable impact → Why this role. For Vaishnavi: "I am Vaishnavi Dere, a Business Analyst with 2+ years at Newgen Technomate LLP in Pune. I have worked on a Vendor Purchase Request Management system — improving operational efficiency by 50% and reducing turnaround time by 30% — and a Jewellery E-Commerce platform. My core skills include BRD/FRD documentation, Agile delivery, UAT coordination, JIRA, Figma, and AI tools like ChatGPT and Claude. I am now targeting healthcare IT roles to apply my analytical skills in a higher-impact domain."',
    interviewTip: 'Never open with "I am a hardworking person." Open with your role, experience years, and a specific project number. End by connecting YOUR background to THIS company.',
    memoryTrick: 'NAME → EXP → ROLE → PROJECTS → WHY HERE. Five beats, under 90 seconds, memorise it cold.',
    realExample: 'Vaishnavi\'s intro anchor: 2 years BA, Newgen Technomate, VPRM (50% efficiency, 30% TAT reduction, 500+ active users), Agile, JIRA, Figma, AI tools.',
    whyOthersWrong: {
      A: 'Personal background is irrelevant. Interviewers want professional value in the first 30 seconds.',
      C: 'Too passive. You are giving up your best opportunity to frame the conversation on your terms.',
      D: 'Reading from a resume shows no communication ability and wastes the interviewer\'s time.'
    },
    isScenario: false
  },

  {
    id: 'intro_2',
    topic: 'About Yourself & Career',
    difficulty: 'Easy',
    question: 'Why do you want to move into healthcare technology specifically?',
    options: {
      A: 'Explain that you are open to any industry and healthcare is simply the one that came up first in your job search, so you applied to see what would happen.',
      B: 'Say your friends recommended healthcare IT as a good domain for BAs, and since they have more experience you trust their advice.',
      C: 'Express that healthcare directly impacts lives, making BA work more purposeful; that your analytical and documentation skills are fully transferable; and that you have already started learning healthcare domain concepts to close the gap proactively.',
      D: 'Mention that healthcare companies typically offer better salaries and stability, which is the primary driver for your interest in this transition.'
    },
    answer: 'C',
    explanation: 'The strongest answer ties personal motivation (impact and purpose) to professional readiness (transferable skills) and proactive preparation (domain learning). Interviewers at healthcare product companies want candidates who are genuinely interested in the domain, not just using it as a stepping stone. Key points to hit: healthcare decisions affect real patient lives — that makes documentation accuracy and requirement clarity even more critical. Your BA skills — elicitation, UAT, Agile delivery — work in any domain. And you have already started learning health plan concepts, FHIR basics, and payer workflows to prepare.',
    interviewTip: 'Research Simplify Healthcare specifically before the interview. Mentioning one accurate detail about their product — benefits configuration, payer solutions — instantly differentiates you from candidates who give generic answers.',
    memoryTrick: 'WHY HEALTHCARE = Purpose + Transferability + Preparation. Hit all three.',
    realExample: 'Connect your VPRM procurement automation work to healthcare workflow automation. Both are complex multi-stakeholder approval processes with compliance implications.',
    whyOthersWrong: {
      A: 'Admitting you applied randomly signals low motivation and zero domain commitment.',
      B: 'Following friends\'s advice is not a professional reason. It signals no independent career thinking.',
      D: 'Salary-first answers make interviewers worry you will leave the moment a higher offer appears.'
    },
    isScenario: false
  },

  {
    id: 'intro_3',
    topic: 'About Yourself & Career',
    difficulty: 'Easy',
    question: 'Where do you see yourself in three years?',
    options: {
      A: 'Say you see yourself in a completely different field since you are always open to new opportunities and do not like to limit yourself to one industry or function.',
      B: 'Describe a progression: master healthcare domain and product delivery in year one, take independent ownership of module-level requirements in year two, and grow toward a Senior BA or Product Analyst role with client-facing and product strategy responsibilities by year three — all within this company.',
      C: 'State that you hope to be in the same role but with a higher salary and possibly a team lead title if the company promotes internally.',
      D: 'Explain that three years is too far to plan in a fast-moving industry and you prefer to focus only on the immediate next six months rather than speculate about the distant future.'
    },
    answer: 'B',
    explanation: 'The best answer shows ambition that is realistic and tied to THIS company\'s growth path. Year 1: build domain mastery and earn trust through quality of work. Year 2: expand ownership — lead client-facing requirements independently, become module SME. Year 3: Senior BA or Product Analyst with strategy involvement. Critical: always anchor your trajectory to Simplify Healthcare specifically. Saying "I want to grow within this organisation" signals retention intent, which matters to hiring managers.',
    interviewTip: 'Add a line about AI: "Throughout that journey I want to continue advancing how I use AI tools, and help my team adopt better AI-augmented workflows." It shows forward-thinking that the JD explicitly values.',
    memoryTrick: 'Year 1 = LEARN, Year 2 = OWN, Year 3 = LEAD. Three beats, always tied to this company.',
    realExample: 'Your VPRM post-go-live work managing 500+ users is a preview of the ownership and continuity that a Year 2 Senior BA handles.',
    whyOthersWrong: {
      A: 'Saying you might leave the domain signals you are not committed. This is an immediate red flag.',
      C: 'Focusing on salary in a vision answer makes you sound transactional, not growth-oriented.',
      D: 'Refusing to think long-term signals lack of ambition and strategic thinking.'
    },
    isScenario: false
  },

  {
    id: 'intro_4',
    topic: 'About Yourself & Career',
    difficulty: 'Medium',
    question: 'What do you know about Simplify Healthcare and what we do?',
    options: {
      A: 'Admit honestly that you did not have enough time to research the company in detail but you are a quick learner and will get up to speed once you join the team.',
      B: 'Share that you know it is a healthcare company based in the US and that it makes software — you are confident you can learn the specifics once you are in the role.',
      C: 'Describe in detail that Simplify Healthcare specialises in benefits configuration and payer-side solutions for health plans and managed care organisations, helping them manage complex insurance benefit structures, eligibility verification, and operational efficiency — and connect their work directly to your BA experience.',
      D: 'Say you know they are one of the largest healthcare IT companies in the world with thousands of employees and multiple product lines across clinical, administrative, and payer segments.'
    },
    answer: 'C',
    explanation: 'Showing genuine company research is one of the fastest ways to differentiate yourself. Simplify Healthcare is a healthcare IT company that focuses on benefits configuration and payer solutions — helping health plans (payers like Aetna, BlueCross, etc.) define, manage, and configure complex benefit structures that govern what is covered, at what cost, and for which members. The BA role there involves translating those complex plan documents into system-readable configurations and functional specifications. Connect their work to your experience: "The complexity of multi-stakeholder approval workflows I managed in VPRM is similar in nature to benefits configuration — detailed business rules, multiple reviewers, and zero tolerance for error."',
    interviewTip: 'Visit Simplify Healthcare\'s website and LinkedIn the night before. Even one specific product name or customer segment shows you spent real time researching.',
    memoryTrick: 'Simplify Healthcare = PAYER SIDE + BENEFITS CONFIG + HEALTH PLAN CLIENTS. Three words to anchor your answer.',
    realExample: 'Your multi-stakeholder VPRM work mirrors how payer-side BAs must coordinate procurement, finance, and compliance equivalent roles — just in a healthcare context.',
    whyOthersWrong: {
      A: 'Admitting zero research is the single fastest way to disqualify yourself. Research takes 20 minutes.',
      B: 'Vague generic answers signal you sent the same application to 50 companies without reading any of them.',
      D: 'Overstating incorrect facts (they are not one of the largest globally) can damage credibility immediately.'
    },
    isScenario: false
  },

  // ===== SECTION 2: BA CORE SKILLS =====
  {
    id: 'ba_1',
    topic: 'BA Core Skills',
    difficulty: 'Medium',
    question: 'What is the difference between BRD, FRD, and SRS? Which one do you create first?',
    options: {
      A: 'BRD is for business stakeholders and covers high-level goals. FRD describes functional system behaviour for developers and testers. SRS adds technical non-functional requirements. You always create them in that order: BRD first, FRD second, SRS third.',
      B: 'All three documents are different names for the same thing — different companies just use different terminology for their requirement specifications, so the content is essentially the same.',
      C: 'FRD is the first document because you need to understand what the system will do before you can write the business requirements around it. SRS comes last, and BRD is only needed for large enterprise projects.',
      D: 'SRS is the most important document and should be created first since it contains all the detail. BRD and FRD are older frameworks that most Agile teams have stopped using entirely.'
    },
    answer: 'A',
    explanation: 'BRD (Business Requirements Document) answers WHAT the business needs — high-level goals, problems, and expected outcomes. Audience: management and business stakeholders. No technical detail. FRD (Functional Requirements Document) answers WHAT the system must do — specific screens, workflows, validations, and data flows. Audience: developers and testers. SRS (Software Requirements Specification) answers BOTH functional and non-functional requirements — performance benchmarks, security constraints, integrations. Audience: engineering team. Always in BRD → FRD → SRS order because each builds on the previous. From Vaishnavi\'s VPRM project: BRD captured the procurement team\'s digitisation goal; FRD detailed the vendor onboarding and approval workflows; SRS added response time, encryption, and API integration specs.',
    interviewTip: 'Many candidates confuse FRD and SRS. The key distinction: FRD is purely functional behaviour. SRS adds NON-FUNCTIONAL requirements like performance, security, and scalability.',
    memoryTrick: 'BRD = WHY and WHAT (business). FRD = WHAT (system does). SRS = WHAT + HOW WELL (including non-functional).',
    realExample: 'In VPRM: BRD = digitise procurement. FRD = multi-level approval routing per amount threshold. SRS = approval notification in under 30 seconds, data encrypted at rest.',
    whyOthersWrong: {
      B: 'They are categorically different documents with different audiences, purposes, and levels of detail.',
      C: 'Creating FRD before BRD means building solutions before understanding business problems — a classic mistake.',
      D: 'SRS cannot be first since it depends on requirements defined in BRD and FRD. And BRD/FRD are still widely used even in Agile.'
    },
    isScenario: false
  },

  {
    id: 'ba_2',
    topic: 'BA Core Skills',
    difficulty: 'Medium',
    question: 'How do you write a user story? What are the key components it must include?',
    options: {
      A: 'A user story is a technical specification written by the development team describing how a feature will be built, usually including database schema, API endpoints, and class diagrams to give developers full context.',
      B: 'A user story follows the format "As a [role], I want [action], so that [benefit]" — written from the business user\'s perspective. It must include clear acceptance criteria in Given-When-Then format, edge cases, and a reference to any wireframes or design assets.',
      C: 'A user story is simply one sentence describing what a user wants, and the development team fills in the details themselves based on their technical expertise. Over-documenting user stories slows down Agile teams.',
      D: 'User stories must always be written by the Product Owner, never the BA. The BA\'s job is to review and validate them, not to write them, since the Product Owner is the authority on what the user needs.'
    },
    answer: 'B',
    explanation: 'A strong user story has three layers. Layer 1 — the story statement: "As a Procurement Manager, I want to submit a purchase requisition online, so that I can track approval status in real time and eliminate email follow-ups." Layer 2 — Acceptance Criteria in Given-When-Then format: "Given the user is logged in as a Procurement Manager, when they submit a requisition with all mandatory fields filled, then the system routes it to the designated approver within 30 seconds and sends an email notification." Layer 3 — Edge cases: What happens if the approver is on leave? What if the amount exceeds the manager\'s approval limit? The INVEST principle ensures stories are Independent, Negotiable, Valuable, Estimable, Small, and Testable. Vague acceptance criteria are the single biggest cause of UAT defects.',
    interviewTip: 'Always mention edge cases when asked about user stories. Interviewers at product companies know that edge cases in acceptance criteria are where real defects hide.',
    memoryTrick: 'USER STORY = AS A + I WANT + SO THAT. ACCEPTANCE CRITERIA = GIVEN + WHEN + THEN. INVEST = quality check.',
    realExample: 'VPRM story: "As a Procurement Manager, I want multi-level approval routing, so that purchase requests above my authority level are automatically escalated." Edge case: approver on leave triggers a backup routing rule.',
    whyOthersWrong: {
      A: 'User stories are intentionally non-technical. Technical specs live in the FRD or SRS, not user stories.',
      C: 'Leaving details to developers creates rework. The BA must provide enough context for the team to build and test confidently.',
      D: 'BAs write user stories in most Agile teams. The Product Owner sets priority; the BA handles detail and acceptance criteria.'
    },
    isScenario: false
  },

  {
    id: 'ba_3',
    topic: 'BA Core Skills',
    difficulty: 'Hard',
    question: 'A stakeholder brings you 60 requirements for a new system. How do you decide what goes into the first release?',
    options: {
      A: 'Deliver all 60 requirements in the first release since the client has requested all of them and it would be unprofessional to tell a paying stakeholder that their requirements will be deferred.',
      B: 'Apply MoSCoW prioritisation in a facilitated workshop with stakeholders: categorise requirements into Must Have, Should Have, Could Have, and Won\'t Have. Focus the first release on Must Haves only, then plan subsequent sprints for Should Haves. Document the rationale for all deferrals.',
      C: 'Ask the development team to choose which 30 requirements they find technically easiest to build first, since delivering quickly builds stakeholder confidence and the easiest requirements happen to be the fastest ones.',
      D: 'Randomly select 20 requirements from the list to fit into the first sprint, then address the remaining 40 in future sprints based on whatever the stakeholders complain about most loudly in post-release reviews.'
    },
    answer: 'B',
    explanation: 'MoSCoW prioritisation is the industry-standard technique for scoping releases when requirements exceed capacity. Must Have: non-negotiable items without which the system cannot function or launch — typically 40-60% of total requirements. Should Have: high-value features that are strongly desired but not launch-critical. Could Have: nice-to-haves that add value but can be safely deferred. Won\'t Have: explicitly out of scope for this release. The key is facilitating a structured stakeholder workshop — not making the decision unilaterally. From Vaishnavi\'s VPRM project: 60+ requirements were narrowed to 12 Must Haves (core requisition and approval workflows) for the first release. Stakeholders accepted this because they participated in the prioritisation and understood the rationale.',
    interviewTip: 'Always say you FACILITATE the prioritisation, not that you DECIDE it. The Product Owner and stakeholders own priority. Your job is to facilitate a structured process.',
    memoryTrick: 'MoSCoW = M(ust) + S(hould) + C(ould) + W(on\'t). Facilitate, don\'t dictate.',
    realExample: 'VPRM: 60+ requirements → 12 Must Haves for Release 1 (vendor onboarding, requisition creation, approval routing). Analytics and reporting moved to Release 2. On-time delivery with stakeholder satisfaction.',
    whyOthersWrong: {
      A: 'Attempting to deliver everything guarantees missed deadlines, poor quality, and stakeholder disappointment on all fronts.',
      C: 'Technical ease is not a prioritisation criterion. Business value and risk are. Easiest ≠ most important.',
      D: 'Random selection creates no alignment and no defensible rationale. Reactive prioritisation based on complaints is not a process.'
    },
    isScenario: true
  },

  {
    id: 'ba_4',
    topic: 'BA Core Skills',
    difficulty: 'Medium',
    question: 'What is a Requirement Traceability Matrix (RTM) and why does it matter in UAT?',
    options: {
      A: 'An RTM is a project schedule that maps requirements to sprint dates, helping the team understand when each feature will be delivered and who is responsible for development.',
      B: 'An RTM is a table that links each business requirement to its source, the user stories derived from it, the test cases that validate it, and its current delivery status — ensuring every requirement is tested and no gap exists between what was requested and what was built.',
      C: 'An RTM is an optional document that senior BAs use only on large enterprise projects with more than 100 requirements. For small or medium projects it adds unnecessary overhead and slows the team down.',
      D: 'An RTM is a type of risk register that tracks potential project risks, maps them to requirements that could be affected, and assigns mitigation actions to prevent scope creep during delivery.'
    },
    answer: 'B',
    explanation: 'An RTM is a critical quality document with columns: Requirement ID, Description, Source, Priority, Linked User Story, Test Case ID, and Status. In UAT it matters because: (1) every requirement must have at least one test case — if it doesn\'t, either it was missed or it is untestable; (2) when a defect is found, you can trace it back to the exact requirement it violates, helping determine if it is a development bug or a requirement gap; (3) at go-live sign-off, stakeholders can see full coverage at a glance. From Vaishnavi\'s VPRM project: 40+ functional requirements were tracked in an RTM. During UAT, when an approval routing defect appeared, the RTM helped identify a NULL value in the approver mapping table — traced from requirement R-12 — saving hours of developer investigation.',
    interviewTip: 'In Agile teams, the RTM is often maintained implicitly through JIRA story-to-test-case links. Mention both: "I use JIRA for day-to-day traceability and maintain a formal Excel RTM for stakeholder reporting."',
    memoryTrick: 'RTM connects REQUIREMENT → USER STORY → TEST CASE → STATUS. One row per requirement, nothing falls through.',
    realExample: 'VPRM RTM: 40+ requirements, each linked to user stories and UAT test cases in JIRA. Used during client sign-off to demonstrate 100% test coverage of agreed scope.',
    whyOthersWrong: {
      A: 'That is a project schedule or sprint plan, not an RTM. RTM tracks requirements to tests, not to dates.',
      C: 'RTMs reduce risk on projects of any size. A "small" missed requirement can cause a critical production defect.',
      D: 'That describes a Risk Register, a different document entirely. RTM tracks requirements, not risks.'
    },
    isScenario: false
  },

  {
    id: 'ba_5',
    topic: 'BA Core Skills',
    difficulty: 'Hard',
    question: 'A new requirement comes in after sprint planning has already been completed. What do you do?',
    options: {
      A: 'Immediately add the new requirement to the current sprint since the stakeholder is senior and their requests should always be accommodated, even if it means the team works overtime to deliver everything on time.',
      B: 'Ignore the request until the next sprint planning session and ask the stakeholder to raise it again formally at that time so the process is not disrupted.',
      C: 'Assess the impact of the change, document it as a formal Change Request with business justification and effort estimate, present the options to the Product Owner — add to current sprint, backlog it, or reprioritise — then communicate the decision clearly to all teams.',
      D: 'Tell the stakeholder that Agile does not allow requirement changes mid-sprint under any circumstances and they should have raised this during backlog grooming when they had the opportunity to do so.'
    },
    answer: 'C',
    explanation: 'Mid-sprint requirement changes are a reality in Agile — the question is how you manage them, not whether to accept them. The correct process: Step 1 — assess impact. Does this change affect stories already in development? Does it shift scope, timeline, or resources significantly? Step 2 — document a Change Request with: what is changing, business justification, estimated development effort, impact on current sprint commitment. Step 3 — present to the Product Owner with clear options: (a) add to current sprint if capacity and complexity permit, (b) backlog for next sprint, (c) deprioritise something currently in the sprint to make room. Step 4 — communicate the decision to development and QA. From the Jewellery E-Commerce project: new brand onboarding requirements arrived during UAT. A formal CR was raised, the PM was briefed, and it was slotted into the post-go-live enhancement queue to protect the launch date.',
    interviewTip: 'The interviewer is testing process discipline, not rigidity. Show that you accommodate change through structure, not by either blindly accepting or blindly refusing.',
    memoryTrick: 'Mid-sprint change = ASSESS → DOCUMENT CR → PRESENT OPTIONS → COMMUNICATE DECISION. Never add silently.',
    realExample: 'Jewellery platform: post-UAT new requirement for brand onboarding → CR raised → PM decision to defer → added to post-go-live backlog → launch date protected.',
    whyOthersWrong: {
      A: 'Adding work without impact analysis overloads the sprint and risks overall delivery quality.',
      B: 'Ignoring legitimate business requests damages stakeholder trust and may hide a high-priority need.',
      D: 'Agile does allow mid-sprint changes — the sprint review exists precisely to incorporate feedback. Rigidly refusing damages relationships.'
    },
    isScenario: true
  },

  {
    id: 'ba_6',
    topic: 'BA Core Skills',
    difficulty: 'Medium',
    question: 'What techniques do you use for requirement elicitation and which one do you prefer?',
    options: {
      A: 'Send a detailed email questionnaire to all stakeholders at the start of the project and compile their written responses into the BRD. This saves time and avoids scheduling multiple meetings that slow down the project timeline.',
      B: 'Use a combination of techniques selected based on the situation: structured interviews for complex workflows, facilitated workshops for cross-functional alignment, document analysis for existing process understanding, and observation for operational workflows. Prefer workshops for complex multi-stakeholder projects.',
      C: 'Always use only one technique — user interviews — since they are the gold standard for requirement elicitation in every type of project and any other technique introduces inconsistency.',
      D: 'Let the development team run requirement gathering sessions since they are more technically experienced and can ask better questions about what the system needs to do.'
    },
    answer: 'B',
    explanation: 'No single elicitation technique works for every situation. Structured interviews work best for one-on-one deep dives with subject matter experts. Facilitated workshops are ideal for cross-functional alignment and surfacing conflicting requirements (as in VPRM — procurement, finance, and operations all in one room). Document analysis helps when existing process documentation exists. Observation is irreplaceable for understanding how users actually work versus how they describe their work. Prototyping with Figma wireframes — which Vaishnavi uses — is one of the most powerful elicitation tools because stakeholders give far more specific feedback on visuals than on written descriptions. Always validate outputs: present requirements back to stakeholders before finalising.',
    interviewTip: 'Mention that you use Figma prototypes as an elicitation tool. Most BAs list techniques without mentioning prototyping, which is actually one of the most effective methods for reducing rework.',
    memoryTrick: 'Elicitation toolkit: INTERVIEWS + WORKSHOPS + DOCS + OBSERVATION + PROTOTYPES. Pick based on context.',
    realExample: 'VPRM: workshop with procurement + finance + operations surfaced the conflict between mandatory fields and existing vendor flexibility. Resolved in one session instead of 3 separate emails.',
    whyOthersWrong: {
      A: 'Email questionnaires produce shallow, inconsistent responses. Stakeholders answer what is convenient, not what is complete.',
      C: 'Interviews alone miss group dynamics, cross-stakeholder conflicts, and operational reality. One technique is always insufficient.',
      D: 'Developers gathering requirements without BA facilitation leads to technical bias — systems get built the way developers want, not the way business needs.'
    },
    isScenario: false
  },

  {
    id: 'ba_7',
    topic: 'BA Core Skills',
    difficulty: 'Medium',
    question: 'What is the difference between functional and non-functional requirements? Give examples from your work.',
    options: {
      A: 'Functional requirements are written by the BA and non-functional requirements are written by the technical architect. They are different because they come from different team members rather than because they describe different aspects of the system.',
      B: 'Functional requirements define WHAT the system must do — specific behaviours, workflows, and validations. Non-functional requirements define HOW WELL the system performs — response times, security standards, scalability, availability, and compliance constraints.',
      C: 'Non-functional requirements are only relevant for large-scale enterprise systems with millions of users. For small or medium systems like a procurement tool or e-commerce platform, only functional requirements need to be documented.',
      D: 'Functional and non-functional requirements are documented together in the same section of the SRS with no distinction, since separating them creates confusion and makes the document harder to navigate for developers.'
    },
    answer: 'B',
    explanation: 'Functional requirements describe specific system behaviour: "The system shall route a purchase requisition to the approver within the department hierarchy based on the requisition amount." Non-functional requirements describe quality attributes: "Approval routing notification must be delivered within 30 seconds." "All vendor data must be encrypted at rest and in transit." "The system must achieve 99.9% uptime during business hours." In healthcare specifically, non-functional requirements around HIPAA compliance, data privacy, and system availability are just as critical as functional ones — a benefits configuration system that is accurate but slow or insecure is not production-ready. From VPRM: functional = multi-level approval workflow; non-functional = response time SLA, data security, and audit log retention period.',
    interviewTip: 'In healthcare IT interviews, always mention compliance (HIPAA) as a non-functional requirement category. It signals domain awareness immediately.',
    memoryTrick: 'Functional = WHAT it does. Non-functional = HOW WELL it does it. Test functional in UAT, test non-functional in performance and security testing.',
    realExample: 'VPRM: Functional — purchase requisition routed based on amount and department. Non-functional — routed within 30 seconds, data encrypted, audit log retained for 7 years per compliance.',
    whyOthersWrong: {
      A: 'Both requirement types are typically owned and documented by the BA, with technical review from architects for non-functional specs.',
      C: 'Every system has non-functional requirements regardless of scale. A slow or insecure small system fails just as badly as a large one.',
      D: 'Separating them is intentional — they are tested differently (UAT vs performance testing) and owned by different testing streams.'
    },
    isScenario: false
  },

  // ===== SECTION 3: AGILE & SDLC =====
  {
    id: 'agile_1',
    topic: 'Agile & SDLC',
    difficulty: 'Easy',
    question: 'What are the Scrum ceremonies and what is the BA\'s role in each?',
    options: {
      A: 'Scrum has only two ceremonies: Sprint Planning and Sprint Review. The BA attends both to present requirements and answer questions. Daily standups and retrospectives are optional meetings that not all teams use.',
      B: 'Scrum ceremonies are Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective, and Backlog Refinement. The BA plays an active role in all five: preparing sprint-ready stories for planning, flagging requirement blockers in standups, framing demos in business language for reviews, contributing process improvements in retrospectives, and owning story detail in refinement.',
      C: 'The BA should attend all Scrum ceremonies as an observer only, never as an active participant, since Scrum is a framework for developers and the BA\'s presence as a participant can disrupt the team\'s self-organising nature.',
      D: 'Scrum ceremonies are primarily for the development team. The BA\'s only ceremony is Sprint Planning where requirements are handed off. After that the BA focuses entirely on writing requirements for the next sprint while the team delivers the current one.'
    },
    answer: 'B',
    explanation: 'The BA is an active participant in ALL five Scrum ceremonies. Sprint Planning: ensure committed stories are groomed — clear acceptance criteria, estimated, no unresolved dependencies. Flag unready stories before the team commits. Daily Standup: report on requirement-related work completed, flag any open questions blocking developers, communicate risks early. Sprint Review: help frame completed features in business language for stakeholder demos. Sprint Retrospective: contribute feedback on requirement clarity, acceptance criteria gaps, and process improvements. Backlog Refinement: the ceremony where the BA adds the most value — breaking down epics, adding acceptance criteria, sequencing by business priority, and flagging story dependencies.',
    interviewTip: 'Mention a specific improvement you drove in a retrospective. "I proposed adding an edge case section to our story template after noticing repeated defects traced to missing exception scenarios." Concrete > generic.',
    memoryTrick: 'Five ceremonies: PLAN → STANDUP → REVIEW → RETRO → REFINE. BA is active in every one.',
    realExample: 'In VPRM retrospectives, Vaishnavi identified that approval workflow defects traced back to missing exception scenarios in acceptance criteria. Proposed a dedicated edge case section to the story template.',
    whyOthersWrong: {
      A: 'Daily Standups and Retrospectives are core Scrum ceremonies, not optional. This answer reflects outdated or incorrect Scrum knowledge.',
      C: 'BAs are not passive observers — they are core contributors to requirement quality, which is the team\'s foundational input.',
      D: 'Handoff-only BA behaviour creates silos and is antithetical to Agile\'s collaborative principles.'
    },
    isScenario: false
  },

  {
    id: 'agile_2',
    topic: 'Agile & SDLC',
    difficulty: 'Medium',
    question: 'What is the difference between a Product Backlog and a Sprint Backlog?',
    options: {
      A: 'Product Backlog and Sprint Backlog are the same thing. Different Scrum teams use different names for their lists of work items. The distinction is a formality rather than a meaningful difference in purpose or ownership.',
      B: 'The Product Backlog is the master list of all desired product functionality, owned by the Product Owner, continuously evolving and prioritised by business value. The Sprint Backlog is a committed subset selected for one sprint, owned by the development team, fixed for the sprint duration once committed.',
      C: 'The Sprint Backlog is larger than the Product Backlog since it contains the detailed breakdown of every task and sub-task needed to build the sprint stories, whereas the Product Backlog only contains high-level epics without task-level detail.',
      D: 'The Product Backlog is maintained by the development team since they have the best view of technical complexity. The Product Owner only manages the Sprint Backlog since they attend sprint ceremonies and can update it in real time during the sprint.'
    },
    answer: 'B',
    explanation: 'Product Backlog: master list of ALL features, enhancements, bug fixes, and technical debt for the entire product. Owned by the Product Owner. Long-term, evolving, prioritised by business value. Can have hundreds of items. Sprint Backlog: a committed subset pulled from the top of the Product Backlog for one sprint (typically 2 weeks). Owned by the development team. Fixed once the sprint starts — changes require formal process. The BA\'s value sits exactly at the boundary: you make the top of the Product Backlog always sprint-ready so Sprint Planning runs smoothly. From VPRM: Product Backlog had 80+ user stories. BA\'s job was ensuring the top 20 were always fully groomed — acceptance criteria complete, estimated, dependencies clear — so sprint planning needed no clarification delays.',
    interviewTip: 'Show you understand the BA\'s specific contribution: "My job is to ensure the top items in the Product Backlog are always sprint-ready — reducing sprint planning time and eliminating mid-sprint requirement clarifications."',
    memoryTrick: 'Product Backlog = EVERYTHING (PO owns). Sprint Backlog = THIS SPRINT\'S COMMITMENT (team owns). BA makes the boundary smooth.',
    realExample: 'VPRM: 80+ item product backlog. BA kept top 20 stories groomed so sprint planning ran in 90 minutes instead of half a day. No stories returned to backlog due to unclear requirements.',
    whyOthersWrong: {
      A: 'They have fundamentally different ownership, scope, timeframe, and purpose. Treating them as the same reflects shallow Scrum understanding.',
      C: 'The Sprint Backlog is always smaller than the Product Backlog — it is a subset. Task-level detail can live within Sprint Backlog items but the backlog itself is not larger.',
      D: 'Product Backlog ownership is the Product Owner\'s core responsibility. Development team owns the Sprint Backlog during the sprint.'
    },
    isScenario: false
  },

  {
    id: 'agile_3',
    topic: 'Agile & SDLC',
    difficulty: 'Hard',
    question: 'Your team\'s sprint velocity has dropped significantly over the last two sprints. As a BA, what do you do?',
    options: {
      A: 'Immediately escalate to senior management and report that the development team is underperforming, requesting a performance review for team members who are not meeting their story point commitments.',
      B: 'Analyse whether requirement-side factors are contributing: are stories too large, acceptance criteria unclear, or too many mid-sprint clarification requests from developers? Raise the pattern in retrospective with data, propose targeted improvements, and work with the Scrum Master to identify non-requirement causes as well.',
      C: 'Do nothing — velocity fluctuation is normal in Agile and it is the Scrum Master\'s responsibility to address team performance. The BA should focus only on writing requirements for future sprints and not involve themselves in delivery metrics.',
      D: 'Increase the number of stories in the next sprint to compensate for the velocity drop, so the product backlog does not fall behind schedule and stakeholders remain confident in the team\'s output.'
    },
    answer: 'B',
    explanation: 'A drop in velocity is often a symptom, not the root cause. The BA should first examine whether requirement quality is a contributing factor — the most common BA-side causes of velocity drops are: stories that are too large to complete in one sprint, acceptance criteria that are vague enough to require developer clarification mid-sprint, missing edge case documentation causing rework in QA, and late requirement changes. The BA should: (1) review the last two sprints\' stories for pattern of incompleteness, (2) check JIRA for volume of mid-sprint clarification comments, (3) raise findings in retrospective with data — "I noticed 6 stories had 10+ clarification comments each in JIRA — here is what I am going to change in my grooming process," (4) work with Scrum Master to separate requirement-side from capacity or technical-side causes.',
    interviewTip: 'This question tests whether you see BA responsibility as extending beyond writing documents. Good BAs own delivery quality, not just documentation quality.',
    memoryTrick: 'Velocity drop BA checklist: STORY SIZE → CLARITY → MID-SPRINT QUESTIONS → QA REWORK. Fix upstream to improve downstream.',
    realExample: 'After implementing a dedicated edge case section in VPRM user stories, mid-sprint clarification requests dropped. Less developer time on questions = more time on building = better velocity.',
    whyOthersWrong: {
      A: 'Escalating to management without analysis damages team trust and assumes developer blame without evidence.',
      C: 'Velocity is a team health metric and the BA\'s requirement quality directly affects it. Disengaging is abdication of responsibility.',
      D: 'Increasing story count without fixing root cause will further drop velocity and reduce quality. Symptoms cannot be solved by adding load.'
    },
    isScenario: true
  },

  // ===== SECTION 4: UAT & TESTING =====
  {
    id: 'uat_1',
    topic: 'UAT & Testing',
    difficulty: 'Medium',
    question: 'You are leading UAT for a new feature. A business user says "this doesn\'t work" but cannot explain what they expected. What do you do?',
    options: {
      A: 'Close the UAT session immediately and reschedule once the user has reviewed the requirements document and can provide a clear, structured defect report with steps to reproduce.',
      B: 'Log the issue as a defect immediately with the description "system doesn\'t work per user feedback" so the development team can investigate and determine the root cause on their own.',
      C: 'Sit with the user to reproduce the issue step by step, ask them to show you what they did and what they expected to see instead, then cross-reference their expectation against the documented acceptance criteria to determine if it is a defect, a misunderstood requirement, or a training gap — and respond accordingly.',
      D: 'Dismiss the feedback since UAT testers are not technical and often raise issues that are actually user errors. Instruct the user to re-read the user manual before raising any future concerns.'
    },
    answer: 'C',
    explanation: 'UAT users are not technical testers — they describe outcomes in business language, not defect language. A skilled BA bridges this gap. The process: (1) Ask the user to show you what they did — "Can you walk me through what you clicked and what happened?" (2) Reproduce the issue together. (3) Ask what they expected: "What did you expect to see at that point?" (4) Cross-reference their expectation against the documented acceptance criteria — is this a genuine defect, a requirement that was never specified, a configuration issue, or a user training gap? Each of these has a different response. Defect → JIRA ticket with full documentation. Requirement gap → update the story and retest. Training gap → update user manual and schedule a brief training session. From Vaishnavi\'s VPRM UAT: approval notifications not reaching users turned out to be a NULL value in the approver mapping table — found by reproducing the issue together with the user.',
    interviewTip: 'Interviewers want to know you handle ambiguous UAT feedback with empathy and process, not frustration or dismissal. Show both the human skill and the analytical skill.',
    memoryTrick: 'Vague UAT issue: REPRODUCE TOGETHER → COMPARE TO ACCEPTANCE CRITERIA → CLASSIFY (defect/gap/training) → ACT.',
    realExample: 'VPRM: "notifications not working" → reproduced with user → queried PostgreSQL → found NULL in approver mapping table → data setup issue, not a code bug. Saved 2 days of developer investigation.',
    whyOthersWrong: {
      A: 'Sending users away to write formal reports kills UAT participation and misses legitimate issues that users cannot articulate.',
      B: 'Logging "doesn\'t work" without steps to reproduce is useless to the development team and wastes everyone\'s time.',
      D: 'Dismissing user feedback is the most dangerous response in UAT. Business users surface real-world scenarios that requirement documents miss.'
    },
    isScenario: true
  },

  {
    id: 'uat_2',
    topic: 'UAT & Testing',
    difficulty: 'Medium',
    question: 'How do you create effective UAT test cases? What must every test case include?',
    options: {
      A: 'A UAT test case only needs a title and a pass/fail checkbox. Additional detail slows down UAT participants who are non-technical business users and are already stretched for time.',
      B: 'Every UAT test case must include: a unique ID, the requirement or acceptance criterion it traces to, preconditions, numbered step-by-step execution instructions, the expected result, a space for actual result and pass/fail status. Cover both happy path and negative scenarios, and organise by functional module for clarity.',
      C: 'UAT test cases should be identical to the SIT (System Integration Testing) test cases created by QA, since running the same tests twice provides the most comprehensive coverage and ensures no regression issues exist in the final product.',
      D: 'Test cases in UAT should be created by the development team since they know the system best and can write the most accurate expected results based on what they actually built.'
    },
    answer: 'B',
    explanation: 'A well-structured UAT test case has six mandatory components: (1) Test Case ID — for traceability; (2) Requirement / Acceptance Criterion reference — proves coverage; (3) Preconditions — setup state needed before execution; (4) Numbered steps — clear enough for a non-technical user to execute without interpretation; (5) Expected Result — specific, observable, not vague; (6) Actual Result and Status (Pass/Fail). Two types of scenarios are essential: Happy Path — system works when everything is correct. Negative Scenarios — mandatory field blank, invalid date, duplicate submission, session timeout. Organise by module (e.g., Vendor Onboarding, Approval Workflow, Reporting) so users can test one area at a time. From VPRM: 4 modules, 60+ test cases, coverage of all 40+ functional requirements. Zero critical defects found post-go-live.',
    interviewTip: 'Mention that you trace test cases back to JIRA stories. "Every test case I write is linked to its parent user story in JIRA so we have full requirement-to-test traceability."',
    memoryTrick: 'Test case = ID + REQUIREMENT + PRECONDITIONS + STEPS + EXPECTED + ACTUAL/STATUS. Always include negative scenarios.',
    realExample: 'VPRM test case for approval routing: Precondition = user logged in as Procurement Manager, amount = ₹50,000. Steps: submit requisition. Expected: routed to Finance Head within 30 seconds. Negative: submit with blank vendor field → validation error shown.',
    whyOthersWrong: {
      A: 'Minimal test cases produce minimal coverage. Missing steps mean UAT participants test different things each time with no reproducibility.',
      C: 'UAT tests business scenarios from the user\'s perspective. SIT tests technical integration. They overlap but are not identical and serve different purposes.',
      D: 'Developers writing their own test cases creates bias — they test what they built, not what the business needs. BA ownership ensures business alignment.'
    },
    isScenario: false
  },

  {
    id: 'uat_3',
    topic: 'UAT & Testing',
    difficulty: 'Hard',
    question: 'During UAT, 15 defects are logged across 5 modules. Go-live is in 5 days. How do you manage this?',
    options: {
      A: 'Postpone go-live immediately until all 15 defects are resolved and fully retested, regardless of their severity, since any defect in a production system is unacceptable and reflects poorly on the BA and the project team.',
      B: 'Classify all 15 defects by severity — Critical, High, Medium, Low. All Critical and High defects must be resolved and retested before go-live. Medium and Low defects are documented and tracked as post-go-live fixes with a committed resolution timeline. Communicate the plan transparently to the PM and stakeholders.',
      C: 'Close all 15 defects as "won\'t fix" in JIRA to clear the defect board and proceed to go-live on schedule. Defects can be addressed in the next release after the system has been in use for a few months and real-world impact is better understood.',
      D: 'Pick the 5 most visually obvious defects to fix since those are the ones stakeholders will notice, and leave the remaining 10 in the backlog without classification. Stakeholders rarely test edge cases so the hidden defects are unlikely to be discovered in the first month.'
    },
    answer: 'B',
    explanation: 'Defect management before go-live requires severity-based triage, not binary all-or-nothing decisions. Severity classification: Critical — blocks core workflow or corrupts data. Must fix before go-live. High — major functionality broken, workaround exists but is painful. Strongly preferred to fix before go-live. Medium — functional issue with limited user impact. Can go-live with documented workaround and committed fix timeline. Low — cosmetic or minor UX. Post-go-live. With 5 days, the realistic approach is: (1) triage all 15 defects immediately, (2) assign Critical and High to developers for priority resolution, (3) schedule daily status calls, (4) communicate the plan to the PM — "We have X Critical, Y High, Z Medium. Critical and High will be resolved by Day 3 for retest on Day 4. We recommend go-live on Day 5 with Medium tracked in the post-go-live backlog." (5) get formal stakeholder sign-off on the deferred items.',
    interviewTip: 'Mention the sign-off process explicitly. "I document all deferred defects with their severity, workaround, and committed resolution date, and get written stakeholder sign-off before go-live." This shows governance maturity.',
    memoryTrick: 'Defect triage: CRITICAL = block go-live. HIGH = fix before go-live ideally. MEDIUM = go-live with plan. LOW = post-go-live.',
    realExample: 'VPRM UAT had 40+ defects across two cycles. All Critical defects resolved. 3 Medium defects deferred with documented workarounds and post-go-live fix commitment. Stakeholder sign-off obtained. Successful go-live.',
    whyOthersWrong: {
      A: 'Postponing for all 15 regardless of severity is disproportionate and may delay a launch for cosmetic issues. Severity-based decisions are the professional standard.',
      C: 'Closing defects as won\'t fix without stakeholder agreement and without proper assessment is dishonest and risks production failures.',
      D: 'Hiding defects from stakeholders is a serious professional and ethical failure. Transparency is non-negotiable in software delivery.'
    },
    isScenario: true
  },

  // ===== SECTION 5: STAKEHOLDER MANAGEMENT =====
  {
    id: 'stake_1',
    topic: 'Stakeholder Management',
    difficulty: 'Hard',
    question: 'Two stakeholders have completely opposite requirements for the same feature. Both are senior. How do you resolve this?',
    options: {
      A: 'Choose the requirement from the stakeholder who is more senior in organisational hierarchy, since their authority should determine which requirement takes precedence in all disputes.',
      B: 'Combine both requirements into one feature that attempts to satisfy both simultaneously, without telling either stakeholder about the conflict, so they both believe their requirement was implemented as requested.',
      C: 'Document both requirements, meet each stakeholder individually to deeply understand the business driver behind their position, then facilitate a joint session where you present both options with business impact analysis, use MoSCoW or weighted scoring to guide agreement, and escalate to the Product Owner or sponsor only if consensus cannot be reached.',
      D: 'Ask the development team to choose which requirement is easier to build and implement that one, since technical feasibility should drive requirement decisions when business stakeholders cannot agree.'
    },
    answer: 'C',
    explanation: 'Conflicting requirements are almost always a symptom of a deeper disagreement about process, priority, or organisational boundaries — not a genuine impossibility. The professional resolution process: Step 1 — individual meetings. Meet each stakeholder separately to understand the WHY behind their requirement. Often the conflict is less about the feature and more about a downstream impact each side is trying to protect. Step 2 — facilitated joint session. Present both requirements side-by-side with a clear articulation of each position\'s business value and the trade-offs of each option. Use a structured framework (MoSCoW, weighted scoring matrix) to guide rather than dictate the decision. Step 3 — phased approach if consensus is possible. Often a Phase 1 / Phase 2 solution satisfies both. Step 4 — escalate only when truly deadlocked. From VPRM: Procurement wanted all fields mandatory; Finance wanted flexibility for existing vendors. Solution: mandatory for new vendors, exception flag for existing ones. Both parties signed off after one facilitated workshop.',
    interviewTip: 'Always say you FACILITATE, not DECIDE. The decision authority stays with the Product Owner or business sponsors. Your job is to make it easy for them to decide.',
    memoryTrick: 'Stakeholder conflict = UNDERSTAND BOTH → FACILITATE JOINT SESSION → STRUCTURED FRAMEWORK → PHASED IF POSSIBLE → ESCALATE IF DEADLOCKED.',
    realExample: 'VPRM: Procurement vs Finance conflict on vendor field mandatory requirements. One facilitated workshop, one compromise documented, both signed off. Feature delivered in first release.',
    whyOthersWrong: {
      A: 'Hierarchy-based decisions bypass the legitimate business interests of the less-senior stakeholder and damage trust.',
      B: 'Hiding the conflict and delivering a hybrid nobody fully approved is dishonest and will surface as dissatisfaction post-launch.',
      D: 'Technical feasibility has no place in a business requirement conflict resolution. The business must drive the decision.'
    },
    isScenario: true
  },

  {
    id: 'stake_2',
    topic: 'Stakeholder Management',
    difficulty: 'Medium',
    question: 'A stakeholder keeps changing requirements every sprint. How do you handle this long-term?',
    options: {
      A: 'Accommodate every change without question since the stakeholder is the business owner and their evolving needs reflect real-world changes that the product must address. Agile is designed for change so there is no reason to push back.',
      B: 'Understand why changes keep coming (unclear vision vs. genuine business evolution), introduce Figma prototypes upfront for visual alignment before development, establish a formal Change Request process for post-planning changes, and schedule regular requirement review checkpoints to surface changes early rather than mid-sprint.',
      C: 'Stop taking meetings with the stakeholder and communicate only through email with a 48-hour response SLA so they have to think carefully before raising each new request, reducing the volume of changes through friction.',
      D: 'Escalate to the stakeholder\'s manager after the third sprint of changes and request that a different, more decisive stakeholder be assigned as the business representative for the remainder of the project.'
    },
    answer: 'B',
    explanation: 'Frequent requirement changes are a system problem, not just a person problem. Solve it at the system level. Root cause analysis first: Is the stakeholder unclear about their own vision? Are they seeing the product for the first time during demo and reacting? Are there genuine business environment changes driving the requirement shifts? Three interventions: (1) Figma prototypes before development — when stakeholders see and interact with a realistic wireframe, they give final feedback rather than reacting to working code. This alone reduces mid-sprint changes by 50-70% in practice. (2) Formal Change Request process — any change after sprint planning requires a written CR with business justification and impact assessment. This slows down casual, unreflective changes. (3) Regular requirement review checkpoints — weekly 30-minute sessions where upcoming stories are reviewed together, surface changes before they become mid-sprint disruptions. Frame the change process diplomatically: "I want to help you get exactly what you need. When changes come after sprint start, they add X days of effort. Let\'s invest 30 minutes now to lock requirements before we build."',
    interviewTip: 'Mention Figma specifically. Most BAs talk about "wireframes" abstractly. Naming the tool shows you actually do it.',
    memoryTrick: 'Frequent changes = PROTOTYPE FIRST + FORMAL CR PROCESS + EARLY CHECKPOINTS. Fix upstream, not downstream.',
    realExample: 'After introducing Figma wireframe reviews at the start of each VPRM module, mid-sprint requirement changes dropped significantly. Stakeholders saw the screens and gave final feedback before a single line of code was written.',
    whyOthersWrong: {
      A: 'Accepting all changes without structure creates sprint chaos, poor quality, and eventual stakeholder disappointment despite constant accommodation.',
      C: 'Reducing communication frequency increases surprise changes. Less contact, less alignment. This approach makes the problem worse.',
      D: 'Escalating after 3 sprints without attempting a structured solution is reactive and damages the stakeholder relationship unnecessarily.'
    },
    isScenario: true
  },

  {
    id: 'stake_3',
    topic: 'Stakeholder Management',
    difficulty: 'Medium',
    question: 'A technically-minded developer says your requirement document is too vague. A business stakeholder says the same document has too much technical detail. How do you respond?',
    options: {
      A: 'Create one single document and tell both parties to focus only on the sections relevant to them. It is unreasonable to maintain separate documents for different audiences as it doubles the documentation workload.',
      B: 'Pick one audience to prioritise — technical or business — based on who the primary decision-maker is, and write the document entirely for that audience. The other audience will need to adapt.',
      C: 'Acknowledge both pieces of feedback as valid since they reflect different, legitimate needs. Restructure your documentation approach: BRD for business stakeholders with high-level goals and workflows, FRD/SRS for the technical team with functional detail and specifications. Each document serves one audience with the right level of detail.',
      D: 'Tell the developer that requirement documents are business documents and are intentionally written in non-technical language. If they need technical detail, they should derive it themselves from the functional descriptions.'
    },
    answer: 'C',
    explanation: 'Both pieces of feedback are correct simultaneously — because they reflect two different documents with two different audiences. This is precisely why BRD, FRD, and SRS exist as separate documents. The BRD is for business stakeholders: clear business language, high-level goals, process outcomes, no technical specifications. The FRD is for development and QA: specific functional behaviour, screen-level detail, validation rules, workflow logic. The SRS adds non-functional requirements for the engineering team. When you receive this feedback from both sides, the correct response is: "You\'re both right — and that tells me I\'m trying to serve two different audiences with one document. Let me restructure: a BRD for the business view and an FRD for the technical view." This demonstrates documentation maturity and audience awareness.',
    interviewTip: 'Frame this as a documentation strategy question, not a conflict. Both parties are helping you improve. Thank them for the feedback and propose the restructure.',
    memoryTrick: 'One document for all audiences = wrong. BRD for BUSINESS, FRD/SRS for TECHNICAL. Separate docs, separate audiences.',
    realExample: 'VPRM: BRD shared with procurement/finance/operations stakeholders for approval. FRD shared with development team for sprint planning. SRS shared with technical architect for integration design. Each audience got the right view.',
    whyOthersWrong: {
      A: 'One document with sections for different audiences creates confusion and forces every reader to filter out content that isn\'t theirs.',
      B: 'Choosing one audience and ignoring the other will result in either stakeholders who cannot validate the system or developers who cannot build it correctly.',
      D: 'Telling developers to derive technical detail themselves from vague descriptions is how FRD misinterpretation defects are born.'
    },
    isScenario: true
  },

  // ===== SECTION 6: TOOLS & DATA =====
  {
    id: 'tools_1',
    topic: 'Tools & Data',
    difficulty: 'Easy',
    question: 'How have you used JIRA in your projects beyond just creating tickets?',
    options: {
      A: 'Mainly used JIRA to log bugs during UAT. The project manager handled all the sprint planning, backlog management, and reporting in JIRA while the BA focused on writing documents in Word and sharing them via email.',
      B: 'Used JIRA end-to-end: creating and managing epics, stories, tasks, and sub-tasks with structured hierarchy; sprint planning and board management; UAT defect logging with severity labels, module components, and steps to reproduce; sprint reports and velocity charts for PM conversations; and linking stories to Confluence requirement pages for single-click context access by developers.',
      C: 'Used JIRA primarily for timesheet logging and project cost tracking. Requirement documentation was done in a separate tool and JIRA was only used for financial project management purposes at the company.',
      D: 'Created user stories in JIRA by copying them from the BRD word for word, then handed JIRA management to the Scrum Master who updated status and managed the board throughout each sprint.'
    },
    answer: 'B',
    explanation: 'JIRA is a workflow engine, not just a ticket system. A BA who uses it well: (1) creates a logical Epic → Story → Task → Sub-task hierarchy that mirrors the product structure; (2) uses labels and components to categorise work (by module, release, or feature type) for filtered reporting; (3) maintains the sprint board with accurate statuses so the team can self-manage; (4) during UAT, creates bug-type issues with: severity label, module component, steps to reproduce, expected vs. actual result, screenshot attachment; (5) uses sprint reports and burndown charts to have data-driven conversations with the PM about capacity and velocity; (6) links JIRA stories to Confluence documentation so developers can access the full requirement context in one click. This integration between JIRA and Confluence is a hallmark of mature BA practice.',
    interviewTip: 'Mention the JIRA-Confluence link specifically. Most candidates say "I used both tools" without explaining the integration. The link is the differentiator.',
    memoryTrick: 'JIRA = HIERARCHY + LABELS + BOARD + DEFECTS + REPORTS + CONFLUENCE LINKS. Know all six uses.',
    realExample: 'VPRM: Epic "Vendor Management" → Stories for onboarding, requisition, approval → Tasks for each acceptance criterion. JIRA linked to Confluence FRD. Developers opened JIRA story → clicked Confluence link → full context. No clarification calls needed for 8 consecutive sprints.',
    whyOthersWrong: {
      A: 'Delegating JIRA entirely to the PM while the BA works in Word silos is a pre-Agile anti-pattern. BA ownership of the backlog is fundamental.',
      C: 'JIRA is not a financial management tool. This answer reflects either incorrect tool usage or confusion with a different platform.',
      D: 'Copying BRD text into JIRA stories word-for-word produces stories without acceptance criteria, story format, or sprint sizing — unusable for development.'
    },
    isScenario: false
  },

  {
    id: 'tools_2',
    topic: 'Tools & Data',
    difficulty: 'Medium',
    question: 'As a BA, how have you used SQL and PostgreSQL in your work?',
    options: {
      A: 'Used SQL to design the entire database schema for the VPRM system, writing complex stored procedures, triggers, and query optimisation scripts that the development team then reviewed and implemented in PostgreSQL.',
      B: 'Have never used SQL since requirement writing is entirely text-based and there is no need for database querying at the BA level. SQL is a technical skill for developers and DBAs, not business analysts.',
      C: 'Used PostgreSQL for targeted data validation and ad-hoc analysis: running SELECT queries to verify that workflow actions stored correct data (vendor IDs, approval statuses, routing logic), cross-referencing production data to diagnose UAT defects, and extracting data summaries for stakeholder reporting in Excel.',
      D: 'Used SQL exclusively for generating automated test reports that were sent to the QA team each morning, saving them time on manual test execution by pre-populating test result tables with system data.'
    },
    answer: 'C',
    explanation: 'BA-level SQL usage is targeted and pragmatic — not database administration, but not zero either. The three primary BA SQL uses: (1) Data validation — after a workflow action (e.g., requisition submission), run a SELECT to confirm the correct vendor ID, department code, amount, approver ID, and status are stored exactly as the business rules specify. (2) Defect diagnosis — when a UAT defect is raised (e.g., "approver not receiving notifications"), query the approval routing table to check if the routing logic was applied correctly. In VPRM, a NULL in the approver mapping table was the root cause — found via PostgreSQL query in 20 minutes, saving 2 days of developer investigation. (3) Stakeholder reporting — extract summary data for progress reports or ad-hoc business questions that don\'t require a formal report from the development team.',
    interviewTip: 'The PostgreSQL + UAT defect diagnosis story is one of your strongest concrete examples. Use it. It shows analytical skill that goes beyond documentation.',
    memoryTrick: 'BA SQL = VALIDATE + DIAGNOSE + REPORT. Not database design — targeted, purposeful querying.',
    realExample: 'VPRM: approval notification defect → queried approval_routing table in PostgreSQL → found NULL in approver_id column for Finance department → data setup issue confirmed, not a code bug. Saved 2 days of developer investigation.',
    whyOthersWrong: {
      A: 'Writing stored procedures and optimising queries is DBA/developer work. Overclaiming technical depth can backfire if the interviewer asks a follow-up SQL technical question.',
      B: 'BAs with zero SQL awareness are at a significant disadvantage in data-heavy environments, especially healthcare where member data, eligibility, and claims data drive core workflows.',
      D: 'SQL-generated automated test reports is a QA automation concept, not a typical BA SQL use case. This answer signals confusion about role boundaries.'
    },
    isScenario: false
  },

  {
    id: 'tools_3',
    topic: 'Tools & Data',
    difficulty: 'Easy',
    question: 'How do you use Figma as a Business Analyst (not a designer)?',
    options: {
      A: 'As a BA you should not use Figma at all — it is a design tool for UX designers and using it as a BA creates role confusion and can undermine the designer\'s authority on UI decisions.',
      B: 'Use Figma to create high-fidelity pixel-perfect UI designs including colour schemes, typography, animations, and component libraries that the development team can implement directly without needing a separate UX designer on the project.',
      C: 'Use Figma to create low-fidelity wireframes and workflow-level prototypes specifically as a communication and alignment tool: surface stakeholder feedback before development, show navigation flows between screens, and give developers a visual reference for UI structure and field layout.',
      D: 'Use Figma only to annotate screenshots of the existing live system when reporting UAT defects, drawing red circles and arrows to mark where the defect appears so developers can find it without reading the written steps.'
    },
    answer: 'C',
    explanation: 'BAs use Figma for communication, not design. The distinction matters. Low-fidelity wireframes (boxes, labels, basic layout) are sufficient for requirement validation — you are not designing the product, you are aligning everyone on WHAT needs to be built before HOW is determined. Key BA uses of Figma: (1) Screen structure wireframes — shows field layout, mandatory vs optional fields, button placement, validation messages; (2) Navigation flow prototypes — shows how users move between screens, which is critical for workflow requirement validation; (3) Pre-development stakeholder review — stakeholders click through the prototype and give specific feedback (e.g., "the approval history needs a date stamp") that is a 5-minute Figma change vs a multi-day development change; (4) Sprint reference for developers — removes guesswork about UI expectations. You also use AI-assisted tools: Figma Make and Google Stitch for rapid initial layout generation.',
    interviewTip: 'Quantify the value: "A UI issue caught in Figma costs 5 minutes to fix. The same issue caught in development costs 2-3 days. That\'s why I wireframe before sprinting."',
    memoryTrick: 'BA Figma = LOW-FID WIREFRAMES + NAVIGATION FLOWS + PRE-SPRINT STAKEHOLDER REVIEW. Communication tool, not design tool.',
    realExample: 'VPRM: Figma wireframes for vendor onboarding form and approval dashboard. Procurement team review caught a missing date stamp field in approval history — 5-minute fix in Figma, prevented a 2-day development change.',
    whyOthersWrong: {
      A: 'BAs create wireframes for requirement clarity, not to replace designers. Both roles exist simultaneously and serve different purposes.',
      B: 'Pixel-perfect high-fidelity design is UX designer territory. BAs who attempt this overextend their role and undermine the design team.',
      D: 'Annotating screenshots for defects is useful but represents approximately 5% of Figma\'s value as a BA tool. This answer severely undersells the strategic use.'
    },
    isScenario: false
  },

  // ===== SECTION 7: AI TOOLS =====
  {
    id: 'ai_1',
    topic: 'AI Tools & Productivity',
    difficulty: 'Easy',
    question: 'How do you specifically use ChatGPT and Claude in your day-to-day work as a BA?',
    options: {
      A: 'Use AI tools to automatically generate the final BRD and FRD documents without any manual review or editing, then submit them directly to stakeholders and development teams to save maximum time.',
      B: 'Avoid AI tools entirely since requirement documents must be fully original to avoid IP and confidentiality concerns. All documents should be written from scratch by the BA using their own knowledge and stakeholder inputs only.',
      C: 'Use ChatGPT for documentation first drafts (BRD sections, user manuals, user stories) and content generation; use Claude for analytical tasks (reviewing FRDs for logical gaps, researching domain concepts, comparing solution options); use Figma Make and Google Stitch for AI-assisted wireframing — always reviewing, validating, and refining all AI output before use.',
      D: 'Use AI tools only for personal productivity tasks like drafting emails and scheduling meeting agendas. Professional BA documents like BRDs and FRDs must always be written entirely manually to maintain quality and accuracy standards.'
    },
    answer: 'C',
    explanation: 'The differentiated use of each AI tool is the key to this answer. ChatGPT strengths: structure and content generation — first drafts of BRD sections, user manual chapters, user story templates, email drafts, meeting summary templates. Claude strengths: reasoning and analysis — reviewing requirement documents for logical inconsistencies, identifying missing edge cases, researching complex domain concepts (like healthcare eligibility workflows). The critical discipline: never submit AI output directly. AI produces a draft; the BA provides professional judgment, domain accuracy, and stakeholder validation. Quality process: completeness check → accuracy cross-reference → logical consistency review → domain appropriateness validation. In practice: ChatGPT for a 15-page user manual saved 4-5 hours. Claude review of a VPRM FRD identified 3 missing edge cases before development started.',
    interviewTip: 'The JD explicitly lists AI fluency as a requirement. This is not a question to be modest about. Be specific about which tool does what and exactly how much time it saves.',
    memoryTrick: 'ChatGPT = GENERATE (first drafts). Claude = ANALYSE (review + research). Figma Make = WIREFRAME (AI-assisted). Always review everything.',
    realExample: 'VPRM user manual: ChatGPT first draft in 90 minutes → 2 hours of Vaishnavi review and refinement → final product in ~3.5 hours vs. estimated 8 hours manual. Time saved reinvested in stakeholder sessions.',
    whyOthersWrong: {
      A: 'Submitting unreviewed AI output is professionally reckless. AI can generate plausible but incorrect business rules, especially in domains it does not know well.',
      B: 'Avoiding AI entirely is not a quality decision — it is a productivity disadvantage. The JD explicitly requires AI fluency. This answer is self-eliminating.',
      D: 'Limiting AI to emails and scheduling uses approximately 5% of its potential value. This answer signals low AI capability, which the JD explicitly requires.'
    },
    isScenario: false
  },

  {
    id: 'ai_2',
    topic: 'AI Tools & Productivity',
    difficulty: 'Medium',
    question: 'Give a specific example where using an AI tool directly improved the quality of your work — not just your speed.',
    options: {
      A: 'Used ChatGPT to write 200 automated test scripts for the VPRM system that ran nightly in the CI/CD pipeline, dramatically improving test coverage and catching regression defects before they reached UAT.',
      B: 'Used Claude to review the VPRM FRD before submitting it for development review. Claude identified 3 specific logical gaps: missing exception flows for when an approver is on leave, undefined behaviour when a requisition amount straddles two approval tiers, and no error message specification for duplicate vendor ID submission. Validated all 3 with stakeholders and added them. Zero critical defects were later traced to unclear requirements.',
      C: 'Used AI tools to paraphrase the entire VPRM BRD into simpler language that non-technical stakeholders could understand more easily, improving comprehension scores in the post-project stakeholder survey by 40%.',
      D: 'Used ChatGPT to translate the VPRM FRD from English into Marathi and Hindi so that local vendor representatives who were not fluent in English could read and validate the requirements in their native language.'
    },
    answer: 'B',
    explanation: 'The key distinction this question tests is quality improvement vs speed improvement. Speed is easy to claim; quality impact is harder and more impressive. Claude\'s strength is analytical reasoning — when you feed it a requirements document with the prompt "identify logical gaps, missing edge cases, and scenarios where requirements may conflict," it surfaces issues that a human reviewer might miss due to familiarity bias. The three gaps Claude found in VPRM: (1) Approver on leave — no backup routing defined → potential workflow stall in production; (2) Amount at approval tier boundary — undefined behaviour → potential routing to wrong approver; (3) Duplicate vendor ID — no error message → silent data integrity risk. Each of these would have been a High or Critical defect in UAT. Preventing them upstream is a quality contribution, not just a speed one. This is the answer that differentiates AI-fluent BAs from AI-aware BAs.',
    interviewTip: 'The phrase "zero critical defects traced to unclear requirements" is a career-defining metric. If you can honestly claim it, say it. It is the ultimate BA quality indicator.',
    memoryTrick: 'AI QUALITY = use Claude to review your OWN documents before submitting. Fresh analytical perspective catches your blind spots.',
    realExample: 'FRD review with Claude → 3 missing edge cases found → added before development → zero critical defects traced to requirement gaps in VPRM. Quality improvement, not just speed.',
    whyOthersWrong: {
      A: 'Writing automated test scripts in CI/CD pipelines is QA automation and DevOps work, not typical BA work. This answer overextends the BA role boundary and may not be credible.',
      C: 'Paraphrasing documents for simpler language is a useful but minor quality improvement. It is closer to an editing task than a strategic quality contribution.',
      D: 'Translation is a legitimate use case but has nothing to do with the content quality of the requirements themselves.'
    },
    isScenario: false
  },

  {
    id: 'ai_3',
    topic: 'AI Tools & Productivity',
    difficulty: 'Hard',
    question: 'In a healthcare IT context, how would you use AI tools while maintaining HIPAA compliance and data accuracy?',
    options: {
      A: 'Use AI tools freely for all healthcare work including sharing patient records, member eligibility data, and claims information with ChatGPT and Claude since these tools have strong encryption and maintain full HIPAA compliance for all uploaded data.',
      B: 'Avoid using AI tools entirely in a healthcare environment since the data privacy risks outweigh any productivity benefits and healthcare companies should not use AI until regulatory frameworks specifically approve each tool for HIPAA-covered use cases.',
      C: 'Use AI tools for healthcare BA work with strict data governance: never input real patient or member data — use anonymised or synthetic examples; use AI for domain learning (healthcare concepts, FHIR standards), document structuring and first drafts (using fictional scenarios), and test case generation (synthetic member scenarios). All AI-generated content must be reviewed by a healthcare domain SME before use in production documents.',
      D: 'Submit a request to Anthropic and OpenAI for HIPAA Business Associate Agreements, wait for their approval, then share full production healthcare data freely once BAAs are in place since that covers all liability for any data privacy incidents.'
    },
    answer: 'C',
    explanation: 'HIPAA compliance with AI tools requires clear data governance. Never input real Protected Health Information (PHI) — member IDs, claim details, diagnosis codes, dates of birth — into public AI tools regardless of BAA status, because these tools process data through external servers. The compliant AI use framework for healthcare BAs: (1) Domain learning — use Claude to understand health plan benefit structures, FHIR specifications, ICD/CPT coding, eligibility verification workflows using public knowledge. (2) Document drafting — generate first drafts using fictional/synthetic scenarios ("Member John Doe, Plan ID 12345") that never reference real data. (3) Test case generation — create UAT scenarios using synthetic member eligibility data. (4) SME review gate — all AI-generated healthcare content must be reviewed by a healthcare domain expert before inclusion in any client-facing or production document, because AI may use correct general terminology but incorrect healthcare-specific logic. The risk is not just legal — in healthcare, an incorrect benefit rule can result in incorrect claims payment affecting real patients.',
    interviewTip: 'Showing HIPAA awareness without being asked directly is a strong signal of healthcare domain readiness. Interviewers at healthcare companies deeply appreciate candidates who think about compliance proactively.',
    memoryTrick: 'Healthcare AI rule: NO REAL PHI + SYNTHETIC DATA ONLY + SME REVIEW ALWAYS. Three non-negotiable guardrails.',
    realExample: 'For healthcare UAT test case generation: use fictional member names, synthetic plan IDs, and hypothetical eligibility scenarios — never real production data. AI generates 80% of test cases; domain SME validates healthcare-specific accuracy of expected results.',
    whyOthersWrong: {
      A: 'Sharing real PHI with public AI tools — even with encryption — violates HIPAA. ChatGPT and Claude are not HIPAA-certified covered entities by default.',
      B: 'Avoiding AI entirely in healthcare is not necessary or productive. The question is how to use it safely, not whether to use it at all.',
      D: 'Even with a BAA in place, sharing PHI with AI tools requires careful governance and is not a blanket permission to share all production data freely.'
    },
    isScenario: true
  },

  // ===== SECTION 8: HEALTHCARE DOMAIN =====
  {
    id: 'health_1',
    topic: 'Healthcare Domain',
    difficulty: 'Medium',
    question: 'What is the difference between a healthcare payer and a healthcare provider? Why does this matter for a BA at Simplify Healthcare?',
    options: {
      A: 'Payer and provider are interchangeable terms used in different regions of the US. East Coast companies say payer while West Coast companies say provider. There is no functional difference between the two.',
      B: 'A payer is a health insurance company (Aetna, UnitedHealth, BlueCross) that finances healthcare services by collecting premiums and paying claims. A provider is a healthcare delivery entity (hospital, clinic, physician) that delivers the actual care. Simplify Healthcare works on the PAYER side — building products that help health plans manage benefit structures, member eligibility, and claims configuration.',
      C: 'A healthcare provider is the organisation that provides health insurance to members. A healthcare payer is the organisation that provides medical services like surgery and diagnostics. The two terms describe the two sides of the healthcare transaction from opposite perspectives.',
      D: 'Payers are government entities like Medicare and Medicaid that administer public healthcare programs. Providers are private insurance companies that sell supplemental plans. Simplify Healthcare works with both types on equal terms.'
    },
    answer: 'B',
    explanation: 'This is foundational healthcare IT terminology every BA at a payer-side company must know. Payers: Health insurance companies and managed care organisations — Aetna, UnitedHealth, Cigna, BlueCross BlueShield, Humana. They collect premiums from members and employers, define benefit plans (what is covered, at what cost), verify member eligibility, adjudicate claims (decide what to pay), and manage provider networks and contracts. Providers: Hospitals, clinics, physician practices, pharmacies. They deliver medical services and submit claims to payers for reimbursement. Simplify Healthcare is exclusively on the PAYER SIDE — their products help health plans manage the complexity of defining and configuring benefit structures. As a BA there, you translate insurance plan documents and coverage rules into functional specifications for the benefits configuration system. This is why understanding payer operations is critical.',
    interviewTip: 'Always describe Simplify Healthcare as payer-side. Do not conflate them with clinical systems companies like Epic or Cerner which are provider-side.',
    memoryTrick: 'PAYER = collects premiums + pays claims (insurance company). PROVIDER = delivers care + submits claims (hospital/doctor). Simplify Healthcare = PAYER SIDE.',
    realExample: 'Your VPRM work involved multi-party workflows (procurement, finance, operations) with complex approval rules — the structural equivalent of payer benefit configuration with plan sponsors, member services, and compliance teams.',
    whyOthersWrong: {
      A: 'Payer and provider are categorically different entities with different business models, regulatory obligations, and system needs. They are never interchangeable.',
      C: 'This reverses the definitions entirely. Payers provide insurance (financial); providers provide care (clinical). The reversal is a fundamental error.',
      D: 'Medicare and Medicaid are government payer programs, but the payer category is much broader and includes all health insurance companies. Private insurers are also payers, not providers.'
    },
    isScenario: false
  },

  {
    id: 'health_2',
    topic: 'Healthcare Domain',
    difficulty: 'Hard',
    question: 'What are FHIR and HL7, and why would a BA at a healthcare IT company need to understand them?',
    options: {
      A: 'FHIR and HL7 are programming languages specifically designed for healthcare applications. BAs need to learn to code in both languages to write technical requirements for healthcare system integrations.',
      B: 'HL7 (Health Level 7) is a set of standards for exchanging healthcare data between systems. FHIR (Fast Healthcare Interoperability Resources) is the modern, API-based evolution of HL7 that enables real-time healthcare data exchange. BAs need to understand them to write integration requirements and functional specs for healthcare data flows accurately.',
      C: 'FHIR is a US government regulation that all healthcare companies must comply with by law. HL7 is the government agency that enforces FHIR compliance. BAs are responsible for ensuring their company passes FHIR audits on an annual basis.',
      D: 'HL7 and FHIR are database formats used specifically for storing electronic health records. BAs must understand them to write SQL queries against healthcare databases and extract member eligibility data for reporting.'
    },
    answer: 'B',
    explanation: 'HL7 (Health Level 7) is the foundational standard for healthcare data exchange — defining message formats and communication protocols between healthcare systems (hospital to lab, EHR to payer). It has been the backbone of healthcare IT interoperability for decades. FHIR (Fast Healthcare Interoperability Resources) is the modern evolution, developed by HL7, that uses RESTful APIs and JSON/XML data formats to enable real-time, internet-based healthcare data exchange. FHIR resources (Patient, Coverage, Claim, ExplanationOfBenefit) are the building blocks of modern payer API integrations. Why a BA needs to understand them: when writing integration requirements for a benefits configuration system (Simplify Healthcare\'s core product), you need to know what data standards the system must accept and emit. If a payer client sends eligibility data in FHIR format, the BA must document the integration requirements in terms of FHIR resource structures. You do not need to code — but you need to know what these standards mean when a developer or architect references them.',
    interviewTip: 'Even saying "I have read the publicly available FHIR R4 implementation guides and understand the Coverage and EligibilityResponse resource structures" signals significant preparation.',
    memoryTrick: 'HL7 = healthcare data standards (old). FHIR = modern API-based healthcare data exchange (new). FHIR resources: Patient, Coverage, Claim, EOB.',
    realExample: 'Payer-side integration requirement: "The eligibility verification API must accept FHIR R4 Coverage resources from provider-side systems and return FHIR EligibilityResponse resources with benefit detail." This is a BA-level specification.',
    whyOthersWrong: {
      A: 'FHIR and HL7 are data standards and protocols, not programming languages. Writing code in them is not possible or required.',
      C: 'FHIR compliance is a CMS and ONC regulatory requirement for certain healthcare entities, but HL7 is a standards organisation, not a government agency, and does not conduct audits.',
      D: 'HL7 and FHIR are interchange standards, not database storage formats. They govern how data moves between systems, not how it is stored within them.'
    },
    isScenario: false
  },

  {
    id: 'health_3',
    topic: 'Healthcare Domain',
    difficulty: 'Hard',
    question: 'A health plan client says they want to configure a benefit that covers 80% of inpatient hospital costs after a $1,500 annual deductible is met. How would you document this as a BA?',
    options: {
      A: 'Write a single sentence in the BRD: "System should cover 80% of inpatient hospital costs after deductible" and let the development team figure out the detailed logic since they are technical enough to interpret benefit rules without detailed specifications.',
      B: 'Document the complete benefit rule with all parameters: Benefit Type (Inpatient Hospital), Cost-Sharing Structure (80% coinsurance, 20% member responsibility), Deductible threshold ($1,500 annual), Application logic (deductible applies first; coinsurance applies only to claims where cumulative annual deductible is met), Benefit limits (in/out-of-network applicability, annual max if any), and edge cases (what happens if a claim straddles the deductible threshold — partially met deductible).',
      C: 'Enter the benefit configuration directly into the system yourself using the admin configuration tool, since creating the benefit in the system simultaneously creates the documentation and eliminates the need for a separate requirements document.',
      D: 'Ask the client to provide a complete legal policy document with all benefit terms and simply attach it to the JIRA epic as the functional requirement, since the legal document is already the authoritative source for what the benefit should do.'
    },
    answer: 'B',
    explanation: 'Healthcare benefit documentation requires precision that goes far beyond a single sentence. A correctly documented benefit rule includes: (1) Benefit Type and Place of Service — Inpatient Hospital, not outpatient or ER; (2) Cost-sharing structure — 80% plan pays, 20% member pays (coinsurance, not copay); (3) Deductible parameters — $1,500 annual, does the deductible reset on plan year? Does it accumulate separately per family member (individual deductible) or collectively (family deductible)? (4) Application logic — deductible accumulates from dollar one; once $1,500 cumulative inpatient claims are paid by the member, 80/20 coinsurance kicks in; (5) Network applicability — in-network only, out-of-network, or both with different cost-sharing? (6) Edge case — a claim for $2,000 when $800 of deductible has been met: member pays $700 deductible balance + 20% of remaining $1,300 = $700 + $260 = $960 member responsibility. This edge case MUST be documented or the system will calculate it incorrectly.',
    interviewTip: 'Walk through the deductible-straddling edge case calculation in your answer. This level of detail signals genuine healthcare benefit understanding and impresses healthcare IT interviewers.',
    memoryTrick: 'Healthcare benefit doc = BENEFIT TYPE + COST SHARE % + DEDUCTIBLE LOGIC + NETWORK + LIMITS + EDGE CASES (straddling claim). Never just a summary.',
    realExample: 'Your VPRM approval tier boundary scenario (amount that straddles two approval levels) is structurally identical to this deductible-straddling problem. Same analytical skill, different domain.',
    whyOthersWrong: {
      A: 'Vague benefit specifications cause incorrect claims payment — a critical compliance failure in healthcare. "Let the developers figure it out" is not acceptable in any domain, least of all healthcare.',
      C: 'Configuring systems directly without documentation violates every change management and audit trail standard in healthcare IT. Configuration must be preceded by signed-off specifications.',
      D: 'Legal policy documents are written for regulatory compliance, not system configuration. They are inputs to the BA\'s requirements process, not substitutes for it.'
    },
    isScenario: true
  },

  {
    id: 'health_4',
    topic: 'Healthcare Domain',
    difficulty: 'Medium',
    question: 'You are new to healthcare IT. How do you ramp up on domain knowledge quickly without making avoidable mistakes in your requirements?',
    options: {
      A: 'Pretend to have healthcare domain knowledge in your first few months and gradually build it up through the work. Admitting a knowledge gap to stakeholders and teammates damages your credibility as a BA so it is better to appear confident even when uncertain.',
      B: 'Request a 6-month non-delivery grace period from your manager during which you only attend meetings and shadow senior colleagues without producing any deliverables, so you can fully build domain knowledge before being held to performance standards.',
      C: 'Follow a structured ramp-up: structured self-study using public resources (CMS website, FHIR implementation guides, healthcare benefit terminology) → shadow domain SMEs and client-facing calls → use AI tools (Claude) to research and explain concepts quickly → apply learning to initial deliverables with explicit SME review gates → never submit a healthcare-specific requirement without SME validation until you have 90 days of domain exposure.',
      D: 'Apply your existing BA skills directly without any specific healthcare domain preparation, since business analysis frameworks (BRDs, user stories, UAT) are generic enough to work in any domain without requiring domain knowledge.'
    },
    answer: 'C',
    explanation: 'Domain knowledge ramp-up in healthcare follows a proven pattern. Structured self-study: CMS.gov for payer regulation basics, HL7.org for FHIR documentation, healthcare benefit glossaries for terminology (deductible, coinsurance, copay, out-of-pocket maximum, coordination of benefits, prior authorisation). AI-assisted research: Claude is exceptionally useful for rapid domain concept explanation — "Explain how a deductible accumulates for a family plan with individual and family thresholds in plain language" gets you to working knowledge in minutes. Shadow first, then lead: sit in on client calls, product demos, and SME discussions before owning them. Identify the domain SMEs on your team and build relationships quickly — they are your accuracy guardrail. Validation gate: for the first 90 days, every healthcare-specific requirement you write should be reviewed by a domain SME before submission. This is not weakness — it is the professional standard for domain transitions in a high-stakes industry.',
    interviewTip: 'Proactively name one or two specific things you have already done to prepare: "I have been reading about health plan benefit structures and the basics of FHIR R4 resources in preparation for this role." This is powerful because most candidates have done zero preparation.',
    memoryTrick: 'Healthcare ramp-up: SELF STUDY → SHADOW SMEs → AI-ASSISTED RESEARCH → DELIVER WITH SME REVIEW → FULL INDEPENDENCE AT 90 DAYS.',
    realExample: 'Vaishnavi ramped up on procurement domain in 2 weeks for VPRM using the same pattern: research + stakeholder shadowing + structured elicitation + iterative validation. Identical approach works for healthcare.',
    whyOthersWrong: {
      A: 'Pretending to know things you do not in healthcare leads to incorrect benefit specifications — which can translate to incorrect claims payment affecting real patients. This is both professionally and ethically unacceptable.',
      B: 'A 6-month non-delivery period is unrealistic in any commercial product environment. Domain learning happens concurrently with delivery, not before it.',
      D: 'Healthcare benefit logic, HIPAA compliance requirements, and payer-specific business rules are highly specialised. BA frameworks transfer; domain knowledge must be built.'
    },
    isScenario: true
  },

  // ===== SECTION 9: BEHAVIORAL & SITUATIONAL =====
  {
    id: 'beh_1',
    topic: 'Behavioral',
    difficulty: 'Medium',
    question: 'Tell me about a time you made a mistake in your BA work. What happened and what did you change?',
    options: {
      A: 'State that you have not made any significant mistakes in your career so far, since you are detail-oriented and thorough in all your work. Small errors are caught in review cycles before they reach the development team.',
      B: 'Describe missing an exception flow in the VPRM FRD: the scenario when the designated approver is on leave was not documented. This surfaced as a defect in UAT — the workflow stalled with no notification or escalation. You took ownership, added a dedicated exception scenarios section to your FRD template, and started using Claude to review your own requirements for "what if" gaps before submitting. Zero related defects occurred in subsequent sprints.',
      C: 'Describe making a typo in a stakeholder email that addressed the Finance Director by the wrong name. You immediately sent an apology and learned to always double-check recipient names before sending important communications.',
      D: 'Explain that mistakes in requirement documentation are always the stakeholder\'s responsibility since they are the ones who provide the information. The BA only documents what is given, so any gaps in requirements trace back to incomplete stakeholder inputs.'
    },
    answer: 'B',
    explanation: 'Behavioral questions about mistakes are testing three things: self-awareness (do you recognise and own mistakes?), accountability (do you blame others or take responsibility?), and growth (did the mistake actually change how you work?). The VPRM exception flow example is an ideal answer because: (1) the mistake was real and professionally relevant — not a trivial typo; (2) it had a tangible consequence — a UAT defect that caused rework; (3) you took clear ownership — no deflection to stakeholders; (4) the response was structural — not "I will be more careful next time" but a specific process change: added exception scenarios section + Claude review gate; (5) the outcome is measurable — zero related defects in subsequent sprints. This is the level of reflection that impresses senior interviewers. Vague answers like "I am very careful so I rarely make mistakes" raise red flags because everyone makes mistakes — candidates who deny this appear either dishonest or lacking self-awareness.',
    interviewTip: 'The quality of your failure story is measured by the quality of the change it produced. A small mistake with a big process improvement is a better answer than a big mistake with a vague lesson.',
    memoryTrick: 'Mistake answer = WHAT HAPPENED → IMPACT → I OWNED IT → SPECIFIC PROCESS CHANGE → MEASURABLE OUTCOME. Five beats, not four.',
    realExample: 'VPRM missing exception flow → UAT defect → new FRD template section + Claude review gate → zero exception-related defects in VPRM Phase 2. That\'s a complete learning loop.',
    whyOthersWrong: {
      A: 'Claiming zero mistakes is a red flag. Interviewers know it is false and it signals low self-awareness or dishonesty.',
      C: 'A typo in an email is too trivial for this question. It suggests either poor self-awareness (you think this is your biggest mistake) or evasion (you are hiding real mistakes).',
      D: 'Blaming stakeholders for requirement gaps is the defining characteristic of a poor BA. Requirement completeness is the BA\'s professional responsibility, not the stakeholder\'s.'
    },
    isScenario: false
  },

  {
    id: 'beh_2',
    topic: 'Behavioral',
    difficulty: 'Medium',
    question: 'How do you manage your work when you have simultaneous deadlines across multiple projects?',
    options: {
      A: 'Work late every night and through weekends whenever multiple deadlines converge, since demonstrating maximum effort and availability is the only reliable way to meet all commitments simultaneously.',
      B: 'Prioritise using urgency + impact: identify which deadline has the highest downstream consequence if missed (e.g., a story that blocks a sprint vs. a report that can be one day late). Time-block mornings for deep documentation work. Maintain a cross-project task tracker. Communicate proactively when a deadline is at risk — flag it 2-3 days early, not after the fact.',
      C: 'Meet with your manager every morning to receive a new prioritised task list for the day so you always know exactly what to work on without having to make prioritisation decisions yourself.',
      D: 'Focus exclusively on the project with the most senior stakeholder since their timeline is the most politically important, and communicate to other project teams that their timelines will be deprioritised during this period.'
    },
    answer: 'B',
    explanation: 'Multiple simultaneous deadlines require a system, not just effort. The professional approach: (1) Priority matrix — urgency × impact. Which deadline blocks the development team if missed? Which unblocks UAT? Which is a stakeholder reporting request that has flexibility? Always prioritise work that unblocks others first. (2) Time-blocking — protect 2-hour morning blocks for deep documentation work (BRDs, FRDs, test cases). Meetings go in the afternoon. Reactive work (JIRA comments, email) in end-of-day slots. (3) Cross-project tracker — one consolidated Excel or Confluence table with deliverable, project, owner, due date, status, dependencies. This prevents any deliverable from falling off the radar. (4) Proactive risk communication — flag timeline risks 2-3 days before the deadline, not after. "I am working on VPRM FRD and Jewellery platform UAT simultaneously this week. The VPRM FRD will be complete by Thursday as planned. The UAT report may slip to Friday — I wanted to flag this now so you can plan accordingly." From your resume: you managed VPRM and Jewellery E-Commerce simultaneously, which is direct evidence of multi-project management.',
    interviewTip: 'Quantify your system: "I maintain a cross-project task tracker with 6 columns: deliverable, project, due date, status, blocker, and next action. I review it every morning and every Friday afternoon."',
    memoryTrick: 'Multi-deadline system: PRIORITISE (urgency × impact) + TIME-BLOCK + TRACKER + COMMUNICATE EARLY. Four components.',
    realExample: 'At Newgen: simultaneously managing VPRM active sprint requirements + Jewellery platform UAT coordination. Consolidated tracker in Confluence. VPRM delivered on schedule, Jewellery UAT sign-off one day early.',
    whyOthersWrong: {
      A: 'Working late as the primary strategy is unsustainable and signals poor planning rather than strong time management.',
      C: 'Relying on your manager for daily prioritisation signals inability to self-manage — a critical BA skill deficiency.',
      D: 'Prioritising by stakeholder seniority rather than actual impact is politically motivated rather than professionally sound.'
    },
    isScenario: false
  },

  {
    id: 'beh_3',
    topic: 'Behavioral',
    difficulty: 'Medium',
    question: 'A developer pushes back and says your requirements are too detailed and slowing them down. How do you respond?',
    options: {
      A: 'Immediately reduce all documentation to one-line user stories with no acceptance criteria, since developer feedback is the most important signal for adjusting documentation style and the development team knows best how much detail they need.',
      B: 'Have a direct, curious conversation: ask specifically which elements they find excessive and why. Distinguish between true over-specification (documenting implementation decisions that are the developer\'s domain) vs. business rule precision that prevents misinterpretation. Find the right calibration together and adjust your template accordingly.',
      C: 'Tell the developer that requirement documentation standards are set by the BA and project manager, not the development team, and that they should adjust their reading process rather than asking the BA to change a professional standard that protects quality.',
      D: 'Escalate the issue to the Scrum Master and ask them to mediate between the BA and the developer, since interpersonal disagreements about documentation standards are a process conflict that should be resolved at the Scrum ceremony level.'
    },
    answer: 'B',
    explanation: 'Pushback on requirement detail level is legitimate feedback that deserves a genuine response — not dismissal and not complete capitulation. The right response is collaborative calibration. First, get specific: "Which parts feel over-specified to you? Is it the acceptance criteria, the technical implementation notes, or the edge case scenarios?" This surfaces whether the pushback is about genuinely BA-domain content (too much implementation detail is a valid complaint — BAs should not specify HOW, only WHAT) or about business rule precision that is genuinely necessary. The distinction matters: if the BA is specifying database table names or API method signatures, that is over-specification. If the BA is documenting what happens when an approval amount straddles two tiers, that precision is protecting the developer from an ambiguous decision that will cause a defect. Find the right calibration and update the template. The outcome should be: developer works faster AND requirement quality is maintained. Not one at the other\'s expense.',
    interviewTip: 'Show curiosity, not defensiveness. "I want to find the right level of detail that serves the team best — what specifically feels excessive?" is the right opening.',
    memoryTrick: 'Dev pushback on detail: ASK WHICH PARTS → DISTINGUISH OVER-SPEC vs NECESSARY PRECISION → CALIBRATE TOGETHER → UPDATE TEMPLATE.',
    realExample: 'If a VPRM developer said acceptance criteria were too long: "Which section slowed you down? The happy path steps are the minimum. The edge cases — like the approver on leave scenario — prevented 3 defects in the last sprint. Would you want to remove those?" Then listen.',
    whyOthersWrong: {
      A: 'Removing all acceptance criteria based on one developer\'s feedback transfers the business rule interpretation risk from the BA to the developer — which produces defects.',
      C: 'Dismissing developer feedback with "documentation standards are set by the BA" is arrogant and damages a critical working relationship.',
      D: 'Escalating a direct professional conversation to the Scrum Master is disproportionate and signals poor interpersonal management skills.'
    },
    isScenario: true
  },

  {
    id: 'beh_4',
    topic: 'Behavioral',
    difficulty: 'Easy',
    question: 'What is your biggest professional strength as a Business Analyst?',
    options: {
      A: 'Claim that you are equally strong in all areas of BA work — requirement gathering, documentation, stakeholder management, data analysis, and technical skills — and that it is impossible to identify one area as a standout strength.',
      B: 'Describe translating ambiguity into clarity as your standout strength: the ability to take a stakeholder\'s vague problem statement and produce documentation precise enough for the development team to build from and the QA team to test against — backed by your VPRM outcome (zero critical defects traced to unclear requirements).',
      C: 'Say your biggest strength is typing speed and attention to formatting, since requirement documents need to look professional and be free of typographical errors before being shared with stakeholders and development teams.',
      D: 'Explain that your biggest strength is a positive attitude and willingness to work long hours whenever the project needs it, since dedication and enthusiasm are the most important qualities a BA can bring to a team.'
    },
    answer: 'B',
    explanation: 'A strengths answer must be: (1) specific — not "I am a good communicator" but "I translate ambiguity into documentation precise enough for development and QA"; (2) backed by evidence — "In VPRM, this resulted in zero critical defects traced to unclear requirements across two major releases"; (3) relevant to the JD — the JD asks for analytical thinking, documentation, and cross-functional collaboration. Connecting your strength to these explicitly shows alignment. The ideal answer structure: Name the strength → Describe what it specifically enables → Give a concrete outcome from your work. For Vaishnavi: "My strongest skill is translating complex, ambiguous business needs into clear, actionable documentation. Whether it is a BRD, an FRD, or a set of user stories, I ensure the development team has what they need to build confidently and the QA team has what they need to test precisely. In the VPRM project, that resulted in zero critical defects being traced to unclear requirements across the entire delivery." Optionally add AI fluency as a differentiator.',
    interviewTip: 'End with a differentiator statement: "I also bring AI-augmented documentation productivity — I consistently produce first-draft quality 30-40% faster, which frees time for the stakeholder work that actually requires a human."',
    memoryTrick: 'Strength answer = NAME IT + DESCRIBE WHAT IT ENABLES + EVIDENCE FROM YOUR WORK. Three beats, not one.',
    realExample: 'VPRM: zero critical defects traced to unclear requirements across 2 major releases. That is the outcome of your core strength applied over time. Own it.',
    whyOthersWrong: {
      A: 'Claiming equal strength in everything signals either poor self-awareness or evasion. Every experienced interviewer sees through this answer.',
      C: 'Typing speed and formatting are irrelevant at a professional level. This answer signals a misunderstanding of what creates BA value.',
      D: 'Work ethic and attitude are not differentiating strengths — every candidate claims them. What differentiates you is a specific professional capability backed by evidence.'
    },
    isScenario: false
  },

  {
    id: 'beh_5',
    topic: 'Behavioral',
    difficulty: 'Easy',
    question: 'What area are you actively working to improve as a Business Analyst?',
    options: {
      A: 'Say you have no current areas for improvement since you received positive feedback in your last performance review and are meeting all performance targets in your current role.',
      B: 'Identify healthcare domain knowledge as the honest, relevant gap for this specific role, and describe the concrete steps already underway: self-study on health plan benefit terminology, FHIR basics, payer workflows, and a 90-day plan to reach working proficiency through domain SME collaboration once onboarded.',
      C: 'Say you struggle significantly with all aspects of stakeholder communication and are currently enrolled in a public speaking course to improve your ability to hold meetings and present to groups of more than 5 people.',
      D: 'Say your weakness is that you are a perfectionist who often over-documents requirements beyond what the project needs, and that you are working on writing shorter documents to save time even though quality sometimes suffers as a result.'
    },
    answer: 'B',
    explanation: 'The weakness/improvement question is a self-awareness test. The right answer: (1) Genuine — not a strength dressed as a weakness ("I am too much of a perfectionist"); (2) Relevant — a gap that is real for this transition but not a disqualifier; (3) Already being addressed — shows proactivity, not passivity. Healthcare domain knowledge is the perfect answer for Vaishnavi at this role: it is genuinely a gap (new domain), it is relevant (Simplify Healthcare is a healthcare company), it is not a core BA competency gap (which would be disqualifying), and there is a concrete action plan. The 90-day ramp-up plan makes it credible: "I have been reading about health plan benefit structures and HL7/FHIR basics in preparation for this interview. My plan once I join is to partner with domain SMEs, attend client calls as an observer, and have all healthcare-specific requirements reviewed by an SME for the first 90 days while I build depth independently." This turns a weakness into evidence of strategic self-management.',
    interviewTip: 'Never choose a core BA skill as your weakness. Saying "I need to improve my requirement writing" would disqualify you. Choose a domain gap or an advanced technical skill.',
    memoryTrick: 'Improvement answer = REAL GAP + NOT CORE TO THE ROLE + ALREADY BEING ADDRESSED + SPECIFIC PLAN. Four components.',
    realExample: 'Same pattern used when joining Newgen with no procurement domain knowledge: structured learning + stakeholder shadowing + iterative validation. Ramped up in 2 weeks. Same approach confirmed for healthcare.',
    whyOthersWrong: {
      A: 'Claiming no areas for improvement signals either poor self-awareness or dishonesty. Both are red flags for a role that requires continuous learning in a new domain.',
      C: 'Admitting significant communication gaps is close to admitting inability to perform a core BA responsibility. Choose a domain gap, not a foundational skill gap.',
      D: 'The "perfectionist" cliché is the most overused interview answer of the last 20 years. Interviewers recognise it immediately as evasion.'
    },
    isScenario: false
  },

  // ===== SECTION 10: RAPID FIRE CONCEPTS =====
  {
    id: 'rapid_1',
    topic: 'Concept Check',
    difficulty: 'Easy',
    question: 'What does SDLC stand for and what are its phases?',
    options: {
      A: 'Software Data Lifecycle: a process for managing data migrations between systems, covering phases of extraction, transformation, loading, validation, and archival.',
      B: 'Software Development Life Cycle: the structured process for building software, covering Requirement Gathering → Design → Development → Testing → Deployment → Maintenance.',
      C: 'System Documentation and Lifecycle Control: the set of standards governing how requirement documents are versioned, reviewed, and archived throughout a project.',
      D: 'Software Deployment and Launch Cycle: the process for releasing software from staging to production environments, covering code freeze, QA sign-off, deployment, and rollback planning.'
    },
    answer: 'B',
    explanation: 'SDLC = Software Development Life Cycle. The six standard phases: (1) Requirement Gathering — BA-led elicitation, documentation (BRD/FRD/SRS), and stakeholder alignment. (2) System Design — technical architecture, database design, UI/UX design. (3) Development — coding and unit testing. (4) Testing — SIT, UAT, performance testing. (5) Deployment — release to production. (6) Maintenance — post-go-live support, bug fixes, enhancements. In Agile, the SDLC runs iteratively across sprints rather than as a linear waterfall sequence. The BA\'s primary value is in phases 1 (requirements) and 4 (testing/UAT), with ongoing involvement across all phases. From Vaishnavi\'s resume: "Supported end-to-end feature delivery across the SDLC, from requirement gathering to deployment."',
    interviewTip: 'Always connect SDLC knowledge to your specific role in each phase. Not just reciting the phases — showing where you add value in each.',
    memoryTrick: 'SDLC phases: R-D-D-T-D-M. Requirements → Design → Development → Testing → Deployment → Maintenance.',
    realExample: 'VPRM SDLC: Vaishnavi owned Requirements phase, contributed to Testing (UAT lead), supported Deployment (go-live coordination), owned Maintenance (500+ user post-go-live support).',
    whyOthersWrong: {
      A: 'That describes an ETL (Extract-Transform-Load) data pipeline process, not SDLC.',
      C: 'Documentation management is a project governance practice, not the SDLC.',
      D: 'That describes a release management or deployment pipeline process — one phase of the SDLC, not the entire thing.'
    },
    isScenario: false
  },

  {
    id: 'rapid_2',
    topic: 'Concept Check',
    difficulty: 'Easy',
    question: 'What is the difference between a defect and an enhancement?',
    options: {
      A: 'A defect is found before go-live and an enhancement is found after go-live. The timing of discovery determines the classification, not the nature of the issue.',
      B: 'A defect is when the system behaves differently from documented requirements or acceptance criteria. An enhancement is a request for new or changed functionality beyond what was originally specified. They have different prioritisation, resolution paths, and sprint treatment.',
      C: 'A defect is always raised by the QA team during testing. An enhancement is always raised by the business stakeholder after go-live. The source of the issue determines its classification.',
      D: 'Defects and enhancements are the same category of issue in JIRA — they both represent something that needs to be fixed or added. The distinction is only administrative and has no practical impact on how the team prioritises or resolves them.'
    },
    answer: 'B',
    explanation: 'The defect vs. enhancement distinction is foundational for UAT and post-go-live management. Defect: the system does NOT do what the requirements or acceptance criteria say it should do. Example: the approval routing sends a requisition to the wrong approver when the requirement says it should go to the Finance Head for amounts over ₹50,000. Enhancement: a request to do something NEW or DIFFERENT from what was originally specified. Example: stakeholder now wants a second approval tier for amounts over ₹1,00,000 — this was never in the original requirements. Why the distinction matters: defects are bugs that must be fixed (often release-blocking). Enhancements are scope additions that require a Change Request, impact assessment, and Product Owner prioritisation. Mixing them creates scope creep and false defect metrics. In the VPRM project, Vaishnavi triaged every UAT issue into these two categories. Defects were fixed before go-live. Enhancements were backlogged into the post-go-live enhancement queue with documented rationale.',
    interviewTip: 'Always mention that enhancements require a formal Change Request, not just a JIRA ticket. The CR process protects the project from informal scope creep.',
    memoryTrick: 'DEFECT = does not match requirements (must fix). ENHANCEMENT = goes beyond requirements (scope change). Defect = bug. Enhancement = new feature request.',
    realExample: 'VPRM UAT: "Approval history should show the approver\'s email address" — not in original requirements → enhancement, not defect → added to post-go-live backlog with CR documentation.',
    whyOthersWrong: {
      A: 'A defect found after go-live is still a defect, not an enhancement. Timing of discovery does not change the classification.',
      C: 'Both defects and enhancements can be raised by QA, business users, or even the development team. Source does not determine classification — the comparison to requirements does.',
      D: 'The distinction has critical practical impact on prioritisation, sprint planning, release go/no-go decisions, and scope management.'
    },
    isScenario: false
  },

  {
    id: 'rapid_3',
    topic: 'Concept Check',
    difficulty: 'Medium',
    question: 'What is scope creep and what is the BA\'s role in preventing it?',
    options: {
      A: 'Scope creep is when the development team adds extra features beyond what was specified, to make the product more impressive. The BA should review every code commit to ensure developers are not adding unauthorised functionality.',
      B: 'Scope creep is the gradual expansion of project scope beyond the agreed baseline, typically through informal additions without proper evaluation or approval. The BA prevents it through a formal Change Request process, maintaining a signed-off baseline in the BRD, facilitating scope discussions with the Product Owner, and educating stakeholders on the cost of late additions.',
      C: 'Scope creep is an unavoidable feature of all software projects and should simply be planned for by adding 30-50% buffer to all project timelines. Attempting to prevent scope creep is futile since stakeholder needs always evolve.',
      D: 'Scope creep is the project manager\'s problem to solve. The BA should focus only on documenting requirements as requested by stakeholders and leave all scope governance to the PM and project sponsor.'
    },
    answer: 'B',
    explanation: 'Scope creep is the enemy of on-time, on-budget delivery. It happens when requirements are added, expanded, or changed informally — without going through the proper evaluation process. The BA is the first line of defence because the BA controls the requirement baseline. Prevention mechanisms: (1) Signed-off BRD/FRD as the formal baseline — any change to signed-off content requires a formal Change Request. (2) Change Request process — every post-baseline change must document: what is changing, why, impact on effort/timeline/cost, and Product Owner sign-off. (3) MoSCoW prioritisation — establishes what is explicitly out of scope for this release (the W = Won\'t Have), making it easier to push back on additions: "We agreed in the MoSCoW session that X is Won\'t Have for Release 1." (4) Stakeholder education — diplomatically communicate the cost of late additions: "This addition will push the sprint end date by 3 days and add 2 days of regression testing." From VPRM: Vaishnavi used all four mechanisms. No unauthorised features were added to Release 1.',
    interviewTip: 'The most powerful scope creep prevention tool is the signed-off MoSCoW list because it gives you a document the stakeholder themselves approved that explicitly calls certain items out of scope.',
    memoryTrick: 'Scope creep prevention: SIGNED BASELINE + FORMAL CR PROCESS + MOSCOW WON\'T HAVE LIST + COST COMMUNICATION. Four defences.',
    realExample: 'VPRM: Procurement stakeholder requested an automated vendor ranking feature mid-sprint. Vaishnavi referenced the MoSCoW list where this was classified as Could Have (deferred). CR raised, Product Owner confirmed deferral to Phase 2. Sprint protected.',
    whyOthersWrong: {
      A: 'Scope creep is primarily driven by stakeholder requests, not developer additions. Reviewing code commits is not a BA responsibility.',
      C: 'Accepting scope creep as inevitable and building in buffer is a project management anti-pattern that rewards poor requirement discipline.',
      D: 'The BA is directly responsible for requirement baseline management. Abdicating this to the PM leaves requirements governance without the right technical owner.'
    },
    isScenario: false
  },

  {
    id: 'rapid_4',
    topic: 'Concept Check',
    difficulty: 'Easy',
    question: 'What is the INVEST principle for user stories?',
    options: {
      A: 'INVEST stands for Integrated, Navigable, Value-driven, Easy, Structured, and Testable — criteria used to evaluate whether a user story is complete enough to submit to a sprint without further discussion or clarification.',
      B: 'INVEST stands for Independent, Negotiable, Valuable, Estimable, Small, and Testable — the six quality criteria that every sprint-ready user story should satisfy before being committed to a sprint.',
      C: 'INVEST is a financial analysis framework borrowed from investment banking and adapted for Agile projects to help Product Owners calculate the return on investment for each user story before prioritising it in the product backlog.',
      D: 'INVEST is a retrospective evaluation framework used at the end of each sprint to assess whether completed user stories met quality standards and should be marked as done or returned to the backlog for rework.'
    },
    answer: 'B',
    explanation: 'INVEST is the gold standard checklist for user story quality before sprint commitment. I — Independent: the story can be developed and tested without depending on another story being completed first. N — Negotiable: the story details (not the goal) are open to discussion between the team and stakeholders. V — Valuable: the story delivers clear business value — if you cannot articulate why a business user cares, the story needs rethinking. E — Estimable: the team has enough information to estimate the story in points. If it cannot be estimated, it is too vague. S — Small: the story fits within one sprint. If not, it is an epic that needs decomposition. T — Testable: the acceptance criteria are specific enough to write test cases against. If it cannot be tested, it cannot be verified as done. From VPRM: every story was run through INVEST before sprint planning. Stories that failed the E (unestimable) or T (untestable) criteria were sent back to grooming with a specific requirement to add missing information.',
    interviewTip: 'Mention that you apply INVEST during backlog grooming, not during sprint planning. By sprint planning, stories should already be INVEST-compliant. Catching failures in planning wastes the entire team\'s time.',
    memoryTrick: 'INVEST = I(ndependent) + N(egotiable) + V(aluable) + E(stimable) + S(mall) + T(estable). Six letters, six criteria.',
    realExample: 'VPRM grooming: a story for "generate procurement analytics dashboard" failed E (unestimable — too vague) and S (too large — 3 sprints). Decomposed into 4 smaller stories, each estimable and sprint-sized. Better quality, faster delivery.',
    whyOthersWrong: {
      A: 'Those are not the INVEST criteria. "Integrated" and "Navigable" and "Easy" are not part of the framework.',
      C: 'INVEST has nothing to do with financial investment analysis. It is a software BA and Agile framework for story quality.',
      D: 'INVEST is applied BEFORE sprint commitment during grooming, not after sprint completion in retrospectives.'
    },
    isScenario: false
  },

  {
    id: 'rapid_5',
    topic: 'Concept Check',
    difficulty: 'Medium',
    question: 'What is a RACI matrix and when would you use it as a BA?',
    options: {
      A: 'RACI stands for Requirements, Acceptance, Change, and Implementation — the four phases of a BA\'s workflow that must be completed in order for a project to move from initiation to delivery.',
      B: 'RACI stands for Responsible, Accountable, Consulted, and Informed. It is a stakeholder mapping tool used to clarify who does the work, who owns the outcome, who must be consulted, and who needs to be kept informed — for each key decision or deliverable in a project.',
      C: 'RACI is a risk assessment framework where R = Risk, A = Assessment, C = Control, and I = Impact. BAs use it during project initiation to quantify and prioritise project risks before the first sprint.',
      D: 'RACI is a JIRA workflow configuration that defines the stages a user story goes through from creation to closure: Ready, Assigned, Code Complete, and In-testing.'
    },
    answer: 'B',
    explanation: 'A RACI matrix is a stakeholder alignment tool that prevents the most common project failure mode: "nobody told me" or "I thought someone else was handling it." R (Responsible): who does the actual work — usually the BA for requirement writing, the developer for coding, the tester for test execution. A (Accountable): who owns the outcome and signs off — typically the Product Owner for requirements, the QA Lead for test completion. C (Consulted): who provides input before decisions are made — SMEs, compliance teams, architects. I (Informed): who needs to know the outcome but has no input role — executive sponsors, other project teams. The BA creates the RACI at project start for key deliverables: BRD, FRD, UAT sign-off, go-live approval. This prevents mid-project disputes about who should have been involved and ensures the right people are in the right review sessions. In VPRM, the RACI clarified that Finance was Consulted (not Accountable) for vendor onboarding requirements — preventing a late-stage Finance veto that could have delayed delivery.',
    interviewTip: 'Mention a specific scenario where a RACI prevented a problem. "The RACI clarified that Compliance was Consulted on the vendor data retention requirement — without it, they might have raised a policy concern post-delivery."',
    memoryTrick: 'RACI = R(esponsible) + A(ccountable) + C(onsulted) + I(nformed). R does the work. A owns the outcome. C provides input. I receives updates.',
    realExample: 'VPRM RACI: BA = Responsible for FRD. Product Owner = Accountable for FRD sign-off. Finance = Consulted on procurement rules. Procurement Director = Informed of FRD completion. Prevented a late sign-off dispute.',
    whyOthersWrong: {
      A: 'Those are not what RACI stands for. Requirements, Acceptance, Change, and Implementation is not a real framework.',
      C: 'That is a risk management framework description, not a RACI. Risk registers and RACI matrices are entirely different tools.',
      D: 'JIRA workflow statuses are not called RACI. This confuses a project management tool\'s workflow with a stakeholder mapping framework.'
    },
    isScenario: false
  },

  {
    id: 'rapid_6',
    topic: 'Concept Check',
    difficulty: 'Medium',
    question: 'What is the Definition of Done (DoD) in Agile and who owns it?',
    options: {
      A: 'The Definition of Done is a document created by the Product Owner at the start of the project that lists every feature required in the final product. A story is "done" when all items in this list are built and tested.',
      B: 'The Definition of Done is a shared team agreement that specifies the criteria a user story must meet before it can be marked complete. Typically includes: development done, unit tests passing, code reviewed, acceptance criteria validated by QA, and UAT sign-off received. Owned collectively by the Scrum team.',
      C: 'The Definition of Done is a legal contract signed by the client at project initiation that defines the acceptance criteria for the entire project. Once all items in the contract are delivered, the project is legally "done" and all remaining work becomes chargeable as an enhancement.',
      D: 'The Definition of Done is created by the Scrum Master and updated after each retrospective based on quality issues found in the previous sprint. It is the Scrum Master\'s sole responsibility to enforce it during sprint review.'
    },
    answer: 'B',
    explanation: 'The Definition of Done (DoD) is one of the most important quality safeguards in Agile. It prevents the "90% done" problem — where stories are marked complete before they are actually production-ready. A typical DoD includes: (1) Code developed and peer-reviewed; (2) Unit tests written and passing; (3) Acceptance criteria tested by QA and passing; (4) No open Critical or High defects; (5) UAT sign-off received from business stakeholder; (6) Documentation updated (user manual, Confluence); (7) Code merged to the main branch and deployed to staging. Ownership: the Scrum team collectively creates and maintains the DoD, not any single person. The BA contributes the acceptance criteria and UAT sign-off components. The DoD is reviewed in retrospectives and updated when quality gaps are found. Without a clear DoD, teams endlessly debate whether something is "done enough" — a debate that happens in the middle of demos and ruins sprint reviews.',
    interviewTip: 'Mention that you contributed to defining the DoD\'s acceptance criteria and UAT sign-off requirements specifically. BAs often overlook this as part of their scope.',
    memoryTrick: 'DoD = DEV + CODE REVIEW + UNIT TESTS + ACCEPTANCE CRITERIA TESTED + UAT SIGN-OFF + DOCS. All conditions must be met. Owned by the team.',
    realExample: 'VPRM DoD included a UAT sign-off requirement by the Procurement Manager. This prevented 2 stories from being marked done when they were code-complete but not yet business-validated — a critical quality distinction.',
    whyOthersWrong: {
      A: 'That describes a product requirements document or release plan, not the Definition of Done. DoD is about QUALITY criteria per story, not feature lists.',
      C: 'That is a contract or Statement of Work concept from waterfall project management, not an Agile DoD.',
      D: 'DoD is owned by the entire Scrum team. The Scrum Master facilitates its creation and adherence but does not own it unilaterally.'
    },
    isScenario: false
  },

  {
    id: 'rapid_7',
    topic: 'Concept Check',
    difficulty: 'Hard',
    question: 'A stakeholder says "the system should be user-friendly." How do you handle this as a requirement?',
    options: {
      A: 'Accept it as written since stakeholder language should be preserved exactly in requirement documents. Document: "The system shall be user-friendly" and move it to the FRD for the development team to interpret and implement.',
      B: 'Reject it entirely since "user-friendly" is not a testable requirement and has no place in a professional requirements document. Requirements must be quantitative and objective to be valid.',
      C: 'Recognise it as a non-functional (usability) requirement that needs to be decomposed into specific, testable criteria: task completion time benchmarks, error rate targets, user training time, navigation click-depth for key workflows, and user satisfaction scores. Work with the stakeholder to define what "user-friendly" means in measurable terms for this specific system.',
      D: 'Pass it directly to the UX designer since user-friendliness is a design concern and not within the BA\'s requirement documentation scope. The BA should only document functional system behaviours, not subjective user experience goals.'
    },
    answer: 'C',
    explanation: '"User-friendly" is a non-functional usability requirement — and it is the BA\'s job to make it testable, not to reject it or pass it on unchanged. The decomposition conversation: ask the stakeholder "What would make you confident the system is user-friendly?" Common answers become testable criteria: "A new procurement manager should be able to submit their first purchase requisition without training" → testable: "A new user shall be able to complete the requisition submission workflow within 5 minutes without consulting the user manual." "The approval process should be transparent" → testable: "All open approvals shall be visible on the user dashboard with current status and pending duration." "The system should not require many clicks" → testable: "Key workflows shall be completable in no more than 5 clicks from the home screen." Once you have specific, measurable criteria, they can be validated in UAT. This is one of the most common BA interview scenarios because it tests whether you can convert vague stakeholder language into professional requirement documentation.',
    interviewTip: 'Use this exact phrase: "My job is to make every requirement testable. \'User-friendly\' tells me the intent — I work with the stakeholder to define what that means in terms we can verify in UAT."',
    memoryTrick: 'Vague requirement conversion formula: VAGUE TERM → ASK "WHAT WOULD PROVE IT?" → SPECIFIC MEASURABLE CRITERIA → TESTABLE UAT SCENARIO.',
    realExample: 'VPRM: "the system should be easy to use for procurement staff" → decomposed to: new user submits first requisition in under 5 minutes, approval dashboard visible on login, maximum 3-click path from home to submission. All testable in UAT.',
    whyOthersWrong: {
      A: 'Accepting vague language verbatim produces untestable requirements. "User-friendly" means different things to different people — and different things in UAT.',
      B: 'Rejecting it entirely ignores a legitimate and important business requirement. Usability is testable once properly decomposed — it should not be discarded.',
      D: 'Usability requirements are within BA scope. The UX designer implements the solution; the BA documents the requirement. These are different roles.'
    },
    isScenario: true
  },

  {
    id: 'rapid_8',
    topic: 'Concept Check',
    difficulty: 'Easy',
    question: 'What is the difference between Agile and Waterfall methodologies?',
    options: {
      A: 'Agile uses JIRA and Waterfall uses Microsoft Project. The only practical difference between the two methodologies is the project management tool that each one relies on for tracking tasks and managing deliverables.',
      B: 'Waterfall is a sequential methodology where each phase (requirements → design → development → testing → deployment) must fully complete before the next begins. Requirements are locked upfront. Agile is iterative — building and delivering in short sprints, adapting to evolving requirements, with stakeholder feedback after every sprint.',
      C: 'Agile and Waterfall are identical in their delivery process but Agile projects have shorter timelines since the team works faster. Waterfall projects take longer because every phase has a mandatory waiting period before proceeding to the next stage.',
      D: 'Waterfall is used exclusively for internal IT projects within large corporations, while Agile is used only for startup software products. The size and type of the organisation determines which methodology is appropriate, not the nature of the project itself.'
    },
    answer: 'B',
    explanation: 'Understanding the methodology difference is fundamental for any BA role. Waterfall: Linear, phase-gated. Requirement phase complete → design complete → development complete → testing complete → deploy. Changes to requirements after the design phase are expensive and formally resisted. Works when requirements are fully known upfront and unlikely to change (e.g., regulatory compliance systems with fixed specifications). Agile: Iterative and incremental. Works in 2-week sprints. Each sprint delivers working, tested software. Stakeholders review at every sprint and provide feedback. Requirements can evolve between sprints. Works when business needs are evolving and early delivery of value is important. Key implication for BAs: In Waterfall, the BA does most of their work upfront in one large requirements phase. In Agile, the BA works continuously — grooming the backlog, refining stories sprint by sprint, and incorporating feedback. Vaishnavi works in Agile at Newgen.',
    interviewTip: 'Mention a specific implication: "In Agile, I am not just a requirements author — I am an ongoing collaborator. My work doesn\'t end when the BRD is signed. It continues through every sprint review and retrospective."',
    memoryTrick: 'Waterfall = LINEAR, PHASES, REQUIREMENTS LOCKED. Agile = ITERATIVE, SPRINTS, REQUIREMENTS EVOLVE. BA role differs significantly between the two.',
    realExample: 'VPRM was delivered in Agile. Requirements for vendor analytics were not fully defined at sprint 1 — they evolved over 3 sprints based on procurement team feedback during sprint reviews. Waterfall would have required them upfront.',
    whyOthersWrong: {
      A: 'The tool used has nothing to do with the methodology. JIRA can be used for Waterfall projects and Trello can be used for Agile ones.',
      C: 'Agile teams do not necessarily work faster — they deliver more frequently in smaller increments. The total project duration can be similar; the rhythm of delivery is different.',
      D: 'Both methodologies are used across all organisation types and sizes. The choice depends on requirement volatility, stakeholder collaboration availability, and risk profile — not company size.'
    },
    isScenario: false
  },

  {
    id: 'rapid_9',
    topic: 'Concept Check',
    difficulty: 'Hard',
    question: 'What does "shift-left testing" mean and how does it affect the BA\'s work?',
    options: {
      A: 'Shift-left testing means moving the QA team\'s office to the left side of the floor plan, adjacent to the development team, so that face-to-face communication reduces defect resolution time. The BA\'s role is to manage the seating arrangement to ensure optimal collaboration.',
      B: 'Shift-left testing means involving QA earlier in the SDLC — starting test case reviews during requirement definition rather than waiting for code to be complete. For the BA, this means sharing user stories and acceptance criteria with QA during grooming, accepting QA input on testability, and co-creating test scenarios before development begins.',
      C: 'Shift-left testing is a legal requirement for all healthcare IT companies under HIPAA, mandating that security testing must begin during the requirement phase rather than after deployment to ensure patient data is protected from the earliest stages of development.',
      D: 'Shift-left testing is a technique where the development team writes the test cases first before writing any code, ensuring that all code is written to pass pre-existing tests. The BA is not involved since this is entirely a development and QA team practice.'
    },
    answer: 'B',
    explanation: 'Shift-left testing is a quality philosophy: find defects as early as possible in the SDLC, because the cost of fixing a defect increases exponentially the later it is found. A defect found in requirements costs minutes to fix (edit the document). The same defect found in development costs hours (recode). Found in UAT costs days (recode + retest). Found in production costs weeks (hotfix + regression + communication + potential data correction). For the BA, shift-left means: (1) sharing user stories with QA during grooming — QA reviews acceptance criteria for testability before development starts; (2) inviting QA feedback on edge cases — QA often thinks of scenarios the BA missed; (3) co-reviewing test cases against requirements before UAT begins; (4) in some teams, collaborating on BDD (Behaviour-Driven Development) scenarios where acceptance criteria are written in Gherkin syntax (Given-When-Then) that directly becomes automated test scripts. This is how Vaishnavi\'s UAT process already works — QA reviews her acceptance criteria before development — making it an example of shift-left in practice.',
    interviewTip: 'Show you already practice this: "I share my user stories with QA during backlog grooming specifically to get their input on testability and edge cases. That is shift-left in practice."',
    memoryTrick: 'Shift-left = INVOLVE QA EARLIER. In requirements = cheapest fix. In production = most expensive fix. BA enables shift-left by sharing stories in grooming.',
    realExample: 'VPRM: QA reviewed acceptance criteria during grooming. Found 2 scenarios where expected results were ambiguous for multi-currency purchase orders. Fixed in the document in 30 minutes. Would have been a 2-day defect fix in development.',
    whyOthersWrong: {
      A: 'Shift-left is a testing philosophy and process change, not a physical seating arrangement. This answer is literally incorrect.',
      C: 'Shift-left is an industry-wide Agile quality practice, not a HIPAA legal requirement. HIPAA has security requirements but does not mandate shift-left testing specifically.',
      D: 'Test-first development (TDD) is a related but different concept. Shift-left is broader and explicitly involves the BA through requirement-stage QA collaboration.'
    },
    isScenario: false
  },

  {
    id: 'rapid_10',
    topic: 'Concept Check',
    difficulty: 'Medium',
    question: 'You are asked to document a business process you have never seen before. What is your first step?',
    options: {
      A: 'Search the internet for a generic version of the process and adapt a template to the company\'s context, since most business processes follow similar patterns across industries and the BA can fill in specific details from the generic framework.',
      B: 'Open a process mapping tool and start drawing what you think the process should look like based on your general knowledge of similar workflows, then present it to stakeholders as a first draft for them to correct.',
      C: 'Schedule an observation session to watch how the process actually operates in practice before conducting any formal elicitation, then use what you observed to prepare targeted, informed questions for the structured requirement sessions that follow.',
      D: 'Request all existing process documentation, email threads, and Excel trackers used in the current process, and use these as the sole source of requirement truth without conducting any interviews, since stakeholder meetings are time-consuming and the documentation already contains everything needed.'
    },
    answer: 'C',
    explanation: 'Observation before elicitation is the most underrated requirement gathering technique. Why? Because people describe processes the way they THINK they work. Observation shows how processes ACTUALLY work — which are often very different. In the observation session: watch the actual workflow end-to-end, note every decision point, identify every system touched, observe where friction exists (workarounds, manual steps, Excel trackers), notice what documentation people actually use vs. what they claim to use. This observation gives you the context to ask much better questions in the subsequent elicitation session. From Vaishnavi\'s VPRM project: observing procurement staff revealed that purchase requests were tracked in 5 separate Excel files and approvals happened over WhatsApp — critical information that could not have been surfaced by reading a process document. That observation became the foundation for the entire as-is process map and the justification for the automation requirements.',
    interviewTip: 'This answer shows process maturity. Most junior BAs jump straight to interviews. Senior BAs observe first. Mention it explicitly: "I always observe before I elicit — because people describe what should happen, not what does happen."',
    memoryTrick: 'New process: OBSERVE FIRST → NOTE DECISION POINTS AND FRICTION → PREPARE TARGETED QUESTIONS → STRUCTURED ELICITATION. Observation informs everything.',
    realExample: 'VPRM: Vaishnavi observed procurement staff for 2 days before the first formal elicitation session. Found 5 Excel files, WhatsApp approvals, and email vendor threads — the as-is problems that became the business case for the digital system.',
    whyOthersWrong: {
      A: 'Generic internet templates miss every company-specific nuance, exception, and real-world deviation that makes the process unique to this organisation.',
      B: 'Drawing what you think the process should look like imposes your assumptions and potentially leads stakeholders to validate a fiction rather than describe their reality.',
      D: 'Existing documentation shows the designed process, not the operated process. Both are needed. Document review alone without interviews or observation produces incomplete requirements.'
    },
    isScenario: true
  }
];

export default questions;
