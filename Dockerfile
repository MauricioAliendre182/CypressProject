FROM cypress/base:16

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install --legacy-peer-deps

# Intall newly the libraries that we need in case of problems
# This is to replace the the preprocessor of the webpack
RUN npm install --save-dev @babel/core @babel/preset-env babel-loader webpack

# Intall again cypress (this is for security)
RUN npm install --save-dev cypress@12.14.0

# Command to verify that Cypress has runned correctly
RUN $(npm bin)/cypress verify

CMD ["npm", "run", "cucumber:tags:report"]