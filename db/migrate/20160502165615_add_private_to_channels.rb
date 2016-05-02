class AddPrivateToChannels < ActiveRecord::Migration
  def change
    add_column :channels, :public, :boolean, null: false
    add_column :channels, :message, :boolean, null: false
    remove_column :channels, :selected, :string, null: false
  end
end
