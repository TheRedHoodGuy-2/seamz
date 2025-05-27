"use client"

import { useState, useEffect } from "react"

const AVATAR_STYLES = [
  "adventurer",
  "avataaars",
  "big-ears",
  "big-smile",
  "croodles",
  "fun-emoji",
  "icons",
  "identicon",
  "initials",
  "lorelei",
  "micah",
  "miniavs",
  "open-peeps",
  "personas",
  "pixel-art",
]

export function useAvatar(userId?: string) {
  const [avatarUrl, setAvatarUrl] = useState<string>("")
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    // Check if user has custom avatar in localStorage
    const customAvatar = localStorage.getItem(`avatar-${userId || "default"}`)
    if (customAvatar) {
      setAvatarUrl(customAvatar)
    } else {
      // Generate random avatar using DiceBear API
      const randomStyle = AVATAR_STYLES[Math.floor(Math.random() * AVATAR_STYLES.length)]
      const seed = userId || "default-user"
      setAvatarUrl(`https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${seed}`)
    }
  }, [userId])

  const uploadAvatar = async (file: File) => {
    setIsUploading(true)
    try {
      // Convert file to base64 for localStorage (in real app, upload to server)
      const reader = new FileReader()
      reader.onload = (e) => {
        const base64 = e.target?.result as string
        localStorage.setItem(`avatar-${userId || "default"}`, base64)
        setAvatarUrl(base64)
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error("Error uploading avatar:", error)
      setIsUploading(false)
    }
  }

  const generateNewAvatar = () => {
    const randomStyle = AVATAR_STYLES[Math.floor(Math.random() * AVATAR_STYLES.length)]
    const randomSeed = Math.random().toString(36).substring(7)
    const newAvatarUrl = `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${randomSeed}`
    setAvatarUrl(newAvatarUrl)
    localStorage.setItem(`avatar-${userId || "default"}`, newAvatarUrl)
  }

  return {
    avatarUrl,
    isUploading,
    uploadAvatar,
    generateNewAvatar,
  }
}
