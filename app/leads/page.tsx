'use client'

import { useState } from 'react'

const mockLeads = [
  { id: 1, name: 'James Thornton', phone: '407-555-0101', email: 'james@email.com', property_interest: '4bed - Lake Nona', stage: 'hot', last_contact: '2 hours ago' },
  { id: 2, name: 'Priya Mehta', phone: '407-555-0102', email: 'priya@email.com', property_interest: 'Condo - Downtown', stage: 'warm', last_contact: '1 day ago' },
  { id: 3, name: 'Carlos Rivera', phone: '407-555-0103', email: 'carlos@email.com', property_interest: '3bed - Windermere', stage: 'new', last_contact: '3 days ago' },
  { id: 4, name: 'Sarah Johnson', phone: '407-555-0104', email: 'sarah@email.com', property_interest: '2bed - Winter Park', stage: 'warm', last_contact: '5 hours ago' },
  { id: 5, name: 'Mike Williams', phone: '407-555-0105', email: 'mike@email.com', property_interest: '5bed - Dr Phillips', stage: 'hot', last_contact: '30 min ago' },
]

const stageBadge = (stage: string) => {
  if (stage === 'hot') return <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">Hot</span>
  if (stage === 'warm') return <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">Warm</span>
  return <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">New</span>
}

export default function Leads() {
  const [search, setSearch] = useState('')

  const filtered = mockLeads.filter(lead =>
    lead.name.toLowerCase().includes(search.toLowerCase()) ||
    lead.property_interest.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Estate<span className="text-green-500">AI</span></h1>
        <a href="/dashboard" className="text-sm text-gray-500 hover:text-gray-900">← Back to Dashboard</a>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Leads</h2>
            <p className="text-gray-500 text-sm">{filtered.length} contacts</p>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition">
            + Add Lead
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search leads..."
            className="w-full max-w-sm border border-gray-200 rounded-lg px-4 py-2 text-sm"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide px-6 py-3">Name</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide px-6 py-3">Property Interest</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide px-6 py-3">Contact</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide px-6 py-3">Last Contact</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide px-6 py-3">Stage</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead, i) => (
                <tr key={lead.id} className={`border-b border-gray-100 hover:bg-gray-50 transition ${i === filtered.length - 1 ? 'border-0' : ''}`}>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{lead.name}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{lead.property_interest}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{lead.phone}</p>
                    <p className="text-xs text-gray-400">{lead.email}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{lead.last_contact}</td>
                  <td className="px-6 py-4">{stageBadge(lead.stage)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
