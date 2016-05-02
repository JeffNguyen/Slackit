class CreateJoinTableChannel < ActiveRecord::Migration
  def change
    create_table :channel_users do |t|
      t.integer :channel_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end

    add_index :channel_users, :channel_id
    add_index :channel_users, :user_id
  end
end
