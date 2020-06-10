class AddTweetsToTitle < ActiveRecord::Migration[5.2]
  def change
    add_reference :tweets, :tag, foreign_key: true
  end
end
