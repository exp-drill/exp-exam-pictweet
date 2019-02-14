class CreateTweetTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tweet_tags do |t|
      t.references :tweet, index: true, foreign_key: true
      t.references :tag, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
