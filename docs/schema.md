# Schema Information

## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
message_id  | integer   | not null, foreign key (references messages), indexed

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
channel_id  | integer   | not null
username    | string    | not null
text        | string    | not null 

## users
column name       | data type | details
----------------  |-----------|-----------------------
id                | integer   | not null, primary key
email             | string    | not null, indexed, unique
encrypted_password| string    | not null
session_token     | string    | not null, indexed, unique
