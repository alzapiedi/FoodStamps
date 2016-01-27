# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160127222113) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer "followee_id", null: false
    t.integer "follower_id", null: false
  end

  add_index "follows", ["followee_id"], name: "index_follows_on_followee_id", using: :btree
  add_index "follows", ["follower_id", "followee_id"], name: "index_follows_on_follower_id_and_followee_id", unique: true, using: :btree
  add_index "follows", ["follower_id"], name: "index_follows_on_follower_id", using: :btree

  create_table "stamps", force: :cascade do |t|
    t.text     "body",               null: false
    t.integer  "user_id",            null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "stamps", ["user_id"], name: "index_stamps_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "username",        null: false
    t.string "password_digest", null: false
    t.string "session_token",   null: false
  end

end
