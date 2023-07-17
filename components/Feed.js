'use client'
import { useState, useEffect } from "react"

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" placeholder="Search for a tag or username"
          value={searchText}
          onChange={(e) => { setSearchText(e.target.value) }}
          required
          className="search_input peer"
        />
      </form>

    </section>
  )
}

export default Feed