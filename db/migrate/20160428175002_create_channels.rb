class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.timestamps null: false
    end

    add_column :messages, :channel_id, :integer
    add_index :messages, :user_id
    add_index :messages, :channel_id
  end
end
