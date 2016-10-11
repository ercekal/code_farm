require 'rails_helper'

feature 'game' do
  context 'Homepage' do

    scenario 'visit the home page' do
      visit '/games'
      expect(page).to have_content "Code Farm"
    end
  end
end
