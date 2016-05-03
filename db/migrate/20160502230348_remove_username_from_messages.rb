class RemoveUsernameFromMessages < ActiveRecord::Migration
  def change
    remove_column :messages, :username, :string, null: false
  end
end
