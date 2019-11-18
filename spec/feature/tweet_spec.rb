# require "rails_helper"

# feature "tweet", type: :feature do
#   let(:user) { create(:user) }

#   scenario "post tweet" do
#     # ログイン前には投稿ボタンがない
#     visit root_path
#     expect(page).to have_no_content("投稿する")

#     # ログイン処理
#     visit new_user_session_path
#     fill_on "user_emai", with: user.email
#     fill_in "user_password", with: user.password
#     find("input[name="commit"]").click
#     expect(current_path).to eq root_path
#     expect(page).to have_content("投稿する")

#     # ツイートの投稿
#     expect {
#       click_link("投稿する")
#       expect(current_path).to eq new_tweet_path
#       fill_in "tweet[image]", with:
#     }
#   end
# end