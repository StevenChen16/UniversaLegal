"use client"

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { 
  MessageSquare, 
  FileText, 
  Settings, 
  Menu,
  X
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // Redirect if not authenticated
  if (status === 'unauthenticated') {
    redirect('/auth')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 z-30`}
        style={{ width: '240px' }}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link href="/" className="text-xl font-bold text-blue-600">
            UniversaLegal
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <MessageSquare className="h-5 w-5" />
              <span>AI Chat</span>
            </Link>
            <Link
              href="/dashboard/documents"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <FileText className="h-5 w-5" />
              <span>Documents</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div
        className={`${
          isSidebarOpen ? 'md:pl-60' : ''
        } min-h-screen`}
      >
        {/* Top bar */}
        <div className="bg-white shadow">
          <div className="h-16 flex items-center justify-between px-4">
            <button
              className="md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
            <div className="flex items-center space-x-4">
              {session?.user?.email && (
                <span className="text-gray-700">{session.user.email}</span>
              )}
            </div>
          </div>
        </div>

        {/* Content area */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}