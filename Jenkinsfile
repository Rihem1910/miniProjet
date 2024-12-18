pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'rihem761/mini-projet'  
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
                    bash 'docker context use desktop-linux'

                  docker.build("${DOCKER_IMAGE}:version1")
                }
            }
        }

        stage('push') {
            steps {
                script {
                    bash 'docker context use desktop-linux'
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("${DOCKER_IMAGE}:version1").push()
                    }
                }
            }
        }
    stage('deploy') {
            steps {
                script {
                    bash 'docker context use desktop-linux'
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        def docker_image = docker.image("${DOCKER_IMAGE}:version1")
                        docker_image.run('--name miniProjet -p 8090:8090')
                    }
                }
            }
        }
    }
 
}
