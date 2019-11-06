# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null: false|
|email|string|null: false|
|password|string|null: false|
|users_groups_id|integer|null: false, foreign_key:true|
### Association
-has_many :users_groups
- has_many :group, through:  :users_groups

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|users_groups_id|integer|null: false, foreign_key:true|

### Association
- has_many :users_groups
- belongs_to :user,  through:  :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key:true|
|group_id|integer|null: false, foreign_key:true|
### Association
- belongs_to :user
- belongs_to :group

