import react from 'react'
import img from '../../assets/searchIcon.png'
import './index.global.css'
import $ from 'jquery'
export const SearchButton = ({children}) => {
  function ToggleSeach () {
    $('.SearchContent').toggleClass("OpenContent")
    $('.SearchClickArea').toggleClass("OpenContent")
  }
  function ToggleSeachDiv () {
    $('.SearchContent').removeClass("OpenContent")
    $('.SearchClickArea').removeClass("OpenContent")
  }
  return (
    <>
      <button onClick={() => ToggleSeach()} className="toggleButton">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4208 21.75L12.476 13.8052C11.8719 14.3288 11.167 14.7366 10.3615 15.0286C9.5559 15.3207 8.7 15.4667 7.79375 15.4667C5.61875 15.4667 3.77604 14.7115 2.26562 13.201C0.755208 11.6906 0 9.86806 0 7.73333C0 5.59861 0.755208 3.77604 2.26562 2.26562C3.77604 0.755208 5.60868 0 7.76354 0C9.89826 0 11.7158 0.755208 13.2161 2.26562C14.7165 3.77604 15.4667 5.59861 15.4667 7.73333C15.4667 8.59931 15.3257 9.43507 15.0437 10.2406C14.7618 11.0462 14.3389 11.8014 13.775 12.5063L21.75 20.4208L20.4208 21.75ZM7.76354 13.6542C9.39479 13.6542 10.7844 13.0752 11.9323 11.9172C13.0802 10.7592 13.6542 9.36458 13.6542 7.73333C13.6542 6.10208 13.0802 4.70747 11.9323 3.54948C10.7844 2.39149 9.39479 1.8125 7.76354 1.8125C6.11215 1.8125 4.70747 2.39149 3.54948 3.54948C2.39149 4.70747 1.8125 6.10208 1.8125 7.73333C1.8125 9.36458 2.39149 10.7592 3.54948 11.9172C4.70747 13.0752 6.11215 13.6542 7.76354 13.6542Z" fill="#0046C0" />
        </svg>
      </button>
      <div className='SearchClickArea' onClick={() => ToggleSeachDiv()}></div>
      <div className="SearchContent">
        {children}
      </div>
    </>
  )
}

