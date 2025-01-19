// src/components/landing/HeroSection.tsx
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">AI-Powered</span>
                <span className="block text-blue-600">Legal Services</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Get instant legal assistance powered by advanced AI technology. 
                Connect with qualified lawyers when needed. Making legal services 
                accessible and affordable for everyone.
              </p>
              <div className="mt-10 sm:flex sm:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/auth"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Start Free Trial
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="#how-it-works"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0">
              <div className="relative space-y-4">
                {/* Add hero image or animation here */}
                <div className="aspect-w-16 aspect-h-9 bg-blue-100 rounded-xl animate-pulse">
                  {/* Placeholder for hero image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}