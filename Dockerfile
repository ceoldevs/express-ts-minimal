FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# where available (npm@5+)
COPY package.json yarn.lock ./

# if you are building code for development
# RUN yarn install
# If you are building your code for production
RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .

# If you are building your code for production
RUN yarn build

# Change port number based on the .env file configured
EXPOSE 4000
# if you are building code for development
# CMD [ "yarn", "dev" ]
# If you are building your code for production
CMD [ "yarn", "start" ]

