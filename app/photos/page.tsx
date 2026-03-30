'use client'

import { useState } from 'react'

export default function Photos() {
  const [imageUrl, setImageUrl] = useState('')
  const [enhancedUrl, setEnhancedUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEnhance = async () => {
    if (!imageUrl) return
    setLoading(true)
    try {
      const res = await fetch('/api/enhance-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl })
      })
      const data = await res.json()
      setEnhancedUrl(data.enhancedUrl)
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Estate<span className="text-green-500">AI</span></h1>
        <a href="/dashboard" className="text-sm text-gray-500 hover:text-gray-900">Back to Dashboard</a>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Photo Enhancer</h2>
        <p className="text-gray-500 mb-8">Paste a link to any property photo and AI will make it look professional instantly.</p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <label className="text-sm text-gray-500 mb-1 block">Photo URL</label>
          <div className="flex gap-3">
            <input
              type="text"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
              placeholder="https://example.com/property-photo.jpg"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
            />
            <button
              onClick={handleEnhance}
              disabled={loading || !imageUrl}
              className="bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition disabled:opacity-50"
            >
              {loading ? 'Enhancing...' : 'Enhance'}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">Tip: right click any property image online and copy the image address</p>
        </div>

        {loading && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <p className="font-medium text-gray-900">Enhancing your photo...</p>
            <p className="text-sm text-gray-500 mt-1">This takes about 30 seconds</p>
          </div>
        )}

        {enhancedUrl && (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Original</p>
              <img src={imageUrl} alt="Original" className="w-full rounded-lg object-cover" />
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-xs font-medium text-green-500 uppercase tracking-wide mb-3">Enhanced</p>
              <img src={enhancedUrl} alt="Enhanced" className="w-full rounded-lg object-cover" />
              <a href={enhancedUrl} className="mt-3 block text-center text-sm text-green-500 font-medium">
                Download enhanced photo
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}