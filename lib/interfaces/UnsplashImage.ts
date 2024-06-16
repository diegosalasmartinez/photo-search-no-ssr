export interface UnsplashImageList {
  total: number
  total_pages: number
  results: UnsplashImage[]
}

export interface UnsplashImage {
  id: string
  slug: string
  created_at: string
  updated_at: string
  width: number
  height: number
  description: string
  alt_description: string
  urls: UnsplashUrls
  user: UnsplashUser
  tags: UnspashTag[]
}

export interface UnsplashUrls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface UnsplashUser {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
}

export interface UnspashTag {
  type: string
  title: string
}
