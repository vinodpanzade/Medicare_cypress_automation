pipeline{
    agent any

    stages{

        stage("install dependacies"){
            steps{
                bat 'npm ci'
            }
        }

        stage("run doctor search"){
            steps{
                bat 'npx cypress run --spec "cypress/e2e/Features/doctor-search.feature"'
            }
        }

    }

    post{
        always{
            echo "Cypress pipeline project execution complete"
        }
    }
}