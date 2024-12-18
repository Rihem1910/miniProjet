pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'rihem761/miniProjet'  
    }

    stages {
        stage('clone code') {
            steps {
                git 'https://github.com/Rihem1910/miniProjet'
            }
        }
        stage('build') {
            steps {
                script {
                  docker.build("${DOCKER_IMAGE}:version1")
                }
            }
        }

        stage('push') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-login') {
                        docker.image("${DOCKER_IMAGE}:version1").push()
                    }
                }
            }
        }
    stage('deploy') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-login') {
                        def docker_image = docker.image("${DOCKER_IMAGE}:version1")
                        docker_image.run('--name miniProjet -p 8090:8090')
                    }
                }
            }
        }
    }
 
}
