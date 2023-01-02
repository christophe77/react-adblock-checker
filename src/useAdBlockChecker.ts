import { useState, useEffect } from 'react'

interface IUseAdBlockChecker {
  isAdBlockActive: boolean
}

const useAdBlockChecker = (): IUseAdBlockChecker => {
  const [isAdBlockActive, setIsAdBlockActive] = useState<boolean>(false)

  useEffect(() => {
    const checkAdBlock: () => void = async () => {
      const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      try {
        await fetch(new Request(googleAdUrl)).catch(() => setIsAdBlockActive(true))
      } catch {
        setIsAdBlockActive(true)
      }
    }
    checkAdBlock()
  }, [])

  return { isAdBlockActive }
}

export default useAdBlockChecker
