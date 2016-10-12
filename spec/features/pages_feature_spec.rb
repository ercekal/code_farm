require 'rails_helper'

feature 'Pages' do
  context 'Homepage' do
    scenario 'visit the home page' do
      visit '/'
      expect(page).to have_content "Welcome to Code Farm"
    end
  end

  context 'Welcome' do
    scenario 'visit the welcome page' do
      visit '/'
      click_link 'Intro - strings'
      expect(current_path).to eq pages_welcome_path
      expect(page).to have_content "Enter your name in the box below"
    end
  end

  context 'Page 1' do
    scenario 'visit the first variables page' do
      visit '/'
      click_link 'Chapter 1 - variables'
      expect(current_path).to eq pages_page1_path
      expect(page).to have_content "Try changing the width!"
    end
  end

  context 'Page 2' do
    scenario 'visit the second variables page' do
      visit '/'
      click_link 'Chapter 2 - variables continued'
      expect(current_path).to eq pages_page2_path
      expect(page).to have_content "Change Chicken Speed!"
    end
  end

  context 'Page 3' do
    scenario 'visit the arrays page' do
      visit '/'
      click_link 'Chapter 3 - arrays'
      expect(current_path).to eq pages_page3_path
      expect(page).to have_content "Arrays"
    end
  end

  context 'Page 4' do
    scenario 'visit the logic page' do
      visit '/'
      click_link 'Chapter 4 - logic'
      expect(current_path).to eq pages_page4_path
      expect(page).to have_content "Logic"
    end
  end
end
