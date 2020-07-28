import { useLocation } from 'react-router-dom'
import * as queryString from 'query-string'
import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import './BrandSession.css'
import CloseIcon from '../../../assets/Close.svg'
import { AppContext } from '../../AppContext'
import { Modal } from '../agenda/Modal'
import { RelationContext } from './RelationContext'

const url = 'https://tp1lwwnt8j.execute-api.eu-central-1.amazonaws.com/development/agenda/record'

function BrandSession(props) {
    const [isModalOpen, setModalState] = useState(false)
    const { hasRelation, postRelation } = useContext(RelationContext)
    const { userId } = useContext(AppContext)
    const location = useLocation()
    const params = queryString.parse(location.search)
    let videoId
    if (typeof params.videoId !== 'undefined') {
        videoId = params.videoId
    } else {
        videoId = ''
    }
    useEffect(() => {
        window['dataLayer'] = window['dataLayer'] || []
        window['dataLayer'].push({
            videoId: videoId,
        })
    }, [videoId])

    useEffect(() => {
        const recordVisit = async () => {
            await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ userId, videoId, source: 'brandSession' }),
            })
        }
        recordVisit()
    }, [])

    let videoUrl
    let chatUrl
    let isMainStage = false

    if (videoId === '194954') {
        isMainStage = true
        videoUrl = 'https://vimeo.com/event/194954/embed'
        chatUrl = 'https://vimeo.com/event/194954/chat/'
    } else {
        videoUrl = `https://player.vimeo.com/video/${videoId}`
        chatUrl = `https://vimeo.com/live-chat/${videoId}/chat/`
    }

    const handleClick = (ev) => {
        ev.preventDefault()
        setModalState((prevState) => !prevState)
    }

    const handleClickToAction = () => {
        postRelation()
        setModalState((prevState) => !prevState)
    }
    document.title = 'brand session'
    return (
        <div>
            <Modal open={isModalOpen}>
                <ModalBody handleClick={handleClick} handleClickToAction={handleClickToAction} />
            </Modal>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <img
                    width='471px'
                    src='https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/fc_logo.png'
                />
                <img
                    width='400px'
                    src='https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/dfw_logo_small.png'
                />
            </div>
            <div style={{ display: 'flex' }} className='vimeoWrapper'>
                <div
                    className='video'
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
                            height: '100%',
                        }}
                    ></iframe>
                </div>
                <div
                    className='chat'
                    style={{
                        width: '400px',
                        //padding: '56.25% 0 0 0',
                    }}
                >
                    <iframe src={chatUrl} width='400px' height='600' frameBorder='0'></iframe>
                </div>
            </div>
            <div className='belowVideo'>
                <div className='leftWrapper'>
                    <div className='hint'>
                        If no video is playing yet please go back to agenda and click on the event
                        again. This happens when you were to early.{' '}
                    </div>
                    {!isMainStage && (
                        <div className='contactButtonWrapper'>
                            <RelationButton
                                hasRelation={hasRelation}
                                handleClick={handleClick}
                                userId={userId}
                            />
                        </div>
                    )}
                </div>

                <div className='howToChat'>
                    <img src='https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/eventmobiData/howToChat.png' />
                </div>
            </div>
        </div>
    )
}

function RelationButton({ hasRelation, handleClick, userId }) {
    if (!userId) return null

    if (hasRelation) {
        return (
            <div className='neutralAction' style={{ width: 'unset', maxWidth: 'unset' }}>
                This brand already has your contact data
            </div>
        )
    }

    return (
        <a href='#' onClick={(ev) => handleClick(ev)} className='contactButton'>
            Get in contact with the brand
        </a>
    )
}

function ModalBody({ handleClick, handleClickToAction }) {
    return (
        <>
            <div className='closeButton button' onClick={handleClick}>
                <CloseIcon width='20px' height='20px' style={{ fill: '#93b0b9' }} />
            </div>
            <div className='contactModal'>
                <div className='contactText'>
                    <p>
                        Wir werden der Brand Ihre Kontaktdaten zukommen lassen, damit sie sich bei
                        Ihnen melden kann.
                    </p>
                    <p>
                        We will forward your contact data to the brand so that it can contact you.
                    </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='callToAction button' onClick={handleClickToAction}>
                        Yes
                    </div>
                    <div className='neutralAction button' onClick={handleClick}>
                        Cancel
                    </div>
                </div>
            </div>
        </>
    )
}

export { BrandSession }
