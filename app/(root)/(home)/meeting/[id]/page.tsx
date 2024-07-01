"use client"
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useGetCallById } from '@/hooks/useGetCallByID'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

const Meeting = ({ params:{ id } }: { params: { id: string } }) => {
  const { user,isLoaded }=useUser() 
  const [isSetupComplete, setisSetupComplete] = useState(false)
  const { call,isCallLoading }=useGetCallById(id);
  if(!isLoaded || isCallLoading)
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setisSetupComplete}/>
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