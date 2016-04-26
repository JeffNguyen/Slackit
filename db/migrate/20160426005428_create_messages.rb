class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :username, null: false
      t.text :text, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
