import InquiryForm from "@/components/inquiry-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inquiry Form | NatureGreen",
  description: "Submit your inquiry to NatureGreen. We're here to help with your sustainable solutions needs.",
}

export default function InquiryFormPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl mb-3">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or need more information? Fill out the form below and our team will get back to you as soon
              as possible.
            </p>
          </div>

          <InquiryForm />
        </div>
      </div>
    </main>
  )
}

