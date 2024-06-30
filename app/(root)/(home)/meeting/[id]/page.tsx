"use client"
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useGetCallByID } from '@/hooks/useGetCallByID'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

const Meeting = ({ params:{ id } }: { params: { id: string } }) => {
  const { user,isLoaded }=useUser() 
  const [isSetupComplete, setisSetupComplete] = useState(false)
  const { call,isCallLoading }=useGetCallByID(id);
  if(!isLoaded || isCallLoading)
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup />
          ):(
            <MeetingRoom />
          )}

        </StreamTheme>
      </StreamCall>
    </main>
    //<div>Meeting Room: #{params.id}</div>
  )
}

export default Meeting