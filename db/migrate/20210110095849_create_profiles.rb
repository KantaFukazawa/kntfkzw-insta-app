class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :users, :image_name
      t.timestamps
    end
  end
end
