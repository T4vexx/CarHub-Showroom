"use client"
import { useState } from "react"
import Image from "next/image"
import SearchManufacturer from "./SearchManufacturer"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)


const SearchBar = ({ setManufacturer, setModel } : {setManufacturer: (search: string) => void, setModel: (search: string) => void}) => {
  const [searchManufacturer, setsearchManufacturer] = useState('')
  const [searchModel, setsearchModel] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(searchManufacturer === '' && searchModel === '') {
      return alert("Please fill in the search bar")
    }

    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
          selected={searchManufacturer}
          setSelected={setsearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image 
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="searchModel car"
        />
        <input 
          type="text"
          name="searchModel"
          value={searchModel}
          onChange={(e) => setsearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar