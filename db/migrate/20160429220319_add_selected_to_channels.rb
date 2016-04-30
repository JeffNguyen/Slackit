class AddSelectedToChannels < ActiveRecord::Migration
  def change
    add_column :channels, :selected, :string, null: false
  end
end
