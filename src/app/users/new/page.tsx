import React from 'react';
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/ui/back-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Building, MapPin, Save } from "lucide-react"
import { useRouter } from "next/navigation"

interface UserFormData {
  name: string
  username: string
  email: string
  phone: string
  website: string
  street: string
  suite: string
  city: string
  zipcode: string
  companyName: string
  companyCatchPhrase: string
  companyBs: string
}

export default function NewUserPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    companyName: '',
    companyCatchPhrase: '',
    companyBs: ''
  })

  const handleInputChange = (field: keyof UserFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('New user data:', formData)
      
      alert('User created successfully! (This is just a demo - no data was actually saved)')
      router.push('/')
    } catch (error) {
      alert('Error creating user. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.username && formData.email

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <BackButton fallbackHref="/" label="Back to Users" />
        <div>
          <h1 className="text-2xl font-bold">Create New User</h1>
          <p className="text-muted-foreground">Add a new user to the system</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </CardTitle>
            <CardDescription>
              Basic user details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="username">Username *</Label>
                <Input
                  id="username"
                  placeholder="johndoe"
                  value={formData.username}
                  onChange={handleInputChange('username')}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder="johndoe.com"
                value={formData.website}
                onChange={handleInputChange('website')}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Address
            </CardTitle>
            <CardDescription>
              Physical address information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="street">Street</Label>
                <Input
                  id="street"
                  placeholder="123 Main St"
                  value={formData.street}
                  onChange={handleInputChange('street')}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="suite">Suite/Apt</Label>
                <Input
                  id="suite"
                  placeholder="Apt 456"
                  value={formData.suite}
                  onChange={handleInputChange('suite')}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleInputChange('city')}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="zipcode">Zip Code</Label>
                <Input
                  id="zipcode"
                  placeholder="10001"
                  value={formData.zipcode}
                  onChange={handleInputChange('zipcode')}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              Company
            </CardTitle>
            <CardDescription>
              Employment and company details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                placeholder="Acme Corp"
                value={formData.companyName}
                onChange={handleInputChange('companyName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyCatchPhrase">Company Catchphrase</Label>
              <Input
                id="companyCatchPhrase"
                placeholder="Innovating for tomorrow"
                value={formData.companyCatchPhrase}
                onChange={handleInputChange('companyCatchPhrase')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyBs">Business Description</Label>
              <Textarea
                id="companyBs"
                placeholder="Describe what the company does..."
                value={formData.companyBs}
                onChange={handleInputChange('companyBs')}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-end gap-4 pt-6">
          <BackButton fallbackHref="/" label="Cancel" variant="outline" />
          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Create User
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
