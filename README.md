# uofl-aws-cadsystem-frontend
Frontend code for CAD system development in AWS

# Build the docker image, locally
docker buildx build . --rm --platform=linux/amd64 -t cadsystemfront:v0

# Run the docker image, locally
docker run --rm --hostname 0.0.0.0 -p 3000:3000 --name=cadsystemfront cadsystemfront:v0

# Create AWS Tag for our docker image
docker tag cadsystemfront:v0 876837268136.dkr.ecr.us-east-2.amazonaws.com/cadsystemfront:v0

# Build, Tag and Push docker image to AWS ECR
docker buildx build . --rm --platform=linux/amd64 -t cadsystemfront:v0 && docker tag cadsystemfront:v0 876837268136.dkr.ecr.us-east-2.amazonaws.com/cadsystemfront:v0 && docker push 876837268136.dkr.ecr.us-east-2.amazonaws.com/cadsystemfront:v0