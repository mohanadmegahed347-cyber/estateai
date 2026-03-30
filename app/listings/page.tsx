'use client'

import { useState } from 'react'

export default function Listings() {
  const [form, setForm] = useState({
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    features: '',
    neighborhood: '',
    price: ''
  })
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/generate-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      setDescription(data.description)
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
        <a href="/dashboard" className="text-sm text-gray-500 hover:text-gray-900">← Back to Dashboard</a>
      </div>

      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Listing Description Generator</h2>
        <p className="text-gray-500 mb-8">Fill in the details and AI will write a professional listing instantly.</p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Bedrooms</label>
              <input
                type="number"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                placeholder="4"
                value={form.bedrooms}
                onChange={e => setForm({...form, bedrooms: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Bathrooms</label>
              <input
                type="number"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                placeholder="3"
                value={form.bathrooms}
                onChange={e => setForm({...form, bathrooms: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Square Feet</label>
              <input
                type="number"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                placeholder="2400"
                value={form.sqft}
                onChange={e => setForm({...form, sqft: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Price</label>
              <input
                type="number"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                placeholder="485000"
                value={form.price}
                onChange={e => setForm({...form, price: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 mb-1 block">Neighborhood</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
              placeholder="Lake Nona, Orlando"
              value={form.neighborhood}
              onChange={e => setForm({...form, neighborhood: e.target.value})}
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 mb-1 block">Special Features</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
              placeholder="pool, renovated kitchen, hardwood floors"
              value={form.features}
              onChange={e => setForm({...form, features: e.target.value})}
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Description'}
          </button>
        </div>

        {description && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Generated Description</h3>
            <p className="text-gray-900 leading-relaxed">{description}</p>
            <button
              onClick={() => navigator.clipboard.writeText(description)}
              className="mt-4 text-sm text-green-500 hover:text-green-600 font-medium"
            >
              Copy to clipboard
            </button>
          </div>
        )}
      </div>
    </main>
  )
}