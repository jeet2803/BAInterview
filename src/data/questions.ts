import { Question } from '../types';

export const questions: Question[] = [
  // ===== SECTION 1: INTRODUCTION & RESUME =====
  {
    id: 'intro_1',
    topic: 'Introduction & Resume',
    difficulty: 'Easy',
    question: 'Tell me about yourself.',
    options: {
      A: 'Give a full personal history from childhood, education, and work life in detail.',
      B: 'State your name, total experience, current role, key projects, skills, and what you are looking for next — in under 90 seconds.',
      C: 'Only mention your current company name and job title.',
      D: 'Read out your resume line by line from the top.'
    },
    answer: 'B',
    explanation: 'A strong self-introduction covers: Name, years of experience, current role and company, 1-2 key projects with impact, core skills, and why you are targeting this role. Keep it under 90 seconds. For Vaishnavi: "I am Vaishnavi Dere, a Business Analyst with 2 years of experience at Newgen Technomate LLP in Pune. My core work has been requirement elicitation, BRD/FRD documentation, UAT coordination, and Agile delivery using JIRA and Confluence. I have worked on a Vendor Purchase Request Management system for a banking client — improving workflow efficiency by 50% — and a Jewellery E-Commerce platform. I am now targeting Banking domain roles to deepen my BA expertise in financial systems."',
    interviewTip: 'Never start with "I am a hardworking person." Start with your role, experience, and specific project impact. End with why you want THIS role.',
    memoryTrick: 'NAME → EXPERIENCE → PROJECTS → SKILLS → WHY THIS ROLE. That is your 5-point intro formula.',
    realExample: 'Vaishnavi\'s intro: 2 years BA, Newgen Technomate, VPRM project (50% efficiency gain, 500+ users), Agile/JIRA/Figma, now targeting banking domain.',
    whyOthersWrong: {
      A: 'Personal history is irrelevant. Interviewers want professional value quickly.',
      C: 'Too brief — gives the interviewer nothing to continue the conversation with.',
      D: 'Reading the resume is passive and shows no communication ability.'
    },
    isScenario: false
  },
  {
    id: 'intro_2',
    topic: 'Introduction & Resume',
    difficulty: 'Easy',
    question: 'Walk me through your resume.',
    options: {
      A: 'Read every line of the resume out loud from top to bottom.',
      B: 'Summarize your education, then walk through your role, key projects with business impact, skills used, and tools.',
      C: 'Only talk about your most recent job and skip everything else.',
      D: 'Apologize for resume gaps and explain personal reasons for any transitions.'
    },
    answer: 'B',
    explanation: 'Walking through your resume means telling a coherent professional story: Education → Current Role → Key Projects with measurable outcomes → Skills and Tools. For Vaishnavi: BE in IT (2024) → BA at Newgen Technomate (June 2024–present) → VPRM project (banking client, 500+ users, 50% efficiency improvement) → Jewellery E-Commerce (UAT, Android/iOS) → Skills: BRD, FRD, JIRA, Figma, PostgreSQL.',
    interviewTip: 'Lead every project mention with the BUSINESS IMPACT first, then the activities. Say "We improved procurement efficiency by 50% — I did this by documenting end-to-end requirements and leading UAT."',
    memoryTrick: 'Resume walkthrough = STORY ARC: Education → Entry → Projects → Impact → Skills.',
    realExample: 'Vaishnavi\'s resume walkthrough should highlight VPRM: 500+ active users, 50% efficiency, 30% turnaround reduction — these are memorable numbers.',
    whyOthersWrong: {
      A: 'Reading verbatim shows no communication skill and wastes interview time.',
      C: 'Skipping older experience or education misses context about your growth.',
      D: 'Apologizing or over-explaining personal reasons creates negative impressions.'
    },
    isScenario: false
  },
  {
    id: 'intro_3',
    topic: 'Introduction & Resume',
    difficulty: 'Medium',
    question: 'Why do you want to move into the Banking domain?',
    options: {
      A: 'Because banking pays more money than other domains.',
      B: 'Because my current project has a banking client and I have studied banking workflows, KYC, AML, payment systems, and remittance independently — and I want to specialize in this structured domain.',
      C: 'Because I failed to get other jobs and banking was available.',
      D: 'Because banking is easier than other domains.'
    },
    answer: 'B',
    explanation: 'The best answer connects your existing exposure (banking client work), your self-study (KYC, AML, NEFT, RTGS, remittance), and your career intention (specializing in financial systems BA). Say: "In my current project I worked with a banking client and saw how structured and compliance-driven banking systems are. I have studied KYC, AML, payment workflows, and remittance on my own. Banking is a domain where requirement precision directly impacts compliance — and that is where I want to grow as a BA."',
    interviewTip: 'Always connect banking interest to your EXISTING experience. Even indirect exposure (working with a banking client, studying banking concepts) is better than "I just want to try it."',
    memoryTrick: 'Banking interest answer = Existing exposure + Self-study + Career direction. All three.',
    realExample: 'Vaishnavi has banking client experience via VPRM and has studied NEFT, RTGS, KYC, AML, remittance — this is genuine credible evidence of interest.',
    whyOthersWrong: {
      A: 'Salary-driven answers signal low commitment. Interviewers want domain passion.',
      C: 'Admitting you applied out of desperation is a guaranteed rejection.',
      D: 'Banking is not easier — it has heavy compliance, audit, and regulatory complexity.'
    },
    isScenario: false
  },
  {
    id: 'intro_4',
    topic: 'Introduction & Resume',
    difficulty: 'Easy',
    question: 'What is your current role and responsibilities?',
    options: {
      A: 'I write documents and attend meetings.',
      B: 'I handle the full requirement lifecycle: elicitation, BRD/FRD documentation, user stories, process flows, wireframes, UAT coordination, defect tracking, and post go-live support.',
      C: 'I only do testing and quality checks.',
      D: 'I manage the project and assign tasks to developers.'
    },
    answer: 'B',
    explanation: 'A complete BA role answer covers ALL phases: Requirements (elicitation, BRD, FRD, user stories) → Design support (wireframes, process flows) → Agile execution (JIRA, sprint planning) → Testing support (UAT test cases, defect tracking) → Post go-live (enhancements, CRs). Say: "I handle the complete requirement lifecycle — from stakeholder interviews and BRD/FRD writing, through Agile sprint delivery, to UAT coordination and post go-live support for 500+ users."',
    interviewTip: 'Show BREADTH across the SDLC. BAs who only mention requirements or only mention testing appear narrow. Cover at least 4-5 phases.',
    memoryTrick: 'BA responsibility = RDAT: Requirements → Design → Agile → Testing → (post go-live) Support.',
    realExample: 'Vaishnavi\'s role spans: elicitation, BRD/FRD, MoSCoW prioritization, JIRA backlogs, Figma wireframes, UAT test cases, defect management, change requests for 500+ users.',
    whyOthersWrong: {
      A: 'Too vague — "write documents and attend meetings" could describe any office job.',
      C: 'Describing yourself as only a tester undersells your BA role significantly.',
      D: 'BAs do not manage projects or assign tasks — that is the PM\'s role.'
    },
    isScenario: false
  },
  {
    id: 'intro_5',
    topic: 'Introduction & Resume',
    difficulty: 'Medium',
    question: 'What projects have you worked on so far?',
    options: {
      A: 'I worked on a big project with many stakeholders and it was very complex.',
      B: 'I worked on the VPRM system for a banking client — covering vendor onboarding, purchase requisitions, and multi-level approvals — and a Jewellery E-Commerce platform handling UAT and Android/iOS release documentation.',
      C: 'I have worked on software projects but cannot share details due to confidentiality.',
      D: 'I only worked on internal tools and nothing customer-facing.'
    },
    answer: 'B',
    explanation: 'Project answers must be SPECIFIC. Name the project, describe its domain and function, state your role and contribution, and give measurable outcomes. For Vaishnavi: (1) VPRM — banking client, procurement automation, 500+ users, 50% efficiency improvement, 30% turnaround reduction. (2) Jewellery E-Commerce — live platform support, UAT, Android/iOS requirement documentation, defect tracking.',
    interviewTip: 'Use the formula: Project Name + Business Domain + What it does + Your Role + Measurable Impact. Repeat for each project.',
    memoryTrick: 'Project answer = WHO + WHAT + YOUR PART + THE NUMBER (impact metric).',
    realExample: 'VPRM: banking client, procurement system, BA end-to-end, 500+ users, 50% efficiency, 30% TAT reduction. Jewellery: e-commerce, UAT + iOS/Android docs.',
    whyOthersWrong: {
      A: 'Vague adjectives like "big" and "complex" give the interviewer nothing tangible.',
      C: 'Confidentiality is rarely a reason to describe nothing — you can describe the type of system and your role without revealing client names.',
      D: 'Internal tools are valid projects — but underselling them by saying "nothing customer-facing" reduces perceived impact.'
    },
    isScenario: false
  },
  {
    id: 'intro_6',
    topic: 'Introduction & Resume',
    difficulty: 'Easy',
    question: 'Why are you leaving your current company?',
    options: {
      A: 'My manager is difficult and the team has politics.',
      B: 'I have built strong BA fundamentals at Newgen Technomate and I am now ready to specialize in Banking domain — which this role offers directly.',
      C: 'The salary is too low and there is no promotion.',
      D: 'I want to leave because the projects are boring.'
    },
    answer: 'B',
    explanation: 'Exit reasons should always be framed as GROWTH motivation, not escape from problems. The best format: "I have gained X at my current company. I am now ready for Y, which this role offers." For Vaishnavi: "I have built solid BA fundamentals — BRD/FRD, Agile delivery, UAT — and worked with a banking client. I am now ready to specialize in Banking domain products, and this role offers that direct exposure."',
    interviewTip: 'Never say: money, manager problems, politics, or boredom. Always say: growth, specialization, domain focus, or new challenge.',
    memoryTrick: 'Exit answer = "I have GAINED X. I am ready for Y. This role IS Y."',
    realExample: 'Vaishnavi: Gained BA skills + banking client exposure at Newgen → Ready for Banking domain specialization → This role is in Banking domain.',
    whyOthersWrong: {
      A: 'Mentioning manager issues signals inability to manage relationships — an immediate red flag.',
      C: 'Salary complaints make you appear transactional rather than career-focused.',
      D: '"Boring" signals low engagement — interviewers worry you will leave them too.'
    },
    isScenario: false
  },
  {
    id: 'intro_7',
    topic: 'Introduction & Resume',
    difficulty: 'Medium',
    question: 'What is your biggest achievement as a BA?',
    options: {
      A: 'I completed all my tasks on time every sprint.',
      B: 'On the VPRM project, I drove the complete requirement lifecycle for a procurement automation system — resulting in 50% operational efficiency improvement and 30%+ turnaround time reduction for 500+ active users, with zero critical defects at go-live.',
      C: 'I wrote very detailed documents that no one ever complained about.',
      D: 'I attended all meetings and took notes diligently.'
    },
    answer: 'B',
    explanation: 'Achievement answers must use the STAR format: Situation → Task → Action → Result. The result MUST have a number. Vaishnavi\'s achievement: Situation — manual procurement process at banking client. Task — document and deliver automation requirements. Action — end-to-end requirement lifecycle, UAT coordination, stakeholder management. Result — 50% efficiency gain, 30% TAT reduction, 500+ users, zero critical defects at go-live.',
    interviewTip: 'If you cannot put a number on your achievement, it sounds like routine work. Always quantify: %, users affected, time saved, defects reduced.',
    memoryTrick: 'Achievement = PROBLEM + MY ACTION + THE NUMBER. No number = no achievement.',
    realExample: '50% efficiency improvement + 30% TAT reduction + 500+ active users + zero critical go-live defects = Vaishnavi\'s VPRM achievement.',
    whyOthersWrong: {
      A: 'Completing tasks on time is a baseline expectation, not an achievement.',
      C: '"No complaints" is passive — achievements are about positive outcomes, not absence of failure.',
      D: 'Taking notes is an activity, not an achievement with business impact.'
    },
    isScenario: false
  },
  {
    id: 'intro_8',
    topic: 'Introduction & Resume',
    difficulty: 'Easy',
    question: 'What tools do you use daily in your current role?',
    options: {
      A: 'Microsoft Word and email.',
      B: 'JIRA for sprint/defect management, Confluence for documentation, Figma for wireframing, PostgreSQL for data validation, Excel for tracking, and AI tools like ChatGPT and Claude for research and drafting.',
      C: 'I use whatever the client tells me to use.',
      D: 'I mostly use my memory and verbal communication — I am not a technical person.'
    },
    answer: 'B',
    explanation: 'Tool answers should demonstrate a COMPLETE BA toolkit: (1) Project management — JIRA, Confluence. (2) Design — Figma, draw.io. (3) Data — PostgreSQL, Excel. (4) Documentation — MS Word, Confluence. (5) AI tools — ChatGPT, Claude. Always say HOW you use each tool, not just that you use it. "I use JIRA to manage the product backlog, sprint tracking, and defect logging during UAT."',
    interviewTip: 'Mentioning AI tools (ChatGPT, Claude) is a differentiator in 2025. Frame it as: "I use Claude for analysis and research and ChatGPT for initial document drafts."',
    memoryTrick: 'BA tools = JCFPE: JIRA + Confluence + Figma + PostgreSQL + Excel. Plus AI tools as a bonus.',
    realExample: 'Vaishnavi uses JIRA for backlogs, Confluence for docs, Figma for wireframes, PostgreSQL for data validation during UAT, ChatGPT for document creation, Claude for research.',
    whyOthersWrong: {
      A: 'Word and email is the minimum — it signals you are not tool-proficient for a BA role.',
      C: 'Saying "whatever the client says" shows no independent tool knowledge.',
      D: '"Not a technical person" is a red flag for a BA role requiring data validation and system documentation.'
    },
    isScenario: false
  },
  {
    id: 'intro_9',
    topic: 'Introduction & Resume',
    difficulty: 'Medium',
    question: 'How do you handle a situation where requirements are unclear?',
    options: {
      A: 'I wait for the stakeholder to clarify on their own.',
      B: 'I document my interpretation of the requirement, present it to the stakeholder with specific clarifying questions, get written confirmation, and update the FRD accordingly.',
      C: 'I ask the developer to decide what to build based on their technical judgment.',
      D: 'I skip the unclear requirement and move to the next one.'
    },
    answer: 'B',
    explanation: 'The correct approach: (1) Never assume — document your interpretation as a starting hypothesis. (2) Go to the stakeholder with SPECIFIC questions, not open-ended "what do you want?" (3) Get written confirmation via email or meeting notes. (4) Update the FRD and recirculate for sign-off. Coming prepared with your interpretation is much more productive than open-ended questioning — stakeholders respond better to "I understood this as X — is that correct?" than "What did you mean?"',
    interviewTip: 'The key differentiator is coming PREPARED to the clarification meeting with your interpretation already written down. This shows initiative and saves stakeholder time.',
    memoryTrick: 'Unclear requirement = HYPOTHESIZE → ASK SPECIFIC QUESTIONS → CONFIRM IN WRITING → UPDATE DOCUMENT.',
    realExample: 'A requirement says "the system should handle large transactions." Vaishnavi would define: large = above what amount? What happens — delay, alert, or block? And present this interpretation for stakeholder confirmation.',
    whyOthersWrong: {
      A: 'Waiting passively delays the project and signals you cannot drive clarity.',
      C: 'Developers build what is technically easy, not what the business needs — requirements cannot be delegated to developers.',
      D: 'Skipping requirements creates gaps that surface as defects in UAT or production.'
    },
    isScenario: false
  },
  {
    id: 'intro_10',
    topic: 'Introduction & Resume',
    difficulty: 'Medium',
    question: 'What do you know about this company and this role?',
    options: {
      A: 'I do not know much — I just applied to many companies.',
      B: 'Brraysoft works in Banking and Financial Services. This BA role requires banking application experience, remittance knowledge, BRD/FRD documentation, and UAT — which aligns closely with my VPRM banking client project and my domain self-study.',
      C: 'I know you are a good company with good culture.',
      D: 'I only know what was in the job description.'
    },
    answer: 'B',
    explanation: 'Before any interview you must research: (1) What the company does — domain, products, clients. (2) What this specific role requires — map it to YOUR experience. (3) Why YOU specifically are the right fit. For Brraysoft: Banking/Financial Services focus, BA role with 2-4 years experience, remittance and banking application requirements. Vaishnavi\'s fit: banking client project (VPRM), self-study of KYC/AML/NEFT/RTGS/remittance, BRD/FRD/UAT skills.',
    interviewTip: 'Always connect your research to YOUR FIT. Do not just recite company facts — say "...and that is exactly where my VPRM banking client experience is directly applicable."',
    memoryTrick: 'Company research answer = WHAT THEY DO + WHAT THIS ROLE NEEDS + WHY I FIT.',
    realExample: 'Brraysoft: Banking domain, remittance focus, BA 2-4 years. Vaishnavi: banking client project, self-studied remittance lifecycle, BRD/FRD/UAT experienced.',
    whyOthersWrong: {
      A: 'Admitting you did not research is the fastest way to get rejected.',
      C: '"Good company with good culture" is empty — every candidate says this.',
      D: '"Only the job description" shows minimum effort — research should go beyond the JD.'
    },
    isScenario: false
  },

  // ===== SECTION 2: REQUIREMENT GATHERING =====
  {
    id: 'req_1',
    topic: 'Requirement Gathering',
    difficulty: 'Medium',
    question: 'What is requirement elicitation? Which techniques have you used?',
    options: {
      A: 'Elicitation means sending a requirements form via email and waiting for responses.',
      B: 'Elicitation is the structured process of drawing out stated and unstated needs from stakeholders using techniques like interviews, process walkthroughs, workshops, document analysis, and MoSCoW prioritization.',
      C: 'Elicitation means asking the project manager what the client wants.',
      D: 'Elicitation is reading the technical specification written by the architect.'
    },
    answer: 'B',
    explanation: 'Requirement elicitation is an active process of uncovering what stakeholders need — including things they have not explicitly stated. Key techniques: (1) Stakeholder Interviews — structured Q&A to understand needs. (2) Process Walkthroughs — ask the user to show you exactly how they work today. (3) Facilitated Workshops — multi-stakeholder sessions for complex requirements. (4) Document Analysis — review existing SOPs, manuals, old BRDs. (5) Prototyping/Wireframes — show a visual to surface hidden requirements. (6) MoSCoW Prioritization — align on what is Must Have vs Could Have.',
    interviewTip: 'Always mention at least 3-4 techniques by name. Then say which one you use most and WHY. "I find process walkthroughs most effective because stakeholders surface implicit steps they do habitually."',
    memoryTrick: 'Elicitation techniques = I-WD-PM: Interviews + Workshops + Document analysis + Prototyping + MoSCoW.',
    realExample: 'For VPRM, Vaishnavi used stakeholder interviews with procurement/finance heads, process walkthroughs of manual approval workflows, and MoSCoW to prioritize approval automation vs. reporting features.',
    whyOthersWrong: {
      A: 'Email forms get surface-level responses — they miss implicit, unstated, and contradictory needs.',
      C: 'The PM manages timeline and resources — eliciting business requirements is the BA\'s responsibility.',
      D: 'Technical specifications are outputs of design, not inputs to requirements — reading them replaces requirement gathering with reverse engineering.'
    },
    isScenario: false
  },
  {
    id: 'req_2',
    topic: 'Requirement Gathering',
    difficulty: 'Medium',
    question: 'What is the difference between functional and non-functional requirements?',
    options: {
      A: 'Functional requirements are for the frontend and non-functional are for the backend.',
      B: 'Functional requirements define WHAT the system does (features, workflows, business logic). Non-functional requirements define HOW WELL it does it (performance, security, availability, scalability).',
      C: 'Functional requirements are written by BAs and non-functional are written by developers.',
      D: 'There is no real difference — both are just listed in the FRD.'
    },
    answer: 'B',
    explanation: 'Functional requirements describe system behavior: "The system shall allow a user to initiate a fund transfer by entering beneficiary account number, IFSC code, and amount." Non-functional requirements describe quality attributes: Performance — fund transfer screen loads within 2 seconds. Security — all data encrypted with AES-256. Availability — 99.9% uptime SLA. Scalability — system handles 10,000 concurrent users. Both are documented in the FRD.',
    interviewTip: 'Give a banking example for both. Functional: "System must validate IFSC code format before allowing submission." Non-functional: "Transaction API must respond within 3 seconds under peak load."',
    memoryTrick: 'Functional = WHAT. Non-functional = HOW WELL. Remember: Function is the feature, Non-function is the quality.',
    realExample: 'For VPRM — Functional: System allows purchase request creation with vendor name, amount, and category. Non-functional: Approval notification email delivered within 30 seconds of status change.',
    whyOthersWrong: {
      A: 'Frontend/backend is a technical layer distinction, not a requirements type distinction.',
      C: 'Both functional and non-functional requirements are gathered and documented by the BA — not split by role.',
      D: 'They are fundamentally different in purpose and must be consciously identified and documented separately.'
    },
    isScenario: false
  },
  {
    id: 'req_3',
    topic: 'Requirement Gathering',
    difficulty: 'Hard',
    question: 'How do you gather requirements from stakeholders who are unavailable or uncooperative?',
    options: {
      A: 'Skip them and gather requirements from available stakeholders only.',
      B: 'Understand the root cause of their resistance, adapt to their availability with shorter sessions or async methods, address their specific concern directly, and escalate with documentation if the issue persists.',
      C: 'Send repeated reminder emails until they respond.',
      D: 'Ask the project manager to force them to attend meetings.'
    },
    answer: 'B',
    explanation: 'The approach depends on WHY the stakeholder is uncooperative: (1) Too busy — adapt: 15-minute focused sessions instead of 2-hour meetings, async questionnaires, walking to their desk. (2) Resistant to change — address their concern: show how the system benefits THEM specifically. (3) Disengaged — escalate to project manager with documented evidence of attempts. Key principle: never skip a key stakeholder — their requirements surface as defects in UAT or production.',
    interviewTip: 'Show EMPATHY before ESCALATION. Interviewers want to see that you try to resolve it yourself first, escalate with documentation only after genuine attempts.',
    memoryTrick: 'Uncooperative stakeholder = UNDERSTAND WHY → ADAPT FORMAT → ADDRESS CONCERN → ESCALATE IF NEEDED.',
    realExample: 'Vaishnavi\'s VPRM finance head canceled meetings. She did a 1:1, discovered the concern (extra clicks in new system), proposed bulk approval feature, and the stakeholder became cooperative.',
    whyOthersWrong: {
      A: 'Skipping a stakeholder creates requirement gaps that surface as expensive production issues.',
      C: 'Repeated reminder emails escalate frustration without resolving the underlying issue.',
      D: 'Forcing through the PM without trying softer approaches first damages the working relationship.'
    },
    isScenario: true
  },
  {
    id: 'req_4',
    topic: 'Requirement Gathering',
    difficulty: 'Medium',
    question: 'What is MoSCoW prioritization? Give an example.',
    options: {
      A: 'MoSCoW is a Moscow-based banking regulation for AML compliance.',
      B: 'MoSCoW stands for Must Have, Should Have, Could Have, and Won\'t Have — a technique to prioritize requirements by business value and urgency.',
      C: 'MoSCoW is a waterfall project methodology for large-scale banking projects.',
      D: 'MoSCoW is a type of user story sizing technique using T-shirt sizes.'
    },
    answer: 'B',
    explanation: 'MoSCoW prioritization: Must Have — non-negotiable, system is useless without these. Should Have — important but delivery possible without them temporarily. Could Have — nice to have, low impact if excluded. Won\'t Have — explicitly out of scope for this release. VPRM Example: Must Have = purchase request creation + multi-level approval workflow. Should Have = automated email notifications. Could Have = department-level analytics dashboard. Won\'t Have (this release) = mobile app access.',
    interviewTip: 'Always give a REAL example from your project. Say which category each feature fell into and WHY. This shows you actually used it, not just read the definition.',
    memoryTrick: 'MoSCoW = Must + Should + Could + Won\'t. The W is silent in prioritization — Won\'t Have features are explicitly parked, not forgotten.',
    realExample: 'VPRM: Must Have = core procurement workflow. Should Have = notifications. Could Have = analytics. Won\'t Have = mobile app. This scoped Phase 1 realistically.',
    whyOthersWrong: {
      A: 'MoSCoW has nothing to do with geography or Russian banking regulation.',
      C: 'MoSCoW is a requirement prioritization technique, not a project methodology.',
      D: 'T-shirt sizing (XS/S/M/L/XL) is a story sizing technique — completely different from MoSCoW prioritization.'
    },
    isScenario: false
  },
  {
    id: 'req_5',
    topic: 'Requirement Gathering',
    difficulty: 'Medium',
    question: 'How do you validate that requirements are complete?',
    options: {
      A: 'Once I write the BRD, I consider requirements complete.',
      B: 'I use stakeholder walkthroughs, a requirement quality checklist, peer review, process flow mapping, and RTM coverage to validate completeness before sign-off.',
      C: 'I send the BRD to the developer and if they have no questions, it is complete.',
      D: 'I validate completeness after UAT by checking what the testers covered.'
    },
    answer: 'B',
    explanation: 'Completeness validation uses multiple checkpoints: (1) Stakeholder Walkthroughs — present requirements back, get explicit confirmation. (2) Requirement Quality Checklist — each requirement must be Clear, Measurable, Testable, Unambiguous, Traceable. (3) Peer Review — another BA or tech lead reviews for gaps. (4) Process Flow Mapping — map requirements to each process step; uncovered steps = missing requirements. (5) RTM Check — every requirement must map to at least one test case; if not, it is either missing or untestable.',
    interviewTip: 'Mention the TESTABILITY test: if you cannot write a test case for a requirement, it is either not specific enough or missing. This is a strong indicator of BA maturity.',
    memoryTrick: 'Completeness validation = Walk + Check + Peer + Flow + RTM. All five gates.',
    realExample: 'Vaishnavi checks VPRM requirements against process flow diagrams — every swim lane step has a corresponding requirement. Then the RTM maps every requirement to a UAT test case.',
    whyOthersWrong: {
      A: 'Writing the BRD does not validate it — stakeholder confirmation does.',
      C: 'Developer silence means they made assumptions — not that requirements are complete.',
      D: 'Discovering incompleteness in UAT is too late and expensive to fix.'
    },
    isScenario: false
  },
  {
    id: 'req_6',
    topic: 'Requirement Gathering',
    difficulty: 'Medium',
    question: 'What is a Requirement Traceability Matrix and when do you use it?',
    options: {
      A: 'An RTM is a project schedule that tracks task completion by developer.',
      B: 'An RTM maps each business requirement to its functional requirement, test case, and implementation status — ensuring full coverage throughout the project lifecycle.',
      C: 'An RTM is a risk register that lists compliance violations found during audit.',
      D: 'An RTM is a sprint board that shows story points completed per sprint.'
    },
    answer: 'B',
    explanation: 'The RTM is a living document that ensures end-to-end traceability: Requirement ID → BRD Reference → FRD Reference → User Story → Test Case ID → Test Status → Defect ID (if any). I start building it when BRD is baselined. Use it throughout: Development — track implementation status. Testing — confirm every requirement has a test case. UAT — confirm all test cases were executed. Change Management — assess CR impact by finding all linked elements. Compliance/Audit — prove every regulatory requirement was tested.',
    interviewTip: 'Mention the banking-specific addition: a Compliance Reference column linking requirements to RBI guidelines or AML rules — this shows banking domain maturity.',
    memoryTrick: 'RTM = MAP of the project. Requirement → Spec → Test Case → Status. Everything connected, nothing lost.',
    realExample: 'For VPRM, Vaishnavi\'s RTM has columns: Requirement ID, BRD Section, FRD Section, User Story ID, Test Case ID, UAT Status, Defect ID, and CR reference.',
    whyOthersWrong: {
      A: 'Task scheduling by developer is a project plan — completely different from an RTM.',
      C: 'A risk register tracks project risks, not requirement-to-test traceability.',
      D: 'A sprint board tracks sprint progress — the RTM tracks requirement coverage across the full SDLC.'
    },
    isScenario: false
  },
  {
    id: 'req_7',
    topic: 'Requirement Gathering',
    difficulty: 'Hard',
    question: 'How do you handle conflicting requirements from different stakeholders?',
    options: {
      A: 'Choose the requirement from the most senior stakeholder and discard the other.',
      B: 'Document both requirements, analyze whether the conflict is genuine, bring stakeholders together to facilitate resolution anchored on business objectives, and escalate to the project sponsor if unresolved.',
      C: 'Average out the two conflicting requirements into a compromise.',
      D: 'Implement both requirements and let UAT decide which one stays.'
    },
    answer: 'B',
    explanation: 'Conflict resolution process: (1) Document both requirements clearly — never discard either without analysis. (2) Analyze root cause — is it a genuine business conflict or a communication misunderstanding? Many conflicts dissolve when both parties hear each other. (3) Facilitate a joint meeting (not separate conversations) — present both perspectives neutrally, anchor discussion on shared business goal. (4) Document the agreed decision and get sign-off immediately. (5) If unresolved, escalate to project sponsor with a clear options analysis — not just "they disagree."',
    interviewTip: 'Emphasize that you NEVER take sides — you facilitate. And you NEVER resolve conflicts via email — it requires a face-to-face (or video) conversation.',
    memoryTrick: 'Conflict resolution = Document Both → Analyze Root Cause → Joint Meeting → Anchor on Business Goal → Sign-off → Escalate if needed.',
    realExample: 'VPRM: Finance head wanted single-level approvals for speed. Procurement head wanted two-level approvals for audit compliance. Vaishnavi facilitated a joint meeting — compliance requirement won, with a fast-track mode for low-value requests as a compromise.',
    whyOthersWrong: {
      A: 'Senior rank does not mean correct requirement — the junior stakeholder may have the compliance insight.',
      C: 'Averaging requirements produces a solution that satisfies neither party fully and may be invalid.',
      D: 'Building both and deciding in UAT doubles development cost and creates integration conflicts.'
    },
    isScenario: true
  },
  {
    id: 'req_8',
    topic: 'Requirement Gathering',
    difficulty: 'Medium',
    question: 'What is scope creep? How do you prevent it?',
    options: {
      A: 'Scope creep is a bug found in production that was not caught in UAT.',
      B: 'Scope creep is the gradual, uncontrolled addition of new requirements after scope is baselined. It is prevented through a formal Change Request process with impact analysis and CCB approval.',
      C: 'Scope creep is when developers build features faster than planned, ahead of schedule.',
      D: 'Scope creep happens when the BA writes too many requirements in the BRD.'
    },
    answer: 'B',
    explanation: 'Scope creep occurs when new features or changes are added informally, without going through change control. Prevention: (1) Establish a clear, signed-off scope baseline in the BRD. (2) Implement a Change Request (CR) process — every change requires documentation, impact analysis (time, cost, effort), and CCB approval before implementation. (3) No verbal agreements — everything in writing. (4) Communicate the scope boundary clearly to all stakeholders at project kickoff. The goal is not to refuse changes — it is to manage them with visibility and proper authorization.',
    interviewTip: 'Say: "I never refuse changes — I route them through the CR process so the business can make an informed decision about the impact." This shows maturity — not rigidity.',
    memoryTrick: 'Scope creep prevention = BASELINE + CR PROCESS + WRITTEN AGREEMENT + CCB APPROVAL. Four locks on the door.',
    realExample: 'In VPRM, when procurement head asked to add a supplier performance rating module mid-project, Vaishnavi raised a CR, estimated 3 weeks of additional effort, presented to CCB — it was deferred to Phase 2.',
    whyOthersWrong: {
      A: 'Production bugs are defects — scope creep is about unauthorized requirement additions, not defects.',
      C: 'Faster development is a positive outcome — not scope creep.',
      D: 'Writing many requirements is thorough BRD creation — scope creep is about post-baseline additions.'
    },
    isScenario: false
  },
  {
    id: 'req_9',
    topic: 'Requirement Gathering',
    difficulty: 'Medium',
    question: 'What documents do you produce during requirement gathering?',
    options: {
      A: 'Only the BRD — one document is sufficient.',
      B: 'Stakeholder Register, Meeting Notes, BRD, FRD, Process Flow Diagrams, Wireframes, and User Stories with Acceptance Criteria.',
      C: 'The developer writes the technical specification and I review it.',
      D: 'Meeting minutes sent by the project manager are sufficient documentation.'
    },
    answer: 'B',
    explanation: 'Requirement gathering produces a hierarchy of documents: (1) Stakeholder Register — who is involved, their role, and communication plan. (2) Meeting Notes — sent within 24 hours after every elicitation session for stakeholder confirmation. (3) BRD — high-level business requirements after elicitation. (4) FRD — detailed functional specifications derived from BRD. (5) Process Flow Diagrams — AS-IS and TO-BE workflows. (6) Wireframes — screen-level visual requirements in Figma. (7) User Stories with Acceptance Criteria — for Agile sprint delivery.',
    interviewTip: 'Mention that MEETING NOTES sent within 24 hours are critical — they create a paper trail and prevent stakeholders from claiming "that is not what I said" later.',
    memoryTrick: 'Requirement docs = SR → MN → BRD → FRD → PF → WF → US. Every layer adds detail.',
    realExample: 'For VPRM: Stakeholder Register (procurement head, finance manager, operations lead), BRD (procurement scope), FRD (field-level specs), Figma wireframes (approval dashboard), user stories in JIRA.',
    whyOthersWrong: {
      A: 'One document is never sufficient — different audiences need different formats and levels of detail.',
      C: 'Technical specifications are DEVELOPER outputs — BAs write requirements that DRIVE the tech spec.',
      D: 'PM meeting minutes capture action items and decisions — they do not replace structured requirements documentation.'
    },
    isScenario: false
  },
  {
    id: 'req_10',
    topic: 'Requirement Gathering',
    difficulty: 'Medium',
    question: 'How do you ensure requirements are testable?',
    options: {
      A: 'Requirements are automatically testable if they are in the BRD.',
      B: 'I apply the testability test: if I cannot write a specific test case for a requirement, I rewrite it until I can. Requirements must be measurable, specific, and use Given-When-Then acceptance criteria.',
      C: 'I ask the QA team to decide which requirements are testable.',
      D: 'Testability is the developer\'s responsibility, not the BA\'s.'
    },
    answer: 'B',
    explanation: 'Testability test: If you cannot write a UAT test case for a requirement, it is too vague or incomplete. Red flag words that make requirements untestable: "fast," "user-friendly," "handles errors gracefully," "easy to use." Fix: replace with measurable specifics. "System should be fast" → "Login page must load within 3 seconds under 1000 concurrent users." I write acceptance criteria in Given-When-Then format for every user story — this makes test case creation direct and removes ambiguity.',
    interviewTip: 'Say the test explicitly: "I mentally ask — can I write 3 test cases for this requirement right now? If no, the requirement is not specific enough and I rewrite it before sign-off."',
    memoryTrick: 'Testable requirement = SPECIFIC + MEASURABLE + Given-When-Then format. Vague word = rewrite immediately.',
    realExample: 'VPRM requirement: "System shall send an approval notification" is not testable. Rewritten: "System shall send an email notification to the approver within 60 seconds of purchase request submission — including request ID, vendor name, and amount."',
    whyOthersWrong: {
      A: 'Being in the BRD does not make a requirement testable — vague BRD requirements create untestable spec.',
      C: 'Testability is determined during requirement writing — QA should not need to interpret vague requirements.',
      D: 'Testability is explicitly the BA\'s responsibility — developers build to requirements, QA tests the behavior.'
    },
    isScenario: false
  },

  // ===== SECTION 3: BRD =====
  {
    id: 'brd_1',
    topic: 'BRD',
    difficulty: 'Medium',
    question: 'What is a BRD? What sections does it contain?',
    options: {
      A: 'A BRD is a technical design document written by developers to describe system architecture.',
      B: 'A BRD is a Business Requirements Document that captures WHAT the business needs. Key sections: Executive Summary, Background, Business Objectives, Scope, Stakeholder List, Business Requirements (with IDs), Assumptions, Constraints, Dependencies, and Sign-off.',
      C: 'A BRD is the same as an FRD — both describe system functionality in equal detail.',
      D: 'A BRD is a budget document that lists the project costs and resource allocation.'
    },
    answer: 'B',
    explanation: 'The BRD captures WHAT the business needs in BUSINESS LANGUAGE — not technical language. It is written for business stakeholders and approved by the business head. Sections: (1) Executive Summary — project background in 1 paragraph. (2) Business Objectives — what outcomes the project achieves. (3) Scope — explicitly what is in and out of scope. (4) Stakeholder List — who is involved. (5) Business Requirements — numbered list with unique IDs (BR-001, BR-002). (6) Assumptions and Constraints — dependencies the requirements rest on. (7) Sign-off Page — formal approval section.',
    interviewTip: 'Emphasize that EVERY requirement in a BRD gets a unique ID (BR-001, BR-002). This is what makes traceability possible — IDs link to FRD sections and test cases in the RTM.',
    memoryTrick: 'BRD sections = ESBO-SRACD-S: Executive Summary, Background, Objectives, Scope, Stakeholders, Requirements, Assumptions, Constraints, Dependencies, Sign-off.',
    realExample: 'Vaishnavi\'s VPRM BRD: Background = manual procurement process at banking client. Objectives = digitize procurement, reduce approval time. Scope = vendor onboarding + PR creation + approvals. Out of scope = ERP integration (Phase 2).',
    whyOthersWrong: {
      A: 'A BRD is written by the BA in business language — it precedes technical design.',
      C: 'BRD and FRD are fundamentally different in audience, language, and detail level.',
      D: 'Budget and resource allocation are in the Project Plan — not the BRD.'
    },
    isScenario: false
  },
  {
    id: 'brd_2',
    topic: 'BRD',
    difficulty: 'Easy',
    question: 'Who is the audience of a BRD?',
    options: {
      A: 'Developers and QA engineers who need to build and test the system.',
      B: 'Business stakeholders — business heads, project sponsors, operations managers — who approve what is being built.',
      C: 'The database administrator who designs the data model.',
      D: 'Only the project manager and the BA.'
    },
    answer: 'B',
    explanation: 'The BRD audience is BUSINESS stakeholders: Business Head / Sponsor (who approves funding), Operations Managers (who own the processes), Department Heads (whose workflows are affected), and the BA team (who use it to write the FRD). It should have ZERO technical jargon. If a business user cannot read and understand it, it is written incorrectly. Developers and QA engineers use the FRD — not the BRD. The BRD sign-off comes from the business head or project sponsor.',
    interviewTip: 'Say: "I always ask myself — can the CFO or operations head read this and confirm it is what they asked for? If yes, the BRD language is correct."',
    memoryTrick: 'BRD audience = BUSINESS people. FRD audience = TECHNICAL people. Never mix the audiences.',
    realExample: 'VPRM BRD was reviewed and signed by the banking client\'s procurement head and finance manager — not by developers.',
    whyOthersWrong: {
      A: 'Developers use the FRD, not the BRD — the FRD contains the technical specifications they need.',
      C: 'Database administrators use data models and technical schemas — not BRDs.',
      D: 'The PM and BA draft the BRD — the primary audience is the BUSINESS STAKEHOLDERS who approve it.'
    },
    isScenario: false
  },
  {
    id: 'brd_3',
    topic: 'BRD',
    difficulty: 'Medium',
    question: 'What is the difference between BRD and FRD?',
    options: {
      A: 'BRD is written by business users and FRD is written by developers.',
      B: 'BRD defines WHAT the business needs (business language, high-level). FRD defines HOW the system will behave (technical detail — screens, validations, workflows, APIs).',
      C: 'BRD is for large projects and FRD is for small projects.',
      D: 'BRD and FRD are two names for the same document — companies use either one.'
    },
    answer: 'B',
    explanation: 'BRD vs FRD: BRD — WHAT is needed. Business language. Audience: business stakeholders. Sign-off: Business Head. Example: "The system must allow procurement officers to submit purchase requests for vendor approval." FRD — HOW the system delivers it. Technical language. Audience: Dev + QA. Sign-off: Technical Lead + QA Lead. Example: "Purchase Request form shall have: Vendor Name (text, 100 chars, mandatory), Amount (numeric, 2 decimal places, mandatory, max 10M), Category dropdown (values from vendor master table), Submit button triggers PR-001 API."',
    interviewTip: 'The test: If I read a requirement and cannot write a screen specification from it, it belongs in the BRD. If I can specify exact field names and validation rules, it belongs in the FRD.',
    memoryTrick: 'BRD = Business language = WHAT. FRD = Functional/Technical language = HOW. BRD comes first and drives the FRD.',
    realExample: 'BRD: "System must support multi-level purchase approval." FRD: "Level 1 approval by Dept Head (within 2 business days), Level 2 by Finance Manager (within 1 business day). Escalation email triggered at 80% of SLA. Approve/Reject buttons with mandatory comment field (100 chars, mandatory on Reject)."',
    whyOthersWrong: {
      A: 'Both BRD and FRD are written by the BA — the difference is content and audience, not who writes them.',
      C: 'Project size does not determine which document to use — both are used regardless of project size.',
      D: 'BRD and FRD are distinct documents with different purposes — using one does not replace the other.'
    },
    isScenario: false
  },
  {
    id: 'brd_4',
    topic: 'BRD',
    difficulty: 'Medium',
    question: 'How do you get sign-off on a BRD?',
    options: {
      A: 'Email the BRD to all stakeholders and wait for someone to reply with approval.',
      B: 'Conduct a formal BRD walkthrough meeting, address all feedback, update the document, circulate the final version with a sign-off deadline, and obtain written approval from the authorized business representative.',
      C: 'The project manager signs off on the BRD on behalf of all stakeholders.',
      D: 'Get sign-off only from the developer who will build the system.'
    },
    answer: 'B',
    explanation: 'BRD sign-off process: (1) Schedule a walkthrough meeting with all key stakeholders. (2) Present each section, address questions and objections in the meeting. (3) Document all feedback and changes raised. (4) Update the BRD within 24-48 hours. (5) Circulate the final version with an explicit sign-off deadline (3-5 business days). (6) Obtain formal sign-off — physical signature or written email approval from the authorized business approver. Once signed off, the BRD is baselined — any changes go through the CR process.',
    interviewTip: 'Say: "I never just email a BRD and wait. I schedule a walkthrough so I can address objections in real time — it is faster and prevents the back-and-forth of asynchronous review."',
    memoryTrick: 'BRD sign-off = Walkthrough Meeting → Address Feedback → Update → Circulate with Deadline → Written Approval.',
    realExample: 'Vaishnavi scheduled a 90-minute VPRM BRD walkthrough with procurement head, finance manager, and operations lead. Updated within 24 hours. Got email approval from the procurement head as authorized signatory.',
    whyOthersWrong: {
      A: 'Email-only review gets ignored or delayed — walkthroughs surface concerns faster.',
      C: 'The PM manages the project — business sign-off must come from the business owner, not the PM.',
      D: 'Developers are NOT the BRD approver — they review the FRD, not the BRD.'
    },
    isScenario: false
  },
  {
    id: 'brd_5',
    topic: 'BRD',
    difficulty: 'Hard',
    question: 'What happens if a BRD changes after development has started?',
    options: {
      A: 'Update the BRD quietly and tell the developer verbally about the change.',
      B: 'Raise a formal Change Request, perform impact analysis (scope, timeline, effort), get CCB approval, update all related documents (BRD, FRD, test cases, RTM), and notify the development team in writing before proceeding.',
      C: 'Development stops completely until the new BRD version is fully re-approved.',
      D: 'Ignore the change request and deliver the original scope — changes are not allowed after sign-off.'
    },
    answer: 'B',
    explanation: 'Post-baseline changes always go through Change Control. Process: (1) Requester submits a CR with change description and business reason. (2) BA performs impact analysis — which modules are affected, effort estimate (with dev lead), timeline impact, downstream dependencies. (3) CR with impact analysis goes to CCB (Change Control Board). (4) CCB approves, rejects, or defers. (5) If approved — update BRD, FRD, user stories, test cases, RTM, and project plan. (6) Notify development team in writing. Every change is traceable — no silent updates.',
    interviewTip: 'Say: "I never refuse changes. I route them through the CR process so the business can make an informed decision with full visibility of the time, cost, and risk impact."',
    memoryTrick: 'Post-baseline change = CR → Impact Analysis → CCB Approval → Update ALL documents → Notify Dev in Writing.',
    realExample: 'VPRM mid-project: procurement head requested adding supplier performance tracking. Vaishnavi raised CR, estimated 3 weeks additional effort, CCB deferred to Phase 2. Documented and baselined the deferral decision.',
    whyOthersWrong: {
      A: 'Verbal changes and silent document updates create untraceable scope — a compliance and audit risk in banking.',
      C: 'Complete development stop for every change is impractical — change control manages changes, it does not freeze all work.',
      D: 'Changes ARE allowed after sign-off — they just require formal CR authorization.'
    },
    isScenario: true
  },
  {
    id: 'brd_6',
    topic: 'BRD',
    difficulty: 'Medium',
    question: 'Have you written a BRD from scratch? Walk me through your process.',
    options: {
      A: 'Yes — I open a Word template and fill in what stakeholders told me in one meeting.',
      B: 'Yes — I review existing documentation first, conduct structured stakeholder elicitation sessions, draft each BRD section iteratively, assign requirement IDs, conduct a walkthrough, and obtain formal sign-off.',
      C: 'No — my company uses standard templates that auto-generate BRDs from JIRA tickets.',
      D: 'The senior BA writes the BRD and I only contribute user stories.'
    },
    answer: 'B',
    explanation: 'End-to-end BRD creation process: (1) Pre-work — review any existing documentation (old BRDs, SOPs, process manuals). (2) Elicitation — structured stakeholder interviews and process walkthroughs. (3) Drafting — fill BRD sections iteratively: background → objectives → scope → requirements (each with a unique ID). (4) Internal Review — peer review for gaps, ambiguities, or testability issues. (5) Stakeholder Walkthrough — present and address feedback. (6) Update and re-circulate. (7) Formal Sign-off — written approval from business owner. (8) Version control — BRD v1.0 becomes the baseline.',
    interviewTip: 'Mention that you assign UNIQUE IDs to every requirement (BR-001, BR-002). This is what makes the RTM and change impact analysis possible later.',
    memoryTrick: 'BRD creation = Pre-work → Elicit → Draft → Peer Review → Walkthrough → Update → Sign-off → Baseline.',
    realExample: 'Vaishnavi wrote VPRM BRD from scratch: reviewed client\'s manual procurement SOPs → conducted interviews with 3 stakeholder groups → drafted 28 numbered business requirements → walkthroughed with procurement head → obtained sign-off in 2 weeks.',
    whyOthersWrong: {
      A: 'One meeting is insufficient — multiple sessions are needed to cover all stakeholder perspectives and validate completeness.',
      C: 'No tool auto-generates BRDs from JIRA — BRDs require human analysis and business language articulation.',
      D: 'If a BA is only writing user stories, they are not performing the full BA role.'
    },
    isScenario: false
  },
  {
    id: 'brd_7',
    topic: 'BRD',
    difficulty: 'Medium',
    question: 'How detailed should a BRD be?',
    options: {
      A: 'As detailed as possible — include field-level specifications, API names, and database table designs.',
      B: 'Detailed enough that a business stakeholder can read it and confirm it represents what they need — but not so technical that it becomes an FRD.',
      C: 'One page maximum — more detail creates confusion.',
      D: 'The more pages the better — thoroughness is always valued.'
    },
    answer: 'B',
    explanation: 'BRD detail level: RIGHT level = a business head can read it and say "yes, this is what we need" without needing a technical dictionary. WRONG level (too deep) = field-level specifications, API names, database schemas, screen layouts. These belong in the FRD. A good test: if I find myself writing "the field shall be a VARCHAR(100)" in the BRD, I have gone too deep. BRD requirements describe BUSINESS OUTCOMES, not system behaviors. "The system must allow purchase requests to be approved by multiple levels based on amount thresholds" — that is a BRD requirement.',
    interviewTip: 'Say: "I apply the CFO test — if the CFO reads this requirement and understands it without technical knowledge, the language is correct for a BRD."',
    memoryTrick: 'BRD detail = Business outcome language. If you are specifying VARCHAR, you are in FRD territory.',
    realExample: 'BRD: "System must notify the finance manager of pending approvals exceeding Rs.5 lakh." FRD: "Email notification with template ENT-003 sent within 30 seconds of Level 1 approval, containing Request ID, vendor name, amount, and approver action button."',
    whyOthersWrong: {
      A: 'Field-level specifications, APIs, and database designs belong in the FRD and technical design docs.',
      C: 'One page is insufficient for a complex system — the BRD must be comprehensive for all business requirements.',
      D: 'Page count is not a quality metric — precision and clarity of requirements is what matters.'
    },
    isScenario: false
  },
  {
    id: 'brd_8',
    topic: 'BRD',
    difficulty: 'Medium',
    question: 'What are the common challenges you face while writing a BRD?',
    options: {
      A: 'The main challenge is choosing the right font and formatting.',
      B: 'Common challenges: stakeholders who do not know what they want, conflicting requirements across departments, getting timely sign-off, and avoiding scope creep after baseline.',
      C: 'BRD writing has no real challenges — it is straightforward documentation.',
      D: 'The challenge is that JIRA does not support BRD templates.'
    },
    answer: 'B',
    explanation: 'Real BRD challenges and solutions: (1) Stakeholders do not know what they want — solution: use process walkthroughs and AS-IS/TO-BE comparisons to make the conversation concrete. (2) Conflicting requirements — solution: facilitate joint stakeholder meetings, not separate conversations. (3) Timely sign-off — solution: conduct walkthrough meetings with a sign-off deadline rather than emailing documents and waiting. (4) Scope creep prevention — solution: be explicit about what is OUT of scope in the BRD and enforce the CR process after baseline.',
    interviewTip: 'Answer challenges with SOLUTIONS. Interviewers do not want to hear problems — they want to see how you solve them. Challenge + Solution pairs show BA maturity.',
    memoryTrick: 'BRD challenges = Unknown requirements + Conflicts + Sign-off delays + Scope creep. Each has a specific solution approach.',
    realExample: 'VPRM challenge: finance head could not articulate requirements in a meeting. Vaishnavi did a process walkthrough of the manual approval flow, documented it, and the finance head could confirm or correct from a concrete starting point.',
    whyOthersWrong: {
      A: 'Formatting is a cosmetic concern — the real challenges are in stakeholder management and requirement quality.',
      C: 'BRD writing is one of the most challenging BA activities — anyone claiming otherwise lacks experience.',
      D: 'BRDs are typically written in Word or Confluence — JIRA is for user story tracking, not BRD creation.'
    },
    isScenario: false
  },

  // ===== SECTION 4: FRD =====
  {
    id: 'frd_1',
    topic: 'FRD / FSD',
    difficulty: 'Medium',
    question: 'What is an FRD/FSD? How is it different from a BRD?',
    options: {
      A: 'FRD and BRD are different names for the same document used in different industries.',
      B: 'FRD translates BRD business requirements into detailed system behavior specifications — screen layouts, field validations, business rules, API integrations, and error messages. BRD says WHAT; FRD says HOW.',
      C: 'FRD is written by developers and reviewed by BAs.',
      D: 'FRD is used only in waterfall projects and has no place in Agile.'
    },
    answer: 'B',
    explanation: 'FRD (Functional Requirements Document) / FSD (Functional Specification Document) — same concept, different names. It translates BRD requirements into system specifications: Screen layouts and navigation flow. Field-level specifications (name, type, length, mandatory/optional, validation rules). Business rules (amount thresholds, date calculations, approval routing logic). API and integration requirements. Error messages for each validation failure. The FRD is the primary reference document for developers during build and for QA during test case writing.',
    interviewTip: 'Give a concrete example: "BRD says — system must validate IFSC code during beneficiary addition. FRD says — IFSC field: text, exactly 11 characters, format AAAA0NNNNNN (4 alpha + 0 + 6 numeric), error message: Invalid IFSC code format, please verify."',
    memoryTrick: 'BRD = WHAT (business). FRD = HOW (system). BRD drives FRD — you cannot write FRD without BRD.',
    realExample: 'VPRM FRD specified: Purchase Request form — 12 fields, 8 mandatory, 4 optional. Amount field: numeric, 2 decimal places, max 10,000,000, error if non-numeric. Submit triggers API PR-CREATE-001.',
    whyOthersWrong: {
      A: 'BRD and FRD are distinct documents with different purposes, audiences, and levels of detail.',
      C: 'FRD is written by the BA — developers provide technical input on feasibility but do not write it.',
      D: 'FRD concepts apply in Agile too — the difference is that Agile uses user stories + acceptance criteria as a lighter version of FRD specifications.'
    },
    isScenario: false
  },
  {
    id: 'frd_2',
    topic: 'FRD / FSD',
    difficulty: 'Medium',
    question: 'What are the key components of an FRD?',
    options: {
      A: 'Introduction, budget, resource plan, and project timeline.',
      B: 'Introduction, scope reference, functional requirements (with IDs), use cases or user stories, UI/screen specifications, data validations, business rules, API/integration requirements, non-functional requirements, and sign-off.',
      C: 'Database schema, infrastructure design, and code architecture.',
      D: 'Sprint plan, story points, and velocity metrics.'
    },
    answer: 'B',
    explanation: 'FRD key components: (1) Introduction and Scope — references the BRD version this FRD implements. (2) Functional Requirements — each with a unique ID (FR-001) traceable to BRD requirement. (3) Use Cases or User Stories — behavior specifications for each feature. (4) UI Screen Specifications — layout, fields, navigation flow. (5) Data Validations — field by field: type, length, format, mandatory/optional, error messages. (6) Business Rules — amount thresholds, approval routing, calculation logic. (7) API/Integration Requirements — endpoints, request/response, error handling. (8) Non-functional Requirements — performance, security, availability. (9) Sign-off Page.',
    interviewTip: 'Emphasize that every FRD requirement has a unique ID (FR-001) that traces back to a BRD requirement (BR-001). This traceability chain is what makes the RTM possible.',
    memoryTrick: 'FRD components = Introduction + Functional Requirements + UI Specs + Data Validations + Business Rules + APIs + NFRs + Sign-off.',
    realExample: 'VPRM FRD section: FR-012 — Approval Routing Rule. If PR amount <= Rs.50,000: Level 1 (Dept Head) only. If > Rs.50,000: Level 1 then Level 2 (Finance Manager). BRD reference: BR-005.',
    whyOthersWrong: {
      A: 'Budget, resources, and timelines are in the Project Plan — not the FRD.',
      C: 'Database schemas and code architecture are in Technical Design Documents — written by architects, not BAs.',
      D: 'Sprint plans and velocity are Agile project management metrics — not FRD content.'
    },
    isScenario: false
  },
  {
    id: 'frd_3',
    topic: 'FRD / FSD',
    difficulty: 'Medium',
    question: 'Who writes the FRD and who reviews it?',
    options: {
      A: 'Developer writes FRD and BA reviews it.',
      B: 'BA writes the FRD with technical input from the architect. Reviewers include: Tech Lead (feasibility), QA Lead (testability), Business Stakeholders (for user-facing workflows), and Project Manager (scope alignment).',
      C: 'QA team writes the FRD because it is used for test case creation.',
      D: 'The client writes the FRD and the BA just formats it.'
    },
    answer: 'B',
    explanation: 'FRD authorship and review: Author = BA (owns and writes the document). Technical Input = Architect or Tech Lead (confirms feasibility, flags constraints). Reviewers = Tech Lead (technical accuracy and feasibility), QA Lead (confirms requirements are testable and test cases can be derived), Business Stakeholders (confirm user-facing workflows are correct), Project Manager (confirms scope alignment). Sign-off = Project Manager + Tech Lead. The BA owns the FRD throughout the project and updates it when CRs are approved.',
    interviewTip: 'Say: "I own the FRD — developers provide technical input on implementation approach but I am responsible for the document content and quality."',
    memoryTrick: 'FRD: BA writes → Architect inputs → Tech Lead + QA Lead + PM reviews → Tech Lead + PM signs.',
    realExample: 'Vaishnavi wrote VPRM FRD, tech lead reviewed integration sections and flagged a database constraint on approval history storage, Vaishnavi updated the FRD with the agreed solution, QA lead confirmed testability of all 47 functional requirements.',
    whyOthersWrong: {
      A: 'Developers build TO the FRD — they do not write it. Reversing this creates systems built to developer preference, not business need.',
      C: 'QA uses the FRD to write test cases — they do not author the FRD itself.',
      D: 'Clients provide requirements — BAs transform those into specifications. The client is not an FRD author.'
    },
    isScenario: false
  },
  {
    id: 'frd_4',
    topic: 'FRD / FSD',
    difficulty: 'Hard',
    question: 'How do you handle technical constraints mentioned by developers in FRD?',
    options: {
      A: 'Accept the constraint without question and reduce the business requirement to match.',
      B: 'Document the constraint, assess business impact, explore alternatives with the architect and business stakeholder, agree on an approach, and update the FRD with the agreed solution.',
      C: 'Ignore developer constraints — they are being obstructive.',
      D: 'Remove the feature entirely if the developer says it is technically difficult.'
    },
    answer: 'B',
    explanation: 'Technical constraint handling: (1) Document the constraint clearly — what it is, why it exists, and which requirement it affects. (2) Assess business impact — does it prevent the business from achieving its objective? (3) Explore alternatives — can the business goal be met through a different technical approach? Involve the architect in this discussion. (4) Present options to the business stakeholder — let them make an informed decision. (5) Update the FRD with the agreed approach, including a note on the constraint and rationale. Never silently reduce requirements without stakeholder awareness.',
    interviewTip: 'Show that you are a BRIDGE, not a doormat. You advocate for business requirements while being realistic about technical constraints. Alternatives before acceptance.',
    memoryTrick: 'Technical constraint = Document → Impact → Alternatives → Business Decision → Update FRD.',
    realExample: 'VPRM: Developer said real-time JIRA integration for approval tracking was not feasible within timeline. Vaishnavi assessed: batch sync every 15 minutes was acceptable to business. Presented to stakeholder, approved, FRD updated with batch sync approach and rationale.',
    whyOthersWrong: {
      A: 'Accepting constraints without assessment may sacrifice critical business requirements unnecessarily.',
      C: 'Technical constraints are often real — dismissing them creates delivery failures.',
      D: 'Removing features without stakeholder approval is not the BA\'s decision to make.'
    },
    isScenario: true
  },
  {
    id: 'frd_5',
    topic: 'FRD / FSD',
    difficulty: 'Medium',
    question: 'How do you document edge cases and exceptions in FRD?',
    options: {
      A: 'Edge cases are documented only if stakeholders specifically ask for them.',
      B: 'For every workflow, I document the happy path AND all exception scenarios: the triggering condition, system response, and user-facing error message for each failure case.',
      C: 'QA documents edge cases in their test plan — the FRD only covers the happy path.',
      D: 'Edge cases are left to developer judgment during implementation.'
    },
    answer: 'B',
    explanation: 'Exception documentation structure for each workflow: Main Flow (happy path) — all steps go as expected. Alternate Flows — valid variations (e.g., different payment method selection). Exception Flows — error scenarios (e.g., insufficient balance, IFSC code invalid, network timeout, duplicate submission). For each exception, document: (1) Condition — what triggers the exception. (2) System Response — what the system does (block, alert, retry, reverse). (3) User Message — exact text shown. In banking, exception handling is a compliance requirement — a fund transfer that fails must have a documented reversal and notification process.',
    interviewTip: 'Say: "In banking, exception handling is not optional — a payment that fails without a clear reversal workflow is a regulatory risk. I treat exception documentation with the same rigor as the happy path."',
    memoryTrick: 'Exception documentation = CONDITION (what triggers) + SYSTEM RESPONSE (what system does) + USER MESSAGE (what user sees).',
    realExample: 'VPRM FRD exception: If Level 2 approver does not act within SLA (24 hours) → System auto-escalates to Finance Head → sends escalation email with FR-ESC-001 template → logs escalation event in audit trail.',
    whyOthersWrong: {
      A: 'Edge cases exist regardless of whether stakeholders ask — the BA\'s job is to identify and document them proactively.',
      C: 'QA writes test cases FOR the exceptions that the BA documents — if the BA does not document them, QA tests the happy path only.',
      D: 'Leaving exception handling to developer judgment creates inconsistent, untested error behavior.'
    },
    isScenario: false
  },
  {
    id: 'frd_6',
    topic: 'FRD / FSD',
    difficulty: 'Medium',
    question: 'What is a functional specification and how detailed should it be?',
    options: {
      A: 'A functional specification is a one-line description of what each button does.',
      B: 'A functional specification describes exact system behavior — field by field, validation by validation — detailed enough for developers to build without asking questions and for QA to write test cases directly.',
      C: 'A functional specification is the same as a user story.',
      D: 'A functional specification describes the server architecture and infrastructure requirements.'
    },
    answer: 'B',
    explanation: 'The functional specification detail test: "Can a developer build this feature without asking me a single clarifying question?" If no, it is not detailed enough. For every feature, the specification must cover: All input fields with data type, length, format, mandatory/optional status. Validation rules and error messages for each field. Business rules that drive system behavior. System responses to user actions (what happens when submit is clicked). Integration calls triggered. Success and failure state handling. If a developer builds the feature and the result looks different from what you envisioned, the specification was too vague.',
    interviewTip: 'Say: "I use the developer test — if a developer can read my FRD section and build it without sending me a single clarifying question, the specification is detailed enough."',
    memoryTrick: 'Functional spec detail = Developer can build it blind. QA can test it directly. If not — too vague, add more.',
    realExample: 'VPRM PR Form specification: Vendor Name — text, 100 chars max, mandatory, error if empty: "Vendor Name is required". Amount — numeric, 2 decimal places, mandatory, min Rs.1, max Rs.10,000,000, error if non-numeric: "Please enter a valid amount".',
    whyOthersWrong: {
      A: 'Button descriptions are UI labels — functional specifications describe behavior, logic, and data.',
      C: 'User stories are requirement summaries — functional specifications are the detailed implementation guide.',
      D: 'Server architecture and infrastructure are in the Technical Architecture Document — not the FRD.'
    },
    isScenario: false
  },

  // ===== SECTION 5: USER STORIES =====
  {
    id: 'us_1',
    topic: 'User Stories',
    difficulty: 'Easy',
    question: 'What is a User Story? Give the format.',
    options: {
      A: 'A user story is a detailed technical specification of how a feature will be coded.',
      B: 'A user story is a plain-language description of a feature from the user\'s perspective: "As a [user type], I want to [action], so that [benefit]." Each story has measurable acceptance criteria.',
      C: 'A user story is a test case written by the QA team.',
      D: 'A user story is a bug report describing what the system should not do.'
    },
    answer: 'B',
    explanation: 'User Story format: As a [user type] — who wants the feature? I want to [action] — what do they want to do? So that [benefit] — why? what value does it give them? Example: "As a procurement officer, I want to submit a purchase request with vendor details and amount, so that I can initiate the multi-level approval workflow for budget authorization." Every user story must have ACCEPTANCE CRITERIA — specific, measurable conditions that define Done. Written in Given-When-Then: Given [context], When [action], Then [expected outcome].',
    interviewTip: 'Never present a user story without acceptance criteria. Interviewers know that "a user story without acceptance criteria is just a wish." Always show you know both parts.',
    memoryTrick: 'User Story = AS A + I WANT + SO THAT. Acceptance Criteria = GIVEN + WHEN + THEN.',
    realExample: 'VPRM story: "As a finance manager, I want to receive an email notification when a purchase request above Rs.5 lakh is pending my approval, so that I can review and act within the SLA." AC: Given a PR >Rs.5L is approved at Level 1, When Level 2 approval is pending, Then finance manager receives email within 60 seconds.',
    whyOthersWrong: {
      A: 'User stories are business-language descriptions — technical coding specifications are separate developer work.',
      C: 'Test cases are written BY QA based on user story acceptance criteria — they are different documents.',
      D: 'User stories describe desired behavior — bug reports document actual failures.'
    },
    isScenario: false
  },
  {
    id: 'us_2',
    topic: 'User Stories',
    difficulty: 'Medium',
    question: 'What is the difference between a User Story and a Use Case?',
    options: {
      A: 'User stories are for technical features and use cases are for business features.',
      B: 'User stories are brief, conversational, Agile-friendly descriptions focused on user goals. Use Cases are formal, structured documents covering complete interactions including alternate flows and exception flows.',
      C: 'Use cases are older and user stories replaced them completely.',
      D: 'They are the same — just different terminology in different companies.'
    },
    answer: 'B',
    explanation: 'User Story vs Use Case: User Story — brief (3-5 lines), business-language, Agile-oriented, focuses on user goal and acceptance criteria. Best for: straightforward features, sprint planning, team discussion. Use Case — formal, structured (preconditions, main flow, alternate flows, exception flows, postconditions), covers complete interaction. Best for: complex workflows with multiple exception paths. In banking: Use Stories for "Add Beneficiary" (simple form). Use Case for "International Remittance" (multiple KYC checks, AML screening, SWIFT routing, correspondent bank, failure scenarios).',
    interviewTip: 'Show you know WHEN to use each. "I use user stories for Agile sprint planning on simpler features, and use cases for complex banking workflows where multiple exception paths must be explicitly documented for compliance."',
    memoryTrick: 'User Story = SHORT + AGILE + USER GOAL. Use Case = FORMAL + COMPLETE + ALL FLOWS.',
    realExample: 'VPRM: Used user stories for basic CRUD operations (create PR, view PR list). Used use case for multi-level approval workflow — too many exception paths (SLA breach, escalation, rejection, cancellation) for a simple user story.',
    whyOthersWrong: {
      A: 'Both user stories and use cases can describe business or technical features — the distinction is format and detail level.',
      C: 'Use cases are still widely used in banking and enterprise software for complex workflow documentation.',
      D: 'They are structurally and purposefully different — not interchangeable terminology.'
    },
    isScenario: false
  },
  {
    id: 'us_3',
    topic: 'User Stories',
    difficulty: 'Medium',
    question: 'What are acceptance criteria and how do you write them?',
    options: {
      A: 'Acceptance criteria are written by the QA team after testing is complete.',
      B: 'Acceptance criteria are specific, measurable conditions that define when a user story is complete. Written in Given-When-Then format: Given [context], When [action], Then [expected outcome].',
      C: 'Acceptance criteria are the same as test cases.',
      D: 'Acceptance criteria are only needed for UAT — not for sprint testing.'
    },
    answer: 'B',
    explanation: 'Acceptance Criteria: Written BY the BA (in collaboration with PO and team) BEFORE development starts. Format — Given-When-Then: Given = precondition/context. When = user action. Then = expected system behavior. Every user story needs 3-5 acceptance criteria covering: Main scenario (happy path). Key exception scenarios (invalid input, boundary values, error states). Acceptance criteria are directly convertible to UAT test cases. Example for Fund Transfer: Given user has sufficient balance and valid beneficiary, When user submits NEFT transfer of Rs.10,000, Then transfer is initiated, debit notification sent within 30 seconds, and transaction reference number displayed.',
    interviewTip: 'Emphasize that acceptance criteria are written BEFORE development — not discovered during testing. "Writing them early prevents misunderstandings during build and makes UAT efficient."',
    memoryTrick: 'Acceptance Criteria = Given (context) + When (action) + Then (outcome). Written BEFORE dev starts, directly usable as UAT test cases.',
    realExample: 'VPRM story AC: Given a PR is submitted with amount > Rs.50,000, When Level 1 approves, Then an email notification is sent to the Finance Manager within 60 seconds, containing PR ID, vendor name, amount, and an Approve/Reject action link.',
    whyOthersWrong: {
      A: 'Acceptance criteria are written by the BA BEFORE development — not by QA after testing.',
      C: 'Acceptance criteria define what "done" means — test cases describe HOW to verify it. Different purpose and format.',
      D: 'Acceptance criteria are used throughout the SDLC — in sprint review, SIT, and UAT.'
    },
    isScenario: false
  },
  {
    id: 'us_4',
    topic: 'User Stories',
    difficulty: 'Medium',
    question: 'What is the INVEST criteria for good user stories?',
    options: {
      A: 'INVEST stands for Integrated, Nested, Validated, Estimated, Structured, Tested.',
      B: 'INVEST stands for Independent, Negotiable, Valuable, Estimable, Small, Testable — a quality checklist to evaluate whether a user story is ready for sprint planning.',
      C: 'INVEST is a banking investment product classification framework.',
      D: 'INVEST is a Jira feature for automated story scoring.'
    },
    answer: 'B',
    explanation: 'INVEST criteria: I = Independent — story can be developed and delivered without depending on another story. N = Negotiable — the story is a starting point for discussion, not a rigid specification. V = Valuable — delivers clear value to a user or the business. E = Estimable — the team can reasonably estimate the effort (if not, the story needs more detail). S = Small — fits within one sprint (if not, split it into smaller stories). T = Testable — has specific acceptance criteria that can be tested. I apply INVEST during backlog grooming — any story that fails an INVEST criterion gets refined before going into sprint planning.',
    interviewTip: 'Say you apply INVEST during backlog grooming, not during sprint planning. "Stories should be INVEST-ready before they enter sprint planning — sprint planning is for commitment, not refinement."',
    memoryTrick: 'INVEST = I am Never Vague Enough Saying Things. Independent, Negotiable, Valuable, Estimable, Small, Testable.',
    realExample: 'VPRM story failed INVEST: "As a manager I want to see all reports" — not Small (too broad), not Estimable (what reports?), not Testable (no acceptance criteria). Split into 5 specific stories: PR status report, vendor spend report, etc.',
    whyOthersWrong: {
      A: 'Wrong acronym expansion — INVEST has a specific and well-established meaning in Agile.',
      C: 'INVEST has nothing to do with banking investment products.',
      D: 'INVEST is a quality framework, not a JIRA feature.'
    },
    isScenario: false
  },
  {
    id: 'us_5',
    topic: 'User Stories',
    difficulty: 'Medium',
    question: 'How do you handle a user story that is too large?',
    options: {
      A: 'Keep it large and allocate multiple sprints to complete it.',
      B: 'Split it into smaller independently deliverable user stories using story splitting techniques: by workflow step, by user type, by data type, or by happy path vs exception scenarios.',
      C: 'Convert it into a technical task and assign it to the developer.',
      D: 'Remove it from the backlog and ask stakeholders to simplify their requirement.'
    },
    answer: 'B',
    explanation: 'A story too large for one sprint is an Epic. Splitting techniques: (1) By Workflow Step — "Manage Fund Transfers" splits into: Add Beneficiary, Initiate NEFT Transfer, View Transfer History, Cancel Transfer. (2) By User Type — "Account Management" splits by: Retail Customer vs Business Customer. (3) By Data Type — "Generate Report" splits by report type. (4) Happy Path First — deliver the main scenario in Sprint 1, exception handling in Sprint 2. Rule: Each split story must be independently valuable — not just a technical subtask.',
    interviewTip: 'Emphasize that each split story must deliver VALUE independently. "I never split a story into tasks — each split must be a complete user-facing feature that the business can validate in a sprint review."',
    memoryTrick: 'Epic splitting = Workflow Steps + User Types + Data Types + Happy Path / Exceptions. Every split story = independently valuable.',
    realExample: 'VPRM epic "Manage Purchase Requests" was split into: Create PR (Sprint 1), Edit Draft PR (Sprint 1), Submit PR for Approval (Sprint 2), View PR Status (Sprint 2), Cancel PR (Sprint 3).',
    whyOthersWrong: {
      A: 'Multi-sprint stories create uncertainty, review problems, and incomplete increments — they should always be split.',
      C: 'Converting to a technical task removes the business context — stories should remain user-centric.',
      D: 'Removing stories without stakeholder agreement is not the BA\'s decision — the priority may justify the effort.'
    },
    isScenario: false
  },
  {
    id: 'us_6',
    topic: 'User Stories',
    difficulty: 'Medium',
    question: 'How do you prioritize user stories in a sprint?',
    options: {
      A: 'By alphabetical order of the feature name.',
      B: 'By business value, user impact, technical dependencies, and risk — using MoSCoW or WSJF (Weighted Shortest Job First), in collaboration with the Product Owner and business stakeholders.',
      C: 'The developer team decides priority based on technical complexity.',
      D: 'All stories in the backlog have equal priority — first in, first out.'
    },
    answer: 'B',
    explanation: 'Story prioritization factors: (1) Business Value — which stories deliver the most value to end users or business operations? (2) Dependencies — Story B cannot be built without Story A; A must be prioritized first. (3) Risk — high-uncertainty stories should be pulled early so risks surface before they become expensive. (4) MoSCoW — Must Haves go first. (5) WSJF (Weighted Shortest Job First) — value divided by effort. High value, low effort = highest priority. Prioritization happens in backlog grooming with the PO, BA, and key stakeholders — not unilaterally by the BA.',
    interviewTip: 'Mention WSJF — Weighted Shortest Job First. This shows Agile maturity beyond basic MoSCoW. "I use MoSCoW for broad prioritization and WSJF when comparing stories of similar business value but different effort."',
    memoryTrick: 'Priority factors = VALUE + DEPENDENCIES + RISK + MoSCoW + WSJF. Always collaborative with PO and stakeholders.',
    realExample: 'VPRM Sprint 1: Create PR (Must Have, no dependency), View PR Status (Must Have, depends on Create PR), Approval Notification Email (Should Have, low effort high value — pulled in).',
    whyOthersWrong: {
      A: 'Alphabetical order has no business logic — it would put low-value features ahead of critical ones.',
      C: 'Technical complexity is ONE factor, not the primary driver. Business value drives priority.',
      D: 'FIFO for requirements ignores business criticality — the most important requirement may have been raised last.'
    },
    isScenario: false
  },

  // ===== SECTION 6: USE CASES =====
  {
    id: 'uc_1',
    topic: 'Use Cases',
    difficulty: 'Medium',
    question: 'What is a Use Case? What are its components?',
    options: {
      A: 'A use case is a database record of all user login events.',
      B: 'A use case describes a complete interaction between an actor and the system to achieve a goal. Components: ID, Name, Actor, Preconditions, Trigger, Main Flow, Alternate Flows, Exception Flows, and Postconditions.',
      C: 'A use case is a test script written by the QA team.',
      D: 'A use case is a list of features requested by the client in an email.'
    },
    answer: 'B',
    explanation: 'Use Case components: (1) Use Case ID and Name — unique identifier and clear descriptive name. (2) Actor — who initiates the interaction (primary) and who supports it (secondary). (3) Preconditions — what must be true before the use case begins. (4) Trigger — what initiates the use case. (5) Main Flow — step-by-step happy path. (6) Alternate Flows — valid variations (different but successful paths). (7) Exception Flows — error or failure scenarios. (8) Postconditions — system state after successful completion. Use cases are especially valuable for complex banking workflows with many exception paths.',
    interviewTip: 'Distinguish between Alternate Flow (still a success path, just different) and Exception Flow (failure, error, or abnormal path). Many candidates confuse these.',
    memoryTrick: 'Use Case = ID + Actor + Pre + Trigger + Main Flow + Alt Flows + Exception Flows + Post. Pre comes before, Post comes after.',
    realExample: 'VPRM Use Case: UC-003 Approve Purchase Request. Actor: Finance Manager (primary), JIRA System (secondary). Precondition: PR is at Level 2 pending status. Main Flow: Finance Manager views PR details, clicks Approve, enters comment, system records approval. Exception Flow: Finance Manager clicks Reject — must enter mandatory rejection reason.',
    whyOthersWrong: {
      A: 'Login event records are system logs — not use cases.',
      C: 'QA writes test scripts FROM use cases — they do not create the use cases themselves.',
      D: 'Email feature lists are informal requirements — use cases are structured, formal behavioral specifications.'
    },
    isScenario: false
  },
  {
    id: 'uc_2',
    topic: 'Use Cases',
    difficulty: 'Medium',
    question: 'What is the difference between primary actor and secondary actor?',
    options: {
      A: 'Primary actor is the most important person in the company and secondary actor is a junior employee.',
      B: 'Primary actor initiates the use case and directly benefits from it. Secondary actor is a supporting system or person that the system interacts with to complete the use case but does not initiate it.',
      C: 'Primary actor is the developer and secondary actor is the business analyst.',
      D: 'There is no meaningful difference — both actors are treated the same way in use cases.'
    },
    answer: 'B',
    explanation: 'Primary Actor: Initiates the use case. Has a direct goal they want to achieve. Benefits from the successful completion. Example: Customer initiating a fund transfer — they start the process and receive the benefit (money sent). Secondary Actor: Does not initiate the use case. Is called upon by the system to help complete the primary actor\'s goal. Example: Payment gateway (processes the transaction), SWIFT network (routes international payment), SMS gateway (sends OTP). Understanding this distinction matters when documenting integration requirements — secondary actors are the external systems you need to specify integration requirements for.',
    interviewTip: 'Give a banking example: In a KYC use case — Primary Actor = Customer (submitting documents). Secondary Actors = UIDAI (Aadhaar verification), NSDL (PAN verification), Document Storage System.',
    memoryTrick: 'Primary = INITIATES + BENEFITS. Secondary = SUPPORTS + DOES NOT INITIATE.',
    realExample: 'VPRM approval use case: Primary Actor = Procurement Officer (submits PR, benefits from approval). Secondary Actors = Email System (sends notifications), JIRA (tracks approval status).',
    whyOthersWrong: {
      A: 'Primary/secondary in use cases refers to role in the interaction, not organizational seniority.',
      C: 'Developers and BAs are not actors in business use cases — actors are users and systems interacting with the application.',
      D: 'The distinction is important — it determines which requirements are user-facing (primary) vs integration requirements (secondary).'
    },
    isScenario: false
  },
  {
    id: 'uc_3',
    topic: 'Use Cases',
    difficulty: 'Medium',
    question: 'Explain what an alternate flow and exception flow is.',
    options: {
      A: 'Alternate flow is when the system crashes. Exception flow is when the test fails.',
      B: 'Alternate flow is a valid variation of the main path that still achieves the goal (different route, same success). Exception flow is when an error occurs and the main goal cannot be completed.',
      C: 'Both alternate and exception flows describe the same thing — errors in the system.',
      D: 'Alternate flow is for manual processes. Exception flow is for automated processes.'
    },
    answer: 'B',
    explanation: 'Main Flow = The expected happy path. Step-by-step ideal scenario. Alternate Flow = A valid alternative that still achieves the goal. Different path, but successful outcome. Example: Login use case — Main Flow: username + password. Alternate Flow: OTP login. Same goal (logged in), different path. Exception Flow = Something goes wrong. Goal cannot be completed in this attempt. Requires system to handle the error gracefully. Example: Login Exception Flow: invalid password 3 times → account locked → user shown lockout message → unlock email sent. In banking, exception flows require specific regulatory handling — especially for payment failures where reversal and notification processes must be documented.',
    interviewTip: 'In banking BA interviews, interviewers specifically test if you document payment failure exception flows — debit without credit, SWIFT timeout, reversal logic. Show you know this.',
    memoryTrick: 'Alternate = Different PATH, same GOAL (success). Exception = Something FAILED, goal NOT achieved (handle the error).',
    realExample: 'Fund Transfer use case: Main = NEFT transfer initiated and completed. Alternate = Beneficiary adds new account using IFSC lookup instead of manual entry. Exception = Debit successful but credit timeout — system initiates reversal, sends failure notification to user.',
    whyOthersWrong: {
      A: 'System crashes are infrastructure issues, not use case flows. Test failures are QA events.',
      C: 'Alternate flows are successful outcomes — exception flows are failures. Fundamentally different.',
      D: 'Both apply to both manual and automated processes — the distinction is success vs failure, not manual vs automated.'
    },
    isScenario: false
  },
  {
    id: 'uc_4',
    topic: 'Use Cases',
    difficulty: 'Medium',
    question: 'How do you create a Use Case diagram?',
    options: {
      A: 'A Use Case diagram is created by the developer in the coding IDE.',
      B: 'I use UML notation: actors as stick figures, use cases as ovals inside a system boundary rectangle, with lines connecting actors to their use cases. Include relationships show mandatory dependencies; extend relationships show optional behavior.',
      C: 'A use case diagram is a flowchart with decision diamonds and process boxes.',
      D: 'Use case diagrams are only created in expensive specialized software.'
    },
    answer: 'B',
    explanation: 'Use Case Diagram elements: (1) System Boundary — a rectangle showing the scope of the system. (2) Actors — stick figures outside the system boundary. Primary actors on the left, secondary on the right. (3) Use Cases — ovals inside the system boundary. Each represents a system function. (4) Associations — lines from actors to the use cases they participate in. (5) Include — dashed arrow with <<include>>: Use Case A always calls Use Case B (mandatory). Example: "Fund Transfer" always includes "Authenticate User." (6) Extend — dashed arrow with <<extend>>: Use Case B extends A optionally when a condition is met. Tools: draw.io, Lucidchart, Figma, or MS Visio.',
    interviewTip: 'Know the INCLUDE vs EXTEND distinction: Include = mandatory, always happens. Extend = optional, conditional. This is a frequent interview question.',
    memoryTrick: 'UC Diagram: Actors (stick figures) → System Boundary (rectangle) → Use Cases (ovals) → Include (mandatory) → Extend (optional).',
    realExample: 'VPRM use case diagram: Actors = Procurement Officer, Finance Manager, Admin. System boundary = VPRM System. Use Cases = Submit PR, Approve PR, Generate Report. "Submit PR" includes "Validate Vendor" (mandatory). "Generate Report" extends "Export to Excel" (optional condition: user selects export).',
    whyOthersWrong: {
      A: 'Use case diagrams are created by BAs as requirements artifacts — developers reference them, not create them.',
      C: 'Flowcharts show process steps and decisions — use case diagrams show system scope and actor interactions.',
      D: 'Free tools like draw.io and Lucidchart fully support UML use case diagrams.'
    },
    isScenario: false
  },
  {
    id: 'uc_5',
    topic: 'Use Cases',
    difficulty: 'Medium',
    question: 'In what situation do you prefer Use Cases over User Stories?',
    options: {
      A: 'Use cases are always better than user stories in every situation.',
      B: 'Use Cases are preferred for complex workflows with multiple exception paths, compliance-critical processes, and integration-heavy features where all flows must be explicitly documented.',
      C: 'Use cases are preferred only for legacy banking mainframe systems.',
      D: 'User stories are always better — use cases are outdated.'
    },
    answer: 'B',
    explanation: 'Use Cases when: (1) Complex exception paths — a workflow with many failure scenarios that each need specific system behavior. In banking: payment processing, remittance, KYC verification. (2) Compliance-critical — when regulators or auditors need to see that all scenarios (including failures) are documented and handled. (3) Multiple actor types — when multiple users and systems interact in a coordinated sequence. (4) Integration requirements — when secondary actors (external systems) must be specified precisely. User Stories when: Simple feature with 1-2 acceptance criteria. Agile sprint planning. Features where the team needs flexibility in implementation.',
    interviewTip: 'Show you know WHEN TO USE EACH — not a preference for one over the other. Interviewers respect context-appropriate tool selection.',
    memoryTrick: 'Use Case = COMPLEX + COMPLIANCE + MANY EXCEPTIONS. User Story = SIMPLE + AGILE + SPRINT PLANNING.',
    realExample: 'VPRM: User Story for "Add Vendor" (simple form, 3 ACs). Use Case for "Multi-Level Approval Workflow" (8 exception flows including SLA breach, rejection, cancellation, escalation, amount threshold routing).',
    whyOthersWrong: {
      A: 'Use cases have overhead — for simple features, user stories are faster and sufficient.',
      C: 'Use cases are relevant for any complex system — not limited to mainframes.',
      D: 'Use cases are still essential in banking, healthcare, and enterprise software where compliance documentation is mandatory.'
    },
    isScenario: false
  },

  // ===== SECTION 7: GAP ANALYSIS =====
  {
    id: 'gap_1',
    topic: 'Gap Analysis',
    difficulty: 'Medium',
    question: 'What is Gap Analysis? How have you performed it?',
    options: {
      A: 'Gap Analysis is identifying software bugs by comparing test results to expected results.',
      B: 'Gap Analysis compares the AS-IS (current state) with the TO-BE (desired future state) to identify gaps — what is missing, broken, or inefficient — that the solution must address.',
      C: 'Gap Analysis is comparing two vendors\' product offerings to choose the better one.',
      D: 'Gap Analysis is a risk register that lists project risks and their mitigation plans.'
    },
    answer: 'B',
    explanation: 'Gap Analysis process: (1) Document AS-IS — current process in detail: every step, every person involved, every tool used, time taken, pain points. (2) Define TO-BE — desired future state based on business objectives and stakeholder requirements. (3) Identify Gaps — compare AS-IS to TO-BE: what is missing in the current state, what is inefficient, what needs to change, what new capability is needed. (4) Map Gaps to Requirements — each gap becomes one or more BRD requirements. (5) Prioritize Gaps — by business impact using MoSCoW. In Vaishnavi\'s VPRM project: AS-IS = manual email-based approval. TO-BE = digital, automated, multi-level approval with tracking. Gaps = no automation, no audit trail, no SLA enforcement.',
    interviewTip: 'Use the VPRM example — it is a perfect gap analysis story. Manual process → multiple gaps identified → became requirements → automated system → 50% efficiency gain.',
    memoryTrick: 'Gap Analysis = AS-IS (current) vs TO-BE (future) = GAPS = REQUIREMENTS. Each gap becomes a requirement.',
    realExample: 'VPRM gap: AS-IS = Finance Manager receives PR via email, replies to approve. Gap = No audit trail, no SLA tracking, no escalation. TO-BE = System records every approval action with timestamp and escalates automatically at SLA breach.',
    whyOthersWrong: {
      A: 'Bug identification is a testing activity — gap analysis is a requirements planning activity.',
      C: 'Vendor comparison is a procurement evaluation activity — not gap analysis.',
      D: 'Risk registers track project risks — gap analysis identifies process and capability gaps that requirements must address.'
    },
    isScenario: false
  },
  {
    id: 'gap_2',
    topic: 'Gap Analysis',
    difficulty: 'Medium',
    question: 'What is the difference between AS-IS and TO-BE process?',
    options: {
      A: 'AS-IS is the developer\'s plan. TO-BE is the client\'s wish list.',
      B: 'AS-IS is the current state — how things work today, including manual steps and workarounds. TO-BE is the desired future state — how things will work after the solution is implemented.',
      C: 'AS-IS and TO-BE are the same if the project is an enhancement, not a new build.',
      D: 'AS-IS is documented by QA after testing. TO-BE is documented by the BA before testing.'
    },
    answer: 'B',
    explanation: 'AS-IS documentation includes: Every step in the current process (including manual, informal, workaround steps). All systems currently used (even Excel spreadsheets and email). People involved at each step. Time taken and pain points at each step. Existing data flows and handoffs. TO-BE documentation includes: Optimized process that addresses AS-IS pain points. New capabilities introduced by the solution. Eliminated manual steps replaced by automation. Improved handoffs between teams or systems. The delta between AS-IS and TO-BE = the GAPS that become project requirements.',
    interviewTip: 'Mention that documenting AS-IS is important for identifying EXISTING BUSINESS LOGIC that must be preserved in the new system — not all of the old process is bad.',
    memoryTrick: 'AS-IS = today = reality = includes workarounds. TO-BE = future = ideal = gaps become requirements. Delta = what we need to build.',
    realExample: 'VPRM AS-IS: Procurement officer emails Finance Manager with PR attachment. Finance Manager replies Approved or Rejected. No tracking, no SLA. TO-BE: System workflow with digital PR, automated routing, email notifications, audit trail, SLA tracking.',
    whyOthersWrong: {
      A: 'Developers do not document AS-IS. Wish lists are not TO-BE processes — TO-BE is a structured, realistic future state.',
      C: 'Even enhancement projects need AS-IS documentation to understand what exists and what must be preserved.',
      D: 'Both AS-IS and TO-BE are documented by the BA during the requirements phase — before development begins.'
    },
    isScenario: false
  },
  {
    id: 'gap_3',
    topic: 'Gap Analysis',
    difficulty: 'Medium',
    question: 'How do you document gaps and present them to stakeholders?',
    options: {
      A: 'I list all gaps in an email and send it to the project manager.',
      B: 'I document gaps in a structured table (Process Area, AS-IS, TO-BE, Gap, Business Impact, Proposed Solution) and present them prioritized by business impact — connecting each gap to a measurable business outcome.',
      C: 'Gaps are documented in JIRA tickets by the development team.',
      D: 'Gaps are presented verbally in a meeting without written documentation.'
    },
    answer: 'B',
    explanation: 'Gap Analysis documentation table structure: Column 1 — Process Area (what part of the workflow). Column 2 — AS-IS Description (how it works today). Column 3 — TO-BE Requirement (how it should work). Column 4 — Gap Identified (what is missing or broken). Column 5 — Business Impact (cost of the gap in business terms). Column 6 — Proposed Solution (high-level approach). Presentation approach: Present high-impact gaps first. Frame impact in business language: "This gap causes a 3-day delay in procurement decisions." Propose solutions — do not just describe problems. Use MoSCoW to align on which gaps to address in this release.',
    interviewTip: 'Say: "I always quantify the impact of gaps. A gap without a number (cost, time, risk) is hard to prioritize. If I can say this gap causes X days of delay or Y% of rework, the business decision is easier."',
    memoryTrick: 'Gap documentation table = Area + AS-IS + TO-BE + Gap + Impact + Solution. Prioritize by BUSINESS IMPACT, not technical complexity.',
    realExample: 'VPRM gap table: Process Area = Approval Tracking. AS-IS = Email chain, no record. TO-BE = System audit trail. Gap = No searchable approval history. Impact = 2 hours/week spent manually searching email chains for audit queries. Solution = System logs every approval action with timestamp and approver name.',
    whyOthersWrong: {
      A: 'Unstructured email with gap lists is hard to review, prioritize, and make decisions from.',
      C: 'JIRA tickets are for development tasks — gap analysis is a requirements artifact produced before development begins.',
      D: 'Verbal-only gap presentations have no record, create misunderstandings, and cannot be traced back during scope disputes.'
    },
    isScenario: false
  },
  {
    id: 'gap_4',
    topic: 'Gap Analysis',
    difficulty: 'Medium',
    question: 'How does gap analysis help in project planning?',
    options: {
      A: 'Gap analysis helps project managers assign developers to tasks.',
      B: 'Gap analysis directly feeds the BRD requirements, informs scope and timeline estimation, identifies risks early, and enables requirement prioritization for phased delivery.',
      C: 'Gap analysis is only useful after the project goes live to measure improvements.',
      D: 'Gap analysis helps the QA team decide which test cases to write first.'
    },
    answer: 'B',
    explanation: 'Gap analysis contributions to project planning: (1) Feeds BRD requirements — each identified gap becomes one or more business requirements. (2) Scope definition — gaps help the team agree on what is IN scope (gaps to be addressed) and OUT of scope (gaps deferred). (3) Timeline estimation — number and complexity of gaps informs development effort estimation. (4) Risk identification — large architectural gaps or integration-heavy gaps are early risk signals for the PM. (5) Phased delivery planning — use MoSCoW to decide which gaps are addressed in Phase 1 vs Phase 2. (6) Success metrics — gaps quantified in business terms become the success KPIs for the project.',
    interviewTip: 'Connect gap analysis to PROJECT SUCCESS METRICS — if the gap is "3-day approval delay," the project KPI is "reduce approval time to same day." Gap analysis creates the baseline for measuring project success.',
    memoryTrick: 'Gap analysis → BRD requirements → Scope → Timeline → Risk → Phased delivery → Success KPIs. It is the foundation of everything.',
    realExample: 'VPRM gap analysis identified 14 process gaps. 8 were Must Have (Phase 1), 4 were Should Have (Phase 1 if capacity allows), 2 were deferred to Phase 2. This directly shaped the project scope and 6-month delivery plan.',
    whyOthersWrong: {
      A: 'Assigning developers is project management — gap analysis is a requirements planning tool.',
      C: 'Gap analysis is performed at the START of a project, not after go-live.',
      D: 'QA test cases are written from FRD and user stories — not from gap analysis.'
    },
    isScenario: false
  },

  // ===== SECTION 8: WIREFRAMES =====
  {
    id: 'wire_1',
    topic: 'Wireframes & Prototypes',
    difficulty: 'Easy',
    question: 'What is a wireframe? When do you create one?',
    options: {
      A: 'A wireframe is a fully designed UI with colors, fonts, and images.',
      B: 'A wireframe is a low-fidelity visual representation of a screen showing layout and key elements without visual design. Created after BRD baseline, before FRD finalization — to validate screen requirements with stakeholders.',
      C: 'A wireframe is a network diagram showing system architecture connections.',
      D: 'A wireframe is a database schema showing table relationships.'
    },
    answer: 'B',
    explanation: 'Wireframes: Low-fidelity (no colors, fonts, or images) visual showing: Screen layout. Key UI elements and their placement. Navigation flow between screens. Content areas and data fields. When to create: After BRD is baselined (scope is agreed). Before FRD is finalized (to incorporate stakeholder feedback). Before development starts (so developers see what they are building). Why valuable: Stakeholders respond to visuals better than written text. Surfaces hidden requirements (stakeholder sees layout and says "where is the vendor category?"). Cheaper to change a wireframe than a built screen. Creates a shared understanding between BA, developers, and stakeholders.',
    interviewTip: 'Say: "Wireframe review sessions typically surface 20-30% of requirements that were not verbalized in earlier meetings. Stakeholders need to SEE the screen to remember what they need."',
    memoryTrick: 'Wireframe = Layout + Elements + Navigation. No design. Created BEFORE FRD and BEFORE development. Shows structure, not style.',
    realExample: 'VPRM Figma wireframe for Purchase Request form showed 12 fields. During the walkthrough, the finance manager said "where is the cost center field?" — a requirement completely missed in verbal elicitation. Added to FRD before development.',
    whyOthersWrong: {
      A: 'Fully designed UIs with colors are high-fidelity mockups or UI designs — not wireframes.',
      C: 'Network diagrams show infrastructure — wireframes show user interface layout.',
      D: 'Database schemas show data structure — wireframes show screen layout.'
    },
    isScenario: false
  },
  {
    id: 'wire_2',
    topic: 'Wireframes & Prototypes',
    difficulty: 'Easy',
    question: 'What tools have you used for wireframing?',
    options: {
      A: 'I use Microsoft Excel for wireframing by merging cells.',
      B: 'I primarily use Figma for interactive wireframes and clickable prototypes. I also use Google Stitch for quick conceptual mockups and draw.io for simple screen sketches.',
      C: 'I use JIRA for wireframing because it is integrated with our development workflow.',
      D: 'I do not use wireframing tools — I describe screens in text in the FRD.'
    },
    answer: 'B',
    explanation: 'Wireframing tools used by BAs: (1) Figma — industry-standard for wireframes and interactive prototypes. Allows clickable flows, multiple pages, team collaboration. Used by Vaishnavi for VPRM screens. (2) Google Stitch — quick concept mockups using AI-assisted design. (3) draw.io / Lucidchart — free, good for simple wireframes and process flows. (4) Balsamiq — specialized low-fidelity wireframing. (5) Miro — collaborative whiteboarding including wireframe sketches. Figma is the most valued tool to mention in 2025 interviews — it is the industry standard and shows modern BA skills.',
    interviewTip: 'Mention Figma specifically and say you create CLICKABLE PROTOTYPES — not just static images. "I link screens in Figma so stakeholders can click through the workflow and experience the user journey before development starts."',
    memoryTrick: 'Wireframing tools = Figma (primary, clickable) + Google Stitch (quick) + draw.io (simple). Figma = most important to mention.',
    realExample: 'Vaishnavi created a 7-screen Figma wireframe for VPRM: PR creation form → submission confirmation → approval dashboard → approve/reject screens → escalation alert → vendor selection → report view. All linked as a clickable prototype.',
    whyOthersWrong: {
      A: 'Excel cell merging produces static grids — it is not a wireframing tool and creates visually poor outputs.',
      C: 'JIRA is for user story and task tracking — not for wireframing or visual design.',
      D: 'Text-only screen descriptions create huge interpretation differences between BA, developer, and stakeholder. Wireframes eliminate that ambiguity.'
    },
    isScenario: false
  },
  {
    id: 'wire_3',
    topic: 'Wireframes & Prototypes',
    difficulty: 'Medium',
    question: 'What is the difference between a wireframe and a prototype?',
    options: {
      A: 'A wireframe is digital and a prototype is a physical model of the product.',
      B: 'A wireframe is a static visual representation of a single screen. A prototype is interactive — multiple wireframes linked so users can click through and experience the workflow.',
      C: 'A prototype is a final product and a wireframe is a draft of the prototype.',
      D: 'Wireframes are made by designers. Prototypes are made by developers.'
    },
    answer: 'B',
    explanation: 'Wireframe vs Prototype: Wireframe — static image showing layout of one screen. No interactions. Low fidelity. Purpose: validate layout and elements. Prototype — multiple wireframes linked with click interactions. Can be low or high fidelity. Purpose: simulate the user journey so stakeholders experience the workflow before development. When to use wireframes: early in requirements to validate screen structure. When to use prototypes: for complex workflows where the sequence of screens and transitions need to be validated. Both are created in Figma. A prototype is more powerful for UAT preparation — users can practice the workflow before the system is built.',
    interviewTip: 'Say you use prototypes specifically for COMPLEX MULTI-STEP WORKFLOWS. "For a multi-step approval workflow, I build a clickable prototype so stakeholders can follow the journey end-to-end — this catches missing screens and incorrect navigation flows before development."',
    memoryTrick: 'Wireframe = STATIC single screen. Prototype = INTERACTIVE multiple screens linked. Prototype = Wireframe + Clicks + Navigation.',
    realExample: 'VPRM: Vaishnavi created static wireframes for individual screens, then built a Figma prototype linking them: Procurement Officer flow (create → submit → confirmation) and Finance Manager flow (login → dashboard → PR detail → approve/reject). Stakeholders clicked through both flows.',
    whyOthersWrong: {
      A: 'Both wireframes and prototypes are digital — physical product models are a different concept entirely.',
      C: 'A prototype is not a final product — it is a simulation for validation purposes.',
      D: 'BAs create both wireframes and prototypes for requirements validation — not just designers or developers.'
    },
    isScenario: false
  },
  {
    id: 'wire_4',
    topic: 'Wireframes & Prototypes',
    difficulty: 'Medium',
    question: 'How do wireframes help in requirement validation?',
    options: {
      A: 'Wireframes allow developers to write code faster because the UI is already designed.',
      B: 'Wireframes make abstract requirements concrete — stakeholders identify missing fields, incorrect layouts, and unstated requirements when they see a visual, which they could not verbalize from written text alone.',
      C: 'Wireframes replace the need for a BRD by providing a visual specification.',
      D: 'Wireframes help QA engineers write test cases without reading the FRD.'
    },
    answer: 'B',
    explanation: 'Why wireframes improve requirement validation: (1) Visual thinking — humans process images 60,000x faster than text. Stakeholders identify issues in wireframes they would never catch in written requirements. (2) Missing requirements surface — a stakeholder sees the screen and says "where is the cost center field?" — a requirement missed in verbal sessions. (3) Layout preferences — stakeholder feedback on arrangement reduces rework. (4) Shared understanding — developer, BA, and stakeholder all look at the same visual — no interpretation differences. (5) Early feedback — cheaper to change a wireframe element than a built screen. Typically 20-30% of requirements are discovered during wireframe review.',
    interviewTip: 'Give the specific statistic: "In my experience, wireframe review sessions surface 20-30% of requirements that were not verbalized earlier. Stakeholders need to see something concrete to remember what they need."',
    memoryTrick: 'Wireframe validation value = Missing requirements surface + Shared understanding + Cheaper to change than code + Faster stakeholder review.',
    realExample: 'VPRM: Written FRD said "purchase request form with vendor and amount fields." Figma wireframe showed the actual layout — stakeholders identified 3 missing fields (cost center, urgency flag, supporting document upload) that were not mentioned in any elicitation session.',
    whyOthersWrong: {
      A: 'Wireframes are not for developer speed — they are for stakeholder validation and requirement discovery.',
      C: 'Wireframes complement the BRD and FRD — they do not replace written requirements.',
      D: 'QA test cases are written from FRD acceptance criteria — wireframes are for stakeholder validation.'
    },
    isScenario: false
  },
  {
    id: 'wire_5',
    topic: 'Wireframes & Prototypes',
    difficulty: 'Medium',
    question: 'Have you used Figma? Walk me through what you created.',
    options: {
      A: 'No, I have not used Figma — I use MS Paint for diagrams.',
      B: 'Yes — I use Figma for wireframing and clickable prototypes. For VPRM I created screen layouts for the PR creation form, approval dashboard, approve/reject screens, and admin configuration — linked as a clickable prototype for stakeholder validation.',
      C: 'I have heard of Figma but prefer to describe screens in text.',
      D: 'Figma is a designer\'s tool — BAs should not use it.'
    },
    answer: 'B',
    explanation: 'Figma proficiency for BA: Figma is an industry-standard collaborative design tool widely adopted by BAs for wireframing because: (1) Free tier is sufficient for BA wireframes. (2) Easy to create clickable prototypes by linking frames. (3) Stakeholders can view and comment directly in Figma — no export needed. (4) Supports multiple pages for different user journey flows. VPRM screens created: PR Creation Form (12 fields, vendor lookup dropdown, document upload). Approval Dashboard (list view, filter by status, SR number column). Approve/Reject Detail screen (PR details, comment box, action buttons). Admin Configuration (approval threshold settings, user role management). Finance Manager notification email template layout.',
    interviewTip: 'Be specific about WHICH SCREENS you created — not just that you used Figma. Specificity shows real experience. "I created 7 screens for the procurement officer journey and 4 screens for the finance manager approval journey."',
    memoryTrick: 'Figma answer = YES + SPECIFIC SCREENS + CLICKABLE PROTOTYPE + STAKEHOLDER VALIDATION USE.',
    realExample: 'VPRM Figma prototype: 11 screens total. 7 for Procurement Officer journey (create PR to submission confirmation). 4 for Finance Manager journey (dashboard to approve/reject). All screens linked as clickable prototype reviewed by both stakeholder groups.',
    whyOthersWrong: {
      A: 'MS Paint is not a wireframing tool — this answer signals very low BA proficiency.',
      C: 'Text-only screen descriptions create interpretation gaps — visual wireframes are the professional standard.',
      D: 'Figma is increasingly used by BAs, product managers, and UX designers — it is not limited to designers.'
    },
    isScenario: false
  },

  // ===== SECTION 9: PROCESS FLOW =====
  {
    id: 'pf_1',
    topic: 'Process Flow Diagrams',
    difficulty: 'Easy',
    question: 'What is a process flow diagram? What symbols do you use?',
    options: {
      A: 'A process flow diagram is a bar chart showing project timeline milestones.',
      B: 'A process flow diagram visually maps the sequence of steps in a business process. Symbols: rounded rectangle (start/end), rectangle (process step), diamond (decision), parallelogram (input/output), arrows (flow direction).',
      C: 'A process flow diagram is a database entity relationship diagram.',
      D: 'A process flow diagram is a Gantt chart used in project scheduling.'
    },
    answer: 'B',
    explanation: 'Process Flow Diagram standard symbols: Rounded Rectangle (oval/terminal) = Start or End event. Rectangle = Process step / Activity. Diamond = Decision point (Yes/No branch). Parallelogram = Input or Output (data going in or coming out). Arrow = Direction of flow. For cross-department workflows: Swim Lane Diagram — each horizontal or vertical lane represents a different role or department. Flow shows handoffs between lanes. Additional for BPMN (advanced): Circle = Events. Rounded rectangle = Tasks. Gateway = Decision logic. Process flows are used for: AS-IS documentation, TO-BE design, and FRD workflow specifications.',
    interviewTip: 'Mention swim lane diagrams specifically — they are the most useful type for banking BA work because banking processes always involve multiple departments (operations, compliance, finance).',
    memoryTrick: 'Process flow symbols: Oval = Start/End. Rectangle = Do something. Diamond = Decide yes/no. Parallelogram = Data in/out. Arrow = Direction.',
    realExample: 'VPRM swim lane process flow: 4 lanes (Procurement Officer, Dept Head, Finance Manager, System). Shows handoffs at each approval level — visually clear who does what at each step.',
    whyOthersWrong: {
      A: 'Bar charts showing milestones are Gantt charts — used in project planning, not process documentation.',
      C: 'Entity relationship diagrams show database table relationships — not business process flows.',
      D: 'Gantt charts are project scheduling tools — process flows document operational workflows.'
    },
    isScenario: false
  },
  {
    id: 'pf_2',
    topic: 'Process Flow Diagrams',
    difficulty: 'Medium',
    question: 'How do process flows help in requirement gathering?',
    options: {
      A: 'Process flows replace the need for stakeholder meetings.',
      B: 'Process flows surface implicit steps, workarounds, and decision points that stakeholders do habitually and would never mention in conversation — making requirements more complete.',
      C: 'Process flows are only used after requirements are complete — not during gathering.',
      D: 'Process flows help developers write code by showing the algorithm.'
    },
    answer: 'B',
    explanation: 'Why process flows are a powerful elicitation tool: (1) Makes implicit explicit — stakeholders walk through their process step by step, surfacing habitual steps they do without thinking. (2) Identifies workarounds — "we email the CFO manually when the system is down" is a hidden requirement. (3) Decision points surface — at what threshold does the approval route change? Who decides? These become business rules in the FRD. (4) Validates completeness — map every FRD requirement to a process step; uncovered steps = missing requirements. (5) Aligns teams — when multiple departments review the same swim lane diagram, misalignments in understanding become visible.',
    interviewTip: 'Say: "I create the AS-IS process flow during elicitation and then share it back to stakeholders to validate. Every time I do this, stakeholders add 3-5 steps they forgot to mention in our conversation."',
    memoryTrick: 'Process flow elicitation value = Surfaces implicit steps + Identifies workarounds + Reveals decision points + Validates requirement completeness.',
    realExample: 'VPRM AS-IS flow discovery: while mapping the approval process, Vaishnavi discovered that Finance Manager approval was actually split into two sub-steps (pre-approval check + final sign-off) — something not mentioned in any interview. Both became requirements in the FRD.',
    whyOthersWrong: {
      A: 'Process flows complement stakeholder meetings — they do not replace them.',
      C: 'Process flows are MOST valuable during elicitation — created early and used to validate requirements throughout.',
      D: 'Algorithm design is a developer activity. Process flows document BUSINESS workflows, not coding logic.'
    },
    isScenario: false
  },
  {
    id: 'pf_3',
    topic: 'Process Flow Diagrams',
    difficulty: 'Medium',
    question: 'Have you created swim lane diagrams? Explain when you used one.',
    options: {
      A: 'No — swim lane diagrams are too complex for BA work.',
      B: 'Yes — I use swim lane diagrams for cross-department workflows where it is critical to show who is responsible for each step and where handoffs occur between departments.',
      C: 'Swim lane diagrams are only used by project managers, not BAs.',
      D: 'I have created swim lane diagrams but only for customer-facing processes.'
    },
    answer: 'B',
    explanation: 'Swim Lane diagrams are process flow diagrams with horizontal or vertical lanes — each lane representing a different role, department, or system. Why they are valuable: (1) Responsibility clarity — each step is visually assigned to a lane (and therefore a role). (2) Handoff visibility — arrows crossing lanes show exactly where work transfers from one team to another. (3) Gap identification — a lane with many steps shows overloaded roles. Missing lanes = missing stakeholders. (4) Compliance documentation — in banking, regulators want to see clear documentation of who performs each compliance step. Used by Vaishnavi: VPRM multi-level approval workflow — 4 lanes (Procurement Officer, Dept Head, Finance Manager, System).',
    interviewTip: 'Say specifically that you use swim lanes when a process involves multiple departments and handoffs. "Any time I see a process involving more than 2 roles, I default to a swim lane diagram — it makes accountability immediately visible."',
    memoryTrick: 'Swim lane = Multiple departments = Clear responsibility per step = Handoffs visible = Compliance traceable.',
    realExample: 'VPRM swim lane: Lane 1 = Procurement Officer (creates PR, edits, submits). Lane 2 = Dept Head (reviews, approves/rejects Level 1). Lane 3 = Finance Manager (reviews, approves/rejects Level 2 for amounts >Rs.50k). Lane 4 = System (routes, notifies, tracks SLA, escalates).',
    whyOthersWrong: {
      A: 'Swim lane diagrams are a BA staple for cross-functional workflows — not too complex.',
      C: 'Swim lane diagrams are one of the most commonly used BA tools for workflow documentation.',
      D: 'Swim lanes are equally valuable for internal processes — especially banking operational workflows that involve compliance and operations teams.'
    },
    isScenario: false
  },
  {
    id: 'pf_4',
    topic: 'Process Flow Diagrams',
    difficulty: 'Medium',
    question: 'What is the difference between a process flow and a data flow diagram?',
    options: {
      A: 'Process flows are for business users and data flow diagrams are for technical users — they show the same information.',
      B: 'A process flow shows the sequence of ACTIVITIES and decisions in a workflow (who does what and when). A Data Flow Diagram (DFD) shows how DATA moves through a system — sources, processes, stores, and destinations.',
      C: 'Data flow diagrams are used in testing. Process flow diagrams are used in development.',
      D: 'They are the same — just different names used in different industries.'
    },
    answer: 'B',
    explanation: 'Process Flow Diagram: Focus = Activities and decisions in a workflow. Shows = Steps, decision points, actors, handoffs, timing. Answers = Who does what, in what order, when does it branch. Used by = BAs for requirement documentation. Data Flow Diagram (DFD): Focus = Data movement through a system. Shows = Data sources (external entities), processes that transform data, data stores (databases), data flows (labeled arrows showing what data moves where). Answers = What data enters the system, how it is processed, where it is stored, what exits. Used by = Systems analysts, architects for system design. BAs use process flows most frequently. DFDs are more common in system architecture work.',
    interviewTip: 'Say: "I primarily use process flows for requirement documentation. DFDs come up when I need to specify data integration requirements — what data enters from external systems, what is processed, and what is stored."',
    memoryTrick: 'Process Flow = ACTIVITY sequence. DFD = DATA movement. Process = Who does what. DFD = What data goes where.',
    realExample: 'VPRM: Process Flow shows the PR approval workflow step by step. DFD context: if asked, would show PR data flowing from VPRM system → Email Server → JIRA → ERP for payment processing.',
    whyOthersWrong: {
      A: 'They show fundamentally different things — activities vs data — not the same information for different audiences.',
      C: 'Both are requirements and design documentation tools — they are not testing or development artifacts.',
      D: 'They have distinct structures, purposes, and notations — not interchangeable terminology.'
    },
    isScenario: false
  },

  // ===== SECTION 10: UAT =====
  {
    id: 'uat_1',
    topic: 'UAT',
    difficulty: 'Medium',
    question: 'What is UAT? What is your role in UAT?',
    options: {
      A: 'UAT is Unit Acceptance Testing done by developers before release.',
      B: 'UAT is User Acceptance Testing — the final testing phase where business users validate that the system meets agreed requirements. My role: prepare test plan and test cases, coordinate business users, support execution, log and track defects, manage sign-off.',
      C: 'UAT is done by the QA team — the BA has no role in UAT.',
      D: 'UAT is optional if SIT passes successfully.'
    },
    answer: 'B',
    explanation: 'UAT = User Acceptance Testing. Last testing gate before go-live. Done by BUSINESS USERS (not QA, not developers). BA\'s role in UAT: (1) Prepare UAT Test Plan — scope, schedule, entry/exit criteria, roles, defect management process. (2) Write UAT Test Cases — based on BRD requirements and FRD acceptance criteria. Cover happy path + exception scenarios. (3) Coordinate Business Users — schedule, prepare test data, handle environment issues. (4) Support Execution — be available to clarify requirements during testing. (5) Log and Track Defects — in JIRA with severity and priority. (6) Defect Review Meetings — daily triage with development lead. (7) Manage Sign-off — circulate sign-off document once exit criteria are met.',
    interviewTip: 'Emphasize: "UAT is done by BUSINESS USERS — not QA. My role is to ENABLE the business users to test effectively — prepare test cases, set up test data, and be available to answer questions during execution."',
    memoryTrick: 'UAT = Business Users test. BA role = Plan + Write Test Cases + Coordinate Users + Log Defects + Sign-off.',
    realExample: 'VPRM UAT: Vaishnavi prepared 67 test cases, coordinated 8 business users (procurement, finance, operations), conducted 3-day UAT session, logged 12 defects in JIRA, facilitated daily defect review, obtained UAT sign-off with zero critical open defects.',
    whyOthersWrong: {
      A: 'Unit testing is done by developers. Acceptance testing is done by business users — two completely different activities.',
      C: 'The BA is the primary coordinator of UAT — the most active role in the process.',
      D: 'UAT is never optional in banking — business users must validate the system against their requirements before go-live.'
    },
    isScenario: false
  },
  {
    id: 'uat_2',
    topic: 'UAT',
    difficulty: 'Medium',
    question: 'How do you prepare UAT test cases?',
    options: {
      A: 'I copy the developer\'s unit test cases and reformat them for business users.',
      B: 'I derive UAT test cases from BRD requirements and FRD acceptance criteria. Each test case covers a specific scenario with preconditions, test steps, expected result, and a happy path + exception scenario pair.',
      C: 'Business users write their own test cases during UAT.',
      D: 'UAT test cases are auto-generated from JIRA user stories.'
    },
    answer: 'B',
    explanation: 'UAT test case structure: (1) Test Case ID — unique ID traceable to requirement ID in RTM. (2) Description — what is being tested. (3) Preconditions — setup required before execution (test data, user role). (4) Test Steps — numbered, clear instructions for the business user. (5) Expected Result — exactly what should happen. (6) Actual Result — filled in during execution. (7) Pass/Fail/Blocked status. Coverage: Every BRD requirement → at least 1 test case. Every acceptance criteria from user story → directly maps to a test case. Happy path scenario. Key exception scenarios (mandatory field validation, boundary values, error messages). Integration scenarios crossing multiple modules.',
    interviewTip: 'Say: "I write acceptance criteria in Given-When-Then format DURING requirement writing — so converting them to UAT test cases is very fast. The acceptance criteria IS the test case structure."',
    memoryTrick: 'UAT test case = TC-ID + Description + Preconditions + Test Steps + Expected Result. Every requirement = at least 1 test case in RTM.',
    realExample: 'VPRM UAT TC-023: Test high-value PR approval routing. Precondition: PR with amount Rs.75,000 created. Steps: Procurement Officer submits PR. Expected: Level 1 (Dept Head) notification received AND Level 2 (Finance Manager) notification queued. System routes to Finance Manager after Level 1 approval.',
    whyOthersWrong: {
      A: 'Developer unit tests check code logic — UAT test cases check business scenarios from a user perspective.',
      C: 'Business users execute test cases — the BA prepares them. Asking users to write test cases creates unstructured, incomplete coverage.',
      D: 'JIRA does not auto-generate test cases — they require human analysis to translate requirements into testable scenarios.'
    },
    isScenario: false
  },
  {
    id: 'uat_3',
    topic: 'UAT',
    difficulty: 'Medium',
    question: 'What is the difference between UAT and SIT?',
    options: {
      A: 'SIT is done by business users and UAT is done by QA engineers.',
      B: 'SIT (System Integration Testing) is done by QA to verify technical integration between modules. UAT is done by business users to verify the system meets business requirements. SIT happens before UAT.',
      C: 'UAT and SIT are the same — just different names used by different companies.',
      D: 'SIT happens after UAT — SIT is the final gate before go-live.'
    },
    answer: 'B',
    explanation: 'SIT vs UAT: SIT (System Integration Testing): Done by QA team. Focus: do all the system components work together correctly from a technical perspective? Tests: API integrations, database connections, cross-module data flows, end-to-end technical flows. Happens: Before UAT. UAT (User Acceptance Testing): Done by Business Users (coordinated by BA). Focus: does the system meet the agreed business requirements from a user perspective? Tests: Business scenarios, user workflows, business rules, compliance requirements. Happens: After SIT. Sequence: Unit Testing → Integration Testing → SIT → UAT → Go-Live.',
    interviewTip: 'Be clear about the SEQUENCE: SIT must PASS before UAT begins. "I use SIT completion as an entry criterion for UAT — if SIT is not complete and signed off, UAT should not start."',
    memoryTrick: 'SIT = QA = Technical integration. UAT = Business Users = Business requirements. SIT first, UAT second, then Go-Live.',
    realExample: 'VPRM: QA team completed SIT confirming PR API, email integration, and JIRA sync worked correctly. Then Vaishnavi started UAT with business users to confirm the business workflows met requirements.',
    whyOthersWrong: {
      A: 'This is reversed — SIT is done by QA and UAT is done by business users.',
      C: 'They test fundamentally different things — technical integration vs business requirement acceptance.',
      D: 'SIT happens BEFORE UAT — not after. UAT is the final gate before go-live.'
    },
    isScenario: false
  },
  {
    id: 'uat_4',
    topic: 'UAT',
    difficulty: 'Hard',
    question: 'What do you do if a user rejects the system during UAT?',
    options: {
      A: 'Tell the user the system was built as per requirements and they must accept it.',
      B: 'Understand exactly why they rejected it. If the system deviates from approved BRD/FRD → it is a defect. If the user wants something new → it is a change request. If it is a misunderstanding → document the gap and decide with PM.',
      C: 'Delay go-live indefinitely until the user is satisfied.',
      D: 'Override the user\'s rejection and proceed to go-live with project manager approval.'
    },
    answer: 'B',
    explanation: 'UAT rejection handling: Step 1 — Understand EXACTLY why they rejected it. Ask them to show you expected vs actual. Step 2 — Classify: Defect (system does not match approved BRD/FRD) → Log in JIRA, get fixed, retest. Change Request (user wants something not in the BRD) → Raise CR, impact analysis, CCB approval before any work begins. Misunderstanding (expectation never captured in requirements) → Acknowledge the gap, document it, agree with PM and stakeholder whether to include in this release or defer. Step 3 — Never override a user rejection without resolution — it creates post-go-live escalations and credibility damage.',
    interviewTip: 'The key is the DEFECT vs CHANGE REQUEST distinction. If the system does what the BRD says, it is not a defect — it is a change request. This protects scope and prevents unmanaged rework.',
    memoryTrick: 'UAT rejection = Understand WHY → Classify (Defect / CR / Misunderstanding) → Handle accordingly. Never dismiss or override.',
    realExample: 'VPRM UAT: Operations head rejected approval notification because it did not show the vendor bank details. Review: BRD had "send approval notification with PR details" — vendor bank details were not specified. Classified as scope gap, raised CR, stakeholder agreed to defer to Phase 2.',
    whyOthersWrong: {
      A: 'Telling users to accept a system they are not satisfied with creates post-go-live resistance and fails the purpose of UAT.',
      C: 'Indefinite delays without a structured resolution plan are equally damaging — classification and resolution is the answer.',
      D: 'Overriding business user rejection creates post-go-live escalations — users will blame the system for every subsequent issue.'
    },
    isScenario: true
  },
  {
    id: 'uat_5',
    topic: 'UAT',
    difficulty: 'Medium',
    question: 'How do you track defects found during UAT?',
    options: {
      A: 'I keep a mental note of defects and verbally inform developers.',
      B: 'Every defect is logged in JIRA with: title, actual vs expected behavior, steps to reproduce, severity, priority, and screenshots. Tracked via daily defect triage meetings and an Excel summary dashboard for management.',
      C: 'Business users log their own defects in a shared Excel sheet.',
      D: 'Defects are tracked by the QA team — not the BA.'
    },
    answer: 'B',
    explanation: 'Defect tracking during UAT: (1) JIRA logging: Defect title (clear, action-oriented). Description: Actual Behavior vs Expected Behavior. Steps to Reproduce (numbered). Severity: Critical (system unusable), High (major feature broken), Medium (workaround exists), Low (cosmetic). Priority: (aligned with business impact). Attachments: screenshots, test data used. Link to test case ID and requirement ID. (2) Daily defect triage: Review new defects, confirm severity, assign to developers, track resolution progress. (3) Executive summary: Excel dashboard showing Total / Open / Resolved / Deferred by severity — for stakeholder status updates. (4) Retest: After developer fixes, BA retests and updates JIRA status.',
    interviewTip: 'Mention the SEVERITY vs PRIORITY distinction: Severity = how bad is the technical bug. Priority = how urgent is the fix from a business perspective. A cosmetic bug on the login screen may be high priority even if low severity.',
    memoryTrick: 'Defect tracking = JIRA (log everything) + Daily Triage (review + assign) + Excel Dashboard (management view) + Retest (after fix).',
    realExample: 'VPRM UAT: 12 defects logged. 1 Critical (duplicate PR submission allowed — fixed day 1). 4 High (routing issues — fixed by day 2). 7 Medium (UI display issues — fixed by day 3). Zero critical defects open at sign-off.',
    whyOthersWrong: {
      A: 'Mental tracking and verbal communication create untraceable, forgotten defects — unacceptable in a banking environment.',
      C: 'Users executing tests should not be burdened with defect logging — they focus on testing, the BA logs defects.',
      D: 'The BA is the primary defect manager during UAT — QA manages defects during SIT.'
    },
    isScenario: false
  },
  {
    id: 'uat_6',
    topic: 'UAT',
    difficulty: 'Medium',
    question: 'What is entry criteria and exit criteria for UAT?',
    options: {
      A: 'Entry criteria means the BA is ready. Exit criteria means go-live is approved.',
      B: 'Entry criteria: SIT complete, stable environment, test data ready, test cases approved, business users confirmed. Exit criteria: all test cases executed, zero critical defects open, high defects resolved or deferred with approval, UAT sign-off document signed.',
      C: 'There is no formal entry or exit criteria for UAT — it ends when stakeholders feel satisfied.',
      D: 'Exit criteria means 100% of test cases pass — any failure extends UAT indefinitely.'
    },
    answer: 'B',
    explanation: 'UAT Entry Criteria (must be met BEFORE UAT begins): SIT completed and signed off by QA lead. UAT environment stable and accessible to business users. Test data set up and verified. UAT test cases reviewed and approved. Business users confirmed and scheduled. Application build deployed to UAT environment. UAT Test Plan approved. UAT Exit Criteria (must be met BEFORE go-live): All planned test cases executed (100% execution). Zero Critical defects open. Zero High defects open (or documented deferral with business sign-off). Medium/Low defects: resolved or accepted with stakeholder sign-off. UAT Sign-off document signed by authorized business representative.',
    interviewTip: 'Say: "I use entry criteria as a gate — I will not start UAT if SIT is not complete. Starting UAT with unresolved technical defects wastes business user time on environment issues rather than business validation."',
    memoryTrick: 'Entry = SIT Done + Stable Env + Test Data + Test Cases Approved + Users Confirmed. Exit = 100% Executed + Zero Critical + Sign-off Document Signed.',
    realExample: 'VPRM UAT: Entry criteria met on Day 0. Exit on Day 3: 67/67 test cases executed, 0 Critical open, 1 High deferred to Phase 2 with written stakeholder approval, 3 Medium accepted as known items. Sign-off obtained from procurement head.',
    whyOthersWrong: {
      A: 'Entry and exit criteria are formal, documented checkpoints — not informal readiness assessments.',
      C: 'UAT without formal entry and exit criteria creates indefinite extension and scope disputes.',
      D: '100% test case pass is ideal but not always achievable — deferred defects with stakeholder sign-off is a standard practice for go-live decisions.'
    },
    isScenario: false
  },

  // ===== SECTION 11: RTM =====
  {
    id: 'rtm_1',
    topic: 'RTM',
    difficulty: 'Medium',
    question: 'What is an RTM? Why is it important?',
    options: {
      A: 'RTM stands for Resource and Timeline Management — it is the project plan.',
      B: 'RTM is the Requirement Traceability Matrix — a document that maps every requirement to its test case and implementation status, ensuring no requirement is missed or untested.',
      C: 'RTM is a report generated by JIRA showing sprint velocity.',
      D: 'RTM is only important for waterfall projects — Agile projects do not need it.'
    },
    answer: 'B',
    explanation: 'RTM importance: (1) Nothing falls through — every requirement is linked to at least one test case. Every test case is linked to a requirement. Orphan requirements (no test case) or orphan test cases (no requirement) are immediately visible. (2) Change impact analysis — when a CR is raised, the RTM shows every test case and module linked to the changing requirement. (3) Compliance and audit — in banking, regulators ask: "How do you prove regulatory requirement X was implemented and tested?" The RTM is the answer. (4) Release readiness — if all RTM cells are green (tested and passed), you have confidence for go-live. (5) Historical record — post-production issues can be traced back to specific requirements and test cases.',
    interviewTip: 'Mention the banking compliance angle — "In banking, the RTM is not just good practice — it is often required by internal audit and regulatory review. It proves every compliance requirement was tested."',
    memoryTrick: 'RTM = MAP of coverage. Requirement → Spec → Test Case → Status. If anything is missing, it is visible immediately.',
    realExample: 'VPRM RTM: 28 BRD requirements → 47 FRD functional requirements → 67 UAT test cases. Before UAT, 3 requirements had no test case — Vaishnavi added them. 2 test cases had no linked requirement — identified as scope additions and raised as CRs.',
    whyOthersWrong: {
      A: 'Resource and Timeline Management is a project management concept — RTM is a requirements traceability document.',
      C: 'JIRA sprint velocity is an Agile metric — RTM is a requirements-to-testing coverage matrix.',
      D: 'RTM is essential in Agile projects too — especially in banking where compliance coverage must be provable.'
    },
    isScenario: false
  },
  {
    id: 'rtm_2',
    topic: 'RTM',
    difficulty: 'Medium',
    question: 'How do you maintain RTM throughout a project?',
    options: {
      A: 'I create the RTM at the end of the project to document what was delivered.',
      B: 'I create the RTM when BRD is baselined, add FRD and user story IDs during spec phase, add test case IDs during test preparation, update execution status during testing, and update for every approved CR.',
      C: 'The QA team maintains the RTM — the BA only creates the initial version.',
      D: 'RTM is maintained automatically by JIRA — no manual work needed.'
    },
    answer: 'B',
    explanation: 'RTM lifecycle maintenance: Phase 1 — BRD Baseline: Create RTM with Requirement ID and Requirement Description. Phase 2 — FRD Creation: Add FRD Reference column for each requirement. Phase 3 — User Story Creation: Add User Story ID column. Phase 4 — Test Case Creation: Add Test Case ID and Description column. Phase 5 — Development: Add Implementation Status column (In Progress / Completed / Deferred). Phase 6 — Testing: Add Test Execution Status (Pass / Fail / Blocked / Not Executed) and Defect ID column. Phase 7 — Change Management: Add new rows for CR-approved requirements; update existing rows when requirements change. Review RTM: At sprint end, before UAT start, and before go-live.',
    interviewTip: 'Emphasize that the RTM is a LIVING document — not a snapshot created once. "I review the RTM before every sprint planning to catch any orphan requirements before they miss a testing window."',
    memoryTrick: 'RTM timeline = BRD → FRD → User Stories → Test Cases → Development Status → Test Execution Status → CR Updates. Living document, maintained throughout.',
    realExample: 'VPRM RTM: Started at BRD baseline (28 rows). Grew to 47 rows at FRD phase (additional functional requirements per BR). 67 test cases added at UAT prep. 3 new rows added when a CR added vendor performance requirements. Final RTM had 50 functional requirements, 71 test cases.',
    whyOthersWrong: {
      A: 'End-of-project RTM creation defeats the purpose — it cannot prevent missed requirements or guide change impact analysis.',
      C: 'The BA owns and maintains the RTM throughout. QA adds test case execution status but does not own the document.',
      D: 'JIRA does not automatically create or maintain an RTM — it requires explicit BA effort.'
    },
    isScenario: false
  },
  {
    id: 'rtm_3',
    topic: 'RTM',
    difficulty: 'Easy',
    question: 'What columns are typically in an RTM?',
    options: {
      A: 'Developer name, code file path, and git commit ID.',
      B: 'Requirement ID, Description, BRD Reference, FRD Reference, User Story ID, Test Case ID, Test Status, Defect ID, Implementation Status — with optional Compliance Reference for banking.',
      C: 'Sprint name, story points, and team member assigned.',
      D: 'Date created, last modified, and document version.'
    },
    answer: 'B',
    explanation: 'Standard RTM columns: (1) Requirement ID — unique ID (BR-001, FR-001). (2) Requirement Description — brief description of the requirement. (3) BRD Reference — BRD section or page. (4) FRD Reference — FRD section. (5) User Story ID — JIRA ticket number. (6) Test Case ID — unique test case identifier. (7) Test Case Description — what is being tested. (8) Test Execution Status — Pass / Fail / Blocked / Not Executed. (9) Defect ID — JIRA defect number if a defect was found. (10) Implementation Status — In Progress / Done / Deferred. BANKING ADDITION: (11) Compliance Reference — links requirement to RBI guideline, AML rule, or FEMA regulation.',
    interviewTip: 'The COMPLIANCE REFERENCE column is your differentiator in a banking BA interview. "In banking projects I add a Compliance Reference column so auditors can directly verify that every regulatory requirement is linked to a test case."',
    memoryTrick: 'RTM columns = Req ID + Description + BRD + FRD + Story + TC ID + TC Description + Status + Defect + Implementation + (Banking: Compliance Ref).',
    realExample: 'VPRM RTM banking-specific column: Compliance Reference for AML-related requirements mapped to RBI Master Circular reference. Auditors used this column during the client\'s internal compliance review.',
    whyOthersWrong: {
      A: 'Developer names, code files, and git commits are code management concerns — not RTM content.',
      C: 'Sprint names and story points are project tracking metrics — the RTM tracks requirement coverage, not sprint metrics.',
      D: 'Document metadata (dates, versions) belongs in the document header — not in RTM content columns.'
    },
    isScenario: false
  },
  {
    id: 'rtm_4',
    topic: 'RTM',
    difficulty: 'Medium',
    question: 'How does RTM help in change management?',
    options: {
      A: 'RTM helps change management by showing which developers worked on each module.',
      B: 'When a CR is raised, the RTM immediately shows which FRD sections, user stories, test cases, and modules are linked to the changing requirement — enabling precise impact analysis in hours instead of days.',
      C: 'RTM is not useful for change management — CRs are tracked separately in JIRA.',
      D: 'RTM is updated only after a CR is implemented — not used during CR assessment.'
    },
    answer: 'B',
    explanation: 'RTM in change management: When a CR is raised to modify Requirement BR-012, I look up BR-012 in the RTM and immediately see: Which FRD sections reference BR-012. Which user stories were written for BR-012. Which test cases must be updated. Which modules (from FRD) are affected. This gives me precise impact analysis: X FRD sections need updates, Y test cases need revision, Z modules need regression testing, estimated additional effort = A days. This makes the CR impact assessment FAST and ACCURATE instead of guesswork. It also prevents CRs from being implemented without updating all downstream documents.',
    interviewTip: 'Say: "Without the RTM, CR impact analysis takes days of document review. With the RTM, I can tell the CCB exactly which test cases and modules are affected in 30 minutes."',
    memoryTrick: 'RTM + CR = Look up Requirement ID → See all linked FRD, Stories, Test Cases, Modules → Instant Impact Analysis.',
    realExample: 'VPRM CR: Stakeholder wanted to change the Level 2 approval threshold from Rs.50,000 to Rs.25,000. RTM lookup for FR-012 (approval routing rule) showed 4 FRD sections, 3 user stories, 11 test cases, and 2 modules needed updating. Impact analysis completed in 45 minutes.',
    whyOthersWrong: {
      A: 'Developer tracking is in the project plan and JIRA — not RTM.',
      C: 'JIRA tracks the CR ticket. RTM shows the IMPACT of the CR on requirements, specs, and tests.',
      D: 'RTM is most valuable BEFORE CR implementation — it informs the impact analysis that feeds the CCB decision.'
    },
    isScenario: false
  },

  // ===== SECTION 12: CHANGE REQUESTS =====
  {
    id: 'cr_1',
    topic: 'Change Requests',
    difficulty: 'Medium',
    question: 'What is a Change Request? How do you handle it?',
    options: {
      A: 'A Change Request is a developer bug fix ticket in JIRA.',
      B: 'A CR is a formal request to modify baselined scope, requirements, or deliverables. Process: CR submission → BA impact analysis → CCB review/approval → document updates → development notification.',
      C: 'Change requests are handled informally by verbal agreement between BA and developer.',
      D: 'CRs are handled by the project manager — the BA has no role.'
    },
    answer: 'B',
    explanation: 'CR handling process: (1) CR Submission — requester submits CR form with: description of change, business justification, urgency. (2) BA Impact Analysis — what requirements change, which FRD sections, user stories, test cases are affected, development effort estimate (with tech lead), timeline impact, risk assessment. (3) CCB Review — BA presents CR with impact analysis to Change Control Board. CCB decides: Approve / Reject / Defer. (4) If Approved — update all documents: BRD, FRD, User Stories, Test Cases, RTM, Project Plan. (5) Written notification to development team before any work begins. (6) Update CR log with decision, date, and approver name.',
    interviewTip: 'Say: "I never refuse CRs — I route them through the formal process so the business has full visibility of the time, cost, and risk before deciding. That is the BA\'s value in change management."',
    memoryTrick: 'CR process = Submit → Impact Analysis → CCB → Approve → Update ALL Docs → Notify Dev in Writing.',
    realExample: 'VPRM CR: Procurement head requested adding a supplier blacklist check during vendor onboarding. Vaishnavi impact analyzed: 2 new FRD sections, 5 test cases, 3 development days. CCB approved. All documents updated, dev team notified in writing with updated FRD sections.',
    whyOthersWrong: {
      A: 'Bug fixes are defects — CRs are scope changes to agreed requirements.',
      C: 'Verbal agreements on scope changes create untraceable, unauthorized changes — a compliance risk in banking.',
      D: 'CRs directly impact requirements — the BA performs the impact analysis and updates the requirements documents.'
    },
    isScenario: false
  },
  {
    id: 'cr_2',
    topic: 'Change Requests',
    difficulty: 'Medium',
    question: 'What is a Change Control Board (CCB)?',
    options: {
      A: 'CCB is the development team that reviews code before deployment.',
      B: 'CCB is the group of authorized stakeholders (project sponsor, PM, BA, tech lead, business owner) who review, approve, reject, or defer change requests based on impact analysis.',
      C: 'CCB is the QA team that approves test cases before UAT.',
      D: 'CCB is an automated JIRA workflow that approves change tickets.'
    },
    answer: 'B',
    explanation: 'Change Control Board (CCB) composition: Project Sponsor — ultimate authority on scope and budget decisions. Project Manager — timeline and resource impact. Business Owner/Representative — business value assessment. Technical Architect/Tech Lead — technical feasibility. Business Analyst — requirements impact and documentation. (For banking: Compliance/Risk Officer — if the change has regulatory implications.) CCB cadence: Weekly or bi-weekly during active development. CCB meeting agenda: Review pending CRs, review BA impact analysis for each, make approve/reject/defer decisions, document decisions. CCB decisions are BINDING — no change proceeds without CCB approval.',
    interviewTip: 'In banking, mention that the CCB should include a Compliance Officer or Risk Manager for changes that may affect regulatory requirements — KYC, AML, or reporting changes.',
    memoryTrick: 'CCB = Sponsor + PM + Business Owner + Tech Lead + BA. (Banking adds Compliance Officer). CCB decision = BINDING. No change without CCB.',
    realExample: 'VPRM CCB: Project Manager, Banking Client\'s Procurement Head (business owner), Newgen Tech Lead, and Vaishnavi (BA). Met weekly. Reviewed and approved/deferred 4 CRs during Phase 1 development.',
    whyOthersWrong: {
      A: 'Code review is a developer activity — CCB reviews SCOPE and REQUIREMENTS changes, not code.',
      C: 'QA approves test cases — CCB approves scope changes.',
      D: 'CCB is a human decision-making body — it cannot be automated because scope decisions require business judgment.'
    },
    isScenario: false
  },
  {
    id: 'cr_3',
    topic: 'Change Requests',
    difficulty: 'Hard',
    question: 'How do you assess the impact of a change request on scope and timeline?',
    options: {
      A: 'I estimate impact based on my gut feeling and experience.',
      B: 'I use the RTM to identify all affected requirements, FRD sections, test cases, and modules. I work with the tech lead on effort estimation and QA lead on retesting scope. I present a structured impact analysis to the CCB.',
      C: 'I ask the developer how long the change will take and present their estimate.',
      D: 'Impact is assessed only after the CR is approved and development starts.'
    },
    answer: 'B',
    explanation: 'CR impact assessment process: (1) Requirements Impact — use RTM to identify: which BRD requirements change, which FRD sections need update, which user stories need revision, which test cases need update or addition. (2) Development Effort — work with tech lead to estimate additional build effort in days. (3) QA Retesting Effort — work with QA lead to estimate regression testing scope. (4) Timeline Impact — will the go-live date slip? By how much? Are there downstream dependencies affected? (5) Risk Assessment — does the change introduce new risks? Compliance implications? (6) Cost Impact — if applicable. Present all of this to CCB: CR description + affected items list + effort estimate + timeline impact + recommendation.',
    interviewTip: 'Emphasize the RTM as the impact analysis tool. "The RTM makes impact analysis from days of work to hours. I look up the requirement ID and immediately see every linked item that needs to change."',
    memoryTrick: 'CR impact analysis = RTM lookup → Requirements + FRD + Stories + Test Cases affected → Dev effort + QA retesting → Timeline + Risk → CCB presentation.',
    realExample: 'VPRM CR impact: Approval threshold change from Rs.50k to Rs.25k. RTM showed: 1 BRD requirement, 4 FRD sections, 3 user stories, 11 test cases affected. Tech lead estimated 2 development days. QA estimated 1 retesting day. Timeline: 3-day delay if not parallel-tracked. CCB approved with parallel development to avoid timeline impact.',
    whyOthersWrong: {
      A: 'Gut feeling impact estimates are inaccurate, unjustifiable to CCB, and create project risk.',
      C: 'Developer time estimate is only ONE input — requirements, test cases, and risk impacts are the BA\'s analysis.',
      D: 'Impact must be assessed BEFORE approval — the CCB needs it to make an informed decision.'
    },
    isScenario: true
  },
  {
    id: 'cr_4',
    topic: 'Change Requests',
    difficulty: 'Medium',
    question: 'What documents do you update when a CR is approved?',
    options: {
      A: 'Only the JIRA ticket — all other documents update automatically.',
      B: 'BRD (if scope changes), FRD (if functional spec changes), User Stories and Acceptance Criteria, Test Cases, RTM, Project Plan — all with version history and change log entries.',
      C: 'Only the FRD — the BRD never changes after initial sign-off.',
      D: 'Only the test cases — requirements are already approved and should not be updated.'
    },
    answer: 'B',
    explanation: 'CR document update checklist: (1) BRD — if the business requirement scope changes. Add version note and change description. (2) FRD — update functional specifications for the changed requirement. All impacted sections. (3) User Stories — update acceptance criteria to reflect the change. Create new stories if the CR adds new functionality. (4) Test Cases — update existing test cases and add new ones for new scenarios. (5) RTM — update or add rows for changed requirements; add new test case mappings. (6) Project Plan — update timeline if CR affects delivery dates. (7) CR Log — record approval date, approver name, implementation status. All documents use version control — incremental version number with change history.',
    interviewTip: 'Say: "I maintain a change log in each document so anyone can see what changed, when, why, and who approved it. This traceability is especially critical in banking for audit purposes."',
    memoryTrick: 'CR approved → Update: BRD + FRD + Stories + Test Cases + RTM + Project Plan + CR Log. All documents, with version history.',
    realExample: 'VPRM CR approval (approval threshold change): Updated BRD section 4.2 (v1.2), FRD sections 7.1, 7.2, 7.3, 7.4 (v2.1), 3 user stories, 11 test cases. RTM updated. Project plan unchanged (parallel development). CR log updated with CCB approval date and approver names.',
    whyOthersWrong: {
      A: 'JIRA tracks the CR ticket — it does not automatically update BRDs, FRDs, or test cases.',
      C: 'BRDs can and should be updated when the scope of the project changes due to a CR — with version control.',
      D: 'Requirements must be updated — they are the source of truth. Test cases derived from outdated requirements produce invalid tests.'
    },
    isScenario: false
  },

  // ===== SECTION 13: AGILE & SCRUM =====
  {
    id: 'agile_1',
    topic: 'Agile & Scrum',
    difficulty: 'Easy',
    question: 'What Agile ceremonies have you participated in?',
    options: {
      A: 'I have heard of Agile but my company uses a different methodology.',
      B: 'Sprint Planning (present stories, confirm AC), Daily Standup (status + blockers), Sprint Review (demo + stakeholder feedback), Sprint Retrospective (team improvement), and Backlog Grooming (refine and prioritize upcoming stories).',
      C: 'I only attend sprint planning — other ceremonies are for developers.',
      D: 'I attend all-hands meetings and project kickoffs — those are the Agile ceremonies I know.'
    },
    answer: 'B',
    explanation: 'Five core Scrum ceremonies and BA role in each: Sprint Planning — BA presents user stories, confirms acceptance criteria with team, answers business questions, helps team understand priority. Daily Standup — BA shares: what I completed, what I am working on, any blockers (usually requirement clarifications needed). Sprint Review — BA helps explain business context of delivered stories to stakeholders, captures feedback for backlog. Sprint Retrospective — BA contributes to team improvement discussion: what requirements-related issues slowed the sprint? Backlog Grooming — BA works with PO to refine story descriptions, add/update acceptance criteria, split epics, and ensure stories are INVEST-ready.',
    interviewTip: 'Describe your SPECIFIC ROLE in each ceremony — not just that you attend. "In sprint planning, I walk the team through acceptance criteria so they can estimate accurately. In grooming, I ensure stories are INVEST-ready before they enter planning."',
    memoryTrick: 'Scrum ceremonies = DSRR-G: Daily Standup, Sprint Planning, Review, Retrospective, Grooming. BA plays an active role in ALL of them.',
    realExample: 'VPRM Agile: 2-week sprints. Vaishnavi presented 8-12 user stories per sprint planning, participated in daily 15-minute standups, demonstrated delivered features in sprint reviews with procurement head, and facilitated retroed action items for requirement clarity.',
    whyOthersWrong: {
      A: 'Most companies use Agile or hybrid — claiming unfamiliarity is a disqualifier for modern BA roles.',
      C: 'BAs are ACTIVE participants in all ceremonies — especially planning and grooming.',
      D: 'All-hands and kickoffs are project events — not Agile ceremonies.'
    },
    isScenario: false
  },
  {
    id: 'agile_2',
    topic: 'Agile & Scrum',
    difficulty: 'Medium',
    question: 'What is your role in sprint planning?',
    options: {
      A: 'I assign tasks to developers and set individual deadlines.',
      B: 'I present user stories, walk the team through acceptance criteria, answer business questions, clarify ambiguities, ensure stories are INVEST-ready, and flag any that need more refinement before the team commits.',
      C: 'I only observe sprint planning — the project manager runs it.',
      D: 'I estimate story points for each user story.'
    },
    answer: 'B',
    explanation: 'BA role in Sprint Planning: (1) Present the prioritized user stories from the backlog. (2) Walk the team through each story\'s description and acceptance criteria — making sure everyone understands the business intent. (3) Answer developer questions about business logic, edge cases, and workflow details. (4) Flag stories that are not INVEST-ready — if a story is still ambiguous, better to exclude it from the sprint than to create rework. (5) Do NOT estimate story points (that is the development team\'s responsibility) — but help the team understand scope well enough to estimate accurately. (6) Confirm sprint goal with the team and PO.',
    interviewTip: 'Say: "I ensure stories are sprint-ready BEFORE planning — so we spend sprint planning on commitment, not refinement. A poorly refined backlog wastes the entire planning session."',
    memoryTrick: 'BA in Sprint Planning = Present + Walk through AC + Answer questions + Flag unready stories. Do NOT assign tasks or estimate story points.',
    realExample: 'VPRM sprint planning: Vaishnavi presented 10 user stories, walked through AC for each, answered 6 developer questions on approval routing business logic, flagged 2 stories as needing more refinement (removed from sprint), team committed to 8 stories.',
    whyOthersWrong: {
      A: 'Task assignment and deadline setting are project management responsibilities — not BA.',
      C: 'BAs are ACTIVE contributors in sprint planning — not observers.',
      D: 'Story point estimation is the development team\'s responsibility — BAs help the team understand scope, not estimate effort.'
    },
    isScenario: false
  },
  {
    id: 'agile_3',
    topic: 'Agile & Scrum',
    difficulty: 'Easy',
    question: 'What is the difference between a Product Backlog and a Sprint Backlog?',
    options: {
      A: 'Product Backlog is created by developers. Sprint Backlog is created by QA.',
      B: 'Product Backlog = full prioritized list of all requirements for the product (owned by PO). Sprint Backlog = subset committed for the current sprint (created during Sprint Planning, owned by development team).',
      C: 'They are the same — Sprint Backlog is just a renamed section of the Product Backlog.',
      D: 'Product Backlog is for completed work. Sprint Backlog is for planned future work.'
    },
    answer: 'B',
    explanation: 'Product Backlog: Contains ALL requirements, user stories, bug fixes, and technical tasks for the product. Prioritized by business value (PO manages priority). Continuously refined and updated. No time limit — it evolves throughout the product lifecycle. Sprint Backlog: A TIME-BOXED subset of the Product Backlog selected for one sprint. Created during Sprint Planning by the team. Fixed for the sprint duration (no new items added mid-sprint without proper process). Owned by the development team. At sprint end, Sprint Backlog is emptied — completed items move to Done, incomplete items return to Product Backlog.',
    interviewTip: 'Emphasize: Sprint Backlog is FIXED for the sprint duration. "I protect the Sprint Backlog from mid-sprint additions — any new request goes to the Product Backlog and is prioritized for the next sprint."',
    memoryTrick: 'Product Backlog = EVERYTHING, all time, PO owns. Sprint Backlog = THIS SPRINT ONLY, Dev team owns, FIXED.',
    realExample: 'VPRM Product Backlog: 47 user stories, 8 bugs, 3 technical tasks. Sprint 1 Backlog: 8 user stories committed from Product Backlog for 2-week sprint. When mid-sprint a new requirement came in, it went to Product Backlog for Sprint 2 consideration.',
    whyOthersWrong: {
      A: 'Product Backlog is owned by the Product Owner; Sprint Backlog by the dev team. Neither is created by QA.',
      C: 'They are different in scope (all time vs this sprint), ownership, and stability.',
      D: 'Product Backlog is for FUTURE planned work — both backlogs contain planned work, not completed work.'
    },
    isScenario: false
  },
  {
    id: 'agile_4',
    topic: 'Agile & Scrum',
    difficulty: 'Easy',
    question: 'What is the Definition of Done?',
    options: {
      A: 'A user story is Done when the developer marks it complete in JIRA.',
      B: 'Definition of Done is an agreed team checklist that must be fully met for a user story to be considered complete — typically: coded, reviewed, unit tested, QA tested, UAT acceptance criteria met, documented, deployed to staging.',
      C: 'Done means the client has paid for the feature.',
      D: 'Done means the story was presented in the sprint review.'
    },
    answer: 'B',
    explanation: 'Definition of Done (DoD) is a formal agreement on what "complete" means for the team. Typical DoD for a banking BA project: Code written and peer reviewed. Unit tests pass. Functional testing by QA completed — no critical or high defects open. Acceptance criteria verified by BA or PO. Documentation updated (Confluence / user manual if applicable). Deployed to staging environment. UAT test case passes (for features going to UAT in this sprint). No known critical defects. The DoD prevents the problem of stories being "done" (coded) but not tested, not documented, or not deployable. BA enforces DoD by confirming acceptance criteria are met before marking stories as complete.',
    interviewTip: 'Say: "The DoD prevents partially-done work from accumulating. I specifically check that acceptance criteria from the user story are met before I mark a story as done — not just that the developer says it is finished."',
    memoryTrick: 'DoD = Coded + Reviewed + Tested + Acceptance Criteria Met + Documented + Deployed. All checks, not just "developer says done."',
    realExample: 'VPRM DoD: Code complete + peer reviewed + QA SIT passed + Vaishnavi verified all acceptance criteria in staging + Confluence updated + deployment to UAT env confirmed. Then — and only then — story marked Done.',
    whyOthersWrong: {
      A: 'Developer marking JIRA complete is not sufficient — it must meet all DoD criteria.',
      C: 'Client payment is a commercial event — DoD is about technical and quality completeness.',
      D: 'Sprint review presentation is for stakeholder feedback — it does not define quality completion.'
    },
    isScenario: false
  },
  {
    id: 'agile_5',
    topic: 'Agile & Scrum',
    difficulty: 'Hard',
    question: 'How do you handle a requirement change mid-sprint?',
    options: {
      A: 'Immediately update the story and let the developer build the new version.',
      B: 'Assess urgency. If genuinely critical: remove an equivalent-sized story from the sprint with team agreement. If not critical: log to Product Backlog for next sprint. All changes go through CR process — no informal mid-sprint additions.',
      C: 'Accept all mid-sprint changes — Agile means being flexible to any change.',
      D: 'Reject all mid-sprint changes — the sprint is fixed and nothing can change.'
    },
    answer: 'B',
    explanation: 'Mid-sprint change handling: Step 1 — Assess urgency. Is this a regulatory requirement? A critical system issue? Or a preference? Step 2 — If truly urgent: Bring to Scrum Master and PO. Remove an equivalent-sized story from the sprint (not add to existing capacity). Protect team\'s ability to complete the sprint. Step 3 — If not urgent: Log to Product Backlog. Prioritize appropriately for next sprint. Step 4 — Document as CR regardless — even urgent mid-sprint changes need a CR record for scope traceability. Never accept informal verbal changes that bypass documentation. Agile values responding to change — but through a PROCESS, not chaos.',
    interviewTip: 'Show BALANCE — you are neither rigid ("nothing changes") nor chaotic ("anything goes"). "Agile welcomes change — at the RIGHT time. Mid-sprint is not the right time unless it is genuinely critical."',
    memoryTrick: 'Mid-sprint change = Assess urgency → If critical: Remove equivalent story. If not: Product Backlog for next sprint. ALWAYS document as CR.',
    realExample: 'VPRM mid-sprint: Stakeholder urgently needed a compliance field added to PR form (regulatory requirement discovered). Vaishnavi and Scrum Master removed a lower-priority report story from the sprint. Updated user story. Raised CR. Developer completed the compliance field by sprint end.',
    whyOthersWrong: {
      A: 'Directly updating stories mid-sprint disrupts team planning, creates scope uncertainty, and bypasses CR documentation.',
      C: '"Agile means accept any change" is a misunderstanding of Agile — Agile responds to change through a structured process, not arbitrary mid-sprint disruption.',
      D: '"Nothing changes" is equally wrong — genuinely critical changes (especially compliance) must be accommodated with proper process.'
    },
    isScenario: true
  },
  {
    id: 'agile_6',
    topic: 'Agile & Scrum',
    difficulty: 'Easy',
    question: 'What is velocity in Agile?',
    options: {
      A: 'Velocity is the number of hours the team worked in a sprint.',
      B: 'Velocity is the total story points of user stories that meet the Definition of Done in a sprint. Over time, average velocity becomes a reliable metric for release planning.',
      C: 'Velocity is the number of meetings held per sprint.',
      D: 'Velocity is the speed at which developers write code lines per day.'
    },
    answer: 'B',
    explanation: 'Velocity: Measured in story points (or other estimation units) of stories that are DONE (meet full Definition of Done) by sprint end. Incomplete stories do NOT count toward velocity. Average velocity = sum of completed story points over last 3-5 sprints, divided by number of sprints. Why it matters for BA: Release planning — if average velocity is 30 points per sprint and product backlog has 180 points remaining, approximately 6 more sprints are needed. Scope trade-off discussions — if velocity shows the team cannot complete all Must Have stories by the deadline, scope negotiation with the PO is triggered. BA uses velocity to manage stakeholder expectations on delivery timelines.',
    interviewTip: 'Show you use velocity for PLANNING — not just as a team performance metric. "I use velocity to give stakeholders realistic delivery forecasts and to trigger scope conversations when the backlog exceeds our delivery capacity."',
    memoryTrick: 'Velocity = Completed story points per sprint. Average = Predictability. Used for: Release planning + Scope trade-off decisions.',
    realExample: 'VPRM: Team velocity averaged 28 story points per sprint. Product Backlog had 112 points remaining. Vaishnavi forecasted 4 more sprints to complete Phase 1 scope — presented to steering committee for go-live date confirmation.',
    whyOthersWrong: {
      A: 'Hours worked is not velocity — velocity measures deliverable value (story points done), not effort input.',
      C: 'Meeting count has no relationship to team delivery capacity.',
      D: 'Code lines per day is a developer vanity metric — velocity is a team delivery measurement.'
    },
    isScenario: false
  },
  {
    id: 'agile_7',
    topic: 'Agile & Scrum',
    difficulty: 'Easy',
    question: 'What is a burn-down chart?',
    options: {
      A: 'A burn-down chart shows the number of defects found per sprint.',
      B: 'A burn-down chart tracks remaining work (story points) over time during a sprint or release, with an actual line vs an ideal diagonal line showing whether the team is on track.',
      C: 'A burn-down chart shows team member utilization by day.',
      D: 'A burn-down chart is a budget tracking tool showing remaining project spend.'
    },
    answer: 'B',
    explanation: 'Burn-down chart: X-axis = Sprint days (Day 1 to Day N). Y-axis = Remaining story points. Ideal line = Straight diagonal from total points (Day 1) to zero (last day). Actual line = Real progress day by day. Reading: Actual above ideal = team behind (risk of not completing sprint). Actual below ideal = team ahead. Actual flat = no progress (blockers exist). BA monitors burn-down during the sprint to identify requirement-related blockers: Are developers stuck because a requirement is unclear? Is there a story with blocked status that needs a business decision? Sprint burn-down helps BA know when to proactively clear blockers.',
    interviewTip: 'Say: "I monitor the burn-down chart daily — if a story is flat for 2 days, I reach out to the developer to understand if it is a requirement blocker I can resolve."',
    memoryTrick: 'Burn-down = Remaining points over days. Actual vs Ideal. Above ideal = behind. Below ideal = ahead. Flat = blocked.',
    realExample: 'VPRM Sprint 2: Day 4 burn-down flat on approval routing story. Vaishnavi checked with developer — unclear requirement on threshold calculation. Clarified within 1 hour. Story unblocked. Team back on track by Day 5.',
    whyOthersWrong: {
      A: 'Defect trends are tracked separately — not on burn-down charts.',
      C: 'Team utilization is tracked in resource plans — not burn-down charts.',
      D: 'Budget tracking uses separate financial management tools — not burn-down charts.'
    },
    isScenario: false
  },

  // ===== SECTION 14: STAKEHOLDER MANAGEMENT =====
  {
    id: 'sm_1',
    topic: 'Stakeholder Management',
    difficulty: 'Hard',
    question: 'How do you manage difficult stakeholders?',
    options: {
      A: 'Escalate to the project manager immediately when a stakeholder is difficult.',
      B: 'Understand the root cause of their difficulty, address it directly with empathy, adapt communication style, and escalate with documented evidence only after genuine attempts fail.',
      C: 'Avoid the difficult stakeholder and gather requirements from others.',
      D: 'Tell the stakeholder their behavior is unacceptable and request a replacement.'
    },
    answer: 'B',
    explanation: 'Managing difficult stakeholders — root cause analysis: Too busy → Adapt: 15-minute focused sessions, async questionnaires, desk visits. Resistant to change → Address concern: show specifically how the system benefits THEM. Negative past experience with IT → Acknowledge it, demonstrate your structured approach, build trust incrementally. Political/territorial → Be neutral, document decisions, escalate only when the project is at risk. Process: (1) 1:1 conversation — understand their concern. (2) Address the specific concern with a concrete action. (3) Keep them informed proactively. (4) Document every interaction. (5) Escalate with evidence only after genuine attempts.',
    interviewTip: 'Use your VPRM finance head story — it is a perfect example. Show: you listened → understood the specific concern → proposed a targeted solution → the stakeholder became cooperative.',
    memoryTrick: 'Difficult stakeholder = Understand WHY → Address concern specifically → 1:1 not group → Document everything → Escalate last resort.',
    realExample: 'VPRM finance head kept canceling meetings. 1:1 session revealed concern: new system had more clicks than email. Vaishnavi proposed bulk approval feature. Finance head became cooperative and championed the system in UAT. Issue resolved without escalation.',
    whyOthersWrong: {
      A: 'Immediate escalation without trying to resolve it yourself signals inability to manage relationships.',
      C: 'Avoiding a key stakeholder creates requirement gaps that surface as UAT failures or production issues.',
      D: 'Confronting a stakeholder about behavior creates political conflict and worsens the situation.'
    },
    isScenario: false
  },
  {
    id: 'sm_2',
    topic: 'Stakeholder Management',
    difficulty: 'Easy',
    question: 'What is a stakeholder register?',
    options: {
      A: 'A stakeholder register is a list of system users for login management.',
      B: 'A stakeholder register documents all project stakeholders: name, role, department, interest level, influence level, communication preference, and what information they need and how frequently.',
      C: 'A stakeholder register is a JIRA board showing who is assigned to each task.',
      D: 'A stakeholder register is a financial document listing project budget approvers.'
    },
    answer: 'B',
    explanation: 'Stakeholder Register columns: Name and Role. Department / Organization. Contact Information. Level of Interest (High/Medium/Low) — how much does this project matter to them? Level of Influence (High/Medium/Low) — how much power do they have to affect the project? Information Needs — what do they need to know and when? Communication Preference — meeting, email, report, dashboard? Engagement Strategy — based on interest/influence matrix. How to use: High influence + High interest → Most active engagement, direct involvement in decisions. Low influence + Low interest → Periodic updates only. Ensures no stakeholder is overlooked and communication is appropriately targeted.',
    interviewTip: 'Mention the Interest-Influence matrix: High Interest + High Influence = Manage Closely. High Interest + Low Influence = Keep Informed. Low Interest + High Influence = Keep Satisfied. Low Interest + Low Influence = Monitor.',
    memoryTrick: 'Stakeholder Register = WHO (name+role) + HOW MUCH they CARE (interest) + HOW MUCH POWER they have (influence) + WHAT they need + HOW OFTEN.',
    realExample: 'VPRM Stakeholder Register: Procurement Head (High interest, High influence — manage closely, weekly meetings). Finance Manager (High interest, Medium influence — keep informed, bi-weekly). Operations Staff (Low interest, Low influence — newsletter updates only).',
    whyOthersWrong: {
      A: 'System login lists are user management — stakeholder registers are project relationship management tools.',
      C: 'JIRA task assignments are project tracking — stakeholder registers are communication planning documents.',
      D: 'Budget approvers are ONE type of stakeholder — the register covers all stakeholders across all dimensions.'
    },
    isScenario: false
  },
  {
    id: 'sm_3',
    topic: 'Stakeholder Management',
    difficulty: 'Medium',
    question: 'How do you ensure stakeholders are aligned on requirements?',
    options: {
      A: 'Send the BRD via email and ask stakeholders to reply if they have objections.',
      B: 'Conduct structured walkthrough sessions, send written meeting notes within 24 hours, get written sign-off, and check back regularly as development surfaces new questions.',
      C: 'Alignment is the project manager\'s responsibility — the BA just documents requirements.',
      D: 'Stakeholders are aligned automatically once the BRD is approved.'
    },
    answer: 'B',
    explanation: 'Stakeholder alignment process: (1) Requirements Walkthrough — present documented requirements in a meeting, get explicit confirmation (not passive non-objection). (2) Joint Sessions for Cross-Department Requirements — bring all affected departments together so they align directly. (3) 24-Hour Meeting Notes — send after every session. Explicitly state: "Based on our discussion, we agreed to X." This creates accountability. (4) Written Sign-off — formal sign-off on BRD, not just verbal approval. (5) Ongoing Check-ins — during development, requirements questions surface. Schedule regular touchpoints with key stakeholders. (6) Alignment is a PROCESS, not an event — it requires continuous maintenance.',
    interviewTip: 'Say: "I never assume silence means agreement. If a stakeholder does not respond to the meeting notes within the agreed timeframe, I follow up directly — missing alignment surfaces as an expensive UAT rejection."',
    memoryTrick: 'Stakeholder alignment = Walkthrough + 24hr Notes + Written Sign-off + Ongoing Check-ins. Never assume silence = agreement.',
    realExample: 'VPRM: After each elicitation session, Vaishnavi sent meeting notes within 24 hours saying "Per our discussion today, the approval threshold for Level 2 is Rs.50,000. Please confirm by [date]." This prevented disputes during UAT.',
    whyOthersWrong: {
      A: 'Email BRD distribution without a walkthrough gets ignored and creates passive non-objection — not genuine alignment.',
      C: 'Stakeholder alignment on REQUIREMENTS is the BA\'s core responsibility — not the PM\'s.',
      D: 'BRD sign-off is a milestone — alignment is maintained continuously throughout the project, especially as development raises new questions.'
    },
    isScenario: false
  },
  {
    id: 'sm_4',
    topic: 'Stakeholder Management',
    difficulty: 'Medium',
    question: 'How do you communicate project status to management?',
    options: {
      A: 'I send every JIRA comment to management via email daily.',
      B: 'I prepare concise RAG status reports (Red/Amber/Green) covering: what is completed, what is in progress, risks and mitigation, and upcoming plan — presented in weekly steering committee meetings.',
      C: 'The project manager handles all management communication — the BA has no role.',
      D: 'I share the full project plan with all details — the more information, the better.'
    },
    answer: 'B',
    explanation: 'Management communication principles: (1) RAG Status — Red (critical issue, action needed), Amber (risk, monitoring needed), Green (on track). Management sees health at a glance. (2) Content: What was completed (deliverables, not activities). What is in progress. Risks and issues with mitigation plans. Upcoming plan for the next period. (3) Format: One page maximum for executive audience. Business outcomes language — not technical details. (4) Frequency: Weekly steering committee or bi-weekly, depending on project phase. (5) Proactive: Flag risks BEFORE they become issues. Never let management be surprised. (6) BA role: Prepare requirements status and risk section; PM manages overall project status.',
    interviewTip: 'Mention that management communication should use BUSINESS LANGUAGE, not technical terms. "I translate technical development status into business outcomes — not sprint velocity — when reporting to management."',
    memoryTrick: 'Management communication = RAG Status + Completed Deliverables + Risks with Mitigation + Next Steps. One page, business language, proactive.',
    realExample: 'VPRM weekly steering report: Green — Sprint 3 completed, 8/8 stories done. Amber — Level 2 approval workflow has a dependency on ERP API that may cause 3-day delay; mitigation: parallel development track. Next: Sprint 4 starts Monday with 10 user stories.',
    whyOthersWrong: {
      A: 'JIRA comment dumps overwhelm management with low-level details they cannot act on.',
      C: 'BAs are often asked directly about requirements status and risks — they must be able to communicate independently.',
      D: 'More information is not better for executives — they need the right information: decisions required and risks to be aware of.'
    },
    isScenario: false
  },

  // ===== SECTION 15: APIs =====
  {
    id: 'api_1',
    topic: 'APIs',
    difficulty: 'Medium',
    question: 'What is an API? How does it relate to your work as a BA?',
    options: {
      A: 'API stands for Automated Programming Interface — it is software code written by developers.',
      B: 'API (Application Programming Interface) allows two systems to communicate. As a BA, I document integration requirements: what data is sent, what response is expected, success and failure scenarios, and how the UI should react to each API response.',
      C: 'APIs are only relevant to developers — BAs do not need to understand them.',
      D: 'API knowledge is only needed for technical BAs in software companies, not banking.'
    },
    answer: 'B',
    explanation: 'BA relationship with APIs: BAs do not WRITE APIs — developers do. But BAs DEFINE the business requirements that drive API design: (1) What triggers the API call? (user action, system event). (2) What data is sent in the request? (field names, data types, mandatory/optional). (3) What response does the business expect? (success codes, data returned). (4) What are the failure codes and what should happen for each? (retry, error message, reversal). (5) What does the user see on screen for each response? In banking: payment initiation APIs, KYC verification APIs, beneficiary validation APIs, AML screening APIs — all have business requirements that the BA documents in the FRD.',
    interviewTip: 'Show you know what a BA does WITH API knowledge — not just that APIs exist. "I document API integration requirements in the FRD — the trigger, request data, expected response, and user-facing behavior for each response code."',
    memoryTrick: 'BA + API = Define: What triggers it + What data goes in + What response comes back + What happens on success/failure + What user sees.',
    realExample: 'VPRM FRD API section: PR-SUBMIT-001 API. Trigger: User clicks Submit. Request: {vendor_id, amount, category, cost_center}. Success (200): PR created, confirmation screen shows PR reference number. Error (422): Validation failure, display field-level error messages. Error (500): System error, display "Unable to process. Please try again." and log the event.',
    whyOthersWrong: {
      A: 'API stands for Application Programming Interface — "Automated" is incorrect.',
      C: 'Banking BAs regularly document API integration requirements — APIs are embedded in every banking system integration.',
      D: 'Banking is one of the most API-heavy domains — payment APIs, KYC APIs, AML APIs, CBS integration APIs.'
    },
    isScenario: false
  },
  {
    id: 'api_2',
    topic: 'APIs',
    difficulty: 'Medium',
    question: 'What is the difference between REST and SOAP APIs?',
    options: {
      A: 'REST uses email and SOAP uses phone for communication.',
      B: 'REST is lightweight, uses HTTP methods (GET/POST/PUT/DELETE), returns JSON, and is used in modern banking apps. SOAP is rigid, uses XML, has strict standards, and is used in legacy core banking and financial systems.',
      C: 'REST is for internal systems and SOAP is for external systems.',
      D: 'There is no practical difference — both are interchangeable for all banking systems.'
    },
    answer: 'B',
    explanation: 'REST vs SOAP for banking BA: REST (REpresentational State Transfer): Uses HTTP. Data format: JSON (lightweight). Flexible structure. Stateless. Used in: Modern mobile banking, UPI, digital onboarding, fintech APIs. SOAP (Simple Object Access Protocol): Uses HTTP/SMTP/other. Data format: XML (verbose). Strict, standardized message structure. Has built-in error handling (SOAP Fault). Used in: Legacy core banking systems (Finacle, BaNCS), SWIFT integrations, older payment network APIs. Why BA needs to know: When documenting integration requirements, the API type determines data format specifications and error handling requirements in the FRD.',
    interviewTip: 'Say: "Knowing REST vs SOAP matters when documenting integration requirements. For a SOAP API, I need to specify XML field structure. For a REST API, I specify JSON payload format in the FRD."',
    memoryTrick: 'REST = Modern + JSON + Flexible + Mobile banking. SOAP = Legacy + XML + Strict + Core banking. REST is fast food, SOAP is fine dining.',
    realExample: 'VPRM integration: Email notification was via REST API (modern), PR data sync with client ERP was via SOAP API (legacy ERP system). Vaishnavi documented different request formats in FRD for each integration.',
    whyOthersWrong: {
      A: 'Both REST and SOAP use network protocols — not email or phone.',
      C: 'Both can be internal or external — the distinction is technical architecture, not deployment location.',
      D: 'They have significant differences in format, flexibility, and use cases — not interchangeable for all scenarios.'
    },
    isScenario: false
  },
  {
    id: 'api_3',
    topic: 'APIs',
    difficulty: 'Medium',
    question: 'What is an API specification document?',
    options: {
      A: 'An API specification is the same as a BRD — it lists business requirements.',
      B: 'An API specification describes the technical contract between systems: endpoint URL, HTTP method, request parameters with data types, request payload example, response codes and their meanings, error response examples, and authentication requirements.',
      C: 'An API specification is written by the BA as part of the FRD.',
      D: 'API specifications are confidential and BAs should not access them.'
    },
    answer: 'B',
    explanation: 'API Specification content: (1) Endpoint URL — e.g., /api/v1/purchase-requests/submit. (2) HTTP Method — GET, POST, PUT, DELETE. (3) Request Parameters — query parameters, path parameters, with data types and required/optional. (4) Request Body/Payload — JSON structure with example. (5) Response Codes — 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found), 422 (validation error), 500 (server error). (6) Response Body — structure for each response code with example. (7) Authentication — API key, OAuth token, JWT. (8) Rate Limits — if applicable. BA USE: Read API specs written by developers to write integration requirements in the FRD. Use Swagger/OpenAPI documentation as the reference.',
    interviewTip: 'Say: "I read API specifications to understand what data the system can send and receive, then translate that into business requirements in the FRD — specifically which response codes map to which user-facing messages."',
    memoryTrick: 'API Spec = Endpoint + Method + Request (what goes in) + Response Codes (what comes back) + Auth. BA reads it to write FRD integration requirements.',
    realExample: 'VPRM: Developer provided API spec for PR submission endpoint. Vaishnavi read the spec, identified 4 error codes (400, 404, 422, 500), and wrote FRD requirements specifying the exact user-facing message and system behavior for each error code.',
    whyOthersWrong: {
      A: 'API specs are technical contracts between systems — BRDs are business requirement documents. Completely different purpose.',
      C: 'API specifications are WRITTEN by developers (or architects) — BAs READ them to inform FRD integration requirements.',
      D: 'API specifications are typically shared with BAs and QA for requirement and test documentation — they are not confidential from project team members.'
    },
    isScenario: false
  },
  {
    id: 'api_4',
    topic: 'APIs',
    difficulty: 'Medium',
    question: 'How do you write API requirements?',
    options: {
      A: 'I write the API code and hand it to developers.',
      B: 'I document API integration requirements in the FRD: what triggers the call, what data is sent, expected success and failure responses, user-facing messages for each response, timeout handling, retry logic, and notification behavior.',
      C: 'API requirements are the developer\'s responsibility — the BA only covers UI requirements.',
      D: 'I copy the developer\'s API documentation and paste it into the FRD.'
    },
    answer: 'B',
    explanation: 'API requirement documentation in FRD: (1) Trigger — what user action or system event initiates the API call? (2) Request Data — what fields are sent? Which are mandatory? What format? (3) Success Response — what does the system do when API returns success? What does the user see? (4) Failure Responses — for EACH error code: what does the system do? What message does the user see? (5) Timeout — what happens if API does not respond within X seconds? (6) Retry Logic — does the system automatically retry? How many times? With what interval? (7) Audit — is this API call logged for audit trail purposes? In banking, every payment API call must be logged with timestamp, request data (masked PII), and response.',
    interviewTip: 'Emphasize the AUDIT LOGGING requirement — specific to banking. "Every payment API call in a banking system must be logged with timestamp and response code — this is a regulatory requirement I always include in my API integration requirements."',
    memoryTrick: 'API requirements = Trigger + Request data + Success behavior + Each error behavior + Timeout + Retry + Audit log.',
    realExample: 'VPRM PR submission API requirements in FRD: Trigger = user clicks Submit button. Request = JSON with vendor_id, amount, category. Success (200) = display PR reference number, send confirmation email within 60s. Error (422) = highlight failing fields with specific error messages. Timeout (>5s) = display "Processing..." spinner, retry once, then show "Please try again" if second attempt fails.',
    whyOthersWrong: {
      A: 'Writing API code is a developer responsibility — BAs write the business requirements that drive the API design.',
      C: 'Integration requirements are explicitly a BA responsibility — APIs are system integrations that need business behavior specifications.',
      D: 'Copy-pasting developer API docs into the FRD is not requirements documentation — it is the BA\'s job to translate technical API specs into business behavior requirements.'
    },
    isScenario: false
  },
  {
    id: 'api_5',
    topic: 'APIs',
    difficulty: 'Medium',
    question: 'Have you used Postman or Swagger? In what context?',
    options: {
      A: 'No — those are developer tools that BAs should not use.',
      B: 'Yes — I use Postman to validate API responses during UAT defect investigation, and I review Swagger documentation to understand endpoint structures when writing FRD integration requirements.',
      C: 'I use Postman to write API code and test it before handing it to developers.',
      D: 'I have not used either — I rely on the developer to explain all API behavior verbally.'
    },
    answer: 'B',
    explanation: 'BA use of Postman and Swagger: Swagger/OpenAPI: BA reviews Swagger documentation to understand: available endpoints, request formats, response codes, and authentication methods. Used BEFORE FRD writing to know what the API can do. Postman: BA uses Postman to: Validate API behavior during defect investigation (is the system returning the right response?). Replicate reported issues to write precise defect reports. Test data setup for UAT (trigger API calls to create test data states). Note: BAs do not write API code or perform technical performance testing — they use these tools for BUSINESS VALIDATION purposes.',
    interviewTip: 'Give a specific context: "During VPRM UAT, I used Postman to replicate a reported defect — the approval status was not updating correctly. I called the status API directly and saw it was returning the wrong status code, which helped me write a precise defect report with steps to reproduce."',
    memoryTrick: 'Swagger = Read API docs to write FRD. Postman = Validate API response during UAT/defect investigation. BA uses for BUSINESS VALIDATION, not coding.',
    realExample: 'VPRM UAT: Approval notification email not sending. Vaishnavi used Postman to call the notification API directly — response showed 401 Unauthorized error, meaning the API key was not configured in UAT environment. Precise defect report filed: environment configuration issue, not application bug.',
    whyOthersWrong: {
      A: 'Postman and Swagger are increasingly used by BAs for requirement validation and defect investigation — they are not exclusively developer tools.',
      C: 'BAs do not write API code — they validate API behavior for business requirement purposes.',
      D: 'Relying on verbal API behavior explanations creates inaccurate FRD specifications and missed defects.'
    },
    isScenario: false
  },

  // ===== SECTION 16: SQL =====
  {
    id: 'sql_1',
    topic: 'SQL Basics',
    difficulty: 'Medium',
    question: 'What SQL queries have you written as a BA?',
    options: {
      A: 'I do not use SQL — that is a developer skill.',
      B: 'I use SELECT with WHERE, JOIN, COUNT, and SUM for data validation — verifying that database records match what is displayed in the application UI during requirements analysis and UAT.',
      C: 'I only use SQL to drop tables and reset test data.',
      D: 'I use SQL to write stored procedures and triggers for business logic.'
    },
    answer: 'B',
    explanation: 'BA SQL usage (practical, not developer-level): SELECT queries to verify data: "Show me all purchase requests with status PENDING." WHERE filtering: "Show me PRs above Rs.50,000 that are at Level 1 approval." JOINs to verify relationships: "Do all PRs have a valid vendor_id in the vendor master table?" COUNT for aggregation validation: "Does the dashboard count of pending PRs match the database count?" SUM for financial validation: "Does the total approved amount in the report match the database?" Date filtering: "Show all PRs submitted today." BAs use SQL for DATA VALIDATION during requirements analysis (verify data quality) and UAT (verify system stores data correctly). Not for: Writing stored procedures, triggers, or complex database objects.',
    interviewTip: 'Be honest about your SQL level — "I use basic SQL for data validation. I write SELECT, WHERE, JOIN, COUNT, and SUM queries. For complex database queries I work with the DBA." This is the appropriate BA SQL scope.',
    memoryTrick: 'BA SQL = SELECT + WHERE + JOIN + COUNT + SUM. For VALIDATION only — not database design or stored procedures.',
    realExample: 'VPRM UAT data validation: SELECT p.pr_id, p.amount, v.vendor_name FROM purchase_requests p JOIN vendors v ON p.vendor_id = v.id WHERE p.status = "PENDING" AND p.amount > 50000. Used to verify Level 2 routing was triggered correctly.',
    whyOthersWrong: {
      A: 'BAs who use SQL for data validation are significantly more effective — they can independently verify system behavior.',
      C: 'Dropping tables destroys test data — BAs use SQL for READ operations, not destructive operations.',
      D: 'Stored procedures and triggers are developer/DBA responsibilities — BAs write basic read queries for validation.'
    },
    isScenario: false
  },
  {
    id: 'sql_2',
    topic: 'SQL Basics',
    difficulty: 'Medium',
    question: 'What is the difference between WHERE and HAVING clause?',
    options: {
      A: 'WHERE is for numbers and HAVING is for text strings.',
      B: 'WHERE filters rows BEFORE grouping (applied to individual rows). HAVING filters AFTER grouping (applied to aggregated results). HAVING is used with GROUP BY.',
      C: 'They are interchangeable — HAVING is just a newer version of WHERE.',
      D: 'WHERE is for the SELECT statement. HAVING is for the INSERT statement.'
    },
    answer: 'B',
    explanation: 'WHERE vs HAVING: WHERE: Filters individual rows before any grouping occurs. Can reference any column. Cannot reference aggregate functions (SUM, COUNT, AVG). Example: SELECT * FROM purchase_requests WHERE amount > 50000. Returns all rows where amount exceeds 50k. HAVING: Filters after grouping. Used with GROUP BY. CAN reference aggregate functions. Example: SELECT vendor_id, COUNT(*) as request_count FROM purchase_requests GROUP BY vendor_id HAVING COUNT(*) > 10. Returns only vendors with more than 10 purchase requests. BA use case: Validating reports — "Show me only departments with total approved spend above Rs.5 lakh this month."',
    interviewTip: 'Give a banking example: "I use HAVING to validate report aggregations — for example, to find vendors with transaction volumes above a threshold for AML monitoring validation."',
    memoryTrick: 'WHERE = before grouping = individual rows. HAVING = after grouping = aggregated results. HAVING needs GROUP BY. WHERE does not.',
    realExample: 'VPRM validation: SELECT dept_id, SUM(amount) as total_spend FROM purchase_requests WHERE status = "APPROVED" GROUP BY dept_id HAVING SUM(amount) > 500000. Validated department-level spending report totals against database.',
    whyOthersWrong: {
      A: 'WHERE and HAVING work with any data type — the distinction is about grouping timing, not data type.',
      C: 'They are not interchangeable — WHERE cannot use aggregate functions, HAVING cannot filter individual rows.',
      D: 'Both WHERE and HAVING are used in SELECT statements — this distinction is incorrect.'
    },
    isScenario: false
  },
  {
    id: 'sql_3',
    topic: 'SQL Basics',
    difficulty: 'Medium',
    question: 'How do you use SQL for data validation?',
    options: {
      A: 'I use SQL to update database records directly when a defect is found.',
      B: 'I compare what the application UI shows against database records using SELECT queries — verifying counts, amounts, status values, and relationships match between the front-end display and backend storage.',
      C: 'SQL data validation is only done by QA engineers during SIT.',
      D: 'I do not use SQL for validation — I trust the developer\'s word that data is correct.'
    },
    answer: 'B',
    explanation: 'SQL data validation scenarios: (1) Count validation: Application shows 25 pending PRs. SQL: SELECT COUNT(*) FROM purchase_requests WHERE status="PENDING". Database shows 23. Discrepancy = defect. (2) Status validation: After Level 1 approval, application shows "Pending Level 2." SQL: SELECT status FROM purchase_requests WHERE pr_id = 1001. Database shows "PENDING_LEVEL1" instead of "PENDING_LEVEL2." Bug found. (3) Relationship validation: Verify every PR has a valid vendor. SQL: SELECT pr_id FROM purchase_requests WHERE vendor_id NOT IN (SELECT id FROM vendors). Orphan PRs = data integrity issue. (4) Calculation validation: Total approved amount on dashboard. SQL: SELECT SUM(amount) FROM purchase_requests WHERE status = "APPROVED". Match? If not, calculation bug.',
    interviewTip: 'Frame SQL validation as INDEPENDENCE — "SQL lets me independently verify system behavior without relying on the developer\'s assurance. This is especially important in banking where data accuracy is a compliance requirement."',
    memoryTrick: 'SQL validation = UI says X, database says Y. If X ≠ Y, defect found. Count + Status + Relationship + Calculation validation.',
    realExample: 'VPRM UAT: Dashboard showed 12 pending approvals for Finance Manager. SQL query returned 9 records with PENDING_LEVEL2 status. 3 records were stuck in PENDING_LEVEL1. Defect: approval routing logic had a threshold calculation error. Found through SQL, not manual testing.',
    whyOthersWrong: {
      A: 'BAs should NEVER update database records directly — this creates unauthorized data changes and audit trail violations.',
      C: 'BAs validate data during requirements analysis and UAT — SQL validation is not limited to QA during SIT.',
      D: 'Trusting developer assurance without independent verification misses data defects — SQL validation is an independent quality check.'
    },
    isScenario: false
  },
  {
    id: 'sql_4',
    topic: 'SQL Basics',
    difficulty: 'Medium',
    question: 'What is a JOIN? Which types have you used?',
    options: {
      A: 'A JOIN combines two JIRA sprints into a single board view.',
      B: 'A JOIN combines rows from two or more tables based on a related column. Types used: INNER JOIN (matching rows in both), LEFT JOIN (all rows from left table + matching from right, NULLs where no match).',
      C: 'JOINs are only used by database administrators — BAs should not write JOINs.',
      D: 'A JOIN is a SQL command that merges two databases into one.'
    },
    answer: 'B',
    explanation: 'SQL JOIN types and BA use: INNER JOIN: Returns only rows where there is a match in BOTH tables. BA use: Verify related data. "Show me all PRs with their vendor names." SELECT p.pr_id, v.vendor_name FROM purchase_requests p INNER JOIN vendors v ON p.vendor_id = v.id. LEFT JOIN: Returns ALL rows from the left table + matching rows from right. NULL for no match. BA use: Find records without a match — data integrity check. "Find all PRs with no matching vendor." SELECT p.pr_id FROM purchase_requests p LEFT JOIN vendors v ON p.vendor_id = v.id WHERE v.id IS NULL. RIGHT JOIN (less common by BAs): All rows from right table. FULL OUTER JOIN: All rows from both tables. BA typical scope: INNER JOIN and LEFT JOIN are 90% of what BAs need.',
    interviewTip: 'Mention the LEFT JOIN use for FINDING ORPHAN RECORDS — this is a specific data quality validation BAs use that shows practical SQL knowledge beyond basics.',
    memoryTrick: 'INNER JOIN = Both tables match. LEFT JOIN = All left + matching right (NULLs for no match). Left JOIN use: find rows with NO match (orphan records).',
    realExample: 'VPRM validation: SELECT pr_id FROM purchase_requests p LEFT JOIN vendors v ON p.vendor_id = v.id WHERE v.id IS NULL. Found 2 PRs referencing vendor IDs that did not exist in vendor master — data integrity defect logged.',
    whyOthersWrong: {
      A: 'JIRA sprint boards and SQL JOINs have nothing in common — completely different contexts.',
      C: 'BAs use INNER and LEFT JOINs regularly for data validation — they are standard BA SQL tools.',
      D: 'JOINs combine columns from tables within a single query — they do not merge separate databases.'
    },
    isScenario: false
  },

  // ===== SECTION 17: BANKING DOMAIN =====
  {
    id: 'bank_1',
    topic: 'Banking Domain',
    difficulty: 'Hard',
    question: 'What is the difference between NEFT, RTGS, and IMPS?',
    options: {
      A: 'NEFT is for international transfers, RTGS is for mobile payments, IMPS is for credit cards.',
      B: 'NEFT: batch processing, no minimum amount, up to 2 hours settlement. RTGS: real-time, minimum Rs.2 lakh, high-value. IMPS: instant, 24x7 including holidays, up to Rs.5 lakh.',
      C: 'All three are the same — different names for the same RBI payment system.',
      D: 'NEFT is bank-to-bank only, RTGS is customer-to-customer, IMPS is business-to-business.'
    },
    answer: 'B',
    explanation: 'NEFT / RTGS / IMPS comparison: NEFT (National Electronic Funds Transfer): Processing = Batch (every 30 minutes during bank hours). Minimum = No minimum. Maximum = No RBI maximum. Timing = Monday-Saturday, bank hours. Settlement = 30 min to 2 hours. Best for = Regular fund transfers, utility bills. RTGS (Real Time Gross Settlement): Processing = Individual, real-time. Minimum = Rs.2,00,000. Maximum = No upper limit. Timing = Monday-Saturday, bank hours. Settlement = Immediate (seconds). Best for = High-value business transactions. IMPS (Immediate Payment Service): Processing = Real-time, instant. Minimum = No minimum. Maximum = Up to Rs.5 lakh (typical). Timing = 24x7, 365 days. Settlement = Immediate. Best for = Urgent transfers, off-hours transfers.',
    interviewTip: 'Always connect to BA role: "As a BA documenting a payment module, I would specify different business rules for each channel — NEFT cutoff times, RTGS minimum amount validation, IMPS 24x7 availability — each generating different error messages and user notifications."',
    memoryTrick: 'NEFT = Batches + No minimum + Slow. RTGS = Real time + Rs.2L minimum + Big amounts. IMPS = Instant + 24x7 + Up to Rs.5L.',
    realExample: 'Banking FRD requirement: Amount validation: If transfer amount < Rs.2,00,000 and time is outside bank hours → disable RTGS option, show only IMPS. If time is within bank hours → show NEFT and RTGS options for amounts >= Rs.2L.',
    whyOthersWrong: {
      A: 'All three are domestic Indian payment systems. International transfers use SWIFT/correspondent banking.',
      C: 'They are three distinct payment rails with different processing speeds, limits, and availability.',
      D: 'The distinction is processing method and timing — not the type of parties transacting.'
    },
    isScenario: false
  },
  {
    id: 'bank_2',
    topic: 'Banking Domain',
    difficulty: 'Medium',
    question: 'What is KYC? Why is it important in banking?',
    options: {
      A: 'KYC stands for Keep Your Customer — a loyalty program for high-value banking clients.',
      B: 'KYC (Know Your Customer) is the mandatory process of verifying customer identity using PAN, Aadhaar, address proof, and photograph — required by RBI to prevent money laundering, identity fraud, and terrorist financing.',
      C: 'KYC is optional for digital banking customers who sign up via mobile app.',
      D: 'KYC is only required for business accounts — individual customers are exempt.'
    },
    answer: 'B',
    explanation: 'KYC in banking: Purpose: Verify customer identity. Prevent fraudulent accounts. Comply with RBI guidelines. Prevent money laundering and terrorist financing. Documents collected: PAN card (mandatory). Aadhaar (identity + address). Passport or voter ID (alternate identity). Address proof (if Aadhaar address is different). Photograph. KYC types: Full KYC = complete document verification. e-KYC = Aadhaar-OTP based online verification (limited to certain transaction thresholds). Video KYC = live video verification with bank representative. Re-KYC schedule: Low risk = every 10 years. Medium risk = every 8 years. High risk (PEP, high-value) = every 2 years. System behavior when KYC expires = transaction restriction (block new transactions until re-KYC completed).',
    interviewTip: 'Mention PEP (Politically Exposed Persons) — they require Enhanced Due Diligence (EDD) and high-risk KYC category. This shows deeper compliance knowledge.',
    memoryTrick: 'KYC = Identity verification + Risk classification. Re-KYC: Low=10yrs, Medium=8yrs, High=2yrs. Expired KYC = transaction block.',
    realExample: 'Banking FRD: System must display alert 30 days before KYC expiry. If KYC expires and not renewed — block new transactions, allow only enquiry. Display message: "Your KYC has expired. Please visit the branch or complete e-KYC to continue transacting."',
    whyOthersWrong: {
      A: 'KYC stands for Know Your Customer — it is a compliance process, not a loyalty program.',
      C: 'KYC is mandatory for ALL banking customers regardless of channel — digital or branch.',
      D: 'KYC is required for ALL customer types — individual, business, NRI, corporate.'
    },
    isScenario: false
  },
  {
    id: 'bank_3',
    topic: 'Banking Domain',
    difficulty: 'Hard',
    question: 'What is AML? How does a bank detect suspicious transactions?',
    options: {
      A: 'AML stands for Asset Management Lifecycle — a process for managing banking investments.',
      B: 'AML (Anti-Money Laundering) is a regulatory framework to detect criminal financial activity. Banks detect it through: transaction threshold alerts, structuring detection, velocity monitoring, sanction list screening, and pattern analysis — filing STRs with FIU-India when suspicious.',
      C: 'AML is voluntary — banks choose whether to implement AML monitoring.',
      D: 'AML only applies to international transactions — domestic transfers are exempt.'
    },
    answer: 'B',
    explanation: 'AML money laundering stages: Placement (introducing dirty money into the financial system), Layering (moving money to obscure the trail), Integration (dirty money appears legitimate). Detection mechanisms: (1) Transaction threshold alerts — large cash deposits above Rs.10 lakh (or equivalent thresholds). (2) Structuring detection — multiple deposits just below threshold in a rolling window. (3) Velocity monitoring — unusual frequency or pattern of transactions. (4) Sanction list screening — OFAC, UN list, RBI watchlist screening for every transaction. (5) Geographic risk — transactions involving high-risk countries. (6) PEP screening — extra scrutiny for politically exposed persons. When suspicious activity is detected: Alert generated → Compliance team investigates → If confirmed suspicious → STR (Suspicious Transaction Report) filed with FIU-India within prescribed timeframe.',
    interviewTip: 'Show you know the THREE STAGES of money laundering (Placement, Layering, Integration) — not just the definition. And mention the specific reporting body: FIU-India (Financial Intelligence Unit).',
    memoryTrick: 'AML = Placement + Layering + Integration (P-L-I money laundering stages). Detection: Threshold + Structuring + Velocity + Sanctions screening. Report = STR to FIU-India.',
    realExample: 'Banking AML FRD: If customer makes 3 or more cash deposits totaling > Rs.5 lakh within a rolling 24-hour window, system generates an AML alert in the compliance dashboard. Alert includes: customer ID, transaction list, total amount, and risk score. Compliance officer has 48 hours to review and close or escalate to STR.',
    whyOthersWrong: {
      A: 'AML stands for Anti-Money Laundering — not Asset Management Lifecycle.',
      C: 'AML compliance is mandatory for all licensed banks under RBI regulations and international FATF standards.',
      D: 'AML applies to both domestic and international transactions — domestic structuring is one of the most common money laundering techniques.'
    },
    isScenario: true
  },
  {
    id: 'bank_4',
    topic: 'Banking Domain',
    difficulty: 'Medium',
    question: 'What is reconciliation in banking?',
    options: {
      A: 'Reconciliation is the process of settling disputes between customers and bank staff.',
      B: 'Reconciliation is the process of matching internal bank transaction records against external settlement records (RBI, payment networks, correspondent banks) to identify and resolve discrepancies.',
      C: 'Reconciliation is a customer-facing feature that shows account statements.',
      D: 'Reconciliation is a quarterly audit activity done only by the finance department.'
    },
    answer: 'B',
    explanation: 'Banking reconciliation types: (1) NEFT Reconciliation: Bank compares its NEFT transaction log against RBI\'s NEFT settlement report at end of day. Discrepancies (breaks) are investigated. (2) Card Reconciliation: Merchant settlements matched against card network (Visa/Mastercard) reports. (3) Nostro Reconciliation: Bank\'s correspondent bank account records matched against bank\'s internal records. (4) ATM Reconciliation: ATM cash dispensed matched against transaction logs. When a break occurs: Identify the discrepancy → Investigate root cause → Resolve (credit, debit, reversal, or manual journal) → Close the break with approvals. Regulatory requirement: Banks must reconcile daily and report unresolved breaks above thresholds. BA role: Document matching rules, break categories, investigation workflow, escalation thresholds, and reporting requirements.',
    interviewTip: 'Mention NOSTRO accounts — bank accounts maintained with foreign banks for international settlements. "Nostro reconciliation is a daily requirement for banks that process international remittances."',
    memoryTrick: 'Reconciliation = Internal records vs External settlement. Match → Break found → Investigate → Resolve → Report. Daily requirement in banking.',
    realExample: 'Banking FRD reconciliation requirement: End of day NEFT reconciliation job runs at 8 PM. Any break > Rs.10,000 is auto-escalated to Operations Head. Break resolution workflow: Operations team investigates → posts adjustment journal → Senior manager approves → break closed within T+1.',
    whyOthersWrong: {
      A: 'Customer dispute resolution is a separate service management process — reconciliation is about matching financial records.',
      C: 'Account statements are customer-facing — reconciliation is an internal accounting and operations process.',
      D: 'Reconciliation is a DAILY banking operation requirement — not a quarterly audit activity.'
    },
    isScenario: false
  },
  {
    id: 'bank_5',
    topic: 'Banking Domain',
    difficulty: 'Medium',
    question: 'What is a core banking system? Have you worked with one?',
    options: {
      A: 'Core banking is the mobile app used by customers to check their balance.',
      B: 'Core banking system (CBS) is the central software managing all bank operations — accounts, transactions, deposits, loans, customer data — accessible across all branches. Examples: Finacle, BaNCS, Temenos.',
      C: 'Core banking is a government-mandated platform for interbank settlements.',
      D: 'Core banking is the internal HR system used by bank employees.'
    },
    answer: 'B',
    explanation: 'Core Banking System (CBS): Functions: Customer account management, transaction processing, deposits (FD/RD/Savings/Current), loans, general ledger, interest calculation, fee processing. Architecture: Centralized — all branches connect to a single CBS, enabling real-time, cross-branch transactions. Examples: Finacle (Infosys) — used by SBI, many public sector banks. BaNCS (TCS) — used by several private and global banks. Temenos T24 — used internationally. Oracle FLEXCUBE — used by several Indian banks. BA relevance: Banking product BAs often write requirements for features that integrate with or extend the CBS. Understanding what the CBS does vs what the satellite applications do is important for interface requirements.',
    interviewTip: 'Be honest: "I have not directly configured a CBS, but in my VPRM project I worked with a banking client and documented requirements for systems that interface with their CBS. I understand the role of CBS in banking operations and how satellite applications integrate with it."',
    memoryTrick: 'CBS = Central hub of all banking operations. Finacle + BaNCS + Temenos = popular CBS products. All branches connect to one CBS.',
    realExample: 'Vaishnavi\'s VPRM project: Procurement system needed to trigger payment after vendor invoice approval. This required an interface requirement with the bank\'s CBS (Finacle) — documented in FRD as: PR approval triggers payment advice to CBS via SOAP API for fund transfer authorization.',
    whyOthersWrong: {
      A: 'Mobile apps are front-end channels — CBS is the back-end system that mobile apps connect to.',
      C: 'Interbank settlements go through RBI systems (NEFT/RTGS/IMPS) — CBS is the bank\'s internal transaction system.',
      D: 'HR systems are for employee management — CBS manages banking operations and customer accounts.'
    },
    isScenario: false
  },
  {
    id: 'bank_6',
    topic: 'Banking Domain',
    difficulty: 'Easy',
    question: 'What is the difference between a Current Account and a Savings Account?',
    options: {
      A: 'Current accounts are for rich people and savings accounts are for common people.',
      B: 'Savings Account: for individuals, earns interest (3-4% pa), limited monthly withdrawals, minimum balance required. Current Account: for businesses, no interest, unlimited transactions, higher minimum balance, overdraft facility available.',
      C: 'There is no difference — both accounts have the same features and limits.',
      D: 'Current accounts are digital-only and savings accounts are branch-only.'
    },
    answer: 'B',
    explanation: 'Savings vs Current Account: Savings Account: Customer type = Individuals, families. Interest = Yes (typically 3-4% per annum). Withdrawals = Limited (4 free withdrawals per month, varies by bank). Minimum Balance = Rs.1,000 to Rs.25,000 depending on bank and account type. Overdraft = No (or limited). Best for = Salary accounts, emergency funds, personal savings. Current Account: Customer type = Businesses, traders, companies. Interest = No interest on deposits. Withdrawals = Unlimited. Minimum Balance = Higher (Rs.10,000 to Rs.1,00,000). Overdraft = Yes — businesses can overdraw up to an agreed limit. Transaction charges = After a threshold, per-transaction charges apply. As BA: Requirements for each account type differ significantly — savings needs interest calculation logic, current needs overdraft management.',
    interviewTip: 'Connect to BA requirements: "For a savings account module, I would document interest calculation frequency, withdrawal limit counters, and below-minimum-balance fee triggers. For current account, the key requirements are overdraft limit management, unlimited transaction processing, and bulk payment support."',
    memoryTrick: 'Savings = Individual + Interest + Limited withdrawals. Current = Business + No interest + Unlimited transactions + Overdraft.',
    realExample: 'Banking FRD savings account requirement: If withdrawal count exceeds 4 per month, charge Rs.150 per additional withdrawal. System must display remaining free withdrawal count on the account summary screen.',
    whyOthersWrong: {
      A: 'Account type is based on purpose (personal vs business), not wealth level.',
      C: 'They have fundamentally different interest, transaction, and overdraft features.',
      D: 'Both account types are available through all channels — digital and branch.'
    },
    isScenario: false
  },
  {
    id: 'bank_7',
    topic: 'Banking Domain',
    difficulty: 'Easy',
    question: 'What is a beneficiary in a banking transaction?',
    options: {
      A: 'A beneficiary is the bank employee who processes the transaction.',
      B: 'A beneficiary is the person or entity who receives the funds in a transfer. Banks apply a cooling period and transfer limit after adding a new beneficiary to prevent fraud.',
      C: 'A beneficiary is the bank that holds the sender\'s account.',
      D: 'A beneficiary is a nominee specified in a fixed deposit account.'
    },
    answer: 'B',
    explanation: 'Beneficiary in banking: Definition: The recipient of a fund transfer — the person or entity to whose account the money is credited. Beneficiary details required: Name, Account Number, IFSC Code, Bank Name, Account Type. Beneficiary Management workflow: Customer adds beneficiary → OTP/2FA verification → Cooling period applied → Transfer limit restrictions during cooling period → After cooling period: standard transfer limits apply. Fraud prevention: Cooling period = typically 30 minutes to 24 hours. During cooling period = daily transfer limit restricted (e.g., Rs.10,000). Notification = SMS/email sent to account holder when new beneficiary is added. BA requirements: Beneficiary addition form design, OTP workflow, cooling period logic, limit restrictions, edit and delete flows, beneficiary list management.',
    interviewTip: 'Mention the COOLING PERIOD specifically — it shows you understand the fraud prevention logic behind beneficiary management, not just the basic definition.',
    memoryTrick: 'Beneficiary = Who receives the money. Cooling period = Wait time after adding + low transfer limit = fraud prevention. After cooling = normal limits.',
    realExample: 'Banking FRD beneficiary management: After adding a new beneficiary, system restricts transfer to maximum Rs.10,000 for 24 hours. Display countdown timer showing "Full transfer limit available in X hours." After 24 hours, standard daily limit of Rs.5,00,000 applies.',
    whyOthersWrong: {
      A: 'Bank employees process transactions — beneficiaries receive money from transactions.',
      C: 'The sending bank holds the sender\'s account — the beneficiary is the RECEIVING party.',
      D: 'FD nominees receive funds if the account holder passes away — beneficiaries in fund transfers are the intended recipients.'
    },
    isScenario: false
  },

  // ===== SECTION 18: REMITTANCE =====
  {
    id: 'rem_1',
    topic: 'Remittance',
    difficulty: 'Hard',
    question: 'What is remittance? Explain the lifecycle of a remittance transaction.',
    options: {
      A: 'Remittance is a bank overdraft service for businesses with multiple branches.',
      B: 'Remittance is the transfer of money (typically cross-border). Lifecycle: Sender initiates → KYC/AML checks → Debit sender → SWIFT message to correspondent bank → Correspondent routes to beneficiary bank → Credit beneficiary → Notification → Reconciliation.',
      C: 'Remittance is only for NRIs sending money to India — not applicable to domestic transfers.',
      D: 'Remittance is the process of converting foreign currency to Indian Rupees at airport kiosks.'
    },
    answer: 'B',
    explanation: 'Remittance lifecycle: (1) Initiation: Sender provides beneficiary details (name, account, bank, country), amount, purpose code. (2) KYC Check: Verify sender\'s KYC is valid and current. (3) AML Screening: Check sender and beneficiary against sanction lists (OFAC, UN, RBI). Check transaction against AML rules (threshold, purpose code). (4) Debit: Sender\'s account debited. (5) FX Conversion (international): If cross-currency, FX rate applied and confirmed with sender. (6) SWIFT Messaging: MT103 payment message sent to correspondent bank. (7) Correspondent Bank Processing: Routes funds to beneficiary country. (8) Beneficiary Bank: Credits beneficiary account. (9) Notification: SMS/email to both sender and beneficiary confirming transaction. (10) Reconciliation: Match debit record against SWIFT settlement confirmation. As BA: Document requirements for every step.',
    interviewTip: 'Name specific SWIFT message types: MT103 = customer credit transfer (the most common for remittance). This specificity shows real banking domain depth.',
    memoryTrick: 'Remittance lifecycle = Initiate → KYC/AML → Debit → FX → SWIFT MT103 → Correspondent → Credit → Notify → Reconcile.',
    realExample: 'FRD requirement: If SWIFT acknowledgment not received within 2 hours of MT103 dispatch — alert Operations team, do NOT send customer confirmation. If SWIFT confirms failure — initiate reversal within T+1. Send customer notification only after confirmed credit or reversal.',
    whyOthersWrong: {
      A: 'Remittance is fund transfer — overdraft is a credit facility. Completely different products.',
      C: 'Remittance includes both domestic and international transfers — NRI remittances are just one category.',
      D: 'Currency exchange at airports is forex conversion — remittance is a structured fund transfer with banking infrastructure.'
    },
    isScenario: false
  },
  {
    id: 'rem_2',
    topic: 'Remittance',
    difficulty: 'Medium',
    question: 'What is the difference between domestic and international remittance?',
    options: {
      A: 'Domestic remittance requires a passport and international remittance requires only a bank account.',
      B: 'Domestic remittance = within the same country (NEFT/RTGS/IMPS/UPI), faster, simpler compliance. International remittance = cross-border, involves FX conversion, SWIFT, correspondent banks, stricter AML/FEMA compliance, purpose code declaration.',
      C: 'International remittance is faster because it uses satellite systems.',
      D: 'There is no compliance difference — both types have the same regulatory requirements.'
    },
    answer: 'B',
    explanation: 'Domestic vs International Remittance: Domestic (within India): Payment rails = NEFT, RTGS, IMPS, UPI. Speed = Instant to 2 hours. Currency conversion = None. Compliance = Basic KYC, AML screening. Regulatory limit = No limit (large transactions may need AML check). Settlement = Through RBI. International (cross-border): Payment rails = SWIFT network, correspondent banks. Speed = 1-5 business days. Currency conversion = FX rate applied at time of transaction. Compliance = KYC + AML + FEMA (Foreign Exchange Management Act) + Purpose of Remittance Code + Country risk screening. Regulatory limit = Up to USD 2,50,000 per year under LRS (Liberalized Remittance Scheme) for individuals. Settlement = Through correspondent banking network.',
    interviewTip: 'Mention LRS (Liberalized Remittance Scheme) — the RBI regulation that governs how much an Indian individual can remit abroad per year. This shows regulatory awareness specific to Indian banking.',
    memoryTrick: 'Domestic = Same country + NEFT/RTGS/IMPS + Fast + Simple compliance. International = Cross-border + SWIFT + FX + FEMA + Purpose code + Slower.',
    realExample: 'Banking FRD international remittance: Purpose code is mandatory (select from RBI-defined list). System must verify sender\'s cumulative outward remittance does not exceed USD 2,50,000 LRS limit in the financial year. Alert if within 10% of limit.',
    whyOthersWrong: {
      A: 'Passport is not required for domestic transfers. International transfers require purpose code and FEMA compliance, not just a passport.',
      C: 'International remittance is SLOWER — it involves multiple banking intermediaries across countries.',
      D: 'International remittance has significantly stricter compliance (FEMA, SWIFT, correspondent bank AML) than domestic transfers.'
    },
    isScenario: false
  },
  {
    id: 'rem_3',
    topic: 'Remittance',
    difficulty: 'Hard',
    question: 'What is SWIFT? What role does it play in international transfers?',
    options: {
      A: 'SWIFT is a mobile payment app similar to PhonePe used in European countries.',
      B: 'SWIFT (Society for Worldwide Interbank Financial Telecommunication) is a global messaging network that enables banks to securely exchange payment instructions. It does not move money — it sends standardized messages (like MT103 for payments) between banks.',
      C: 'SWIFT is the international equivalent of NEFT — it directly transfers money between banks.',
      D: 'SWIFT is a compliance framework for anti-money laundering reporting.'
    },
    answer: 'B',
    explanation: 'SWIFT in international transfers: What it is: A global secure messaging network. What it does: Enables banks to exchange standardized financial messages — payment instructions, confirmations, statements. What it does NOT do: Move money directly (settlement happens separately). Key identifiers: SWIFT BIC (Bank Identifier Code) — 8 or 11 characters. Structure: AAAA BB CC DDD. AAAA = Bank code. BB = Country code. CC = Location code. DDD = Branch code (optional). Key SWIFT message types for BAs: MT103 = Single customer credit transfer (outward remittance instruction). MT940 = Customer statement (bank sends statement to customer). MT202 = Bank-to-bank payment. BA role: Specify SWIFT integration requirements in FRD — message format, fields required, timeout handling, failure scenarios, and reconciliation with settlement.',
    interviewTip: 'Know the SWIFT BIC structure and MT103 message type specifically — these show you understand what a BA needs to document for SWIFT integration requirements.',
    memoryTrick: 'SWIFT = Messaging network (NOT money mover). MT103 = Remittance payment message. BIC = Bank Identifier Code = 8 or 11 characters.',
    realExample: 'FRD SWIFT integration requirement: On outward remittance approval, system generates MT103 message with fields: {50K sender details, 59 beneficiary details, 32A amount+currency+date, 70 payment purpose}. Send via SWIFT network to correspondent bank. Log MT103 reference for reconciliation.',
    whyOthersWrong: {
      A: 'SWIFT is banking infrastructure — not a consumer mobile payment app.',
      C: 'SWIFT sends instructions — actual money movement happens through correspondent banking relationships.',
      D: 'SWIFT is a messaging network — AML reporting systems are separate compliance tools.'
    },
    isScenario: false
  },
  {
    id: 'rem_4',
    topic: 'Remittance',
    difficulty: 'Hard',
    question: 'What is correspondent banking?',
    options: {
      A: 'Correspondent banking is when a bank writes letters to customers about their account status.',
      B: 'Correspondent banking is a relationship where one bank (correspondent) provides services on behalf of another bank (respondent) in a foreign country — enabling international fund routing without direct presence.',
      C: 'Correspondent banking is the process of banks merging to create a larger financial institution.',
      D: 'Correspondent banking is a credit rating system used for interbank lending.'
    },
    answer: 'B',
    explanation: 'Correspondent banking: Problem it solves: Bank A in India needs to pay a beneficiary at Bank Z in Germany — but Bank A has no presence in Germany. Solution: Bank A has a correspondent relationship with Bank B (a large international bank present in both India and Germany). When Bank A needs to pay to Germany, it sends SWIFT MT103 to Bank B (correspondent) with payment instructions. Bank B routes the payment to Bank Z. Nostro and Vostro accounts: Nostro account = "Our money at your bank" — Bank A\'s account at Bank B (used to fund correspondent payments). Vostro account = "Your money at our bank" — Bank B\'s account at Bank A. BA role: Specify correspondent bank routing logic, Nostro account management requirements, and reconciliation of Nostro balances in FRD.',
    interviewTip: 'Know the NOSTRO/VOSTRO distinction — interviewers frequently test this. "Nostro is our account at a foreign bank (our money abroad). Vostro is a foreign bank\'s account at our bank (their money here)."',
    memoryTrick: 'Correspondent banking = Routing international payments through an intermediary bank. Nostro = OUR account ABROAD. Vostro = THEIR account HERE.',
    realExample: 'Banking FRD: Outward remittance to USA routes through HDFC Bank\'s correspondent (JPMorgan Chase, New York). FRD specifies: system selects correspondent bank based on destination currency and country. Nostro account at JPMorgan Chase is debited. MT103 sent to JPMorgan. JPMorgan routes to beneficiary\'s US bank.',
    whyOthersWrong: {
      A: 'Customer communication is a banking service channel — correspondent banking is an interbank settlement mechanism.',
      C: 'Bank mergers are corporate transactions — correspondent banking is a service relationship for payments.',
      D: 'Credit rating is a separate financial assessment activity — correspondent banking is about payment routing infrastructure.'
    },
    isScenario: false
  },
  {
    id: 'rem_5',
    topic: 'Remittance',
    difficulty: 'Medium',
    question: 'What is the role of a BA in a remittance project?',
    options: {
      A: 'The BA manually processes remittance transactions when the system is down.',
      B: 'The BA gathers and documents requirements for the full remittance transaction lifecycle — sender onboarding, beneficiary management, transaction initiation, FX, compliance checks, SWIFT integration, tracking, notifications, and reconciliation.',
      C: 'The BA only documents the UI screens — technical remittance flows are the architect\'s responsibility.',
      D: 'The BA monitors SWIFT network traffic to ensure messages are delivered.'
    },
    answer: 'B',
    explanation: 'BA role in a remittance project covers ALL phases: (1) Sender Onboarding — KYC requirements, document checklist, e-KYC workflow. (2) Beneficiary Management — add/edit/delete beneficiary, verification, cooling period. (3) Transaction Initiation — form fields, purpose code selection, FX rate display, confirmation screen. (4) Compliance Requirements — AML rules, LRS limit check, sanction screening workflow. (5) SWIFT Integration — MT103 message fields, routing logic, timeout handling. (6) Transaction Tracking — status updates, SWIFT acknowledgment processing. (7) Notifications — sender and beneficiary notification at each status change. (8) Reconciliation — matching SWIFT confirmations against internal records, break investigation workflow. (9) Reporting — regulatory reports for FEMA compliance.',
    interviewTip: 'Show BREADTH — the BA role in remittance is not just UI requirements. "From KYC onboarding through SWIFT integration to reconciliation reporting — I would own requirements documentation for the entire remittance transaction lifecycle."',
    memoryTrick: 'Remittance BA role = Onboarding + Beneficiary + Transaction + Compliance + SWIFT + Tracking + Notification + Reconciliation + Reporting. End to end.',
    realExample: 'Vaishnavi\'s target: For the Brraysoft remittance project, she would document requirements across: KYC onboarding screens, beneficiary addition workflow, transaction form with purpose codes, LRS limit check business rule, SWIFT MT103 field mapping, status notification templates, and end-of-day reconciliation workflow.',
    whyOthersWrong: {
      A: 'Manual transaction processing is an operations function — not a BA role.',
      C: 'BAs own requirements for ALL aspects of the system — including technical integration requirements specified in business terms.',
      D: 'SWIFT network monitoring is an IT/operations function — not a BA function.'
    },
    isScenario: false
  },
  {
    id: 'rem_6',
    topic: 'Remittance',
    difficulty: 'Hard',
    question: 'What compliance checks apply to remittance transactions?',
    options: {
      A: 'Only KYC verification is needed — no other compliance checks apply to remittance.',
      B: 'Remittance compliance includes: KYC validity, AML/sanction list screening, purpose of remittance code declaration, FEMA compliance (LRS limit for individuals), country risk assessment, and PEP screening.',
      C: 'Compliance checks are only needed for international remittances above Rs.10 lakh.',
      D: 'Banks self-regulate compliance — there are no mandatory external reporting requirements.'
    },
    answer: 'B',
    explanation: 'Remittance compliance requirements: (1) KYC Verification: Sender\'s KYC must be current and not expired. (2) AML Screening: Transaction amount, pattern, and frequency checked against AML rules. Structuring detection for multiple remittances. (3) Sanction List Screening: Sender and beneficiary checked against: OFAC (US Office of Foreign Assets Control), UN Consolidated Sanctions List, RBI watchlist, EU sanctions. (4) Purpose of Remittance Code: RBI-defined codes. Must match the nature of payment (education, medical, family maintenance, etc.). Mandatory for outward remittance. (5) FEMA Compliance: For individuals, verify LRS limit (USD 2,50,000 per financial year). (6) Country Risk: High-risk countries trigger enhanced due diligence. (7) PEP Screening: Politically Exposed Persons require enhanced scrutiny. (8) STR Filing: Suspicious transactions reported to FIU-India.',
    interviewTip: 'Mention OFAC screening specifically — it is the most internationally recognized sanction list and shows you understand cross-border compliance requirements.',
    memoryTrick: 'Remittance compliance = KYC + AML + OFAC/UN/RBI sanctions + Purpose code + FEMA/LRS + Country risk + PEP + STR reporting if suspicious.',
    realExample: 'Banking FRD compliance requirement: Before processing outward remittance — Step 1: Check sender KYC expiry. Step 2: Screen sender and beneficiary against OFAC + UN + RBI lists (real-time API). Step 3: Verify purpose code is valid for transaction type. Step 4: Check sender\'s YTD outward remittance does not exceed LRS limit. Fail at any step = transaction blocked + alert generated.',
    whyOthersWrong: {
      A: 'Multiple compliance layers apply — KYC alone is insufficient for remittance compliance.',
      C: 'Compliance applies to ALL remittances regardless of amount — lower amounts may even be higher risk (structuring).',
      D: 'RBI, FEMA, FIU-India reporting are mandatory regulatory requirements — self-regulation is not sufficient.'
    },
    isScenario: true
  },

  // ===== SECTION 19: SCENARIO-BASED =====
  {
    id: 'scen_1',
    topic: 'Scenario-Based',
    difficulty: 'Hard',
    question: 'A developer says the requirement you wrote is unclear. What do you do?',
    options: {
      A: 'Tell the developer to figure it out based on their technical judgment.',
      B: 'Ask the developer exactly which part is ambiguous, clarify the intended behavior, update the FRD with specific language, add an example if needed, and recirculate to all parties.',
      C: 'Escalate to the project manager that the developer is not reading the requirements carefully.',
      D: 'Leave the requirement as is and wait for QA to flag the issue during testing.'
    },
    answer: 'B',
    explanation: 'When a developer flags ambiguity: (1) Do NOT get defensive — if it is unclear to the developer, it needs to be fixed regardless. (2) Ask specifically: "Show me exactly which part is ambiguous." Get them to tell you their interpretation. (3) Clarify the intended behavior clearly. (4) Document the clarification immediately — update the FRD section with more specific language. Add a concrete example if the behavior is complex. (5) Recirculate the updated FRD section to all stakeholders for awareness. (6) Use as a learning opportunity — check if similar ambiguity exists in related requirements and proactively clarify. Principle: Clarity in requirements is the BA\'s responsibility. Own the fix completely without defensiveness.',
    interviewTip: 'Show OWNERSHIP — "If a developer finds my requirement unclear, the requirement is unclear. I take responsibility and fix it immediately." No defensiveness, no passing blame.',
    memoryTrick: 'Developer says unclear → Ask specifically what is ambiguous → Clarify → Update FRD with specific language + example → Recirculate. Own it completely.',
    realExample: 'VPRM: Developer said approval routing requirement was unclear for amounts exactly at the Rs.50,000 threshold. Vaishnavi clarified: amounts exactly equal to Rs.50,000 follow Level 1 only (using >= comparison for Level 2 trigger). Updated FRD with: "Level 2 triggered when amount > Rs.50,000 (strictly greater than, not equal to)." Also added example: Rs.50,000 = Level 1 only. Rs.50,001 = Level 1 then Level 2.',
    whyOthersWrong: {
      A: 'Developer judgment produces technically-driven, not business-driven solutions — requirements clarity is the BA\'s job.',
      C: 'Escalating a requirement clarification to the PM is an overreaction — this is a normal BA-developer collaboration.',
      D: 'Waiting for QA to find the issue means the developer will build something — either incorrect or blocked.'
    },
    isScenario: true
  }
