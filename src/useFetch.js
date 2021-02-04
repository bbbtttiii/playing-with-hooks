// a pattern for fetching from an api + using state to show loading

import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [state, setState] = useState({ state: null, loading: false })

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }))
    fetch(url)
    .then(res => res.text())
    .then(print => {
      setState({ data: print, loading: false })
    })
  }, [url, setState])

  return state

}