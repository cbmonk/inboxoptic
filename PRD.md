Product Requirements Document (PRD)
Project Name: InboxOptic
Version: 1.0
Date: 8 Jan 2025

1. Executive Summary

The project is a beginner-friendly, elegant web application designed to help users manage their email subscriptions efficiently. It starts with dummy data integration and later supports live Gmail, Yahoo, Hotmail, and other email providers.

2. Goals and Objectives
	•	Develop a simple, intuitive UI that is easy for beginners to understand and modify.
	•	Create a prototype with simulated data as a stepping stone to real email provider integration.
	•	Ensure an efficient and beginner-friendly development process with clear guidance.

3. Target Audience
	•	Email users looking to declutter their inboxes.
	•	Developers wanting to explore how to build similar tools with modern frameworks.

4. Key Features

4.1 Landing Page
	•	Minimalistic UI with clear action prompts.

4.2 Email Scanning Simulation
	•	Simulated scanning of dummy email data with a progress animation.

4.3 Subscriptions Management
	•	Display identified subscriptions in a clean, card-based layout.
	•	Unsubscribe action updates the card status to “Unsubscribed.”

5. Technical Requirements

5.1 Frontend
	•	Framework: React.js.
	•	Design Framework: Basic Tailwind CSS for simplicity and scalability.
	•	State Management: React Context API (simpler than Redux for beginners).
	•	Components: Break down into reusable, modular files (e.g., LandingPage.jsx, SubscriptionCard.jsx).

5.2 Backend (Future Plan)
	•	Node.js with Express for handling server-side logic.
	•	Gmail API (OAuth2) integration for live email scanning.
	•	Privacy-first approach—no data storage.

5.3 Testing Framework
	•	Cypress for end-to-end testing (click actions, animations, etc.).
	•	Jest for unit testing core components (e.g., button functionality).
	•	Include a script to quickly set up and run tests with dummy data.

5.4 Deployment
	•	Start with a local deployment using npm.
	•	Guide for deploying to Vercel or Netlify in future iterations.

6. User Flow
	1.	User opens the web app.
	2.	Clicks “Scan Inbox” to simulate email scanning.
	3.	Views a list of subscriptions with “Unsubscribe” options.
	4.	Interacts with cards to unsubscribe and sees status updates.

7. Development Roadmap

Phase 1 (1 Week):
	•	Set up React app with Tailwind CSS.
	•	Design landing page and basic components.

Phase 2 (1 Week):
	•	Integrate dummy data for subscriptions.
	•	Add progress animation and interactive cards.

Phase 3 (1 Week):
	•	Implement testing scripts (e.g., Cypress for UI tests).
	•	Refine animations and feedback loops.

Phase 4 (1 Week):
	•	Test the entire app and fix bugs.
	•	Finalize for local deployment.

8. Testing Plan

Manual Testing:
	•	Use dummy data to simulate various use cases (e.g., empty subscriptions, successful unsubscribe).
	•	Run the app in different browsers and screen sizes.

Automated Testing:
Write Test Scenarios:
	Simulate clicking “Scan Inbox.”
	Verify that dummy subscription data appears correctly.
	Test the “Unsubscribe” button functionality.
Include setup scripts to run tests locally.