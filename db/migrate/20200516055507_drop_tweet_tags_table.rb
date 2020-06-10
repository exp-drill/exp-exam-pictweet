class DropTweetTagsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :tweet_tags
  end
end
