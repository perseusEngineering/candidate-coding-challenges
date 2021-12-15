# Challenge - Dashboard

You are provided with 3 files:

- [users.json](./users.json) - File with fake user data
- [courses.json](./courses.json) - File with courses data
- [certificates.json](./certificates.json) - File with data about which users completed which courses and when they started/finished

## Specs

Given the data you are provided with, we would like you to build:

- A script that loads all 3 data sources and can generate a report of:
  - average complete time of a course
  - average amount of users time spent in a course
  - average amount of users time spent for each course individually
  - report of fastest vs. slowest users completing a course
  - amount of certificates per customer
- the aggregated data is stored in a database
- the report can be generated in different outputs: html, csv, json

## Bonus points

- your solution does run in a local docker(-compose) setup
- you provide a possibility to visualize the data in a ui tool with graphs
- you provide addtional possibilities of analyzing the data (e.g. which times users start mostly, most frequent used courses, etc.)
