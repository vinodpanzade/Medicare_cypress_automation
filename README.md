# 🏥 MediCare — Healthcare Test Automation Framework

> **Smarter Testing. Reliable Appointments. Better Healthcare Experiences.**

An end-to-end web automation project built with **Cypress, Cucumber (Gherkin), Page Object Model (POM), and Jenkins** to validate the functionality of a healthcare appointment booking application.

🔗 **Application Under Test:** [MediCare QA Demo](https://jstestingacademy.co.in/qa-apps/medicare/index.html)

## ✨ Key Features

- 🔍 **Doctor Search & Filtering** — Validate specialities, consultation fees, experience filters, and ratings.
- 📅 **Appointment Booking** — Test doctor selection, available slots, and successful appointment confirmation.
- 🧪 **Form Validation** — Verify required fields, age boundaries, mobile number validation, and symptom descriptions.
- 👥 **Multiple Patient Bookings** — Submit appointments using fixture-driven patient data.
- 🔄 **Appointment Management** — Validate appointment status and cancellation workflows.
- 🩺 **Doctor Data Extraction** — Extract doctor details and store them in JSON fixtures.
- 🏠 **Home Page Validation** — Check navigation, search, branches, banners, and speciality links.
- 📄 **Lab Report Search** — Validate report search functionality and matching results.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Cypress | End-to-end test automation |
| JavaScript | Test logic and assertions |
| Cucumber / Gherkin | Readable, behavior-driven scenarios |
| Page Object Model | Reusable page-specific methods |
| JSON Fixtures | External test data management |
| Custom Commands | Reusable booking workflows |
| Jenkins | CI/CD pipeline experiments |
| Git & GitHub | Source control and integration |
| ngrok | Exposing the local Jenkins server for webhook experiments |

## 🏗️ Framework Architecture

```text
cypress/
├── e2e/
│   ├── Features/
│   │   ├── Appointments.feature
│   │   ├── BookingFormValidation.feature
│   │   ├── DoctorAnalysis.feature
│   │   ├── DoctorSearch.feature
│   │   ├── MultipleFormSubmission.feature
│   │   ├── HomePage.feature
│   │   └── Slots.feature
│   │
│   └── step_definitions/
│       ├── appointments.steps.js
│       ├── booking-form.steps.js
│       ├── doctor-extract.steps.js
│       ├── doctor-search.steps.js
│       ├── multiple-booking.steps.js
│       ├── home-page.steps.js
│       └── slots.steps.js
│
├── Pages/
│   ├── Appoinments_Page.js
│   ├── Bookingform_Page.js
│   ├── Doctor_extract.js
│   ├── Doctor_search_Page.js
│   ├── Home_Page.js
│   └── Slots_Page.js
│
├── fixtures/
│   ├── doctorDetails.json
│   ├── Patient.json
│   └── Sameuser.json
│
└── support/
    └── commands.js
```

*The structure above illustrates the intended organization; filenames may need to be adjusted to match the actual project.*

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

**2. Install dependencies**

```bash
npm ci
```

**3. Run Cypress interactively**

```bash
npx cypress open
```

**4. Execute tests in headless mode**

```bash
npx cypress run
```

## ⚙️ CI/CD — Jenkins Integration

One of the most valuable parts of this project was experimenting with different approaches to automate test execution through Jenkins.

### 🔹 Approaches Explored

- **Jenkins Pipeline:** Created a pipeline using a Jenkinsfile or pipeline script to install dependencies and execute Cypress feature tests.
- **Poll SCM:** Explored scheduled source-control polling to detect repository changes.
- **GitSCM Polling:** Configured Jenkins source-control polling and investigated its triggering behavior.
- **GitHub Webhooks with ngrok:** Experimented with exposing the local Jenkins server through ngrok to connect GitHub webhook events to Jenkins.
- **Targeted Test Execution:** Configured the pipeline to execute a specific Cucumber feature instead of running the entire suite.

### Example Jenkins Pipeline

```groovy
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Doctor Search Tests') {
            steps {
                bat 'npx cypress run --spec "cypress/e2e/Features/doctor-search.feature"'
            }
        }
    }

    post {
        always {
            echo 'Cypress pipeline execution complete'
        }
    }
}
```

**CI/CD learning goal:** Understand how source-code changes can trigger automated tests and how Jenkins can execute Cypress tests as part of a repeatable testing workflow.

*Note: Pipeline execution, GitHub webhook delivery, and automatic SCM triggers depend on the actual Jenkins and GitHub configuration. The approaches above describe the integration methods explored, not a claim that every trigger is currently working.*

## 🧠 What I Learned

- Writing readable, behavior-driven test scenarios using Gherkin.
- Designing maintainable tests with the Page Object Model.
- Creating reusable Cypress custom commands.
- Using fixtures to drive data-based appointment booking tests.
- Validating dynamic lists, filtering, sorting, and form errors.
- Extracting UI data and saving it as JSON.
- Exploring Jenkins pipelines, SCM polling, and GitHub webhook integration using ngrok.

## 🎯 Project Goal

Build a maintainable and reusable test automation framework that combines **functional testing, data-driven testing, and CI/CD experimentation** into one practical healthcare application testing project.

---

### 👨‍💻 Author

**Vinod Panzade**

*QA Automation | Cypress | JavaScript | Cucumber | Jenkins*

> *Testing is not just about finding bugs. It's about building confidence in every release.*
