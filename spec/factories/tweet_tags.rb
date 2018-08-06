# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :tweet_tag do
    tweet nil
    tag nil
  end
end
