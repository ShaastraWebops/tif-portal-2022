import React from 'react'


interface UserContext{
    role: string
    setRole: any
}

let initContext: UserContext = {
    role: 'USER',
    setRole: (C: string) => {}
}

export const Usercontext = React.createContext(initContext);