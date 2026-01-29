pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/yourusername/devops-app.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t yourdockerhub/devops-app .'
      }
    }
    stage('Push Image') {
      steps {
        sh 'docker push yourdockerhub/devops-app'
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}

