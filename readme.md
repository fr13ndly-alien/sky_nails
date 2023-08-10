# Build image:
- Cd to repo's folder
- Run `docker build -t sky-nails .`
- To run the image, run command: `docker run -d -p 80:80 sky-nails`
# Push:
Run these commands:
```
docker login -u <username> -p <password>
docker tag sky-nails:latest henrylee777/sky_nails:latest
docker push henrylee777/sky_nails:latest
```

# Deploy:
- SSH into host
- CD 