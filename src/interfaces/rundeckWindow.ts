import {RundeckBrowser} from 'ts-rundeck'

export interface RundeckContext {
    rdBase: string
    apiVersion: string
    projectName: string
    activeTour: string
    activeTourStep: string
    token: RundeckToken
    tokens: {
        [key:string]: RundeckToken
    }
    rundeckClient: RundeckBrowser,
    data:{[key:string]:string}
}

export interface RundeckToken {
    TOKEN: string
    URI: string
}
