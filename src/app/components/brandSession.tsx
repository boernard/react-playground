import { withRouter, useLocation } from 'react-router-dom'
import * as queryString from 'query-string'
import * as React from 'react'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'

function BrandSession(props) {
    useEffect(() => {
        document.title = 'DFW Session'
    }, [])

    const location = useLocation()
    const params = queryString.parse(location.search)
    let videoId
    if (typeof params.videoId !== 'undefined') {
        videoId = params.videoId
    } else {
        videoId = ''
    }
    const videoUrl = `https://player.vimeo.com/video/${videoId}`
    const chatUrl = `https://vimeo.com/event/${videoId}/chat/`

    return (
        <div>
            <div style={{ width: '100%' }}>
                <img
                    width='471px'
                    src='https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/dfw_logo.png'
                />
            </div>
            <div style={{ display: 'flex' }}>
                <div
                    style={{
                        //padding: '56.25% 0 0 0',
                        position: 'relative',
                        width: '80%',
                        flexGrow: 1,
                    }}
                >
                    <iframe
                        src={videoUrl}
                        allow='autoplay; fullscreen'
                        frameBorder='0'
                        allowFullScreen
                        style={{
                            position: 'relative',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '600px',
                        }}
                    ></iframe>
                </div>
                <div
                    style={{
                        width: '400px',
                        //padding: '56.25% 0 0 0',
                    }}
                >
                    <iframe src={chatUrl} width='400px' height='600' frameBorder='0'></iframe>
                </div>
            </div>
        </div>
    )
}

function readCookie() {
    const cookies = new Cookies()
    console.log(cookies.get('id')) // Pacman
    cookies.set('id', 'Pacman', { path: '/' })
}

export { BrandSession }
