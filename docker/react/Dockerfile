# pull official base image
# FROM node:13.12.0
FROM node:17.6.0

# set working directory
WORKDIR /CODE/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /.CODE/frontend/node_modules/.bin:$PATH
RUN cd /CODE/frontend

# install app dependencies
RUN npm install
#RUN npm install react-scripts@3.4.1 -g --silent

# start app
CMD ["npm", "start"]

expose 3000